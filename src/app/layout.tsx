import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MainLayout from "@/components/layout/MainLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LangProject - Language Learning Platform",
  description: "A modern language learning platform built with Next.js and FastAPI",
  keywords: ["language learning", "education", "nextjs", "fastapi"],
  authors: [{ name: "LangProject Team" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
