export interface ModelBenchmark {
  id: string;
  task: string;
  modelA: string;
  modelB: string;
  winner: string[];
  explanation: string;
}

// Generated dataset. Add more entries or rerun generate-data.
export const modelBenchmarks: ModelBenchmark[] = [
  {
    "id": "bench-001",
    "task": "sorting mixed arrays",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-002",
    "task": "flattening nested arrays",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-003",
    "task": "debounce implementation",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Claude 3.7 Sonnet handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-004",
    "task": "SQL retention query",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-005",
    "task": "React performance optimization",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "GPT-4.1",
    "winner": [
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Claude 3.7 Sonnet produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-006",
    "task": "API error contract design",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-007",
    "task": "graph shortest path reasoning",
    "modelA": "GPT-4.1",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "GPT-4.1",
      "Gemini 1.5 Pro"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-008",
    "task": "pagination consistency rules",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "Gemini 1.5 Pro",
      "GPT-4.1"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-009",
    "task": "system design for notification fanout",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Claude 3.7 Sonnet produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-010",
    "task": "edge-case handling in date logic",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "Gemini 1.5 Pro",
      "GPT-4.1"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-011",
    "task": "sorting mixed arrays",
    "modelA": "GPT-4.1",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-012",
    "task": "flattening nested arrays",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "Gemini 1.5 Pro",
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-013",
    "task": "debounce implementation",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-014",
    "task": "SQL retention query",
    "modelA": "GPT-4.1",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-015",
    "task": "React performance optimization",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "GPT-4.1",
    "winner": [
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Claude 3.7 Sonnet produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-016",
    "task": "API error contract design",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "GPT-4.1",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-017",
    "task": "graph shortest path reasoning",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-018",
    "task": "pagination consistency rules",
    "modelA": "GPT-4.1",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-019",
    "task": "system design for notification fanout",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Claude 3.7 Sonnet",
      "Gemini 1.5 Pro"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-020",
    "task": "edge-case handling in date logic",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "GPT-4.1",
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-021",
    "task": "sorting mixed arrays",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-022",
    "task": "flattening nested arrays",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-023",
    "task": "debounce implementation",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-024",
    "task": "SQL retention query",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-025",
    "task": "React performance optimization",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Claude 3.7 Sonnet produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-026",
    "task": "API error contract design",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-027",
    "task": "graph shortest path reasoning",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-028",
    "task": "pagination consistency rules",
    "modelA": "GPT-4.1",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "GPT-4.1",
      "Gemini 1.5 Pro"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-029",
    "task": "system design for notification fanout",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "GPT-4.1",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-030",
    "task": "edge-case handling in date logic",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-031",
    "task": "sorting mixed arrays",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Claude 3.7 Sonnet",
      "Gemini 1.5 Pro"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-032",
    "task": "flattening nested arrays",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "Gemini 1.5 Pro",
      "GPT-4.1"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-033",
    "task": "debounce implementation",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-034",
    "task": "SQL retention query",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "GPT-4.1",
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-035",
    "task": "React performance optimization",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-036",
    "task": "API error contract design",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "GPT-4.1",
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-037",
    "task": "graph shortest path reasoning",
    "modelA": "GPT-4.1",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-038",
    "task": "pagination consistency rules",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "Gemini 1.5 Pro",
      "GPT-4.1"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-039",
    "task": "system design for notification fanout",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-040",
    "task": "edge-case handling in date logic",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "GPT-4.1",
      "Claude 3.7 Sonnet"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-041",
    "task": "sorting mixed arrays",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-042",
    "task": "flattening nested arrays",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-043",
    "task": "debounce implementation",
    "modelA": "GPT-4.1",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-044",
    "task": "SQL retention query",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "Gemini 1.5 Pro",
      "GPT-4.1"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-045",
    "task": "React performance optimization",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-046",
    "task": "API error contract design",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-047",
    "task": "graph shortest path reasoning",
    "modelA": "GPT-4.1",
    "modelB": "Claude 3.7 Sonnet",
    "winner": [
      "GPT-4.1"
    ],
    "explanation": "GPT-4.1 produced more consistent correctness with fewer reasoning gaps for this task."
  },
  {
    "id": "bench-048",
    "task": "pagination consistency rules",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Claude 3.7 Sonnet",
      "Gemini 1.5 Pro"
    ],
    "explanation": "Both models performed similarly across correctness and edge-case behavior, resulting in a tie."
  },
  {
    "id": "bench-049",
    "task": "system design for notification fanout",
    "modelA": "Claude 3.7 Sonnet",
    "modelB": "Gemini 1.5 Pro",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro handled edge cases better and provided a clearer execution strategy."
  },
  {
    "id": "bench-050",
    "task": "edge-case handling in date logic",
    "modelA": "Gemini 1.5 Pro",
    "modelB": "GPT-4.1",
    "winner": [
      "Gemini 1.5 Pro"
    ],
    "explanation": "Gemini 1.5 Pro produced more consistent correctness with fewer reasoning gaps for this task."
  }
];
