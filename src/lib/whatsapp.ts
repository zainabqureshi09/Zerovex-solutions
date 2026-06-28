// src/lib/whatsapp.ts
import twilio from "twilio";
import type { Application } from "./db";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_WHATSAPP_FROM; // e.g., whatsapp:+14155238886
const adminNumber = process.env.WHATSAPP_ADMIN_NUMBER; // optional admin recipient

/**
 * Send a WhatsApp message via Twilio.
 * Returns true if the request succeeded, false otherwise.
 */
export async function sendWhatsAppMessage(to: string, body: string): Promise<boolean> {
  if (!accountSid || !authToken || !fromNumber) {
    console.warn("Twilio credentials are not set. Skipping WhatsApp notification.");
    return false;
  }
  try {
    const client = twilio(accountSid, authToken);
    await client.messages.create({
      from: fromNumber,
      to: `whatsapp:${to}`,
      body,
    });
    return true;
  } catch (e) {
    console.error("WhatsApp notification failed:", e);
    return false;
  }
}

/** Send notification for a new internship application */
export async function notifyNewApplication(app: Application): Promise<void> {
  // Use snake_case field names matching the Application interface
  const message = `✅ Your application (ID: ${app.application_id}) for the ${app.selected_field} internship has been received. We will review it soon.`;
  // Notify applicant
  await sendWhatsAppMessage(app.whatsapp, message);

  // Optional admin notification
  if (adminNumber) {
    const adminMsg = `📨 New internship application received. ID: ${app.application_id}, Candidate: ${app.full_name}, Field: ${app.selected_field}`;
    await sendWhatsAppMessage(adminNumber, adminMsg);
  }
}
