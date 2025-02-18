import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-09-30.acacia",
})

export async function POST() {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card", "paypal"],
            line_items: [
                {
                    price: process.env.STRIPE_PRICE_ID,
                    // "price_1QFIvw00YeJKjPgjCb8R1xlO"
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL}/`,
        })

        return NextResponse.json({ sessionId: session.id })
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: "Error creating checkout session" },
            { status: 500 }
        )
    }
}
