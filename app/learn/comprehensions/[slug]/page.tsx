import { notFound } from "next/navigation"
import { getAllComprehensions, getLesson as getComprehensionsLesson } from "@/lib/content/comprehensions"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Code2 } from "lucide-react"

const sections = [
  { slug: "list-comprehensions", title: "List Comprehensions", icon: Code2 },
  { slug: "dict-comprehensions", title: "Dictionary Comprehensions", icon: Code2 },
  { slug: "set-comprehensions", title: "Set Comprehensions", icon: Code2 },
  { slug: "generator-expressions", title: "Generator Expressions", icon: Code2 },
]

export default function ComprehensionsLesson({ params }: { params: { slug: string } }) {
  const lesson = getComprehensionsLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Comprehensions" modulePath="/learn/comprehensions">
      <LessonPlayer lesson={lesson} modulePath="/learn/comprehensions" allLessons={getAllComprehensions()} />
    </ModuleLayout>
  )
}
