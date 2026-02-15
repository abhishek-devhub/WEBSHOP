import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
    key_id : process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
    key_secret : process.env.NEXT_PUBLIC_RAZORPAY_API_SECRET
})

export async function POST(req) {
    const {amount} = await req.json()
    const order = await razorpay.orders.create({
        amount,
        currency:'INR'
    })
    return NextResponse.json(order)
}