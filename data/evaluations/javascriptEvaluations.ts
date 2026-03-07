import type { EvaluationExample } from './types';

// Generated dataset. Extend by adding objects or rerunning generate-data.
export const javascriptEvaluations: EvaluationExample[] = [
  {
    "id": "js-001",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Fix a debounce function that drops trailing calls. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that documents assumptions and complexity tradeoffs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but uses shared mutable state causing race conditions. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "js-002",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Identify why Promise chains never resolve in a fetch wrapper. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that minimizes memory churn in hot paths. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but ignores null/undefined checks in nested access. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "js-003",
    "category": "javascript debugging",
    "difficulty": "hard",
    "prompt": "Debug a React event handler that triggers twice unexpectedly. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that adds guard clauses for empty and null values. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "js-004",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Fix an async retry utility that swallows thrown errors. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that documents assumptions and complexity tradeoffs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but uses O(n^2) approach where O(n log n) is expected. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "js-005",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Correct a closure bug in a loop-based event registration function. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but misses edge case handling for empty input. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it misses edge case handling for empty input.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "js-006",
    "category": "javascript debugging",
    "difficulty": "easy",
    "prompt": "Repair a memoization helper returning stale values after argument changes. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that preserves function context and arguments correctly. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but uses O(n^2) approach where O(n log n) is expected. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "js-007",
    "category": "javascript debugging",
    "difficulty": "easy",
    "prompt": "Fix a race condition between two concurrent state updates. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that adds guard clauses for empty and null values. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but uses shared mutable state causing race conditions. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "js-008",
    "category": "javascript debugging",
    "difficulty": "easy",
    "prompt": "Debug setTimeout cleanup logic in a component unmount flow. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses deterministic ordering for reproducibility. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but ignores null/undefined checks in nested access. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "js-009",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Resolve a missing return in array map transformation logic. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that returns stable outputs for invalid inputs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "js-010",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Correct null checking logic in nested optional object access. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that returns stable outputs for invalid inputs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but drops function context when callback is invoked. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "js-011",
    "category": "javascript debugging",
    "difficulty": "easy",
    "prompt": "Fix a debounce function that drops trailing calls. Include explanation of complexity and edge-case behavior.",
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
    "id": "js-012",
    "category": "javascript debugging",
    "difficulty": "easy",
    "prompt": "Identify why Promise chains never resolve in a fetch wrapper. Include explanation of complexity and edge-case behavior.",
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
    "id": "js-013",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Debug a React event handler that triggers twice unexpectedly. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "js-014",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Fix an async retry utility that swallows thrown errors. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that documents assumptions and complexity tradeoffs. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but contains incorrect recursion base condition. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "js-015",
    "category": "javascript debugging",
    "difficulty": "hard",
    "prompt": "Correct a closure bug in a loop-based event registration function. Include explanation of complexity and edge-case behavior.",
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
    "id": "js-016",
    "category": "javascript debugging",
    "difficulty": "easy",
    "prompt": "Repair a memoization helper returning stale values after argument changes. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but misses edge case handling for empty input. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that covers edge cases explicitly before main logic. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it misses edge case handling for empty input.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "js-017",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Fix a race condition between two concurrent state updates. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that adds guard clauses for empty and null values. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but fails to return final value from helper function. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "js-018",
    "category": "javascript debugging",
    "difficulty": "easy",
    "prompt": "Debug setTimeout cleanup logic in a component unmount flow. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but fails to return final value from helper function. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "js-019",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Resolve a missing return in array map transformation logic. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "js-020",
    "category": "javascript debugging",
    "difficulty": "medium",
    "prompt": "Correct null checking logic in nested optional object access. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that adds guard clauses for empty and null values. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but drops function context when callback is invoked. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  }
];
