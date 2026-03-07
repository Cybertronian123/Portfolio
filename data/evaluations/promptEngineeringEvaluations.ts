import type { EvaluationExample } from './types';

// Generated dataset. Extend by adding objects or rerunning generate-data.
export const promptEngineeringEvaluations: EvaluationExample[] = [
  {
    "id": "pev-001",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Improve prompt for robust code generation under strict constraints. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-002",
    "category": "prompt engineering experiments",
    "difficulty": "hard",
    "prompt": "Design a prompt for stepwise debugging explanation. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-003",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Refine prompt to reduce hallucinations in API specs. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but drops function context when callback is invoked. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses asymptotically efficient data structures. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "pev-004",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Create prompt chain for test-driven code synthesis. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but fails to return final value from helper function. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that preserves function context and arguments correctly. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "pev-005",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Tune prompt to force edge-case enumeration before coding. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses deterministic ordering for reproducibility. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but has off-by-one boundary error. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "pev-006",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Optimize prompt for concise but complete reasoning. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but assumes sorted input without validation. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it assumes sorted input without validation.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "pev-007",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Design few-shot examples for SQL correctness. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that includes clear base and termination conditions. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but uses O(n^2) approach where O(n log n) is expected. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "pev-008",
    "category": "prompt engineering experiments",
    "difficulty": "easy",
    "prompt": "Refine prompt to keep output in JSON schema. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-009",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Improve prompt for deterministic algorithmic outputs. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-010",
    "category": "prompt engineering experiments",
    "difficulty": "hard",
    "prompt": "Experiment with role framing for reviewer-style feedback. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-011",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Improve prompt for robust code generation under strict constraints. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that documents assumptions and complexity tradeoffs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it documents assumptions and complexity tradeoffs.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "pev-012",
    "category": "prompt engineering experiments",
    "difficulty": "hard",
    "prompt": "Design a prompt for stepwise debugging explanation. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-013",
    "category": "prompt engineering experiments",
    "difficulty": "easy",
    "prompt": "Refine prompt to reduce hallucinations in API specs. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-014",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Create prompt chain for test-driven code synthesis. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but fails to return final value from helper function. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that covers edge cases explicitly before main logic. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "pev-015",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Tune prompt to force edge-case enumeration before coding. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that handles async success and failure branches. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "pev-016",
    "category": "prompt engineering experiments",
    "difficulty": "medium",
    "prompt": "Optimize prompt for concise but complete reasoning. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-017",
    "category": "prompt engineering experiments",
    "difficulty": "hard",
    "prompt": "Design few-shot examples for SQL correctness. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses shared mutable state causing race conditions. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that returns stable outputs for invalid inputs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "pev-018",
    "category": "prompt engineering experiments",
    "difficulty": "easy",
    "prompt": "Refine prompt to keep output in JSON schema. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-019",
    "category": "prompt engineering experiments",
    "difficulty": "easy",
    "prompt": "Improve prompt for deterministic algorithmic outputs. Include explanation of complexity and edge-case behavior.",
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
    "id": "pev-020",
    "category": "prompt engineering experiments",
    "difficulty": "easy",
    "prompt": "Experiment with role framing for reviewer-style feedback. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  }
];
