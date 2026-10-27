import React from 'react';
import { ShieldAlert, PhoneCall, ExternalLink } from 'lucide-react';
import { OFFICIAL_LINKS, HELPLINE_NUMBERS } from '../../utils/externalLinks';

export default function AlertBanner({ className = '' }) {
  return (
    <div
      className={`bg-gradient-to-r from-red-700 via-rose-700 to-amber-700 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-red-500/30 ${className}`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/60 border border-red-400/40 text-amber-200 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-amber-300" />
            <span>Emergency Action Protocol</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Lost Money to an Online Financial Scam? Act Immediately.
          </h3>
          <p className="text-sm sm:text-base text-red-100 leading-relaxed">
            Report within the <strong>Golden Hour</strong>. Immediate reporting allows authorities and banks to freeze fraudulent accounts before the criminal withdraws your money.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <a
            href={`tel:${HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}`}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-red-700 hover:bg-red-50 font-bold text-sm shadow-md transition transform active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            <span>Call 1930 Now</span>
          </a>
          <a
            href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-900/80 hover:bg-red-900 text-white border border-red-400/50 font-semibold text-sm shadow transition"
          >
            <span>cybercrime.gov.in</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
}

