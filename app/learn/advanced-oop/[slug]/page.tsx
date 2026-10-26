import { notFound } from "next/navigation"
import { getAllAdvancedOOP, getLesson as getAdvancedOOPLesson } from "@/lib/content/advanced-oop"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Target } from "lucide.react"

const sections = [
  { slug: "metaclasses", title: "Metaclasses", icon: Target },
  { slug: "descriptors", title: "Descriptors", icon: Target },
  { slug: "mro-multiple-inheritance", title: "MRO & Multiple Inheritance", icon: Target },
]

export default function AdvancedOOPLesson({ params }: { params: { slug: string } }) {
  const lesson = getAdvancedOOPLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Advanced OOP" modulePath="/learn/advanced-oop">
      <LessonPlayer lesson={lesson} modulePath="/learn/advanced-oop" allLessons={getAllAdvancedOOP()} />
    </ModuleLayout>
  )
}
