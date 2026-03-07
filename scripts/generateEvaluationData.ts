// @ts-nocheck
const { mkdir, writeFile } = require('node:fs/promises');
const path = require('node:path');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data');
const EVAL_DIR = path.join(DATA_DIR, 'evaluations');

function mulberry32(seed) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rng = mulberry32(20260307);

function pick(arr) {
  return arr[Math.floor(rng() * arr.length)];
}

function difficulty() {
  const p = rng();
  if (p < 0.32) return 'easy';
  if (p < 0.75) return 'medium';
  return 'hard';
}

function toTsArrayExport(importLine, comment, name, typeName, data) {
  return `${importLine}\n\n// ${comment}\nexport const ${name}: ${typeName}[] = ${JSON.stringify(data, null, 2)};\n`;
}

const tasksByCategory = {
  'javascript debugging': [
    'Fix a debounce function that drops trailing calls.',
    'Identify why Promise chains never resolve in a fetch wrapper.',
    'Debug a React event handler that triggers twice unexpectedly.',
    'Fix an async retry utility that swallows thrown errors.',
    'Correct a closure bug in a loop-based event registration function.',
    'Repair a memoization helper returning stale values after argument changes.',
    'Fix a race condition between two concurrent state updates.',
    'Debug setTimeout cleanup logic in a component unmount flow.',
    'Resolve a missing return in array map transformation logic.',
    'Correct null checking logic in nested optional object access.'
  ],
  'python algorithms': [
    'Implement binary search for sorted arrays with duplicate values.',
    'Write a function to merge overlapping intervals.',
    'Implement top-k frequent elements using heaps.',
    'Find the longest substring without repeating characters.',
    'Return the kth largest value from a stream of numbers.',
    'Implement BFS shortest path in an unweighted graph.',
    'Write a function for detecting cycles in linked lists.',
    'Solve coin change with dynamic programming.',
    'Implement interval scheduling for max non-overlapping meetings.',
    'Count inversions in an array efficiently.'
  ],
  'data structure problems': [
    'Implement an LRU cache using hashmap plus doubly linked list.',
    'Design a stack that supports getMin in O(1).',
    'Implement a queue using two stacks.',
    'Serialize and deserialize a binary tree.',
    'Detect and remove a cycle in a singly linked list.',
    'Implement union-find with path compression.',
    'Build a trie for autocomplete search prefixes.',
    'Construct a segment tree for range sum queries.',
    'Design a hash map with collision handling.',
    'Implement an iterator for in-order BST traversal.'
  ],
  'web development problems': [
    'Build a responsive navbar with keyboard accessibility.',
    'Implement form validation with async email uniqueness check.',
    'Optimize hydration cost of a dashboard component tree.',
    'Fix CORS issues between frontend and API gateway.',
    'Implement image lazy loading for long content pages.',
    'Prevent layout shift in dynamic content cards.',
    'Debounce search input with cancellation of in-flight requests.',
    'Fix stale cache behavior in service worker update flow.',
    'Implement route guards for authenticated pages in Next.js.',
    'Add robust error boundaries around async widgets.'
  ],
  'api design questions': [
    'Design a paginated REST endpoint for audit logs.',
    'Version a public API without breaking existing clients.',
    'Define idempotency behavior for payment creation endpoint.',
    'Design batch update endpoints with partial success reporting.',
    'Create webhook retry contracts and signature verification flow.',
    'Design consistent error response envelope for all endpoints.',
    'Define rate limit semantics and client backoff guidance.',
    'Design filtering and sorting query parameters for large datasets.',
    'Add optimistic concurrency for update endpoints.',
    'Design a health and readiness contract for service monitoring.'
  ],
  'sql query problems': [
    'Find top 3 salaries per department.',
    'Return customers with no orders in the last 90 days.',
    'Compute rolling 7-day average of active users.',
    'Detect duplicate records by normalized email.',
    'Build a query for cohort retention by signup month.',
    'Return nth highest salary without window-function misuse.',
    'Join orders and refunds while preventing row multiplication.',
    'Filter products by hierarchical category tree.',
    'Compute percentile response time per API route.',
    'Write anti-join logic for missing foreign key matches.'
  ],
  'system design prompts': [
    'Design a URL shortener for high read traffic.',
    'Design a distributed job queue with retries.',
    'Design a metrics ingestion pipeline with time-series storage.',
    'Design a chat system with message ordering guarantees.',
    'Design feature flag delivery with low-latency reads.',
    'Design a recommendation service with online ranking.',
    'Design a file upload system with resumable chunks.',
    'Design global rate limiting for multi-region APIs.',
    'Design a notification system with email and push channels.',
    'Design search indexing pipeline with incremental updates.'
  ],
  'edge case reasoning tasks': [
    'Explain behavior when input array is empty for reduce-based functions.',
    'Handle null, undefined, and NaN consistently in validation logic.',
    'Analyze integer overflow risks for cumulative counters.',
    'Reason about timezone transitions in date calculations.',
    'Handle duplicate keys in object merge utilities.',
    'Define behavior for zero-length debounce delays.',
    'Reason about recursion depth for deeply nested inputs.',
    'Handle Unicode surrogate pairs in string slicing logic.',
    'Define fallback behavior when API responds with partial data.',
    'Reason about ordering guarantees under concurrent writes.'
  ],
  'prompt engineering experiments': [
    'Improve prompt for robust code generation under strict constraints.',
    'Design a prompt for stepwise debugging explanation.',
    'Refine prompt to reduce hallucinations in API specs.',
    'Create prompt chain for test-driven code synthesis.',
    'Tune prompt to force edge-case enumeration before coding.',
    'Optimize prompt for concise but complete reasoning.',
    'Design few-shot examples for SQL correctness.',
    'Refine prompt to keep output in JSON schema.',
    'Improve prompt for deterministic algorithmic outputs.',
    'Experiment with role framing for reviewer-style feedback.'
  ],
  'code optimization tasks': [
    'Optimize nested loops in frequency counting logic.',
    'Reduce memory footprint of large list transformations.',
    'Optimize graph traversal to avoid repeated node work.',
    'Replace O(n^2) duplicate checks with hash-based approach.',
    'Optimize render performance for heavy React lists.',
    'Improve SQL query latency with proper indexing strategy.',
    'Optimize recursive tree walk using iterative stack.',
    'Reduce API payload and parsing overhead in dashboard fetches.',
    'Optimize batch processing pipeline with chunked writes.',
    'Minimize unnecessary recomputation in memoized selectors.'
  ]
};

const mistakePatterns = [
  'misses edge case handling for empty input',
  'uses O(n^2) approach where O(n log n) is expected',
  'contains incorrect recursion base condition',
  'fails to return final value from helper function',
  'uses shared mutable state causing race conditions',
  'incorrectly handles async rejection paths',
  'drops function context when callback is invoked',
  'assumes sorted input without validation',
  'ignores null/undefined checks in nested access',
  'has off-by-one boundary error'
];

const strongPatterns = [
  'covers edge cases explicitly before main logic',
  'uses asymptotically efficient data structures',
  'includes clear base and termination conditions',
  'returns stable outputs for invalid inputs',
  'preserves function context and arguments correctly',
  'handles async success and failure branches',
  'documents assumptions and complexity tradeoffs',
  'adds guard clauses for empty and null values',
  'minimizes memory churn in hot paths',
  'uses deterministic ordering for reproducibility'
];

function createEvaluation(id, category, prompt) {
  const diff = difficulty();
  const winner = rng() > 0.24 ? 'B' : 'A';
  const weak = pick(mistakePatterns);
  const strong = pick(strongPatterns);

  const responseA =
    winner === 'A'
      ? `Provides a structured solution that ${strong}. Includes implementation notes and validation strategy.`
      : `Attempts a quick solution but ${weak}. Uses simplified logic and skips at least one critical test.`;

  const responseB =
    winner === 'B'
      ? `Presents a robust approach that ${strong}. Includes boundary handling, complexity notes, and safer defaults.`
      : `Gives partial reasoning but ${weak}. The output appears plausible but breaks under stress conditions.`;

  const evaluation =
    winner === 'B'
      ? 'Response B is superior based on correctness, consistency, and stronger edge-case handling.'
      : 'Response A is superior due to better correctness guarantees and more reliable reasoning steps.';

  return {
    id,
    category,
    difficulty: diff,
    prompt,
    responseA,
    responseB,
    evaluation,
    reasoning: [
      `Winning response demonstrates that it ${strong}.`,
      `Losing response was penalized because it ${weak}.`,
      'Evaluation prioritizes correctness first, then reasoning quality, then robustness under edge cases.'
    ],
    winner
  };
}

function generateCategory(prefix, category, count) {
  const tasks = tasksByCategory[category];
  const list = [];

  for (let i = 1; i <= count; i += 1) {
    const task = tasks[(i - 1) % tasks.length];
    const prompt = `${task} Include explanation of complexity and edge-case behavior.`;
    const id = `${prefix}-${String(i).padStart(3, '0')}`;
    list.push(createEvaluation(id, category, prompt));
  }

  return list;
}

function generatePromptExperiments(count) {
  const experimentTasks = [
    'Generate a debounce utility for API search input.',
    'Design SQL query for top customers by revenue.',
    'Debug recursion for flattening nested arrays.',
    'Optimize React table rendering with 10k rows.',
    'Design API contract for paginated event logs.',
    'Handle retry logic with exponential backoff.',
    'Validate user input against schema constraints.',
    'Design caching strategy for dashboard metrics.',
    'Write robust date-range overlap checker.',
    'Create queue worker with dead-letter handling.'
  ];

  const list = [];

  for (let i = 1; i <= count; i += 1) {
    const task = experimentTasks[(i - 1) % experimentTasks.length];
    const id = `pexp-${String(i).padStart(3, '0')}`;
    list.push({
      id,
      task,
      promptV1: `Solve: ${task}`,
      promptV2: `Solve: ${task} Include edge cases and explain complexity tradeoffs.`,
      promptV3:
        'Solve: ' +
        `${task} Return a production-ready answer with explicit assumptions, edge-case matrix, and final checklist.`,
      improvementExplanation:
        'Each iteration increases constraint clarity, improves edge-case coverage, and reduces ambiguous outputs.'
    });
  }

  return list;
}

function generateModelBenchmarks(count) {
  const tasks = [
    'sorting mixed arrays',
    'flattening nested arrays',
    'debounce implementation',
    'SQL retention query',
    'React performance optimization',
    'API error contract design',
    'graph shortest path reasoning',
    'pagination consistency rules',
    'system design for notification fanout',
    'edge-case handling in date logic'
  ];
  const models = ['GPT-4.1', 'Claude 3.7 Sonnet', 'Gemini 1.5 Pro'];
  const list = [];

  for (let i = 1; i <= count; i += 1) {
    const task = tasks[(i - 1) % tasks.length];
    const modelA = models[Math.floor(rng() * models.length)];
    let modelB = models[Math.floor(rng() * models.length)];
    if (modelA === modelB) {
      modelB = models[(models.indexOf(modelA) + 1) % models.length];
    }
    const primaryWinner = rng() > 0.5 ? modelA : modelB;
    const winner = rng() < 0.18 ? [modelA, modelB] : [primaryWinner];

    list.push({
      id: `bench-${String(i).padStart(3, '0')}`,
      task,
      modelA,
      modelB,
      winner,
      explanation:
        winner.length > 1
          ? 'Both models performed similarly across correctness and edge-case behavior, resulting in a tie.'
          : winner[0] === modelA
          ? `${modelA} produced more consistent correctness with fewer reasoning gaps for this task.`
          : `${modelB} handled edge cases better and provided a clearer execution strategy.`
    });
  }

  return list;
}

function generateBugHunts(count) {
  const bugTemplates = [
    {
      language: 'javascript',
      code: `function sum(arr) {\n  return arr.reduce((a, b) => a + b)\n}`,
      bug: 'Missing initial accumulator causes failure for empty arrays.',
      fix: `function sum(arr) {\n  return arr.reduce((a, b) => a + b, 0)\n}`
    },
    {
      language: 'javascript',
      code: `async function fetchData(url) {\n  const res = fetch(url)\n  return res.json()\n}`,
      bug: 'Missing await before fetch causes json call on unresolved Promise.',
      fix: `async function fetchData(url) {\n  const res = await fetch(url)\n  return res.json()\n}`
    },
    {
      language: 'python',
      code: `def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)`,
      bug: 'Base case misses n == 0, causing recursion error for zero.',
      fix: `def factorial(n):\n    if n in (0, 1):\n        return 1\n    return n * factorial(n - 1)`
    },
    {
      language: 'typescript',
      code: `function first<T>(arr: T[]): T {\n  return arr[0]\n}`,
      bug: 'Return type is unsafe for empty arrays; should include undefined.',
      fix: `function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}`
    },
    {
      language: 'sql',
      code: `SELECT department, salary\nFROM employees\nWHERE salary = (SELECT MAX(salary) FROM employees);`,
      bug: 'Max salary is global, not partitioned per department.',
      fix: `SELECT department, salary\nFROM (\n  SELECT department, salary,\n         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n) t\nWHERE rnk = 1;`
    }
  ];

  const list = [];

  for (let i = 1; i <= count; i += 1) {
    const t = bugTemplates[(i - 1) % bugTemplates.length];
    list.push({
      id: `bug-${String(i).padStart(3, '0')}`,
      language: t.language,
      code: t.code,
      bugExplanation: t.bug,
      fix: t.fix
    });
  }

  return list;
}

async function writeFileSafe(filePath, content) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, 'utf8');
}

async function main() {
  const javascriptEvaluations = generateCategory('js', 'javascript debugging', 20);
  const pythonEvaluations = generateCategory('py', 'python algorithms', 20);
  const sqlEvaluations = generateCategory('sql', 'sql query problems', 20);
  const webDevEvaluations = generateCategory('web', 'web development problems', 20);
  const promptEngineeringEvaluations = generateCategory('pev', 'prompt engineering experiments', 20);
  const algorithmsEvaluations = [
    ...generateCategory('ds', 'data structure problems', 20),
    ...generateCategory('edge', 'edge case reasoning tasks', 20),
    ...generateCategory('opt', 'code optimization tasks', 20)
  ];
  const systemDesignEvaluations = [
    ...generateCategory('sd', 'system design prompts', 20),
    ...generateCategory('api', 'api design questions', 20)
  ];

  const promptExperiments = generatePromptExperiments(50);
  const modelBenchmarks = generateModelBenchmarks(50);
  const bugHunts = generateBugHunts(40);

  await writeFileSafe(
    path.join(EVAL_DIR, 'types.ts'),
    `export interface EvaluationExample {\n  id: string;\n  category: string;\n  difficulty: 'easy' | 'medium' | 'hard';\n  prompt: string;\n  responseA: string;\n  responseB: string;\n  evaluation: string;\n  reasoning: string[];\n  winner: 'A' | 'B';\n}\n`
  );

  await writeFileSafe(
    path.join(EVAL_DIR, 'javascriptEvaluations.ts'),
    toTsArrayExport(
      `import type { EvaluationExample } from './types';`,
      'Generated dataset. Extend by adding objects or rerunning generate-data.',
      'javascriptEvaluations',
      'EvaluationExample',
      javascriptEvaluations
    )
  );

  await writeFileSafe(
    path.join(EVAL_DIR, 'pythonEvaluations.ts'),
    toTsArrayExport(
      `import type { EvaluationExample } from './types';`,
      'Generated dataset. Extend by adding objects or rerunning generate-data.',
      'pythonEvaluations',
      'EvaluationExample',
      pythonEvaluations
    )
  );

  await writeFileSafe(
    path.join(EVAL_DIR, 'sqlEvaluations.ts'),
    toTsArrayExport(
      `import type { EvaluationExample } from './types';`,
      'Generated dataset. Extend by adding objects or rerunning generate-data.',
      'sqlEvaluations',
      'EvaluationExample',
      sqlEvaluations
    )
  );

  await writeFileSafe(
    path.join(EVAL_DIR, 'systemDesignEvaluations.ts'),
    toTsArrayExport(
      `import type { EvaluationExample } from './types';`,
      'Generated dataset (system design + API design).',
      'systemDesignEvaluations',
      'EvaluationExample',
      systemDesignEvaluations
    )
  );

  await writeFileSafe(
    path.join(EVAL_DIR, 'webDevEvaluations.ts'),
    toTsArrayExport(
      `import type { EvaluationExample } from './types';`,
      'Generated dataset. Extend by adding objects or rerunning generate-data.',
      'webDevEvaluations',
      'EvaluationExample',
      webDevEvaluations
    )
  );

  await writeFileSafe(
    path.join(EVAL_DIR, 'algorithmsEvaluations.ts'),
    toTsArrayExport(
      `import type { EvaluationExample } from './types';`,
      'Generated dataset (data structures + edge cases + optimization).',
      'algorithmsEvaluations',
      'EvaluationExample',
      algorithmsEvaluations
    )
  );

  await writeFileSafe(
    path.join(EVAL_DIR, 'promptEngineeringEvaluations.ts'),
    toTsArrayExport(
      `import type { EvaluationExample } from './types';`,
      'Generated dataset. Extend by adding objects or rerunning generate-data.',
      'promptEngineeringEvaluations',
      'EvaluationExample',
      promptEngineeringEvaluations
    )
  );

  await writeFileSafe(
    path.join(EVAL_DIR, 'index.ts'),
    `import { algorithmsEvaluations } from './algorithmsEvaluations';\nimport { javascriptEvaluations } from './javascriptEvaluations';\nimport { promptEngineeringEvaluations } from './promptEngineeringEvaluations';\nimport { pythonEvaluations } from './pythonEvaluations';\nimport { sqlEvaluations } from './sqlEvaluations';\nimport { systemDesignEvaluations } from './systemDesignEvaluations';\nimport { webDevEvaluations } from './webDevEvaluations';\n\nexport type { EvaluationExample } from './types';\n\nexport const allEvaluations = [\n  ...javascriptEvaluations,\n  ...pythonEvaluations,\n  ...algorithmsEvaluations,\n  ...webDevEvaluations,\n  ...systemDesignEvaluations,\n  ...sqlEvaluations,\n  ...promptEngineeringEvaluations\n];\n\nexport {\n  javascriptEvaluations,\n  pythonEvaluations,\n  algorithmsEvaluations,\n  webDevEvaluations,\n  systemDesignEvaluations,\n  sqlEvaluations,\n  promptEngineeringEvaluations\n};\n`
  );

  await writeFileSafe(
    path.join(DATA_DIR, 'promptExperiments.ts'),
    `export interface PromptExperiment {\n  id: string;\n  task: string;\n  promptV1: string;\n  promptV2: string;\n  promptV3: string;\n  improvementExplanation: string;\n}\n\n// Generated dataset. Add more entries or rerun generate-data.\nexport const promptExperiments: PromptExperiment[] = ${JSON.stringify(promptExperiments, null, 2)};\n`
  );

  await writeFileSafe(
    path.join(DATA_DIR, 'modelBenchmarks.ts'),
    `export interface ModelBenchmark {\n  id: string;\n  task: string;\n  modelA: string;\n  modelB: string;\n  winner: string[];\n  explanation: string;\n}\n\n// Generated dataset. Add more entries or rerun generate-data.\nexport const modelBenchmarks: ModelBenchmark[] = ${JSON.stringify(modelBenchmarks, null, 2)};\n`
  );

  await writeFileSafe(
    path.join(DATA_DIR, 'bugHunts.ts'),
    `export interface BugHuntExample {\n  id: string;\n  language: string;\n  code: string;\n  bugExplanation: string;\n  fix: string;\n}\n\n// Generated dataset. Add more entries or rerun generate-data.\nexport const bugHunts: BugHuntExample[] = ${JSON.stringify(bugHunts, null, 2)};\n`
  );

  console.log('Generated datasets:');
  console.log('- Evaluations: 200');
  console.log('- Prompt experiments: 50');
  console.log('- Model benchmarks: 50');
  console.log('- Bug hunts: 40');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
