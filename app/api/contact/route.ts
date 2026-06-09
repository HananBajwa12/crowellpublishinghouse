import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const { first_name, last_name, email, phone, message } = body;

    if (!first_name || !last_name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { error: dbError } = await supabaseAdmin.from("contact_leads").insert({
      first_name,
      last_name,
      email,
      phone,
      message,
    });

    if (dbError) {
      return NextResponse.json(
        { error: "Supabase insert error", details: dbError },
        { status: 500 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@crowellpublishinghouse.com";

    const emailResult = await resend.emails.send({
      from: `Crowell Publishing <${receiverEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Consultation Request from ${first_name} ${last_name}`,
      html: `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${first_name} ${last_name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
    });

    console.log("EMAIL RESULT:", emailResult);
    return NextResponse.json({
      success: true,
      message: "Lead saved and email sent",
      emailResult,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}