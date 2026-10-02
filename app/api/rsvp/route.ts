import { NextResponse } from "next/server";
import { processRSVP, RSVPSubmission } from "@/lib/sheetBackend";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RSVPSubmission;

    if (!body || !body.fullName || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Full name and phone number are required." },
        { status: 400 }
      );
    }

    const result = await processRSVP(body);

    return NextResponse.json({
      message: "RSVP recorded successfully",
      ...result,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[API /api/rsvp error]", error);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
