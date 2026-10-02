import { NextResponse } from "next/server";
import { processWish, WishSubmission } from "@/lib/sheetBackend";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WishSubmission;

    if (!body || !body.wish || !body.wish.trim()) {
      return NextResponse.json(
        { success: false, error: "Wish text is required." },
        { status: 400 }
      );
    }

    const result = await processWish(body);

    return NextResponse.json({
      message: "Wish recorded successfully",
      ...result,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[API /api/wishes error]", error);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
