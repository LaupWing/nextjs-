import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"
import path from "path"
import fs from "fs/promises"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function GET(req: Request) {
    try {
        console.log("Sending email")
        console.log(process.env.SENDGRID_API_KEY!)
        const attachmentPath = path.join(
            process.cwd(),
            "assets",
            "workout-plan-ebook.pdf"
        )
        const fileContent = await fs.readFile(attachmentPath)
        const base64File = fileContent.toString("base64")
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
        const msg = {
            to: "laupwing@gmail.com",
            from: process.env.EMAIL_FROM!,
            subject: "Your Workout Plan Ebook",
            text: "Thank you for your purchase! Here is your ebook.",
            attachments: [
                {
                    content: base64File,
                    filename: "workout-plan-ebook.pdf",
                    type: "application/pdf",
                    disposition: "attachment",
                },
            ],
        }

        // Send the email using SendGrid
        await sgMail.send(msg)
    } catch (err) {
        // @ts-ignore
        console.log(err.response)
        console.error(err)
        return NextResponse.json(
            { error: "Error sending email" },
            { status: 500 }
        )
    }

    return NextResponse.json({ received: true })
}
