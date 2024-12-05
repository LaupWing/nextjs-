import { NextResponse } from "next/server"
import Stripe from "stripe"
import sgMail from "@sendgrid/mail"
import path from "path"
import fs from "fs/promises"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

// const prisma = new PrismaClient()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-09-30.acacia",
})

export async function POST(req: Request) {
    const buf = await req.text()
    const sig = req.headers.get("stripe-signature")!
    let event: Stripe.Event
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
        const session = event.data.object as Stripe.Checkout.Session
        const customerEmail = session.customer_details?.email
        if (customerEmail) {
            const attachmentPath = path.join(
                process.cwd(),
                "assets",
                "workout-plan-ebook.pdf"
            )
            const fileContent = await fs.readFile(attachmentPath)
            const base64File = fileContent.toString("base64")
            const lineItems = await stripe.checkout.sessions.listLineItems(
                session.id
            )

            lineItems.data.forEach(async (item) => {
                if (customerEmail) {
                    const priceId = item?.price?.id

                    if (priceId === process.env.STRIPE_PRICE_ID) {
                        console.log({
                            from: process.env.EMAIL_FROM,
                            to: "laupwing@gmail.com",
                            subject: "Your Workout Plan Ebook",
                            text: "Thank you for your purchase! Here is your ebook.",
                            attachments: [
                                {
                                    filename: "workout-plan-ebook.pdf",
                                    path: attachmentPath,
                                },
                            ],
                        })
                        try {
                            await sgMail.send({
                                from: process.env.EMAIL_FROM!,
                                to: customerEmail,
                                subject: "Body Craft System Ebook",
                                text: "Thank you for your purchase! Here is your ebook!.",
                                attachments: [
                                    {
                                        content: base64File,
                                        filename: "workout-plan-ebook.pdf",
                                        type: "application/pdf",
                                        disposition: "attachment",
                                    },
                                ],
                            })
                            await sgMail.send({
                                from: process.env.EMAIL_FROM!,
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
            })
        }
    }
    return NextResponse.json({ received: true })
}
