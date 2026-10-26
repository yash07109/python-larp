import Link from "next/link"
import { Trophy, FileText } from "lucide.react"

export default function Certificate() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-indigo-400 hover:text-indigo-300 font-medium group flex items-center gap-2">
            <span className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform">←</span> Back to Learning
          </a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Certificate of Completion</h1>
          <p className="text-muted-foreground">Validate your Python mastery</p>
        </div>

        <div className="p-8 md:p-12 border-2 border-indigo-500/30 rounded-[2rem] bg-gradient-to-br from-indigo-500/10 to-violet-500/10 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-px bg-indigo-500/30" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-indigo-500/30" />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <Trophy className="w-8 h-8 text-indigo-600 mb-2" />
                <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">Python Mastery</h2>
                <p className="text-indigo-700 dark:text-indigo-300 font-medium">Certificate of Completion</p>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400">PM-{Math.floor(Math.random() * 100000).toString().padStart(5, "0")}</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg">This certificate is awarded to</p>
              <div className="text-3xl font-bold border-b-2 border-indigo-600 w-fit pb-1 mx-auto my-4">
                _______________________
              </div>
              <p className="text-lg">for successfully completing the Python learning curriculum covering</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-indigo-500/30">
              <div className="text-center">
                <div className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wider">Fundamentals</div>
                <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">✓</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wider">Data Structures</div>
                <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">✓</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wider">OOP</div>
                <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">✓</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wider">AI/ML & DS</div>
                <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">✓</div>
              </div>
            </div>

            <div className="mt-12 flex justify-between items-end">
              <div className="space-y-2">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Date of Issue</p>
                <p className="text-sm font-bold">{new Date().toLocaleDateString()}</p>
              </div>
              <div className="space-y-2 text-right">
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Signature</p>
                <div className="h-4 w-24 border-b border-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/40 transition-all font-semibold flex items-center gap-2">
            <FileText className="w-5 h-5" /> Download PDF
          </button>
        </div>
      </div>
    </div>
  )
}
