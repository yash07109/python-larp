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

export const CONTROL_FLOW_LESSONS: Lesson[] = [
  {
    slug: "if-else",
    title: "If / Else Statements",
    description: "Conditional execution with if, elif, and else blocks.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `# If / Else Statements

**Conditional execution** lets your program make decisions. Python runs different code blocks depending on whether a condition is true or false.

## Syntax

Python uses **indentation** (not curly braces) to define code blocks. The standard is 4 spaces.

```python
if condition:
    # runs if condition is True
elif another_condition:
    # runs if previous conditions were False and this is True
else:
    # runs if all above were False
```

## Key Rules

- Conditions must evaluate to `True` or `False` (or truthy/falsy values)
- Only the **first matching** block executes
- `elif` is short for "else if"
- `else` is optional

## Truthiness

In Python, these values are considered **falsy**:
- `False`, `None`, `0`, `0.0`
- Empty sequences: `""`, `[]`, `{}`, `()`

Everything else is **truthy**.

> ⚠️ Indentation errors are the most common beginner mistake in Python. Be consistent with spaces.

## AI/ML Relevance

Conditionals power data filtering, model prediction logic, and validation checks throughout AI/ML pipelines.
    `,
    examples: [
      {
        id: "ex1",
        title: "Basic If / Elif / Else",
        code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

print(f"Your grade is {grade}")`,
        output: `Your grade is B`,
        explanation: "Only the first matching condition runs. Score 85 matches `>= 80`, so grade is B.",
      },
      {
        id: "ex2",
        title: "Truthiness Check",
        code: `name = ""
items = []

if name:
    print("Name provided")
else:
    print("Name is empty")

if items:
    print("Has items")
else:
    print("List is empty")`,
        output: `Name is empty
List is empty`,
        explanation: "Empty strings and empty lists are falsy, so the `else` blocks run.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "loops",
    title: "Loops (for & while)",
    description: "Iterate over sequences and repeat code with for and while loops.",
    order: 2,
    difficulty: "beginner",
    estimatedTime: "25 min",
    content: `# Loops: for & while

Loops let you repeat code multiple times — essential for processing datasets, training models, and iterating over collections.

## For Loops

A `for` loop iterates over any **iterable**: lists, strings, tuples, dictionaries, ranges.

```python
for item in iterable:
    # runs once for each item
```

### `range()`

`range(n)` generates numbers from `0` to `n-1`. It's commonly used with for loops.

## While Loops

A `while` loop repeats **while a condition is True**. Use it when you don't know how many iterations you need upfront.

```python
while condition:
    # runs while condition is True
```

> ⚠️ Always ensure a while loop's condition eventually becomes False, or you'll create an infinite loop.

## Loop Control Statements

| Statement | Purpose |
|-----------|---------|
| `break` | Exit the loop immediately |
| `continue` | Skip to the next iteration |
| `pass` | Do nothing (placeholder) |

## Nested Loops

You can put loops inside loops — useful for matrices, nested data structures, and grid operations.

## AI/ML Relevance

Loops power training epochs, data iteration, batch processing, and grid searches in hyperparameter tuning.
    `,
    examples: [
      {
        id: "ex1",
        title: "For Loop with Range",
        code: `for i in range(5):
    print(f"Count: {i}")`,
        output: `Count: 0
Count: 1
Count: 2
Count: 3
Count: 4`,
        explanation: "`range(5)` produces 0, 1, 2, 3, 4 — five iterations.",
      },
      {
        id: "ex2",
        title: "Break & Continue",
        code: `for i in range(10):
    if i == 3:
        continue    # skip 3
    if i == 7:
        break       # stop at 7
    print(i)`,
        output: `0
1
2
4
5
6`,
        explanation: "3 is skipped by `continue`, and the loop stops entirely at 7 via `break`.",
      },
      {
        id: "ex3",
        title: "While Loop",
        code: `count = 0
while count < 3:
    print(f"Count is {count}")
    count += 1`,
        output: `Count is 0
Count is 1
Count is 2`,
        explanation: "The loop runs while `count < 3`, then stops when count reaches 3.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return CONTROL_FLOW_LESSONS.find((l) => l.slug === slug);
}

export function getAllControlFlow() {
  return CONTROL_FLOW_LESSONS;
}
