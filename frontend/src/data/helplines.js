import { OFFICIAL_LINKS, HELPLINE_NUMBERS } from '../utils/externalLinks';

export const HELPLINES_DATA = [
  {
    id: 'cybercrime-1930',
    title: 'National Cyber Crime Reporting Helpline',
    number: HELPLINE_NUMBERS.CYBER_FINANCIAL_FRAUD,
    primaryTag: 'Financial Fraud & General Cybercrime',
    operatingAuthority: 'Ministry of Home Affairs (MHA) & I4C',
    website: OFFICIAL_LINKS.CYBERCRIME_PORTAL,
    hours: '24/7 Citizen Helpline',
    tollFree: true,
    description:
      'Dedicated national helpline primarily for immediate reporting of online cyber financial fraud and digital payment crimes across India.',
    actionRequired:
      'Call immediately if money is deducted without your consent. Operators coordinate with banks, payment gateways, and police to freeze funds before fraudsters cash out.',
    importantNote:
      'Keep your bank account number, transaction ID/UTR, mobile number linked with the bank, and exact timestamp ready when calling.',
    lastVerified: 'October 2026',
    verifiedSource: 'https://cybercrime.gov.in/',
  },
  {
    id: 'emergency-112',
    title: 'National Emergency Response Support System (ERSS)',
    number: HELPLINE_NUMBERS.NATIONAL_EMERGENCY,
    primaryTag: 'Immediate Physical Threat & Extortion',
    operatingAuthority: 'Ministry of Home Affairs & State Police Forces',
    website: OFFICIAL_LINKS.EMERGENCY_112,
    hours: '24/7 All-India Emergency',
    tollFree: true,
    description:
      'Pan-India single emergency number for urgent police, fire, and health emergencies.',
    actionRequired:
      'Contact if you are facing immediate extortion, physical threats, blackmail with physical danger, or local harassment.',
    importantNote:
      '112 is for urgent police protection. For routine financial fraud without personal threat, use 1930 and cybercrime.gov.in.',
    lastVerified: 'October 2026',
    verifiedSource: 'https://112.gov.in/',
  },
  {
    id: 'chakshu-telecom',
    title: 'Chakshu (Sanchar Saathi Facility)',
    number: null,
    primaryTag: 'Suspected Fraud Communication Reporting',
    operatingAuthority: 'Department of Telecommunications (DoT)',
    website: OFFICIAL_LINKS.CHAKSHU,
    hours: 'Online Portal Available 24/7',
    tollFree: null,
    description:
      'Official citizen-centric platform to report suspected fraud communications received via SMS, WhatsApp, or phone calls.',
    actionRequired:
      'Report fake lottery calls, fake KYC SMS, impersonation of gas/electricity agencies before financial loss occurs.',
    importantNote:
      'Chakshu is strictly for proactive reporting of suspected scam communications. If you have already lost money, file on cybercrime.gov.in and dial 1930.',
    lastVerified: 'October 2026',
    verifiedSource: 'https://sancharsaathi.gov.in/sfc/',
  },
  {
    id: 'rbi-cms',
    title: 'RBI Complaint Management System (CMS)',
    number: '14448',
    primaryTag: 'Banking Grievance & Ombudsman Escalation',
    operatingAuthority: 'Reserve Bank of India (RBI)',
    website: OFFICIAL_LINKS.RBI_CMS,
    hours: 'Standard Banking Grievance Portal',
    tollFree: true,
    description:
      'Statutory grievance escalation mechanism for unresolved complaints against regulated banks, NBFCs, and payment system providers.',
    actionRequired:
      'Use if your bank fails to resolve an unauthorized digital transaction dispute within 30 days or rejects a genuine zero-liability claim.',
    importantNote:
      'You must first register a complaint with your respective bank. Note the bank complaint ticket number before escalating to the RBI Ombudsman.',
    lastVerified: 'October 2026',
    verifiedSource: 'https://cms.rbi.org.in/',
  },
  {
    id: 'cert-in',
    title: 'Indian Computer Emergency Response Team (CERT-In)',
    number: '1800-11-4949',
    primaryTag: 'National Cybersecurity Incidents & Malware',
    operatingAuthority: 'Ministry of Electronics and Information Technology (MeitY)',
    website: OFFICIAL_LINKS.CERT_IN,
    hours: 'Incident Response Office',
    tollFree: true,
    description:
      'National nodal agency for responding to computer security incidents, ransomware attacks, large-scale phishing infrastructure, and technical vulnerabilities.',
    actionRequired:
      'Organizations and technical administrators submit cybersecurity incidents and malware samples to CERT-In for national security coordination.',
    importantNote:
      'CERT-In analyzes technical threat actors and issues security advisories; it does not process individual consumer monetary refunds.',
    lastVerified: 'October 2026',
    verifiedSource: 'https://www.cert-in.org.in/',
  },
  {
    id: 'trai-dnd',
    title: 'Do Not Disturb (DND) / TRAI Spam Registry',
    number: HELPLINE_NUMBERS.TELECOM_SPAM_SMS,
    primaryTag: 'Unsolicited Commercial Communication (UCC)',
    operatingAuthority: 'Telecom Regulatory Authority of India (TRAI)',
    website: OFFICIAL_LINKS.TRAI,
    hours: 'Automated SMS / Telecom App',
    tollFree: true,
    description:
      'Mechanism to register preferences against telemarketing spam and report unregistered telemarketers.',
    actionRequired:
      'SMS "COMP TEL NO, dd/mm/yy, Time, description" to 1909 within 3 days of receiving an unsolicited spam communication.',
    importantNote:
      'Reports unregistered telemarketers for telecom penalty or disconnection. For fraudulent extortion or malicious links, report on Chakshu/Cybercrime portal.',
    lastVerified: 'October 2026',
    verifiedSource: 'https://www.trai.gov.in/',
  },
];

