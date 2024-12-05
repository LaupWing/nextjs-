import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import fs from "fs/promises"

import sgMail from "@sendgrid/mail"
import path from "path"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function GET(req: Request) {
    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // Use TLS
        auth: {
            user: process.env.MAIL_USERNAME, // Your Microsoft email address
            pass: process.env.MAIL_PASSWORD, // Your Microsoft email password or app password
        },
    })

    try {
        // Read the file and encode it to Base64
        const attachmentPath = path.join(
            process.cwd(),
            "assets",
            "workout-plan-ebook.pdf"
        )
        const fileBuffer = await fs.readFile(attachmentPath)
        const base64File = fileBuffer.toString("base64")
        // Send the email
        await transporter.sendMail({
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
            to: "laupwing@gmail.com",
            subject: "Test email",
            text: "This is a test email text",
            attachments: [
                {
                    contentType: "application/pdf",
                    path: attachmentPath,
                    filename: "workout-plan-ebook.pdf",
                },
            ],
        })
        await sgMail.send({
            from: process.env.EMAIL_FROM!,
            to: "laupwing@gmail.com",
            subject: "item.description",
            text: `New coaching order from test@test.com`,
        })
        // console.log("Email sent: %s", info.messageId)
        return NextResponse.json({ received: true })
    } catch (error) {
        console.error("Error sending email:", error)
        return NextResponse.json(
            { error: "Error sending email" },
            { status: 500 }
        )
    }
}
