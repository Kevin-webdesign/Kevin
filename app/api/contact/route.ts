import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message: ${subject}`,
      html: `
  <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px;">
    <div style="max-width:600px; margin:auto; background:white; padding:24px; border-radius:10px; border:1px solid #eee;">

      <h2 style="color:#111; margin-bottom:10px;">📩 New Portfolio Message</h2>

      <p style="color:#555; font-size:14px;">
        You received a new message from your portfolio contact form.
      </p>

      <hr style="margin:20px 0;" />

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>

      <div style="margin-top:20px;">
        <strong>Message:</strong>
        <p style="background:#f5f5f5; padding:12px; border-radius:6px; margin-top:8px; white-space:pre-line;">
          ${message}
        </p>
      </div>

      <hr style="margin:20px 0;" />

      <p style="font-size:12px; color:#888;">
        Sent from your portfolio contact form
      </p>

    </div>
  </div>
  `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
