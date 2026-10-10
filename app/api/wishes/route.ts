import { NextResponse } from "next/server";
import { processWish, WishSubmission, getWishes, likeWish } from "@/lib/sheetBackend";

export async function GET() {
  try {
    const wishes = await getWishes();
    return NextResponse.json({ success: true, data: wishes });
  } catch (error) {
    console.error("[API /api/wishes GET error]", error);
    return NextResponse.json({ success: false, data: [] }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.action === "like") {
      const result = await likeWish(body.id);
      return NextResponse.json({ success: true, ...result });
    }

    // Default: submit new wish
    const wishData = body as WishSubmission;
    if (!wishData || !wishData.wish || !wishData.wish.trim()) {
      return NextResponse.json(
        { success: false, error: "Wish text is required." },
        { status: 400 }
      );
    }

    const result = await processWish(wishData);

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
