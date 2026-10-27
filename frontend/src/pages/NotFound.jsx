import { Link } from 'react-router-dom';
import { ShieldAlert, Home, Search, PhoneCall } from 'lucide-react';
import { HELPLINE_NUMBERS } from '../utils/externalLinks';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center space-y-6">
      <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
        <ShieldAlert className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          The page or guide you are looking for does not exist or may have been moved.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow transition"
        >
          <Home className="w-4 h-4" />
          <span>Go to Home</span>
        </Link>

        <Link
          to="/scams"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow transition"
        >
          <Search className="w-4 h-4" />
          <span>Explore Scam Library</span>
        </Link>

        <Link
          to="/help"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
        >
          <PhoneCall className="w-4 h-4 text-emerald-600" />
          <span>Government Helplines</span>
        </Link>
      </div>

      <div className="pt-10 border-t border-slate-200 text-xs text-slate-500">
        In case of active cyber financial fraud, call India's official helpline <strong>{HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}</strong> immediately.
      </div>
    </div>
  );
}

