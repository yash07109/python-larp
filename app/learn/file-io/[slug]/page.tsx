import { notFound } from "next/navigation"
import { getAllFileIO, getLesson as getFileIOLesson } from "@/lib/content/file-io"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Zap } from "lucide.react"

const sections = [
  { slug: "reading-writing-files", title: "Reading & Writing Files", icon: Zap },
  { slug: "csv-json", title: "CSV & JSON", icon: Zap },
  { slug: "pathlib", title: "pathlib — Modern Paths", icon: Zap },
]

export default function FileIOLesson({ params }: { params: { slug: string } }) {
  const lesson = getFileIOLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="File I/O" modulePath="/learn/file-io">
      <LessonPlayer lesson={lesson} modulePath="/learn/file-io" allLessons={getAllFileIO()} />
    </ModuleLayout>
  )
}
