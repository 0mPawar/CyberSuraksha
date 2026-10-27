import { OFFICIAL_LINKS } from '../utils/externalLinks';

export const FAQ_DATA = [
  {
    id: 'lost-money',
    category: 'Immediate Response',
    question: 'What should I do immediately after losing money to online fraud?',
    answer:
      'Act within the "Golden Hour":\n1. Immediately call the National Cyber Crime Helpline at 1930 or lodge a complaint on https://cybercrime.gov.in/.\n2. Contact your bank or payment app (GPay/PhonePe/Paytm) immediately through verified numbers to report unauthorized debit and request account freezing.\n3. Note down the transaction UTR/reference number, timestamp, sender/beneficiary account details, and screenshot of the debit message.\nPrompt reporting helps the citizen-financial-cyber-fraud-reporting-and-management-system (CFCFRMS) coordinate with banks to freeze the money in the fraudster\'s account before it is withdrawn.',
    sources: [
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
      { name: 'RBI Customer Liability Circular', url: OFFICIAL_LINKS.RBI_AWARENESS },
    ],
  },
  {
    id: 'is-1930-official',
    category: 'Helplines',
    question: 'Is 1930 the official Indian cybercrime helpline?',
    answer:
      'Yes. 1930 is the official citizen cyber fraud helpline operationalized by the Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs, Government of India. It was formerly known as 155260. It functions 24/7 across all states and union territories of India to register cyber financial complaints and coordinate with banks and payment aggregators.',
    sources: [
      { name: 'Ministry of Home Affairs - I4C', url: OFFICIAL_LINKS.I4C },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
  },
  {
    id: 'where-to-report',
    category: 'Reporting Channels',
    question: 'Where can I officially report a cybercrime in India?',
    answer:
      'Online cybercrimes must be reported directly on the official Government portal: https://cybercrime.gov.in/.\n- For financial frauds (UPI, banking, card fraud), you can also dial 1930.\n- For suspected spam or scam communications received via SMS/call/WhatsApp before losing money, report to Chakshu at https://sancharsaathi.gov.in/sfc/.\n- You can also visit your nearest local Cyber Crime Police Station or local police station to file a physical complaint / FIR.',
    sources: [
      { name: 'Official Cybercrime FAQ', url: OFFICIAL_LINKS.CYBERCRIME_FAQ },
      { name: 'Sanchar Saathi', url: OFFICIAL_LINKS.SANCHAR_SAATHI },
    ],
  },
  {
    id: 'shared-otp',
    category: 'Account Safety',
    question: 'What should I do if I accidentally shared an OTP with someone?',
    answer:
      'Act immediately:\n1. Contact your bank customer service right away and request an immediate freeze on net banking, mobile banking, and debit/credit cards.\n2. Change your internet banking password, UPI PIN, and registered email password from a secure device.\n3. If an unauthorized transaction already took place, call 1930 immediately with the transaction details and file a complaint at https://cybercrime.gov.in/.\nRemember: Legitimate bank officials or customer support staff will NEVER ask you to disclose an OTP.',
    sources: [
      { name: 'RBI Financial Awareness - OTP Security', url: OFFICIAL_LINKS.RBI_AWARENESS },
    ],
  },
  {
    id: 'recognize-fake-bank-message',
    category: 'Fraud Recognition',
    question: 'How do I recognize a fake bank message or SMS?',
    answer:
      'Check these key indicators:\n1. Sender ID: Legitimate Indian bank SMS headers consist of 6 alphanumeric characters starting with telecom codes (e.g., VM-HDFCBK, AD-SBIIN). If the message comes from a regular 10-digit mobile number (+91-98xxxxxx), it is fraudulent.\n2. Threatening Urgency: Messages claiming your account, PAN, or KYC will be "deactivated within 2 hours" are fake.\n3. Unofficial Links: Banks never send links ending in `.xyz`, `.top`, `.apk`, or shorteners like `bit.ly` asking you to enter passwords.\n4. Call to Action: Legitimate banks advise visiting the official branch or using the verified mobile banking app.',
    sources: [
      { name: 'TRAI Sender Header Regulations', url: OFFICIAL_LINKS.TRAI },
      { name: 'Sanchar Saathi Chakshu', url: OFFICIAL_LINKS.CHAKSHU },
    ],
  },
  {
    id: 'qr-code-receive-money',
    category: 'Digital Payments',
    question: 'Can scanning a QR code or entering a UPI PIN receive money into my account?',
    answer:
      'NO. Absolutely NOT. Under the Unified Payments Interface (UPI) system governed by NPCI:\n- Entering your UPI PIN is solely required to DEBIT money from your account.\n- Scanning a QR code is exclusively used to SEND money to a merchant or person.\n- You NEVER need to enter your UPI PIN or scan a QR code to receive money. To receive funds, you only need to provide your UPI ID (VPA) or registered mobile number.',
    sources: [
      { name: 'NPCI UPI Guidelines', url: OFFICIAL_LINKS.NPCI_SAFETY },
      { name: 'RBI Kehta Hai', url: OFFICIAL_LINKS.RBI_AWARENESS },
    ],
  },
  {
    id: 'recovery-agents-scam',
    category: 'Scam Traps',
    question: 'Should I pay someone who promises to recover my lost stolen cyber money?',
    answer:
      'NEVER. Anyone on Instagram, Telegram, WhatsApp, or the web claiming to be an "ethical hacker", "cyber recovery expert", or "recovery agent" who asks for an upfront fee is running a secondary scam (Recovery Scam / Advance-Fee Fraud).\nOnly designated law enforcement agencies and your bank working through the official 1930 / cybercrime.gov.in portal have the legal authority to freeze and return defrauded funds. Private third parties cannot hack back or reverse bank transactions.',
    sources: [
      { name: 'I4C Advisory on Fake Recovery Services', url: OFFICIAL_LINKS.I4C },
    ],
  },
  {
    id: 'installed-suspicious-app',
    category: 'Device Security',
    question: 'What if I installed a suspicious remote access application (AnyDesk, TeamViewer, RustDesk)?',
    answer:
      'Follow these emergency steps:\n1. Turn off Wi-Fi and mobile data immediately, or enable Airplane Mode, to terminate active remote sessions.\n2. Uninstall the suspicious app immediately.\n3. Do not open or enter credentials in any banking or financial app on that device until verified.\n4. From a separate, trusted device, contact your bank to freeze net banking and change all passwords.\n5. Scan the phone with Google Play Protect or a reputable antivirus, and consider backing up data and performing a clean factory reset if deep malware was installed.',
    sources: [
      { name: 'CERT-In Incident Prevention Guidelines', url: OFFICIAL_LINKS.CERT_IN },
      { name: 'RBI Advisory on Screen Sharing Tools', url: OFFICIAL_LINKS.RBI_AWARENESS },
    ],
  },
  {
    id: 'report-suspicious-number',
    category: 'Reporting Channels',
    question: 'How do I report a suspicious phone number, WhatsApp account, or fake link?',
    answer:
      'You can report suspected fraudulent communications proactively before any financial loss happens:\n- Use the Chakshu portal at https://sancharsaathi.gov.in/sfc/ (official Department of Telecommunications portal).\n- Report the number/message for spam to your telecom operator by sending an SMS to 1909.\n- Report suspect resources on the Cyber Suspect section of https://cybercrime.gov.in/webform/cyber_suspect.aspx.\n- Block and report the account directly inside WhatsApp / Truecaller / Instagram.',
    sources: [
      { name: 'Sanchar Saathi Chakshu', url: OFFICIAL_LINKS.CHAKSHU },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBER_SUSPECT },
    ],
  },
  {
    id: 'is-cybersuraksha-government',
    category: 'About Platform',
    question: 'Is CyberSuraksha an official government website?',
    answer:
      'No. CyberSuraksha is an independent, non-commercial Community Engagement Project (CEP) and digital awareness initiative. It is NOT affiliated with, operated by, or endorsed by the Ministry of Home Affairs, I4C, RBI, CERT-In, or any government department.\nOur mission is purely educational: to make cyber safety understandable and direct citizens to genuine, verified official government reporting portals and helplines. CyberSuraksha does not collect personal data, file complaints, or handle refunds.',
    sources: [
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
  },
  {
    id: 'bank-zero-liability',
    category: 'Banking Rights',
    question: 'What are RBI rules regarding customer liability in unauthorized digital transactions?',
    answer:
      'Under Reserve Bank of India circulars:\n1. Zero Liability: If unauthorized transactions occur due to bank negligence or third-party breach where the fault lies neither with the bank nor the customer, and the customer reports it to the bank within 3 working days of receiving the alert.\n2. Limited Liability: If the delay in reporting is between 4 to 7 working days, customer liability is capped according to the account type (up to ₹5,000 for basic savings, up to ₹10,000 for other savings, up to ₹25,000 for credit cards).\n3. Customer Negligence: If the customer voluntarily shared payment credentials (OTP, PIN, passwords), the customer bears the entire loss until the unauthorized transaction is reported to the bank.',
    sources: [
      { name: 'RBI Customer Protection - Limiting Liability of Customers in Unauthorized Electronic Banking Transactions', url: OFFICIAL_LINKS.RBI_AWARENESS },
    ],
  },
];

