import { getAllFundamentals } from "@/lib/content/fundamentals"
import Link from "next/link"
import { Play } from "lucide.react"

export default function FundamentalsIndex() {
  const lessons = getAllFundamentals()

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Python<span className="gradient-text-dark">Mastery</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Python <span className="gradient-text-dark">Fundamentals</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master the building blocks of Python — variables, data types, operators, strings,
              input/output, and more. Perfect foundation for AI, ML, and Data Science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/learn/fundamentals/${lesson.slug}`}
                className="group relative p-6 rounded-3xl border border-border bg-card/80 backdrop-blur hover:border-indigo-500/30 hover:bg-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="w-13 h-13 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Play className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-foreground transition-colors">{lesson.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{lesson.description}</p>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
