import { notFound } from "next/navigation"
import { getAllAIMLDS, getLesson as getAIMLDSLesson } from "@/lib/content/ai-ml-ds"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"
import { Zap } from "lucide.react"

const sections = [
  { slug: "numpy-basics", title: "NumPy Basics", icon: Zap },
  { slug: "pandas-basics", title: "pandas Basics", icon: Zap },
  { slug: "visualization", title: "Data Visualization", icon: Zap },
  { slug: "scikit-learn-basics", title: "scikit-learn Basics", icon: Zap },
]

export default function AIMLDSLesson({ params }: { params: { slug: string } }) {
  const lesson = getAIMLDSLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections as any} moduleName="AI/ML & DS" modulePath="/learn/ai-ml-ds">
      <LessonPlayer lesson={lesson} modulePath="/learn/ai-ml-ds" allLessons={getAllAIMLDS()} />
    </ModuleLayout>
  )
}
