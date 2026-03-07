'use client';

import { useEffect, useMemo, useState } from 'react';
import { EvaluationCard } from '@/components/ai/EvaluationCard';
import { allEvaluations } from '@/data/evaluations';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

const PAGE_SIZE = 8;

function shuffle<T>(values: T[]): T[] {
  const arr = [...values];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function LlmEvaluationGallerySection() {
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [page, setPage] = useState(1);
  const [displayData, setDisplayData] = useState(allEvaluations);

  useEffect(() => {
    setDisplayData(shuffle(allEvaluations));
  }, []);

  const categories = useMemo(
    () => ['all', ...Array.from(new Set(allEvaluations.map((item) => item.category)))],
    []
  );

  const filtered = useMemo(() => {
    return displayData.filter((item) => {
      const categoryMatch = category === 'all' || item.category === category;
      const difficultyMatch = difficulty === 'all' || item.difficulty === difficulty;
      return categoryMatch && difficultyMatch;
    });
  }, [displayData, category, difficulty]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [category, difficulty]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return (
    <AnimatedSection id="evaluation" className="container-shell py-20">
      <SectionHeader title="Evaluation" heading="LLM Evaluation Examples" />
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value as 'all' | 'easy' | 'medium' | 'hard')}
          className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"
        >
          <option value="all">all difficulties</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
        <p className="text-sm text-slate-400">
          Showing {filtered.length} examples from {allEvaluations.length}
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {paginated.map((item, index) => (
          <EvaluationCard key={item.id} item={item} index={index} />
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
