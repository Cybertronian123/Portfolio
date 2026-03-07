'use client';

import { useState } from 'react';
import { BugHuntCard } from '@/components/ai/BugHuntCard';
import { bugHunts } from '@/data/bugHunts';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

const PAGE_SIZE = 6;

export function BugHuntSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(bugHunts.length / PAGE_SIZE);
  const paginated = bugHunts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <AnimatedSection id="bug-hunt" className="container-shell py-20">
      <SectionHeader title="Debugging" heading="Find the Bug in AI Code" />
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {paginated.map((item, index) => (
          <BugHuntCard key={item.id} item={item} index={index} />
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
