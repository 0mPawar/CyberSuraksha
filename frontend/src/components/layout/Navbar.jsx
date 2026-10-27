import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, ShieldAlert, PhoneCall, ExternalLink, Menu, X, AlertTriangle } from 'lucide-react';
import { OFFICIAL_LINKS, HELPLINE_NUMBERS } from '../../utils/externalLinks';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobile = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/scams', label: 'Scam Library' },
    { to: '/if-you-are-scammed', label: 'If You Are Scammed', highlight: true },
    { to: '/stay-safe', label: 'Stay Safe' },
    { to: '/help', label: 'Government Help' },
    { to: '/learn', label: 'Learn' },
    { to: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-md">
      {/* Top Urgent Alert Strip */}
      <div className="bg-gradient-to-r from-red-600 to-amber-600 text-white px-4 py-1.5 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-200" />
            <span>
              <strong>Emergency Financial Fraud?</strong> Dial <strong>{HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}</strong> immediately to freeze unauthorized transactions.
            </span>
          </div>
          <a
            href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline hover:text-amber-100 transition-colors"
          >
            cybercrime.gov.in <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo & Identity */}
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-sm">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                Cyber<span className="text-blue-400">Suraksha</span>
              </span>
              <span className="block text-[11px] font-medium text-slate-400 -mt-0.5 tracking-wider uppercase">
                Digital Safety Awareness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : item.highlight
                      ? 'text-amber-300 hover:text-amber-200 hover:bg-slate-800'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition"
              title="Call National Cyber Financial Fraud Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Helpline 1930</span>
            </a>
            <a
              href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Report Cyber Fraud</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}`}
              className="p-2 text-emerald-400 bg-slate-800 rounded-lg md:hidden border border-slate-700"
              aria-label="Call 1930 Helpline"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold'
                      : item.highlight
                      ? 'text-amber-300 hover:bg-slate-800'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={`tel:${HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call Helpline 1930 (Toll Free)</span>
            </a>
            <a
              href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-red-600 hover:bg-red-700 text-white shadow-sm"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Report on cybercrime.gov.in</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

