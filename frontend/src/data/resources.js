import { OFFICIAL_LINKS, HELPLINE_NUMBERS } from '../utils/externalLinks';

export const OFFICIAL_RESOURCES = [
  {
    id: 'cybercrime-gov-in',
    title: 'National Cyber Crime Reporting Portal',
    authority: 'Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs',
    url: OFFICIAL_LINKS.CYBERCRIME_PORTAL,
    badge: 'Central Reporting Portal',
    description:
      'The primary official portal for Indian citizens to report cyber crimes online, with dedicated channels for financial fraud and crimes against women and children.',
    keyServices: [
      'Report Cyber Financial Fraud (Direct freeze integration with banks)',
      'Report Crime Against Women / Children (Anonymously or with registration)',
      'Track Status of filed Cyber Complaints',
      'Report Suspect Mobile Numbers / Accounts (Cyber Suspect)',
    ],
    helpline: HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD,
    lastVerified: 'October 2026',
  },
  {
    id: 'sanchar-saathi',
    title: 'Sanchar Saathi Citizen Portal',
    authority: 'Department of Telecommunications (DoT), Ministry of Communications',
    url: OFFICIAL_LINKS.SANCHAR_SAATHI,
    badge: 'Telecom Security',
    description:
      'Citizen-centric initiative to empower mobile subscribers, strengthen security, and increase awareness about citizen-centric telecom initiatives.',
    keyServices: [
      'Chakshu: Report suspected fraudulent communications (calls, SMS, WhatsApp)',
      'TAFCOP: Know mobile connections registered in your name under your Aadhaar',
      'CEIR: Block and trace lost or stolen mobile phones across India',
      'KYI: Know Your Mobile Device genuine IMEI status',
    ],
    helpline: null,
    lastVerified: 'October 2026',
  },
  {
    id: 'chakshu-portal',
    title: 'Chakshu Suspected Fraud Reporting Facility',
    authority: 'Department of Telecommunications (DoT)',
    url: OFFICIAL_LINKS.CHAKSHU,
    badge: 'Spam & Scam Reports',
    description:
      'Dedicated reporting window on Sanchar Saathi for proactive submission of suspected cyber fraud communications before financial loss occurs.',
    keyServices: [
      'Report fake lottery and prize messages',
      'Report fake job offer SMS and WhatsApp chats',
      'Report bank/electricity/gas KYC expiry threats',
      'Telecom disconnection and asset confiscation threats',
    ],
    helpline: null,
    lastVerified: 'October 2026',
  },
  {
    id: 'rbi-kehta-hai',
    title: 'RBI Kehta Hai & Financial Awareness Hub',
    authority: 'Reserve Bank of India (RBI)',
    url: OFFICIAL_LINKS.RBI_AWARENESS,
    badge: 'Banking & Payment Safety',
    description:
      'Official public awareness initiative of India\'s central bank regarding safe digital payments, customer rights, limited liability for unauthorized transactions, and banking ombudsman.',
    keyServices: [
      'Customer Liability in Unauthorized Electronic Banking Transactions',
      'Safe Digital Banking & Mobile App Guidelines',
      'Sachet Portal for Unregistered Non-Banking Entities',
      'RBI Ombudsman Complaint Management System (CMS)',
    ],
    helpline: '14448',
    lastVerified: 'October 2026',
  },
  {
    id: 'cert-in-portal',
    title: 'Indian Computer Emergency Response Team (CERT-In)',
    authority: 'Ministry of Electronics and Information Technology (MeitY)',
    url: OFFICIAL_LINKS.CERT_IN,
    badge: 'National Technical Agency',
    description:
      'National nodal agency for cybersecurity incident response, vulnerability management, threat intelligence, and security advisories across India.',
    keyServices: [
      'National Security Advisories & Vulnerability Notes',
      'Incident Reporting for Malware, Ransomware & Phishing Infrastructure',
      'Cyber Swachhta Kendra (Botnet Cleaning & Malware Analysis Centre)',
      'Safe Coding & Digital Defense Best Practices',
    ],
    helpline: '1800-11-4949',
    lastVerified: 'October 2026',
  },
  {
    id: 'trai-portal',
    title: 'Telecom Regulatory Authority of India (TRAI)',
    authority: 'Statutory Body, Government of India',
    url: OFFICIAL_LINKS.TRAI,
    badge: 'Telecom Regulation',
    description:
      'Regulates telecommunication services and mandates regulations against Unsolicited Commercial Communication (UCC) and telecom spam.',
    keyServices: [
      'TRAI DND (Do Not Disturb) 3.0 Guidelines',
      'Regulations on SMS Headers and Entity Verification',
      'Consumer Grievance Redressal Directives for Telecom Operators',
    ],
    helpline: '1909',
    lastVerified: 'October 2026',
  },
  {
    id: 'emergency-112-portal',
    title: 'Emergency Response Support System (ERSS - 112)',
    authority: 'Ministry of Home Affairs (MHA)',
    url: OFFICIAL_LINKS.EMERGENCY_112,
    badge: 'National Emergency Help',
    description:
      'Single emergency response number across India for citizen safety during extortion, physical threats, severe harassment, and crisis response.',
    keyServices: [
      '24/7 Pan-India Emergency Assistance',
      'Immediate Police Dispatch & Intervention',
      'Coordination with State Cyber Cells in Emergency Situations',
    ],
    helpline: HELPLINE_NUMBERS.NATIONAL_EMERGENCY,
    lastVerified: 'October 2026',
  },
];

