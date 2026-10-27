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

export const COMPREHENSIONS_LESSONS: Lesson[] = [
  {
    slug: "list-comprehensions",
    title: "List Comprehensions",
    description: "Create lists concisely with a single readable line.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "15 min",
    content: `
### Basic Syntax
[expression for item in iterable if condition]

### Why Use Them
- More concise than for loops
- Often faster than equivalent append() loops
- Readable when kept simple

### AI/ML Relevance
Used constantly for data preprocessing — filtering datasets, extracting features, transforming arrays.
    `,
    examples: [
      {
        id: "ex1",
        title: "Basic List Comprehension",
        code: `squares = [x**2 for x in range(10)]
print(squares)`,
        output: `[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`,
        explanation: "One line replaces a 4-line for loop with append().",
      },
      {
        id: "ex2",
        title: "With Condition",
        code: `evens = [x for x in range(20) if x % 2 == 0]
print(evens)`,
        output: `[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`,
        explanation: "Filter items using an if clause at the end.",
      },
      {
        id: "ex3",
        title: "Nested Loop Comprehension",
        code: `pairs = [(x, y) for x in [1, 2] for y in [3, 4]]
print(pairs)`,
        output: `[(1, 3), (1, 4), (2, 3), (2, 4)]`,
        explanation: "Equivalent to nested for loops.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "dict-comprehensions",
    title: "Dictionary Comprehensions",
    description: "Build dictionaries from iterables in one line.",
    order: 2,
    difficulty: "beginner",
    estimatedTime: "15 min",
    content: `
### Syntax
{key_expr: value_expr for item in iterable if condition}

### Use Cases
- Inverting key-value pairs
- Filtering dictionary items
- Creating lookup tables from lists

### AI/ML Relevance
Used to build feature dictionaries, label encodings, and config lookups.
    `,
    examples: [
      {
        id: "ex1",
        title: "Dict from List",
        code: `nums = [1, 2, 3, 4, 5]
squares_dict = {x: x**2 for x in nums}
print(squares_dict)`,
        output: `{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`,
        explanation: "Map each number to its square.",
      },
      {
        id: "ex2",
        title: "Filter Existing Dict",
        code: `prices = {"apple": 0.5, "banana": 0.3, "cherry": 2.0}
expensive = {k: v for k, v in prices.items() if v > 1}
print(expensive)`,
        output: `{'cherry': 2.0}`,
        explanation: "Keep only items where value > 1.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "set-comprehensions",
    title: "Set Comprehensions",
    description: "Build sets of unique values concisely.",
    order: 3,
    difficulty: "beginner",
    estimatedTime: "10 min",
    content: `
### Syntax
{expression for item in iterable if condition}

### Key Difference
Like list comprehensions but uses curly braces and guarantees uniqueness.

### AI/ML Relevance
Used for deduplicating labels, unique token sets, and vocabulary extraction.
    `,
    examples: [
      {
        id: "ex1",
        title: "Unique Word Lengths",
        code: `words = ["apple", "banana", "cherry", "date", "elderberry"]
lengths = {len(w) for w in words}
print(sorted(lengths))`,
        output: `[4, 5, 6, 10]`,
        explanation: "Set comprehension removes duplicate lengths automatically.",
      },
    ],
    aiMlRelevance: false,
  },
  {
    slug: "generator-expressions",
    title: "Generator Expressions",
    description: "Lazy evaluation — compute values on demand, saving memory.",
    order: 4,
    difficulty: "intermediate",
    estimatedTime: "15 min",
    content: `
### Syntax
(expression for item in iterable if condition)

### List vs Generator
- List comprehension [...] — builds entire list in memory
- Generator expression (...) — yields one item at a time

### When to Use
Large datasets where you can't fit everything in memory at once.

### AI/ML Relevance
Critical for streaming large datasets, file processing, and batch iteration without OOM errors.
    `,
    examples: [
      {
        id: "ex1",
        title: "Generator Expression",
        code: `squares = (x**2 for x in range(5))
print(type(squares))
print(list(squares))`,
        output: `<class 'generator'>
[0, 1, 4, 9, 16]`,
        explanation: "Generators are lazy — convert to list to materialize.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return COMPREHENSIONS_LESSONS.find((l) => l.slug === slug);
}

export function getAllComprehensions() {
  return COMPREHENSIONS_LESSONS;
}
