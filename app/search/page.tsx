"use client"

import { useState, useEffect } from "react"
import { Search as SearchIcon } from "lucide-react"
import Link from "next/link"

const modules = [
  { path: "/learn/fundamentals", title: "Fundamentals", icon: "🐍" },
  { path: "/learn/control-flow", title: "Control Flow", icon: "🔥" },
  { path: "/learn/functions", title: "Functions", icon: "⚡" },
  { path: "/learn/functions-depth", title: "Functions Depth", icon: "⚡" },
  { path: "/learn/data-structures", title: "Data Structures", icon: "⚡" },
  { path: "/learn/data-structures-depth", title: "Data Structures Depth", icon: "⚡" },
  { path: "/learn/comprehensions", title: "Comprehensions", icon: "🎯" },
  { path: "/learn/advanced", title: "Advanced Python", icon: "🎯" },
  { path: "/learn/oop", title: "OOP", icon: "⚡" },
  { path: "/learn/advanced-oop", title: "Advanced OOP", icon: "🎯" },
  { path: "/learn/error-handling", title: "Error Handling", icon: "🔥" },
  { path: "/learn/functional", title: "Functional Python", icon: "⚡" },
  { path: "/learn/file-io", title: "File I/O", icon: "🔥" },
  { path: "/learn/modules-packaging", title: "Modules & Packaging", icon: "⚡" },
  { path: "/learn/ai-ml-ds", title: "AI/ML & DS", icon: "🎓" },
]

const allLessons = [
  { title: "Introduction & Setup", path: "/learn/fundamentals/introduction-setup", module: "Fundamentals" },
  { title: "Variables & Data Types", path: "/learn/fundamentals/variables-data-types", module: "Fundamentals" },
  { title: "Operators", path: "/learn/fundamentals/operators", module: "Fundamentals" },
  { title: "Strings", path: "/learn/fundamentals/strings", module: "Fundamentals" },
  { title: "Input & Output", path: "/learn/fundamentals/input-output", module: "Fundamentals" },
  { title: "Comments & Docstrings", path: "/learn/fundamentals/comments-docstrings", module: "Fundamentals" },
  { title: "If / Else Statements", path: "/learn/control-flow/if-else", module: "Control Flow" },
  { title: "Loops (for & while)", path: "/learn/control-flow/loops", module: "Control Flow" },
  { title: "Defining Functions", path: "/learn/functions/defining-functions", module: "Functions" },
  { title: "*args & **kwargs", path: "/learn/functions/args-kwargs", module: "Functions" },
  { title: "Lists", path: "/learn/data-structures/lists", module: "Data Structures" },
  { title: "Dictionaries", path: "/learn/data-structures/dictionaries", module: "Data Structures" },
  { title: "Sets", path: "/learn/data-structures/sets", module: "Data Structures" },
  { title: "Tuples", path: "/learn/data-structures/tuples", module: "Data Structures" },
  { title: "List Comprehensions", path: "/learn/comprehensions/list-comprehensions", module: "Comprehensions" },
  { title: "Dictionary Comprehensions", path: "/learn/comprehensions/dict-comprehensions", module: "Comprehensions" },
  { title: "Set Comprehensions", path: "/learn/comprehensions/set-comprehensions", module: "Comprehensions" },
  { title: "Generator Expressions", path: "/learn/comprehensions/generator-expressions", module: "Comprehensions" },
  { title: "Decorators", path: "/learn/advanced/decorators", module: "Advanced Python" },
  { title: "Generators & Iterators", path: "/learn/advanced/generators-iterators", module: "Advanced Python" },
  { title: "Context Managers", path: "/learn/advanced/context-managers", module: "Advanced Python" },
  { title: "AsyncIO", path: "/learn/advanced/asyncio", module: "Advanced Python" },
  { title: "Classes & Objects", path: "/learn/oop/classes-objects", module: "OOP" },
  { title: "Inheritance", path: "/learn/oop/inheritance", module: "OOP" },
  { title: "Dunder Methods", path: "/learn/oop/dunder-methods", module: "OOP" },
  { title: "Abstraction & Encapsulation", path: "/learn/oop/abstraction-encapsulation", module: "OOP" },
  { title: "Try / Except / Finally", path: "/learn/error-handling/try-except", module: "Error Handling" },
  { title: "Custom Exceptions", path: "/learn/error-handling/custom-exceptions", module: "Error Handling" },
  { title: "Logging & Assertions", path: "/learn/error-handling/logging-assertions", module: "Error Handling" },
  { title: "Lambda Functions", path: "/learn/functional/lambda-functions", module: "Functional Python" },
  { title: "map, filter, reduce", path: "/learn/functional/map-filter-reduce", module: "Functional Python" },
  { title: "partial & Currying", path: "/learn/functional/partial-currying", module: "Functional Python" },
  { title: "NumPy Basics", path: "/learn/ai-ml-ds/numpy-basics", module: "AI/ML & DS" },
  { title: "pandas Basics", path: "/learn/ai-ml-ds/pandas-basics", module: "AI/ML & DS" },
  { title: "Data Visualization", path: "/learn/ai-ml-ds/visualization", module: "AI/ML & DS" },
  { title: "scikit-learn Basics", path: "/learn/ai-ml-ds/scikit-learn-basics", module: "AI/ML & DS" },
]

export default function Search() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(typeof window !== "undefined" ? allLessons : [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const filtered = allLessons.filter((l) =>
      l.title.toLowerCase().includes(query.toLowerCase()) ||
      l.module.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
  }, [query])

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-indigo-400 hover:text-indigo-300 font-medium group flex items-center gap-2">
            <span className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform">←</span> Back to Learning
          </a>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Search Lessons</h1>
          <p className="text-muted-foreground">Find any topic across all modules</p>
        </div>

        <div className="relative mb-8">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons, modules, topics..."
            className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-border bg-card/50 backdrop-blur focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all"
          />
        </div>

        <div className="space-y-3">
          {results.length > 0 ? (
            results.map((lesson) => (
              <a
                key={lesson.path}
                href={lesson.path}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-indigo-500/30 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <span className="text-lg shrink-0">{getIcon(lesson.module)}</span>
                <div className="flex-1">
                  <p className="font-bold text-foreground">{lesson.title}</p>
                  <p className="text-xs text-muted-foreground">{lesson.module}</p>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              No results found for "{query}"
            </div>
          )}
        </div>

        <div className="mt-16 border-t border-border/50 pt-10">
          <h2 className="text-lg font-bold mb-6">All Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {modules.map((m) => (
              <Link
                key={m.path}
                href={m.path}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border border-border bg-card/50 backdrop-blur hover:bg-accent hover:text-indigo-600 transition-colors"
              >
                <span className="text-lg">{m.icon}</span>
                {m.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function getIcon(module: string) {
  const map: Record<string, string> = {
    Fundamentals: "🐍", "Control Flow": "🔥", Functions: "⚡", "Functions Depth": "⚡",
    "Data Structures": "⚡", "Data Structures Depth": "⚡", Comprehensions: "🎯",
    "Advanced Python": "🎯", OOP: "⚡", "Advanced OOP": "🎯", "Error Handling": "🔥",
    "Functional Python": "⚡", "File I/O": "🔥", "Modules & Packaging": "⚡",
    "AI/ML & DS": "🎓",
  }
  return map[module] || "📘"
}
