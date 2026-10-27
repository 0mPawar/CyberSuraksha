import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, ShieldAlert } from 'lucide-react';

export default function ScamCard({ scam }) {
  const { slug, title, category, riskIndicators, shortDescription, warningSigns } = scam;

  const categoryColors = {
    'Digital Payments': 'bg-blue-50 text-blue-700 border-blue-200',
    'Impersonation & Coercion': 'bg-purple-50 text-purple-700 border-purple-200',
    'Employment & Investment': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Account & Device Security': 'bg-slate-100 text-slate-800 border-slate-300',
    'Online Shopping & E-Commerce': 'bg-amber-50 text-amber-700 border-amber-200',
    'Personal Safety & Extortion': 'bg-rose-50 text-rose-700 border-rose-200',
    'Emerging AI & Tech': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full overflow-hidden group hover:border-blue-300">
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wider ${
              categoryColors[category] || 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            {category}
          </span>
          {riskIndicators && riskIndicators.length > 0 && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
              <ShieldAlert className="w-3 h-3" />
              <span>{riskIndicators[0]}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
          <Link to={`/scams/${slug}`} className="focus:outline-none">
            {title}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-1">
          {shortDescription}
        </p>

        {/* Warning Sign Highlight */}
        {warningSigns && warningSigns.length > 0 && (
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 mb-4 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="line-clamp-2">
              <strong>Red Flag:</strong> {warningSigns[0]}
            </span>
          </div>
        )}
      </div>

      {/* Card Footer Action */}
      <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
        <span>Read Prevention Guide</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

