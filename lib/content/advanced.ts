export type Lesson = {
  slug: string;
  title: string;
  description: string;
  order: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  content: string;
  examples: CodeExample[];
  aiMlRelevance?: boolean;
};

export type CodeExample = {
  id: string;
  title: string;
  code: string;
  output?: string;
  explanation: string;
};

export const ADVANCED_LESSONS: Lesson[] = [
  {
    slug: "decorators",
    title: "Decorators",
    description: "Modify or extend functions without changing their source code.",
    order: 1,
    difficulty: "advanced",
    estimatedTime: "25 min",
    content: `
### What is a Decorator?
A decorator is a function that takes another function and returns a new (usually enhanced) function.

### Syntax
Use `@decorator_name` above a function definition.

### Common Use Cases
- Logging, timing, authentication, caching, retry logic

### AI/ML Relevance
Used for model caching, experiment tracking, and API route protection in ML serving.
    `,
    examples: [
      {
        id: "ex1",
        title: "Simple Timer Decorator",
        code: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.5)
    return "done"

print(slow_function())`,
        output: `slow_function took 0.5001s
done`,
        explanation: "The `@timer` syntax wraps `slow_function` with timing logic.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "generators-iterators",
    title: "Generators & Iterators",
    description: "Lazy iteration with `yield` and the iterator protocol.",
    order: 2,
    difficulty: "advanced",
    estimatedTime: "25 min",
    content: """
### Generators
Functions that use `yield` instead of `return`. They produce values one at a time and can be paused/resumed.

### Iterator Protocol
Objects with `__iter__()` and `__next__()` methods.

### AI/ML Relevance
Used for data pipelines, lazy loading of large datasets, and batch generators in training loops.
    """,
    examples: [
      {
        id: "ex1",
        title: "Fibonacci Generator",
        code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(10)))`,
        output: `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
        explanation: "`yield` produces values lazily instead of building the whole list.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "context-managers",
    title: "Context Managers",
    description: "Manage resources safely with `with` and `__enter__`/`__exit__`.",
    order: 3,
    difficulty: "advanced",
    estimatedTime: "20 min",
    content: `
### The `with` Statement
Ensures setup and cleanup code runs, even if an error occurs.

### Common Examples
- `open()` for files
- Database connections
- Locks, timers, suppression

### AI/ML Relevance
Used for file I/O in data loading, GPU memory management, and safe resource cleanup.
    `,
    examples: [
      {
        id: "ex1",
        title: "Custom Context Manager",
        code: `class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self
    def __exit__(self, *args):
        import time
        print(f"Elapsed: {time.time() - self.start:.4f}s")

with Timer():
    sum(range(1000000))`,
        output: `Elapsed: 0.0234s`,
        explanation: "Setup runs on enter, cleanup runs on exit regardless of errors.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "asyncio",
    title: "AsyncIO",
    description: "Asynchronous programming with `async`/`await` for concurrent I/O.",
    order: 4,
    difficulty: "advanced",
    estimatedTime: "25 min",
    content: `
### Core Concepts
- `async def` — defines a coroutine
- `await` — pauses until an awaitable completes
- `asyncio.run()` — starts the event loop

### Use Cases
- API calls, web scraping, concurrent database queries

### AI/ML Relevance
Used for concurrent model inference requests and async data pipelines in production ML serving.
    `,
    examples: [
      {
        id: "ex1",
        title: "Basic Async",
        code: `import asyncio

async def fetch(url):
    print(f"Fetching {url}...")
    await asyncio.sleep(1)
    return f"Data from {url}"

async def main():
    result = await fetch("https://api.example.com")
    print(result)

asyncio.run(main())`,
        output: `Fetching https://api.example.com...
Data from https://api.example.com`,
        explanation: "`await` yields control back to the event loop during sleep.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return ADVANCED_LESSONS.find((l) => l.slug === slug);
}

export function getAllAdvanced() {
  return ADVANCED_LESSONS;
}
