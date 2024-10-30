import { NextResponse } from "next/server"
import Stripe from "stripe"
// import { PrismaClient } from "@prisma/client"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT!),
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export async function GET(req: Request) {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: "laupwing@gmail.com",
            subject: "Your Workout Plan Ebook",
            text: "Thank you for your purchase! Here is your ebook.",
            attachments: [
                {
                    filename: "workout-plan-ebook.pdf",
                    path: "./assets/workout-plan-ebook.pdf",
                },
            ],
        })
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: "Error sending email" },
            { status: 500 }
        )
    }

    return NextResponse.json({ received: true })
}
