import type { EvaluationExample } from './types';

// Generated dataset. Extend by adding objects or rerunning generate-data.
export const pythonEvaluations: EvaluationExample[] = [
  {
    "id": "py-001",
    "category": "python algorithms",
    "difficulty": "hard",
    "prompt": "Implement binary search for sorted arrays with duplicate values. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but fails to return final value from helper function. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-002",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Write a function to merge overlapping intervals. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that documents assumptions and complexity tradeoffs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but drops function context when callback is invoked. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "py-003",
    "category": "python algorithms",
    "difficulty": "hard",
    "prompt": "Implement top-k frequent elements using heaps. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-004",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Find the longest substring without repeating characters. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but fails to return final value from helper function. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-005",
    "category": "python algorithms",
    "difficulty": "easy",
    "prompt": "Return the kth largest value from a stream of numbers. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that returns stable outputs for invalid inputs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-006",
    "category": "python algorithms",
    "difficulty": "easy",
    "prompt": "Implement BFS shortest path in an unweighted graph. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but drops function context when callback is invoked. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-007",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Write a function for detecting cycles in linked lists. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses asymptotically efficient data structures. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-008",
    "category": "python algorithms",
    "difficulty": "easy",
    "prompt": "Solve coin change with dynamic programming. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that adds guard clauses for empty and null values. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but drops function context when callback is invoked. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "py-009",
    "category": "python algorithms",
    "difficulty": "easy",
    "prompt": "Implement interval scheduling for max non-overlapping meetings. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that preserves function context and arguments correctly. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-010",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Count inversions in an array efficiently. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that preserves function context and arguments correctly. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-011",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Implement binary search for sorted arrays with duplicate values. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that documents assumptions and complexity tradeoffs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but ignores null/undefined checks in nested access. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "py-012",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Write a function to merge overlapping intervals. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses deterministic ordering for reproducibility. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but incorrectly handles async rejection paths. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "py-013",
    "category": "python algorithms",
    "difficulty": "easy",
    "prompt": "Implement top-k frequent elements using heaps. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but assumes sorted input without validation. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it assumes sorted input without validation.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-014",
    "category": "python algorithms",
    "difficulty": "easy",
    "prompt": "Find the longest substring without repeating characters. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but drops function context when callback is invoked. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-015",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Return the kth largest value from a stream of numbers. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that minimizes memory churn in hot paths. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but fails to return final value from helper function. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "py-016",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Implement BFS shortest path in an unweighted graph. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that handles async success and failure branches. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but assumes sorted input without validation. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it assumes sorted input without validation.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "py-017",
    "category": "python algorithms",
    "difficulty": "easy",
    "prompt": "Write a function for detecting cycles in linked lists. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses shared mutable state causing race conditions. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that covers edge cases explicitly before main logic. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-018",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Solve coin change with dynamic programming. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but drops function context when callback is invoked. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-019",
    "category": "python algorithms",
    "difficulty": "hard",
    "prompt": "Implement interval scheduling for max non-overlapping meetings. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but assumes sorted input without validation. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses asymptotically efficient data structures. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it assumes sorted input without validation.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "py-020",
    "category": "python algorithms",
    "difficulty": "medium",
    "prompt": "Count inversions in an array efficiently. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  }
];
