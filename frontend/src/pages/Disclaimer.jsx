import { ExternalLink } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { OFFICIAL_LINKS } from '../utils/externalLinks';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Legal & Educational Disclaimer' }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
          Platform Terms & Scope
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Educational & Legal Disclaimer
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Please read this notice regarding the informational nature and boundaries of CyberSuraksha.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">
        {/* Clause 1 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">
              1
            </span>
            <span>Non-Governmental Independence</span>
          </h2>
          <p>
            CyberSuraksha is an independent, non-commercial public awareness platform developed as a Community Engagement Project (CEP). CyberSuraksha is <strong>NOT</strong> affiliated with, operated by, sponsored by, or endorsed by the Ministry of Home Affairs (MHA), Indian Cyber Crime Coordination Centre (I4C), Reserve Bank of India (RBI), CERT-In, Telecom Regulatory Authority of India (TRAI), or any State Police or Government department. We do not display the State Emblem of India or claim official authority.
          </p>
        </div>

        {/* Clause 2 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">
              2
            </span>
            <span>Educational Nature Only</span>
          </h2>
          <p>
            All content, including scam library guides, warning signs, checklist items, and response workflows, is provided strictly for general educational and informational purposes. It is intended to increase cyber literacy and help citizens identify verified official channels. Content on this website does not constitute legal, financial, or technical cybersecurity professional advice.
          </p>
        </div>

        {/* Clause 3 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">
              3
            </span>
            <span>No Complaint Filing or Case Handling</span>
          </h2>
          <p>
            CyberSuraksha does not accept complaints, file FIRs, investigate cybercrimes, trace telephone numbers, liaise with banks, or freeze bank accounts on behalf of users. For any genuine incident reporting, users must directly access the official National Cyber Crime Reporting Portal at{' '}
            <a
              href={OFFICIAL_LINKS.CYBERCRIME_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>{' '}
            or contact India's cybercrime helpline at <strong>1930</strong>.
          </p>
        </div>

        {/* Clause 4 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">
              4
            </span>
            <span>No Recovery or Investigation Guarantee</span>
          </h2>
          <p>
            CyberSuraksha makes no representations, warranties, or guarantees that following our educational guidance will result in the recovery of stolen funds, the freezing of fraudulent accounts, or the resolution of criminal cases. Outcomes of cyber financial complaints depend solely on official police investigations, bank dispute processes, and judicial proceedings under Indian law.
          </p>
        </div>

        {/* Clause 5 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">
              5
            </span>
            <span>Currency of Information</span>
          </h2>
          <p>
            Government regulations, banking dispute guidelines, helpline numbers, and portal procedures may be updated by authorities from time to time. While we strive to maintain our content verified up to date (last reviewed: <strong>October 2026</strong>), visitors should verify specific escalation rules directly on the official websites of the relevant statutory regulators (RBI, TRAI, DoT, MeitY).
          </p>
        </div>
      </div>
    </div>
  );
}

