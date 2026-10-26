import { notFound } from "next/navigation"
import { getLesson as getFunctionsLesson } from "@/lib/content/functions"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "defining-functions", title: "Defining Functions", icon: null },
  { slug: "args-kwargs", title: "*args & **kwargs", icon: null },
]

export default function FunctionsLesson({ params }: { params: { slug: string } }) {
  const lesson = getFunctionsLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Functions" modulePath="/learn/functions">
      <LessonPlayer lesson={lesson} />
    </ModuleLayout>
  )
}
