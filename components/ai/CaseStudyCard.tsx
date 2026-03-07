'use client';

import { motion } from 'framer-motion';
import type { CaseStudy } from '@/data/caseStudies';

type CaseStudyCardProps = {
  item: CaseStudy;
  index: number;
};

export function CaseStudyCard({ item, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="card-surface p-6"
    >
      <p className="font-mono text-xs uppercase tracking-wide text-primary">Problem</p>
      <p className="mt-2 text-sm text-slate-100">{item.problem}</p>

      <p className="mt-4 font-mono text-xs uppercase tracking-wide text-accent">Prompt Strategy</p>
      <p className="mt-2 text-sm text-slate-300">{item.promptStrategy}</p>

      <p className="mt-4 font-mono text-xs uppercase tracking-wide text-sky-300">Iterations</p>
      <ul className="mt-2 space-y-2 text-sm text-slate-300">
        {item.iterations.map((iteration) => (
          <li key={iteration} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
            {iteration}
          </li>
        ))}
      </ul>

      <p className="mt-4 font-mono text-xs uppercase tracking-wide text-emerald-300">Results</p>
      <p className="mt-2 text-sm text-slate-200">{item.results}</p>
    </motion.article>
  );
}
