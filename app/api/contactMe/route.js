// app/api/contact/route.js
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, number, message } = await request.json();

  const transporter = nodemailer.createTransport({
    // @ts-ignore
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${name} <${"akaudeh@gmail.com"}>`,
    to: "Swifttech@gmail.com",
    subject: `New message from ${name}, ${email}, ${number}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
