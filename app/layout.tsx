import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BookVision | AI-Powered Book Digitization Platform",
  description:
    "Transform book flip videos into smart, searchable digital books with AI. IPFS storage and NFT ownership.",
  icons: "/favicon.ico",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
