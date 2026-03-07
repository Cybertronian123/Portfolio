'use client';

import { motion } from 'framer-motion';
import type { ModelBenchmark } from '@/data/modelBenchmarks';

type ModelComparisonTableProps = {
  rows: ModelBenchmark[];
};

function getModelColor(model: string) {
  if (model.includes('GPT')) return 'bg-green-500/20 text-green-300 border-green-500/30';
  if (model.includes('Claude')) return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
  if (model.includes('Gemini')) return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
  return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
}

export function ModelComparisonTable({ rows }: ModelComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-slate-900/90 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Task</th>
              <th className="px-4 py-3">Model A</th>
              <th className="px-4 py-3">Model B</th>
              <th className="px-4 py-3">Winner</th>
              <th className="px-4 py-3">Explanation</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="border-t border-slate-800/80 align-top"
              >
                <td className="px-4 py-4 font-mono text-xs text-slate-400">{row.id}</td>
                <td className="px-4 py-4 font-semibold text-white">{row.task}</td>
                <td className="px-4 py-4 text-slate-300">{row.modelA}</td>
                <td className="px-4 py-4 text-slate-300">{row.modelB}</td>
                <td className="px-4 py-4">
                  <div className="flex max-w-[180px] flex-wrap gap-2">
                    {row.winner.map((model) => (
                      <span
                        key={`${row.id}-${model}`}
                        className={`rounded-full border px-2 py-1 text-xs font-medium ${getModelColor(model)}`}
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4 text-slate-300">{row.explanation}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
