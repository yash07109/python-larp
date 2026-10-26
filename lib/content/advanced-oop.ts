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

export const ADVANCED_OOP_LESSONS: Lesson[] = [
  {
    slug: "metaclasses",
    title: "Metaclasses",
    description: "Classes that create classes — `type` and `__metaclass__`.",
    order: 1,
    difficulty: "advanced",
    estimatedTime: "30 min",
    content: `
### Concept
A class is an instance of a metaclass. Default metaclass is `type`.

### Custom Metaclass
Inherit from `type` and override `__new__` or `__init__` to modify class creation.

### Use Cases
- Auto-registering plugins
- Enforcing coding standards
- ORM field declarations (Django models)

### AI/ML Relevance
Framework-level code (model registries, config validation) uses metaclasses.
    `,
    examples: [
      {
        id: "ex1",
        title: "Simple Metaclass",
        code: `class Meta(type):
    def __new__(cls, name, bases, dct):
        print(f"Creating class {name}")
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=Meta):
    x = 1

print(MyClass.x)`,
        output: `Creating class MyClass
1`,
        explanation: "Meta runs when `MyClass` is defined, not when instantiated.",
      },
    ],
    aiMlRelevance: false,
  },
  {
    slug: "descriptors",
    title: "Descriptors",
    description: "Attribute access protocol — `__get__`, `__set__`, `__delete__`.",
    order: 2,
    difficulty: "advanced",
    estimatedTime: "25 min",
    content: `
### Descriptor Protocol
An object with `__get__`, `__set__`, or `__delete__` controls attribute access on another class.

### Built-in Descriptors
`property`, `classmethod`, `staticmethod`, `slots` are all descriptors.

### AI/ML Relevance
Validated attributes (e.g., ensuring hyperparameters stay in range).
    `,
    examples: [
      {
        id: "ex1",
        title: "Validated Descriptor",
        code: `class Positive:
    def __set_name__(self, owner, name):
        self.name = name
    def __get__(self, instance, owner):
        return instance.__dict__[self.name]
    def __set__(self, instance, value):
        if value <= 0:
            raise ValueError("must be positive")
        instance.__dict__[self.name] = value

class Model:
    learning_rate = Positive()

m = Model()
m.learning_rate = 0.01
print(m.learning_rate)
# m.learning_rate = -1  # ValueError`,
        output: `0.01`,
        explanation: "Descriptor intercepts attribute assignment to validate.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "mro-multiple-inheritance",
    title: "MRO & Multiple Inheritance",
    description: "Method Resolution Order, `super()`, diamond problem.",
    order: 3,
    difficulty: "advanced",
    estimatedTime: "25 min",
    content: `
### Multiple Inheritance
A class can inherit from multiple parents.

### MRO
Method Resolution Order — C3 linearization. Check with `ClassName.__mro__`.

### `super()`
Calls next method in MRO, not just the parent. Cooperative multiple inheritance.

### Diamond Problem
Same ancestor inherited twice — MRO prevents duplicate calls.

### AI/ML Relevance
Mixin classes for model features (e.g., `Serializable`, `Trainable`).
    `,
    examples: [
      {
        id: "ex1",
        title: "MRO",
        code: `class A:
    def whoami(self):
        print("A")

class B(A):
    def whoami(self):
        print("B")
        super().whoami()

class C(A):
    def whoami(self):
        print("C")
        super().whoami()

class D(B, C):
    pass

D().whoami()
print(D.__mro__)`,
        output: `B
C
A
(<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)`,
        explanation: "MRO: D → B → C → A → object.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return ADVANCED_OOP_LESSONS.find((l) => l.slug === slug);
}

export function getAllAdvancedOOP() {
  return ADVANCED_OOP_LESSONS;
}
