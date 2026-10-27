import { notFound } from "next/navigation"
import { getAllControlFlow, getLesson } from "@/lib/content/control-flow"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "if-else", title: "If / Else Statements", iconKey: "Zap", color: "bg-emerald-500/20 text-emerald-400" },
  { slug: "loops", title: "Loops (for & while)", iconKey: "Code2", color: "bg-blue-500/20 text-blue-400" },
]

export default function ControlFlowLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Control Flow" modulePath="/learn/control-flow">
      <LessonPlayer lesson={lesson} modulePath="/learn/control-flow" allLessons={getAllControlFlow()} />
    </ModuleLayout>
  )
}
