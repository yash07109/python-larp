"use client"

export function MarkdownRenderer({ children, className }: { children: string; className?: string }) {
  const md = children
  const lines = md.split("\n")
  const blocks: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Code block
    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3).trim() || "text"
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i])
        i++
      }
      i++
      blocks.push(
        <div key={`code-${i}`} className="my-6 rounded-xl border border-black/5 dark:border-white/10 bg-black/50 dark:bg-[#0d1117] overflow-hidden shadow-sm">
          <div className="px-3 py-1.5 bg-black/20 dark:bg-white/5 border-b border-black/10 dark:border-white/5 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            {lang}
          </div>
          <pre className="p-4 font-mono text-sm text-green-400 dark:text-green-300 overflow-x-auto whitespace-pre"><code>{codeLines.join("\n")}</code></pre>
        </div>
      )
      continue
    }

    // Horizontal rule
    if (line.trim() === "---" || line.trim() === "***") {
      blocks.push(<hr key={`hr-${i}`} className="my-8 border-border/50" />)
      i++
      continue
    }

    // Headings
    const hMatch = line.match(/^(#{1,3})\s(.+)/)
    if (hMatch) {
      const level = hMatch[1].length
      const text = inline(hMatch[2])
      const tag = level === 1 ? "h1" : level === 2 ? "h2" : "h3"
      const cls =
        level === 1
          ? "text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground"
          : level === 2
            ? "text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground border-b border-border/50 pb-2"
            : "text-xl md:text-2xl font-bold mt-8 mb-3 text-foreground"
      blocks.push(<tag key={`h-${i}`} className={cls}>{text}</tag>)
      i++
      continue
    }

    // Blockquote / callout
    if (line.trim().startsWith("> ")) {
      const quoteLines: string[] = []
      let isTip = false
      let isWarning = false
      let isInfo = false
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        const q = lines[i].trim().slice(2)
        if (q.startsWith("💡")) { isTip = true }
        if (q.startsWith("⚠️")) { isWarning = true }
        if (q.startsWith("ℹ️")) { isInfo = true }
        quoteLines.push(inline(q.replace(/^[💡⚠️ℹ️]\s*/, "")))
        i++
      }
      const base = "rounded-xl border-l-4 p-4 my-6"
      const variant = isTip
        ? "border-emerald-500 bg-emerald-500/5 text-emerald-900 dark:text-emerald-100"
        : isWarning
          ? "border-amber-500 bg-amber-500/5 text-amber-900 dark:text-amber-100"
          : isInfo
            ? "border-indigo-500 bg-indigo-500/5 text-indigo-900 dark:text-indigo-100"
            : "border-border bg-secondary/50 text-foreground"
      blocks.push(
        <div key={`q-${i}`} className={`${base} ${variant}`}>
          {quoteLines.map((t, j) => (
            <p key={j} className="mb-2 last:mb-0 leading-relaxed text-sm">
              {t}
            </p>
          ))}
        </div>
      )
      continue
    }

    // Paragraph
    if (line.trim() !== "") {
      const paraLines: string[] = []
      while (i < lines.length && lines[i].trim() !== "" && !lines[i].trim().startsWith("```") && !lines[i].trim().startsWith("> ") && !lines[i].trim().match(/^#{1,3}\s/)) {
        paraLines.push(lines[i])
        i++
      }
      blocks.push(
        <p key={`p-${i}`} className="mb-6 leading-relaxed text-muted-foreground dark:text-muted-foreground/90">
          {inline(paraLines.join(" "))}
        </p>
      )
      continue
    }

    i++
  }

  return <div className={className || ""}>{blocks}</div>
}

function inline(text: string): React.ReactNode {
  let parts = text.split(/\*\*(.+?)\*\*/)
  if (parts.length > 1) {
    return parts.map((p, idx) => (idx % 2 === 1 ? <strong key={idx}>{inlineSimple(p)}</strong> : inlineSimple(p)))
  }
  return inlineSimple(text)
}

function inlineSimple(text: string): React.ReactNode {
  const parts = text.split(/`(.+?)`/)
  if (parts.length > 1) {
    return parts.map((p, idx) =>
      idx % 2 === 1 ? <code key={`c-${idx}`} className="bg-black/10 dark:bg-white/5 px-1.5 py-0.5 rounded font-mono text-xs text-green-400 dark:text-green-300">{p}</code> : plainText(p)
    )
  }
  return plainText(text)
}

function plainText(text: string): React.ReactNode {
  return text.split("\n").map((t, i) => <React.Fragment key={i}>{t}{i < text.split("\n").length - 1 && <br />}</React.Fragment>)
}
