import { notFound } from "next/navigation"
import { getAllAdvancedOOP, getLesson as getAdvancedOOPLesson } from "@/lib/content/advanced-oop"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "metaclasses", title: "Metaclasses", iconKey: "Target", color: "bg-rose-500/20 text-rose-400" },
  { slug: "descriptors", title: "Descriptors", iconKey: "Target", color: "bg-rose-500/20 text-rose-400" },
  { slug: "mro-multiple-inheritance", title: "MRO & Multiple Inheritance", iconKey: "Target", color: "bg-rose-500/20 text-rose-400" },
]

export default function AdvancedOOPLesson({ params }: { params: { slug: string } }) {
  const lesson = getAdvancedOOPLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Advanced OOP" modulePath="/learn/advanced-oop">
      <LessonPlayer lesson={lesson} modulePath="/learn/advanced-oop" allLessons={getAllAdvancedOOP()} />
    </ModuleLayout>
  )
}
