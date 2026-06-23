import { NextRequest, NextResponse } from "next/server";
import { updateApplicationStatus, Application } from "@/lib/db";

const VALID_STATUSES: Application["status"][] = [
  "Pending",
  "Shortlisted",
  "Interview Scheduled",
  "Accepted",
  "Rejected"
];

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, adminPasskey } = body;
    const serverPasskey = process.env.ADMIN_PASSKEY || "admin123";

    if (!adminPasskey || adminPasskey !== serverPasskey) {
      return NextResponse.json(
        { error: "Unauthorized access. Invalid admin passkey." },
        { status: 401 }
      );
    }

    if (!id || !status) {
      return NextResponse.json(
        { error: "Application ID and status are required." },
        { status: 400 }
      );
    }

    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${VALID_STATUSES.join(", ")}` },
        { status: 400 }
      );
    }

    const success = await updateApplicationStatus(id, status);
    if (success) {
      return NextResponse.json({ success: true, message: "Status updated successfully." });
    } else {
      return NextResponse.json(
        { error: "Application not found." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error in internships status API:", error);
    return NextResponse.json(
      { error: "Failed to update status." },
      { status: 500 }
    );
  }
}

// Support POST fallback if some clients require POST for status changes
export async function POST(request: NextRequest) {
  return PUT(request);
}
