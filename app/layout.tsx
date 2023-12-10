import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"

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
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "linear-gradient(129deg, #ff7000 0%, #e2995f 100%)",
              color: "#fff",
            },
            className: "my-toast",
          }}
        />
      </body>
    </html>
  )
}
