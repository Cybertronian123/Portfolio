'use client';

import { CaseStudyCard } from '@/components/ai/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

export function CaseStudiesSection() {
  return (
    <AnimatedSection id="case-studies" className="container-shell py-20">
      <SectionHeader title="Iteration" heading="Prompt Iteration Case Studies" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {caseStudies.map((item, index) => (
          <CaseStudyCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}
