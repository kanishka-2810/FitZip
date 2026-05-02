import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import stripe from "@/lib/stripe";
import Order from "@/model/Order";
import type { IProduct } from "@/model/Product";
import { sendPurchaseConfirmationEmail } from "@/lib/email";
import Stripe from "stripe";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!webhookSecret) {
  console.warn("STRIPE_WEBHOOK_SECRET is not defined");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!webhookSecret || !signature) {
      return NextResponse.json(
        { error: "Webhook secret or signature missing" },
        { status: 400 },
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (error) {
      console.error("Webhook signature verification failed:", error);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    await dbConnect();

    console.log(`Received webhook event: ${event.type}`);

    // Handle checkout.session.completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log(`Processing checkout session: ${session.id}`);

      // Find all orders with this session ID
      const orders = await Order.find({ stripeSessionId: session.id }).populate(
        "product",
      );

      console.log(`Found ${orders.length} orders for session ${session.id}`);

      if (orders.length === 0) {
        console.warn(`No orders found for session ${session.id}`);
        return NextResponse.json({ received: true });
      }

      // Process each order
      for (const order of orders) {
        try {
          console.log(
            `Processing order ${order._id} with status ${order.paymentStatus}`,
          );

          const product = order.product as IProduct; // Populated product

          if (!product || !product.fileName) {
            console.error(
              `Product or fileName not found for order ${order._id}`,
            );
            continue;
          }

          // Update order with completed status and file name
          console.log(`Updating order ${order._id} to completed status`);
          await Order.findByIdAndUpdate(order._id, {
            paymentStatus: "completed",
            downloadFileName: product.fileName,
          });
          console.log(`Successfully updated order ${order._id}`);

          // Build a permanent download link — the API route verifies payment and generates a fresh presigned URL on demand
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://fittzip.com";
          const downloadUrl = `${baseUrl}/api/download?orderId=${order._id}`;

          // Send confirmation email + admin notification
          await sendPurchaseConfirmationEmail(
            order.email,
            product.name,
            downloadUrl,
            order.amount,
          );

          console.log(`Processed order ${order._id} for session ${session.id}`);
        } catch (error) {
          console.error(`Failed to process order ${order._id}:`, error);
          // Continue processing other orders even if one fails
        }
      }

      console.log(
        `Completed processing ${orders.length} orders for session ${session.id}`,
      );
    }

    // Handle charge.failed
    if (event.type === "charge.failed") {
      const charge = event.data.object as Stripe.Charge;
      if (charge.payment_intent) {
        // You can handle failed payments here if needed
        console.log(`Payment failed for charge: ${charge.id}`);
      }
    }

    // Handle checkout.session.expired - mark orders as failed
    if (event.type === "checkout.session.expired") {
      const session = event.data.object as Stripe.Checkout.Session;
      await Order.updateMany(
        { stripeSessionId: session.id },
        { paymentStatus: "failed" },
      );
    }

    // Handle payment_intent.payment_failed
    // if (event.type === "payment_intent.payment_failed") {
    //   const paymentIntent = event.data.object as Stripe.PaymentIntent;
    //   // Update orders to failed status
    //   await Order.updateMany(
    //     { stripeSessionId: paymentIntent.client_secret },
    //     { paymentStatus: "failed" },
    //   );
    //   console.log(`Payment failed for intent: ${paymentIntent.id}`);
    // }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 },
    );
  }
}
