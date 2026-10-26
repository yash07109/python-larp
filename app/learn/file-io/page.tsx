import { notFound } from "next/navigation"
import { getAllFileIO, getLesson as getFileIOLesson } from "@/lib/content/file-io"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "reading-writing-files", title: "Reading & Writing Files", iconKey: "Zap", color: "bg-lime-500/20 text-lime-400" },
  { slug: "csv-json", title: "CSV & JSON", iconKey: "Zap", color: "bg-lime-500/20 text-lime-400" },
  { slug: "pathlib", title: "pathlib — Modern Paths", iconKey: "Zap", color: "bg-lime-500/20 text-lime-400" },
]

export default function FileIOIndex() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Python<span className="gradient-text-dark">Mastery</span></span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              File <span className="gradient-text-dark">I/O</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Files, CSV, JSON, pathlib — read, write, and manage data like a pro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/learn/file-io/${section.slug}`}
                className="group relative p-6 rounded-3xl border border-border bg-card/80 backdrop-blur hover:border-indigo-500/30 hover:bg-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 {section.color} group-hover:scale-110 transition-transform">
                  <span className="text-lg">{getEmoji(section.iconKey)}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-foreground transition-colors">{section.title}</h3>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function getEmoji(key: string) {
  const map: Record<string, string> = { Play: "🐍", Code2: "⚡", Zap: "🔥", MousePointer: "🎯", Target: "🎯", GraduationCap: "🎓" }
  return map[key] || "📘"
}

import Link from "next/link"
import { Zap } from "lucide.react"
import { getAllFileIO, getLesson as getFileIOLesson } from "@/lib/content/file-io"

export default function FileIOLesson({ params }: { params: { slug: string } }) {
  const lesson = getFileIOLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="File I/O" modulePath="/learn/file-io">
      <LessonPlayer lesson={lesson} modulePath="/learn/file-io" allLessons={getAllFileIO()} />
    </ModuleLayout>
  )
}
