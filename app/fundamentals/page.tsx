export const runtime = "edge"

export default function Fundamentals() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a>
          <span>/</span>
          <span className="text-foreground">Fundamentals</span>
        </nav>
        <h1 className="text-3xl font-bold mb-6">Python Fundamentals</h1>
        <p className="text-muted-foreground mb-10">
          Variables, data types, operators, I/O, and the building blocks of Python.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/playground"
            className="p-6 rounded-2xl border border-border bg-card hover:border-indigo-500/50 transition-all"
          >
            <h3 className="font-semibold mb-2">Open Playground</h3>
            <p className="text-sm text-muted-foreground">Write & run Python in the browser</p>
          </a>
        </div>
      </div>
    </div>
  )
}
