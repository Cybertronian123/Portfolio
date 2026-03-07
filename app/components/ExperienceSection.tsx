'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/site';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="container-shell py-20">
      <SectionHeader title="Career" heading="Experience" />
      <div className="mt-10 space-y-5">
        {experience.map((item, idx) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="card-surface p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-slate-300">Company: {item.company}</p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wide text-accent">{item.years}</p>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
