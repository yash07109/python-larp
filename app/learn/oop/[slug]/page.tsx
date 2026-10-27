import { notFound } from "next/navigation"
import { getAllOOP, getLesson } from "@/lib/content/oop"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "classes-objects", title: "Classes & Objects", iconKey: "Code2", color: "bg-rose-500/20 text-rose-400" },
  { slug: "inheritance", title: "Inheritance", iconKey: "Code2", color: "bg-rose-500/20 text-rose-400" },
  { slug: "dunder-methods", title: "Dunder Methods", iconKey: "Code2", color: "bg-rose-500/20 text-rose-400" },
  { slug: "abstraction-encapsulation", title: "Abstraction & Encapsulation", iconKey: "Target", color: "bg-rose-500/20 text-rose-400" },
]

export default function OopLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="OOP" modulePath="/learn/oop">
      <LessonPlayer lesson={lesson} modulePath="/learn/oop" allLessons={getAllOOP()} />
    </ModuleLayout>
  )
}
