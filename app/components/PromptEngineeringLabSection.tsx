'use client';

import { useState } from 'react';
import { PromptExperiment } from '@/components/ai/PromptExperiment';
import { promptExperiments } from '@/data/promptExperiments';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

const PAGE_SIZE = 6;

export function PromptEngineeringLabSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(promptExperiments.length / PAGE_SIZE);
  const paginated = promptExperiments.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <AnimatedSection id="prompt-lab" className="container-shell py-20">
      <SectionHeader title="Experimentation" heading="Prompt Engineering Lab" />
      <div className="mt-10 space-y-6">
        {paginated.map((item, index) => (
          <PromptExperiment key={item.id} item={item} index={index} />
        ))}
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
