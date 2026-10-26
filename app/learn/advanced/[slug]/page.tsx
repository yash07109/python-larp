import { notFound } from "next/navigation"
import { getAllAdvanced, getLesson as getAdvancedLesson } from "@/lib/content/advanced"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Zap } from "lucide-react"

const sections = [
  { slug: "decorators", title: "Decorators", icon: Zap },
  { slug: "generators-iterators", title: "Generators & Iterators", icon: Zap },
  { slug: "context-managers", title: "Context Managers", icon: Zap },
  { slug: "asyncio", title: "AsyncIO", icon: Zap },
]

export default function AdvancedLesson({ params }: { params: { slug: string } }) {
  const lesson = getAdvancedLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Advanced Python" modulePath="/learn/advanced">
      <LessonPlayer lesson={lesson} modulePath="/learn/advanced" allLessons={getAllAdvanced()} />
    </ModuleLayout>
  )
}
