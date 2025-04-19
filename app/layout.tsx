import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import DottedBackground from "@/components/DottedBackground"
import FloatingSymbols from "@/components/FloatingSymbols"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PHSCO Math Competition",
  description: "A challenging math competition for bright minds",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <DottedBackground>
          <FloatingSymbols />
          <Navigation />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </DottedBackground>
      </body>
    </html>
  )
}
