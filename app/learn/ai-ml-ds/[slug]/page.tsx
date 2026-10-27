import { notFound } from "next/navigation"
import { getAllAIMLDS, getLesson } from "@/lib/content/ai-ml-ds"
import { ModuleLayout } from "@/components/ModuleLayout"
import { LessonPlayer } from "@/components/LessonPlayer"

const sections = [
  { slug: "numpy-basics", title: "NumPy Basics", iconKey: "Zap", color: "bg-violet-500/20 text-violet-400" },
  { slug: "pandas-basics", title: "pandas Basics", iconKey: "Zap", color: "bg-violet-500/20 text-violet-400" },
  { slug: "visualization", title: "Data Visualization", iconKey: "Zap", color: "bg-violet-500/20 text-violet-400" },
  { slug: "scikit-learn-basics", title: "scikit-learn Basics", iconKey: "GraduationCap", color: "bg-violet-500/20 text-violet-400" },
]

export default function AiMlDsLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <ModuleLayout sections={sections} moduleName="AI/ML & DS" modulePath="/learn/ai-ml-ds">
      <LessonPlayer lesson={lesson} modulePath="/learn/ai-ml-ds" allLessons={getAllAIMLDS()} />
    </ModuleLayout>
  )
}
