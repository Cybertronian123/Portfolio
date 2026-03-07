# AI Model Evaluation Portfolio

Developer portfolio focused on AI trainer workflows with large, structured evaluation datasets.

## Stack

- Next.js (App Router)
- React + TypeScript
- TailwindCSS
- Framer Motion

## Large Dataset Support

This project includes generated datasets for realistic AI evaluation work:

- **200** evaluation examples (`EvaluationExample`)
- **50** prompt experiments (`PromptExperiment`)
- **50** model benchmarks (`ModelBenchmark`)
- **40** bug hunt challenges (`BugHuntExample`)

## Data Files

### Evaluation datasets (200 total)

- `data/evaluations/types.ts`
- `data/evaluations/javascriptEvaluations.ts`
- `data/evaluations/pythonEvaluations.ts`
- `data/evaluations/sqlEvaluations.ts`
- `data/evaluations/systemDesignEvaluations.ts`
- `data/evaluations/webDevEvaluations.ts`
- `data/evaluations/algorithmsEvaluations.ts`
- `data/evaluations/promptEngineeringEvaluations.ts`
- `data/evaluations/index.ts` (aggregates all evaluation arrays)

### Additional AI trainer datasets

- `data/promptExperiments.ts`
- `data/modelBenchmarks.ts`
- `data/bugHunts.ts`

## Generate / Regenerate Data

Use the deterministic generator script:

- `scripts/generateEvaluationData.ts`

Run:

```bash
npm run generate-data
```

This rewrites all generated dataset files with deterministic IDs and varied prompt templates.

## How to Add New Evaluation Examples

1. Preferred: update template pools in `scripts/generateEvaluationData.ts`, then rerun `npm run generate-data`.
2. Manual: append objects in any `data/evaluations/*.ts` array using the `EvaluationExample` interface.

## How to Add New Prompt Experiments

1. Preferred: increase count or templates in `scripts/generateEvaluationData.ts` and rerun generator.
2. Manual: append to `promptExperiments` in `data/promptExperiments.ts`.

## How to Add New Benchmarks

1. Preferred: adjust benchmark task/model pools in generator script and rerun.
2. Manual: append to `modelBenchmarks` in `data/modelBenchmarks.ts`.

## UI Features

- LLM Evaluation gallery with:
  - random ordering
  - filter by category
  - filter by difficulty
  - pagination
- Prompt lab pagination
- Model benchmarks pagination
- Bug hunt pagination

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Deployment

Compatible with static export targets:

- Vercel
- GitHub Pages

For GitHub Pages manual build:

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY_NAME=Portfolio npm run build
```
