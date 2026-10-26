import { notFound } from "next/navigation"
import { getAllFunctionsDepth, getLesson as getFunctionsDepthLesson } from "@/lib/content/functions-depth"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Code2 } from "lucide.react"

const sections = [
  { slug: "scope-lebg", title: "LEGB Scope Rule", icon: Code2 },
  { slug: "default-mutable-args", title: "Default & Mutable Arguments", icon: Code2 },
  { slug: "recursion", title: "Recursion", icon: Code2 },
]

export default function FunctionsDepthLesson({ params }: { params: { slug: string } }) {
  const lesson = getFunctionsDepthLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Functions Depth" modulePath="/learn/functions-depth">
      <LessonPlayer lesson={lesson} modulePath="/learn/functions-depth" allLessons={getAllFunctionsDepth()} />
    </ModuleLayout>
  )
}
