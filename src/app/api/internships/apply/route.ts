import { NextRequest, NextResponse } from "next/server";
import { saveApplication, Application } from "@/lib/db";

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
    
    // Validate required fields
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
      "consent"
    ];
    
    for (const field of requiredFields) {
      if (body[field] === undefined || body[field] === null || body[field] === "") {
        return NextResponse.json(
          { error: `Missing field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    if (!body.consent) {
      return NextResponse.json(
        { error: "Consent is required to submit the application." },
        { status: 400 }
      );
    }
    
    const id = generateApplicationId();
    const newApplication: Application = {
      id,
      fullName: body.fullName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      whatsapp: body.whatsapp.trim(),
      city: body.city.trim(),
      educationLevel: body.educationLevel.trim(),
      selectedField: body.selectedField,
      skills: body.skills.trim(),
      portfolioUrl: body.portfolioUrl.trim(),
      whyInternship: body.whyInternship.trim(),
      availability: body.availability.trim(),
      consent: !!body.consent,
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    
    // 1. Save to DB (Firestore / local file fallback)
    await saveApplication(newApplication);
    
    // 2. Send to Google Sheets Webhook if configured
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newApplication)
        });
      } catch (err) {
        console.error("Google Sheets webhook execution failed:", err);
      }
    }
    
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
      applicationId: id
    });
  } catch (error) {
    console.error("Error in internship submission API:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
