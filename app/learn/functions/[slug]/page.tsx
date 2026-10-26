import { notFound } from "next/navigation"
import { getAllFunctions, getLesson as getFunctionsLesson } from "@/lib/content/functions"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "defining-functions", title: "Defining Functions", iconKey: "Code2", color: "bg-blue-500/20 text-blue-400" },
  { slug: "args-kwargs", title: "*args & **kwargs", iconKey: "Zap", color: "bg-amber-500/20 text-amber-400" },
]

export default function FunctionsLesson({ params }: { params: { slug: string } }) {
  const lesson = getFunctionsLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Functions" modulePath="/learn/functions">
      <LessonPlayer lesson={lesson} modulePath="/learn/functions" allLessons={getAllFunctions()} />
    </ModuleLayout>
  )
}
