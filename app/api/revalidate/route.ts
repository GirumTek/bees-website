import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const secret = req.headers.get("x-sanity-signature");

    
    console.log("REVALIDATE TRIGGERED. Payload:", JSON.stringify(body));

    if (!body._type) {
      console.error("No _type found in body. Check Sanity Projection settings.");
      return NextResponse.json({ message: "No type provided" }, { status: 400 });
    }

    // Forces an immediate cache dump
    await revalidateTag(body._type, { expire: 0 } as any);

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(), 
      tag: body._type 
    });
  } catch (err) {
    console.error("Revalidation Error:", err);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}