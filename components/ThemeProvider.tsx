"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import BackgroundBlobs from "@/components/BackgroundBlobs"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
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
    <>
      <BackgroundBlobs />
      <div className={cn("bg-background text-foreground antialiased transition-colors duration-500", dark && "dark")}>
        {children}
      </div>
    </>
  )
}
