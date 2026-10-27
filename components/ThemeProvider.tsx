"use client"

import { useEffect, useState } from "react"

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

  const toggle = () => {
    const next = !dark
    setDark(next)
    localStorage.setItem("python_mastery_theme", next ? "dark" : "light")
    document.documentElement.classList.toggle("dark", next)
  }

  return (
    <div className="dark-context" data-theme={dark ? "dark" : "light"}>
      {children}
      <button
        onClick={toggle}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-xl bg-card border border-border shadow-lg hover:bg-accent transition-colors"
        aria-label="Toggle theme"
      >
        {dark ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        )}
      </button>
    </div>
  )
}
