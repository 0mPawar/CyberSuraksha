import {
  Shield,
  Target,
  Compass,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'About CyberSuraksha' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-600 shadow-sm">
          <Shield className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
          Community Engagement Project (CEP)
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          About CyberSuraksha
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          An open digital safety and scam-awareness platform designed to help Indian citizens navigate the digital world securely and confidently.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            "To make cyber-safety knowledge understandable and accessible so people can recognize digital threats, make safer decisions, and find the right official support when they need it."
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            "A more informed and digitally resilient community where people can use technology with greater confidence and awareness."
          </p>
        </div>
      </div>

      {/* WHY AWARENESS MATTERS */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <h2 className="text-2xl font-black text-slate-900">
          Why Cyber Awareness Matters Today
        </h2>
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            India is experiencing an unprecedented digital revolution. Millions of citizens use Unified Payments Interface (UPI) every second for street groceries, train tickets, bill payments, and investments. Mobile phones have become primary lifelines for education, commerce, and communication.
          </p>
          <p>
            However, digital literacy has not grown at the same pace as digital payment adoption. Modern cyber syndicates exploit psychological vulnerabilities — fear, urgency, loneliness, and confusion — rather than hacking complex technical firewalls. When victims are deceived, shame and stigma often prevent them from reporting the crime in time.
          </p>
          <p>
            CyberSuraksha was developed to break this silence. By demystifying how scammers operate and explaining response steps in simple, respectful language, we aim to transform panic into decisive protective action.
          </p>
        </div>
      </section>

      {/* WHO THIS PLATFORM IS FOR */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Intended Audience
          </span>
          <h2 className="text-2xl font-bold text-white">
            Designed for Every Indian Citizen
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
            <h4 className="font-bold text-blue-300">Students & Youth</h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              Navigating part-time job offers, task scams, social media identity theft, and gaming transactions safely.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
            <h4 className="font-bold text-teal-300">Working Professionals</h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              Shielding corporate email accounts, understanding investment/trading fraud, and avoiding credential harvesting.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
            <h4 className="font-bold text-amber-300">Parents & Families</h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              Protecting household finances, recognizing AI voice cloning calls, and guiding kids through safe internet habits.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
            <h4 className="font-bold text-rose-300">Senior Citizens</h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              Jargon-free guidance on pension updates, fake KYC calls, digital arrest hoaxes, and remote access apps.
            </p>
          </div>
        </div>
      </section>

      {/* VERIFICATION & EDITORIAL STANDARDS */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <h2 className="text-2xl font-black text-slate-900">
          Our Editorial & Verification Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ground Truth from Official Regulators</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Every procedure, helpline number, and legal advisory is cross-referenced with official portals of the Ministry of Home Affairs (I4C), Reserve Bank of India, Department of Telecommunications, CERT-In, and NPCI.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Jargon, Zero Fearmongering</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We translate technical terms (like MFA, APK, VPA, Phishing) into relatable Indian everyday contexts. We never blame victims or use sensationalist panic tactics.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Dated Reviews & Verified URLs</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              All guides indicate their last-reviewed dates. All outbound links point strictly to genuine, secure governmental and banking domains.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>No Commercial Motive or Data Collection</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              CyberSuraksha does not show advertisements, sell antivirus products, promote private lawyers, or collect user passwords, names, or banking details.
            </p>
          </div>
        </div>
      </section>

      {/* SCOPE & LIMITATIONS */}
      <section className="p-6 sm:p-8 rounded-3xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-3">
        <h3 className="font-bold text-amber-900 flex items-center gap-2 text-base">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Scope and Limitations</span>
        </h3>
        <p className="leading-relaxed">
          CyberSuraksha is an informational awareness resource developed as part of a Community Engagement Project (CEP). It does not provide legal representation, commercial cybersecurity audits, private investigation services, or direct liaison with law enforcement. To lodge legal complaints, citizens must use official government portals (cybercrime.gov.in / 1930 / 112).
        </p>
      </section>
    </div>
  );
}

