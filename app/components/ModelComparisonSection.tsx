'use client';

import { useState } from 'react';
import { ModelComparisonTable } from '@/components/ai/ModelComparisonTable';
import { modelBenchmarks } from '@/data/modelBenchmarks';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

const PAGE_SIZE = 10;

export function ModelComparisonSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(modelBenchmarks.length / PAGE_SIZE);
  const paginated = modelBenchmarks.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <AnimatedSection id="benchmarks" className="container-shell py-20">
      <SectionHeader title="Benchmarks" heading="AI Model Comparison Experiments" />
      <p className="mt-4 max-w-3xl text-sm text-slate-300">
        50 benchmark comparisons capturing quality differences across reasoning, implementation accuracy, and edge-case
        behavior.
      </p>
      <div className="mt-8">
        <ModelComparisonTable rows={paginated} />
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-200 disabled:opacity-40"
        >
          Previous
        </button>
        <p className="text-sm text-slate-300">
          Page {page} of {totalPages}
        </p>
        <button
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page === totalPages}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-200 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </AnimatedSection>
  );
}
