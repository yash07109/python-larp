import { notFound } from "next/navigation"
import { getAllModulesPackaging, getLesson } from "@/lib/content/modules-packaging"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "import-system", title: "Import System", iconKey: "Code2", color: "bg-fuchsia-500/20 text-fuchsia-400" },
  { slug: "pip-venv", title: "pip & Virtual Environments", iconKey: "Code2", color: "bg-fuchsia-500/20 text-fuchsia-400" },
  { slug: "packages", title: "Packages & __init__.py", iconKey: "Code2", color: "bg-fuchsia-500/20 text-fuchsia-400" },
]

export default function ModulesPackagingLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="Modules & Packaging" modulePath="/learn/modules-packaging">
      <LessonPlayer lesson={lesson} modulePath="/learn/modules-packaging" allLessons={getAllModulesPackaging()} />
    </ModuleLayout>
  )
}
