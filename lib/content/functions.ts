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

export const FUNCTIONS_LESSONS: Lesson[] = [
  {
    slug: "defining-functions",
    title: "Defining Functions",
    description: "Create reusable code blocks with def, parameters, and return values.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `
### Defining Functions
Use the `def` keyword followed by the function name, parameters in parentheses, and a colon.

### Return Values
Use `return` to send a value back to the caller. Without it, functions return `None`.

### Docstrings
Document what your function does using triple-quoted strings immediately after the `def` line.

### AI/ML Relevance
Functions encapsulate model training, preprocessing, and inference logic cleanly.
    `,
    examples: [
      {
        id: "ex1",
        title: "Simple Function",
        code: `def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}!"

print(greet("Alice"))
print(greet("Bob"))`,
        output: `Hello, Alice!
Hello, Bob`,
        explanation: "The function takes `name` as a parameter and returns a formatted string.",
      },
      {
        id: "ex2",
        title: "Function with Calculation",
        code: `def celsius_to_fahrenheit(c):
    """Convert Celsius to Fahrenheit."""
    return (c * 9/5) + 32

print(celsius_to_fahrenheit(0))
print(celsius_to_fahrenheit(100))`,
        output: `32.0
212.0`,
        explanation: "Reusable conversion logic — call it anywhere with any value.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "args-kwargs",
    title: "*args & **kwargs",
    description: "Accept variable numbers of positional and keyword arguments.",
    order: 2,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### *args
Collects extra positional arguments into a tuple.

### **kwargs
Collects extra keyword arguments into a dictionary.

### Order Matters
Positional args, then `*args`, then keyword-only, then `**kwargs`.

### AI/ML Relevance
Used in library APIs (e.g., `plt.plot()`, `model.fit()`) to accept flexible options.
    `,
    examples: [
      {
        id: "ex1",
        title: "Using *args",
        code: `def sum_all(*numbers):
    total = 0
    for n in numbers:
        total += n
    return total

print(sum_all(1, 2, 3))
print(sum_all(10, 20, 30, 40, 50))`,
        output: `6
150`,
        explanation: "`*numbers` packs all passed arguments into a tuple.",
      },
      {
        id: "ex2",
        title: "Using **kwargs",
        code: `def build_profile(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

build_profile(name="Alice", age=25, city="NYC")`,
        output: `name: Alice
age: 25
city: NYC`,
        explanation: "`**info` packs keyword arguments into a dictionary.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return FUNCTIONS_LESSONS.find((l) => l.slug === slug);
}

export function getAllFunctions() {
  return FUNCTIONS_LESSONS;
}
