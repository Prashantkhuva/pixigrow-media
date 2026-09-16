import { NextRequest, NextResponse } from "next/server";

// Lazy-init Resend client (avoids build-time crash when API key is missing)
async function getEmailClient() {
  const { Resend } = await import("resend");
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set. Add it to .env.local");
  }
  return new Resend(apiKey);
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  brief: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.email || !body.brief) {
      return NextResponse.json(
        { error: "Name, email, and brief are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const resend = await getEmailClient();

    await resend.emails.send({
      from: "PixiGrow Media <onboarding@resend.dev>",
      to: "contact@pixigrowmedia.com",
      subject: `[PixiGrow] New Inquiry from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
        ${body.service ? `<p><strong>Service Interested In:</strong> ${body.service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${body.brief}</p>
      `,
    });

    await resend.emails.send({
      from: "PixiGrow Media <onboarding@resend.dev>",
      to: body.email,
      subject: "Thanks for reaching out to PixiGrow Media",
      html: `
        <h2>Thanks for your inquiry!</h2>
        <p>Hi ${body.name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br/>The PixiGrow Media Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to process form submission";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
