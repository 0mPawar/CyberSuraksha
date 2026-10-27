import { Link } from 'react-router-dom';
import { Shield, PhoneCall, ExternalLink, AlertCircle } from 'lucide-react';
import { OFFICIAL_LINKS, HELPLINE_NUMBERS } from '../../utils/externalLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">
      {/* Top Advisory Strip */}
      <div className="bg-slate-900 border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-amber-300">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span className="font-medium text-slate-300">
              Disclaimer: CyberSuraksha is an independent community awareness project. We are not a government agency.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Content Last Reviewed: <strong>October 2026</strong></span>
            <span>•</span>
            <Link to="/disclaimer" className="text-blue-400 hover:underline">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: Platform Overview & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Cyber<span className="text-blue-400">Suraksha</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An open, public-interest community awareness platform dedicated to empowering Indian citizens with clear, jargon-free knowledge about digital fraud, cyber scams, and verified government reporting channels.
            </p>
            <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl space-y-2 max-w-md">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Immediate Government Helplines</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                <a
                  href={`tel:${HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}`}
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>1930</span>
                  <span className="text-xs text-slate-400 font-normal">(Cyber Financial Fraud)</span>
                </a>
                <a
                  href={`tel:${HELPLINE_NUMBERS.NATIONAL_EMERGENCY}`}
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>112</span>
                  <span className="text-xs text-slate-400 font-normal">(All-India Police / Emergency)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/scams" className="text-slate-400 hover:text-white transition">
                  Scam Library
                </Link>
              </li>
              <li>
                <Link to="/if-you-are-scammed" className="text-amber-300 hover:text-amber-200 transition font-medium">
                  If You Are Scammed
                </Link>
              </li>
              <li>
                <Link to="/stay-safe" className="text-slate-400 hover:text-white transition">
                  Stay Safe Guide
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-slate-400 hover:text-white transition">
                  Government Helplines
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-slate-400 hover:text-white transition">
                  Cyber Knowledge Base
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-400 hover:text-white transition">
                  How Scams Work
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-white transition">
                  Official Resources
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition">
                  About the Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Common Scam Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase">
              Major Scam Guides
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/scams/upi-fraud" className="text-slate-400 hover:text-white transition">
                  UPI & Payment Fraud
                </Link>
              </li>
              <li>
                <Link to="/scams/digital-arrest" className="text-slate-400 hover:text-white transition">
                  Digital Arrest Scams
                </Link>
              </li>
              <li>
                <Link to="/scams/job-scam" className="text-slate-400 hover:text-white transition">
                  Part-Time Task Scams
                </Link>
              </li>
              <li>
                <Link to="/scams/investment-fraud" className="text-slate-400 hover:text-white transition">
                  Stock & Trading Scams
                </Link>
              </li>
              <li>
                <Link to="/scams/loan-app-fraud" className="text-slate-400 hover:text-white transition">
                  Illegal Loan Apps
                </Link>
              </li>
              <li>
                <Link to="/scams/sextortion" className="text-slate-400 hover:text-white transition">
                  Sextortion & Blackmail
                </Link>
              </li>
              <li>
                <Link to="/scams/fake-kyc" className="text-slate-400 hover:text-white transition">
                  Fake KYC Expiry Alerts
                </Link>
              </li>
              <li>
                <Link to="/scams/deepfake-scam" className="text-slate-400 hover:text-white transition">
                  AI Deepfake Impersonation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Government Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase">
              Official Portals
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition"
                >
                  <span>National Cybercrime Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.CHAKSHU}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition"
                >
                  <span>Chakshu (Spam / Scam Calls)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.SANCHAR_SAATHI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition"
                >
                  <span>Sanchar Saathi (DoT)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.RBI_AWARENESS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition"
                >
                  <span>RBI Kehta Hai Hub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.CERT_IN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition"
                >
                  <span>CERT-In Advisories</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.EMERGENCY_112}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition"
                >
                  <span>ERSS 112 Emergency</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} CyberSuraksha — Community Engagement Project (CEP). Non-commercial public education initiative.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/disclaimer" className="hover:text-slate-300 transition">
              Disclaimer
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition">
              About Project
            </Link>
            <a
              href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

