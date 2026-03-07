'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/site';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

export function ContactSection() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('Please fill all fields before submitting.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Opening your email app...');
    form.reset();
  }

  return (
    <AnimatedSection id="contact" className="container-shell py-20">
      <SectionHeader title="Connect" heading="Contact" />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="card-surface p-6"
        >
          <label className="mb-4 block text-sm text-slate-200">
            Name
            <input
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-primary"
              placeholder="Your name"
            />
          </label>
          <label className="mb-4 block text-sm text-slate-200">
            Email
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-primary"
              placeholder="you@example.com"
            />
          </label>
          <label className="mb-4 block text-sm text-slate-200">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-primary"
              placeholder="Your message"
            />
          </label>
          <button
            type="submit"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
          >
            Send Message
          </button>
          {status ? <p className="mt-3 text-sm text-slate-300">{status}</p> : null}
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08 }}
          className="card-surface p-6"
        >
          <h3 className="text-lg font-semibold text-white">Contact Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <span className="text-slate-400">Email: </span>
              <a href={`mailto:${profile.email}`} className="text-primary transition hover:text-sky-300">
                {profile.email}
              </a>
            </li>
            <li>
              <span className="text-slate-400">GitHub: </span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-primary transition hover:text-sky-300">
                {profile.github}
              </a>
            </li>
            <li>
              <span className="text-slate-400">LinkedIn: </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-primary transition hover:text-sky-300"
              >
                {profile.linkedin}
              </a>
            </li>
          </ul>
        </motion.aside>
      </div>
    </AnimatedSection>
  );
}
