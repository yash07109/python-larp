import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Python Mastery | Learn Python to Advanced",
  description: "Learn Python from scratch to advanced with focus on AI/ML & Data Science.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased transition-colors duration-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
