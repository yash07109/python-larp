import { notFound } from "next/navigation"
import { getAllFunctionsDepth, getLesson } from "@/lib/content/functions-depth"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "scope-lebg", title: "LEGB Scope Rule", iconKey: "Code2", color: "bg-blue-500/20 text-blue-400" },
  { slug: "default-mutable-args", title: "Default & Mutable Arguments", iconKey: "Zap", color: "bg-amber-500/20 text-amber-400" },
  { slug: "recursion", title: "Recursion", iconKey: "Code2", color: "bg-blue-500/20 text-blue-400" },
]

export default function FunctionsDepthLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Functions Depth" modulePath="/learn/functions-depth">
      <LessonPlayer lesson={lesson} modulePath="/learn/functions-depth" allLessons={getAllFunctionsDepth()} />
    </ModuleLayout>
  )
}
