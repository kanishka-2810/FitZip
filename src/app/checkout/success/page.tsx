import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle } from "lucide-react";
import dbConnect from "@/lib/db";
import stripe from "@/lib/stripe";
import Order from "@/model/Order";

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

  const order = await Order.findOne({ stripeSessionId: session_id });
  if (!order) {
    redirect("/products");
  }

  const session = await stripe.checkout.sessions
    .retrieve(session_id)
    .catch(() => null);

  if (!session || session.payment_status !== "paid") {
    redirect("/products");
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-black text-black mb-4">
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
        <p className="text-gray-600 mb-2">
          Check your email for download links and receipt details.
        </p>

        <p className="text-gray-600 mb-8">
          If you don’t see the product in your inbox, check the spam folder.
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
