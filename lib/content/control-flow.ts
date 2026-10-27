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
    estimatedTime: "15 min",
    content: `
### Conditional Logic
Python uses indentation (not braces) to define code blocks. Standard indent is 4 spaces.

### Syntax
if condition:
    # runs if True
elif another_condition:
    # runs if first was False and this is True
else:
    # runs if all above were False

### Truthiness
Values like 0, empty string, empty list, empty dict, None, False are "falsy". Everything else is "truthy".

### AI/ML Relevance
Conditionals are used everywhere — from data filtering to model prediction logic.
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
        explanation: "Only the first matching condition executes. Order matters.",
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
        explanation: "Empty strings and empty lists are falsy.",
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
    estimatedTime: "20 min",
    content: `
### For Loops
Iterate over any iterable: lists, strings, tuples, dictionaries, ranges.

### While Loops
Repeat while a condition is True. Useful when you don't know the iteration count upfront.

### Loop Control
- break — exit the loop early
- continue — skip to the next iteration
- pass — do nothing (placeholder)

### AI/ML Relevance
Loops power training epochs, data iteration, and batch processing in ML.
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
        explanation: "range(5) produces 0, 1, 2, 3, 4.",
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
        explanation: "3 is skipped, loop stops before 7.",
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
