'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/site';

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-slate-800/70">
      <div className="absolute inset-0 -z-10 bg-mesh-gradient" />
      <div className="container-shell py-20 sm:py-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="font-mono text-sm uppercase tracking-[0.24em] text-primary"
        >
          {profile.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          {profile.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          {profile.shortBio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
