import { NextRequest, NextResponse } from "next/server";
import { createTransporter, ORDERS_EMAIL, SUPPORT_EMAIL } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Shared brand styles (inline — email clients require this) ────────────────
const brand = {
  red: "#CC0000",
  black: "#000000",
  white: "#ffffff",
  lightGrey: "#f5f5f5",
  mutedText: "#666666",
  fontStack: "Arial, Helvetica, sans-serif",
};

// ─── Email to Eric (admin notification) ──────────────────────────────────────
function buildAdminEmail(name: string, email: string, topic: string, message: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:${brand.fontStack}">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:40px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${brand.white};border:3px solid ${brand.black}">

        <!-- Header -->
        <tr>
          <td style="background:${brand.black};padding:0">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:20px 32px">
                  <p style="margin:0;color:${brand.red};font-size:10px;font-weight:900;letter-spacing:4px;text-transform:uppercase">
                    ✦ FITZIP CONTACT ✦
                  </p>
                  <h1 style="margin:4px 0 0;color:${brand.white};font-size:26px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px">
                    New Message Received
                  </h1>
                </td>
                <td align="right" style="padding:20px 32px 20px 0">
                  <div style="background:${brand.red};border:2px solid ${brand.white};padding:8px 14px;display:inline-block">
                    <p style="margin:0;color:${brand.white};font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:3px;white-space:nowrap">
                      ACTION NEEDED
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Red accent bar -->
        <tr><td style="background:${brand.red};height:4px;line-height:4px;font-size:4px">&nbsp;</td></tr>

        <!-- Sender info -->
        <tr>
          <td style="padding:32px 32px 0">
            <p style="margin:0 0 16px;font-size:10px;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:${brand.mutedText}">
              SENDER DETAILS
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:2px solid ${brand.black}">
              <tr style="border-bottom:2px solid ${brand.black}">
                <td style="padding:12px 16px;background:${brand.lightGrey};border-right:2px solid ${brand.black};width:100px">
                  <p style="margin:0;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;color:${brand.mutedText}">NAME</p>
                </td>
                <td style="padding:12px 16px">
                  <p style="margin:0;font-size:14px;font-weight:700;color:${brand.black}">${name}</p>
                </td>
              </tr>
              <tr style="border-bottom:2px solid ${brand.black}">
                <td style="padding:12px 16px;background:${brand.lightGrey};border-right:2px solid ${brand.black}">
                  <p style="margin:0;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;color:${brand.mutedText}">EMAIL</p>
                </td>
                <td style="padding:12px 16px">
                  <a href="mailto:${email}" style="color:${brand.red};font-size:14px;font-weight:700;text-decoration:none">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:${brand.lightGrey};border-right:2px solid ${brand.black}">
                  <p style="margin:0;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;color:${brand.mutedText}">TOPIC</p>
                </td>
                <td style="padding:12px 16px">
                  <span style="background:${brand.red};color:${brand.white};font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;padding:4px 10px;display:inline-block">
                    ${topic}
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:24px 32px">
            <p style="margin:0 0 12px;font-size:10px;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:${brand.mutedText}">
              MESSAGE
            </p>
            <div style="background:${brand.lightGrey};border-left:4px solid ${brand.red};border:2px solid ${brand.black};padding:20px">
              <p style="margin:0;font-size:15px;color:${brand.black};line-height:1.7;white-space:pre-wrap">${message}</p>
            </div>
          </td>
        </tr>

        <!-- Reply CTA -->
        <tr>
          <td style="padding:0 32px 32px">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:${brand.red};border:3px solid ${brand.black}">
                  <a href="mailto:${email}?subject=Re: ${topic}" style="display:inline-block;padding:14px 28px;color:${brand.white};font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:3px;text-decoration:none">
                    REPLY TO ${name.toUpperCase()} →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:${brand.black};padding:16px 32px">
            <p style="margin:0;color:${brand.white};font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;opacity:0.5">
              FITZIP · fittzip.com · Admin Notification
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Auto-reply to the user ───────────────────────────────────────────────────
function buildUserEmail(name: string, topic: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:${brand.fontStack}">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:40px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${brand.white};border:3px solid ${brand.black}">

        <!-- Header -->
        <tr>
          <td style="background:${brand.red};padding:28px 32px;text-align:center">
            <p style="margin:0 0 6px;color:rgba(255,255,255,0.6);font-size:10px;font-weight:900;letter-spacing:4px;text-transform:uppercase">
              ✦ FITZIP ✦
            </p>
            <h1 style="margin:0;color:${brand.white};font-size:30px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px">
              GOT YOUR MESSAGE!
            </h1>
          </td>
        </tr>

        <!-- Black accent bar -->
        <tr><td style="background:${brand.black};height:4px;line-height:4px;font-size:4px">&nbsp;</td></tr>

        <!-- Main content -->
        <tr>
          <td style="padding:36px 32px">
            <p style="margin:0 0 8px;font-size:10px;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:${brand.red}">
              HEY ${name.toUpperCase()},
            </p>
            <h2 style="margin:0 0 20px;font-size:22px;font-weight:900;text-transform:uppercase;color:${brand.black};line-height:1.2">
              We&rsquo;ll Be In Touch<br/>Within 2 Business Days.
            </h2>
            <p style="margin:0 0 28px;font-size:14px;color:${brand.mutedText};line-height:1.7">
              Thanks for reaching out to FitZip. We&rsquo;ve received your message and our team will get back to you as soon as possible.
            </p>

            <!-- Topic badge -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:28px">
              <tr>
                <td style="border:2px solid ${brand.black};padding:14px 20px">
                  <p style="margin:0 0 4px;font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:3px;color:${brand.mutedText}">YOUR TOPIC</p>
                  <p style="margin:0;font-size:15px;font-weight:900;text-transform:uppercase;color:${brand.black}">${topic}</p>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
              <tr>
                <td style="border-top:2px solid #eee">&nbsp;</td>
              </tr>
            </table>

            <!-- While you wait -->
            <p style="margin:0 0 12px;font-size:10px;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:${brand.mutedText}">WHILE YOU WAIT</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:2px solid ${brand.black};margin-bottom:28px">
              <tr>
                <td style="padding:16px 20px;border-bottom:2px solid ${brand.black}">
                  <p style="margin:0;font-size:13px;font-weight:900;text-transform:uppercase;color:${brand.black}">✓ &nbsp;Reset Your Body — 30-Day Workout Program</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px">
                  <p style="margin:0;font-size:13px;font-weight:900;text-transform:uppercase;color:${brand.black}">✓ &nbsp;Reset Your Plate — Nutrition Guide (Coming Soon)</p>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:${brand.black};border:3px solid ${brand.black}">
                  <a href="https://fittzip.com/products" style="display:inline-block;padding:14px 28px;color:${brand.white};font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:3px;text-decoration:none">
                    VIEW OUR PROGRAMS →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:${brand.black};padding:20px 32px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;color:${brand.white};font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:1px">FITZIP</p>
                  <p style="margin:4px 0 0;color:rgba(255,255,255,0.4);font-size:10px">Get Fit. Stay Strong. No Gym Needed.</p>
                </td>
                <td align="right">
                  <a href="https://fittzip.com" style="color:${brand.red};font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;text-decoration:none">fittzip.com</a>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top:12px;border-top:1px solid rgba(255,255,255,0.1)">
                  <p style="margin:8px 0 0;color:rgba(255,255,255,0.25);font-size:10px">
                    This is an automated confirmation. You can reply to this email if you need to add anything.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── API Handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { name, email, topic, message } = await req.json();

    if (!name || !email || !topic || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const transporter = createTransporter();

    // 1. Notify Eric
    await transporter.sendMail({
      from: `"FitZip Contact" <${ORDERS_EMAIL}>`,
      to: SUPPORT_EMAIL,
      replyTo: email,
      subject: `[FitZip] New Message — ${topic}`,
      html: buildAdminEmail(name, email, topic, message),
    });

    // 2. Auto-reply to user
    await transporter.sendMail({
      from: `"FitZip" <${SUPPORT_EMAIL}>`,
      to: email,
      subject: "We got your message — FitZip",
      html: buildUserEmail(name, topic),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("[contact] sendMail error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
