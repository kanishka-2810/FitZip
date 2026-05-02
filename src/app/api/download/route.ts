import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Order from "@/model/Order";
import { generateDownloadUrl } from "@/lib/r2";

export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get("orderId");

  if (!orderId) {
    return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
  }

  await dbConnect();

  const order = await Order.findOne({
    _id: orderId,
    paymentStatus: "completed",
  });

  if (!order || !order.downloadFileName) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const url = await generateDownloadUrl(order.downloadFileName);

  return NextResponse.redirect(url);
}
