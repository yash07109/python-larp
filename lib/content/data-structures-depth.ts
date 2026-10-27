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

export const DATA_STRUCTURES_DEPTH_LESSONS: Lesson[] = [
  {
    slug: "linked-list",
    title: "Linked List",
    description: "Singly and doubly linked nodes from scratch.",
    order: 1,
    difficulty: "intermediate",
    estimatedTime: "25 min",
    content: `
### Concept
Nodes contain value and next (and prev for doubly). No random access — O(n) traversal.

### Operations
- Append, prepend, insert, delete, search — all O(n) except head ops O(1)

### AI/ML Relevance
Underpins queue implementations and adjacency list graph representations.
    `
    examples: [
      {
        id: "ex1",
        title: "Singly Linked List",
        code: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new = Node(value)
        if not self.head:
            self.head = new
            return
        cur = self.head
        while cur.next:
            cur = cur.next
        cur.next = new

    def __str__(self):
        vals = []
        cur = self.head
        while cur:
            vals.append(str(cur.value))
            cur = cur.next
        return " -> ".join(vals)

ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
print(ll)`,
        output: `1 -> 2 -> 3`,
        explanation: "Manual node linking — no built-in linked list in Python.",
      },
    ],
    aiMlRelevance: false,
  },
  {
    slug: "stack-queue",
    title: "Stack & Queue",
    description: "LIFO and FIFO using lists and collections.deque.",
    order: 2,
    difficulty: "intermediate",
    estimatedTime: "20 min",
    content: `
### Stack (LIFO)
list.append() / list.pop() from the end — O(1).

### Queue (FIFO)
collections.deque with append() / popleft() — O(1). Never use list.pop(0) — O(n).

### AI/ML Relevance
Stacks for DFS, queues for BFS, deques for sliding window algorithms.
    `
    examples: [
      {
        id: "ex1",
        title: "Stack & Queue",
        code: `from collections import deque

# Stack
stack = []
stack.append(1)
stack.append(2)
print(stack.pop())  # 2

# Queue
q = deque()
q.append(1)
q.append(2)
print(q.popleft())  # 1`,
        output: `2
1`,
        explanation: "Deque is the correct tool for queues.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "collections-module",
    title: "collections Module",
    description: "deque, Counter, defaultdict, OrderedDict, namedtuple.",
    order: 3,
    difficulty: "intermediate",
    estimatedTime: "25 min",
    content: `
### Key Tools
- deque — fast appends/pops from both ends
- Counter — count hashable objects
- defaultdict — auto-initialize missing keys
- OrderedDict — remember insertion order (less needed in Py3.7+)
- namedtuple — lightweight immutable records

### AI/ML Relevance
Counter for label distribution; defaultdict for grouping data by key.
    `
    examples: [
      {
        id: "ex1",
        title: "Counter & defaultdict",
        code: `from collections import Counter, defaultdict

words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
print(Counter(words))

grouped = defaultdict(list)
grouped["fruit"].append("apple")
grouped["fruit"].append("banana")
print(dict(grouped))`,
        output: `Counter({'apple': 3, 'banana': 2, 'cherry': 1})
{'fruit': ['apple', 'banana']}`,
        explanation: "Counter tallies; defaultdict auto-creates list values.",
      },
    ],
    aiMlRelevance: true,
  },
  {
    slug: "tree-graph",
    title: "Tree & Graph",
    description: "Binary trees and graphs with adjacency lists, DFS, BFS.",
    order: 4,
    difficulty: "advanced",
    estimatedTime: "30 min",
    content: `
### Tree
Hierarchical nodes. Binary tree: each node has <= 2 children.

### Graph
Nodes and edges. Represented as adjacency list (dict of lists).

### Traversals
- DFS — stack/recursion, go deep
- BFS — queue, go level by level

### AI/ML Relevance
Decision trees, neural network graphs, recommendation system graphs.
    `
    examples: [
      {
        id: "ex1",
        title: "Binary Tree + DFS",
        code: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def dfs(root):
    if not root:
        return []
    return [root.val] + dfs(root.left) + dfs(root.right)

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)

print(dfs(root))`,
        output: `[1, 2, 4, 3]`,
        explanation: "Pre-order DFS: root, left subtree, right subtree.",
      },
    ],
    aiMlRelevance: true,
  },
];

export function getLesson(slug: string) {
  return DATA_STRUCTURES_DEPTH_LESSONS.find((l) => l.slug === slug);
}

export function getAllDataStructuresDepth() {
  return DATA_STRUCTURES_DEPTH_LESSONS;
}
