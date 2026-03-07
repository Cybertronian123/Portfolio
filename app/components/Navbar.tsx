'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, profile } from '@/data/site';

export function Navbar() {
  const pathname = usePathname();
  const prefix = pathname === '/' ? '' : '/';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-background/80 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href={`${prefix}#hero`} className="font-mono text-sm font-semibold text-primary">
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`${prefix}${link.href}`}
              className="text-sm text-slate-300 transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href={`${prefix}#contact`}
          className="rounded-lg border border-primary/40 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10"
        >
          Let&apos;s Connect
        </motion.a>
      </div>
    </header>
  );
}
