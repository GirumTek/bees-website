import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  if (req.headers.get("x-revalidate-secret") !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const tag = body?._type;

    if (tag) {
      revalidateTag(tag, "max");
      
      if (tag === 'event') revalidatePath('/events');
      if (tag === 'executive') revalidatePath('/exec');
      if (tag === 'impact') revalidatePath('/impact');

      return NextResponse.json({ revalidated: true, tag, now: Date.now() });
    }

    return NextResponse.json({ message: "No tag found" }, { status: 400 });
  } catch (err) {
    console.error("Revalidation Error:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}