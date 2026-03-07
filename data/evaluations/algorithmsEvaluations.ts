import type { EvaluationExample } from './types';

// Generated dataset (data structures + edge cases + optimization).
export const algorithmsEvaluations: EvaluationExample[] = [
  {
    "id": "ds-001",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Implement an LRU cache using hashmap plus doubly linked list. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but assumes sorted input without validation. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it assumes sorted input without validation.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-002",
    "category": "data structure problems",
    "difficulty": "easy",
    "prompt": "Design a stack that supports getMin in O(1). Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses asymptotically efficient data structures. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-003",
    "category": "data structure problems",
    "difficulty": "hard",
    "prompt": "Implement a queue using two stacks. Include explanation of complexity and edge-case behavior.",
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
    "id": "ds-004",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Serialize and deserialize a binary tree. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-005",
    "category": "data structure problems",
    "difficulty": "easy",
    "prompt": "Detect and remove a cycle in a singly linked list. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but fails to return final value from helper function. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that returns stable outputs for invalid inputs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-006",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Implement union-find with path compression. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-007",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Build a trie for autocomplete search prefixes. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses asymptotically efficient data structures. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-008",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Construct a segment tree for range sum queries. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-009",
    "category": "data structure problems",
    "difficulty": "easy",
    "prompt": "Design a hash map with collision handling. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that documents assumptions and complexity tradeoffs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but fails to return final value from helper function. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "ds-010",
    "category": "data structure problems",
    "difficulty": "easy",
    "prompt": "Implement an iterator for in-order BST traversal. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that covers edge cases explicitly before main logic. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but assumes sorted input without validation. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it assumes sorted input without validation.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "ds-011",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Implement an LRU cache using hashmap plus doubly linked list. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that adds guard clauses for empty and null values. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-012",
    "category": "data structure problems",
    "difficulty": "hard",
    "prompt": "Design a stack that supports getMin in O(1). Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that includes clear base and termination conditions. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but fails to return final value from helper function. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "ds-013",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Implement a queue using two stacks. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that handles async success and failure branches. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-014",
    "category": "data structure problems",
    "difficulty": "easy",
    "prompt": "Serialize and deserialize a binary tree. Include explanation of complexity and edge-case behavior.",
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
    "id": "ds-015",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Detect and remove a cycle in a singly linked list. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that handles async success and failure branches. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-016",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Implement union-find with path compression. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that returns stable outputs for invalid inputs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-017",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Build a trie for autocomplete search prefixes. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that preserves function context and arguments correctly. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-018",
    "category": "data structure problems",
    "difficulty": "easy",
    "prompt": "Construct a segment tree for range sum queries. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that handles async success and failure branches. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "ds-019",
    "category": "data structure problems",
    "difficulty": "medium",
    "prompt": "Design a hash map with collision handling. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that documents assumptions and complexity tradeoffs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but fails to return final value from helper function. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "ds-020",
    "category": "data structure problems",
    "difficulty": "hard",
    "prompt": "Implement an iterator for in-order BST traversal. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-001",
    "category": "edge case reasoning tasks",
    "difficulty": "easy",
    "prompt": "Explain behavior when input array is empty for reduce-based functions. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-002",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Handle null, undefined, and NaN consistently in validation logic. Include explanation of complexity and edge-case behavior.",
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
    "id": "edge-003",
    "category": "edge case reasoning tasks",
    "difficulty": "hard",
    "prompt": "Analyze integer overflow risks for cumulative counters. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but drops function context when callback is invoked. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that returns stable outputs for invalid inputs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-004",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Reason about timezone transitions in date calculations. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that adds guard clauses for empty and null values. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-005",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Handle duplicate keys in object merge utilities. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses asymptotically efficient data structures. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but uses shared mutable state causing race conditions. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "edge-006",
    "category": "edge case reasoning tasks",
    "difficulty": "hard",
    "prompt": "Define behavior for zero-length debounce delays. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-007",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Reason about recursion depth for deeply nested inputs. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but assumes sorted input without validation. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that covers edge cases explicitly before main logic. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it assumes sorted input without validation.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-008",
    "category": "edge case reasoning tasks",
    "difficulty": "easy",
    "prompt": "Handle Unicode surrogate pairs in string slicing logic. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-009",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Define fallback behavior when API responds with partial data. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but misses edge case handling for empty input. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it misses edge case handling for empty input.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-010",
    "category": "edge case reasoning tasks",
    "difficulty": "hard",
    "prompt": "Reason about ordering guarantees under concurrent writes. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that preserves function context and arguments correctly. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but drops function context when callback is invoked. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "edge-011",
    "category": "edge case reasoning tasks",
    "difficulty": "easy",
    "prompt": "Explain behavior when input array is empty for reduce-based functions. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that minimizes memory churn in hot paths. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but uses shared mutable state causing race conditions. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "edge-012",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Handle null, undefined, and NaN consistently in validation logic. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but misses edge case handling for empty input. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that preserves function context and arguments correctly. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it misses edge case handling for empty input.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-013",
    "category": "edge case reasoning tasks",
    "difficulty": "hard",
    "prompt": "Analyze integer overflow risks for cumulative counters. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but fails to return final value from helper function. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-014",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Reason about timezone transitions in date calculations. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but fails to return final value from helper function. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that handles async success and failure branches. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-015",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Handle duplicate keys in object merge utilities. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that covers edge cases explicitly before main logic. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but has off-by-one boundary error. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "edge-016",
    "category": "edge case reasoning tasks",
    "difficulty": "hard",
    "prompt": "Define behavior for zero-length debounce delays. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that covers edge cases explicitly before main logic. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but fails to return final value from helper function. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "edge-017",
    "category": "edge case reasoning tasks",
    "difficulty": "easy",
    "prompt": "Reason about recursion depth for deeply nested inputs. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that handles async success and failure branches. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-018",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Handle Unicode surrogate pairs in string slicing logic. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "edge-019",
    "category": "edge case reasoning tasks",
    "difficulty": "easy",
    "prompt": "Define fallback behavior when API responds with partial data. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses deterministic ordering for reproducibility. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but uses shared mutable state causing race conditions. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "edge-020",
    "category": "edge case reasoning tasks",
    "difficulty": "medium",
    "prompt": "Reason about ordering guarantees under concurrent writes. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that returns stable outputs for invalid inputs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but misses edge case handling for empty input. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it misses edge case handling for empty input.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "opt-001",
    "category": "code optimization tasks",
    "difficulty": "medium",
    "prompt": "Optimize nested loops in frequency counting logic. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-002",
    "category": "code optimization tasks",
    "difficulty": "easy",
    "prompt": "Reduce memory footprint of large list transformations. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but misses edge case handling for empty input. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it misses edge case handling for empty input.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-003",
    "category": "code optimization tasks",
    "difficulty": "hard",
    "prompt": "Optimize graph traversal to avoid repeated node work. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-004",
    "category": "code optimization tasks",
    "difficulty": "medium",
    "prompt": "Replace O(n^2) duplicate checks with hash-based approach. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that covers edge cases explicitly before main logic. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-005",
    "category": "code optimization tasks",
    "difficulty": "medium",
    "prompt": "Optimize render performance for heavy React lists. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but fails to return final value from helper function. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that handles async success and failure branches. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-006",
    "category": "code optimization tasks",
    "difficulty": "medium",
    "prompt": "Improve SQL query latency with proper indexing strategy. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-007",
    "category": "code optimization tasks",
    "difficulty": "easy",
    "prompt": "Optimize recursive tree walk using iterative stack. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses asymptotically efficient data structures. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but uses O(n^2) approach where O(n log n) is expected. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "opt-008",
    "category": "code optimization tasks",
    "difficulty": "easy",
    "prompt": "Reduce API payload and parsing overhead in dashboard fetches. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses shared mutable state causing race conditions. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that preserves function context and arguments correctly. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-009",
    "category": "code optimization tasks",
    "difficulty": "medium",
    "prompt": "Optimize batch processing pipeline with chunked writes. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that preserves function context and arguments correctly. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but has off-by-one boundary error. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "opt-010",
    "category": "code optimization tasks",
    "difficulty": "hard",
    "prompt": "Minimize unnecessary recomputation in memoized selectors. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses asymptotically efficient data structures. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-011",
    "category": "code optimization tasks",
    "difficulty": "hard",
    "prompt": "Optimize nested loops in frequency counting logic. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-012",
    "category": "code optimization tasks",
    "difficulty": "hard",
    "prompt": "Reduce memory footprint of large list transformations. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that returns stable outputs for invalid inputs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-013",
    "category": "code optimization tasks",
    "difficulty": "easy",
    "prompt": "Optimize graph traversal to avoid repeated node work. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that documents assumptions and complexity tradeoffs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but incorrectly handles async rejection paths. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "opt-014",
    "category": "code optimization tasks",
    "difficulty": "easy",
    "prompt": "Replace O(n^2) duplicate checks with hash-based approach. Include explanation of complexity and edge-case behavior.",
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
    "id": "opt-015",
    "category": "code optimization tasks",
    "difficulty": "easy",
    "prompt": "Optimize render performance for heavy React lists. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-016",
    "category": "code optimization tasks",
    "difficulty": "medium",
    "prompt": "Improve SQL query latency with proper indexing strategy. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that handles async success and failure branches. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-017",
    "category": "code optimization tasks",
    "difficulty": "medium",
    "prompt": "Optimize recursive tree walk using iterative stack. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but drops function context when callback is invoked. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-018",
    "category": "code optimization tasks",
    "difficulty": "easy",
    "prompt": "Reduce API payload and parsing overhead in dashboard fetches. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-019",
    "category": "code optimization tasks",
    "difficulty": "medium",
    "prompt": "Optimize batch processing pipeline with chunked writes. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "opt-020",
    "category": "code optimization tasks",
    "difficulty": "easy",
    "prompt": "Minimize unnecessary recomputation in memoized selectors. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses deterministic ordering for reproducibility. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but contains incorrect recursion base condition. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  }
];
