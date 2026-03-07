'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { PromptExperiment } from '@/data/promptExperiments';

type PromptExperimentProps = {
  item: PromptExperiment;
  index: number;
};

export function PromptExperiment({ item, index }: PromptExperimentProps) {
  const [activeTab, setActiveTab] = useState<'v1' | 'v2' | 'v3'>('v1');
  const activePrompt = activeTab === 'v1' ? item.promptV1 : activeTab === 'v2' ? item.promptV2 : item.promptV3;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="card-surface p-6"
    >
      <p className="font-mono text-xs uppercase tracking-wide text-primary">{item.id}</p>
      <h3 className="mt-2 text-lg font-semibold text-white">{item.task}</h3>
      <p className="mt-2 text-sm text-slate-300">
        Progressively constrained prompts used to improve response quality and consistency.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {(['v1', 'v2', 'v3'] as const).map((variant) => (
          <button
            key={variant}
            onClick={() => setActiveTab(variant)}
            className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
              activeTab === variant
                ? 'border-primary bg-primary/15 text-primary'
                : 'border-slate-700 text-slate-300 hover:border-slate-500'
            }`}
          >
            Prompt {variant.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="font-mono text-xs uppercase tracking-wide text-sky-300">Prompt</p>
        <p className="mt-2 text-sm text-slate-200">{activePrompt}</p>

        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-accent">Improvement</p>
        <p className="mt-2 text-sm text-slate-300">{item.improvementExplanation}</p>
      </div>
    </motion.article>
  );
}
