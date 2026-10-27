import { useState } from 'react';
import {
  ShieldAlert,
  CreditCard,
  Key,
  Smartphone,
  AlertTriangle,
  FileCheck,
  CheckCircle2,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { OFFICIAL_LINKS } from '../utils/externalLinks';
import Breadcrumbs from '../components/common/Breadcrumbs';
import AlertBanner from '../components/common/AlertBanner';

export default function IfScammed() {
  const [activeTab, setActiveTab] = useState('money');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'If You Are Scammed' }]} />

      {/* Emergency Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 border border-red-200 text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-red-600" />
          <span>Immediate Crisis Guidance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          If You Have Been Scammed: Immediate Next Steps
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Take a deep breath. Scammers use psychological tricks designed to confuse even seasoned professionals. What matters right now is immediate, calm action to protect your accounts, preserve evidence, and notify authorities.
        </p>
      </div>

      {/* Urgent 1930 / cybercrime.gov.in Banner */}
      <AlertBanner />

      {/* Triage Tabs */}
      <div className="bg-white rounded-3xl border border-slate-200 p-2 shadow-sm flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('money')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
            activeTab === 'money'
              ? 'bg-red-600 text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>1. Money Was Lost</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('credentials')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
            activeTab === 'credentials'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Key className="w-4 h-4" />
          <span>2. OTP / Password Shared</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('device')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
            activeTab === 'device'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Smartphone className="w-4 h-4" />
          <span>3. App / Link Installed</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('threats')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
            activeTab === 'threats'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>4. Threatened / Blackmailed</span>
        </button>
      </div>

      {/* TAB CONTENT: 1. MONEY LOST */}
      {activeTab === 'money' && (
        <section id="lost-money" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Emergency Financial Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Step 1: If Money Has Been Transferred or Debited
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cyber financial fraud operates through chains of mule accounts. Quick reporting allows banks and police to freeze the beneficiary account before the funds are withdrawn at an ATM or converted to cryptocurrency.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Contact 1930 immediately (National Cyber Financial Fraud Helpline)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Have your bank account number, mobile number linked with the bank, transaction ID / UTR number, and time of debit ready. The operator registers your complaint directly on the I4C CFCFRMS system, triggering an automated alert to the receiving bank.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  File an official complaint on https://cybercrime.gov.in/
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Log on to the National Cyber Crime Reporting Portal and select <strong>"Report Cyber Financial Fraud"</strong>. Fill in beneficiary details, upload transaction receipts/screenshots, and download the formal acknowledgement slip for future reference.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Notify your bank / card issuer immediately through official channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Call the verified customer care number printed on the back of your debit/credit card or visit your home branch. Formally report the unauthorized transaction, request blocking of further electronic debits, and obtain a written dispute complaint reference number.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                4
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Preserve transaction evidence securely
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Save bank account statements, debit SMS texts, screenshots of UPI confirmation screens showing UTR numbers, caller phone numbers, and chat histories. Do not delete chats.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 leading-relaxed">
              <strong>Transparent Reality:</strong> Prompt reporting significantly maximizes the probability of freezing funds. However, neither CyberSuraksha, the police, nor your bank can guarantee 100% fund recovery, especially if the money has already been withdrawn or moved out of regulated Indian banking channels. Never trust anyone demanding a fee to "recover" your funds.
            </div>
          </div>
        </section>
      )}

      {/* TAB CONTENT: 2. OTP / PASSWORD DISCLOSED */}
      {activeTab === 'credentials' && (
        <section id="compromised-credentials" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Credential Compromise Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Step 2: If an OTP, Password, or PIN Was Disclosed
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              If you verbally gave an OTP or typed your NetBanking password on an unverified link, act quickly to lock down account access before scammers initiate transactions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Change affected passwords from a trusted, clean device
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Use another computer or family member's phone (not the device where the scam happened) to change your internet banking passwords, UPI PIN, and registered email password immediately.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Contact your bank immediately to freeze internet banking and hotlist cards
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Instruct the bank to temporarily lock your NetBanking username and hotlist debit/credit cards linked to that account.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Revoke active sessions and review security settings
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In your Google, Apple, WhatsApp, or Microsoft account settings, go to "Security" → "Manage Devices" and click <strong>"Sign out of all other sessions"</strong>. Enable an authenticator app (TOTP) for two-factor authentication.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>CRITICAL WARNING:</strong> Scammers may call you back pretending to be "Fraud Investigators" or "Bank Anti-Fraud Officers" asking for "one last OTP to cancel the fraud". <strong>NEVER disclose any OTP or PIN under any circumstances!</strong>
            </p>
          </div>
        </section>
      )}

      {/* TAB CONTENT: 3. SUSPICIOUS APP INSTALLED */}
      {activeTab === 'device' && (
        <section id="compromised-device" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Device Compromise Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Step 3: If a Suspicious Application or APK Was Installed
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              If you installed AnyDesk, TeamViewer QuickSupport, RustDesk, or a third-party APK file (like `KYC_Update.apk`), the scammer may have real-time visibility into your screen and SMS.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Disconnect from the internet immediately
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Turn off Wi-Fi and Mobile Data instantly, or toggle <strong>Airplane Mode ON</strong>. This cuts off the remote attacker's connection and prevents remote control or data exfiltration.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  DO NOT open banking or payment apps on the affected device
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Do not type passwords, unlock UPI apps, or check balances on that phone. Use an independent phone or laptop to contact your bank.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Uninstall the application safely
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Go to Settings → Apps → Installed Apps. Find the suspicious application, revoke all permissions (Accessibility, Notification access, SMS), and click Uninstall. If the app hides its icon or prevents uninstallation, restart the phone in <strong>Safe Mode</strong> to remove it.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                4
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Seek professional technical help before resetting
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Do not hastily factory-reset if you still need to preserve evidence (such as malware APK names, call recordings, or chat logs for the police complaint). Take photographs of the screen from another phone before resetting.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB CONTENT: 4. THREATENED / BLACKMAILED */}
      {activeTab === 'threats' && (
        <section id="blackmail-threats" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Extortion & Intimidation Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Step 4: If You Are Being Blackmailed, Coerced, or Threaten with Digital Arrest
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Extortionists (including loan app agents, sextortion syndicates, and fake police video callers) weaponize social fear and shame. Remember: <strong>you are the victim of a coordinated criminal offense. You are not at fault.</strong>
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  DO NOT pay extortion money
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Paying money does NOT make extortionists delete files or stop calling. Paying merely confirms that the victim is intimidated, leading to endless rounds of higher monetary demands.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Preserve all messages, phone numbers, and profile links
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Take clear screenshots of threatening WhatsApp chats, caller numbers, extortion amounts demanded, and social media account handles. Store them in a secure folder.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Lock down and privatize your social accounts
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Switch your Instagram, Facebook, and LinkedIn profiles to private mode. Hide your friend/follower lists and block the extortionist on all channels.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                4
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  Report to Cyber Crime Police or Dial 112 / 1930
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lodge an urgent complaint on https://cybercrime.gov.in/ (specialized category for Cyber Harassment / Extortion / Women & Child Safety). If there is any immediate physical threat to your safety, call National Emergency 112 immediately.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STEP 5: EVIDENCE PRESERVATION CHECKLIST */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            <FileCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Essential Documentation</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Evidence Preservation Checklist
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Keep this evidence organized before filing complaints with police, banks, or cyber cells:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Bank account statements & transaction receipts with UTR reference numbers</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Screenshots of payment confirmation screens from UPI applications (GPay, PhonePe, Paytm)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Full screenshots of WhatsApp / Telegram chats showing the contact number / username</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Call history logs showing incoming scam phone numbers and exact timestamps</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Website addresses (URLs), domain names, or fake app download links received</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Complaint ticket numbers registered with your bank and the 1930 acknowledgement SMS</span>
          </div>
        </div>
      </section>

      {/* IMPORTANT BOUNDARY DISCLAIMER */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-400" />
          <span>Notice on CyberSuraksha's Role</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          CyberSuraksha is purely an educational and awareness resource. We do not register complaints on behalf of citizens, track transactions, contact financial institutions, or guarantee financial recovery. For all official complaint filing and law enforcement action, please use the verified government portal at{' '}
          <a
            href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-bold hover:underline"
          >
            cybercrime.gov.in
          </a>{' '}
          or dial <strong>1930</strong>.
        </p>
      </div>
    </div>
  );
}

