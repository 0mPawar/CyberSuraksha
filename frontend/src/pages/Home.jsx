import { Link } from 'react-router-dom';
import {
  Shield,
  ShieldAlert,
  ArrowRight,
  PhoneCall,
  ExternalLink,
  Lock,
  Smartphone,
  CreditCard,
  UserCheck,
  AlertOctagon,
  Search,
  FileText,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { OFFICIAL_LINKS, HELPLINE_NUMBERS } from '../utils/externalLinks';
import AlertBanner from '../components/common/AlertBanner';
import SectionHeading from '../components/common/SectionHeading';

export default function Home() {
  const categories = [
    { title: 'UPI & Payment Fraud', icon: CreditCard, count: '3 Guides', slug: 'upi-fraud', color: 'from-blue-500 to-indigo-600' },
    { title: 'Digital Arrest & Coercion', icon: AlertOctagon, count: '3 Guides', slug: 'digital-arrest', color: 'from-red-500 to-rose-600' },
    { title: 'Part-Time Job & Task Scams', icon: FileText, count: '2 Guides', slug: 'job-scam', color: 'from-amber-500 to-orange-600' },
    { title: 'Stock & Investment Scams', icon: Smartphone, count: '2 Guides', slug: 'investment-fraud', color: 'from-emerald-500 to-teal-600' },
    { title: 'Phishing & Fake KYC Alerts', icon: Lock, count: '3 Guides', slug: 'phishing', color: 'from-purple-500 to-indigo-600' },
    { title: 'AI Deepfakes & Impersonation', icon: UserCheck, count: '2 Guides', slug: 'deepfake-scam', color: 'from-cyan-500 to-blue-600' },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Community Digital Safety Initiative</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Stay Alert. Stay Safe.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-amber-300">
                  Stay Surakshit.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Understand online scams, recognize warning signs, protect your digital life, and learn verified next steps if cyber fraud happens to you. No login, no jargon, 100% verified Indian public guidance.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/scams"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition transform active:scale-95"
                >
                  <Search className="w-4 h-4" />
                  <span>Explore Scam Library</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link
                  to="/if-you-are-scammed"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white font-bold text-sm sm:text-base border border-red-500/40 shadow-lg shadow-red-600/20 transition transform active:scale-95"
                >
                  <ShieldAlert className="w-4 h-4" />
                  <span>I've Been Scammed — What Now?</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>22+ Indian Scam Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Verified 1930 / I4C Workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>No Registration Required</span>
                </div>
              </div>
            </div>

            {/* Hero Right Security Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Visual Glassmorphic Security Dashboard Widget */}
                <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">Digital Suraksha Shield</h4>
                        <span className="text-[11px] text-emerald-400 font-medium">Official Reporting Network</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-700">
                      Live Protocol
                    </span>
                  </div>

                  {/* Immediate Hotline Badge */}
                  <div className="bg-gradient-to-r from-red-950/70 to-rose-950/70 border border-red-500/30 rounded-2xl p-4 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider block">
                        National Cyber Helpline
                      </span>
                      <span className="text-2xl font-black text-white">1930</span>
                      <p className="text-[11px] text-red-200 mt-0.5">Toll-free 24/7 across India</p>
                    </div>
                    <a
                      href={`tel:${HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}`}
                      className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow flex items-center gap-1.5 transition active:scale-95"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Dial Now</span>
                    </a>
                  </div>

                  {/* Quick rule alert */}
                  <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-700/80 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-amber-400 font-bold">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>UPI Safety Golden Rule</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      You ONLY enter your UPI PIN to <strong>DEBIT</strong> money. Entering your PIN NEVER receives or claims money!
                    </p>
                  </div>

                  {/* Verification link */}
                  <a
                    href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-700/80 text-xs font-semibold text-blue-400 transition"
                  >
                    <span>Official Portal: cybercrime.gov.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: URGENT HELP BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <AlertBanner />
      </section>

      {/* SECTION 3: EXPLORE SCAM CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Scam Directory"
          title="Explore Scam Categories"
          subtitle="Learn how cyber fraud syndicates operate in India, recognize early red flags, and protect your loved ones."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={`/scams/${cat.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 flex items-start gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition truncate">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">
                    {cat.count} • View Guide
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all mt-1" />
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/scams"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow transition"
          >
            <span>View All 22+ Scam Guides in Library</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 4: HOW SCAMS WORK */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Psychology of Fraud"
            title="How Scammers Operate: The 4-Stage Pattern"
            subtitle="Most digital scams follow a deliberate cycle of deception and emotional manipulation. Recognizing this sequence helps you break the chain."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-black text-lg flex items-center justify-center">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">Initial Contact</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The fraudster reaches the victim through an unsolicited phone call, WhatsApp text, phishing SMS, sponsored search ad, or social media message.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 font-black text-lg flex items-center justify-center">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">Manipulation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The scammer creates intense artificial urgency, panic (threat of digital arrest, SIM disconnection), excitement (lottery prize), or trust (NRI suitor).
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-black text-lg flex items-center justify-center">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">Coerced Action</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The victim is pushed to disclose an OTP, approve a UPI collect request, scan a QR code, install a remote screen-sharing tool, or wire money.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 font-black text-lg flex items-center justify-center">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900">Exploitation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Money is immediately transferred to mule accounts, credentials are stolen, or further extortion begins. The fraudster severs contact.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 max-w-2xl mx-auto text-center">
            <strong>Important note:</strong> Different cyber syndicates use variations of these tactics. Not every scam follows this exact sequence, but breaking the chain at Step 2 (by pausing and verifying) prevents the fraud.
          </div>
        </div>
      </section>

      {/* SECTION 5: LEARN HOW TO STAY SAFE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Practical Defense"
          title="Core Digital Safety Habits"
          subtitle="Simple, non-negotiable security habits that shield you and your family from over 90% of online attacks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Never Share OTPs or PINs</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No genuine bank official, police officer, or telecom executive will ever ask you for your PIN, password, or OTP.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Verify Payment Requests</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Entering your UPI PIN authorizes money leaving your account. To receive money, nobody needs you to enter a PIN or scan a QR code.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No Unknown Remote Apps</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never install AnyDesk, TeamViewer, QuickSupport, or RustDesk at the request of an unverified caller or customer support number.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Pause Under Urgency</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When a caller threatens immediate arrest, electricity cutoff, or account closure within 2 hours, hang up and verify independently.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/stay-safe"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
          >
            <span>Open Complete Prevention Guide & Checklist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 6: WHAT SHOULD I DO NOW? (3 Quick Paths) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Immediate Incident Triage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              What Should I Do Right Now?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Select your specific emergency situation to follow exact, verified recovery steps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Path 1 */}
            <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 flex flex-col justify-between space-y-4 hover:border-red-500/50 transition">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">I Lost Money</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unauthorized UPI debit, credit card transaction, or money sent to an investment/job scam.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                  <li>• Call <strong>1930</strong> immediately</li>
                  <li>• Contact your bank to freeze UPI/cards</li>
                  <li>• File on <strong>cybercrime.gov.in</strong></li>
                </ul>
              </div>
              <Link
                to="/if-you-are-scammed#lost-money"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition"
              >
                <span>Follow Financial Steps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Path 2 */}
            <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 flex flex-col justify-between space-y-4 hover:border-amber-500/50 transition">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">I Clicked a Link / Gave OTP</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Entered net banking credentials on a fake site, gave an OTP, or installed AnyDesk/TeamViewer.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                  <li>• Disconnect Wi-Fi and mobile data</li>
                  <li>• Change passwords from a separate device</li>
                  <li>• Notify bank to block net banking</li>
                </ul>
              </div>
              <Link
                to="/if-you-are-scammed#compromised-device"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition"
              >
                <span>Follow Security Steps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Path 3 */}
            <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 flex flex-col justify-between space-y-4 hover:border-blue-500/50 transition">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Blackmail / Impersonation</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Facing digital arrest video calls, loan app harassment, morphed photos, or clone account fraud.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                  <li>• DO NOT pay extortion money</li>
                  <li>• Preserve screenshots and numbers</li>
                  <li>• Dial 112 / 1930 and report to police</li>
                </ul>
              </div>
              <Link
                to="/if-you-are-scammed#blackmail-threats"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition"
              >
                <span>Follow Extortion Steps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: OFFICIAL VERIFIED RESOURCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Authorities"
          title="Official Government & Regulatory Channels"
          subtitle="CyberSuraksha directly points citizens to accredited Indian statutory and investigative bodies."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              Reporting Portal
            </span>
            <h4 className="font-bold text-slate-900 text-sm">National Cybercrime Portal</h4>
            <p className="text-xs text-slate-500">Ministry of Home Affairs & I4C central incident response portal.</p>
            <a
              href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline pt-1"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Telecom Portal
            </span>
            <h4 className="font-bold text-slate-900 text-sm">Sanchar Saathi & Chakshu</h4>
            <p className="text-xs text-slate-500">Report suspect fraud calls, fake SMS, and check registered SIMs.</p>
            <a
              href={OFFICIAL_LINKS.CHAKSHU}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline pt-1"
            >
              <span>sancharsaathi.gov.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              Central Bank
            </span>
            <h4 className="font-bold text-slate-900 text-sm">Reserve Bank of India (RBI)</h4>
            <p className="text-xs text-slate-500">Banking ombudsman escalation, customer zero-liability framework.</p>
            <a
              href={OFFICIAL_LINKS.RBI_AWARENESS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline pt-1"
            >
              <span>rbi.org.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
              Cyber Agency
            </span>
            <h4 className="font-bold text-slate-900 text-sm">CERT-In</h4>
            <p className="text-xs text-slate-500">National cyber threat advisories and malware cleaning center.</p>
            <a
              href={OFFICIAL_LINKS.CERT_IN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:underline pt-1"
            >
              <span>cert-in.org.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: ABOUT THE PLATFORM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Our Mission: Accessible Digital Safety for Every Indian
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            CyberSuraksha is a Community Engagement Project (CEP) built to simplify complex cybersecurity concepts, explain scam psychology in plain language, and help citizens quickly find verified official remedies.
          </p>
          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow transition"
            >
              <span>Learn About CyberSuraksha</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

