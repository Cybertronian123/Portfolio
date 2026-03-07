import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Evaluation Methodology | Atrayan Mukherjee',
  description:
    'Evaluation framework used for AI model assessment including correctness, reasoning quality, edge-case analysis and efficiency checks.'
};

const criteria = ['correctness', 'reasoning', 'edge cases', 'efficiency'];
const techniques = ['zero-shot prompting', 'few-shot prompting', 'chain-of-thought prompting', 'prompt chaining'];

export default function EvaluationMethodologyPage() {
  return (
    <>
      <Navbar />
      <main className="container-shell py-16">
        <p className="section-title">Methodology</p>
        <h1 className="section-heading">Evaluation Framework</h1>

        <section className="card-surface mt-8 p-6">
          <h2 className="text-xl font-semibold text-white">How Evaluations Are Performed</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300">
            Each model response is tested against deterministic outputs and manual rubric scoring. The process combines
            correctness checks, explanation review, and targeted edge-case validation. Evaluation logs are tracked to
            compare prompt versions and model behavior over repeated trials.
          </p>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="card-surface p-6">
            <h2 className="text-lg font-semibold text-white">Evaluation Criteria</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {criteria.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface p-6">
            <h2 className="text-lg font-semibold text-white">Prompt Techniques</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {techniques.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="card-surface mt-6 p-6">
          <h2 className="text-lg font-semibold text-white">Dataset and Task Design</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            The dataset includes algorithm prompts, frontend debugging tasks, API integration scenarios, and refactoring
            prompts. Tasks are intentionally mixed between straightforward and adversarial cases to capture reliability,
            hallucination risk, and robustness under ambiguity.
          </p>
        </section>

        <Link href="/" className="mt-6 inline-flex text-sm font-semibold text-primary transition hover:text-sky-300">
          Back to Home {'->'}
        </Link>
      </main>
      <Footer />
    </>
  );
}
