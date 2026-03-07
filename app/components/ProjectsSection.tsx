'use client';

import { motion } from 'framer-motion';
import { featuredProjects } from '@/data/site';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="container-shell py-20">
      <SectionHeader title="Portfolio" heading="Featured Projects" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
            className="card-surface flex h-full flex-col p-6"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-primary/25 px-3 py-1 text-xs text-primary">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-primary transition hover:text-sky-300"
            >
              View Repository {'->'}
            </a>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
