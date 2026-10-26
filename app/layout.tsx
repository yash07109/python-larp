"use client"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { useEffect, useState } from "react"
import "./globals.css"
import { cn } from "@/lib/utils"
import BackgroundBlobs from "@/components/BackgroundBlobs"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Python Mastery | Learn Python to Advanced",
  description: "Learn Python from scratch to advanced with focus on AI/ML & Data Science.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("python_mastery_theme")
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const shouldDark = saved ? saved === "dark" : systemDark
      setDark(shouldDark)
      document.documentElement.classList.toggle("dark", shouldDark)
    }
  }, [])

  return (
    <html lang="en" className={cn(inter.variable, dark && "dark")} suppressHydrationWarning>
      <body className={cn("bg-background text-foreground antialiased transition-colors duration-500")}>
        <BackgroundBlobs />
        {children}
      </body>
    </html>
  )
}
