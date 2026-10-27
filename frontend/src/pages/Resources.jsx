import { ShieldCheck } from 'lucide-react';
import { OFFICIAL_RESOURCES } from '../data/resources';
import Breadcrumbs from '../components/common/Breadcrumbs';
import OfficialResourceCard from '../components/help/OfficialResourceCard';

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Official Resources & Guides' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
          Curated Official Repositories
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Official Government Resources & Portals
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Access verified public awareness initiatives, statutory complaint portals, cyber advisories, and regulatory guidelines across Indian departments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OFFICIAL_RESOURCES.map((resource) => (
          <OfficialResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

      <div className="p-6 rounded-3xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between gap-4">
        <span className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>All resource destination links are routinely audited and verified against official Indian Government domains (.gov.in / .nic.in / .rbi.org.in).</span>
        </span>
        <span className="font-semibold text-slate-800 shrink-0">Reviewed: October 2026</span>
      </div>
    </div>
  );
}

