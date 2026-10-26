import { notFound } from "next/navigation"
import { getLesson as getDataStructuresLesson } from "@/lib/content/data-structures"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "lists", title: "Lists", icon: null },
  { slug: "dictionaries", title: "Dictionaries", icon: null },
  { slug: "sets", title: "Sets", icon: null },
  { slug: "tuples", title: "Tuples", icon: null },
]

export default function DataStructuresLesson({ params }: { params: { slug: string } }) {
  const lesson = getDataStructuresLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Data Structures" modulePath="/learn/data-structures">
      <LessonPlayer lesson={lesson} />
    </ModuleLayout>
  )
}
