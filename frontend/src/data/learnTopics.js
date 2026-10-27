export const LEARN_TOPICS = [
  {
    id: 'cybercrime-basics',
    title: 'What is Cybercrime?',
    category: 'Foundations',
    summary:
      'Any unlawful activity where a computer, mobile phone, network, or digital device is either the tool used to commit the offense, the target of the crime, or both.',
    details:
      'Under Indian law (Information Technology Act 2000 and the Bharatiya Nyaya Sanhita), cybercrime encompasses a wide range of offenses including unauthorized data access, hacking, online financial cheating, identity theft, spreading malicious code, digital extortion, and online harassment.',
    practicalExample:
      'Example: Gaining unauthorized access to another person\'s email account, creating clone social media handles to defame someone, or breaking into a company database.',
    keyRules: [
      'Digital offenses are punishable under the IT Act with fines and rigorous imprisonment.',
      'Cybercrimes can happen without physical boundaries; perpetrators often operate remotely or from overseas.',
      'Preserving digital evidence (headers, IP logs, timestamps) is critical for investigation.',
    ],
    relatedScamSlug: 'identity-theft',
  },
  {
    id: 'financial-fraud',
    title: 'Digital Financial Fraud in India',
    category: 'Foundations',
    summary:
      'Deceptive schemes specifically designed to unlawfully withdraw funds, manipulate digital wallets, or siphon money through online banking and UPI.',
    details:
      'Digital financial fraud in India often targets digital payment channels like Unified Payments Interface (UPI), Immediate Payment Service (IMPS), debit cards, and credit cards. Scammers rely predominantly on social manipulation rather than breaching banking infrastructure.',
    practicalExample:
      'Example: Tricking an individual into approving a collect request on PhonePe under the illusion of receiving a cash prize.',
    keyRules: [
      'Banking infrastructure is heavily encrypted; fraudsters attack the human user (the weakest link).',
      'Never input a secret PIN, password, or CVV to receive money.',
      'Prompt reporting to 1930 within the "Golden Hour" maximizes the chance of freezing siphoned funds.',
    ],
    relatedScamSlug: 'upi-fraud',
  },
  {
    id: 'phishing-smishing-vishing',
    title: 'Phishing, Smishing & Vishing Explained',
    category: 'Attack Vectors',
    summary:
      'The trio of deceptive communication techniques: Phishing (via email), Smishing (via SMS), and Vishing (via voice calls).',
    details:
      'Phishing uses fraudulent emails masquerading as trusted institutions. Smishing leverages short text messages containing shortened links. Vishing relies on voice phone calls where the caller uses high-pressure scripts, false authority, or background sound effects to extract passwords.',
    practicalExample:
      'Smishing: "Your electricity will be cut off tonight at 9:30 PM. Call this number." Vishing: Caller pretending to be a bank manager demanding an OTP to stop a fraudulent payment.',
    keyRules: [
      'Check the exact email address or SMS header, not just the display name.',
      'Never open unexpected attachments (.exe, .scr, .apk, .zip).',
      'End suspicious phone calls and dial the official public number of the organization yourself.',
    ],
    relatedScamSlug: 'phishing',
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering & Psychological Manipulation',
    category: 'Attack Vectors',
    summary:
      'The art of manipulating people into making security mistakes, giving away sensitive information, or sending money voluntarily.',
    details:
      'Cybercriminals exploit human psychological triggers: urgency (2-hour deadlines), fear (threat of digital arrest or account suspension), greed (unrealistic lottery wins or 50% weekly returns), curiosity (scandalous video links), or sympathy (fake medical emergencies of friends).',
    practicalExample:
      'Example: A scammer calling an elderly person claiming their child has been arrested and weeping in the background to induce panic and prevent logical thinking.',
    keyRules: [
      'Whenever you feel intense panic, urgency, or extreme excitement from a digital message, PAUSE.',
      'Scammers intentionally push you to react before your analytical brain evaluates the situation.',
      'Consult a family member or trusted friend before transferring money.',
    ],
    relatedScamSlug: 'digital-arrest',
  },
  {
    id: 'identity-theft-concepts',
    title: 'Identity Theft & Synthetic Identities',
    category: 'Threats',
    summary:
      'The deliberate acquisition and misuse of another person\'s personal data (Aadhaar, PAN, voter ID, biometric data) for fraudulent purposes.',
    details:
      'With identity information, criminals can obtain unauthorized SIM cards, take out micro-loans from predatory digital apps, open "mule" bank accounts for laundering cyber fraud proceeds, or bypass e-KYC controls.',
    practicalExample:
      'Example: A photo of your Aadhaar card left at an unsecured photocopy store being used to buy an unverified SIM card used in cybercrime.',
    keyRules: [
      'Use UIDAI\'s "Masked Aadhaar" feature where only the last 4 digits are visible.',
      'Lock your Aadhaar biometrics using the mAadhaar application or UIDAI portal.',
      'Check TAFCOP (tafcop.sancharsaathi.gov.in) periodically to see all mobile connections registered with your ID.',
    ],
    relatedScamSlug: 'identity-theft',
  },
  {
    id: 'malware-spyware',
    title: 'Malware & Spyware on Mobile Devices',
    category: 'Device Security',
    summary:
      'Malicious software, trojans, or spyware secretly installed on your phone or computer to harvest keystrokes, SMS OTPs, and screen data.',
    details:
      'On Android devices, malicious APKs distributed via WhatsApp or browser links often masquerade as "Bank KYC Update", "E-Challan Payment", or "Free PM Scheme". Once installed, they request Accessibility or Notification permissions to read incoming SMS OTPs and silently forward them.',
    practicalExample:
      'Example: Installing an APK called `E-Challan-Payment.apk` sent on WhatsApp that silently reads your banking SMS and forwards incoming OTPs to a remote server.',
    keyRules: [
      'Never enable "Install from Unknown Sources" or sideload third-party APK files.',
      'Keep Google Play Protect enabled on your Android smartphone.',
      'Carefully audit app permissions: a calculator or flashlight app never needs access to contacts, SMS, or camera.',
    ],
    relatedScamSlug: 'remote-access-scam',
  },
  {
    id: 'ransomware',
    title: 'Ransomware & System Extortion',
    category: 'Threats',
    summary:
      'A type of malicious software that encrypts files on a device or network, demanding ransom payment (usually in cryptocurrency) for the decryption key.',
    details:
      'Ransomware targets individuals, educational institutions, hospitals, and businesses. CERT-In strictly advises against paying ransoms, as payment does not guarantee file recovery and funds criminal networks.',
    practicalExample:
      'Example: Downloading an infected pirated software keygen that locks all your family photos and documents with an extension like `.locked` and displays a ransom demand text file.',
    keyRules: [
      'Maintain regular offline backups (e.g., an external hard drive disconnected from the PC when not backing up).',
      'Keep your operating system (Windows/macOS/Linux) and antivirus software updated with latest patches.',
      'Do not download pirated software, torrents, or unofficial cracked games.',
    ],
    relatedScamSlug: 'tech-support-scam',
  },
  {
    id: 'account-takeover',
    title: 'Account Takeover (ATO) & Credential Stuffing',
    category: 'Account Security',
    summary:
      'When an unauthorized person gains complete control over your online account (email, WhatsApp, social media, bank).',
    details:
      'Cybercriminals use lists of compromised passwords from data breaches across various websites to attempt logins on major services (Credential Stuffing). If you reuse passwords, a breach on an obscure gaming site can compromise your primary email.',
    practicalExample:
      'Example: Using the same password for a fitness tracking website and your primary Gmail account, resulting in an automated bot breaching your email.',
    keyRules: [
      'Never reuse passwords across different accounts.',
      'Use a reputable password manager to generate and store 16+ character unique passwords.',
      'Enable Multi-Factor Authentication (MFA) on all important accounts.',
    ],
    relatedScamSlug: 'otp-fraud',
  },
  {
    id: 'sim-swapping-theory',
    title: 'SIM Swapping Mechanics',
    category: 'Threats',
    summary:
      'How fraudsters transfer your phone number to a new SIM card to intercept two-factor SMS authentication codes.',
    details:
      'Because SMS is the primary channel for 2FA in banking across India, scammers target the SIM card itself through identity theft or fake upgrade requests.',
    practicalExample:
      'Example: An impostor using a fake duplicate Aadhaar card at a local telecom kiosk to claim they lost their phone, obtaining a fresh SIM with your number.',
    keyRules: [
      'Treat unexplained loss of mobile connectivity in a normal area as a critical emergency.',
      'Set a SIM card PIN in your smartphone settings.',
      'Never respond to unexpected telecom messages prompting you to send your 20-digit SIM serial number.',
    ],
    relatedScamSlug: 'sim-swap',
  },
  {
    id: 'deepfakes-ai',
    title: 'Deepfakes & AI-Enabled Impersonation',
    category: 'Emerging Threats',
    summary:
      'Generative AI models creating hyper-realistic synthetic audio, video, or photos to impersonate real individuals in fraud schemes.',
    details:
      'With just 5–15 seconds of audio from a public Instagram reel, modern AI voice cloning models can mimic an individual\'s pitch, timbre, and accent. Deepfake videos can simulate realistic facial expressions during video calls.',
    practicalExample:
      'Example: A CEO\'s voice cloned to authorize an urgent wire transfer, or a child\'s voice cloned pleading for bail money from parents.',
    keyRules: [
      'Create a private "Family Code Word" to verify genuine emergencies.',
      'If someone calls in distress from an unfamiliar number, hang up and dial their real known number directly.',
      'Ask specific contextual questions that an AI model or scammer cannot answer.',
    ],
    relatedScamSlug: 'deepfake-scam',
  },
  {
    id: 'safe-digital-payments',
    title: 'Principles of Safe Digital Payments (UPI & Cards)',
    category: 'Payment Safety',
    summary:
      'Core rules to protect your money while using UPI apps (GPay, PhonePe, Paytm, BHIM) and debit/credit cards.',
    details:
      'The National Payments Corporation of India (NPCI) and the Reserve Bank of India have established rigorous payment frameworks. However, the security model relies on users never sharing authorization secrets.',
    practicalExample:
      'Rule: UPI PIN is solely for money leaving your account. To receive money, nobody needs your PIN.',
    keyRules: [
      'UPI PIN is entered ONLY to debit money from your account.',
      'Never scan a QR code sent to you via chat to receive money.',
      'Never share your card CVV (3-digit code on back) or card expiration date.',
      'Set low daily transaction limits on your debit card and UPI app for daily safety.',
    ],
    relatedScamSlug: 'upi-fraud',
  },
  {
    id: 'passwords-mfa',
    title: 'Passwords, Passkeys & Multi-Factor Authentication',
    category: 'Account Security',
    summary:
      'Building robust digital defenses with strong passwords, modern passkeys, and multi-factor authentication (MFA).',
    details:
      'MFA requires two or more verification factors to gain access: something you know (password), something you have (authenticator app / hardware security key), or something you are (biometrics). Authenticator apps (Google Authenticator, Microsoft Authenticator) are substantially safer than SMS OTPs.',
    practicalExample:
      'Example: Even if a hacker phishes your password, they cannot access your account without the 30-second rolling code generated on your authenticator app.',
    keyRules: [
      'Use passphrases of 4+ random words (e.g. `correct-horse-battery-staple`).',
      'Use authenticator apps (TOTP) instead of SMS OTP wherever supported.',
      'Turn on Two-Step Verification on WhatsApp and all social media profiles.',
    ],
    relatedScamSlug: 'otp-fraud',
  },
  {
    id: 'online-privacy',
    title: 'Online Privacy & Digital Footprint',
    category: 'Privacy',
    summary:
      'Managing the trail of personal data left behind while browsing, sharing on social media, and registering on apps.',
    details:
      'Oversharing your birth date, family relationships, travel itineraries, workplace location, and vehicle license plate numbers on public social media gives scammers the exact material needed for targeted social engineering.',
    practicalExample:
      'Example: Posting "Traveling to London for 2 weeks!" publicly on Facebook, allowing a scammer to call your parents claiming you were detained in London airport customs.',
    keyRules: [
      'Keep your social media accounts set to "Private / Friends Only".',
      'Never post photos of boarding passes, tickets, or official ID cards online (barcodes contain full personal details).',
      'Review and delete old, unused accounts and app permissions regularly.',
    ],
    relatedScamSlug: 'social-media-impersonation',
  },
  {
    id: 'public-wifi-safety',
    title: 'Safe Public Wi-Fi Practices',
    category: 'Device Security',
    summary:
      'Understanding the risks of unencrypted public Wi-Fi networks at airports, railway stations, cafes, and hotels.',
    details:
      'Public open Wi-Fi networks can be eavesdropped on, and attackers can deploy "Evil Twin" fake hotspots (e.g., naming a malicious hotspot "Free_Airport_WiFi") to intercept unencrypted traffic and redirect to phishing portals.',
    practicalExample:
      'Example: Connecting to an unverified free cafe Wi-Fi and having your internet session redirected to a fake bank login portal.',
    keyRules: [
      'Avoid conducting sensitive financial transactions or banking on open public Wi-Fi networks.',
      'Use your mobile data hotspot (4G/5G) for banking when away from home.',
      'Ensure every website you visit displays `https://` with a valid security certificate.',
    ],
    relatedScamSlug: 'phishing',
  },
  {
    id: 'recognize-suspicious-websites',
    title: 'How to Recognize Suspicious & Imposter Websites',
    category: 'Attack Vectors',
    summary:
      'Practical techniques to identify look-alike phishing domains, spoofed URLs, and counterfeit e-commerce storefronts.',
    details:
      'Scammers use typosquatting (subtle misspellings like `amzon.com` or `sbii-bank.in`) and deceptive subdomains (`hdfc.bank-update-online.com`, where the real domain is `bank-update-online.com`).',
    practicalExample:
      'Example: `https://www.onlinesbi.sbi/` is genuine, while `https://onlinesbi.customer-support.xyz/` is a phishing domain.',
    keyRules: [
      'Read the domain name from right to left immediately before the slash: look for the primary registered domain.',
      'Indian Government official websites always end in `.gov.in` or `.nic.in`.',
      'Check website creation date on WHOIS: banks and reputable stores have domains registered for years, not days.',
    ],
    relatedScamSlug: 'online-shopping-fraud',
  },
  {
    id: 'verify-official-communications',
    title: 'How to Verify Official Indian Communications',
    category: 'Foundations',
    summary:
      'Step-by-step methods to verify whether an email, phone call, notice, or SMS from a government agency or bank is authentic.',
    details:
      'Indian government departments, courts, and regulators follow rigorous statutory communication channels. They do not conduct official arrests via Skype, demand instant UPI transfers, or send notices from Gmail/Hotmail addresses.',
    practicalExample:
      'Rule: Official government emails come from `@gov.in` or `@nic.in`. Any notice sent from an `@gmail.com` or `@yahoo.com` address is 100% fraudulent.',
    keyRules: [
      'Check email domain: Official Indian government departments strictly use `@gov.in` or `@nic.in`.',
      'Legitimate summons contain formal dispatch numbers, watermarks, and can be verified at the local police station.',
      'Government agencies and regulators (RBI, SEBI, TRAI, Police) NEVER accept payments into individual private savings bank accounts.',
    ],
    relatedScamSlug: 'digital-arrest',
  },
];

