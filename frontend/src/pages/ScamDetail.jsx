import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Building,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { SCAMS_DATA } from '../data/scams';
import { OFFICIAL_LINKS, HELPLINE_NUMBERS } from '../utils/externalLinks';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SourceList from '../components/common/SourceList';
import LastReviewed from '../components/common/LastReviewed';

export default function ScamDetail() {
  const { slug } = useParams();

  const scam = SCAMS_DATA.find((item) => item.slug === slug);

  if (!scam) {
    return <Navigate to="/scams" replace />;
  }

  const {
    title,
    category,
    riskIndicators,
    shortDescription,
    howItWorks,
    realWorldExample,
    warningSigns,
    typicalTactics,
    legitimateVsScam,
    preventionTips,
    whatToDo,
    relatedScams,
    sources,
    lastReviewed,
  } = scam;

  // Resolve related scam objects
  const relatedList = SCAMS_DATA.filter(
    (item) => relatedScams && relatedScams.includes(item.slug)
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Scam Library', to: '/scams' },
          { label: title },
        ]}
      />

      {/* Back to Library Link */}
      <div>
        <Link
          to="/scams"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Scams</span>
        </Link>
      </div>

      {/* Header Section */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            {category}
          </span>
          <LastReviewed date={lastReviewed} />
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          {shortDescription}
        </p>

        {/* Risk Badges */}
        {riskIndicators && riskIndicators.length > 0 && (
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Primary Threat Risks:
            </span>
            {riskIndicators.map((risk, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                <span>{risk}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* SECTION 1: HOW IT WORKS */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5 text-slate-900">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">How This Scam Operates</h2>
        </div>

        <div className="space-y-3.5">
          {Array.isArray(howItWorks) ? (
            howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5 text-sm text-slate-700"
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="leading-relaxed">{step}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-700 leading-relaxed">{howItWorks}</p>
          )}
        </div>
      </section>

      {/* SECTION 2: REAL WORLD ILLUSTRATIVE EXAMPLE */}
      {realWorldExample && (
        <section className="bg-gradient-to-br from-amber-50/80 to-orange-50/50 rounded-3xl border border-amber-200/90 p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm uppercase tracking-wide">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Illustrative Educational Scenario</span>
          </div>
          <p className="text-sm text-amber-950 leading-relaxed font-normal">
            {realWorldExample}
          </p>
          <span className="text-[11px] text-amber-800 italic block pt-1">
            * Note: This scenario is an educational simulation based on documented incident reports to illustrate the deceptive mechanism.
          </span>
        </section>
      )}

      {/* SECTION 3: COMMON WARNING SIGNS & TYPICAL TACTICS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Warning Signs */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-red-700 font-bold text-lg">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
            <h3>Warning Signs (Red Flags)</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            {warningSigns.map((sign, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2"></span>
                <span className="leading-relaxed">{sign}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Typical Messages & Tactics */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-purple-800 font-bold text-lg">
            <ShieldAlert className="w-5 h-5 text-purple-600 shrink-0" />
            <h3>Typical Fraud Messages & Tactics</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            {typicalTactics &&
              typicalTactics.map((tactic, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 text-xs text-purple-950 leading-relaxed"
                >
                  {tactic}
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* SECTION 4: LEGITIMATE VS SCAM BEHAVIOR */}
      {legitimateVsScam && (
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
            <Building className="w-5 h-5 text-blue-600 shrink-0" />
            <h2>Legitimate Organizations vs. Fraudsters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 space-y-2">
              <span className="font-bold text-emerald-900 text-xs uppercase tracking-wider block">
                ✓ What Legitimate Banks & Authorities Do:
              </span>
              <p className="leading-relaxed text-xs sm:text-sm">
                {legitimateVsScam.legitimate}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/80 border border-red-200 text-red-950 space-y-2">
              <span className="font-bold text-red-900 text-xs uppercase tracking-wider block">
                ✗ What Cyber Scammers Demand:
              </span>
              <p className="leading-relaxed text-xs sm:text-sm">
                {legitimateVsScam.scam}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: HOW TO AVOID THE SCAM (PREVENTION) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xl">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <h2>How to Avoid This Scam (Prevention Advice)</h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-700">
          {preventionTips.map((tip, idx) => (
            <li
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed text-xs sm:text-sm">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 6: WHAT TO DO IF ALREADY AFFECTED */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>Emergency Action Sequence</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            What to Do If You Have Already Been Affected
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Follow these verified steps immediately. Prompt action is critical.
          </p>
        </div>

        <div className="space-y-3">
          {whatToDo.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-start gap-3.5 text-sm text-slate-200"
            >
              <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="leading-relaxed text-xs sm:text-sm">{step}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href={`tel:${HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow transition"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call 1930 Helpline</span>
          </a>
          <a
            href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-semibold text-xs sm:text-sm transition"
          >
            <span>Lodge Official Complaint on cybercrime.gov.in</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SECTION 7: SOURCES AND VERIFICATION */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <SourceList sources={sources} />
      </section>

      {/* SECTION 8: RELATED SCAMS */}
      {relatedList.length > 0 && (
        <section className="space-y-4 pt-4">
          <h3 className="text-lg font-bold text-slate-900">Related Scam Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedList.map((rel) => (
              <Link
                key={rel.id}
                to={`/scams/${rel.slug}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition flex items-center justify-between gap-3 text-sm font-semibold text-slate-800 group"
              >
                <span className="group-hover:text-blue-600 transition truncate">
                  {rel.title}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

