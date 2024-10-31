import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})

export const metadata: Metadata = {
    title: "Body Crafting System",
    description: "Don't spend years doing the wrong things in the gym",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const baseUrl = process.env.NEXT_PUBLIC_URL

    return (
        <html lang="en">
            <Analytics />
            <head>
                <meta
                    name="description"
                    content="Don't spend years doing the wrong things in the gym"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Don't spend years doing the wrong things in the gym"
                />
                <meta property="og:url" content={`${baseUrl}/`} />
                <meta
                    property="og:image"
                    content={`https://saitama.s3.eu-central-1.amazonaws.com/body+system/Untitled+design+(5).png`}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@laupwing1994" />
                <meta
                    name="twitter:description"
                    content="Don't spend years doing the wrong things in the gym"
                />
                <meta
                    name="twitter:image"
                    content={`https://saitama.s3.eu-central-1.amazonaws.com/body+system/Untitled+design+(5).png`}
                />
                <meta
                    property="og:logo"
                    content={`https://saitama.s3.eu-central-1.amazonaws.com/body+system/Untitled+design+(6).png`}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
