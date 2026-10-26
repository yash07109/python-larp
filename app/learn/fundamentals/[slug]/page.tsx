import { notFound } from "next/navigation"
import { getAllFundamentals, getLesson } from "@/lib/content/fundamentals"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "introduction-setup", title: "Introduction & Setup", iconKey: "Play", color: "bg-indigo-500/20 text-indigo-400" },
  { slug: "variables-data-types", title: "Variables & Data Types", iconKey: "Code2", color: "bg-blue-500/20 text-blue-400" },
  { slug: "operators", title: "Operators", iconKey: "Zap", color: "bg-emerald-500/20 text-emerald-400" },
  { slug: "strings", title: "Strings", iconKey: "MousePointer", color: "bg-pink-500/20 text-pink-400" },
  { slug: "input-output", title: "Input & Output", iconKey: "Zap", color: "bg-amber-500/20 text-amber-400" },
  { slug: "comments-docstrings", title: "Comments & Docstrings", iconKey: "Code2", color: "bg-blue-500/20 text-blue-400" },
]

export default function FundamentalsLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Fundamentals" modulePath="/learn/fundamentals">
      <LessonPlayer lesson={lesson} modulePath="/learn/fundamentals" allLessons={getAllFundamentals()} />
    </ModuleLayout>
  )
}
