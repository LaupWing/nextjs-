import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import path from "path"

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
        const attachmentPath = path.join(
            process.cwd(),
            "assets",
            "workout-plan-ebook.pdf"
        )
        console.log("Attachment Path:", attachmentPath)
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
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: "laupwing@gmail.com",
            subject: "Your Workout Plan Ebook",
            text: "Thank you for your purchase! Here is your ebook.",
            // attachments: [
            //     {
            //         filename: "workout-plan-ebook.pdf",
            //         path: attachmentPath,
            //     },
            // ],
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
