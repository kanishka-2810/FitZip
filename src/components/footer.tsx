import Link from "next/link";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const SUPPORT_LINKS = [
  { label: "Return & Refund", href: "/returns" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function VisaLogo() {
  return (
    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-label="Visa">
      <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/>
      <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/>
      <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"/>
    </svg>
  );
}

function MastercardLogo() {
  return (
    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-label="Mastercard">
      <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/>
      <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/>
      <circle fill="#EB001B" cx="15" cy="12" r="7"/>
      <circle fill="#F79E1B" cx="23" cy="12" r="7"/>
      <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/>
    </svg>
  );
}

function AmexLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="American Express" viewBox="0 0 38 24" width="38" height="24">
      <path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"/>
      <path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"/>
      <path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"/>
      <path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"/>
      <path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"/>
      <path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"/>
      <path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"/>
      <path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"/>
    </svg>
  );
}

function ApplePayLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apple Pay" viewBox="0 0 38 24" width="38" height="24">
      <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/>
      <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/>
      <g transform="translate(5, 0)">
        <path d="M10.5 7.5c.5-.6.84-1.38.75-2.18-.73.03-1.62.49-2.14 1.09-.47.53-.88 1.38-.77 2.2.8.06 1.63-.4 2.16-1.11zm.75 1.18c-1.2-.07-2.22.68-2.79.68-.58 0-1.44-.65-2.39-.63-1.23.02-2.36.72-2.99 1.82-1.28 2.2-.33 5.46.9 7.25.61.88 1.33 1.85 2.28 1.82.9-.04 1.26-.58 2.36-.58 1.1 0 1.42.58 2.37.56.98-.02 1.61-.88 2.22-1.77.69-1.01.97-2 .99-2.05-.02-.01-1.93-.75-1.95-2.94-.02-1.84 1.5-2.72 1.57-2.77-.87-1.28-2.21-1.42-2.57-1.39z" fill="#000"/>
        <text x="24" y="15.5" textAnchor="middle" dominantBaseline="middle" fontFamily="-apple-system,BlinkMacSystemFont,Helvetica Neue,sans-serif" fontSize="9" fontWeight="600" fill="#000">Pay</text>
      </g>
    </svg>
  );
}

function GooglePayLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-label="Google Pay">
      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"/>
      <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/>
      <path d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z" fill="#5F6368"/>
      <path d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z" fill="#4285F4"/>
      <path d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z" fill="#34A853"/>
      <path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z" fill="#FBBC04"/>
      <path d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z" fill="#EA4335"/>
    </svg>
  );
}

function StripeLogo() {
  return (
    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-label="Stripe">
      <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/>
      <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/>
      <text x="19" y="12" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700" fill="#635BFF" letterSpacing="0.2">stripe</text>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
    <footer className="w-full bg-[#CC0000] border-t-4 border-black">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-12">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-5xl font-black text-white hover:text-black transition-colors duration-200 tracking-normal"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              FitZip
            </Link>
            <p
              className="text-white text-sm mt-3 leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              We simplify fitness. Build strength, improve your joints, and feel stronger — no gym needed.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-5">
              <Link
                href="https://www.youtube.com/@fitzip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black transition-colors duration-150"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </Link>
              <Link
                href="mailto:erooney729@gmail.com"
                className="text-white hover:text-black transition-colors duration-150"
                aria-label="Email"
              >
                <MailIcon />
              </Link>
            </div>
          </div>

          {/* Nav col */}
          <div>
            <p
              className="text-white font-black uppercase text-sm tracking-widest mb-3 pb-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white hover:text-white/70 text-sm font-medium transition-colors duration-150"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support col */}
          <div>
            <p
              className="text-white font-black uppercase text-sm tracking-widest mb-3 pb-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Support
            </p>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-white/70 text-sm font-medium transition-colors duration-150"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter mini */}
          <div className="col-span-2 md:col-span-1">
            <p
              className="text-white font-black uppercase text-sm tracking-widest mb-3 pb-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Newsletter
            </p>
            <p
              className="text-white text-sm mb-4 leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Free weekly training tips in your inbox.
            </p>
            <Link
              href="https://fitzip-newsletter-069955.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-full bg-black text-white text-xs font-black uppercase tracking-widest border-2 border-black transition-all duration-150 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                boxShadow: "3px 3px 0px #000000",
              }}
            >
              Subscribe Free
              <svg className="inline-block ml-1.5 w-3 h-3 -rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className=" mt-10 md:mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Copyright */}
            <p
              className="text-white text-xs order-2 md:order-1"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              © {new Date().getFullYear()}, FitZip. All rights reserved.
            </p>

            {/* Payment badges */}
            <div className="flex items-center flex-wrap justify-center gap-2 order-1 md:order-2">
              {[<VisaLogo key="visa"/>, <MastercardLogo key="mc"/>, <AmexLogo key="amex"/>, <ApplePayLogo key="apple"/>, /* <GooglePayLogo key="gpay"/>, */ <StripeLogo key="stripe"/>].map((Logo, i) => (
                <div key={i} className="h-6 flex items-center justify-center">{Logo}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mega wordmark — full viewport width */}
      <div className="w-full border-t-4 border-black overflow-hidden" style={{ lineHeight: 0.85 }}>
        <p
          className="text-white font-black text-center select-none w-full"
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontSize: "24.5vw",
            fontWeight: 900,
            letterSpacing: "normal",
            lineHeight: 0.85,
            display: "block",
          }}
        >
          FITZIP
        </p>
      </div>
    </footer>

    <div className="w-full bg-black py-1.5 md:py-3 text-center">
      <p
        className="text-white/50 text-[8px] md:text-[10px] uppercase tracking-widest"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        Made with ❤️ by{" "}
        <a
          href="https://www.quiotech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors duration-150 underline underline-offset-2"
        >
          Quiotech
        </a>
      </p>
    </div>
    </>
  );
}
