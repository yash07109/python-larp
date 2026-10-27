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
    description: "What is Python, why learn it, and how to set up your environment.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "10 min",
    content: `
Python is a high-level, interpreted, general-purpose programming language known for its readability and simplicity. It is the most popular language for AI, Machine Learning, and Data Science.

### Why Python?
- Easy to read and write (syntax close to English)
- Massive ecosystem of libraries (NumPy, pandas, PyTorch, TensorFlow)
- Interpreted — no compilation step needed
- Cross-platform (Windows, macOS, Linux)

### AI/ML Relevance
Almost every modern AI/ML library is built with or exposes a Python API. Learning Python well is the single most important step before touching data science.
    `,
    examples: [
      {
        id: "ex1",
        title: "Your First Python Program",
        code: `# This is a comment
print("Hello, Python Mastery!")`,
        output: `Hello, Python Mastery!`,
        explanation: "The print() function displays output to the console. Lines starting with # are comments and are ignored by Python.",
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
    estimatedTime: "15 min",
    content: `
### Variables
Variables are containers for storing data values. Python has no command for declaring a variable — you create one the moment you assign a value to it.

### Core Data Types
| int | 5, -3 | Whole numbers |
| float | 3.14, 2.0 | Decimal numbers |
| str | "hello" | Text |
| bool | True, False | Boolean values |
| NoneType | None | Represents no value |

### Dynamic Typing
Python is dynamically typed — you don't need to declare the type, and a variable can change type during execution.
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
        explanation: "Use type() to check a variable's data type. Python infers types automatically from the assigned value.",
      },
      {
        id: "ex2",
        title: "Dynamic Typing",
        code: `x = 10       # x is an int
print(x, type(x))

x = "ten"    # x is now a str
print(x, type(x))`,
        output: `10 <class 'int'>
ten <class 'str'>`,
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
    estimatedTime: "15 min",
    content: `
### Arithmetic Operators
+ - * / // % **

### Comparison Operators
== != > < >= <=

### Logical Operators
and or not

### Assignment Operators
= += -= *= /= //= %= **=

### Operator Precedence
1. ** (exponentiation)
2. * / // %
3. + -
4. Comparisons
5. not, and, or
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
        explanation: "/ always returns a float. // returns the floor (integer part). % returns the remainder.",
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
        explanation: "and requires both to be True. or needs at least one True. not flips the value.",
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
    estimatedTime: "20 min",
    content: `
### Creating Strings
Use single, double, or triple quotes. Triple quotes allow multi-line strings.

### String Methods
- .upper(), .lower(), .strip(), .replace(), .split(), .join(), .find()

### String Slicing
text[start:stop:step] — extracts a substring.

### f-Strings (Formatted String Literals)
Embed expressions inside string literals using f"...".

### AI/ML Relevance
Text data is everywhere — from cleaning dataset column names to processing natural language.
    `,
    examples: [
      {
        id: "ex1",
        title: "String Methods & Slicing",
        code: `text = "  Python Mastery  "

print(text.strip())           # "Python Mastery"
print(text.upper())           # "  PYTHON MASTERY  "
print(text.replace("Python", "AI"))  # "  AI Mastery  "
print(text.split())           # ['Python', 'Mastery']
print(text[2:8])              # "thon "
print(text[::-1])             # "  yrasreM nohtyP  "`,
        output: `Python Mastery
  PYTHON MASTERY  
  AI Mastery  
['Python', 'Mastery']
thon  
  yrasreM nohtyP  `,
        explanation: "Slicing [start:stop] extracts characters. [::-1] reverses the string.",
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
        explanation: "f-strings are the modern, readable way to format strings in Python 3.6+.",
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
    estimatedTime: "10 min",
    content: `
### input()
Reads a line from the user. Always returns a string — convert with int(), float() when needed.

### print()
Displays output. Supports multiple arguments, sep, and end parameters.

### Type Conversion
- int("5") → 5
- float("3.14") → 3.14
- str(100) → "100"
- bool(1) → True
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
        explanation: "input() always returns a string. Wrap it with int() or float() for numbers.",
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
    estimatedTime: "10 min",
    content: `
### Comments
Start with #. Used for explanations and temporarily disabling code.

### Docstrings
Triple-quoted strings placed immediately after a function, class, or module definition. Used to document what code does. Accessible via __doc__.

### Best Practices
- Comment the why, not the what
- Keep docstrings concise but complete
- Update comments when code changes
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
        explanation: "Docstrings are accessible at runtime via __doc__ and are used by tools like help() and IDEs.",
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
