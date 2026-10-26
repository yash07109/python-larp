"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Play, Square, Copy, RefreshCw, Terminal, Zap, Download, Maximize, Minimize } from "lucide-react"

export default function Playground() {
  const [code, setCode] = useState(`# Welcome to the Python Playground\n# Write your code here and click Run\n\nname = "Python Mastery"\nprint(f"Hello, {name}!")\n\n# Try some math\nprint(2 + 2)\nprint(10 ** 2)\n\n# List example\nnums = [1, 2, 3, 4, 5]\nprint(sum(nums))`)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [pyodideReady, setPyodideReady] = useState(false)
  const [pyodideLoading, setPyodideLoading] = useState(false)
  const [maximized, setMaximized] = useState(false)
  const outputRef = useRef<HTMLDivElement>(null)
  const pyodideRef = useRef<any>(null)

  useEffect(() => {
    loadPyodide()
  }, [])

  const loadPyodide = async () => {
    setPyodideLoading(true)
    try {
      const { loadPyodide } = await import(
        /* webpackIgnore: true */
        "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.mjs"
      )
      const pyodide = await loadPyodide()
      pyodideRef.current = pyodide
      setPyodideReady(true)
      setPyodideLoading(false)
    } catch (err) {
      console.error("Pyodide load failed:", err)
      setPyodideLoading(false)
    }
  }

  const runCode = useCallback(async () => {
    if (!pyodideRef.current) {
      setOutput("Python runtime not loaded yet. Please wait...")
      return
    }

    setIsRunning(true)
    setOutput("Running...\n")

    try {
      pyodideRef.current.setStdout({ batched: (msg: string) => {
        setOutput((prev) => prev + msg)
        outputRef.current?.scrollTop = outputRef.current.scrollHeight
      } })

      await pyodideRef.current.runPythonAsync(code)
      setIsRunning(false)
    } catch (err: any) {
      setOutput((prev) => prev + `\nError: ${err.message || String(err)}\n`)
      setIsRunning(false)
    }
  }, [code])

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

        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Live Python Playground</h1>
            <p className="text-muted-foreground">
              Run real Python in your browser using Pyodide (WebAssembly). No backend required.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMaximized(!maximized)}
              className="p-2.5 rounded-xl hover:bg-accent text-foreground transition-colors"
              title={maximized ? "Restore" : "Maximize"}
            >
              {maximized ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {pyodideLoading && (
          <div className="flex items-center justify-center py-8 text-muted-foreground">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
              <span>Loading Python runtime (Pyodide)...</span>
            </div>
          </div>
        )}

        <div
          className={cn(
            "rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row",
            maximized ? "fixed inset-0 z-50 h-screen w-screen bg-background/95" : "h-[700px]"
          )}
        >
          {/* Editor Panel */}
          <div className={cn("lg:w-1/2 border-r border-border/50 flex flex-col min-h-0 bg-black/40", maximized ? "lg:w-1/2" : "")}>
            <div className="border-b border-border/50 bg-secondary/20 px-4 py-2 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Terminal className="w-3 h-3" /> pyodide {pyodideReady ? "ready" : "loading..."}
              </div>
            </div>
            <div className="relative flex-1">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-5 font-mono text-sm text-green-400 bg-transparent resize-none focus:outline-none"
                placeholder="# Write Python code here..."
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
              />
              <div className="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={copyCode}
                  className="p-2 rounded-xl bg-black/50 text-white hover:bg-indigo-500 text-xs shadow-lg"
                  title="Copy"
                >
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="px-5 py-3 border-b border-border/50 bg-secondary/20 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={runCode}
                disabled={isRunning || !pyodideReady || pyodideLoading}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg",
                  !pyodideReady || pyodideLoading || isRunning
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/40"
                )}
              >
                {isRunning ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isRunning ? "Running..." : "Run Code"}
              </button>
              <button onClick={clearOutput} className="p-2.5 rounded-xl hover:bg-accent text-foreground" title="Clear output">
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
                className="p-2.5 rounded-xl hover:bg-accent text-foreground" title="Download .py"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <div className={cn("w-2 h-2 rounded-full", pyodideReady ? "bg-emerald-500" : "bg-yellow-500 animate-pulse")} />
              <span>{pyodideReady ? "Connected" : pyodideLoading ? "Loading..." : "Offline"}</span>
            </div>
          </div>

          {/* Output Panel */}
          <div className={cn("lg:w-1/2 flex flex-col min-h-0 bg-black/60", maximized ? "lg:w-1/2" : "")}>
            <div className="border-b border-border/50 bg-secondary/20 px-4 py-2 flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                <Zap className="w-3 h-3 text-emerald-400" /> Output
              </span>
            </div>
            <div ref={outputRef} className="p-5 overflow-y-auto font-mono text-sm text-emerald-400 h-full flex flex-col">
              <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">>>> </div>
              <div className="font-mono text-sm whitespace-pre-wrap break-all">{output}</div>
            </div>
          </div>
        </div>

        {!pyodideReady && !pyodideLoading && (
          <div className="mt-6 p-5 rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm">
            Pyodide failed to load. Check your internet connection — the playground needs to fetch the WebAssembly runtime from a CDN.
          </div>
        )}
      </div>

      {maximized && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur" onClick={() => setMaximized(false)} />
      )}
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}
