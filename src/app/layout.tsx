import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

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
            <head>
                <meta
                    name="description"
                    content="Don't spend years doing the wrong things in the gym"
                />

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Don't spend years doing the wrong things in the gym"
                />
                <meta property="og:url" content={`${baseUrl}/`} />
                <meta
                    property="og:image"
                    content={`${baseUrl}/twitter/banner.png`}
                />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@laupwing1994" />
                <meta
                    name="twitter:description"
                    content="Don't spend years doing the wrong things in the gym"
                />
                <meta
                    name="twitter:image"
                    content={`${baseUrl}/twitter/banner.png`}
                />

                {/* Custom Meta Tags */}
                <meta
                    property="og:logo"
                    content={`${baseUrl}/assets/logo.png`}
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
