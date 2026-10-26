import { notFound } from "next/navigation"
import { getLesson as getControlFlowLesson } from "@/lib/content/control-flow"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "if-else", title: "If / Else Statements", icon: null },
  { slug: "loops", title: "Loops (for & while)", icon: null },
]

export default function ControlFlowLesson({ params }: { params: { slug: string } }) {
  const lesson = getControlFlowLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Control Flow" modulePath="/learn/control-flow">
      <LessonPlayer lesson={lesson} />
    </ModuleLayout>
  )
}
