import { notFound } from "next/navigation"
import { getAllOOP, getLesson as getOOPLesson } from "@/lib/content/oop"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Code2 } from "lucide-react"

const sections = [
  { slug: "classes-objects", title: "Classes & Objects", icon: Code2 },
  { slug: "inheritance", title: "Inheritance", icon: Code2 },
  { slug: "dunder-methods", title: "Dunder Methods", icon: Code2 },
  { slug: "abstraction-encapsulation", title: "Abstraction & Encapsulation", icon: Code2 },
]

export default function OOPLesson({ params }: { params: { slug: string } }) {
  const lesson = getOOPLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="OOP" modulePath="/learn/oop">
      <LessonPlayer lesson={lesson} modulePath="/learn/oop" allLessons={getAllOOP()} />
    </ModuleLayout>
  )
}
