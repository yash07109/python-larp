import { notFound } from "next/navigation"
import { getAllFileIO, getLesson as getFileIOLesson } from "@/lib/content/file-io"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "reading-writing-files", title: "Reading & Writing Files", iconKey: "Zap", color: "bg-lime-500/20 text-lime-400" },
  { slug: "csv-json", title: "CSV & JSON", iconKey: "Zap", color: "bg-lime-500/20 text-lime-400" },
  { slug: "pathlib", title: "pathlib — Modern Paths", iconKey: "Zap", color: "bg-lime-500/20 text-lime-400" },
]

export default function FileIOLesson({ params }: { params: { slug: string } }) {
  const lesson = getFileIOLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="File I/O" modulePath="/learn/file-io">
      <LessonPlayer lesson={lesson} modulePath="/learn/file-io" allLessons={getAllFileIO()} />
    </ModuleLayout>
  )
}
