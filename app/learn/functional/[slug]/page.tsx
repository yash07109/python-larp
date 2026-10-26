import { notFound } from "next/navigation"
import { getAllFunctional, getLesson as getFunctionalLesson } from "@/lib/content/functional"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "lambda-functions", title: "Lambda Functions", iconKey: "Code2", color: "bg-cyan-500/20 text-cyan-400" },
  { slug: "map-filter-reduce", title: "map, filter, reduce", iconKey: "Code2", color: "bg-cyan-500/20 text-cyan-400" },
  { slug: "partial-currying", title: "partial & Currying", iconKey: "Code2", color: "bg-cyan-500/20 text-cyan-400" },
]

export default function FunctionalLesson({ params }: { params: { slug: string } }) {
  const lesson = getFunctionalLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Functional Python" modulePath="/learn/functional">
      <LessonPlayer lesson={lesson} modulePath="/learn/functional" allLessons={getAllFunctional()} />
    </ModuleLayout>
  )
}
