import { notFound } from "next/navigation"
import { getAllFunctional, getLesson as getFunctionalLesson } from "@/lib/content/functional"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Code2 } from "lucide.react"

const sections = [
  { slug: "lambda-functions", title: "Lambda Functions", icon: Code2 },
  { slug: "map-filter-reduce", title: "map, filter, reduce", icon: Code2 },
  { slug: "partial-currying", title: "partial & Currying", icon: Code2 },
]

export default function FunctionalLesson({ params }: { params: { slug: string } }) {
  const lesson = getFunctionalLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Functional Python" modulePath="/learn/functional">
      <LessonPlayer lesson={lesson} modulePath="/learn/functional" allLessons={getAllFunctional()} />
    </ModuleLayout>
  )
}
