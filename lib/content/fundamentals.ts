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

export const FUNDAMENTALS_LESSONS: Lesson[] = [
  {
    slug: "introduction-setup",
    title: "Introduction & Setup",
    description: "What Python is, why it dominates AI/ML, and how to run your first program.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "15 min",
    content: `# What is Python?

Python is a high-level, interpreted, general-purpose programming language. Created by Guido van Rossum and released in 1991, Python emphasizes **readability** — its syntax uses significant whitespace and reads almost like English.

## Why Python?

- **Easy to learn** — clean, minimal syntax
- **Interpreted** — no compilation step; run code line-by-line
- **Dynamically typed** — variable types are inferred at runtime
- **Massive ecosystem** — libraries for everything from web development to artificial intelligence

## Python & AI / Machine Learning

Python is the **most popular language for AI, ML, and Data Science**. Almost every major library — NumPy, pandas, PyTorch, TensorFlow, scikit-learn — has a Python API. If your goal is AI/ML, Python is the best place to start.

## Running Python

There are two common ways to run Python:

1. **Interactive shell (REPL)** — type `python` or `python3` in your terminal and enter code line-by-line
2. **Script files** — save code in a `.py` file and run it with `python filename.py`

> 💡 This website includes a live browser playground, so you can run Python examples instantly without installing anything.

> ℹ️ "Interpreted" means Python executes code directly without needing a separate compiler like C++ or Java.
    `,
    examples: [
      {
        id: "ex1",
        title: "Your First Python Program",
        code: `# This is a comment — Python ignores lines starting with #
print("Hello, Python Mastery!")`,
        output: `Hello, Python Mastery!`,
        explanation: "`print()` displays output to the console. The text inside quotes is a string literal.",
      },
      {
        id: "ex2",
        title: "Arithmetic in REPL style",
        code: `print(2 + 3)
print(10 - 4)
print(6 * 7)
print(8 / 2)`,
        output: `5
6
42
4.0`,
        explanation: "Python handles basic math natively. Notice `/` always returns a float (4.0, not 4).",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "variables-data-types",
    title: "Variables & Data Types",
    description: "Store data in variables and understand Python's core data types.",
    order: 2,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `# Variables

A **variable** is a named container that holds a value. In Python, you create a variable simply by assigning a value to it — there is no `var`, `let`, or type declaration.

```python
name = "Alice"
age = 25
```

Python infers the type automatically. This is called **dynamic typing**.

## Core Data Types

| Type | Example | Description |
|------|---------|-------------|
| `int` | `5`, `-3`, `1000` | Whole numbers |
| `float` | `3.14`, `2.0`, `-0.5` | Decimal numbers |
| `str` | `"hello"`, `'Python'` | Text |
| `bool` | `True`, `False` | Boolean values |
| `NoneType` | `None` | Represents absence of value |

Use the `type()` function to check a variable's type at runtime.

## Dynamic Typing

A Python variable can change types during program execution:

> ⚠️ This flexibility is convenient but can lead to bugs if you're not careful about what a variable holds.

## AI/ML Relevance

In data science, you'll constantly assign arrays, dataframes, and model objects to variables. Understanding how Python references these objects is essential.
    `,
    examples: [
      {
        id: "ex1",
        title: "Variables & Types",
        code: `# Integer
age = 25

# Float
price = 19.99

# String
name = "Alice"

# Boolean
is_student = True

# None
result = None

print(age, price, name, is_student, result)
print(type(age), type(price), type(name), type(is_student), type(result))`,
        output: `25 19.99 Alice True None
<class 'int'> <class 'float'> <class 'str'> <class 'bool'> <class 'NoneType'>`,
        explanation: "`type()` reveals the data type. Python infers types automatically from the assigned value.",
      },
      {
        id: "ex2",
        title: "Dynamic Typing in Action",
        code: `x = 10       # x is an int
print(x, type(x))

x = "ten"    # x is now a str
print(x, type(x))

x = 3.14     # x is now a float
print(x, type(x))`,
        output: `10 <class 'int'>
ten <class 'str'>
3.14 <class 'float'>`,
        explanation: "A variable can be reassigned to a different type at any time.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "operators",
    title: "Operators",
    description: "Arithmetic, comparison, logical, and assignment operators.",
    order: 3,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `# Operators

Operators perform operations on variables and values. Python groups them into several categories.

## Arithmetic Operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `5 / 3` | `1.666...` |
| `//` | Floor division | `5 // 3` | `1` |
| `%` | Modulus (remainder) | `5 % 3` | `2` |
| `**` | Exponentiation | `5 ** 3` | `125` |

## Comparison Operators

These return `True` or `False`:
`==`, `!=`, `>`, `<`, `>=`, `<=`

## Logical Operators

- `and` — True if both operands are True
- `or` — True if at least one operand is True
- `not` — flips True to False and vice versa

## Assignment Operators

`=`, `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`

> ℹ️ Floor division `//` returns the largest integer less than or equal to the result. Modulus `%` returns the remainder.

## Operator Precedence

Python evaluates expressions in this order:
1. `**` (exponentiation)
2. `*`, `/`, `//`, `%`
3. `+`, `-`
4. Comparisons (`==`, `>`, etc.)
5. `not`, `and`, `or`
    `,
    examples: [
      {
        id: "ex1",
        title: "Arithmetic Operators",
        code: `a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3 (floor division)
print(a % b)   # 1 (modulus)
print(a ** b)  # 1000`,
        output: `13
7
30
3.3333333333333335
3
1
1000`,
        explanation: "`/` always returns a float. `//` discards the remainder. `%` gives the remainder only.",
      },
      {
        id: "ex2",
        title: "Logical Operators",
        code: `age = 22
has_id = True

print(age >= 18 and has_id)   # True
print(age < 18 or has_id)     # True
print(not has_id)             # False`,
        output: `True
True
False`,
        explanation: "`and` needs both True. `or` needs at least one True. `not` inverts the value.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "strings",
    title: "Strings",
    description: "Work with text using string methods, formatting, and slicing.",
    order: 4,
    difficulty: "beginner",
    estimatedTime: "25 min",
    content: `# Strings

A **string** is a sequence of characters. In Python, strings are created using single quotes `'`, double quotes `"`, or triple quotes `"""`.

## Creating Strings

```python
single = 'Hello'
double = "World"
multi = """This is a
multi-line string"""
```

## String Slicing

You can extract parts of a string using `text[start:stop:step]`.

- `text[0]` — first character
- `text[1:4]` — characters from index 1 up to (but not including) 4
- `text[::-1]` — reverse the string

## Common String Methods

| Method | Purpose |
|--------|---------|
| `.upper()` | Convert to uppercase |
| `.lower()` | Convert to lowercase |
| `.strip()` | Remove leading/trailing whitespace |
| `.replace(old, new)` | Replace substring |
| `.split()` | Split into a list |
| `.join(list)` | Join list into string |
| `.find(sub)` | Find index of substring |

## f-Strings (Formatted String Literals)

Introduced in Python 3.6, f-strings let you embed expressions directly inside strings:

```python
name = "Alice"
score = 95
print(f"{name} scored {score} points.")
```

> 💡 f-strings are the modern, preferred way to format strings in Python.

## AI/ML Relevance

Text data is everywhere — from cleaning dataset column names to processing natural language (NLP). String manipulation is a foundational skill for data preprocessing.
    `,
    examples: [
      {
        id: "ex1",
        title: "String Methods & Slicing",
        code: `text = "  Python Mastery  "

print(text.strip())           # Remove whitespace
print(text.upper())           # Uppercase
print(text.replace("Python", "AI"))  # Replace word
print(text.split())           # Split into list
print(text[2:8])              # Slice characters
print(text[::-1])             # Reverse string`,
        output: `Python Mastery
  PYTHON MASTERY  
  AI Mastery  
['Python', 'Mastery']
thon  
  yrasreM nohtyP  `,
        explanation: "Slicing `[start:stop]` extracts characters. `[::-1]` reverses the string.",
      },
      {
        id: "ex2",
        title: "f-Strings",
        code: `name = "Alice"
score = 95

message = f"{name} scored {score} out of 100."
print(message)

# Expressions inside f-strings
print(f"Double score: {score * 2}")`,
        output: `Alice scored 95 out of 100.
Double score: 190`,
        explanation: "f-strings evaluate expressions inside `{}` and embed the result in the string.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "input-output",
    title: "Input & Output",
    description: "Get user input with input() and format output with print().",
    order: 5,
    difficulty: "beginner",
    estimatedTime: "15 min",
    content: `# Input & Output

## input()

The `input()` function reads a line of text from the user. **It always returns a string**, even if the user types a number. Convert it with `int()` or `float()` when needed.

## print()

The `print()` function displays output. It accepts multiple arguments and supports `sep` (separator) and `end` (what to print at the end) parameters.

## Type Conversion Functions

| Function | Purpose |
|----------|---------|
| `int()` | Convert to integer |
| `float()` | Convert to float |
| `str()` | Convert to string |
| `bool()` | Convert to boolean |

> ⚠️ Forgetting to convert `input()` to a number is a common beginner bug.

## AI/ML Relevance

While real data science rarely uses `input()` (data comes from files/databases), understanding type conversion is critical when cleaning messy datasets.
    `,
    examples: [
      {
        id: "ex1",
        title: "User Input & Conversion",
        code: `# Simulated input (in real use, input() reads from keyboard)
name = input("Enter your name: ")
age = int(input("Enter your age: "))

print(f"Hello {name}! Next year you will be {age + 1}.")

# print with sep and end
print("Apple", "Banana", "Cherry", sep=", ")
print("Loading", end="... ")`,
        output: `Hello Alice! Next year you will be 26.
Apple, Banana, Cherry
Loading... `,
        explanation: "`input()` always returns a string. Wrap it with `int()` or `float()` for math.",
      },
    ],
    aiMlRelevance: false,
  },
  {
    slug: "comments-docstrings",
    title: "Comments & Docstrings",
    description: "Write clean, documented code with comments and docstrings.",
    order: 6,
    difficulty: "beginner",
    estimatedTime: "15 min",
    content: `# Comments & Docstrings

Good code explains itself, but comments and docstrings explain the **why** behind decisions.

## Comments

Start a line with `#`. Python ignores everything after `#` on that line.

```python
# Calculate the area of a circle
area = 3.14159 * radius ** 2
```

## Docstrings

Docstrings are triple-quoted strings placed immediately after a function, class, or module definition. They document what the code does and are accessible at runtime via `__doc__`.

```python
def circle_area(radius):
    """Calculate the area of a circle given its radius.
    
    Args:
        radius (float): The radius of the circle.
    
    Returns:
        float: The area of the circle.
    """
    return 3.14159 * radius ** 2
```

## Best Practices

- Comment the **why**, not the **what**
- Keep docstrings concise but complete
- Update comments when code changes

## AI/ML Relevance

Well-documented preprocessing and model code makes collaboration and reproducibility much easier in data science teams.
    `,
    examples: [
      {
        id: "ex1",
        title: "Comments & Docstrings",
        code: `# Calculate the area of a circle
# Formula: pi * r^2

def circle_area(radius):
    """Calculate the area of a circle given its radius.
    
    Args:
        radius (float): The radius of the circle.
    
    Returns:
        float: The area of the circle.
    """
    pi = 3.14159
    return pi * radius ** 2

print(circle_area(5))
print(circle_area.__doc__)`,
        output: `78.53975
Calculate the area of a circle given its radius.
    
    Args:
        radius (float): The radius of the circle.
    
    Returns:
        float: The area of the circle.
`,
        explanation: "Docstrings are accessible at runtime via `__doc__` and are used by tools like `help()` and IDEs.",
      },
    ],
    aiMlRelevance: false,
  },
];

export function getLesson(slug: string) {
  return FUNDAMENTALS_LESSONS.find((l) => l.slug === slug);
}

export function getAllFundamentals() {
  return FUNDAMENTALS_LESSONS;
}
