import { ShieldCheck } from 'lucide-react';

export default function LastReviewed({ date = 'October 2026', className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium ${className}`}>
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
      <span>Last Verified: <strong>{date}</strong></span>
    </div>
  );
}

