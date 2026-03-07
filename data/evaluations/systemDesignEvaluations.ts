import type { EvaluationExample } from './types';

// Generated dataset (system design + API design).
export const systemDesignEvaluations: EvaluationExample[] = [
  {
    "id": "sd-001",
    "category": "system design prompts",
    "difficulty": "medium",
    "prompt": "Design a URL shortener for high read traffic. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that adds guard clauses for empty and null values. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "sd-002",
    "category": "system design prompts",
    "difficulty": "hard",
    "prompt": "Design a distributed job queue with retries. Include explanation of complexity and edge-case behavior.",
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
    "id": "sd-003",
    "category": "system design prompts",
    "difficulty": "hard",
    "prompt": "Design a metrics ingestion pipeline with time-series storage. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that handles async success and failure branches. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but drops function context when callback is invoked. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "sd-004",
    "category": "system design prompts",
    "difficulty": "hard",
    "prompt": "Design a chat system with message ordering guarantees. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses O(n^2) approach where O(n log n) is expected. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that adds guard clauses for empty and null values. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it uses O(n^2) approach where O(n log n) is expected.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "sd-005",
    "category": "system design prompts",
    "difficulty": "hard",
    "prompt": "Design feature flag delivery with low-latency reads. Include explanation of complexity and edge-case behavior.",
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
    "id": "sd-006",
    "category": "system design prompts",
    "difficulty": "easy",
    "prompt": "Design a recommendation service with online ranking. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses deterministic ordering for reproducibility. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "sd-007",
    "category": "system design prompts",
    "difficulty": "medium",
    "prompt": "Design a file upload system with resumable chunks. Include explanation of complexity and edge-case behavior.",
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
    "id": "sd-008",
    "category": "system design prompts",
    "difficulty": "hard",
    "prompt": "Design global rate limiting for multi-region APIs. Include explanation of complexity and edge-case behavior.",
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
    "id": "sd-009",
    "category": "system design prompts",
    "difficulty": "easy",
    "prompt": "Design a notification system with email and push channels. Include explanation of complexity and edge-case behavior.",
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
    "id": "sd-010",
    "category": "system design prompts",
    "difficulty": "easy",
    "prompt": "Design search indexing pipeline with incremental updates. Include explanation of complexity and edge-case behavior.",
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
    "id": "sd-011",
    "category": "system design prompts",
    "difficulty": "medium",
    "prompt": "Design a URL shortener for high read traffic. Include explanation of complexity and edge-case behavior.",
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
    "id": "sd-012",
    "category": "system design prompts",
    "difficulty": "medium",
    "prompt": "Design a distributed job queue with retries. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but assumes sorted input without validation. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that returns stable outputs for invalid inputs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it assumes sorted input without validation.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "sd-013",
    "category": "system design prompts",
    "difficulty": "easy",
    "prompt": "Design a metrics ingestion pipeline with time-series storage. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that handles async success and failure branches. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but drops function context when callback is invoked. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it handles async success and failure branches.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "sd-014",
    "category": "system design prompts",
    "difficulty": "easy",
    "prompt": "Design a chat system with message ordering guarantees. Include explanation of complexity and edge-case behavior.",
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
    "id": "sd-015",
    "category": "system design prompts",
    "difficulty": "easy",
    "prompt": "Design feature flag delivery with low-latency reads. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but uses shared mutable state causing race conditions. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it uses shared mutable state causing race conditions.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "sd-016",
    "category": "system design prompts",
    "difficulty": "medium",
    "prompt": "Design a recommendation service with online ranking. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but drops function context when callback is invoked. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "sd-017",
    "category": "system design prompts",
    "difficulty": "easy",
    "prompt": "Design a file upload system with resumable chunks. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but assumes sorted input without validation. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that preserves function context and arguments correctly. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it preserves function context and arguments correctly.",
      "Losing response was penalized because it assumes sorted input without validation.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "sd-018",
    "category": "system design prompts",
    "difficulty": "medium",
    "prompt": "Design global rate limiting for multi-region APIs. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that minimizes memory churn in hot paths. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but drops function context when callback is invoked. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "sd-019",
    "category": "system design prompts",
    "difficulty": "easy",
    "prompt": "Design a notification system with email and push channels. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but drops function context when callback is invoked. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it drops function context when callback is invoked.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "sd-020",
    "category": "system design prompts",
    "difficulty": "medium",
    "prompt": "Design search indexing pipeline with incremental updates. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-001",
    "category": "api design questions",
    "difficulty": "easy",
    "prompt": "Design a paginated REST endpoint for audit logs. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-002",
    "category": "api design questions",
    "difficulty": "hard",
    "prompt": "Version a public API without breaking existing clients. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-003",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Define idempotency behavior for payment creation endpoint. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-004",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Design batch update endpoints with partial success reporting. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-005",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Create webhook retry contracts and signature verification flow. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that covers edge cases explicitly before main logic. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it covers edge cases explicitly before main logic.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "api-006",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Design consistent error response envelope for all endpoints. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but contains incorrect recursion base condition. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that includes clear base and termination conditions. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it includes clear base and termination conditions.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "api-007",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Define rate limit semantics and client backoff guidance. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-008",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Design filtering and sorting query parameters for large datasets. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-009",
    "category": "api design questions",
    "difficulty": "easy",
    "prompt": "Add optimistic concurrency for update endpoints. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-010",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Design a health and readiness contract for service monitoring. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-011",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Design a paginated REST endpoint for audit logs. Include explanation of complexity and edge-case behavior.",
    "responseA": "Provides a structured solution that uses deterministic ordering for reproducibility. Includes implementation notes and validation strategy.",
    "responseB": "Gives partial reasoning but contains incorrect recursion base condition. The output appears plausible but breaks under stress conditions.",
    "evaluation": "Response A is superior due to better correctness guarantees and more reliable reasoning steps.",
    "reasoning": [
      "Winning response demonstrates that it uses deterministic ordering for reproducibility.",
      "Losing response was penalized because it contains incorrect recursion base condition.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "A"
  },
  {
    "id": "api-012",
    "category": "api design questions",
    "difficulty": "hard",
    "prompt": "Version a public API without breaking existing clients. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but ignores null/undefined checks in nested access. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that returns stable outputs for invalid inputs. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it returns stable outputs for invalid inputs.",
      "Losing response was penalized because it ignores null/undefined checks in nested access.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "api-013",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Define idempotency behavior for payment creation endpoint. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but misses edge case handling for empty input. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that adds guard clauses for empty and null values. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it adds guard clauses for empty and null values.",
      "Losing response was penalized because it misses edge case handling for empty input.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "api-014",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Design batch update endpoints with partial success reporting. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but incorrectly handles async rejection paths. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that uses asymptotically efficient data structures. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it uses asymptotically efficient data structures.",
      "Losing response was penalized because it incorrectly handles async rejection paths.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  },
  {
    "id": "api-015",
    "category": "api design questions",
    "difficulty": "medium",
    "prompt": "Create webhook retry contracts and signature verification flow. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-016",
    "category": "api design questions",
    "difficulty": "hard",
    "prompt": "Design consistent error response envelope for all endpoints. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-017",
    "category": "api design questions",
    "difficulty": "hard",
    "prompt": "Define rate limit semantics and client backoff guidance. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-018",
    "category": "api design questions",
    "difficulty": "easy",
    "prompt": "Design filtering and sorting query parameters for large datasets. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-019",
    "category": "api design questions",
    "difficulty": "hard",
    "prompt": "Add optimistic concurrency for update endpoints. Include explanation of complexity and edge-case behavior.",
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
    "id": "api-020",
    "category": "api design questions",
    "difficulty": "easy",
    "prompt": "Design a health and readiness contract for service monitoring. Include explanation of complexity and edge-case behavior.",
    "responseA": "Attempts a quick solution but has off-by-one boundary error. Uses simplified logic and skips at least one critical test.",
    "responseB": "Presents a robust approach that minimizes memory churn in hot paths. Includes boundary handling, complexity notes, and safer defaults.",
    "evaluation": "Response B is superior based on correctness, consistency, and stronger edge-case handling.",
    "reasoning": [
      "Winning response demonstrates that it minimizes memory churn in hot paths.",
      "Losing response was penalized because it has off-by-one boundary error.",
      "Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases."
    ],
    "winner": "B"
  }
];
