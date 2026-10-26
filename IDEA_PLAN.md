# Python Mastery Platform — Idea Plan

## 1. Vision
A beautiful, interactive website to learn Python from absolute beginner to advanced level, optimized for AI/ML & Data Science, deployable on Vercel with zero server cost.

## 2. Tech Stack (Vercel-native)
| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 14 (App Router) | First-class Vercel support, ISR, fast |
| Styling | Tailwind CSS + Framer Motion | Modern animations, excellent theme |
| UI Components | shadcn/ui | Polished, accessible components |
| Content | MDX + frontmatter | Write lessons in Markdown, embed live code |
| Code Editor | Monaco Editor (react-monaco-editor) | VS Code-like editing experience |
| Code Execution | Pyodide (Wasm Python in browser) | Run Python client-side, no backend needed |
| Deployment | Vercel | Git push to deploy, edge network |
| Analytics | Vercel Analytics | Free, privacy-friendly |

## 3. Site Architecture
```
/app
  /(learn)
    /fundamentals        # variables, types, operators, I/O
    /control-flow        # if/else, loops, break/continue
    /functions           # def, args, kwargs, scope, recursion
    /data-structures     # list, tuple, set, dict, deque, heap, stack, queue
    /comprehensions      # list, dict, set, generator expressions
    /advanced            # decorators, generators, iterators, context managers
    /oop                 # classes, inheritance, dunder methods, abstract
    /error-handling      # try/except/finally, custom exceptions, logging
    /functional          # lambda, map, filter, reduce, partial, currying
    /ai-ml-ds            # numpy, pandas, matplotlib, scikit-learn basics
    /projects            # capstone projects
  /playground            # live Python editor (Pyodide)
  /quiz                  # interactive assessments
  /progress              # user progress tracking (localStorage / Vercel KV)
/components
  /lesson                # lesson layout, code blocks, callouts
  /editor                # Monaco + output console
  /quiz                  # question cards, answer feedback
  /ui                    # shadcn components
/lib
  /content               # MDX lesson files
  /pyodide               # Python runtime config
```

## 4. Curriculum Roadmap (All Topics)

### Phase 1 — Fundamentals
- Python installation & setup
- Variables, dynamic typing
- Basic data types: int, float, str, bool, None
- Operators (arithmetic, comparison, logical, bitwise)
- Input/output, f-strings
- Comments & docstrings

### Phase 2 — Control Flow
- if / elif / else
- Ternary operator
- for loops, while loops
- break, continue, pass
- range, enumerate, zip

### Phase 3 — Data Structures (All Types)
- Lists (methods, slicing, list comprehensions)
- Tuples (immutable, namedtuple)
- Sets (frozen set, set operations)
- Dictionaries (dict comprehension, views)
- Strings (methods, formatting)
- Collections module: deque, Counter, defaultdict, OrderedDict
- heapq (priority queue)
- stack & queue implementations
- Linked lists, trees, graphs (from scratch)

### Phase 4 — Functions & Functional Programming
- def, return, positional & keyword args
- *args, **kwargs
- Default & mutable default arguments
- Scope: LEGB rule
- Lambda functions (anonymous functions)
- map, filter, reduce
- functools: partial, lru_cache, wraps
- Closures & higher-order functions
- Recursion & recursion limits

### Phase 5 — Comprehensions & Generators
- List comprehensions
- Dict comprehensions
- Set comprehensions
- Generator expressions
- yield & yield from
- Generator pipelines
- itertools module

### Phase 6 — Object-Oriented Programming
- Classes & objects
- __init__, self
- Instance vs class vs static methods
- Inheritance (single, multiple, multilevel, hierarchical)
- MRO (Method Resolution Order)
- Abstraction (ABC, abstractmethod)
- Encapsulation (name mangling, properties)
- Polymorphism
- Dunder methods: __str__, __repr__, __len__, __getitem__, __call__, __add__, __eq__, __enter__, __exit__
- Composition vs inheritance

### Phase 7 — Advanced Python
- Decorators (with & without arguments, functools.wraps)
- Context managers (@contextmanager, __enter__/__exit__)
- Iterators & iterables (__iter__, __next__)
- Metaclasses (type, __metaclass__)
- Descriptors (__get__, __set__, __delete__)
- Reflection: getattr, setattr, hasattr, dir, callable
- introspection
- asyncio (async/await, event loop, coroutines)
- multiprocessing & threading
- GIL explanation

### Phase 8 — Error Handling & Debugging
- try / except / else / finally
- Catching specific exceptions
- Raising exceptions (raise)
- Custom exception classes (inherit from Exception)
- Exception chaining (raise ... from ...)
- assert statements
- Logging module (basic, handlers, formatters)
- warnings module
- pdb debugger basics
- Type hints & mypy basics

### Phase 9 — Modules & Ecosystem
- import system, packages
- Standard library tour (os, sys, datetime, json, csv, re, pathlib, collections)
- pip & virtual environments
- Reading/writing files
- Working with CSV, JSON, Excel

### Phase 10 — AI / ML / Data Science Track
- NumPy: arrays, vectorization, broadcasting
- pandas: Series, DataFrames, indexing, groupby, merge
- Matplotlib & Seaborn: visualization
- Scikit-learn: train/test split, preprocessing, regression, classification, clustering
- Introduction to neural networks (from scratch with NumPy)
- Introduction to PyTorch / TensorFlow concepts
- Jupyter notebook basics
- Data cleaning & EDA pipeline
- Mini-project: house price prediction, iris classification, sentiment analysis

## 5. Design Theme (Not "Normal Looking")
- **Dark mode first** with glassmorphism cards
- **Gradient mesh background** (indigo → violet → slate)
- **Syntax highlighting** via Shiki / Prism (Monokai Pro / Dracula theme)
- **Micro-interactions** (Framer Motion): lesson cards lift on hover, code blocks glow on focus
- **Progress rings** per module
- **Certificates** generated on completion (downloadable PDF)
- **Responsive**: mobile-first, tablet/desktop optimized
- **Typography**: Inter for UI, JetBrains Mono for code

## 6. Interactive Features
- **Live Python Playground**: Write & run Python in browser via Pyodide (no backend)
- **Inline code challenges**: Edit code inside lessons, run, see output
- **Quizzes**: Multiple choice + code-fill blanks with instant feedback
- **Progress tracking**: Mark lessons complete, unlock next module
- **Notes**: Save personal notes per lesson (localStorage)
- **Search**: Full-text search across all lessons
- **Dark/light toggle**

## 7. Content Format (MDX Example)
Each lesson is an MDX file with frontmatter:
```mdx
---
title: "List Comprehensions"
module: "comprehensions"
order: 2
difficulty: "beginner"
estimatedTime: "15 min"
prerequisites: ["lists"]
aiMlRelevance: true
---
```

## 8. Vercel Deployment Steps
1. Push code to GitHub
2. Import repo in Vercel dashboard
3. Framework preset: Next.js
4. Add environment variables (if using Vercel KV for progress)
5. Deploy on push to main

## 9. Recommended External References
- Harvard CS50P (Introduction to Programming with Python)
- Automate the Boring Stuff with Python
- Python official docs (docs.python.org)
- Real Python tutorials
- Scikit-learn & pandas documentation

## 10. Monetization / Growth (Optional)
- Free tier: all lessons + playground
- Pro tier: certificates, project reviews, downloadable resources
- Newsletter for AI/ML updates

---
**Next step:** Run `npm create next-app@latest` and select Tailwind + App Router, then scaffold the folders above.