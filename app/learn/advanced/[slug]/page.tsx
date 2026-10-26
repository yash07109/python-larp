import { notFound } from "next/navigation"
import { getAllAdvanced, getLesson as getAdvancedLesson } from "@/lib/content/advanced"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "decorators", title: "Decorators", iconKey: "Target", color: "bg-orange-500/20 text-orange-400" },
  { slug: "generators-iterators", title: "Generators & Iterators", iconKey: "Target", color: "bg-orange-500/20 text-orange-400" },
  { slug: "context-managers", title: "Context Managers", iconKey: "Target", color: "bg-orange-500/20 text-orange-400" },
  { slug: "asyncio", title: "AsyncIO", iconKey: "Zap", color: "bg-cyan-500/20 text-cyan-400" },
]

export default function AdvancedLesson({ params }: { params: { slug: string } }) {
  const lesson = getAdvancedLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Advanced Python" modulePath="/learn/advanced">
      <LessonPlayer lesson={lesson} modulePath="/learn/advanced" allLessons={getAllAdvanced()} />
    </ModuleLayout>
  )
}
