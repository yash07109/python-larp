"use client"

import { useState, useEffect } from "react"
import { Edit, Trash2, Clock } from "lucide-react"

type Note = {
  slug: string
  title: string
  content: string
  updatedAt: string
}

const STORAGE_KEY = "python_mastery_notes"

export default function NotesPage({ params }: { params: { slug: string } }) {
  const lessonSlug = params.slug
  const lessonTitle = lessonSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  const [notes, setNotes] = useState<Note[]>([])
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState("")

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setNotes(JSON.parse(saved))
    } catch { /* ignore */ }
  }, [])

  const currentNote = notes.find((n) => n.slug === lessonSlug)

  useEffect(() => {
    setDraft(currentNote?.content || "")
  }, [currentNote])

  const saveNote = () => {
    try {
      const newNotes = notes.filter((n) => n.slug !== lessonSlug)
      if (draft.trim()) {
        newNotes.push({
          slug: lessonSlug,
          title: lessonTitle,
          content: draft,
          updatedAt: new Date().toISOString(),
        })
      }
      setNotes(newNotes)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes))
      setEditing(false)
    } catch { /* ignore */ }
  }

  const deleteNote = () => {
    try {
      const newNotes = notes.filter((n) => n.slug !== lessonSlug)
      setNotes(newNotes)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes))
      setDraft("")
      setEditing(false)
    } catch { /* ignore */ }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a>
          <span className="mx-1">/</span>
          <span className="text-foreground">Notes</span>
        </div>

        <h1 className="text-3xl font-bold mb-2">My Notes</h1>
        <p className="text-muted-foreground mb-8">{lessonTitle}</p>

        <div className="rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur shadow-xl overflow-hidden">
          <div className="border-b border-border/50 px-5 py-4 flex items-center justify-between bg-secondary/10">
            <span className="text-xs font-mono text-muted-foreground">{lessonSlug}</span>
            <div className="flex gap-2">
              <button onClick={() => setEditing(true)} className="p-2.5 rounded-xl hover:bg-accent text-foreground" title="Edit">
                <Edit className="w-4 h-4" />
              </button>
              {currentNote && (
                <button onClick={deleteNote} className="p-2.5 rounded-xl hover:bg-accent text-rose-500" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          <div className="p-6 min-h-[300px]">
            {editing ? (
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={saveNote}
                className="w-full h-full font-mono text-sm text-foreground bg-transparent focus:outline-none resize-none"
                placeholder="Take notes on this lesson..."
              />
            ) : (
              <div className="whitespace-pre-wrap break-words text-sm text-foreground leading-relaxed">
                {draft || <span className="text-muted-foreground">No notes yet. Click edit to start writing.</span>}
              </div>
            )}
          </div>
        </div>

        {currentNote && (
          <div className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
            <Clock className="w-3 h-3" /> Last updated: {new Date(currentNote.updatedAt).toLocaleString()}
          </div>
        )}
      </div>
    </div>
  )
}
