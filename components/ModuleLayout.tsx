"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { ChevronRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModuleLayoutProps {
  sections: { slug: string; title: string; iconKey: string; color: string }[]
  moduleName: string
  modulePath: string
  completedCount?: number
  totalCount?: number
  children: React.ReactNode
}

export function ModuleLayout({ sections, moduleName, modulePath, completedCount = 0, totalCount = 6, children }: ModuleLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (slug: string) => pathname === `${modulePath}/${slug}`

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Python<span className="gradient-text-dark">Mastery</span></span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/playground"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/30"
              >
                Playground
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3 hidden lg:flex flex-col border-r border-border/50 bg-card/30 backdrop-blur-2xl sticky top-24 h-[calc(100vh-6rem)] rounded-3xl p-5 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">{moduleName}</h2>
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="p-2 rounded-xl hover:bg-accent text-foreground transition-colors"
                aria-label="Collapse sidebar"
              >
                <ChevronRight className={cn("w-4 h-4", collapsed && "rotate-90")} />
              </button>
            </div>

            <nav className="space-y-2">
              {sections.map((section) => {
                const active = isActive(section.slug)
                return (
                  <button
                    key={section.slug}
                    onClick={() => router.push(`${modulePath}/${section.slug}`)}
                    className={cn(
                      "flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm transition-all duration-200",
                      active
                        ? "bg-gradient-to-r from-indigo-500/20 to-violet-500/10 text-indigo-400 border border-indigo-500/30 shadow-lg shadow-indigo-500/20"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground border-transparent",
                      collapsed && "px-3"
                    )}
                    aria-pressed={active}
                  >
                    <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors", active && "bg-indigo-500/20 text-indigo-400")}>
                      <span className="text-lg">{getEmoji(section.iconKey)}</span>
                    </div>
                    {!collapsed && <span className="font-medium">{section.title}</span>}
                  </button>
                )
              })}
            </nav>

            <div className="mt-auto pt-8 border-t border-border/50">
              <div className="flex items-center justify-between px-2 mb-3">
                <span className="text-xs text-muted-foreground">Progress</span>
                <span className="text-xs font-semibold text-foreground">{completedCount}/{totalCount}</span>
              </div>
              <div className="w-full bg-accent/30 rounded-full h-1.5 mb-4 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full rounded-full transition-all duration-1000" style={{ width: `${(completedCount / totalCount) * 100}%` }} />
              </div>
              <div className="flex items-center gap-2 px-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-muted-foreground">{Math.round((completedCount / totalCount) * 100)}% complete</span>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <div className="mb-8">
              <Link
                href={modulePath}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronRight className="w-4 h-4" /> {moduleName}
              </Link>
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

function getEmoji(key: string) {
  const map: Record<string, string> = {
    Play: "🐍", Code2: "⚡", Zap: "🔥", MousePointer: "🎯", Target: "🎯", GraduationCap: "🎓",
  }
  return map[key] || "📘"
}
