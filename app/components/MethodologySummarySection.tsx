'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

const evaluationCriteria = ['correctness', 'reasoning', 'edge cases', 'efficiency'];
const promptTechniques = ['zero-shot prompting', 'few-shot prompting', 'chain-of-thought prompting', 'prompt chaining'];

export function MethodologySummarySection() {
  return (
    <AnimatedSection id="methodology" className="container-shell py-20">
      <SectionHeader title="Framework" heading="Dataset / Evaluation Method" />
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="card-surface p-6"
      >
        <p className="text-sm leading-relaxed text-slate-300">
          Evaluations are run on curated coding tasks with deterministic checks, rubric-based reasoning review, and
          edge-case stress tests. Prompt quality is scored by consistency and error recovery across versions.
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-primary">Evaluation Criteria</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {evaluationCriteria.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-accent">Prompt Techniques</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {promptTechniques.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/evaluation-methodology"
          className="mt-6 inline-flex rounded-lg border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
        >
          View Full Evaluation Methodology
        </Link>
      </motion.article>
    </AnimatedSection>
  );
}
