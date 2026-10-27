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

export const FILE_IO_LESSONS: Lesson[] = [
  {
    slug: "reading-writing-files",
    title: "Reading & Writing Files",
    description: "Open, read, write, and close files safely with with.",
    order: 1,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `
### The with Statement
Automatically closes the file, even if an error occurs.

### Modes
- 'r' read (default)
- 'w' write (truncates)
- 'a' append
- 'r+' read and write
- 'b' binary mode

### Methods
- .read(), .readline(), .readlines()
- .write(), .writelines()

### AI/ML Relevance
Loading raw datasets, saving model outputs, reading configuration files.
    `
    examples: [
      {
        id: "ex1",
        title: "Write & Read File",
        code: `with open("notes.txt", "w") as f:
    f.write("Line 1\nLine 2\n")

with open("notes.txt", "r") as f:
    content = f.read()
    print(content)`,
        output: `Line 1
Line 2`,
        explanation: "with ensures the file closes after the block.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "csv-json",
    title: "CSV & JSON",
    description: "Work with tabular CSV data and structured JSON.",
    order: 2,
    difficulty: "beginner",
    estimatedTime: "20 min",
    content: `
### CSV
Use the csv module — csv.reader, csv.writer, csv.DictReader, csv.DictWriter.

### JSON
Use the json module — json.load(), json.loads(), json.dump(), json.dumps().

### AI/ML Relevance
CSV is the most common dataset format; JSON is the standard for APIs and config.
    `
    examples: [
      {
        id: "ex1",
        title: "CSV DictReader",
        code: `import csv

with open("data.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "score"])
    writer.writeheader()
    writer.writerow({"name": "Alice", "score": 90})
    writer.writerow({"name": "Bob", "score": 85})

with open("data.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["score"])`,
        output: `name score
Alice 90
Bob 85`,
        explanation: "DictReader maps rows to dictionaries by header names.",
      },
      {
        id: "ex2",
        title: "JSON",
        code: `import json

data = {"name": "Alice", "skills": ["Python", "ML"], "active": True}

json_str = json.dumps(data, indent=2)
print(json_str)

loaded = json.loads(json_str)
print(loaded["skills"])`,
        output: `{
  "name": "Alice",
  "skills": [
    "Python",
    "ML"
  ],
  "active": true
}
['Python', 'ML']`,
        explanation: "dumps serializes to string; loads deserializes from string.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "pathlib",
    title: "pathlib — Modern Paths",
    description: "Object-oriented filesystem paths with pathlib.Path.",
    order: 3,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### Why pathlib
Cleaner than os.path. Paths are objects, not strings.

### Common Operations
- Path("file.txt").exists()
- Path("dir").mkdir(parents=True, exist_ok=True)
- path / "sub" / "file" (join with /)
- path.read_text(), path.write_text()
- path.glob("*.py")

### AI/ML Relevance
Navigating dataset directories, finding model checkpoint files, organizing experiment outputs.
    `
    examples: [
      {
        id: "ex1",
        title: "pathlib Basics",
        code: `from pathlib import Path

p = Path("data") / "models" / "checkpoint.pth"
print(p.exists())
print(p.name)
print(p.suffix)
print(p.parent)

# Create nested dirs
Path("outputs/exp1").mkdir(parents=True, exist_ok=True)
Path("outputs/exp1/result.txt").write_text("done")

print(Path("outputs/exp1/result.txt").read_text())`,
        output: `False
checkpoint.pth
.pth
data/models

done`,
        explanation: "Path objects support / joining and have rich attributes.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return FILE_IO_LESSONS.find((l) => l.slug === slug);
}

export function getAllFileIO() {
  return FILE_IO_LESSONS;
}
