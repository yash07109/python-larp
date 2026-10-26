"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, CheckCircle2, Clock, Target, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { useProgress } from "./useProgress"

export type Lesson = {
  slug: string;
  title: string;
  description: string;
  order: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  content: string;
  examples: CodeExample[];
  aiMlRelevance?: boolean;
};

export type CodeExample = {
  id: string;
  title: string;
  code: string;
  output?: string;
  explanation: string;
};

interface LessonPlayerProps {
  lesson: Lesson
  modulePath?: string
  allLessons?: { slug: string; title: string }[]
}

export function LessonPlayer({ lesson, modulePath = "/learn/fundamentals", allLessons }: LessonPlayerProps) {
  const { markComplete, isComplete } = useProgress()
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    setCompleted(isComplete(lesson.slug))
  }, [isComplete, lesson.slug])

  const lessons = allLessons || [
    { slug: "introduction-setup", title: "Introduction & Setup" },
    { slug: "variables-data-types", title: "Variables & Data Types" },
    { slug: "operators", title: "Operators" },
    { slug: "strings", title: "Strings" },
    { slug: "input-output", title: "Input & Output" },
    { slug: "comments-docstrings", title: "Comments & Docstrings" },
  ]

  const currentIndex = lessons.findIndex((l) => l.slug === lesson.slug)
  const nextLesson = lessons[currentIndex + 1]

  const handleMarkComplete = () => {
    markComplete(lesson.slug)
    setCompleted(true)
  }

  const quizPath = `/quiz/${modulePath.replace("/learn/", "")}`
  const notesPath = `/notes/${lesson.slug}`

  const difficultyColors: Record<string, string> = {
    beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    advanced: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  }

  return (
    <article className="space-y-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
        <Link
          href={modulePath}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Module
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={quizPath}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/50 text-sm font-medium hover:bg-accent hover:border-indigo-500/30 transition-colors"
          >
            <Quiz className="w-4 h-4" /> Quiz
          </Link>
          <Link
            href={notesPath}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/50 text-sm font-medium hover:bg-accent hover:border-indigo-500/30 transition-colors"
          >
            <FileText className="w-4 h-4" /> Notes
          </Link>
          <button
            onClick={handleMarkComplete}
            disabled={completed}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg",
              completed
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-emerald-500/20"
                : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 disabled:opacity-60"
            )}
          >
            {completed ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
            {completed ? "Completed" : "Mark Complete"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <main className="lg:col-span-8 space-y-10">
          <header className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={cn("px-2.5 py-1 rounded-xl text-xs font-bold border", difficultyColors[lesson.difficulty])}>
                {lesson.difficulty}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> {lesson.estimatedTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{lesson.title}</h1>
            <p className="text-lg text-muted-foreground">{lesson.description}</p>
          </header>

          <div className="prose prose-invert lg:prose-xl max-w-none text-muted-foreground leading-relaxed">
            {lesson.content.split("\n\n").map((para, i) => {
              if (para.trim().startsWith("|")) {
                return <div key={i} className="overflow-x-auto mb-6">{para}</div>
              }
              return <p key={i} className="mb-6">{para}</p>
            })}
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground border-b border-border/50 pb-3">Examples</h2>
            {lesson.examples.map((ex) => (
              <section key={ex.id} className="rounded-2xl border border-border bg-card/50 backdrop-blur p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">{ex.title}</h3>
                  <span className="text-xs font-bold bg-accent/50 px-2 py-0.5 rounded text-foreground uppercase tracking-wider">Example</span>
                </div>
                <div className="rounded-xl border border-border bg-black/60 overflow-hidden mb-3">
                  <pre className="p-4 font-mono text-sm text-green-400 overflow-x-auto"><code>{ex.code}</code></pre>
                </div>
                {ex.output && (
                  <div className="flex items-center gap-2 text-xs font-mono mb-3">
                    <span className="text-muted-foreground">Output:</span>
                    <span className="text-emerald-400">{ex.output}</span>
                  </div>
                )}
                <p className="text-sm text-muted-foreground">{ex.explanation}</p>
              </section>
            ))}
          </div>

          {lesson.aiMlRelevance && (
            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6 shadow-lg">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">AI/ML Relevant</span>
              </div>
              <p className="text-sm text-indigo-100/80 mt-2 leading-relaxed">
                This concept is directly used in AI, Machine Learning, and Data Science workflows.
              </p>
            </div>
          )}
        </main>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-6 shadow-xl">
            <h3 className="font-bold mb-3 text-foreground">Next Lesson</h3>
            {nextLesson ? (
              <Link
                href={`${modulePath}/${nextLesson.slug}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border hover:bg-accent hover:border-indigo-500/30 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-indigo-500 transition-colors" />
                <div>
                  <p className="text-sm font-bold text-foreground">{nextLesson.title}</p>
                  <p className="text-xs text-muted-foreground">Continue learning</p>
                </div>
              </Link>
            ) : (
              <p className="text-sm text-muted-foreground">You have completed all lessons in this module!</p>
            )}
          </div>

          <div className="rounded-2xl border border-border bg-secondary/50 p-6">
            <h3 className="font-bold mb-4 text-foreground">Lesson Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Difficulty</span>
                <span className="text-foreground font-bold">{lesson.difficulty}</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Estimated Time</span>
                <span className="text-foreground font-bold">{lesson.estimatedTime}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}
