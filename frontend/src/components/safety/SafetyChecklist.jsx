import { useState } from 'react';
import { CheckSquare, Square, ShieldCheck, RefreshCw } from 'lucide-react';

const CHECKLIST_ITEMS = [
  {
    id: 'upi-pin',
    category: 'Payments',
    title: 'UPI PIN is for PAYING only',
    description: 'I know that entering my UPI PIN authorizes debit of money, and never receives money.',
  },
  {
    id: 'no-qr-receive',
    category: 'Payments',
    title: 'Never scan QR codes to receive funds',
    description: 'I understand that scanning a QR code is strictly for sending payments, never receiving refunds.',
  },
  {
    id: 'no-otp-sharing',
    category: 'Passwords & OTP',
    title: 'Never share OTPs verbally or by text',
    description: 'I never disclose one-time passwords, even if the caller claims to be from my bank or police.',
  },
  {
    id: 'mfa-enabled',
    category: 'Passwords & OTP',
    title: 'Multi-Factor Authentication (MFA) enabled',
    description: 'I have enabled 2-factor authentication or an authenticator app on my email, WhatsApp, and social accounts.',
  },
  {
    id: 'no-remote-tools',
    category: 'Device Safety',
    title: 'Refuse screen-sharing apps (AnyDesk, TeamViewer)',
    description: 'I never install AnyDesk, TeamViewer, or RustDesk on the instruction of customer support agents.',
  },
  {
    id: 'verify-suspicious-calls',
    category: 'Calls & Impersonation',
    title: 'End calls threatening arrest or disconnection',
    description: 'I know "Digital Arrest" does not exist under Indian law. I hang up and verify with official channels.',
  },
  {
    id: 'check-sender-headers',
    category: 'Links & Messages',
    title: 'Inspect SMS headers and URLs',
    description: 'I verify that bank SMS come from registered alphanumeric IDs, and never click links in 10-digit mobile SMS.',
  },
  {
    id: 'no-paid-job-tasks',
    category: 'Job & Investment',
    title: 'Never pay money to unlock job earnings',
    description: 'I understand that any work-from-home job requiring deposits for "prepaid tasks" is a fraud.',
  },
  {
    id: 'aadhaar-masked',
    category: 'Identity',
    title: 'Use Masked Aadhaar & Biometric Lock',
    description: 'I provide Masked Aadhaar (showing only last 4 digits) and lock my Aadhaar biometrics on the UIDAI portal.',
  },
  {
    id: 'emergency-numbers-saved',
    category: 'Emergency Preparedness',
    title: 'Helpline 1930 & 112 saved in phone',
    description: 'I have saved India\'s cyber financial fraud helpline 1930 and emergency 112 in my contacts.',
  },
];

export const SAFETY_CHECKLIST_DATA = CHECKLIST_ITEMS;

export default function SafetyChecklist() {
  const [checkedIds, setCheckedIds] = useState(new Set());

  const toggleItem = (id) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const resetAll = () => setCheckedIds(new Set());

  const score = Math.round((checkedIds.size / CHECKLIST_ITEMS.length) * 100);

  const getScoreColor = () => {
    if (score >= 80) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 50) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-rose-600 bg-rose-50 border-rose-200';
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header & Score Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Self-Assessment Tool
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
            Interactive Digital Safety Habit Checklist
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Review your digital safety habits privately. Responses are not stored on any server.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className={`px-4 py-2.5 rounded-2xl border text-center ${getScoreColor()}`}>
            <span className="text-2xl font-black">{score}%</span>
            <span className="block text-[10px] font-bold uppercase tracking-wider">
              Safety Score
            </span>
          </div>
          {checkedIds.size > 0 && (
            <button
              type="button"
              onClick={resetAll}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
              title="Reset checklist"
              aria-label="Reset checklist"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-600 to-emerald-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${score}%` }}
        ></div>
      </div>

      {/* Checklist Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = checkedIds.has(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-2xl border cursor-pointer select-none transition-all duration-150 flex items-start gap-3.5 ${
                isChecked
                  ? 'bg-blue-50/60 border-blue-300 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-blue-600 focus:outline-none"
                aria-label={`Toggle ${item.title}`}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-blue-600 fill-blue-50" />
                ) : (
                  <Square className="w-5 h-5 text-slate-300" />
                )}
              </button>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4
                    className={`text-sm font-bold transition-colors ${
                      isChecked ? 'text-blue-900' : 'text-slate-800'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Outcome Note */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            {checkedIds.size === CHECKLIST_ITEMS.length
              ? 'Excellent! You practice all core digital safety recommendations.'
              : `You have verified ${checkedIds.size} of ${CHECKLIST_ITEMS.length} safety habits. Keep updating your habits.`}
          </span>
        </div>
      </div>
    </div>
  );
}

