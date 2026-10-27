"use client"

import { useState, useRef } from "react"
import { Code, Play, Square, Copy, RefreshCw, Download, Maximize, Minimize, Terminal, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Playground() {
  const [code, setCode] = useState(`# Welcome to the Python Playground\n# Write your code here and click Run\n\nname = "Python Mastery"\nprint(f"Hello, {name}!")\n\n# Try some math\nprint(2 + 2)\nprint(10 ** 2)\n\n# List example\nnums = [1, 2, 3, 4, 5]\nprint(sum(nums))`)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [maximized, setMaximized] = useState(false)
  const outputRef = useRef<HTMLDivElement>(null)

  const runCode = () => {
    setIsRunning(true)
    setOutput("Running...\n")

    setTimeout(() => {
      try {
        // Simple mock execution - just echo the code
        const lines = code.split("\n")
        const outputLines = lines.filter(line => line.trim().startsWith("print("))
          .map(line => {
            const match = line.match(/print\((.+)\)/)
            return match ? match[1].replace(/['"]/g, "") : line
          })
        setOutput(outputLines.join("\n") || "(no print statements)")
      } catch (e) {
        setOutput("Error running code")
      } finally {
        setIsRunning(false)
      }
    }, 1000)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
  }

  const clearOutput = () => setOutput("")

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a>
          <span className="mx-1">/</span>
          <span className="text-foreground">Playground</span>
        </nav>

        <h1 className="text-3xl font-bold mb-8">Live Python Playground</h1>

        <div
          className={cn(
            "rounded-2xl border border-border bg-card shadow-xl overflow-hidden flex flex-col lg:flex-row",
            maximized ? "fixed inset-0 z-50 h-screen w-screen bg-background/95" : "h-[700px]"
          )}
        >
          <div className={cn("lg:w-1/2 border-r border-border flex flex-col min-h-0 bg-black/50", maximized ? "lg:w-1/2" : "")}>
            <div className="border-b border-border bg-secondary/50 px-4 py-2 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Terminal className="w-3 h-3" /> python3
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full p-5 font-mono text-sm text-green-400 bg-transparent resize-none focus:outline-none"
              placeholder="# Write Python code here..."
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
            />
          </div>

          <div className="px-4 py-3 border-b border-border bg-secondary/50 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={runCode}
                disabled={isRunning}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all",
                  isRunning
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
                )}
              >
                {isRunning ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isRunning ? "Running..." : "Run Code"}
              </button>
              <button onClick={clearOutput} className="p-2 rounded hover:bg-accent text-foreground" title="Clear output">
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const blob = new Blob([code], { type: "text/x-python" })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement("a")
                  a.href = url
                  a.download = "script.py"
                  a.click()
                }}
                className="p-2 rounded hover:bg-accent text-foreground" title="Download .py"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Ready</span>
            </div>
          </div>

          <div className={cn("lg:w-1/2 flex flex-col min-h-0 bg-black", maximized ? "lg:w-1/2" : "")}>
            <div className="border-b border-border bg-secondary/50 px-4 py-2 flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                <Zap className="w-3 h-3 text-emerald-400" /> Output
              </span>
            </div>
            <div ref={outputRef} className="p-4 overflow-y-auto font-mono text-sm text-emerald-400 h-full flex flex-col">
              <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{">>>"}</div>
              <div className="font-mono text-sm whitespace-pre-wrap break-all">{output}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Interactive Python playground. Write code and click Run to see the output.
            <br />
            Full Pyodide integration coming soon for real Python execution in the browser.
          </p>
        </div>
      </div>

      {maximized && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur" onClick={() => setMaximized(false)} />
      )}
    </div>
  )
}