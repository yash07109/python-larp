"use client"

import { useState } from "react"
import Link from "next/link"
import { getQuiz } from "@/lib/content/quizzes"

export default function QuizPage({ params }: any) {
  const quiz = getQuiz(params.module)
  const [currentQ, setCurrentQ] = useState(0)

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md rounded-3xl border border-border bg-card/50 backdrop-blur p-8 shadow-2xl text-center">
          <h2 className="text-xl font-bold mb-2">Quiz not found</h2>
          <Link href="/" className="text-indigo-400 hover:underline text-sm">Back to home</Link>
        </div>
      </div>
    )
  }

  const q = quiz.questions[currentQ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 font-medium group flex items-center gap-2">
            Back to Learning
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
        <p className="text-lg font-bold mb-6">{q.question}</p>
        <div className="space-y-3">
          {q.options.map((opt: string, i: number) => (
            <button
              key={i}
              className="w-full text-left px-5 py-4 rounded-xl border border-border hover:bg-accent transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
