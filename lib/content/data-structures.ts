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

export const DATA_STRUCTURES_LESSONS: Lesson[] = [
  {
    slug: "lists",
    title: "Lists",
    description: "Ordered, mutable collections with powerful built-in methods.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `
### Creating Lists
Use square brackets `[]`. Lists can hold mixed types and are mutable.

### Common Methods
- `.append()`, `.insert()`, `.remove()`, `.pop()`, `.sort()`, `.reverse()`
- `len()`, `in`, indexing `list[0]`, slicing `list[1:3]`

### AI/ML Relevance
Lists store datasets, feature vectors, and model predictions before conversion to NumPy arrays.
    `,
    examples: [
      {
        id: "ex1",
        title: "List Operations",
        code: `fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits.remove("banana")
print(fruits[0])
print(len(fruits))
print("apple" in fruits)`,
        output: `apple
3
True`,
        explanation: "Lists grow and shrink dynamically.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "dictionaries",
    title: "Dictionaries",
    description: "Key-value pairs for fast lookups and structured data.",
    order: 2,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `
### Creating Dictionaries
Use curly braces `{}` with `key: value` pairs. Keys must be immutable.

### Operations
- Access: `d["key"]`
- Add/Update: `d["key"] = value`
- Delete: `del d["key"]`
- Methods: `.keys()`, `.values()`, `.items()`, `.get()`

### AI/ML Relevance
Dicts represent JSON API responses, configuration, and labeled datasets.
    `,
    examples: [
      {
        id: "ex1",
        title: "Dictionary Basics",
        code: `user = {"name": "Alice", "role": "developer", "active": True}
print(user["name"])
user["age"] = 25
print(user.get("email", "not provided"))`,
        output: `Alice
not provided`,
        explanation: "`.get()` safely returns a default if the key is missing.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "sets",
    title: "Sets",
    description: "Unordered collections of unique elements with set operations.",
    order: 3,
    difficulty: "beginner",
    estimatedTime: "15 min",
    content: `
### Creating Sets
Use `set()` or curly braces `{}` with values (no key-value pairs).

### Properties
- Unordered
- No duplicates allowed
- Fast membership testing (`in`)

### Operations
- `.add()`, `.remove()`, union `\|`, intersection `&`, difference `-`

### AI/ML Relevance
Sets deduplicate data and are useful for label uniqueness checks.
    `,
    examples: [
      {
        id: "ex1",
        title: "Set Operations",
        code: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a & b)    # intersection
print(a | b)    # union
print(a - b)    # difference`,
        output: `{3, 4}
{1, 2, 3, 4, 5, 6}
{1, 2}`,
        explanation: "Sets support mathematical set operations natively.",
      },
    ],
    aiMlRelevance: false,
  },
  {
    slug: "tuples",
    title: "Tuples",
    description: "Immutable ordered collections — fixed once created.",
    order: 4,
    difficulty: "beginner",
    estimatedTime: "10 min",
    content: `
### Creating Tuples
Use parentheses `()`. Once created, tuples cannot be modified.

### Why Tuples?
- Faster than lists
- Can be dictionary keys
- Signal data should not change

### AI/ML Relevance
Used for coordinates, RGB values, and fixed hyperparameter tuples.
    `,
    examples: [
      {
        id: "ex1",
        title: "Tuple Basics",
        code: `point = (10, 20)
print(point[0])
# point[0] = 15  # TypeError! Tuples are immutable`,
        output: `10`,
        explanation: "Attempting to modify a tuple raises a TypeError.",
      },
    ],
    aiMlRelevance: false,
  },
];

export function getLesson(slug: string) {
  return DATA_STRUCTURES_LESSONS.find((l) => l.slug === slug);
}

export function getAllDataStructures() {
  return DATA_STRUCTURES_LESSONS;
}
