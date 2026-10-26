"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Play, Zap, Code2, MousePointer, Target, GraduationCap, Sun, Moon, Search, ArrowRight, Sparkles, Code } from "lucide-react"

const modules = [
  { path: "/learn/fundamentals", title: "Fundamentals", desc: "Variables, types, operators, I/O", icon: Play, color: "bg-indigo-500/20 text-indigo-400" },
  { path: "/learn/control-flow", title: "Control Flow", desc: "If/else, loops, break/continue", icon: Zap, color: "bg-emerald-500/20 text-emerald-400" },
  { path: "/learn/functions", title: "Functions", desc: "def, args, kwargs, scope", icon: Code2, color: "bg-blue-500/20 text-blue-400" },
  { path: "/learn/functions-depth", title: "Functions Depth", desc: "LEGB scope, closures, recursion", icon: Code2, color: "bg-blue-500/20 text-blue-400" },
  { path: "/learn/data-structures", title: "Data Structures", desc: "Lists, dicts, sets, tuples", icon: Code2, color: "bg-purple-500/20 text-purple-400" },
  { path: "/learn/data-structures-depth", title: "Data Structures Depth", desc: "Linked lists, trees, graphs", icon: Code2, color: "bg-purple-500/20 text-purple-400" },
  { path: "/learn/comprehensions", title: "Comprehensions", desc: "List, dict, set, generators", icon: MousePointer, color: "bg-pink-500/20 text-pink-400" },
  { path: "/learn/advanced", title: "Advanced Python", desc: "Decorators, generators, asyncio", icon: Target, color: "bg-orange-500/20 text-orange-400" },
  { path: "/learn/oop", title: "OOP", desc: "Classes, inheritance, dunder methods", icon: Code2, color: "bg-rose-500/20 text-rose-400" },
  { path: "/learn/advanced-oop", title: "Advanced OOP", desc: "Metaclasses, descriptors, MRO", icon: Target, color: "bg-rose-500/20 text-rose-400" },
  { path: "/learn/error-handling", title: "Error Handling", desc: "try/except, logging, assertions", icon: Zap, color: "bg-amber-500/20 text-amber-400" },
  { path: "/learn/functional", title: "Functional Python", desc: "Lambda, map, filter, reduce", icon: Code2, color: "bg-cyan-500/20 text-cyan-400" },
  { path: "/learn/file-io", title: "File I/O", desc: "Files, CSV, JSON, pathlib", icon: Zap, color: "bg-lime-500/20 text-lime-400" },
  { path: "/learn/modules-packaging", title: "Modules & Packaging", desc: "Imports, pip, venv, packages", icon: Code2, color: "bg-fuchsia-500/20 text-fuchsia-400" },
  { path: "/learn/ai-ml-ds", title: "AI/ML & DS", desc: "NumPy, pandas, scikit-learn", icon: GraduationCap, color: "bg-violet-500/20 text-violet-400" },
]

export default function Home() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDark(document.documentElement.classList.contains("dark"))
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-500">
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Python<span className="gradient-text-dark">Mastery</span></span>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDark((p) => !p)}
                className="p-2.5 rounded-xl hover:bg-accent text-foreground transition-all group relative overflow-hidden"
                aria-label="Toggle theme"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                {dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <Link
                href="/playground"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Code className="w-4 h-4" /> Playground
              </Link>
              <Link
                href="/search"
                className="px-5 py-2.5 rounded-2xl border border-border hover:bg-accent text-sm font-semibold transition-all"
              >
                <Search className="w-4 h-4 mr-2" /> Search
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 uppercase tracking-wider animate-bounce-slow">
            <Sparkles className="w-3 h-3" /> New: Advanced OOP & Data Structures Depth
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            Learn Python from <br />
            <span className="gradient-text-dark">Zero to Advanced</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A beautiful, interactive platform to master Python — from absolute beginner to advanced level,<br />
            optimized for AI, Machine Learning, and Data Science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn/fundamentals"
              className="group relative px-9 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/60 hover:-translate-y-1 hover:scale-[1.02] transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Learning <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link
              href="/playground"
              className="px-9 py-4 rounded-2xl border border-border hover:bg-accent text-foreground font-bold transition-all hover:-translate-y-0.5"
            >
              Open Playground
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">All Modules</h2>
            <a href="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Browse all →</a>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {modules.map((m) => {
              const Icon = m.icon
              return (
                <Link
                  key={m.path}
                  href={m.path}
                  className="group relative p-6 rounded-3xl border border-border bg-card/80 backdrop-blur hover:border-indigo-500/30 hover:bg-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  <div className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 {m.color} group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-foreground transition-colors">{m.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{m.desc}</p>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                </Link>
              )
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-24 border-t border-border/50">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Python Mastery?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Code className="w-6 h-6 text-indigo-400" />} title="Perfect Examples" desc="Every concept comes with runnable code, real output, and line-by-line explanations." />
            <FeatureCard icon={<Sparkles className="w-6 h-6 text-violet-400" />} title="AI/ML Focused" desc="Lessons tagged for AI, Machine Learning, and Data Science relevance — learn what matters." />
            <FeatureCard icon={<Play className="w-6 h-6 text-emerald-400" />} title="Live Playground" desc="Run Python in your browser with Pyodide — no setup, no backend, instant results." />
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50 bg-background/80 backdrop-blur mt-auto py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/70">
          <span>Python Mastery Platform. Built for Vercel.</span>
          <div className="flex gap-4">
            <span>CS50P · Real Python · Python Docs</span>
            <span>Dark mode · Local progress</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card/50 hover:border-indigo-500/30 transition-all">
      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}
