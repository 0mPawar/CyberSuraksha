import { useState } from 'react';
import { X, Bot } from 'lucide-react';
import { HELPLINE_NUMBERS } from '../utils/externalLinks';

const QUICK_PROMPTS = [
  { label: 'Lost money to UPI?', answer: 'Act immediately within the "Golden Hour": Call 1930 and file a complaint on cybercrime.gov.in. Contact your bank immediately to freeze your account.' },
  { label: 'Received fake bank SMS?', answer: 'Check the sender: If it is from a 10-digit mobile number, it is a scam. Never click links or download APK files. Forward to 1909 or report on Chakshu (sancharsaathi.gov.in/sfc/).' },
  { label: 'What is Digital Arrest?', answer: '"Digital Arrest" is a complete fraud. Indian police, CBI, and courts NEVER arrest or interrogate citizens over Skype or WhatsApp video calls.' },
  { label: 'QR code to receive money?', answer: 'Myth! Scanning a QR code or entering your UPI PIN is solely for paying out money, never for receiving money.' },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste! I am your CyberSuraksha Digital Safety Guide. How can I help you protect your digital safety today?',
    },
  ]);

  const handlePrompt = (prompt) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: prompt.label },
      { sender: 'bot', text: prompt.answer },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl hover:shadow-2xl transition transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Open Cyber Safety Quick Help"
        >
          <Bot className="w-5 h-5 text-blue-200" />
          <span>Safety Guide</span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[460px] animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold">CyberSuraksha Assistant</h4>
                <span className="text-[10px] text-emerald-400 font-medium block">
                  Public Educational Guide
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Emergency Alert Strip inside Chat */}
          <div className="bg-red-50 border-b border-red-100 p-2 text-[11px] text-red-900 flex items-center justify-between gap-1 px-3">
            <span>Lost money? Call <strong>1930</strong> immediately</span>
            <a
              href={`tel:${HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD}`}
              className="text-red-700 font-bold underline shrink-0"
            >
              Call
            </a>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Quick Questions:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handlePrompt(p)}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-blue-300 text-[11px] font-medium text-slate-700 hover:text-blue-600 transition text-left"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

