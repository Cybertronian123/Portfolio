export interface BugHuntExample {
  id: string;
  language: string;
  code: string;
  bugExplanation: string;
  fix: string;
}

// Generated dataset. Add more entries or rerun generate-data.
export const bugHunts: BugHuntExample[] = [
  {
    "id": "bug-001",
    "language": "javascript",
    "code": "function sum(arr) {\n  return arr.reduce((a, b) => a + b)\n}",
    "bugExplanation": "Missing initial accumulator causes failure for empty arrays.",
    "fix": "function sum(arr) {\n  return arr.reduce((a, b) => a + b, 0)\n}"
  },
  {
    "id": "bug-002",
    "language": "javascript",
    "code": "async function fetchData(url) {\n  const res = fetch(url)\n  return res.json()\n}",
    "bugExplanation": "Missing await before fetch causes json call on unresolved Promise.",
    "fix": "async function fetchData(url) {\n  const res = await fetch(url)\n  return res.json()\n}"
  },
  {
    "id": "bug-003",
    "language": "python",
    "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)",
    "bugExplanation": "Base case misses n == 0, causing recursion error for zero.",
    "fix": "def factorial(n):\n    if n in (0, 1):\n        return 1\n    return n * factorial(n - 1)"
  },
  {
    "id": "bug-004",
    "language": "typescript",
    "code": "function first<T>(arr: T[]): T {\n  return arr[0]\n}",
    "bugExplanation": "Return type is unsafe for empty arrays; should include undefined.",
    "fix": "function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}"
  },
  {
    "id": "bug-005",
    "language": "sql",
    "code": "SELECT department, salary\nFROM employees\nWHERE salary = (SELECT MAX(salary) FROM employees);",
    "bugExplanation": "Max salary is global, not partitioned per department.",
    "fix": "SELECT department, salary\nFROM (\n  SELECT department, salary,\n         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n) t\nWHERE rnk = 1;"
  },
  {
    "id": "bug-006",
    "language": "javascript",
    "code": "function sum(arr) {\n  return arr.reduce((a, b) => a + b)\n}",
    "bugExplanation": "Missing initial accumulator causes failure for empty arrays.",
    "fix": "function sum(arr) {\n  return arr.reduce((a, b) => a + b, 0)\n}"
  },
  {
    "id": "bug-007",
    "language": "javascript",
    "code": "async function fetchData(url) {\n  const res = fetch(url)\n  return res.json()\n}",
    "bugExplanation": "Missing await before fetch causes json call on unresolved Promise.",
    "fix": "async function fetchData(url) {\n  const res = await fetch(url)\n  return res.json()\n}"
  },
  {
    "id": "bug-008",
    "language": "python",
    "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)",
    "bugExplanation": "Base case misses n == 0, causing recursion error for zero.",
    "fix": "def factorial(n):\n    if n in (0, 1):\n        return 1\n    return n * factorial(n - 1)"
  },
  {
    "id": "bug-009",
    "language": "typescript",
    "code": "function first<T>(arr: T[]): T {\n  return arr[0]\n}",
    "bugExplanation": "Return type is unsafe for empty arrays; should include undefined.",
    "fix": "function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}"
  },
  {
    "id": "bug-010",
    "language": "sql",
    "code": "SELECT department, salary\nFROM employees\nWHERE salary = (SELECT MAX(salary) FROM employees);",
    "bugExplanation": "Max salary is global, not partitioned per department.",
    "fix": "SELECT department, salary\nFROM (\n  SELECT department, salary,\n         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n) t\nWHERE rnk = 1;"
  },
  {
    "id": "bug-011",
    "language": "javascript",
    "code": "function sum(arr) {\n  return arr.reduce((a, b) => a + b)\n}",
    "bugExplanation": "Missing initial accumulator causes failure for empty arrays.",
    "fix": "function sum(arr) {\n  return arr.reduce((a, b) => a + b, 0)\n}"
  },
  {
    "id": "bug-012",
    "language": "javascript",
    "code": "async function fetchData(url) {\n  const res = fetch(url)\n  return res.json()\n}",
    "bugExplanation": "Missing await before fetch causes json call on unresolved Promise.",
    "fix": "async function fetchData(url) {\n  const res = await fetch(url)\n  return res.json()\n}"
  },
  {
    "id": "bug-013",
    "language": "python",
    "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)",
    "bugExplanation": "Base case misses n == 0, causing recursion error for zero.",
    "fix": "def factorial(n):\n    if n in (0, 1):\n        return 1\n    return n * factorial(n - 1)"
  },
  {
    "id": "bug-014",
    "language": "typescript",
    "code": "function first<T>(arr: T[]): T {\n  return arr[0]\n}",
    "bugExplanation": "Return type is unsafe for empty arrays; should include undefined.",
    "fix": "function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}"
  },
  {
    "id": "bug-015",
    "language": "sql",
    "code": "SELECT department, salary\nFROM employees\nWHERE salary = (SELECT MAX(salary) FROM employees);",
    "bugExplanation": "Max salary is global, not partitioned per department.",
    "fix": "SELECT department, salary\nFROM (\n  SELECT department, salary,\n         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n) t\nWHERE rnk = 1;"
  },
  {
    "id": "bug-016",
    "language": "javascript",
    "code": "function sum(arr) {\n  return arr.reduce((a, b) => a + b)\n}",
    "bugExplanation": "Missing initial accumulator causes failure for empty arrays.",
    "fix": "function sum(arr) {\n  return arr.reduce((a, b) => a + b, 0)\n}"
  },
  {
    "id": "bug-017",
    "language": "javascript",
    "code": "async function fetchData(url) {\n  const res = fetch(url)\n  return res.json()\n}",
    "bugExplanation": "Missing await before fetch causes json call on unresolved Promise.",
    "fix": "async function fetchData(url) {\n  const res = await fetch(url)\n  return res.json()\n}"
  },
  {
    "id": "bug-018",
    "language": "python",
    "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)",
    "bugExplanation": "Base case misses n == 0, causing recursion error for zero.",
    "fix": "def factorial(n):\n    if n in (0, 1):\n        return 1\n    return n * factorial(n - 1)"
  },
  {
    "id": "bug-019",
    "language": "typescript",
    "code": "function first<T>(arr: T[]): T {\n  return arr[0]\n}",
    "bugExplanation": "Return type is unsafe for empty arrays; should include undefined.",
    "fix": "function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}"
  },
  {
    "id": "bug-020",
    "language": "sql",
    "code": "SELECT department, salary\nFROM employees\nWHERE salary = (SELECT MAX(salary) FROM employees);",
    "bugExplanation": "Max salary is global, not partitioned per department.",
    "fix": "SELECT department, salary\nFROM (\n  SELECT department, salary,\n         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n) t\nWHERE rnk = 1;"
  },
  {
    "id": "bug-021",
    "language": "javascript",
    "code": "function sum(arr) {\n  return arr.reduce((a, b) => a + b)\n}",
    "bugExplanation": "Missing initial accumulator causes failure for empty arrays.",
    "fix": "function sum(arr) {\n  return arr.reduce((a, b) => a + b, 0)\n}"
  },
  {
    "id": "bug-022",
    "language": "javascript",
    "code": "async function fetchData(url) {\n  const res = fetch(url)\n  return res.json()\n}",
    "bugExplanation": "Missing await before fetch causes json call on unresolved Promise.",
    "fix": "async function fetchData(url) {\n  const res = await fetch(url)\n  return res.json()\n}"
  },
  {
    "id": "bug-023",
    "language": "python",
    "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)",
    "bugExplanation": "Base case misses n == 0, causing recursion error for zero.",
    "fix": "def factorial(n):\n    if n in (0, 1):\n        return 1\n    return n * factorial(n - 1)"
  },
  {
    "id": "bug-024",
    "language": "typescript",
    "code": "function first<T>(arr: T[]): T {\n  return arr[0]\n}",
    "bugExplanation": "Return type is unsafe for empty arrays; should include undefined.",
    "fix": "function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}"
  },
  {
    "id": "bug-025",
    "language": "sql",
    "code": "SELECT department, salary\nFROM employees\nWHERE salary = (SELECT MAX(salary) FROM employees);",
    "bugExplanation": "Max salary is global, not partitioned per department.",
    "fix": "SELECT department, salary\nFROM (\n  SELECT department, salary,\n         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n) t\nWHERE rnk = 1;"
  },
  {
    "id": "bug-026",
    "language": "javascript",
    "code": "function sum(arr) {\n  return arr.reduce((a, b) => a + b)\n}",
    "bugExplanation": "Missing initial accumulator causes failure for empty arrays.",
    "fix": "function sum(arr) {\n  return arr.reduce((a, b) => a + b, 0)\n}"
  },
  {
    "id": "bug-027",
    "language": "javascript",
    "code": "async function fetchData(url) {\n  const res = fetch(url)\n  return res.json()\n}",
    "bugExplanation": "Missing await before fetch causes json call on unresolved Promise.",
    "fix": "async function fetchData(url) {\n  const res = await fetch(url)\n  return res.json()\n}"
  },
  {
    "id": "bug-028",
    "language": "python",
    "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)",
    "bugExplanation": "Base case misses n == 0, causing recursion error for zero.",
    "fix": "def factorial(n):\n    if n in (0, 1):\n        return 1\n    return n * factorial(n - 1)"
  },
  {
    "id": "bug-029",
    "language": "typescript",
    "code": "function first<T>(arr: T[]): T {\n  return arr[0]\n}",
    "bugExplanation": "Return type is unsafe for empty arrays; should include undefined.",
    "fix": "function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}"
  },
  {
    "id": "bug-030",
    "language": "sql",
    "code": "SELECT department, salary\nFROM employees\nWHERE salary = (SELECT MAX(salary) FROM employees);",
    "bugExplanation": "Max salary is global, not partitioned per department.",
    "fix": "SELECT department, salary\nFROM (\n  SELECT department, salary,\n         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n) t\nWHERE rnk = 1;"
  },
  {
    "id": "bug-031",
    "language": "javascript",
    "code": "function sum(arr) {\n  return arr.reduce((a, b) => a + b)\n}",
    "bugExplanation": "Missing initial accumulator causes failure for empty arrays.",
    "fix": "function sum(arr) {\n  return arr.reduce((a, b) => a + b, 0)\n}"
  },
  {
    "id": "bug-032",
    "language": "javascript",
    "code": "async function fetchData(url) {\n  const res = fetch(url)\n  return res.json()\n}",
    "bugExplanation": "Missing await before fetch causes json call on unresolved Promise.",
    "fix": "async function fetchData(url) {\n  const res = await fetch(url)\n  return res.json()\n}"
  },
  {
    "id": "bug-033",
    "language": "python",
    "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)",
    "bugExplanation": "Base case misses n == 0, causing recursion error for zero.",
    "fix": "def factorial(n):\n    if n in (0, 1):\n        return 1\n    return n * factorial(n - 1)"
  },
  {
    "id": "bug-034",
    "language": "typescript",
    "code": "function first<T>(arr: T[]): T {\n  return arr[0]\n}",
    "bugExplanation": "Return type is unsafe for empty arrays; should include undefined.",
    "fix": "function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}"
  },
  {
    "id": "bug-035",
    "language": "sql",
    "code": "SELECT department, salary\nFROM employees\nWHERE salary = (SELECT MAX(salary) FROM employees);",
    "bugExplanation": "Max salary is global, not partitioned per department.",
    "fix": "SELECT department, salary\nFROM (\n  SELECT department, salary,\n         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n) t\nWHERE rnk = 1;"
  },
  {
    "id": "bug-036",
    "language": "javascript",
    "code": "function sum(arr) {\n  return arr.reduce((a, b) => a + b)\n}",
    "bugExplanation": "Missing initial accumulator causes failure for empty arrays.",
    "fix": "function sum(arr) {\n  return arr.reduce((a, b) => a + b, 0)\n}"
  },
  {
    "id": "bug-037",
    "language": "javascript",
    "code": "async function fetchData(url) {\n  const res = fetch(url)\n  return res.json()\n}",
    "bugExplanation": "Missing await before fetch causes json call on unresolved Promise.",
    "fix": "async function fetchData(url) {\n  const res = await fetch(url)\n  return res.json()\n}"
  },
  {
    "id": "bug-038",
    "language": "python",
    "code": "def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)",
    "bugExplanation": "Base case misses n == 0, causing recursion error for zero.",
    "fix": "def factorial(n):\n    if n in (0, 1):\n        return 1\n    return n * factorial(n - 1)"
  },
  {
    "id": "bug-039",
    "language": "typescript",
    "code": "function first<T>(arr: T[]): T {\n  return arr[0]\n}",
    "bugExplanation": "Return type is unsafe for empty arrays; should include undefined.",
    "fix": "function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}"
  },
  {
    "id": "bug-040",
    "language": "sql",
    "code": "SELECT department, salary\nFROM employees\nWHERE salary = (SELECT MAX(salary) FROM employees);",
    "bugExplanation": "Max salary is global, not partitioned per department.",
    "fix": "SELECT department, salary\nFROM (\n  SELECT department, salary,\n         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n) t\nWHERE rnk = 1;"
  }
];
