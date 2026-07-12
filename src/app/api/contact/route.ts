import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject_type } = await req.json();

    if (!email || !message || !name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Save to Supabase for admin panel
    try {
      const db = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { autoRefreshToken: false, persistSession: false } },
      );
      await db.from("contact_submissions").insert({ name, email, subject_type: subject_type ?? "general", message });
    } catch { /* non-blocking */ }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const subjectLabel = subject_type === "partnership" ? "Partnership" : subject_type === "general" ? "General" : "Support";

    const autoReplySubject =
      subject_type === "partnership" ? "Thanks for reaching out about a partnership!" :
      subject_type === "general" ? "We received your message!" :
      "We received your message!";

    const autoReplyHeading =
      subject_type === "partnership" ? `Hi ${name}, we'd love to explore this! 🤝` :
      subject_type === "general" ? `Hi ${name}, we got your message!` :
      `Hi ${name}, we got your message!`;

    const autoReplyBody =
      subject_type === "partnership"
        ? `Thanks for getting in touch about a partnership. We've received your inquiry and will review it carefully. We'll get back to you within 2–3 business days.`
        : subject_type === "general"
        ? `Thanks for reaching out to JustLog. We've received your message and will get back to you within 24 hours.`
        : `Thanks for reaching out to JustLog support. We've received your message and will get back to you within 24 hours. We read every message carefully and want to make sure you get the help you need.`;

    // Send message to support@justlog.live
    const inboundRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "JustLog Contact <hello@justlog.live>",
        to: "support@justlog.live",
        reply_to: email,
        subject: `[${subjectLabel}] Message from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Type:</strong> ${subjectLabel}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!inboundRes.ok) {
      const errBody = await inboundRes.text();
      console.error("Resend inbound error:", inboundRes.status, errBody);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    // Send auto-reply to the person who submitted
    const autoReplyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "JustLog <hello@justlog.live>",
        to: email,
        subject: autoReplySubject,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#F5F6F3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F6F3;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="width:520px;">
          <tr>
            <td style="padding:0 0 28px 0;text-align:left;">
              <img src="https://justlog.live/logo.svg" alt="JustLog" height="28" style="display:block;" />
            </td>
          </tr>
          <tr>
            <td style="background:#FEFEFC;border-radius:20px;padding:40px;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
              <p style="margin:0 0 6px;font-size:14px;font-weight:600;color:#9748FF;letter-spacing:0.4px;text-transform:uppercase;">Message received</p>
              <h1 style="margin:0 0 20px;font-size:26px;font-weight:800;color:#0d0d0d;line-height:1.25;">${autoReplyHeading}</h1>
              <p style="margin:0 0 28px;font-size:15px;color:#444;line-height:1.8;">
                ${autoReplyBody}
              </p>
              <a href="https://app.justlog.live" style="display:block;background:#9748FF;color:#fff;text-align:center;padding:16px;border-radius:12px;font-size:16px;font-weight:700;text-decoration:none;">Open JustLog →</a>
              <div style="height:1px;background:#f0f0f0;margin:32px 0;"></div>
              <p style="margin:0 0 4px;font-size:15px;color:#444;line-height:1.7;">Talk soon,</p>
              <p style="margin:8px 0 0;font-size:15px;color:#0d0d0d;font-weight:600;">Oshin, Founder</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 0 0;text-align:left;">
              <p style="margin:0;font-size:12px;color:#999;line-height:1.7;">
                JustLog · <a href="https://app.justlog.live" style="color:#999;text-decoration:none;">app.justlog.live</a><br/>
                Questions? <a href="mailto:support@justlog.live" style="color:#9748FF;text-decoration:none;">support@justlog.live</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `.trim(),
      }),
    });

    if (!autoReplyRes.ok) {
      const errBody = await autoReplyRes.text();
      console.error("Resend auto-reply error:", autoReplyRes.status, errBody);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
