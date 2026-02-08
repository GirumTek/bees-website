import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache"; // Import revalidatePath

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const tag = body?._type;

    console.log("REVALIDATE TRIGGERED. Payload:", body);

    if (tag) {
      
      revalidateTag(tag);
      
      
      if (tag === 'event') revalidatePath('/events');
      if (tag === 'executive') revalidatePath('/exec');

      return NextResponse.json({ revalidated: true, tag, now: Date.now() });
    }

    return NextResponse.json({ message: "No tag found" }, { status: 400 });
  } catch (err) {
    console.error("Revalidation Error:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}