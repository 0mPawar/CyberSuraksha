import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export default function SourceList({ sources = [], className = '' }) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        <span>Verified Official References</span>
      </div>
      <ul className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-slate-50/50 overflow-hidden text-xs">
        {sources.map((src, index) => (
          <li key={index} className="p-2.5 flex items-center justify-between gap-3 hover:bg-slate-100/70 transition">
            <span className="font-medium text-slate-700 truncate">{src.name}</span>
            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold shrink-0"
            >
              <span>Verify Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

