import { profile } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/70 py-8">
      <div className="container-shell flex flex-col items-start justify-between gap-3 text-sm text-slate-400 sm:flex-row sm:items-center">
        <p>
          {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript and TailwindCSS.
        </p>
        <a href="#hero" className="font-mono text-xs uppercase tracking-wide text-primary transition hover:text-sky-300">
          Back to top
        </a>
      </div>
    </footer>
  );
}
