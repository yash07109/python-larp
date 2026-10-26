import { notFound } from "next/navigation"
import { getLesson } from "@/lib/content/fundamentals"
import { LessonSidebar } from "@/components/LessonSidebar"
import { LessonPlayer } from "@/components/LessonPlayer"

export default function FundamentalsLesson({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <LessonSidebar currentSlug={lesson.slug} className="lg:col-span-3" />
          <main className="lg:col-span-9">
            <LessonPlayer lesson={lesson} />
          </main>
        </div>
      </div>
    </div>
  )
}
