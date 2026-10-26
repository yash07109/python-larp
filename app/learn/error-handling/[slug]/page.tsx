import { notFound } from "next/navigation"
import { getAllErrorHandling, getLesson as getErrorHandlingLesson } from "@/lib/content/error-handling"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Zap } from "lucide.react"

const sections = [
  { slug: "try-except", title: "Try / Except / Finally", icon: Zap },
  { slug: "custom-exceptions", title: "Custom Exceptions", icon: Zap },
  { slug: "logging-assertions", title: "Logging & Assertions", icon: Zap },
]

export default function ErrorHandlingLesson({ params }: { params: { slug: string } }) {
  const lesson = getErrorHandlingLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Error Handling" modulePath="/learn/error-handling">
      <LessonPlayer lesson={lesson} modulePath="/learn/error-handling" allLessons={getAllErrorHandling()} />
    </ModuleLayout>
  )
}
