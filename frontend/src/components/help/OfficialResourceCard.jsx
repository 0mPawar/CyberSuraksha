import React from 'react';
import { ExternalLink, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';

export default function OfficialResourceCard({ resource }) {
  const { title, authority, url, badge, description, keyServices, helpline, lastVerified } = resource;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition p-6 sm:p-7 flex flex-col justify-between space-y-5">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
            {badge}
          </span>
          {helpline && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              <PhoneCall className="w-3 h-3" />
              <span>{helpline}</span>
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
        <p className="text-xs font-semibold text-slate-500 mt-0.5">
          Authority: {authority}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed mt-3">
          {description}
        </p>

        {keyServices && keyServices.length > 0 && (
          <div className="mt-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Key Citizen Facilities:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {keyServices.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 text-xs">
        <span className="text-slate-500 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Verified: {lastVerified}</span>
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold transition"
        >
          <span>Open Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

