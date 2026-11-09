import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle, Download } from "lucide-react";
import dbConnect from "@/lib/db";
import stripe from "@/lib/stripe";
import Order from "@/model/Order";
import type { IProduct } from "@/model/Product";

export const metadata: Metadata = {
  title: "Payment Successful",
  robots: { index: false, follow: false },
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/products");
  }

  await dbConnect();

  const order = await Order.findOne({ stripeSessionId: session_id }).populate(
    "product",
  );
  if (!order) {
    redirect("/products");
  }

  const session = await stripe.checkout.sessions
    .retrieve(session_id)
    .catch(() => null);

  if (!session || session.payment_status !== "paid") {
    redirect("/products");
  }

  // The Stripe webhook can arrive after the customer lands here, so unlock the
  // order from the verified session too. The webhook still sends the email.
  let downloadFileName: string | null = order.downloadFileName;
  if (order.paymentStatus !== "completed") {
    const product = order.product as IProduct;
    if (product?.fileName) {
      await Order.findByIdAndUpdate(order._id, {
        paymentStatus: "completed",
        downloadFileName: product.fileName,
      });
      downloadFileName = product.fileName;
    }
  }

  // Same link as the confirmation email
  const downloadUrl = downloadFileName
    ? `/api/download?orderId=${order._id}`
    : null;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div
        className="text-center max-w-md"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
        <h1
          className="text-3xl md:text-4xl font-black text-black mb-4"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-2">
          Thank you for your purchase! Your order has been confirmed.
        </p>
        {/* {session_id && (
          <p className="text-sm text-gray-400 mb-6">
            Session ID: {session_id}
          </p>
        )} */}
        {downloadUrl && (
          <a
            href={downloadUrl}
            rel="noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-green-600 hover:bg-green-700 text-white text-base sm:text-xl font-black uppercase tracking-wide sm:tracking-widest whitespace-nowrap px-4 sm:px-8 py-5 my-6 rounded-lg shadow-lg transition-colors"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <Download size={24} className="shrink-0" />
            Download PDF Now
          </a>
        )}

        <p className="text-gray-600 mb-2">
          {downloadUrl
            ? "We’ve also emailed you the download link, so you can download it again later."
            : "Check your email for download links and receipt details."}
        </p>

        <p className="text-gray-600 mb-8">
          If you don’t see the email in your inbox, check the spam folder.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/products"
            className="inline-block bg-[#CC0000] hover:bg-red-700 text-white font-black uppercase tracking-widest px-6 py-3 rounded-lg transition-colors"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="inline-block bg-black hover:bg-gray-800 text-white font-black uppercase tracking-widest px-6 py-3 rounded-lg transition-colors"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
