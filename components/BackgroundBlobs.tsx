"use client"

import { useEffect, useState } from "react"

export default function BackgroundBlobs() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="mesh-gradient" />
      <div
        className="orb bg-indigo-500/20"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-100px",
          animationDelay: "0s",
        }}
      />
      <div
        className="orb bg-violet-500/20"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-100px",
          right: "-100px",
          animationDelay: "-5s",
        }}
      />
      <div
        className="orb bg-pink-500/15"
        style={{
          width: "400px",
          height: "400px",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          animationDelay: "-10s",
        }}
      />
      <div
        className="fixed w-24 h-24 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none transition-all duration-500"
        style={{
          left: mouse.x - 120,
          top: mouse.y - 120,
        }}
      />
    </div>
  )
}
