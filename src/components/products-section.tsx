"use client";

import Image from "next/image";
import Link from "next/link";

// 🚀 LAUNCH: set comingSoon: false on reset-your-plate when ebook is ready
const MARKETING = {
  "reset-your-body": {
    subtitle: "Workout Program",
    tag: "BEST SELLER",
    tagBg: "bg-black text-white",
    originalPrice: 47,
    features: ["30-Day Plan", "No Equipment", "Joint-Friendly", "Instant PDF"],
    rating: 4.8,
    reviews: 124,
    comingSoon: false,
  },
  "reset-your-plate": {
    subtitle: "Nutrition Guide",
    tag: "COMING SOON",
    tagBg: "bg-black text-white",
    originalPrice: 39.99,
    features: ["Meal Plans", "Shopping Lists", "Macro Guide", "Instant PDF"],
    rating: 4.7,
    reviews: 89,
    comingSoon: true,
  },
} as Record<
  string,
  {
    subtitle: string;
    tag: string;
    tagBg: string;
    originalPrice: number;
    features: string[];
    rating: number;
    reviews: number;
    comingSoon: boolean;
  }
>;

interface DbProduct {
  slug: string;
  name: string;
  price: number;
  image: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-3.5 h-3.5"
          fill={star <= Math.round(rating) ? "#CC0000" : "#e5e7eb"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductsSection({
  dbProducts = [],
}: {
  dbProducts?: DbProduct[];
}) {
  // Merge DB data (name, price, image) with marketing data (tag, features, etc.)
  const products = Object.keys(MARKETING).map((slug) => {
    const db = dbProducts.find((p) => p.slug === slug);
    const m = MARKETING[slug];
    return {
      slug,
      name: db?.name ?? slug,
      image: db?.image ?? "",
      price: db ? `$${db.price}` : "",
      href: `/products/${slug}`,
      ...m,
      discount: db
        ? `${Math.round((1 - db.price / m.originalPrice) * 100)}% OFF`
        : "",
      originalPrice: `$${m.originalPrice}`,
    };
  });

  return (
    <section
      className="w-full py-14 md:py-20 border-b-4 border-black"
      style={{
        background:
          "radial-gradient(ellipse at center, #e6e6e6 0%, #c2c2c2 40%, #8f8f8f 100%)",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16 px-4">
        <span
          className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          ✦ Digital Downloads ✦
        </span>
        <h2
          className="text-3xl md:text-5xl font-black uppercase text-black tracking-tight"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Our{" "}
          <span className="bg-[#CC0000] text-white px-2 inline-block">
            Programs
          </span>
        </h2>
        <p
          className="text-black/50 text-sm mt-3 max-w-sm mx-auto"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Science-backed. Bodyweight only. Trusted by 230K+ people.
        </p>
      </div>

      {/* Cards */}
      <div
        className="flex md:grid md:grid-cols-2 gap-5 md:gap-16 max-w-7xl md:mx-auto overflow-x-auto md:overflow-visible px-4 md:px-8 pb-2 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {products.map((product) => (
          <Link
            key={product.slug}
            href={
              product.comingSoon
                ? "https://fitzip-newsletter-069955.beehiiv.com/subscribe"
                : product.href
            }
            target={product.comingSoon ? "_blank" : undefined}
            rel={product.comingSoon ? "noopener noreferrer" : undefined}
            className={`group relative flex flex-col rounded-2xl overflow-hidden shrink-0 snap-center w-[80vw] min-w-70 md:w-auto md:min-w-0 xl:min-h-[75vh] transition-all duration-300 hover:-translate-y-1 border-[3px] border-black`}
            style={{ boxShadow: "8px 8px 0px #000000" }}
          >
            {/* Image */}
            <div className="relative h-80 md:h-[430px] xl:h-[570px] bg-[#f0f0f0] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 80vw, 50vw"
                className={`object-cover transition-transform duration-500 ${product.comingSoon ? "scale-105 blur-[2px]" : "group-hover:scale-105"}`}
              />
              {/* Tag */}
              <span
                className={`absolute top-3 left-3 ${product.tagBg} text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 md:px-2.5 py-0.5 md:py-1 border-2 border-black`}
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  boxShadow: "2px 2px 0px #000000",
                }}
              >
                {product.tag}
              </span>
              {/* Discount badge — hidden when coming soon */}
              {!product.comingSoon && (
                <span
                  className="absolute top-3 right-3 bg-[#CC0000] text-white text-[8px] md:text-[10px] font-black uppercase tracking-wide px-2 md:px-2.5 py-0.5 md:py-1 border-2 border-black"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    boxShadow: "2px 2px 0px #000000",
                  }}
                >
                  {product.discount}
                </span>
              )}
              {/* Coming Soon overlay */}
              {product.comingSoon && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center px-6"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.95) 100%)",
                  }}
                >
                  <div className="text-center mt-auto mb-8">
                    <p
                      className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-2"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      ✦ New Release ✦
                    </p>
                    <p
                      className="text-white text-4xl md:text-5xl font-black uppercase leading-none"
                      style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      COMING
                    </p>
                    <p
                      className="text-[#CC0000] text-4xl md:text-5xl font-black uppercase leading-none"
                      style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      SOON
                    </p>
                    <div className="w-12 h-0.75 bg-[#CC0000] mx-auto mt-3 mb-3" />
                    <p
                      className="text-white/60 text-[9px] font-black uppercase tracking-[0.25em]"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      Tap to get notified
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2.5 p-4 md:p-5 border-t-[3px] border-black bg-white">
              {/* Category + name */}
              <div>
                <p
                  className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-0.5"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {product.subtitle}
                </p>
                <h3
                  className="text-base md:text-2xl font-black uppercase leading-tight text-black"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {product.name}
                </h3>
              </div>

              {/* Stars — hidden for coming soon, replaced with hype text */}
              {product.comingSoon ? (
                <p
                  className="text-[10px] font-black uppercase tracking-widest text-[#CC0000]"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  ✦ Launching Soon — Be First In Line
                </p>
              ) : (
                <div className="flex items-center gap-1.5">
                  <Stars rating={product.rating} />
                  <span
                    className="text-[10px] md:text-xs text-black/50"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              )}

              {/* Feature pills — 2 per row on mobile */}
              <div className="grid grid-cols-2 md:flex md:flex-wrap gap-1.5">
                {product.features.map((f) => (
                  <span
                    key={f}
                    className="text-[8px] md:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 truncate border bg-black/5 border-black/10 text-black/50"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-2 border-t-2 border-black/10 mt-0.5">
                <div className="flex items-baseline gap-1.5">
                  {product.comingSoon ? (
                    <span
                      className="text-xs md:text-sm font-black uppercase tracking-widest text-black/40"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      Price TBA
                    </span>
                  ) : (
                    <>
                      <span
                        className="text-xl md:text-2xl font-black text-black"
                        style={{
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {product.price}
                      </span>
                      <span
                        className="text-xs md:text-sm text-black/30 line-through"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                        }}
                      >
                        {product.originalPrice}
                      </span>
                    </>
                  )}
                </div>
                {product.comingSoon ? (
                  <span
                    className="bg-[#CC0000] text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 md:px-4 py-2 border-2 border-black"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      boxShadow: "3px 3px 0px #000000",
                    }}
                  >
                    Notify Me →
                  </span>
                ) : (
                  <span
                    className="bg-[#CC0000] text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 md:px-4 py-2 border-2 border-black transition-all duration-200 group-hover:bg-black"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      boxShadow: "3px 3px 0px #000000",
                    }}
                  >
                    View Program →
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 md:mt-14 px-4">
        <Link
          href="/products"
          className="inline-block px-8 py-3 md:px-12 md:py-4 rounded-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-base border-[3px] border-black transition-all duration-200"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            boxShadow: "5px 5px 0px #000000",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "5px 5px 0px #000000";
          }}
        >
          See All Programs →
        </Link>
      </div>
    </section>
  );
}
