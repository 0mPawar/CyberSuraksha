import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeading from '../components/common/SectionHeading';

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: 'How Scams Work' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
          Scam Mechanics & Fraud Architecture
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          How Online Scams Actually Work
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Behind sophisticated cyber fraud lies organized infrastructure: psychological manipulation scripts, spoofed communications, and networks of mule bank accounts.
        </p>
      </div>

      {/* 4 STAGES DEEP DIVE */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
        <SectionHeading
          badge="The Anatomy of Fraud"
          title="The 4-Step Fraud Cycle"
          subtitle="Understanding each stage reveals where you can interrupt the scam before financial damage occurs."
          align="left"
        />

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="text-xl font-bold text-blue-950">Step 1: The Initial Hook (Contact)</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Scammers cast wide digital nets using automated robocalls, bulk phishing SMS, sponsored search ads, or social media outreach. They do not need everyone to respond; they rely on the small percentage of individuals who happen to be expecting a courier, awaiting an electricity bill, or looking for part-time income.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-black flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="text-xl font-bold text-purple-950">Step 2: Psychological Hijacking (Manipulation)</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Once contact is made, the scammer bypasses logical thinking by triggering intense emotional arousal:
            </p>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2 pl-4 list-disc">
              <li><strong>Acute Fear / Authority:</strong> "CBI / Police warrant issued against your Aadhaar; stay on video call or face immediate arrest."</li>
              <li><strong>Time Pressure:</strong> "Your bank account / SIM will be terminated within 2 hours unless you click now."</li>
              <li><strong>Greed / Euphoria:</strong> "Congratulations! You won ₹25 lakh lottery or 40% guaranteed daily return on investment."</li>
              <li><strong>Isolation:</strong> "Do not disclose this secret investigation to your family or advocate."</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-black flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="text-xl font-bold text-amber-950">Step 3: The Critical Action (Compromise)</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              While the victim is disoriented by emotion, the scammer directs a specific, irreversible technical action:
            </p>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2 pl-4 list-disc">
              <li>Typing your secret UPI PIN into a "Collect Money" prompt.</li>
              <li>Reading out a 6-digit SMS OTP received on your phone.</li>
              <li>Installing AnyDesk / QuickSupport and sharing the 9-digit session code.</li>
              <li>Transferring funds to a "Secret Government Audit Account" or "Trading Pool".</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-red-50/60 border border-red-200 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm">
                4
              </span>
              <h3 className="text-xl font-bold text-red-950">Step 4: Rapid Extraction (Mule Laundering)</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              The moment funds land in the fraudster's initial bank account, automated bots or human runners split and route the money through 4 to 8 successive "mule accounts" (rented accounts belonging to students, unemployed youth, or small merchants) within minutes, before withdrawing cash at ATMs or converting into cryptocurrency (USDT) on overseas exchanges.
            </p>
          </div>
        </div>
      </section>

      {/* WHY VICTIM BLAMING MUST STOP */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Why "Smart People" Also Fall for Scams
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          A common misconception is that only gullible or uneducated individuals fall for scams. In reality, cyber syndicates employ behavioral psychologists, professional actors, and advanced software tools. Anyone under stress, fatigue, or acute emotional surprise can make an impulsive mistake.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
            <h4 className="font-bold text-amber-300 text-base">Cognitive Overload</h4>
            <p className="text-slate-300 leading-relaxed">
              When someone yells that you are facing 10 years in prison for narcotics smuggling, your adrenaline spikes and your prefrontal cortex (rational decision-making) shuts down.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
            <h4 className="font-bold text-blue-300 text-base">Familiar Contexts</h4>
            <p className="text-slate-300 leading-relaxed">
              Scams mimic everyday routines you perform without thinking: checking an online order, approving a payment prompt, or tapping an SMS notification.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
            <h4 className="font-bold text-emerald-300 text-base">The Golden Defense: The 5-Minute Pause</h4>
            <p className="text-slate-300 leading-relaxed">
              Simply forcing a 5-minute pause — putting the phone down, drinking a glass of water, or asking a family member — breaks the psychological spell and prevents fraud.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center pt-4">
        <Link
          to="/scams"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow transition"
        >
          <span>Explore Specific Scam Case Studies in Library</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

