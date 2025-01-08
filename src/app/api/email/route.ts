import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use another email provider like 'smtp.office365.com'
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Send an email to yourself
    await transporter.sendMail({
      from: `"Demo Scheduler" <${process.env.SMTP_USER}>`,
      to: data.email, // Replace with your email address
      subject: "New Demo Request",
      text: `
        A new demo request has been received:
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Organization: ${data.organization}
        Role: ${data.role}
        Participants: ${data.participantCount}
        Preferred Date: ${data.preferredDate}
        Preferred Time: ${data.preferredTime}
        Message: ${data.message}
      `,
    });

    // Send a confirmation email to the user
    await transporter.sendMail({
      from: `"Demo Scheduler" <${process.env.SMTP_USER}>`,
      to: data.email, // User's email address
      subject: "Demo Request Confirmation",
      text: `
        Hi ${data.name},

        Thank you for scheduling a demo with SomaNasi! Here are the details:
        - Date: ${data.preferredDate}
        - Time: ${data.preferredTime}

        We'll contact you shortly to confirm the session. If you have any questions, feel free to reach out.

        Regards,
        The SomaNasi Team
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send emails." },
      { status: 500 }
    );
  }
}
