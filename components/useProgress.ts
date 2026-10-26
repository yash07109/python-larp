"use client"

import { useState, useEffect, useCallback } from "react"

type LessonProgress = {
  [slug: string]: boolean
}

const STORAGE_KEY = "python_mastery_progress"

export function useProgress() {
  const [progress, setProgress] = useState<LessonProgress>({})

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setProgress(JSON.parse(saved))
      }
    } catch {
      // ignore
    }
  }, [])

  const save = useCallback((newProgress: LessonProgress) => {
    setProgress(newProgress)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress))
    } catch {
      // ignore
    }
  }, [])

  const markComplete = useCallback((slug: string) => {
    save({ ...progress, [slug]: true })
  }, [progress, save])

  const isComplete = useCallback((slug: string) => {
    return !!progress[slug]
  }, [progress])

  const getPercentage = useCallback((total: number) => {
    if (total === 0) return 0
    const completed = Object.values(progress).filter(Boolean).length
    return Math.round((completed / total) * 100)
  }, [progress])

  return { progress, markComplete, isComplete, getPercentage }
}
