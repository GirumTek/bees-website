import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); //
    const tag = body?._type; // Use the optional chain '?' to prevent crashes

    console.log("LOG: Received revalidate request for tag:", tag);

    if (!tag) {
      return NextResponse.json({ message: "No tag provided" }, { status: 400 });
    }

    
    await revalidateTag(tag,'page'); 

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("LOG: Revalidation error:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}