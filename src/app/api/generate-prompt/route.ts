import { NextRequest, NextResponse } from "next/server";

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const HF_MODEL = process.env.HUGGINGFACE_MODEL || "mistralai/Mistral-7B-Instruct-v0.3";

interface GeneratePromptRequest {
  promptType: string;
  aiTool: string;
  task: string;
  tone: string;
  goal: string;
}

function buildSystemPrompt(req: GeneratePromptRequest): string {
  return `You are an expert prompt engineer. Your job is to craft highly effective, well-structured prompts for AI tools.

Rules:
- Write a single, ready-to-use prompt (no extra commentary).
- Tailor it for the specified AI tool.
- Use the exact category, tone, and goal provided.
- Include role assignment, context, task instructions, format expectations, and constraints where relevant.
- Keep it concise but thorough (150-400 words).`;
}

function buildUserPrompt(req: GeneratePromptRequest): string {
  const parts: string[] = [];

  parts.push(`Category / Prompt Type: ${req.promptType}`);
  parts.push(`Target AI Tool: ${req.aiTool}`);
  parts.push(`Task / Topic: ${req.task}`);
  parts.push(`Tone / Style: ${req.tone}`);
  parts.push(`Goal / Desired Outcome: ${req.goal}`);

  return parts.join("\n");
}

// ─── Template fallback (no API key) ───────────────────────────────
const templateDatabase: Record<string, string[]> = {
  Coding: [
    "Act as a senior software engineer. {task}\n\nProvide:\n1. A clear, step-by-step implementation approach\n2. Production-ready code with comments\n3. Explanation of design decisions\n4. Edge cases and how to handle them\n5. Performance considerations\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
    "You are an expert developer specializing in {promptType}. {task}\n\nDeliverables:\n- Complete, well-tested code\n- Architecture diagram or file structure\n- Setup and usage instructions\n- Common pitfalls to avoid\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
  ],
  Marketing: [
    "You are a seasoned marketing strategist. {task}\n\nInclude:\n1. Target audience breakdown with personas\n2. Core messaging framework and value propositions\n3. Multi-channel strategy (organic + paid)\n4. Content calendar outline (first 30 days)\n5. KPIs and measurement plan\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
    "Act as a growth marketing expert. {task}\n\nProvide:\n- Competitive analysis and market positioning\n- Customer journey map with touchpoints\n- Conversion-optimized copy for key channels\n- A/B testing hypotheses\n- Budget allocation recommendations\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
  ],
  "Website Design": [
    "You are a lead UX/UI designer. {task}\n\nDeliver:\n1. Information architecture and sitemap\n2. Wireframe descriptions for key screens\n3. Visual design system (colors, typography, components)\n4. Accessibility considerations (WCAG 2.1)\n5. Responsive design breakpoints\n6. Micro-interaction descriptions\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
    "Act as an expert web designer and developer. {task}\n\nInclude:\n- Hero section concept and copy\n- Navigation structure and user flow\n- Component library recommendations\n- Performance optimization strategies\n- SEO best practices\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
  ],
  Business: [
    "You are a business strategy consultant. {task}\n\nProvide:\n1. Executive summary\n2. Market analysis and opportunity sizing\n3. Competitive landscape and differentiation\n4. Revenue model and pricing strategy\n5. Go-to-market plan with milestones\n6. Risk assessment and mitigation\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
    "Act as a management consultant. {task}\n\nDeliver:\n- SWOT analysis\n- Stakeholder mapping\n- Operational efficiency recommendations\n- Financial projections (12-month outline)\n- Implementation roadmap with priorities\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
  ],
  "Content Writing": [
    "You are an expert content strategist and writer. {task}\n\nInclude:\n1. SEO-optimized headline options (3 variations)\n2. Structured outline with H2/H3 headings\n3. Engaging introduction hook\n4. Body sections with data points and examples\n5. Compelling conclusion with CTA\n6. Meta description and social sharing copy\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
    "Act as a professional copywriter. {task}\n\nProvide:\n- Audience analysis and pain points\n- Core narrative and storytelling angle\n- Section-by-section draft\n- Power words and emotional triggers\n- Readability optimization\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
  ],
  "Image Generation": [
    "Create a detailed image generation prompt for the following concept: {task}\n\nFormat the prompt with:\n- Subject and composition description\n- Art style and medium (photorealistic, illustration, 3D, etc.)\n- Lighting and atmosphere details\n- Camera angle and framing\n- Color palette and mood\n- Quality modifiers (4K, ultra-detailed, cinematic)\n\nTool: {aiTool}\nTone: {tone}\nGoal: {goal}",
  ],
};

function generateTemplateFallback(req: GeneratePromptRequest): string {
  const templates = templateDatabase[req.promptType] || templateDatabase["Coding"];
  const template = templates[Math.floor(Math.random() * templates.length)];

  return template
    .replace("{promptType}", req.promptType)
    .replace("{aiTool}", req.aiTool)
    .replace("{task}", req.task)
    .replace("{tone}", req.tone)
    .replace("{goal}", req.goal);
}

// ─── POST handler ──────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body: GeneratePromptRequest = await request.json();

    // Validate required fields
    if (!body.task?.trim()) {
      return NextResponse.json(
        { error: "Task description is required." },
        { status: 400 }
      );
    }

    // If no API key, fall back to template-based generation
    if (!HF_API_KEY) {
      // Simulate a small delay for realistic UX
      await new Promise((r) => setTimeout(r, 800));

      const prompt = generateTemplateFallback({
        promptType: body.promptType || "Coding",
        aiTool: body.aiTool || "ChatGPT",
        task: body.task,
        tone: body.tone || "Professional",
        goal: body.goal || "Generate a comprehensive response",
      });

      return NextResponse.json({ prompt, source: "template" });
    }

    // ─── HuggingFace Inference API ─────────────────────────────
    const systemPrompt = buildSystemPrompt(body);
    const userPrompt = buildUserPrompt(body);

    const response = await fetch(
      `https://api-inference.huggingface.co/models/${HF_MODEL}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `<s>[INST] ${systemPrompt}\n\n---\n\n${userPrompt} [/INST]`,
          parameters: {
            max_new_tokens: 1024,
            temperature: 0.7,
            top_p: 0.95,
            return_full_text: false,
            repetition_penalty: 1.15,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("HuggingFace API error:", errText);

      // Fallback to templates on API error
      const prompt = generateTemplateFallback(body);
      return NextResponse.json({ prompt, source: "template" });
    }

    const data = await response.json();

    // HuggingFace returns an array with generated text
    let generatedText = "";
    if (Array.isArray(data) && data[0]?.generated_text) {
      generatedText = data[0].generated_text;
    } else if (data?.generated_text) {
      generatedText = data.generated_text;
    } else if (Array.isArray(data) && data[0]?.[0]?.generated_text) {
      generatedText = data[0][0].generated_text;
    }

    // Clean up: remove the echoed input if present
    if (generatedText.includes("[/INST]")) {
      generatedText = generatedText.split("[/INST]").pop()?.trim() || generatedText;
    }

    if (!generatedText?.trim()) {
      const prompt = generateTemplateFallback(body);
      return NextResponse.json({ prompt, source: "template" });
    }

    return NextResponse.json({ prompt: generatedText.trim(), source: "ai" });
  } catch (error) {
    console.error("Prompt generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate prompt. Please try again." },
      { status: 500 }
    );
  }
}
