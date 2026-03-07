'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/site';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="container-shell py-20">
      <SectionHeader title="Capabilities" heading="Skills" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillCategories.map((item, idx) => (
          <motion.article
            key={item.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            whileHover={{ y: -4 }}
            className="card-surface p-6 shadow-sm shadow-slate-950"
          >
            <h3 className="font-mono text-sm uppercase tracking-wide text-accent">{item.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-sm text-slate-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
