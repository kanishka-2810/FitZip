import Footer from "@/components/footer";

const SECTIONS = [
  {
    title: "Who We Are",
    body: [
      "FitZip is a digital fitness brand based in the United States. We sell digital workout and nutrition programs online at fitzipp.com.",
      "If you have questions about this policy, contact us at support@fittzip.com.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "When you make a purchase, we collect information necessary to process your order, including your name, email address, and payment details. Payment information is processed securely by Stripe — we never store your card details on our servers.",
      "When you subscribe to our newsletter, we collect your email address to send you fitness tips and product updates.",
      "We may automatically collect non-personal data such as browser type, pages visited, and general location (country/region) via cookies and analytics tools (e.g. Google Analytics). This data is used solely to improve our website.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "• To process and fulfill your digital product orders",
      "• To send your purchase confirmation and download link",
      "• To send our newsletter if you have subscribed (you may unsubscribe at any time)",
      "• To respond to your support or refund enquiries",
      "• To improve our website and understand how visitors use it",
      "We do not sell, rent, or trade your personal information to any third parties.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "We use the following third-party services to operate our business:",
      "• Stripe — payment processing (stripe.com/privacy)",
      "• Beehiiv — newsletter platform",
      "• Google Analytics — website analytics",
      "• Resend — email delivery",
      "• Google Workspace — customer support email",
      "• Secure hosting and database providers — website and order data storage",
      "Each of these services has its own privacy policy governing how they handle your data.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our website uses cookies to improve your browsing experience and to collect anonymous analytics data. You can disable cookies in your browser settings at any time; however, some features of the site may not function correctly.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law. You may request deletion of your data at any time by emailing support@fittzip.com.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete it. To exercise any of these rights, please contact us at support@fittzip.com.",
    ],
  },
  {
    title: "Changes To This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised date. Continued use of our website after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For any privacy-related questions, email us at support@fittzip.com.",
    ],
  },
];

export default function PrivacyPage() {
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
          Privacy{" "}
          <span className="bg-black text-white px-2 inline-block">Policy</span>
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
