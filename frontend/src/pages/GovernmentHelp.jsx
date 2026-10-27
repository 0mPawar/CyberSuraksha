import {
  Info,
} from 'lucide-react';
import { HELPLINES_DATA } from '../data/helplines';
import Breadcrumbs from '../components/common/Breadcrumbs';
import HelplineCard from '../components/help/HelplineCard';

export default function GovernmentHelp() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Government Help & Helplines' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
          Verified Official Directory
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Government Helplines & Reporting Portals
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Verified Indian government channels for cyber financial fraud, emergency police support, telecom spam reporting, and banking grievance redressal.
        </p>
      </div>

      {/* MANDATORY ACCURACY DISTINCTION BANNER */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-blue-800 space-y-4">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Info className="w-4 h-4 text-amber-300" />
          <span>Understanding Where to Report What</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <h4 className="font-bold text-white text-base text-red-300">
              If You Have Already Lost Money / Credentials
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Use the <strong>National Cyber Crime Reporting Portal (cybercrime.gov.in)</strong> and dial <strong>1930</strong> immediately. This triggers the financial freeze mechanism across Indian banks.
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <h4 className="font-bold text-white text-base text-teal-300">
              If You Received a Suspect Call / SMS (No Money Lost)
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Report the fraudulent communication to <strong>Chakshu on Sanchar Saathi (sancharsaathi.gov.in/sfc/)</strong>. This enables telecom operators and the government to disconnect the scammer's phone number and IMEI.
            </p>
          </div>
        </div>
      </div>

      {/* VERIFIED HELPLINE CARDS GRID */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Official Indian Statutory Helplines & Portals
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Last Verified: <strong>October 2026</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HELPLINES_DATA.map((item) => (
            <HelplineCard key={item.id} helpline={item} />
          ))}
        </div>
      </section>

      {/* ESCALATION PROCESS: WHAT HAPPENS AFTER REPORTING */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Citizen Journey
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            What Happens After You Dial 1930 or File on Cybercrime.gov.in?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-700">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-base">Ticket Generation & SMS Alert</h4>
            <p className="text-slate-600 leading-relaxed">
              You receive an SMS containing an official Acknowledgement Number (Complaint ID) on your registered mobile number from the National Cyber Crime Reporting Portal.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-base">CFCFRMS Bank Escalation</h4>
            <p className="text-slate-600 leading-relaxed">
              The I4C system coordinates automated API alerts to the designated fraud nodal officers of the origin bank and all subsequent beneficiary banks to put a temporary hold on the siphoned funds.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-base">Local Cyber Police Jurisdiction</h4>
            <p className="text-slate-600 leading-relaxed">
              The complaint is forwarded to your local state cyber police cell for formal FIR registration, legal evidence verification, and court order proceedings for fund release.
            </p>
          </div>
        </div>
      </section>

      {/* DISCLAIMER BOX */}
      <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-2">
        <h4 className="font-bold text-slate-900 flex items-center gap-2">
          <span>Independent Platform Disclaimer</span>
        </h4>
        <p className="leading-relaxed">
          CyberSuraksha is an independent community awareness project. We do not represent any government department, ministry, or police force. We do not file complaints or accept user data. All reporting actions link directly to verified official government portals (cybercrime.gov.in, sancharsaathi.gov.in, rbi.org.in).
        </p>
      </div>
    </div>
  );
}

