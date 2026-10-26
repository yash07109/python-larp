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

export const MODULES_PACKAGING_LESSONS: Lesson[] = [
  {
    slug: "import-system",
    title: "Import System",
    description: "How `import` works, `sys.path`, packages vs modules.",
    order: 1,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### `import` Mechanics
Python searches `sys.path` for a matching `.py` file or package folder.

### `import module` vs `from module import name`
- `import math` — binds `math`; access `math.sqrt`
- `from math import sqrt` — binds `sqrt` directly

### `__name__ == "__main__"`
Lets a file act as both a reusable module and a runnable script.

### AI/ML Relevance
Understanding imports prevents circular dependency bugs in large ML codebases.
    `,
    examples: [
      {
        id: "ex1",
        title: "Import Styles",
        code: `import math
from math import sqrt, pi

print(math.sqrt(16))
print(sqrt(25))
print(pi)`,
        output: `4.0
5.0
3.141592653589793`,
        explanation: "Two ways to bring in the same module.",
      },
      {
        id: "ex2",
        title: "__main__ Guard",
        code: `# mymodule.py
def main():
    print("Running as script")

if __name__ == "__main__":
    main()`,
        output: `Running as script`,
        explanation: "`main()` only runs when executed directly, not when imported.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "pip-venv",
    title: "pip & Virtual Environments",
    description: "Install packages with pip, isolate projects with venv.",
    order: 2,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `
### pip
Python's package installer. `pip install package_name`.

### venv
Isolates dependencies per project so they don't conflict.

### Workflow
1. `python -m venv .venv`
2. `source .venv/bin/activate` (or `.venv\\Scripts\\activate` on Windows)
3. `pip install -r requirements.txt`
4. `pip freeze > requirements.txt`

### AI/ML Relevance
ML libraries (PyTorch, TensorFlow) have heavy dependencies — virtual environments keep them isolated.
    `,
    examples: [
      {
        id: "ex1",
        title: "Typical Workflow",
        code: `# Terminal commands:
# python -m venv .venv
# source .venv/bin/activate
# pip install numpy pandas scikit-learn
# pip freeze > requirements.txt`,
        output: `# (commands run in terminal, no Python output)`,
        explanation: "Standard Python development workflow.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "packages",
    title: "Packages & `__init__.py`",
    description: "Organize modules into packages with `__init__.py`.",
    order: 3,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### Package Structure
A folder with `__init__.py` is a package. You can import submodules from it.

### `__init__.py`
Can be empty, or re-export names to simplify imports.

### Relative Imports
`from . import sibling` inside a package.

### AI/ML Relevance
Large ML projects organize models, data, and utils into packages.
    `,
    examples: [
      {
        id: "ex1",
        title: "Package Layout",
        code: `# myml/
#   __init__.py
#   data.py
#   models.py

# __init__.py
from .data import load_data
from .models import train_model

# Usage
from myml import load_data, train_model`,
        output: `# Package exposes clean API`,
        explanation: "`__init__` controls what's publicly importable.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return MODULES_PACKAGING_LESSONS.find((l) => l.slug === slug);
}

export function getAllModulesPackaging() {
  return MODULES_PACKAGING_LESSONS;
}
