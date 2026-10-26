"use client"

import { useState } from "react"
import { ArrowRight, Trophy, GraduationCap, CheckCircle2, XCircle } from "lucide.react"
import { getQuiz } from "@/lib/content/quizzes"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface QuizPageProps {
  module: string
}

export default function QuizPage({ module }: QuizPageProps) {
  const quiz = getQuiz(module)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<{ [qId: string]: number }>({})
  const [submitted, setSubmitted] = useState(false)
  const [showResult, setShowResult] = useState(false)

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

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [quiz.questions[currentQ].id]: optionIndex })
  }

  const nextQuestion = () => {
    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setSubmitted(true)
    }
  }

  const calculateScore = () => {
    let score = 0
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) score++
    })
    return score
  }

  const score = calculateScore()
  const percentage = Math.round((score / quiz.questions.length) * 100)
  const passed = percentage >= 70

  const currentQuestion = quiz.questions[currentQ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 font-medium group flex items-center gap-2">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Learning
          </Link>
          <div className="flex items-center gap-4">
            <a href="/certificate" className="px-4 py-2 rounded-xl border border-border hover:bg-accent text-sm font-medium transition-colors">
              Certificate
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {!showResult && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{quiz.title}</h1>
              <span className="text-xs font-bold bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded border border-indigo-500/20">
                {currentQ + 1} / {quiz.questions.length}
              </span>
            </div>

            <div className="w-full bg-secondary/30 rounded-lg h-2">
              <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full transition-all duration-300" style={{ width: `${((currentQ + 1) / quiz.questions.length) * 100}%` }} />
            </div>

            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 shadow-xl">
              <h2 className="text-lg font-bold mb-6">{currentQuestion.question}</h2>
              <div className="space-y-3">
                {currentQuestion.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={cn(
                      "w-full text-left px-5 py-4 rounded-xl border transition-all text-sm",
                      answers[currentQuestion.id] === i
                        ? "bg-indigo-500/10 border-indigo-500 text-indigo-400 shadow-lg shadow-indigo-500/10"
                        : "bg-card/30 border-border hover:bg-accent/50 hover:border-indigo-500/30"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              {currentQ > 0 && (
                <button
                  onClick={() => setCurrentQ(currentQ - 1)}
                  className="px-5 py-2 rounded-xl text-muted-foreground hover:bg-accent transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                onClick={nextQuestion}
                disabled={answers[currentQuestion.id] === undefined}
                className={cn(
                  "px-6 py-2 rounded-xl font-bold transition-colors shadow-lg",
                  answers[currentQuestion.id] === undefined
                    ? "text-muted-foreground cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/40 disabled:opacity-60"
                )}
              >
                {currentQ === quiz.questions.length - 1 ? "Finish Quiz" : <ArrowRight className="w-4 h-4 ml-2" /> Next}
              </button>
            </div>
          </div>
        )}

        {submitted && !showResult && (
          <div className="text-center py-12">
            <div className={cn("mx-auto mb-6", passed ? "text-emerald-500" : "text-amber-500")} className="text-6xl">
              {passed ? <Trophy className="w-12 h-12" /> : <GraduationCap className="w-12 h-12" />}
            </div>
            <h1 className="text-3xl font-bold mb-4">{passed ? "You Passed!" : "Keep Practicing"}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Score: {score} / {quiz.questions.length} ({percentage}%)
            </p>
            <button
              onClick={() => setShowResult(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/40 transition-colors font-semibold"
            >
              Review Answers
            </button>
          </div>
        )}

        {showResult && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Review</h1>
            {quiz.questions.map((q) => {
              const userAnswer = answers[q.id]
              const isCorrect = userAnswer === q.correctAnswer
              return (
                <div key={q.id} className={cn("p-5 rounded-2xl border", isCorrect ? "border-emerald-500/30 bg-emerald-500/5" : "border-rose-500/30 bg-rose-500/5")}>
                  <p className="font-bold mb-2">{q.question}</p>
                  <div className="text-sm mb-2">
                    <span className={cn("font-bold", isCorrect ? "text-emerald-700" : "text-rose-700")}>
                      {isCorrect ? "✓ Correct" : `✗ Incorrect (you chose: ${q.options[userAnswer] || "none"})`}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{q.explanation}</p>
                </div>
              )
            })}
            <div className="pt-8 border-t border-border/50 flex justify-between">
              <button onClick={() => setShowResult(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                Retake Quiz
              </button>
              <a href="/certificate" className={cn("px-6 py-3 rounded-xl font-bold transition-colors", passed ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/40" : "border border-border text-foreground hover:bg-accent")}>
                {passed ? "Get Certificate" : "Continue Learning"}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
