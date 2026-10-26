import { notFound } from "next/navigation"
import { getAllAIMLDS, getLesson as getAIMLDSLesson } from "@/lib/content/ai-ml-ds"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "numpy-basics", title: "NumPy Basics", iconKey: "Zap", color: "bg-violet-500/20 text-violet-400" },
  { slug: "pandas-basics", title: "pandas Basics", iconKey: "Zap", color: "bg-violet-500/20 text-violet-400" },
  { slug: "visualization", title: "Data Visualization", iconKey: "Zap", color: "bg-violet-500/20 text-violet-400" },
  { slug: "scikit-learn-basics", title: "scikit-learn Basics", iconKey: "GraduationCap", color: "bg-violet-500/20 text-violet-400" },
]

export default function AIMLDSIndex() {
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
              AI/ML & <span className="gradient-text-dark">Data Science</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              NumPy, pandas, Matplotlib, Seaborn, scikit-learn — the complete Python data stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/learn/ai-ml-ds/${section.slug}`}
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
import { getAllAIMLDS, getLesson as getAIMLDSLesson } from "@/lib/content/ai-ml-ds"

export default function AIMLDSLesson({ params }: { params: { slug: string } }) {
  const lesson = getAIMLDSLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="AI/ML & DS" modulePath="/learn/ai-ml-ds">
      <LessonPlayer lesson={lesson} modulePath="/learn/ai-ml-ds" allLessons={getAllAIMLDS()} />
    </ModuleLayout>
  )
}
