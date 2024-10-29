import { NextResponse } from "next/server"
import Stripe from "stripe"
// import { PrismaClient } from "@prisma/client"
import nodemailer from "nodemailer"

// const prisma = new PrismaClient()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-09-30.acacia",
})

console.log({
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
})

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT!),
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export async function GET(req: Request) {
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

    return NextResponse.json({ received: true })
}
