'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { BugHuntExample } from '@/data/bugHunts';
import { CodeBlock } from './CodeBlock';

type BugHuntCardProps = {
  item: BugHuntExample;
  index: number;
};

export function BugHuntCard({ item, index }: BugHuntCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="card-surface p-6"
    >
      <h3 className="text-lg font-semibold text-white">{item.id}</h3>
      <p className="mt-3 text-xs uppercase tracking-wide text-primary">Find the hidden bug</p>
      <div className="mt-4">
        <CodeBlock code={item.code} language={item.language} />
      </div>

      <button
        onClick={() => setRevealed((value) => !value)}
        className="mt-4 rounded-lg border border-primary/40 px-3 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10"
      >
        {revealed ? 'Hide Bug' : 'Reveal Bug'}
      </button>

      {revealed ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 space-y-3 rounded-xl border border-rose-300/30 bg-rose-500/10 p-4"
        >
          <p className="font-mono text-xs uppercase tracking-wide text-rose-300">Bug</p>
          <p className="text-sm text-slate-200">{item.bugExplanation}</p>
          <p className="font-mono text-xs uppercase tracking-wide text-emerald-300">Fix</p>
          <CodeBlock code={item.fix} language={item.language} />
        </motion.div>
      ) : null}
    </motion.article>
  );
}
