import { notFound } from "next/navigation"
import { getAllDataStructuresDepth, getLesson } from "@/lib/content/data-structures-depth"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "linked-list", title: "Linked List", iconKey: "Code2", color: "bg-purple-500/20 text-purple-400" },
  { slug: "stack-queue", title: "Stack & Queue", iconKey: "Code2", color: "bg-purple-500/20 text-purple-400" },
  { slug: "collections-module", title: "collections Module", iconKey: "Zap", color: "bg-blue-500/20 text-blue-400" },
  { slug: "tree-graph", title: "Tree & Graph", iconKey: "Target", color: "bg-purple-500/20 text-purple-400" },
]

export default function DataStructuresDepthLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Data Structures Depth" modulePath="/learn/data-structures-depth">
      <LessonPlayer lesson={lesson} modulePath="/learn/data-structures-depth" allLessons={getAllDataStructuresDepth()} />
    </ModuleLayout>
  )
}
