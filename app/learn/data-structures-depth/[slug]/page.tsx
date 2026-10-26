import { notFound } from "next/navigation"
import { getAllDataStructuresDepth, getLesson as getDataStructuresDepthLesson } from "@/lib/content/data-structures-depth"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Code2 } from "lucide.react"

const sections = [
  { slug: "linked-list", title: "Linked List", icon: Code2 },
  { slug: "stack-queue", title: "Stack & Queue", icon: Code2 },
  { slug: "collections-module", title: "collections Module", icon: Code2 },
  { slug: "tree-graph", title: "Tree & Graph", icon: Code2 },
]

export default function DataStructuresDepthLesson({ params }: { params: { slug: string } }) {
  const lesson = getDataStructuresDepthLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Data Structures Depth" modulePath="/learn/data-structures-depth">
      <LessonPlayer lesson={lesson} modulePath="/learn/data-structures-depth" allLessons={getAllDataStructuresDepth()} />
    </ModuleLayout>
  )
}
