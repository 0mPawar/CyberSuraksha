import React from 'react';
import ScamCard from './ScamCard';
import { SearchX, RotateCcw } from 'lucide-react';

export default function ScamGrid({ scams = [], onReset }) {
  if (scams.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-8 shadow-sm">
        <div className="w-14 h-14 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
          <SearchX className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">No Matching Scams Found</h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          We couldn't find any scam entries matching your search keywords or active filters. Try searching with different terms like "UPI", "Call", "Job", or reset your filters.
        </p>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {scams.map((scam) => (
        <ScamCard key={scam.id} scam={scam} />
      ))}
    </div>
  );
}

