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

export const AI_ML_DS_LESSONS: Lesson[] = [
  {
    slug: "numpy-basics",
    title: "NumPy Basics",
    description: "Arrays, vectorization, and broadcasting for numerical computing.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "25 min",
    content: `
### Why NumPy
- Fast, memory-efficient N-dimensional arrays
- Vectorized operations (no explicit loops)
- Broadcasting rules for different-shaped arrays

### Core Concepts
- `np.array()`, `np.zeros()`, `np.ones()`, `np.arange()`
- `.shape`, `.dtype`, `.reshape()`, `.T`
- Element-wise math, dot products, slicing

### AI/ML Relevance
The foundation of nearly every ML library — tensors in PyTorch/TensorFlow are NumPy-like.
    `,
    examples: [
      {
        id: "ex1",
        title: "NumPy Arrays & Vectorization",
        code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr * 2)              # vectorized
print(arr + np.array([10, 20, 30, 40, 50]))
print(arr.reshape(5, 1))`,
        output: `[ 2  4  6  8 10]
[11 22 33 44 55]
[[1]
 [2]
 [3]
 [4]
 [5]]`,
        explanation: "Operations apply element-wise without Python loops.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "pandas-basics",
    title: "pandas Basics",
    description: "DataFrames, Series, indexing, grouping, and merging.",
    order: 2,
    difficulty: "beginner",
    estimatedTime: "30 min",
    content: `
### Core Objects
- `Series` — 1D labeled array
- `DataFrame` — 2D labeled table (like Excel/SQL)

### Operations
- `pd.read_csv()`, `pd.DataFrame()`
- `.head()`, `.info()`, `.describe()`
- Indexing: `df[col]`, `df.loc[]`, `df.iloc[]`
- `.groupby()`, `.merge()`, `.fillna()`, `.dropna()`

### AI/ML Relevance
The standard tool for data cleaning, EDA, and feature preparation before ML.
    `,
    examples: [
      {
        id: "ex1",
        title: "DataFrame Operations",
        code: `import pandas as pd

df = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie"],
    "score": [85, 92, 78],
    "city": ["NYC", "LA", "NYC"]
})

print(df[df["score"] > 80])
print(df.groupby("city")["score"].mean())`,
        output: `     name  score  city
0   Alice     85   NYC
1     Bob     92    LA
city
LA    92.0
NYC   81.5
Name: score, dtype: float64`,
        explanation: "Filter rows and aggregate by group in two lines.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "visualization",
    title: "Data Visualization",
    description: "Matplotlib and Seaborn for plotting data and model results.",
    order: 3,
    difficulty: "beginner",
    estimatedTime: "25 min",
    content: `
### Matplotlib
The foundational plotting library. `pyplot` interface is MATLAB-like.

### Seaborn
Built on Matplotlib, statistical defaults, works directly with pandas DataFrames.

### Common Plots
- Line, scatter, bar, histogram, boxplot, heatmap

### AI/ML Relevance
Visualize data distributions, training curves, confusion matrices, and feature importance.
    `,
    examples: [
      {
        id: "ex1",
        title: "Line Plot",
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title("Sine Wave")
plt.xlabel("x")
plt.ylabel("sin(x)")
plt.show()`,
        output: `# Displays a sine wave plot`,
        explanation: "Matplotlib renders charts inline in notebooks or as files.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "scikit-learn-basics",
    title: "scikit-learn Basics",
    description: "Train/test split, preprocessing, regression, classification.",
    order: 4,
    difficulty: "intermediate",
    estimatedTime: "30 min",
    content: `
### ML Workflow
1. Load data
2. Train/test split
3. Preprocess (scale, encode)
4. Fit model
5. Predict & evaluate

### Common Models
- LinearRegression, LogisticRegression, RandomForest, KMeans, SVM

### Evaluation Metrics
- Accuracy, MSE, R², precision, recall, F1

### AI/ML Relevance
scikit-learn is the entry point for classical machine learning in Python.
    `,
    examples: [
      {
        id: "ex1",
        title: "Iris Classification",
        code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

model = RandomForestClassifier()
model.fit(X_train, y_train)
preds = model.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, preds):.2f}")`,
        output: `Accuracy: 1.00`,
        explanation: "A complete ML pipeline in under 15 lines.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return AI_ML_DS_LESSONS.find((l) => l.slug === slug);
}

export function getAllAIMLDS() {
  return AI_ML_DS_LESSONS;
}
