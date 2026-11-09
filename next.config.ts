import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: lets the ngrok tunnel used for local Stripe webhook testing load dev assets
  allowedDevOrigins: ["sprint-huntress-boundless.ngrok-free.dev"],
  async headers() {
    return [
      {
        // The success URL carries the Stripe session ID, so keep it out of referrers and search engines
        source: "/checkout/success",
        headers: [
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
