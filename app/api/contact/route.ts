import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

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

  emailjs.init({
    publicKey: "27hRrFjl80h5l6Of5",
    privateKey: "GOLyWzFEgeNhBrGfhlPFm",
  });
  const resp = await emailjs.send("service_qz2n5at", "template_gfwgsyp", {
    email,
    text,
  });

  if (resp.status != 200) {
    return NextResponse.json(
      {
        message: "Email limit has been reached. Please try again tomorrow.",
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({ message: "Successfully sent!" });
}
