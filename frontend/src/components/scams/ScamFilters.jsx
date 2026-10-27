import { RotateCcw } from 'lucide-react';
import { SCAM_CATEGORIES, RISK_TYPES } from '../../data/scams';
import SearchInput from '../common/SearchInput';

export default function ScamFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedRisk,
  setSelectedRisk,
  onReset,
  totalResults,
}) {
  const isFiltered = searchTerm !== '' || selectedCategory !== 'All' || selectedRisk !== 'All';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
      {/* Search Input Row */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 w-full">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm('')}
            placeholder="Search by scam name (e.g. UPI, Digital Arrest, WhatsApp, Task scam)..."
          />
        </div>
        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
          Filter by Category
        </label>
        <div className="flex flex-wrap gap-2">
          {SCAM_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  active
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Risk Type Selector */}
      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-slate-500 uppercase tracking-wider">
            Risk Type:
          </span>
          <button
            type="button"
            onClick={() => setSelectedRisk('All')}
            className={`px-2.5 py-1 rounded-lg font-medium transition ${
              selectedRisk === 'All'
                ? 'bg-slate-800 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Risks
          </button>
          {RISK_TYPES.map((risk) => {
            const active = selectedRisk === risk;
            return (
              <button
                key={risk}
                type="button"
                onClick={() => setSelectedRisk(risk)}
                className={`px-2.5 py-1 rounded-lg font-medium transition ${
                  active
                    ? 'bg-red-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {risk}
              </button>
            );
          })}
        </div>

        <div className="text-slate-500 font-medium">
          Showing <strong>{totalResults}</strong> scam types
        </div>
      </div>
    </div>
  );
}

