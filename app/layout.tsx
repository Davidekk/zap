import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zap-23",
  description: "Created by David",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex-center min-h-screen")}>
        {children}
      </body>
    </html>
  )
}
