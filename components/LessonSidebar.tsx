"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { ChevronRight, Play, Code2, Zap, MousePointer, Target, GraduationCap, CheckCircle2, Clock } from "lucide.react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, any> = {
  Play, Code2, Zap, MousePointer, Target, GraduationCap,
}

interface LessonSidebarProps {
  sections: { slug: string; title: string; iconKey: string; color: string }[]
  currentSlug: string
  moduleName: string
  completedCount?: number
  totalCount?: number
}

export function LessonSidebar({ sections, currentSlug, moduleName, completedCount = 0, totalCount = 6 }: LessonSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (slug: string) => pathname === `/learn/${moduleName.toLowerCase().replace(" ", "-")}/${slug}` || pathname.includes(`/${slug}`)

  const Icon = (key: string) => iconMap[key] || Code2

  return (
    <aside className="hidden lg:flex lg:w-72 flex-col border-r border-border/50 bg-card/30 backdrop-blur-2xl sticky top-24 h-[calc(100vh-6rem)] rounded-3xl p-5 border border-white/10 shadow-2xl">
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
          const IconComp = Icon(section.iconKey)
          const active = isActive(section.slug)
          return (
            <button
              key={section.slug}
              onClick={() => router.push(`/learn/${moduleName.toLowerCase().replace(" ", "-")}/${section.slug}`)}
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
                <IconComp className="w-5 h-5" />
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
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs text-muted-foreground">{Math.round((completedCount / totalCount) * 100)}% complete</span>
        </div>
      </div>
    </aside>
  )
}
