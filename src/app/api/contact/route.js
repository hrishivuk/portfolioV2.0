import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email using Resend (if API key is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const contactEmail = process.env.CONTACT_EMAIL || process.env.RESEND_FROM_EMAIL;
        
        if (!contactEmail) {
          throw new Error("CONTACT_EMAIL or RESEND_FROM_EMAIL environment variable is not set");
        }

        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
          to: [contactEmail],
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #333; border-bottom: 2px solid #4ade80; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong style="color: #666;">Name:</strong> <span style="color: #333;">${name}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #666;">Email:</strong> <span style="color: #333;">${email}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #666;">Subject:</strong> <span style="color: #333;">${subject}</span></p>
              </div>
              <div style="margin: 20px 0;">
                <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              <p style="color: #999; font-size: 12px; text-align: center;">
                Sent from portfolio contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          `,
          replyTo: email,
        });

        if (process.env.NODE_ENV === "development") {
          console.log("Email sent successfully via Resend");
        }
      } catch (emailError) {
        // Log error but don't fail the request in development
        if (process.env.NODE_ENV === "development") {
          console.error("Resend email error:", emailError);
          console.log("Falling back to console log (development mode)");
        } else {
          // In production, re-throw the error
          throw emailError;
        }
      }
    } else {
      // Fallback for development when API key is not set
      if (process.env.NODE_ENV === "development") {
        console.log("⚠️  RESEND_API_KEY not set. Email not sent.");
        console.log("Contact form submission:", {
          name,
          email,
          subject,
          message,
          timestamp: new Date().toISOString(),
        });
      }
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form error:", error);
    }
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
