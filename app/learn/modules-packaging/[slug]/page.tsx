import { notFound } from "next/navigation"
import { getAllModulesPackaging, getLesson as getModulesPackagingLesson } from "@/lib/content/modules-packaging"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Code2 } from "lucide.react"

const sections = [
  { slug: "import-system", title: "Import System", icon: Code2 },
  { slug: "pip-venv", title: "pip & Virtual Environments", icon: Code2 },
  { slug: "packages", title: "Packages & __init__.py", icon: Code2 },
]

export default function ModulesPackagingLesson({ params }: { params: { slug: string } }) {
  const lesson = getModulesPackagingLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="Modules & Packaging" modulePath="/learn/modules-packaging">
      <LessonPlayer lesson={lesson} modulePath="/learn/modules-packaging" allLessons={getAllModulesPackaging()} />
    </ModuleLayout>
  )
}
