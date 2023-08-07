import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  console.log("LDSKJ ", body);
  if (Object.keys(body).length === 0) {
    return NextResponse.json(
      { message: "Missing parameters. " },
      { status: 403 }
    );
  }
  const { email, text } = body;
  console.log("DATA ", body);
  if (!email || !text) {
    return NextResponse.json(
      { message: "Invalid parameters. " },
      { status: 403 }
    );
  }

  return NextResponse.json({ message: "Successfully sent!" });
}
