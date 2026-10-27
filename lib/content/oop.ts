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

export const OOP_LESSONS: Lesson[] = [
  {
    slug: "classes-objects",
    title: "Classes & Objects",
    description: "Define blueprints with class and instantiate objects.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `
### Defining a Class
Use class with __init__ as the constructor and self to refer to the instance.

### Instance vs Class Attributes
- Instance: unique per object (self.attr)
- Class: shared across all instances (ClassName.attr)

### AI/ML Relevance
Classes model datasets, models, and pipelines in ML codebases.
    `,
    examples: [
      {
        id: "ex1",
        title: "Simple Class",
        code: `class Dog:
    species = "Canis familiaris"  # class attribute

    def __init__(self, name, age):
        self.name = name          # instance attribute
        self.age = age

    def bark(self):
        return f"{self.name} says woof!"

dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

print(dog1.bark())
print(dog2.bark())
print(dog1.species)`,
        output: `Buddy says woof!
Max says woof!
Canis familiaris`,
        explanation: "self binds attributes to the specific instance.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "inheritance",
    title: "Inheritance",
    description: "Reuse code by inheriting from parent classes.",
    order: 2,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### Single Inheritance
A child class inherits attributes and methods from a parent class.

### super()
Call parent class methods from the child.

### MRO
Method Resolution Order determines which method is called in multiple inheritance.

### AI/ML Relevance
Base classes for models, data loaders, and transforms in libraries like PyTorch and scikit-learn.
    `,
    examples: [
      {
        id: "ex1",
        title: "Inheritance Example",
        code: `class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    pass

animals = [Dog(), Cat()]
for a in animals:
    print(a.speak())`,
        output: `Woof!
Some sound`,
        explanation: "Dog overrides speak, Cat inherits it unchanged.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "dunder-methods",
    title: "Dunder (Magic) Methods",
    description: "Special methods with double underscores for object behavior.",
    order: 3,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### Common Dunder Methods
- __str__ — readable string representation
- __repr__ — developer representation
- __len__ — length of object
- __getitem__ — indexing support
- __call__ — make object callable
- __enter__/__exit__ — context manager

### AI/ML Relevance
Enables custom objects to behave like built-in types in data pipelines.
    `,
    examples: [
      {
        id: "ex1",
        title: "Dunder Methods",
        code: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    def __len__(self):
        return 2

    def __getitem__(self, index):
        if index == 0:
            return self.x
        if index == 1:
            return self.y
        raise IndexError("Vector index out of range")

v = Vector(3, 4)
print(v)
print(len(v))
print(v[0], v[1])`,
        output: `Vector(3, 4)
2
3 4`,
        explanation: "Dunder methods let custom objects use Python syntax naturally.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "abstraction-encapsulation",
    title: "Abstraction & Encapsulation",
    description: "ABC, abstract methods, name mangling, and properties.",
    order: 4,
    difficulty: "advanced",
    estimatedTime: "20 min",
    content: `
### Abstraction (ABC)
abc.ABC and @abstractmethod force subclasses to implement required methods.

### Encapsulation
- _name — convention for "protected"
- __name — name mangling (harder to access from outside)
- @property — controlled getter/setter

### AI/ML Relevance
Abstract base classes define interfaces for models, ensuring consistent APIs.
    `,
    examples: [
      {
        id: "ex1",
        title: "Abstract Base Class",
        code: `from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h
    def area(self):
        return self.w * self.h

# Shape()  # TypeError: Can't instantiate abstract class
r = Rectangle(4, 5)
print(r.area())`,
        output: `20`,
        explanation: "Cannot instantiate Shape directly — must implement area.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return OOP_LESSONS.find((l) => l.slug === slug);
}

export function getAllOOP() {
  return OOP_LESSONS;
}
