import {
  CreditCard,
  MessageSquare,
  PhoneCall,
  Briefcase,
  Heart,
  CheckCircle2,
} from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SafetyChecklist from '../components/safety/SafetyChecklist';

export default function StaySafe() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Stay Safe Prevention Guide' }]} />

      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          Comprehensive Prevention Manual
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          How to Stay Safe Online
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Practical, proven defense rules for digital payments, mobile apps, social media, and family safety in India.
        </p>
      </div>

      {/* INTERACTIVE CHECKLIST WIDGET */}
      <section>
        <SafetyChecklist />
      </section>

      {/* SECTION 1: DIGITAL PAYMENTS */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Rulebook 01
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Digital Payment Safety (UPI, Cards & NetBanking)
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>UPI PIN is exclusively for PAYING out money</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Under no circumstance does entering your UPI PIN receive or accept money into your bank account.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Scanning a QR Code is strictly for SENDING funds</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Never scan a QR code sent over WhatsApp or email to receive a refund, reward, or cashback. To receive funds, share only your UPI VPA or phone number.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verify recipient names on the payment screen</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Before approving any UPI transaction, check the verified merchant or individual name and exact rupee amount displayed on your app screen.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Set daily transaction limits</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Use your bank app to lower daily limits for international usage, online debit card e-commerce, and contactless tap-and-pay transactions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: MESSAGES & LINKS */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
              Rulebook 02
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Messages, SMS & Deceptive Links (Smishing & Phishing)
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Inspect the sender ID and domain name</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Legitimate Indian bank alerts come from registered alphanumeric headers (e.g., VM-HDFCBK, AD-SBIIN). If an SMS comes from a 10-digit number (+91-98xxxxxx), it is fraudulent.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Do not trust official logos on webpages</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Any scammer can copy-paste a high-resolution logo of SBI, HDFC, or India Post onto a fake website. Always verify the actual URL in the browser address bar.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Never download attachments or APK files</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Do not open files with extensions like `.apk`, `.exe`, or `.zip` sent over WhatsApp or SMS claiming to be invoices, tickets, or KYC update forms.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Report fraud messages to Chakshu</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Forward suspected scam SMS to 1909 or report them directly on the Department of Telecommunications Chakshu portal (sancharsaathi.gov.in/sfc/).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CALLS & IMPERSONATION */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Rulebook 03
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Suspicious Calls & Authority Impersonation
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>"Digital Arrest" does NOT exist in Indian law</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Police, CBI, ED, and courts issue formal physical summons under CrPC / BNSS. They NEVER conduct interrogations or demand fund transfers over Skype/WhatsApp video calls.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Hang up and dial back on official numbers</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              If an incoming caller claims your courier is seized or your SIM is being blocked, end the call immediately. Look up the verified official website or card helpline and dial them yourself.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Caller ID spoofing exists</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Scammers can falsify the number that appears on your phone screen to look like a police station or bank. Never accept incoming caller ID display as proof of genuine identity.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>No government verification escrow accounts</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              No genuine agency ever asks you to transfer funds to a "safe government account" or "RBI audit account" to clear your name. Any such request is a crime.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: EMPLOYMENT & INVESTMENT */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Rulebook 04
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Employment, Part-Time Jobs & Stock Investments
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Never pay money to get a job or task payout</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Legitimate employers pay you for your work. Any job requiring you to deposit money for "VIP tasks", "materials", or "registration" is an advance-fee fraud.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Guaranteed stock returns are always fraudulent</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              SEBI regulations prohibit anyone from promising guaranteed stock market returns. WhatsApp and Telegram stock advisory groups are unregulated fraud channels.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Invest only through SEBI-registered brokers</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Never transfer investment funds into personal savings bank accounts belonging to private individuals. Check broker registration on sebi.gov.in.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Beware the "Withdrawal Fee" trap</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              If an investment portal demands that you pay "30% tax" or a "conversion deposit" before releasing your profits, stop immediately. Your money is already trapped.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAMILY & VULNERABLE USERS */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/30">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-300">
              Specialized Care
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Protecting Family, Senior Citizens & First-Time Internet Users
            </h2>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          Older adults, students, and first-time smartphone users are frequently targeted by cyber syndicates. We can protect our families through respectful, supportive communication without blame or condescension:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <h4 className="font-bold text-white text-base">For Senior Citizens & Parents</h4>
            <ul className="text-slate-300 space-y-2 text-xs">
              <li>• Help parents set a low daily UPI payment limit on their banking app.</li>
              <li>• Explain that bank managers never call asking for OTPs or pension verification codes.</li>
              <li>• Encourage parents to call you before making any unexpected digital transfer over ₹1,000.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <h4 className="font-bold text-white text-base">For Students & Young Adults</h4>
            <ul className="text-slate-300 space-y-2 text-xs">
              <li>• Beware of fake work-from-home jobs, paid video like tasks, and gaming coin giveaways.</li>
              <li>• Never rent or sell your bank account, debit card, or SIM card to anyone as a "crypto mule".</li>
              <li>• Never share private photos or engage in video calls with strangers on dating or social platforms.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <h4 className="font-bold text-white text-base">Create a "Family Safe Word"</h4>
            <ul className="text-slate-300 space-y-2 text-xs">
              <li>• Agree on a private secret code word known only to your immediate household.</li>
              <li>• If an AI voice cloning caller claims an accident, ask for the secret safe word.</li>
              <li>• Always hang up and dial the child or family member directly on their known phone.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

