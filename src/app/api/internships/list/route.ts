import { NextRequest, NextResponse } from "next/server";
import { getApplications } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const clientPasskey = searchParams.get("adminPasskey") || request.headers.get("x-admin-passkey");
    const serverPasskey = process.env.ADMIN_PASSKEY || "admin123";

    if (!clientPasskey || clientPasskey !== serverPasskey) {
      return NextResponse.json(
        { error: "Unauthorized access. Invalid admin passkey." },
        { status: 401 }
      );
    }

    const list = await getApplications();
    return NextResponse.json(list);
  } catch (error) {
    console.error("Error in internships listing API:", error);
    return NextResponse.json(
      { error: "Failed to retrieve applications." },
      { status: 500 }
    );
  }
}
