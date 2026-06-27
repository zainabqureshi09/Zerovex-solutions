// src/app/api/internships/apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import { saveApplication, Application } from "@/lib/db";
import { notifyNewApplication } from "@/lib/whatsapp";

function generateApplicationId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const year = new Date().getFullYear();
  return `ZV-${year}-${result}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.error("[Internship Apply] Request Body:", body);

    // Validate required fields (camelCase names from frontend)
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "whatsapp",
      "city",
      "educationLevel",
      "selectedField",
      "skills",
      "portfolioUrl",
      "whyInternship",
      "availability",
      "consent",
    ];
    for (const field of requiredFields) {
      if (body[field] === undefined || body[field] === null || body[field] === "") {
        console.error(`[Internship Apply] Missing field: ${field}`);
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }
    if (!body.consent) {
      console.error("[Internship Apply] Consent not given");
      return NextResponse.json({ error: "Consent is required to submit the application." }, { status: 400 });
    }

    // Build object matching Supabase column names (snake_case)
    const dbApplication: Application = {
      // id omitted – Supabase can generate UUID if using default
      application_id: generateApplicationId(),
      selected_field: body.selectedField,
      full_name: body.fullName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      whatsapp: body.whatsapp.trim(),
      city: body.city.trim(),
      education_level: body.educationLevel.trim(),
      portfolio_url: body.portfolioUrl.trim(),
      skills: body.skills.trim(),
      why_internship: body.whyInternship.trim(),
      availability: body.availability.trim(),
      consent: !!body.consent,
      status: "Pending",
      // created_at omitted – default now()
    };

    // Save to Supabase (or fallback)
    try {
      await saveApplication(dbApplication);
    } catch (e) {
      console.error("[Internship Apply] Error saving to DB:", e);
      throw e;
    }

    // Notify via WhatsApp (non‑critical)
    try {
      await notifyNewApplication(dbApplication);
    } catch (e) {
      console.warn("[Internship Apply] WhatsApp notification failed:", e);
    }

    // Optional Google Sheets webhook
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dbApplication),
        });
      } catch (err) {
        console.error("[Internship Apply] Google Sheets webhook failed:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
      applicationId: dbApplication.application_id,
    });
  } catch (error) {
    console.error("[Internship Apply] Unexpected error:", error);
    console.error("Stack:", (error as any)?.stack);
    return NextResponse.json({ error: "Failed to submit application. Please try again." }, { status: 500 });
  }
}
