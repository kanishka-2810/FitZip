import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/db";
import Order from "@/model/Order";
import { generateDownloadUrl } from "@/lib/r2";

// Download links must never be cached, indexed, or leaked through the Referer header
const PRIVATE_HEADERS = {
  "Cache-Control": "private, no-store",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow",
};

export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get("orderId");

  if (!orderId || !mongoose.isValidObjectId(orderId)) {
    return NextResponse.json(
      { error: "Invalid orderId" },
      { status: 400, headers: PRIVATE_HEADERS },
    );
  }

  await dbConnect();

  const order = await Order.findOne({
    _id: orderId,
    paymentStatus: "completed",
  });

  if (!order || !order.downloadFileName) {
    return NextResponse.json(
      { error: "Not found" },
      { status: 404, headers: PRIVATE_HEADERS },
    );
  }

  const url = await generateDownloadUrl(order.downloadFileName);

  const response = NextResponse.redirect(url);
  for (const [key, value] of Object.entries(PRIVATE_HEADERS)) {
    response.headers.set(key, value);
  }
  return response;
}
