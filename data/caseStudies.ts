export type CaseStudy = {
  id: string;
  problem: string;
  promptStrategy: string;
  iterations: string[];
  results: string;
};

// Add prompt iteration case studies here.
export const caseStudies: CaseStudy[] = [
  {
    id: 'reasoning-accuracy',
    problem: 'Improve reasoning accuracy for algorithm questions.',
    promptStrategy:
      'Use chain-of-thought style structure with strict output formatting so the model separates reasoning from final answer.',
    iterations: [
      'v1: direct question',
      'v2: ask for step-by-step reasoning',
      'v3: structured reasoning + output format'
    ],
    results:
      'Accuracy improved across test cases, with fewer skipped constraints and clearer intermediate logic checks.'
  },
  {
    id: 'edge-case-coverage',
    problem: 'Increase edge-case coverage in generated utility functions.',
    promptStrategy:
      'Append an explicit edge-case checklist (empty input, invalid types, boundary conditions) before asking for final code.',
    iterations: [
      'v1: request implementation only',
      'v2: request implementation + tests',
      'v3: request implementation + edge-case matrix + tests'
    ],
    results:
      'Later iterations reduced silent logical failures by forcing the model to validate behavior before returning code.'
  }
];
