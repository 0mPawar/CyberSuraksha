import React from 'react';
import { PhoneCall, ExternalLink, ShieldCheck, Clock, AlertTriangle } from 'lucide-react';

export default function HelplineCard({ helpline }) {
  const {
    title,
    number,
    primaryTag,
    operatingAuthority,
    website,
    hours,
    description,
    actionRequired,
    importantNote,
    lastVerified,
  } = helpline;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-6 sm:p-7 flex flex-col justify-between space-y-5">
      <div>
        {/* Header tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            {primaryTag}
          </span>
          {hours && (
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-full">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{hours}</span>
            </span>
          )}
        </div>

        {/* Title & Authority */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
        <p className="text-xs font-semibold text-slate-500 mt-0.5">
          Authority: {operatingAuthority}
        </p>

        {/* Big Number / Action button */}
        {number && (
          <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-200/80 flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase text-slate-500 block">
                Official Helpline Number
              </span>
              <span className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">
                {number}
              </span>
            </div>
            <a
              href={`tel:${number}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow transition shrink-0 active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-emerald-300" />
              <span>Call Helpline</span>
            </a>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          {description}
        </p>

        {/* When to use */}
        {actionRequired && (
          <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <span className="font-bold text-slate-900 block">When & How to Use:</span>
            <p className="leading-relaxed">{actionRequired}</p>
          </div>
        )}

        {/* Warning / Important note */}
        {importantNote && (
          <div className="mt-3 p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{importantNote}</p>
          </div>
        )}
      </div>

      {/* Footer / Links */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-1.5 text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Verified: {lastVerified}</span>
        </div>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold transition"
          >
            <span>Visit Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

