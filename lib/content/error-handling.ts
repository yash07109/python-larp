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

export const ERROR_HANDLING_LESSONS: Lesson[] = [
  {
    slug: "try-except",
    title: "Try / Except / Finally",
    description: "Handle exceptions gracefully without crashing.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `
### Basic Syntax
try:
    # code that might fail
except SomeError:
    # handle the error
else:
    # runs if no exception
finally:
    # always runs (cleanup)

### Best Practices
- Catch specific exceptions, not bare except:
- Don't swallow errors silently
- Use finally for resource cleanup

### AI/ML Relevance
Handle missing data files, bad API responses, and model load failures in production.
    `,
    examples: [
      {
        id: "ex1",
        title: "Basic Exception Handling",
        code: `try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(result)
finally:
    print("Cleanup done")`,
        output: `Cannot divide by zero!
Cleanup done`,
        explanation: "The except block catches the error; finally always runs.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "custom-exceptions",
    title: "Custom Exceptions",
    description: "Define your own exception classes for domain-specific errors.",
    order: 2,
    difficulty: "intermediate",
    estimatedTime: "15 min",
    content: `
### Creating Custom Exceptions
Inherit from Exception (or a more specific built-in).

### When to Use
- Invalid input in ML pipelines
- Configuration errors
- Business logic violations

### AI/ML Relevance
Clear error messages help debug data validation and model configuration issues.
    `,
    examples: [
      {
        id: "ex1",
        title: "Custom Exception Class",
        code: `class NegativeValueError(Exception):
    pass

class Temperature:
    def __init__(self, celsius):
        if celsius < -273.15:
            raise NegativeValueError("Below absolute zero!")
        self.celsius = celsius

try:
    temp = Temperature(-300)
except NegativeValueError as e:
    print(f"Error: {e}")`,
        output: `Error: Below absolute zero!`,
        explanation: "Custom exceptions make error intent clear.",
      },
    ],
    aiMlRelevance: false,
  },
  {
    slug: "logging-assertions",
    title: "Logging & Assertions",
    description: "Production-grade logging and debug assertions.",
    order: 3,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### Logging
Use the logging module instead of print() for production code.

### Levels
DEBUG < INFO < WARNING < ERROR < CRITICAL

### Assertions
assert condition, "message" — crashes with AssertionError if condition is False. Use for internal invariants.

### AI/ML Relevance
Logging tracks training runs; assertions validate data shapes and model invariants.
    `,
    examples: [
      {
        id: "ex1",
        title: "Logging & Assert",
        code: `import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

def divide(a, b):
    assert b != 0, "Divisor cannot be zero"
    logging.info(f"Dividing {a} by {b}")
    return a / b

try:
    print(divide(10, 2))
    print(divide(10, 0))
except AssertionError as e:
    print(f"Assertion failed: {e}")`,
        output: `INFO: Dividing 10 by 2
5.0
Assertion failed: Divisor cannot be zero`,
        explanation: "Assertions catch programming errors; logging tracks runtime events.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return ERROR_HANDLING_LESSONS.find((l) => l.slug === slug);
}

export function getAllErrorHandling() {
  return ERROR_HANDLING_LESSONS;
}
