'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/15">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-base font-semibold text-white">{question}</span>
        <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-white/70 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">{answer}</p>}
    </div>
  );
}
