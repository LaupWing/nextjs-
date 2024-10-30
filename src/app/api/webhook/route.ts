import { NextResponse } from "next/server"
import Stripe from "stripe"
// import { PrismaClient } from "@prisma/client"
import nodemailer from "nodemailer"
import path from "path"

// const prisma = new PrismaClient()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-09-30.acacia",
})

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT!),
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export async function POST(req: Request) {
    const buf = await req.text()
    const sig = req.headers.get("stripe-signature")!

    let event: Stripe.Event
    console.log(process.env.STRIPE_WEBHOOK_SECRET!)
    try {
        event = stripe.webhooks.constructEvent(
            buf,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "Webhook signature verification failed" },
            { status: 400 }
        )
    }

    console.log("Received event", event.type)
    if (event.type === "checkout.session.completed") {
        // console.log("Received event", event)
        const session = event.data.object as Stripe.Checkout.Session
        const customerEmail = session.customer_details?.email

        if (customerEmail) {
            // Create database record
            console.log("Creating user record for", customerEmail)
            // await prisma.user.create({
            //     data: {
            //         email: customerEmail,
            //     },
            // })
            console.log({
                from: process.env.EMAIL_FROM,
                to: customerEmail,
                subject: "Body Craft System Ebook",
                text: "Thank you for your purchase! Here is your ebook. Reply to this email to book a call with me!.",
            })
            try {
                // Send email
                await transporter.sendMail({
                    from: process.env.EMAIL_FROM,
                    to: customerEmail,
                    subject: "Body Craft System Ebook",
                    text: "Thank you for your purchase! Here is your ebook. Reply to this email to book a call with me!.",
                    attachments: [
                        {
                            filename: "workout-plan-ebook.pdf",
                            path: path.join(
                                process.cwd(),
                                "assets",
                                "workout-plan-ebook.pdf"
                            ),
                        },
                    ],
                })
                await transporter.sendMail({
                    from: process.env.EMAIL_FROM,
                    to: "laupwing@gmail.com",
                    subject: "New Order",
                    text: `New order from ${customerEmail}`,
                })
            } catch (err) {
                console.log(err)
                return NextResponse.json(
                    { error: "Error sending email" },
                    { status: 500 }
                )
            }
        }
    }

    return NextResponse.json({ received: true })
}
