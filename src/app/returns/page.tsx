import Footer from "@/components/footer";

const SECTIONS = [
  {
    title: "Digital Products — No Returns",
    body: [
      "All FitZip products are digital downloads (PDF files) delivered instantly after purchase. Because the product is delivered electronically and cannot be returned, we do not offer refunds once the file has been accessed or downloaded.",
      "Please read all product descriptions carefully before purchasing.",
      "If you don’t see the product in your inbox, check the spam folder."
    ],
  },
  {
    title: "Exceptions",
    body: [
      "We will issue a full refund in the following circumstances:",
      "• You were charged more than once for the same product due to a technical error.",
      "• The file is corrupt or unreadable and we are unable to provide a working replacement.",
      "Refund requests must be submitted within 7 days of purchase.",
    ],
  },
  {
    title: "How To Request a Refund",
    body: [
      "Please check the spam folder before requesting a refund.",
      "Email us at erooney729@gmail.com with the subject line 'Refund Request' and include:",
      "• Your full name",
      "• Order confirmation number or receipt",
      "• A brief description of the issue",
      "We aim to respond within 2 business days. Approved refunds are processed back to your original payment method within 5–10 business days.",
    ],
  },
  {
    title: "Chargebacks",
    body: [
      "If you initiate a chargeback without first contacting us, your access to all FitZip products will be revoked. We encourage you to reach out to us directly — we are happy to resolve any issues promptly.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions? Email us at erooney729@gmail.com and we'll get back to you as quickly as possible.",
    ],
  },
];

export default function ReturnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#CC0000] border-b-4 border-black px-4 py-12 md:py-20 text-center">
        <span
          className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-5"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          ✦ Legal ✦
        </span>
        <h1
          className="text-4xl md:text-6xl font-black uppercase text-white leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Return &amp;{" "}
          <span className="bg-black text-white px-2 inline-block">Refund Policy</span>
        </h1>
        <p
          className="text-white/60 text-sm mt-4 max-w-md mx-auto"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Last updated: April 2026
        </p>
      </section>

      {/* Content */}
      <section className="w-full bg-white border-b-4 border-black py-14 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-[#CC0000] shrink-0" />
                <h2
                  className="text-lg md:text-xl font-black uppercase text-black leading-tight"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {section.title}
                </h2>
              </div>
              <div className="flex flex-col gap-3 pl-4">
                {section.body.map((para, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-base text-black/70 leading-relaxed"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
