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

export const FUNCTIONS_DEPTH_LESSONS: Lesson[] = [
  {
    slug: "scope-lebg",
    title: "LEGB Scope Rule",
    description: "Local, Enclosing, Global, Built-in — how Python resolves names.",
    order: 1,
    difficulty: "intermediate",
    estimatedTime: "25 min",
    content: `
### The LEGB Rule
Python searches names in this order:
1. L — Local — inside the current function
2. E — Enclosing — inside any nested/outer functions
3. G — Global — module level
4. B — Built-in — Python built-ins (len, print, range)

### global vs nonlocal
- global x — assign to module-level x
- nonlocal x — assign to nearest enclosing scope x (not global, not local)

### Closures
A nested function that remembers values from its enclosing scope even after the outer function returns.

### AI/ML Relevance
Closures power callback-based APIs, decorator state, and partial function factories in ML pipelines.
    `
    examples: [
      {
        id: "ex1",
        title: "LEGB Resolution",
        code: `x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)
    inner()
    print(x)

outer()
print(x)`,
        output: `local
enclosing
global`,
        explanation: "Each scope shadows the outer one.",
      },
      {
        id: "ex2",
        title: "global & nonlocal",
        code: `count = 0

def outer():
    count = 0  # enclosing
    def inner():
        nonlocal count
        count += 1
        return count
    return inner

counter = outer()
print(counter())
print(counter())

def reset_global():
    global count
    count = 0

reset_global()
print(count)`,
        output: `1
2
0`,
        explanation: "nonlocal modifies enclosing scope; global modifies module scope.",
      },
      {
        id: "ex3",
        title: "Closure",
        code: `def make_multiplier(n):
    def multiplier(x):
        return x * n
    return multiplier

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))
print(triple(5))`,
        output: `10
15`,
        explanation: "multiplier remembers n from make_multiplier's scope after it returns.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "default-mutable-args",
    title: "Default & Mutable Arguments",
    description: "The mutable default argument trap and how to avoid it.",
    order: 2,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### The Trap
Default arguments are evaluated once at definition time, not at call time. If a default is mutable (list, dict, set), all calls share the same object.

### The Fix
Use None as default and create the mutable object inside the function.

### AI/ML Relevance
Buggy default arguments cause silent data leakage across model training runs and preprocessing pipelines.
    `
    examples: [
      {
        id: "ex1",
        title: "Mutable Default Bug",
        code: `def add_item(item, target=[]):
    target.append(item)
    return target

print(add_item(1))
print(add_item(2))  # target still has 1!
print(add_item(3))  # target has 1 and 2!`,
        output: `[1]
[1, 2]
[1, 2, 3]`,
        explanation: "Same list object persists across calls.",
      },
      {
        id: "ex2",
        title: "Correct Pattern",
        code: `def add_item(item, target=None):
    if target is None:
        target = []
    target.append(item)
    return target

print(add_item(1))
print(add_item(2))`,
        output: `[1]
[2]`,
        explanation: "Fresh list created each call when no argument is passed.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "recursion",
    title: "Recursion",
    description: "Functions that call themselves — base cases, recursive cases, limits.",
    order: 3,
    difficulty: "intermediate",
    estimatedTime: "25 min",
    content: `
### Anatomy
- Base case — stops recursion
- Recursive case — calls itself with a smaller problem

### sys.setrecursionlimit
Python limits recursion depth (default ~1000) to prevent stack overflow.

### Tail Recursion
Python does not optimize tail recursion. Deep recursion can crash.

### AI/ML Relevance
Used in tree traversals (decision trees), divide-and-conquer algorithms, and backtracking.
    `
    examples: [
      {
        id: "ex1",
        title: "Factorial",
        code: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))`,
        output: `120`,
        explanation: "Base case at n <= 1; recursive step reduces n.",
      },
      {
        id: "ex2",
        title: "Fibonacci (naive)",
        code: `def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(10))`,
        output: `55`,
        explanation: "Exponential time — demonstrates why memoization matters.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return FUNCTIONS_DEPTH_LESSONS.find((l) => l.slug === slug);
}

export function getAllFunctionsDepth() {
  return FUNCTIONS_DEPTH_LESSONS;
}
