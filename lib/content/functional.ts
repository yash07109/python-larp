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

export const FUNCTIONAL_LESSONS: Lesson[] = [
  {
    slug: "lambda-functions",
    title: "Lambda Functions",
    description: "Anonymous, single-expression functions created on the fly.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "15 min",
    content: `
### Syntax
lambda arguments: expression

### Characteristics
- No def or return keyword
- Single expression only (implicitly returned)
- Can be assigned to variables or passed directly

### When to Use
Short throwaway functions — callbacks, sorting keys, simple transformations.

### AI/ML Relevance
Used with map, filter, and in scikit-learn/pandas for quick transformations.
    `,
    examples: [
      {
        id: "ex1",
        title: "Basic Lambda",
        code: `square = lambda x: x ** 2
print(square(5))

# Inline usage
print((lambda x, y: x + y)(3, 7))`,
        output: `25
10`,
        explanation: "Lambdas are anonymous functions defined inline.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "map-filter-reduce",
    title: "map, filter, reduce",
    description: "Functional programming tools for transforming sequences.",
    order: 2,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `
### map(func, iterable)
Applies func to every item, returns an iterator.

### filter(func, iterable)
Keeps items where func returns True.

### reduce(func, iterable) — from functools
Cumulatively applies func to reduce to a single value.

### AI/ML Relevance
Vectorized-style operations on data before converting to NumPy/pandas.
    `,
    examples: [
      {
        id: "ex1",
        title: "Map, Filter, Reduce",
        code: `from functools import reduce

nums = [1, 2, 3, 4, 5]

doubled = list(map(lambda x: x * 2, nums))
evens = list(filter(lambda x: x % 2 == 0, nums))
total = reduce(lambda x, y: x + y, nums)

print(doubled)
print(evens)
print(total)`,
        output: `[2, 4, 6, 8, 10]
[2, 4]
15`,
        explanation: "Functional alternatives to list comprehensions.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "partial-currying",
    title: "partial & Currying",
    description: "Partial function application with functools.partial.",
    order: 3,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### functools.partial
Fixes a certain number of arguments, producing a new function with fewer parameters.

### Currying Concept
Transform a multi-arg function into a chain of single-arg functions.

### AI/ML Relevance
Create pre-configured model constructors or loss functions with fixed hyperparameters.
    `,
    examples: [
      {
        id: "ex1",
        title: "Partial Application",
        code: `from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)

print(square(5))
print(cube(3))`,
        output: `25
27`,
        explanation: "Partial freezes some arguments, creating specialized functions.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return FUNCTIONAL_LESSONS.find((l) => l.slug === slug);
}

export function getAllFunctional() {
  return FUNCTIONAL_LESSONS;
}
