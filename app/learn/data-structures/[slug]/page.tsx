import { notFound } from "next/navigation"
import { getAllDataStructures, getLesson } from "@/lib/content/data-structures"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "lists", title: "Lists", iconKey: "Code2", color: "bg-purple-500/20 text-purple-400" },
  { slug: "dictionaries", title: "Dictionaries", iconKey: "Zap", color: "bg-blue-500/20 text-blue-400" },
  { slug: "sets", title: "Sets", iconKey: "MousePointer", color: "bg-pink-500/20 text-pink-400" },
  { slug: "tuples", title: "Tuples", iconKey: "Code2", color: "bg-purple-500/20 text-purple-400" },
]

export default function DataStructuresLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Data Structures" modulePath="/learn/data-structures">
      <LessonPlayer lesson={lesson} modulePath="/learn/data-structures" allLessons={getAllDataStructures()} />
    </ModuleLayout>
  )
}
