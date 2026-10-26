import { notFound } from "next/navigation"
import { getAllErrorHandling, getLesson as getErrorHandlingLesson } from "@/lib/content/error-handling"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "try-except", title: "Try / Except / Finally", iconKey: "Zap", color: "bg-amber-500/20 text-amber-400" },
  { slug: "custom-exceptions", title: "Custom Exceptions", iconKey: "Zap", color: "bg-amber-500/20 text-amber-400" },
  { slug: "logging-assertions", title: "Logging & Assertions", iconKey: "Zap", color: "bg-amber-500/20 text-amber-400" },
]

export default function ErrorHandlingLesson({ params }: { params: { slug: string } }) {
  const lesson = getErrorHandlingLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Error Handling" modulePath="/learn/error-handling">
      <LessonPlayer lesson={lesson} modulePath="/learn/error-handling" allLessons={getAllErrorHandling()} />
    </ModuleLayout>
  )
}
