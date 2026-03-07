import type { EvaluationExample } from './types';

// Generated dataset. Extend by adding objects or rerunning generate-data.
export const webDevEvaluations: EvaluationExample[] = [
  {
    "id": "web-001",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Build a responsive navbar with keyboard accessibility. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-002",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Implement form validation with async email uniqueness check. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses asymptotically efficient data structures. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but fails to return final value from helper function. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it fails to return final value from helper function.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "web-003",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Optimize hydration cost of a dashboard component tree. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-004",
    "category": "web development problems",
    "difficulty": "hard",
    "prompt": "Fix CORS issues between frontend and API gateway. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but misses edge case handling for empty input. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it misses edge case handling for empty input.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "web-005",
    "category": "web development problems",
    "difficulty": "hard",
    "prompt": "Implement image lazy loading for long content pages. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-006",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Prevent layout shift in dynamic content cards. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-007",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Debounce search input with cancellation of in-flight requests. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "web-008",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Fix stale cache behavior in service worker update flow. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that covers edge cases explicitly before main logic. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but contains incorrect recursion base condition. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "web-009",
    "category": "web development problems",
    "difficulty": "easy",
    "prompt": "Implement route guards for authenticated pages in Next.js. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-010",
    "category": "web development problems",
    "difficulty": "easy",
    "prompt": "Add robust error boundaries around async widgets. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses asymptotically efficient data structures. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but has off-by-one boundary error. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "web-011",
    "category": "web development problems",
    "difficulty": "hard",
    "prompt": "Build a responsive navbar with keyboard accessibility. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-012",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Implement form validation with async email uniqueness check. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-013",
    "category": "web development problems",
    "difficulty": "hard",
    "prompt": "Optimize hydration cost of a dashboard component tree. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-014",
    "category": "web development problems",
    "difficulty": "easy",
    "prompt": "Fix CORS issues between frontend and API gateway. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses shared mutable state causing race conditions. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses asymptotically efficient data structures. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "web-015",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Implement image lazy loading for long content pages. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "web-016",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Prevent layout shift in dynamic content cards. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-017",
    "category": "web development problems",
    "difficulty": "easy",
    "prompt": "Debounce search input with cancellation of in-flight requests. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses deterministic ordering for reproducibility. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but misses edge case handling for empty input. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it misses edge case handling for empty input.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "web-018",
    "category": "web development problems",
    "difficulty": "medium",
    "prompt": "Fix stale cache behavior in service worker update flow. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses shared mutable state causing race conditions. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that adds guard clauses for empty and null values. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "web-019",
    "category": "web development problems",
    "difficulty": "hard",
    "prompt": "Implement route guards for authenticated pages in Next.js. Include explanation of complexity and edge-case behavior.",
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
    "id": "web-020",
    "category": "web development problems",
    "difficulty": "easy",
    "prompt": "Add robust error boundaries around async widgets. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that preserves function context and arguments correctly. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  }
];
