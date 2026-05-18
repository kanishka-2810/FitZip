import Footer from "@/components/footer";
import ProductsClient from "./ProductsClient";
import dbConnect from "@/lib/db";
import Product from "@/model/Product";

const TICKER_WORDS = [
  "WORKOUT PROGRAM",
  "NUTRITION GUIDE",
  "NO GYM NEEDED",
  "INSTANT DOWNLOAD",
  "JOINT FRIENDLY",
  "30-DAY PLAN",
  "230K SUBSCRIBERS",
  "REAL RESULTS",
  "WORKOUT PROGRAM",
  "NUTRITION GUIDE",
  "NO GYM NEEDED",
  "INSTANT DOWNLOAD",
  "JOINT FRIENDLY",
  "30-DAY PLAN",
  "230K SUBSCRIBERS",
  "REAL RESULTS",
];

export default async function ProductsPage() {
  await dbConnect();
  const raw = await Product.find({}).lean();
  const products = JSON.parse(JSON.stringify(raw));

  return (
    <>
      {/* ── HERO ── */}
      <section className="w-full bg-[#CC0000]">
        <div className="relative w-full flex items-center justify-center px-6 py-10 md:py-20 overflow-hidden">
          <p
            className="absolute inset-0 flex items-center justify-center text-white/[0.07] font-black uppercase select-none pointer-events-none leading-none"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(72px, 16vw, 200px)",
              fontWeight: 900,
              whiteSpace: "nowrap",
            }}
          >
            PROGRAMS
          </p>
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <span
              className="inline-block bg-black text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ✦ Digital Downloads ✦
            </span>
            <h1
              className="text-3xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-tight tracking-tight mb-0"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              OUR
              <br />
              <span className="bg-black text-white px-2 inline-block">
                PROGRAMS
              </span>
            </h1>
            <p
              className="text-white/60 text-sm md:text-base mt-5 max-w-md mx-auto"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Science-backed, bodyweight-only programs trusted by 230K+ people
              worldwide.
            </p>
          </div>
        </div>

        {/* Ticker */}
        <div className="bg-black border-t-4 border-black overflow-hidden py-2.5 md:py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {TICKER_WORDS.map((word, i) => (
              <span
                key={i}
                className="text-white font-black uppercase text-[10px] md:text-sm tracking-widest mx-5 md:mx-8"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {word}
                <span className="mx-5 md:mx-8 text-[#CC0000]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT COMPONENT — filter + grid ── */}
      <ProductsClient products={products} />

      {/* ── TRUST STRIP ── */}
      <section className="w-full bg-black border-y-4 border-black py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-nowrap items-center justify-center gap-6 md:gap-16">
          {[
            ["230K+", "YouTube Subscribers"],
            ["100%", "Bodyweight — No Gym"],
            ["Instant", "PDF Download"],
          ].map(([stat, label]) => (
            <div key={stat} className="text-center">
              <p
                className="text-[#CC0000] text-lg md:text-3xl font-black"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat}
              </p>
              <p
                className="text-white/50 text-[9px] md:text-xs uppercase tracking-widest mt-0.5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
