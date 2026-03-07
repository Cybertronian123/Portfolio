'use client';

import { useMemo } from 'react';

type CodeBlockProps = {
  code: string;
  language?: string;
};

const KEYWORDS = /\b(function|return|const|let|var|if|else|for|while|class|new|try|catch|async|await)\b/g;

function highlightLine(line: string) {
  return line.split(KEYWORDS).map((part, index) => {
    if (part.match(KEYWORDS)) {
      return (
        <span key={`${part}-${index}`} className="text-sky-300">
          {part}
        </span>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const lines = useMemo(() => code.split('\n'), [code]);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950/80">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-xs text-slate-400">
        <span className="font-mono uppercase tracking-wide">{language}</span>
        <span>AI Generated Snippet</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-slate-100">
        <code>
          {lines.map((line, index) => (
            <div key={`${line}-${index}`} className="grid grid-cols-[32px_1fr] gap-3">
              <span className="select-none text-right font-mono text-xs text-slate-500">{index + 1}</span>
              <span className="font-mono">{highlightLine(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
