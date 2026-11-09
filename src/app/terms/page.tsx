import Footer from "@/components/footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using the FitZip website (fitzipp.com) and purchasing any of our products, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
    ],
  },
  {
    title: "About Our Products",
    body: [
      "FitZip sells digital fitness products — including workout programs and nutrition guides — delivered as downloadable PDF files. All products are for personal, non-commercial use only.",
      "Upon purchase, you are granted a single-user, non-transferable licence to access and use the product for your personal fitness journey.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, images, and downloadable files — is the property of FitZip and is protected by applicable copyright and intellectual property laws.",
      "You may not reproduce, distribute, sell, sublicense, or republish any FitZip content in any form without prior written permission. This includes sharing PDF files with others, uploading them to file-sharing platforms, or using content for commercial purposes.",
    ],
  },
  {
    title: "Payment & Pricing",
    body: [
      "All prices are listed in US Dollars (USD). Payments are processed securely through Stripe. FitZip does not store payment card information.",
      "We reserve the right to change product prices at any time. Price changes will not affect orders already placed and confirmed.",
    ],
  },
  {
    title: "Digital Delivery",
    body: [
      "After a successful purchase, a download link will be sent to the email address provided at checkout. Please ensure your email address is correct before completing your order.",
      "If you do not receive your download link within 24 hours, contact us at support@fittzip.com.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "FitZip products are provided for informational and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment.",
      "Always consult your physician or a qualified health professional before starting any new exercise or nutrition programme, particularly if you have a pre-existing health condition or injury.",
      "FitZip makes no guarantees regarding specific fitness or health outcomes. Individual results will vary.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, FitZip shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or website, including any injury resulting from following our programmes.",
    ],
  },
  {
    title: "Prohibited Use",
    body: [
      "You agree not to:",
      "• Resell, redistribute, or share FitZip digital products with any third party",
      "• Use our content for any commercial purpose without written permission",
      "• Attempt to reverse-engineer or extract content from our website by automated means",
      "• Submit false or fraudulent payment information",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We reserve the right to update these Terms of Service at any time. Changes will be reflected on this page with a revised date. Continued use of our website constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the United States. Any disputes will be resolved under applicable US federal and state law.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For any questions regarding these terms, please contact us at support@fittzip.com.",
    ],
  },
];

export default function TermsPage() {
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
          Terms of{" "}
          <span className="bg-black text-white px-2 inline-block">Service</span>
        </h1>
        <p
          className="text-white/60 text-sm mt-4 max-w-md mx-auto"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Last updated: November 2026
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
