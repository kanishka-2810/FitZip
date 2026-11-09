# FitZip

The website for [fittzip.com](https://fittzip.com). It sells fitness ebooks as instant PDF downloads. Customers pay with Stripe Checkout, orders are saved in MongoDB, the PDF is served from Cloudflare R2, and the order emails go out through Resend.

There are no customer accounts and no admin panel. Sales and refunds are handled in the Stripe dashboard, and orders can be checked in MongoDB.

> The owner's handbook covers accounts, DNS, email setup and the handover checklist. Ask the site owner for the link. This README covers the code only.

## Tech stack

| Part | Tool |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui pieces, Framer Motion |
| Database | MongoDB with Mongoose |
| Payments | Stripe Checkout and a Stripe webhook |
| File storage | Cloudflare R2 through the AWS S3 SDK, with signed URLs |
| Email | Resend SMTP through Nodemailer |
| Cart state | Zustand (browser memory only) |
| Analytics | Google Analytics 4 via `@next/third-parties` |

> This Next.js version has breaking changes from older versions. Check `node_modules/next/dist/docs/` before relying on older patterns (see `AGENTS.md`).

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
# create .env.local with the variables below
npm run dev    # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Runs the production build |
| `npm run lint` | ESLint |

### Environment variables

Put these in `.env.local`. It is git-ignored. Never commit it.

| Variable | Required | Purpose |
| --- | --- | --- |
| `MONGODB_URI` | Yes | MongoDB connection string. The database is `fitzip`. |
| `STRIPE_SECRET_KEY` | Yes | Stripe secret key. Use `sk_test_…` locally. |
| `STRIPE_WEBHOOK_SECRET` | Yes | Signing secret of the webhook endpoint, or of `stripe listen` locally |
| `NEXT_PUBLIC_APP_URL` | Yes | Site URL used for Stripe's success and cancel links, e.g. `http://localhost:3000` |
| `R2_ACCOUNT_ID` | Yes | Cloudflare account ID. The R2 endpoint is built from it. |
| `R2_ACCESS_KEY_ID` | Yes | R2 API token key ID |
| `R2_SECRET_ACCESS_KEY` | Yes | R2 API token secret |
| `R2_BUCKET_NAME` | Yes | Bucket that holds the PDFs (`fitzip`) |
| `RESEND_API_KEY` | Yes | Resend API key, used as the SMTP password |
| `NEXT_PUBLIC_BASE_URL` | No | Base of the download link in emails. Defaults to `https://fittzip.com`. |

`src/lib/r2.ts` throws at startup if any R2 variable is missing. `NEXT_PUBLIC_*` values are baked in at build time, so rebuild after changing them.

### Testing payments locally

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the `whsec_…` it prints into `STRIPE_WEBHOOK_SECRET` and restart `npm run dev`. Pay with card `4242 4242 4242 4242`, any future expiry and any CVC.

Webhook emails contain a download link built from `NEXT_PUBLIC_BASE_URL`. That defaults to the live site, so set it to `http://localhost:3000` locally if you want the email link to hit your machine.

## How a purchase works

1. The customer adds an ebook to the cart (`src/store/cart.ts`) and enters an email in `src/components/checkout-button.tsx`.
2. `POST /api/checkout` loads each product's price from MongoDB, creates a Stripe Checkout session and saves one `pending` order per item with that session ID.
3. After payment, Stripe redirects to `/checkout/success?session_id=…`. The page checks with Stripe that the session is paid, marks the order `completed` if the webhook has not done it yet, and shows a **Download PDF Now** button.
4. Stripe calls `POST /api/webhooks/stripe` with `checkout.session.completed`. The handler marks the order `completed`, stores the PDF file name and emails the customer from `orders@fittzip.com` (`src/lib/email.ts`).
5. The button and the email both link to `GET /api/download?orderId=…`. It only serves `completed` orders, and redirects to an R2 signed URL that lasts 5 minutes and forces a download. The link itself does not expire, so customers can download again.
6. `checkout.session.expired` marks abandoned orders `failed`.

The price always comes from the database, never from the browser.

## Project structure

```
public/                     images: ebook covers, logo, hero art
src/
  app/
    page.tsx                home page
    layout.tsx              fonts, metadata, GA4, navbar, cart panel
    products/               listing (ProductsClient.tsx) and [slug] sales pages
    checkout/success/       thank-you page with the download button
    blogs/ about/ contact/ privacy/ terms/ returns/
    api/
      checkout/             creates the Stripe session and pending orders
      webhooks/stripe/      completes orders, sends the download email
      download/             paid check, then redirect to an R2 signed URL
      contact/              contact form: notifies support and auto-replies
      products/             product data (never returns fileName)
  components/               page sections: hero, navbar, footer, cart, etc.
  lib/
    product-content.ts      all sales copy per product slug
    blog-data.ts            all blog posts
    email.ts                Resend transport and the purchase email template
    stripe.ts               Stripe client (API version pinned here)
    r2.ts                   R2 client and signed download URLs
    db.ts                   cached Mongoose connection
  model/                    Mongoose schemas: Product, Order, User (unused)
  store/cart.ts             Zustand cart
next.config.ts              no-referrer and noindex headers for /checkout/success
```

## Data model

**Product** (`src/model/Product.ts`): `name`, `description`, `price`, `image` (path under `public/`), `fileName` (object key in R2), `slug` (unique), `category` (`workout` or `nutrition`), `upsellProducts` (another product's ID), `upsellDiscount` (percent).

**Order** (`src/model/Order.ts`): `email`, `product`, `amount`, `paymentStatus` (`pending`, `completed` or `failed`), `stripeSessionId` (unique), `downloadFileName`, `isUpsell`, `upsellProduct`.

Each product lives in two places:

- **MongoDB** holds what checkout depends on: price, slug, PDF file name, cover image and upsell.
- **`src/lib/product-content.ts`** holds the sales copy, keyed by slug: subtitle, badge, crossed-out price, bullets, FAQs and reviews. A product with no entry here returns 404.

API responses strip `fileName` so the R2 key is never sent to the browser.

## Email

All outgoing email goes through Resend over SMTP (`smtp.resend.com:465`, user `resend`, password `RESEND_API_KEY`). The addresses are constants in `src/lib/email.ts`.

| Email | From | To | Reply-To |
| --- | --- | --- | --- |
| Purchase confirmation with download link | `orders@fittzip.com` | Customer | `support@fittzip.com` |
| Contact form notification | `orders@fittzip.com` | `support@fittzip.com` | Customer |
| Contact form auto-reply | `support@fittzip.com` | Customer | — |

Mail to both addresses lands in one Google Workspace inbox. Resend only sends; do not enable receiving in Resend, because its MX record would break Google mail. An admin "new sale" email exists in `email.ts` but is commented out.

## Common changes

| Task | Where |
| --- | --- |
| Change a price | `price` on the product in MongoDB. No deploy needed. |
| Edit sales copy, FAQs or reviews | `src/lib/product-content.ts` |
| Add a blog post | `src/lib/blog-data.ts` |
| Change the home page YouTube videos | `videoId` values in `src/components/youtube-section.tsx` |
| Replace an ebook PDF | Upload to R2 with the same file name |
| Edit email templates | `src/lib/email.ts` and `src/app/api/contact/route.ts` |
| Change the announcement bar | `src/components/announcement-bar.tsx` |

### Launching Reset Your Plate

The nutrition ebook is built but hidden behind a "coming soon" page. Search for `🚀 LAUNCH`:

1. Upload `Reset-Your-Plate.pdf` to the R2 bucket.
2. `src/app/products/[slug]/page.tsx`: set `NUTRITION_COMING_SOON = false` and uncomment the `upsellOffer` block.
3. `src/app/products/ProductsClient.tsx`: set `NUTRITION_COMING_SOON = false`.
4. `src/components/products-section.tsx`: set `comingSoon: false` on `reset-your-plate`.
5. Fix the multi-item checkout issue below before turning on the upsell.

## Known issues

- **Multi-item checkout:** checkout creates one order per cart item with the same `stripeSessionId`, but that field is unique, so a cart with two products fails. The cart only holds one ebook today. Fix this before enabling the upsell (for example, one order with an array of items, or drop the unique index).
- **Download link uses the order ID:** `/api/download?orderId=…` should move to a random token, and the route has no rate limit.
- **R2 bucket:** confirm public access is off, otherwise the signed URLs add nothing.
- **GA4 on the success page:** the URL contains the Stripe session ID and is sent to Google Analytics.
- **Unused code:** the `User` model, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `R2_ENDPOINT` are not used. `STRIPE_SETUP.md` is out of date.
- **Dev only:** `allowedDevOrigins` in `next.config.ts` allows an ngrok tunnel used for webhook testing. It has no effect in production.

## Deployment

The site runs as a Node.js app (`npm run build`, then `npm start`). Set every environment variable above in the host's panel, with live Stripe keys and `NEXT_PUBLIC_APP_URL=https://fittzip.com`.

The production Stripe webhook points to `https://fittzip.com/api/webhooks/stripe` and must send `checkout.session.completed` and `checkout.session.expired`. MongoDB Atlas only accepts allow-listed IPs, so add the server's IP under Network Access when moving hosts.

After deploying, make one real purchase and check that the success page download, the confirmation email and its link all work, and that the contact form sends both emails.
