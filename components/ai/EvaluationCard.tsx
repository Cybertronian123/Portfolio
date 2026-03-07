'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { EvaluationExample } from '@/data/evaluations';

type EvaluationCardProps = {
  item: EvaluationExample;
  index: number;
};

export function EvaluationCard({ item, index }: EvaluationCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="card-surface p-6 shadow-glow"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
          {item.category}
        </span>
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
          {item.difficulty}
        </span>
        <span
          className={`rounded-full border px-3 py-1 text-xs ${
            item.winner === 'A'
              ? 'border-amber-300/40 bg-amber-500/10 text-amber-300'
              : 'border-emerald-300/40 bg-emerald-500/10 text-emerald-300'
          }`}
        >
          Winner: {item.winner}
        </span>
      </div>
      <p className="mt-3 font-mono text-xs uppercase tracking-wide text-primary">Prompt</p>
      <p className="mt-1 text-sm text-slate-200">{item.prompt}</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-amber-300/30 bg-amber-500/5 p-3">
          <p className="font-mono text-xs uppercase tracking-wide text-amber-300">Response A</p>
          <p className="mt-2 text-sm text-slate-300">{item.responseA}</p>
        </div>
        <div className="rounded-xl border border-emerald-300/30 bg-emerald-500/5 p-3">
          <p className="font-mono text-xs uppercase tracking-wide text-emerald-300">Response B</p>
          <p className="mt-2 text-sm text-slate-300">{item.responseB}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-200">{item.evaluation}</p>

      <button
        onClick={() => setExpanded((value) => !value)}
        className="mt-4 rounded-lg border border-primary/40 px-3 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10"
      >
        {expanded ? 'Hide Reasoning' : 'Expand Reasoning'}
      </button>

      {expanded ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 rounded-xl border border-accent/30 bg-accent/10 p-4"
        >
          <p className="font-mono text-xs uppercase tracking-wide text-accent">Evaluation Reasoning</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-200">
            {item.reasoning.map((reason) => (
              <li key={reason} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                {reason}
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </motion.article>
  );
}
