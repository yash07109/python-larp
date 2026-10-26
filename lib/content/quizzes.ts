export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
};

export type Quiz = {
  module: string;
  title: string;
  questions: QuizQuestion[];
};

export const QUIZZES: Quiz[] = [
  {
    module: "fundamentals",
    title: "Python Fundamentals Quiz",
    questions: [
      {
        id: "f1",
        question: "What is the output of `type(5)` in Python?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
        correctAnswer: 0,
        explanation: "5 is an integer, so type(5) returns <class 'int'>.",
      },
      {
        id: "f2",
        question: "Which of the following is a valid Python variable name?",
        options: ["1variable", "my-var", "_myVar", "class"],
        correctAnswer: 2,
        explanation: "_myVar is valid. Names can't start with numbers, can't have hyphens, and can't be keywords like 'class'.",
      },
      {
        id: "f3",
        question: "What does `print(3 // 2)` output?",
        options: ["1.5", "1", "2", "0"],
        correctAnswer: 1,
        explanation: "`//` is floor division, so 3 // 2 = 1.",
      },
    ],
  },
  {
    module: "control-flow",
    title: "Control Flow Quiz",
    questions: [
      {
        id: "cf1",
        question: "What does `continue` do in a loop?",
        options: ["Exits the loop entirely", "Skips to the next iteration", "Pauses the loop", "Restarts the loop"],
        correctAnswer: 1,
        explanation: "`continue` skips the rest of the current iteration and moves to the next one.",
      },
      {
        id: "cf2",
        question: "What is `range(3)` equivalent to?",
        options: ["[1, 2, 3]", "[0, 1, 2, 3]", "[0, 1, 2]", "[1, 2]"],
        correctAnswer: 2,
        explanation: "`range(3)` produces 0, 1, 2 — starting from 0, stopping before 3.",
      },
    ],
  },
  {
    module: "data-structures",
    title: "Data Structures Quiz",
    questions: [
      {
        id: "ds1",
        question: "Which data structure guarantees uniqueness of elements?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        correctAnswer: 2,
        explanation: "Sets automatically remove duplicates.",
      },
      {
        id: "ds2",
        question: "Are tuples mutable or immutable?",
        options: ["Mutable", "Immutable", "Both", "Neither"],
        correctAnswer: 1,
        explanation: "Tuples cannot be modified after creation.",
      },
    ],
  },
  {
    module: "functions",
    title: "Functions Quiz",
    questions: [
      {
        id: "fn1",
        question: "What does `*args` collect?",
        options: ["Keyword arguments into a dict", "Extra positional arguments into a tuple", "Only required arguments", "Nothing"],
        correctAnswer: 1,
        explanation: "`*args` packs extra positional arguments into a tuple.",
      },
    ],
  },
  {
    module: "oop",
    title: "OOP Quiz",
    questions: [
      {
        id: "oop1",
        question: "Which method is the constructor in Python classes?",
        options: ["__init__", "__main__", "__new__", "__construct__"],
        correctAnswer: 0,
        explanation: "`__init__` initializes a new instance.",
      },
    ],
  },
  {
    module: "comprehensions",
    title: "Comprehensions Quiz",
    questions: [
      {
        id: "cp1",
        question: "What is `[x**2 for x in range(4)]`?",
        options: ["[0, 1, 2, 3]", "[0, 1, 4, 9]", "[1, 4, 9, 16]", "[0, 2, 4, 6]"],
        correctAnswer: 1,
        explanation: "Squares of 0, 1, 2, 3 are 0, 1, 4, 9.",
      },
    ],
  },
  {
    module: "error-handling",
    title: "Error Handling Quiz",
    questions: [
      {
        id: "eh1",
        question: "Which block always executes, even if an exception occurs?",
        options: ["try", "except", "else", "finally"],
        correctAnswer: 3,
        explanation: "`finally` always runs for cleanup.",
      },
    ],
  },
  {
    module: "ai-ml-ds",
    title: "AI/ML & Data Science Quiz",
    questions: [
      {
        id: "ai1",
        question: "Which library is primarily used for numerical arrays?",
        options: ["pandas", "NumPy", "Matplotlib", "scikit-learn"],
        correctAnswer: 1,
        explanation: "NumPy provides N-dimensional arrays for numerical computing.",
      },
    ],
  },
];

export function getQuiz(module: string) {
  return QUIZZES.find((q) => q.module === module);
}
