'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { profile } from '@/data/site';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  forks_count: number;
};

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');

  useEffect(() => {
    async function loadRepos() {
      if (!profile.githubUsername || profile.githubUsername === 'GITHUB_USERNAME_HERE') {
        return;
      }

      setStatus('loading');
      try {
        const response = await fetch(
          `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = (await response.json()) as Repo[];
        setRepos(data);
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    }

    void loadRepos();
  }, []);

  return (
    <AnimatedSection id="github" className="container-shell py-20">
      <SectionHeader title="Open Source" heading="GitHub Projects" />

      {profile.githubUsername === 'GITHUB_USERNAME_HERE' ? (
        <p className="mt-6 text-slate-300">
          Replace <code className="rounded bg-slate-800 px-1 py-0.5">GITHUB_USERNAME_HERE</code> in
          <code className="ml-1 rounded bg-slate-800 px-1 py-0.5">data/site.ts</code> to auto-load repositories.
        </p>
      ) : null}

      {status === 'loading' ? <p className="mt-6 text-slate-300">Loading repositories...</p> : null}
      {status === 'error' ? <p className="mt-6 text-red-300">Could not load repositories right now.</p> : null}

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {repos.map((repo, idx) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            whileHover={{ y: -4 }}
            className="card-surface block p-5 transition hover:border-primary/40"
          >
            <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
            <p className="mt-2 text-sm text-slate-300">
              {repo.description || 'No description provided.'}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
              <span>Language: {repo.language || 'N/A'}</span>
              <span>Stars: {repo.stargazers_count}</span>
              <span>Forks: {repo.forks_count}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </AnimatedSection>
  );
}
