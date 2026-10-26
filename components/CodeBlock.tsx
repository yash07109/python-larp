"use client"

export function CodeBlock({ code, title, language = "python" }: { code: string; title?: string; language?: string }) {
  return (
    <div className="rounded-xl border border-border bg-black overflow-hidden shadow-xl mb-6">
      {title && (
        <div className="bg-secondary/50 border-b border-border px-4 py-2 flex items-center justify-between">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
          <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Copy</button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto font-mono text-sm text-green-400"><code>{code}</code></pre>
    </div>
  )
}
