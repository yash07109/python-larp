import { notFound } from "next/navigation"
import { getAllComprehensions, getLesson } from "@/lib/content/comprehensions"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "list-comprehensions", title: "List Comprehensions", iconKey: "MousePointer", color: "bg-pink-500/20 text-pink-400" },
  { slug: "dict-comprehensions", title: "Dictionary Comprehensions", iconKey: "MousePointer", color: "bg-pink-500/20 text-pink-400" },
  { slug: "set-comprehensions", title: "Set Comprehensions", iconKey: "MousePointer", color: "bg-pink-500/20 text-pink-400" },
  { slug: "generator-expressions", title: "Generator Expressions", iconKey: "Zap", color: "bg-purple-500/20 text-purple-400" },
]

export default function ComprehensionsLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Comprehensions" modulePath="/learn/comprehensions">
      <LessonPlayer lesson={lesson} modulePath="/learn/comprehensions" allLessons={getAllComprehensions()} />
    </ModuleLayout>
  )
}
