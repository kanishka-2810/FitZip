import nodemailer from "nodemailer";

// ─── Shared brand styles (inline — email clients require this) ────────────────
const brand = {
  red: "#CC0000",
  black: "#000000",
  white: "#ffffff",
  lightGrey: "#f5f5f5",
  mutedText: "#666666",
  fontStack: "Arial, Helvetica, sans-serif",
};

// ─── Email transporter ─────────────────────────────────────────────────────────
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASSWORD,
    },
  });
};

// ─── Admin sales notification email ──────────────────────────────────────────
function _buildAdminSaleEmail(customerEmail: string, productName: string, amount: number) {
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
                    ✦ FITZIP SALES ✦
                  </p>
                  <h1 style="margin:4px 0 0;color:${brand.white};font-size:26px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px">
                    New Sale 🎉
                  </h1>
                </td>
                <td align="right" style="padding:20px 32px 20px 0">
                  <div style="background:${brand.red};border:2px solid ${brand.white};padding:8px 14px;display:inline-block">
                    <p style="margin:0;color:${brand.white};font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:3px;white-space:nowrap">
                      PAYMENT RECEIVED
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Red accent bar -->
        <tr><td style="background:${brand.red};height:4px;line-height:4px;font-size:4px">&nbsp;</td></tr>

        <!-- Order details -->
        <tr>
          <td style="padding:32px 32px 0">
            <p style="margin:0 0 16px;font-size:10px;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:${brand.mutedText}">
              ORDER DETAILS
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:2px solid ${brand.black}">
              <tr style="border-bottom:2px solid ${brand.black}">
                <td style="padding:12px 16px;background:${brand.lightGrey};border-right:2px solid ${brand.black};width:120px">
                  <p style="margin:0;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;color:${brand.mutedText}">CUSTOMER</p>
                </td>
                <td style="padding:12px 16px">
                  <a href="mailto:${customerEmail}" style="color:${brand.red};font-size:14px;font-weight:700;text-decoration:none">${customerEmail}</a>
                </td>
              </tr>
              <tr style="border-bottom:2px solid ${brand.black}">
                <td style="padding:12px 16px;background:${brand.lightGrey};border-right:2px solid ${brand.black}">
                  <p style="margin:0;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;color:${brand.mutedText}">PRODUCT</p>
                </td>
                <td style="padding:12px 16px">
                  <p style="margin:0;font-size:14px;font-weight:700;color:${brand.black}">${productName}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:${brand.lightGrey};border-right:2px solid ${brand.black}">
                  <p style="margin:0;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;color:${brand.mutedText}">AMOUNT</p>
                </td>
                <td style="padding:12px 16px">
                  <span style="background:${brand.red};color:${brand.white};font-size:16px;font-weight:900;padding:4px 12px;display:inline-block">
                    $${amount.toFixed(2)} USD
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:32px 32px">
            <p style="margin:0;font-size:13px;color:${brand.mutedText};line-height:1.6">
              The customer has received their download link automatically. No action needed.
            </p>
          </td>
        </tr>

        <tr>
          <td style="background:${brand.black};padding:16px 32px">
            <p style="margin:0;color:${brand.white};font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;opacity:0.5">
              FITZIP · fittzip.com · Sales Notification
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Purchase confirmation email ──────────────────────────────────────────────
function buildPurchaseEmail(productName: string, downloadUrl: string) {
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
              PAYMENT CONFIRMED!
            </h1>
          </td>
        </tr>

        <!-- Black accent bar -->
        <tr><td style="background:${brand.black};height:4px;line-height:4px;font-size:4px">&nbsp;</td></tr>

        <!-- Main content -->
        <tr>
          <td style="padding:36px 32px">
            <p style="margin:0 0 8px;font-size:10px;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:${brand.red}">
              CONGRATULATIONS!
            </p>
            <h2 style="margin:0 0 20px;font-size:22px;font-weight:900;text-transform:uppercase;color:${brand.black};line-height:1.2">
              Your Purchase Is Complete<br/>And Ready For Download.
            </h2>
            <p style="margin:0 0 28px;font-size:14px;color:${brand.mutedText};line-height:1.7">
              Thank you for your purchase! Your payment has been processed successfully. You can now download your ${productName} below.
            </p>

            <!-- Product badge -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:28px">
              <tr>
                <td style="border:2px solid ${brand.black};padding:14px 20px">
                  <p style="margin:0 0 4px;font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:3px;color:${brand.mutedText}">YOUR PURCHASE</p>
                  <p style="margin:0;font-size:15px;font-weight:900;text-transform:uppercase;color:${brand.black}">${productName}</p>
                </td>
              </tr>
            </table>

            <!-- Download CTA -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:28px">
              <tr>
                <td style="background:${brand.red};border:3px solid ${brand.black}">
                  <a href="${downloadUrl}" style="display:inline-block;padding:16px 32px;color:${brand.white};font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:3px;text-decoration:none">
                    DOWNLOAD YOUR ${productName.toUpperCase()} →
                  </a>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
              <tr>
                <td style="border-top:2px solid #eee">&nbsp;</td>
              </tr>
            </table>

            <!-- Instructions -->
            <p style="margin:0 0 12px;font-size:10px;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:${brand.mutedText}">DOWNLOAD INSTRUCTIONS</p>
            <ul style="margin:0 0 28px;padding-left:20px;font-size:14px;color:${brand.mutedText};line-height:1.7">
              <li>Click the download button above to access your file</li>
              <li>Save the file to your device for offline access</li>
              <li>If you have any issues, contact our support team</li>
            </ul>

            <!-- Support CTA -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:${brand.black};border:3px solid ${brand.black}">
                  <a href="mailto:${process.env.CONTACT_EMAIL}?subject=Download Issue - ${productName}" style="display:inline-block;padding:14px 28px;color:${brand.white};font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:3px;text-decoration:none">
                    NEED HELP? CONTACT SUPPORT →
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
                    This is an automated email. Please do not reply to this email.
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

// ─── Send purchase confirmation email + admin notification ────────────────────
export async function sendPurchaseConfirmationEmail(
  customerEmail: string,
  productName: string,
  downloadUrl: string,
  amount: number,
) {
  const transporter = createTransporter();

  // 1. Customer download email — critical, let this throw if it fails
  await transporter.sendMail({
    from: `"FitZip" <${process.env.CONTACT_EMAIL}>`,
    to: customerEmail,
    subject: `Your ${productName} is ready for download — FitZip`,
    html: buildPurchaseEmail(productName, downloadUrl),
  });
  console.log(`[email] Download link sent to ${customerEmail}`);

  // 2. Eric's sales notification — non-critical, never block customer delivery
  // try {
  //   await transporter.sendMail({
  //     from: `"FitZip Sales" <${process.env.CONTACT_EMAIL}>`,
  //     to: process.env.CONTACT_EMAIL,
  //     subject: `💰 New Sale — ${productName} ($${amount.toFixed(2)})`,
  //     html: buildAdminSaleEmail(customerEmail, productName, amount),
  //   });
  //   console.log(`[email] Sale notification sent to admin`);
  // } catch (err) {
  //   // Log but don't rethrow — customer already received their download link
  //   console.error(`[email] Admin notification failed (non-critical):`, err);
  // }
}
