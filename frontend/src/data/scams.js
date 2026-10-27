import { OFFICIAL_LINKS } from '../utils/externalLinks';

export const SCAM_CATEGORIES = [
  'All',
  'Digital Payments',
  'Impersonation & Coercion',
  'Employment & Investment',
  'Account & Device Security',
  'Online Shopping & E-Commerce',
  'Personal Safety & Extortion',
  'Emerging AI & Tech',
];

export const RISK_TYPES = [
  'Financial Loss',
  'Identity Theft',
  'Account Takeover',
  'Personal Safety & Extortion',
  'Device Compromise',
];

export const SCAMS_DATA = [
  {
    id: 'upi-fraud',
    slug: 'upi-fraud',
    title: 'UPI Payment Fraud & Request Money Exploits',
    category: 'Digital Payments',
    riskIndicators: ['Financial Loss', 'Account Takeover'],
    shortDescription:
      'Scammers send "Collect Request" payment links or trick victims into authorizing debit transactions under the false premise of receiving refunds or rewards.',
    howItWorks: [
      'Contact: The fraudster connects via OLX, WhatsApp, or phone pretending to be a buyer, merchant, or customer support agent.',
      'Manipulation: They claim they are sending you money (e.g., advance payment for an item you are selling or an accidental refund).',
      'Action: Instead of sending money, they initiate a "Collect Request" or send a disguised payment link on your UPI app and ask you to "Enter UPI PIN to receive money".',
      'Exploitation: As soon as you enter your UPI PIN, money is immediately debited from your bank account to the fraudster\'s VPA.',
    ],
    realWorldExample:
      'Illustrative Example: Ramesh listed a sofa on an online classifieds site for ₹15,000. A buyer agreed immediately and claimed to pay an advance. Ramesh received a UPI prompt stating "Paying ₹15,000 to BuyerX". The caller insisted Ramesh enter his UPI PIN to "accept the deposit". Upon entering the PIN, ₹15,000 was debited rather than credited.',
    warningSigns: [
      'Anyone asking you to enter your UPI PIN to RECEIVE or ACCEPT money.',
      'Receiving unexpected "Collect" or "Approve Payment" notification banners from UPI apps.',
      'Pressure from a buyer who refuses to meet or inspect the item in person and insists on instant UPI transfer.',
      'Requests to split transactions into multiple smaller amounts "to bypass server limits".',
    ],
    typicalTactics: [
      'Calls: "Sir, I am sending you ₹5,000 token advance. Open GPay/PhonePe and press Approve with your secret PIN."',
      'SMS/WhatsApp: "Your cashback of ₹2,499 is pending! Click here to accept into your bank account."',
      'Faked UPI screenshot showing "Transferred ₹20,000 instead of ₹2,000 by mistake" demanding the difference back.',
    ],
    legitimateVsScam: {
      legitimate:
        'NPCI and banks confirm: Receiving money via UPI requires ZERO action and NEVER requires entering your UPI PIN.',
      scam:
        'Fraudsters insist that UPI requires two-way authentication or PIN validation before crediting funds.',
    },
    preventionTips: [
      'Golden Rule: You only enter your UPI PIN when PAYING out money, NEVER to receive funds.',
      'Carefully inspect every UPI notification: Look for the word "DEBIT" or "COLLECT".',
      'Decline and block unknown collect requests directly in your UPI application.',
      'Never accept payment requests from unverified buyers on classified platforms.',
    ],
    whatToDo: [
      'Immediately call national cyber helpline 1930 within the golden hour.',
      'Open your UPI app transaction history, note the UTR/Reference ID, and report the transaction as fraud.',
      'Contact your bank immediately to request a block on outbound UPI transactions from your account.',
      'File an official complaint at https://cybercrime.gov.in/ with transaction receipts and conversation screenshots.',
    ],
    relatedScams: ['qr-code-scam', 'fake-customer-care', 'otp-fraud'],
    sources: [
      { name: 'NPCI UPI Safety Guidelines', url: OFFICIAL_LINKS.NPCI_SAFETY },
      { name: 'RBI Financial Awareness - Digital Payments', url: OFFICIAL_LINKS.RBI_AWARENESS },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'qr-code-scam',
    slug: 'qr-code-scam',
    title: 'QR Code Scanning Scams',
    category: 'Digital Payments',
    riskIndicators: ['Financial Loss'],
    shortDescription:
      'Fraudsters send QR codes claiming scanning them will credit money into the victim\'s bank account, whereas scanning leads to a fund debit.',
    howItWorks: [
      'Contact: A scammer posing as a customer, buyer, or charity rep sends an image of a QR code via WhatsApp or email.',
      'Manipulation: The fraudster claims their UPI account only supports QR-based crediting or barcode scanning.',
      'Action: The victim scans the QR code using their payment app and is prompted to authorize the transaction by inputting their secret PIN.',
      'Exploitation: Funds are instantly transferred from the victim\'s bank to the scammer\'s merchant account.',
    ],
    realWorldExample:
      'Illustrative Example: Sunita, running a home bakery, received an order for 10 cakes. The buyer claimed corporate policy required QR scanning to deposit ₹8,000. When Sunita scanned the QR code on Google Pay, the app displayed a payment screen for ₹8,000. Believing it was an authorization stamp, she entered her PIN and lost ₹8,000.',
    warningSigns: [
      'Being told "Scan this barcode / QR code to receive your pending payment or refund".',
      'The QR code opens a payment screen showing a payee name and a debit amount.',
      'Stickers pasted over legitimate merchant QR codes at public shops or petrol pumps (QR Tampering).',
    ],
    typicalTactics: [
      'WhatsApp message containing a generated QR graphic titled "GOVERNMENT CASHBACK REWARD ₹3,500 - SCAN TO CLAIM".',
      'Scammer claiming their bank server requires you to scan their personal merchant barcode first.',
    ],
    legitimateVsScam: {
      legitimate:
        'A QR code is purely an address for you to send money to a merchant or individual. It never pulls money into your account.',
      scam:
        'Scammers claim QR codes have "receive mode" or "reverse payment mechanisms" that require PIN approval.',
    },
    preventionTips: [
      'Remember: Scanning a QR code is strictly for SENDING money.',
      'To receive money, simply provide your UPI ID (VPA) or registered mobile number. No scanning is required.',
      'At physical stores, always verify that the merchant QR code has not been tampered with or replaced by a sticker.',
    ],
    whatToDo: [
      'Call 1930 immediately to report the unauthorized UPI debit transaction.',
      'Notify your bank branch or customer service to block UPI access temporarily.',
      'Lodge a cyber fraud complaint on https://cybercrime.gov.in/ with the QR image and transaction reference.',
    ],
    relatedScams: ['upi-fraud', 'online-shopping-fraud', 'phishing'],
    sources: [
      { name: 'Reserve Bank of India - Cautionary Notice on QR Codes', url: OFFICIAL_LINKS.RBI_AWARENESS },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'phishing',
    slug: 'phishing',
    title: 'Phishing, Smishing & Deceptive Banking Links',
    category: 'Account & Device Security',
    riskIndicators: ['Account Takeover', 'Identity Theft', 'Financial Loss'],
    shortDescription:
      'Fraudulent SMS, emails, and WhatsApp messages mimicking banks, couriers, or government agencies to steal passwords, PAN/Aadhaar details, and debit card PINs.',
    howItWorks: [
      'Contact: Victim receives an urgent SMS (smishing) or email claiming account suspension, electricity cutoff, or unpaid courier fees.',
      'Manipulation: Threat of impending penalty or immediate service disconnection creates panic.',
      'Action: The link opens a look-alike clone of a legitimate bank or government website that prompts for net banking credentials, card numbers, CVV, and OTP.',
      'Exploitation: Scammers capture the credentials in real-time, log into the victim\'s genuine account, and transfer funds or drain credit lines.',
    ],
    realWorldExample:
      'Illustrative Example: Amit received an SMS: "Dear Customer, Your SBI NetBanking will be blocked today due to pending PAN update. Click sbi-pan-kyc-verify.in to update now." Amit tapped the link, saw a page identical to his bank\'s login, entered his username and password, followed by an OTP. Within 2 minutes, ₹50,000 was debited.',
    warningSigns: [
      'Messages sent from personal 10-digit mobile numbers instead of registered official sender headers (e.g., AD-SBIIN, VK-HDFCBK).',
      'Mismatched domain names (e.g., `bank-support-online.xyz` or `update-pan.top` instead of `.bank.sbi` or `.gov.in`).',
      'Urgent threats: "Account blocked in 2 hours", "Power disconnected tonight", or "Lottery cancelled".',
      'Grammatical errors, awkward phrasing, or strange capitalization.',
    ],
    typicalTactics: [
      'Electricity Bill Alert: "Dear consumer, your electricity will be disconnected tonight at 9:30 PM due to unpaid bill. Call officer immediately."',
      'Postal/Courier Failure: "India Post: Your package could not be delivered due to incomplete address. Update address with ₹5 fee at link."',
      'Income Tax Refund: "Income Tax Department has approved a refund of ₹18,450. Verify bank details to credit."',
    ],
    legitimateVsScam: {
      legitimate:
        'Banks and government departments never send links in SMS asking you to input internet banking passwords, card PINs, or OTPs.',
      scam:
        'Scammers use fake URL shorteners and spoofed domains to host phishing credential harvester forms.',
    },
    preventionTips: [
      'Never click on links received via unsolicited SMS or messaging apps claiming account expiry or urgent updates.',
      'Always type the official URL directly into your web browser or use official mobile apps downloaded from Google Play / Apple App Store.',
      'Report suspicious SMS to the official Chakshu facility on Sanchar Saathi (sancharsaathi.gov.in/sfc/).',
    ],
    whatToDo: [
      'Immediately change your internet banking passwords and UPI PIN from an independent, clean device.',
      'Contact your bank\'s fraud control center immediately to freeze internet banking and hotlist cards.',
      'Report the phishing communication to Chakshu and lodge a complaint on https://cybercrime.gov.in/.',
    ],
    relatedScams: ['fake-kyc', 'otp-fraud', 'identity-theft'],
    sources: [
      { name: 'CERT-In Advisory on Phishing Campaigns', url: OFFICIAL_LINKS.CERT_IN },
      { name: 'Sanchar Saathi Chakshu Portal', url: OFFICIAL_LINKS.CHAKSHU },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'digital-arrest',
    slug: 'digital-arrest',
    title: 'Digital Arrest & Law Enforcement Impersonation',
    category: 'Impersonation & Coercion',
    riskIndicators: ['Financial Loss', 'Personal Safety & Extortion', 'Identity Theft'],
    shortDescription:
      'Criminals impersonating police officers, CBI, ED, TRAI, or Customs conduct coercive video calls, falsely claiming your identity was used in illegal parcels or money laundering to extort massive sums.',
    howItWorks: [
      'Contact: An automated IVR call claims your SIM card is being disconnected, or that a parcel in your name containing illegal contraband was seized at customs.',
      'Manipulation: The call transfers to fake police/CBI/ED officials wearing authentic-looking uniforms sitting before staged agency backdrops. They accuse the victim of terror funding, drug trafficking, or money laundering.',
      'Action: Fraudsters issue fabricated arrest warrants and order the victim into "digital arrest" via Skype or WhatsApp video, forbidding them from ending the call or talking to family.',
      'Exploitation: Victims are coerced into transferring their savings to a "Secret Government Verification Account" or "RBI Escrow Account" for financial clearance, after which the scammers vanish.',
    ],
    realWorldExample:
      'Illustrative Example: Mr. Sharma, a retired teacher, received a call allegedly from FedEx stating a package sent to Cambodia containing passports and drugs had his Aadhaar attached. The call transferred to a fake "Mumbai Police Cyber Cell" video stream. The officer showed official-looking supreme court seals and warned Sharma that failure to transfer his ₹25 lakh fixed deposit to a "clearing account" would result in immediate physical arrest.',
    warningSigns: [
      'Any mention of "Digital Arrest" — Indian law and Indian courts have repeatedly clarified that no concept of digital arrest exists.',
      'Police or government officials conducting official judicial proceedings or interrogations over Skype/WhatsApp video calls.',
      'Threats demanding you transfer money into a bank account for "financial auditing", "verification", or "temporary holding".',
      'Strict demands for secrecy: "Do not inform your family or lawyer or you will face immediate raids".',
    ],
    typicalTactics: [
      'IVR: "This is Telecom Authority of India (TRAI). Your mobile number will be terminated in 2 hours due to illegal activities."',
      'Fake warrant documents with forged signatures of senior IPS officers, CBI directors, or court judges sent via WhatsApp PDF.',
      'Demanding you keep your laptop camera on 24 hours while staying isolated in a room.',
    ],
    legitimateVsScam: {
      legitimate:
        'Genuine police and investigative agencies issue formal physical summons under the Code of Criminal Procedure (CrPC / BNSS). They NEVER demand money transfers for verification.',
      scam:
        'Scammers use fake video sets, forged badges, and simulated courtrooms to terrorize citizens into instant bank transfers.',
    },
    preventionTips: [
      'Understand: There is NO SUCH THING as "Digital Arrest" under Indian law. It is 100% a criminal scam.',
      'Hang up immediately if an unknown caller threatens arrest, customs seizure, or money laundering charges.',
      'Never transfer money to any "safe account", "government verification account", or "court clearance deposit".',
      'Reach out to local police or dial 1930 / 112 to verify any claimed legal inquiry.',
    ],
    whatToDo: [
      'Disconnect the video call and block the callers immediately.',
      'If money was transferred, call 1930 immediately to request an urgent bank freeze on the beneficiary account.',
      'Preserve Skype/WhatsApp handles, call logs, and documents.',
      'Lodge a formal cybercrime complaint at https://cybercrime.gov.in/ under Law Enforcement Impersonation.',
    ],
    relatedScams: ['sextortion', 'fake-kyc', 'social-media-impersonation'],
    sources: [
      { name: 'I4C Advisory on Digital Arrest Scams', url: OFFICIAL_LINKS.I4C },
      { name: 'MHA National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
      { name: 'Chakshu Fraud Communication Facility', url: OFFICIAL_LINKS.CHAKSHU },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'fake-customer-care',
    slug: 'fake-customer-care',
    title: 'Fake Customer Care Numbers & Search Engine Ads',
    category: 'Digital Payments',
    riskIndicators: ['Financial Loss', 'Device Compromise', 'Account Takeover'],
    shortDescription:
      'Cybercriminals purchase search engine ads and edit map listings to display fake toll-free helpline numbers for banks, airlines, food delivery, and courier apps.',
    howItWorks: [
      'Contact: A user searches online for customer support (e.g., "Swiggy refund number" or "SBI card support").',
      'Manipulation: Fraudulent sponsored search results or edited Google Maps phone numbers appear at the very top.',
      'Action: When the victim calls, the fake agent offers quick resolution but insists on remote screen sharing or a ₹1/₹5 test transaction.',
      'Exploitation: The scammer captures bank credentials or initiates remote access, leading to unauthorized withdrawals.',
    ],
    realWorldExample:
      'Illustrative Example: Priya ordered groceries that were missing items. She googled "delivery customer care helpline" and dialed the first sponsored number. The representative spoke courteously and claimed a ₹300 refund would be issued via an authorization link. The link prompted Priya to install an app called "QuickSupport". Within seconds of sharing her 9-digit code, ₹45,000 was transferred from her linked bank account.',
    warningSigns: [
      'Helpline numbers listed as regular 10-digit mobile phone numbers rather than official 1800 toll-free numbers.',
      'Support representatives asking you to install AnyDesk, TeamViewer, RustDesk, or QuickSupport to fix a payment.',
      'Demanding a "reversal token payment" of ₹1 or ₹5 to verify your account.',
      'Customer support asking for your password, PIN, or OTP.',
    ],
    typicalTactics: [
      'Paid Google Search Ads showing fake numbers for airline rescheduling, courier tracking, and bank support.',
      'Edited business profiles on Google Maps showing mobile numbers of scammers under bank branch addresses.',
    ],
    legitimateVsScam: {
      legitimate:
        'Official support agents only communicate through in-app chat, registered emails, or verified toll-free numbers printed on the back of your debit card.',
      scam:
        'Fraudsters use commercial search ads and push users into external calling and remote screen-sharing tools.',
    },
    preventionTips: [
      'Never rely on search engine results for customer support contact numbers.',
      'Find bank helpline numbers exclusively printed on the back of your physical bank debit/credit card or on the official app.',
      'Use the in-app help/support section of platforms like Zomato, Swiggy, Amazon, and Flipkart.',
      'Never install remote-sharing applications upon the instruction of any customer support agent.',
    ],
    whatToDo: [
      'Disconnect from the internet immediately if you installed a remote-access app.',
      'Uninstall the suspicious application immediately.',
      'Contact your bank immediately to freeze internet banking and hotlist all cards.',
      'File a complaint on https://cybercrime.gov.in/ and dial 1930.',
    ],
    relatedScams: ['remote-access-scam', 'upi-fraud', 'tech-support-scam'],
    sources: [
      { name: 'RBI Cautionary Circular on Search Engine Helpline Numbers', url: OFFICIAL_LINKS.RBI_AWARENESS },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'investment-fraud',
    slug: 'investment-fraud',
    title: 'Investment, Stock Trading & High-Yield Ponzi Scams',
    category: 'Employment & Investment',
    riskIndicators: ['Financial Loss'],
    shortDescription:
      'Victims are added to WhatsApp/Telegram groups promising insider institutional stock tips, IPO allocations, or automated trading bot profits with guaranteed massive returns.',
    howItWorks: [
      'Contact: Unsolicited addition to a WhatsApp or Telegram investment group managed by a purported SEBI-registered guru or international fund.',
      'Manipulation: Group members (paid accomplices or bots) post fake screenshots of massive daily profits and praise the instructor.',
      'Action: The victim is directed to deposit funds into private mule bank accounts or register on a fabricated trading portal.',
      'Exploitation: The fake portal shows inflated paper profits. When the victim attempts to withdraw funds, they are asked to pay steep "taxes", "processing fees", or "AML clearance deposits", after which the scammers sever contact.',
    ],
    realWorldExample:
      'Illustrative Example: Rajesh was added to "Elite Institutional Traders WhatsApp Club". The admin claimed access to pre-IPO quotas with 200% returns. Rajesh invested ₹50,000 on their custom trading portal app. His balance showed ₹1,50,000 within days. When he tried to withdraw ₹50,000, the admin demanded a 30% advance regulatory tax of ₹45,000. He paid, but his account was locked and the group deleted him.',
    warningSigns: [
      'Promises of "guaranteed 20% to 50% weekly returns" with zero risk.',
      'Instruction to transfer money into multiple different individual savings accounts instead of a recognized SEBI-registered broker account.',
      'Trading takes place on custom APK files or shady web dashboards rather than recognized brokers (Zerodha, Groww, AngelOne, ICICI Direct).',
      'Demands to pay extra "security deposits", "customs fees", or "taxes" before money can be withdrawn.',
    ],
    typicalTactics: [
      'Telegram channels sharing forged certificates claiming SEBI, RBI, or US SEC accreditation.',
      'Shill accounts in group chats shouting: "Thank you mentor sir! Made ₹80,000 profit today!"',
      'Fabricated institutional trading apps mimicking multinational asset managers like Morgan Stanley or Goldman Sachs.',
    ],
    legitimateVsScam: {
      legitimate:
        'All genuine stock brokers in India must be registered with SEBI. Investment funds are routed through designated clearing corporation accounts, not individual savings accounts.',
      scam:
        'Fraudulent schemes use unregulated web dashboards and route funds to private mule accounts that are quickly emptied.',
    },
    preventionTips: [
      'Verify broker and advisor credentials on the official SEBI website (sebi.gov.in) before investing.',
      'Remember: High returns always carry high risk. Any promise of guaranteed returns in the stock market is fraudulent.',
      'Never transfer investment capital to personal bank accounts belonging to unknown individuals.',
      'Do not download trading apps from third-party APK links or links shared on Telegram.',
    ],
    whatToDo: [
      'Stop sending any additional money for "taxes" or "withdrawal fees" immediately.',
      'Report the financial fraud to 1930 and https://cybercrime.gov.in/ immediately.',
      'Save group chat transcripts, payment slips, bank account details of beneficiaries, and website links.',
      'File an alert on the SEBI SCORES portal regarding unauthorized investment advisors.',
    ],
    relatedScams: ['job-scam', 'cryptocurrency-scam', 'phishing'],
    sources: [
      { name: 'SEBI Investor Cautionary Notices', url: 'https://www.sebi.gov.in/' },
      { name: 'I4C Advisory on Illegal Trading Apps', url: OFFICIAL_LINKS.I4C },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'job-scam',
    slug: 'job-scam',
    title: 'Part-Time Work-From-Home & Task Scams',
    category: 'Employment & Investment',
    riskIndicators: ['Financial Loss', 'Identity Theft'],
    shortDescription:
      'Scammers lure job seekers with simple part-time tasks (liking YouTube videos, reviewing hotels) and pay small initial payouts before demanding prepaid deposits for premium tasks.',
    howItWorks: [
      'Contact: Unsolicited message on WhatsApp or Telegram offering work-from-home earning ₹3,000–₹8,000 per day for 30 minutes of work.',
      'Manipulation: The victim completes simple tasks like rating hotels or subscribing to channels. The scammer actually pays a genuine small reward (₹200–₹500) to build initial trust.',
      'Action: The victim is invited to join a "VIP Merchant Task" or "Prepaid Task" requiring a deposit (e.g., pay ₹5,000 to earn ₹7,000).',
      'Exploitation: Once larger amounts are deposited (₹50,000+), the task dashboard claims a "system error" or "missed task", demanding even higher deposits to unlock the trapped funds.',
    ],
    realWorldExample:
      'Illustrative Example: Neha, a college student, was offered a job liking videos on YouTube for ₹50 per like. After earning ₹300, she was added to a Telegram channel and offered a crypto-merchandising task. She deposited ₹3,000 and earned ₹4,200. Encouraged, she deposited ₹50,000 for a luxury task. The coordinator said she made a sequence mistake and must deposit ₹1.5 lakh more to recover her funds. She lost all her savings.',
    warningSigns: [
      'Unsolicited job offers received via WhatsApp, Telegram, or SMS from international numbers (+62, +84, +234, etc.).',
      'Job descriptions requiring "prepaid tasks", "cryptocurrency wallet creation", or "deposit to earn commission".',
      'No formal interview, no verified corporate email (@company.com), and no offer letter.',
      'Demands for money to unlock or withdraw your earned salary.',
    ],
    typicalTactics: [
      'WhatsApp greeting: "Hello! I am HR from global recruiting firm. We have part-time openings for digital review assistants."',
      'Fake Telegram dispatchers sharing task numbers and bank account details for immediate IMPS transfers.',
    ],
    legitimateVsScam: {
      legitimate:
        'Legitimate companies pay you for your work. No reputable employer ever asks an applicant or employee to pay money to work.',
      scam:
        'Fraudsters use small initial payments as bait to trap victims into paying escalating sums of their own money.',
    },
    preventionTips: [
      'Absolute Rule: Any job that requires you to pay money to earn money is a scam.',
      'Never engage with unknown recruiters on Telegram or WhatsApp offering unrealistic hourly earnings.',
      'Verify job postings on the official careers page of the company or on reputable portals like LinkedIn and Naukri.',
    ],
    whatToDo: [
      'Immediately cease all payments. Do not pay any "penalty", "server error fee", or "withdrawal release fee".',
      'Dial 1930 and file a complaint on https://cybercrime.gov.in/ with transaction UTRs.',
      'Take complete screenshots of the conversation, Telegram IDs, and bank account numbers provided.',
    ],
    relatedScams: ['investment-fraud', 'cryptocurrency-scam', 'phishing'],
    sources: [
      { name: 'I4C Advisory on Part-Time Task Scams', url: OFFICIAL_LINKS.I4C },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'online-shopping-fraud',
    slug: 'online-shopping-fraud',
    title: 'Fake E-Commerce Websites & Social Media Shopping Fraud',
    category: 'Online Shopping & E-Commerce',
    riskIndicators: ['Financial Loss', 'Identity Theft'],
    shortDescription:
      'Fraudsters create counterfeit e-commerce websites and Instagram stores advertising branded electronics or clothing at 80% discounts, taking prepaid payments and never shipping products.',
    howItWorks: [
      'Contact: Ads on Instagram, Facebook, or search engines promoting heavy discounts (e.g., high-end sneakers for ₹899 or smartphones for ₹3,999).',
      'Manipulation: Slick storefronts built using Shopify templates featuring fake countdown timers, false customer reviews, and stolen brand logos.',
      'Action: During checkout, Cash on Delivery (COD) is disabled, forcing online payment via UPI, debit card, or net banking.',
      'Exploitation: The money is captured by the scammer. Either no product is ever delivered, or a cheap counterfeit item/soap bar arrives. Customer support numbers are disconnected immediately.',
    ],
    realWorldExample:
      'Illustrative Example: Rahul saw an Instagram reel advertising branded running shoes worth ₹12,000 for just ₹1,499 with "Clearance Sale ends in 2 hours". He clicked the link, paid ₹1,499 via UPI. The site provided a fake tracking code. Two weeks later, the website was offline, the Instagram handle was renamed, and Rahul received nothing.',
    warningSigns: [
      'Prices that are unrealistically low (70–90% below market value for high-end branded goods).',
      'Websites with no physical business address, no GSTIN, no company registration details, and only a Gmail contact address.',
      'Cash on Delivery (COD) is advertised on the homepage but disabled during actual checkout.',
      'The domain name was registered only days or weeks ago (can be checked on whois).',
    ],
    typicalTactics: [
      'Instagram ads with disabled comments to prevent victims from warning new shoppers.',
      'Fake parcel delivery calls where a fake courier demands ₹50 advance delivery tax before handing over the parcel.',
    ],
    legitimateVsScam: {
      legitimate:
        'Established retailers have transparent return policies, registered corporate GST details, multi-channel support, and reliable COD options.',
      scam:
        'Fly-by-night fraudulent storefronts steal product images, enforce prepaid transactions, and disappear after accumulating funds.',
    },
    preventionTips: [
      'If an offer seems too good to be true, it is almost certainly a scam.',
      'Check for a valid Indian GSTIN number on the website footer and verify it on the official GST portal (services.gst.gov.in).',
      'Prefer established e-commerce platforms with trusted return and buyer protection policies.',
      'Be cautious of shopping solely based on sponsored Instagram and Facebook posts.',
    ],
    whatToDo: [
      'Contact your bank or card issuer immediately to report the transaction as merchant fraud and request a chargeback.',
      'Report the fake social media page and advertise the URL to Chakshu (sancharsaathi.gov.in/sfc/).',
      'Lodge a cyber fraud complaint on https://cybercrime.gov.in/ and with the National Consumer Helpline (consumerhelpline.gov.in).',
    ],
    relatedScams: ['phishing', 'upi-fraud', 'lottery-scam'],
    sources: [
      { name: 'Department of Consumer Affairs Guidelines on E-Commerce', url: 'https://consumerhelpline.gov.in/' },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'loan-app-fraud',
    slug: 'loan-app-fraud',
    title: 'Illegal Instant Loan Apps & Extortion Fraud',
    category: 'Personal Safety & Extortion',
    riskIndicators: ['Personal Safety & Extortion', 'Financial Loss', 'Identity Theft'],
    shortDescription:
      'Predatory instant loan apps disburse tiny loans without collateral, steal entire phone contacts and photo galleries upon installation, and subject borrowers and their families to severe harassment.',
    howItWorks: [
      'Contact: Targeted ads on social media offering instant loan approval within 5 minutes without credit score or documentation.',
      'Manipulation: The app requires invasive permissions: access to all contacts, photo gallery, camera, and location.',
      'Action: The app disburses a fraction of the requested loan (e.g., borrower requests ₹10,000, receives ₹6,000 after steep deductions). Within 5–7 days, the app demands repayment of ₹12,000.',
      'Exploitation: Recovery agents threaten to send morphed, vulgar photographs of the borrower to everyone in their phone contact list if extortionate amounts are not paid.',
    ],
    realWorldExample:
      'Illustrative Example: Deepak needed urgent medical expenses and installed "QuickRupee Loan" from a web link. The app requested full access to his phone contacts and storage. He received ₹4,500. Five days later, agents called demanding ₹10,000. When Deepak protested the interest rate, the agents created a morphed pornographic poster with his face and texted it to his sister and colleagues.',
    warningSigns: [
      'Loan apps downloaded from third-party websites, WhatsApp links, or unofficial APK repositories.',
      'Apps demanding excessive permissions: full contacts, photo album, and SMS access.',
      'Short repayment tenure of 5–7 days with astronomical deduction fees (over 40%).',
      'The lending app is NOT tied to any RBI-registered Bank or Non-Banking Financial Company (NBFC).',
    ],
    typicalTactics: [
      'Aggressive recovery agents using virtual VOIP numbers threatening legal notices, police raids, and public humiliation.',
      'Circulating morphed images of the borrower to family members, employers, and social contacts.',
    ],
    legitimateVsScam: {
      legitimate:
        'RBI-regulated lending institutions never demand access to phone contacts or photo galleries and adhere strictly to the Fair Practices Code.',
      scam:
        'Illegal lending syndicates use data-theft malware to blackmail borrowers with extortionate penalties.',
    },
    preventionTips: [
      'Only borrow from RBI-registered Banks and NBFCs. Verify the lending partner on the official RBI website (rbi.org.in).',
      'Never grant contacts or gallery permissions to any financial or loan application.',
      'Never download financial applications from APK links outside the Google Play Store or Apple App Store.',
    ],
    whatToDo: [
      'Do NOT pay extortion money. Paying will only invite repeated higher demands.',
      'Immediately revoke app permissions and uninstall the application.',
      'Report the harassment and blackmail immediately to local police or dial 112 / 1930.',
      'File an urgent complaint on https://cybercrime.gov.in/ under Cyber Harassment / Extortion.',
      'File an alert on the RBI Sachet portal (sachet.rbi.org.in) against the unregistered lending app.',
    ],
    relatedScams: ['sextortion', 'identity-theft', 'remote-access-scam'],
    sources: [
      { name: 'RBI Guidelines on Digital Lending & Sachet Portal', url: 'https://sachet.rbi.org.in/' },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
      { name: 'National Emergency Support 112', url: OFFICIAL_LINKS.EMERGENCY_112 },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'otp-fraud',
    slug: 'otp-fraud',
    title: 'OTP Stealing, Social Engineering & Account Takeover',
    category: 'Account & Device Security',
    riskIndicators: ['Account Takeover', 'Financial Loss', 'Identity Theft'],
    shortDescription:
      'Scammers use deceptive psychological manipulation over phone calls and SMS to coax victims into verbally revealing One-Time Passwords (OTPs) needed to authorize transactions.',
    howItWorks: [
      'Contact: The fraudster calls pretending to be a bank security officer, courier delivery agent, or telecom technician.',
      'Manipulation: They claim your credit card is blocked, an unauthorized transaction of ₹40,000 is pending cancellation, or a package is arriving.',
      'Action: They tell you: "We are sending you a cancellation code to stop the payment. Read out the 6-digit number to cancel."',
      'Exploitation: The 6-digit number is actually an approval OTP generated by the scammer attempting to siphon funds from your account. Reading it out completes the unauthorized transaction.',
    ],
    realWorldExample:
      'Illustrative Example: Vinod received a call from someone identifying as an HDFC fraud prevention agent. The caller knew Vinod\'s name and the last four digits of his card. The caller said: "Someone in Delhi is attempting to withdraw ₹35,000 from your card right now. To block this, we sent a stop-payment OTP. Please tell me the OTP so I can reverse it." Vinod gave the OTP. Instantly, ₹35,000 was debited.',
    warningSigns: [
      'Anyone asking you to read out or forward an OTP, even if they claim to work for your bank or police.',
      'Callers creating intense panic: "Your account will be suspended in 5 minutes unless you verify this code."',
      'The OTP SMS message clearly states: "Do not share this OTP with anyone, including bank staff. OTP for transaction of Rs. X at Merchant Y".',
    ],
    typicalTactics: [
      'Callers claiming the OTP is a "cancellation OTP" or "security verification code".',
      'Scammers requesting you to forward SMS or dial MMI codes like `*21*<number>#` (which silently forwards your incoming calls/SMS).',
    ],
    legitimateVsScam: {
      legitimate:
        'No bank, payment gateway, telecom company, or government agency ever asks customers to share their OTP.',
      scam:
        'Fraudsters invent false crises to bypass two-factor authentication by exploiting user fear and confusion.',
    },
    preventionTips: [
      'Universal Rule: NEVER share your OTP with anyone under any circumstances, verbally or via text.',
      'Always read the full text of an OTP SMS carefully: Check the amount and merchant name before approving anything.',
      'If someone calls claiming to be from your bank, hang up and dial the official number printed on the back of your bank card.',
    ],
    whatToDo: [
      'Immediately contact your bank to block internet banking, disable UPI, and hotlist all cards.',
      'Change passwords for your banking accounts and registered email addresses.',
      'Call 1930 within the hour and lodge a complaint on https://cybercrime.gov.in/.',
    ],
    relatedScams: ['sim-swap', 'phishing', 'fake-customer-care'],
    sources: [
      { name: 'RBI Financial Awareness - OTP Security', url: OFFICIAL_LINKS.RBI_AWARENESS },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'sim-swap',
    slug: 'sim-swap',
    title: 'SIM Swap Fraud & Telecom Takeover',
    category: 'Account & Device Security',
    riskIndicators: ['Account Takeover', 'Financial Loss', 'Identity Theft'],
    shortDescription:
      'Criminals use forged identity documents to convince telecom operators to issue a replacement SIM card with your phone number, cutting off your mobile connectivity and intercepting all banking OTPs.',
    howItWorks: [
      'Contact: Criminals acquire the victim\'s personal info (name, PAN, Aadhaar, date of birth) through phishing or data leaks.',
      'Manipulation: The scammer visits a telecom store with forged KYC documents or submits a fraudulent SIM upgrade request (e.g. 4G to 5G upgrade).',
      'Action: The telecom operator deactivates the victim\'s original physical SIM and activates the scammer\'s new duplicate SIM.',
      'Exploitation: The victim\'s phone displays "No Service" or "Emergency Calls Only". Meanwhile, the fraudster resets bank passwords and empties accounts using intercepted OTPs.',
    ],
    realWorldExample:
      'Illustrative Example: Kavita suddenly noticed her mobile phone showed "No Service" at 11:00 PM. She assumed it was a routine network tower glitch and went to sleep. Next morning, she checked her email on home Wi-Fi and found notifications of password resets, followed by three RTGS transfers draining ₹8 lakh from her business account.',
    warningSigns: [
      'Sudden and unexplained loss of mobile network connectivity lasting over 30 minutes in an area with good coverage.',
      'Receiving unexpected SMS alerts from telecom operators asking you to confirm a SIM upgrade or replacement request (e.g., "Reply 1 to confirm eSIM activation").',
      'Inability to make outgoing calls or receive OTPs while others around you have working connectivity.',
    ],
    typicalTactics: [
      'Callers posing as telecom executives offering "Free 5G upgrades" and instructing the user to send an SMS with a 20-digit SIM number to telecom numbers (e.g., 121 or 199).',
    ],
    legitimateVsScam: {
      legitimate:
        'Telecom providers send confirmation SMS warnings before processing a SIM swap and enforce waiting periods for SMS delivery.',
      scam:
        'Scammers trick users into approving electronic SIM (eSIM) activations or use bribed/corrupted retail outlets to swap SIMs.',
    },
    preventionTips: [
      'If your phone abruptly loses network signal without explanation, investigate immediately — do not wait overnight.',
      'Never reply to SMS messages requesting confirmation of SIM upgrades or eSIM transfers unless you initiated them at an official store.',
      'Protect your personal identity documents (Aadhaar, PAN) from unauthorized disclosure.',
      'Set up a SIM card PIN in your phone settings to prevent physical SIM misuse.',
    ],
    whatToDo: [
      'Immediately contact your telecom operator from another phone to verify the status of your SIM card.',
      'If an unauthorized SIM swap occurred, ask the operator to block the number immediately.',
      'Notify your bank immediately from a secondary phone to freeze all net banking and UPI operations.',
      'Lodge a report on https://cybercrime.gov.in/ and inform local police.',
    ],
    relatedScams: ['otp-fraud', 'identity-theft', 'phishing'],
    sources: [
      { name: 'DoT Guidelines on SIM Issuance and Sanchar Saathi', url: OFFICIAL_LINKS.SANCHAR_SAATHI },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'social-media-impersonation',
    slug: 'social-media-impersonation',
    title: 'Social Media Impersonation & Account Cloning',
    category: 'Impersonation & Coercion',
    riskIndicators: ['Identity Theft', 'Financial Loss'],
    shortDescription:
      'Scammers copy profile photos and bios of real people to create clone accounts, then message friends and family claiming an urgent medical emergency to borrow money.',
    howItWorks: [
      'Contact: A clone Instagram/Facebook profile or compromised WhatsApp account messages friends and colleagues of the victim.',
      'Manipulation: The scammer claims an acute medical crisis, accident, or temporary inability to access their primary UPI account.',
      'Action: They request an urgent transfer of ₹10,000 to ₹50,000, promising repayment first thing the next morning.',
      'Exploitation: Compassionate friends transfer funds to the scammer\'s UPI QR code or bank account before verifying with the real friend in person.',
    ],
    realWorldExample:
      'Illustrative Example: Ananya received a direct message on Instagram from what appeared to be her school friend Rohan: "Hey Ananya, my mother was admitted to the hospital ICU for an emergency. My UPI daily limit is reached. Can you please GPay ₹25,000 to this doctor\'s clinic QR code? I will return it tomorrow morning." Ananya sent the money. When she later called Rohan, he told her his profile had been duplicated and he was at work.',
    warningSigns: [
      'A friend or relative suddenly contacting you from a newly created social media account or unfamiliar phone number.',
      'Extreme urgency regarding medical emergencies, road accidents, or stranded travel situations demanding immediate digital payment.',
      'Reluctance or refusal to take a voice call or video call to confirm identity ("I am in the ICU doctor room, cannot talk on call").',
      'The UPI VPA or account holder name provided does not match your friend\'s real name.',
    ],
    typicalTactics: [
      'Downloading public photos from Facebook/Instagram and creating duplicate accounts with a minor spelling variation (e.g., `@rohan_sharma_` instead of `@rohan_sharma`).',
      'Hijacking WhatsApp accounts by tricking victims into forwarding a 6-digit WhatsApp registration code.',
    ],
    legitimateVsScam: {
      legitimate:
        'A real friend facing an actual crisis will readily speak on a direct voice call or verify their circumstances.',
      scam:
        'Impersonators avoid live audio/video contact and rely exclusively on text messages to manufacture urgency.',
    },
    preventionTips: [
      'Always call the person directly on their known phone number before sending money based on a social media message.',
      'Lock your social media profiles and keep your friends list and photo albums private to prevent photo theft.',
      'Enable Two-Step Verification on WhatsApp, Instagram, and Facebook.',
    ],
    whatToDo: [
      'Report and block the fake profile directly on the social media platform.',
      'Warn friends and family publicly via your own genuine profile so others are not defrauded.',
      'If money was transferred, call 1930 and file a complaint on https://cybercrime.gov.in/.',
    ],
    relatedScams: ['romance-scam', 'deepfake-scam', 'phishing'],
    sources: [
      { name: 'I4C Social Media Security Advisory', url: OFFICIAL_LINKS.I4C },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'romance-scam',
    slug: 'romance-scam',
    title: 'Romance & Online Friendship Scams',
    category: 'Impersonation & Coercion',
    riskIndicators: ['Financial Loss', 'Identity Theft', 'Personal Safety & Extortion'],
    shortDescription:
      'Fraudsters pose as affluent foreigners, doctors, or military officers on dating apps and social media, grooming victims over months before inventing expensive crises or custom gifts to extort money.',
    howItWorks: [
      'Contact: The scammer reaches out on Tinder, Bumble, Instagram, or Facebook using attractive stolen photos.',
      'Manipulation: They build deep emotional rapport over weeks or months, expressing deep affection and discussing marriage.',
      'Action: The scammer claims they have sent luxury jewelry, gold, or foreign currency as a surprise gift, or that they face an overseas legal crisis.',
      'Exploitation: A fake "customs officer" or "airport authority" calls demanding customs clearance fees, anti-money laundering certificates, and courier penalties running into lakhs of rupees.',
    ],
    realWorldExample:
      'Illustrative Example: Meera, a 42-year-old manager, was befriended on Instagram by "Dr. Richard", an orthopedic surgeon claiming to be based in the UK. After three months of daily messaging, Richard claimed he was traveling to Delhi to propose to her. The next day, Meera received a call from someone posing as a New Delhi Airport Customs Officer, stating Richard was detained with £100,000 cash and gold gifts, and needed ₹1.8 lakh paid in clearance penalties. Meera paid before discovering Richard was fictitious.',
    warningSigns: [
      'The person professes deep love and devotion very quickly without having ever met you in person.',
      'They always have an excuse to avoid live video calls (poor military satellite internet, broken camera, hospital rules).',
      'Stories involving sending expensive foreign parcels that get stuck at customs or airports.',
      'Demands to deposit customs clearance fees into private Indian savings accounts.',
    ],
    typicalTactics: [
      'Using stolen photos of European models, pilots, or United Nations peacekeepers.',
      'Forged DHL or FedEx consignment tracking documents with fake airway bills.',
    ],
    legitimateVsScam: {
      legitimate:
        'Indian Customs (CBIC) never contacts individuals demanding customs clearance fees deposited into private individual savings accounts.',
      scam:
        'Scammers use emotional manipulation followed by simulated airport and customs extortion.',
    },
    preventionTips: [
      'Never send money, gifts, or financial assistance to someone you have only met online.',
      'Do a Google Reverse Image Search on profile photos to identify stolen modeling shots.',
      'Remember: Customs duties are paid through official government challans, never via personal UPI or individual bank accounts.',
    ],
    whatToDo: [
      'Cease all communication immediately and do not pay any further "customs fees".',
      'Preserve chat histories, call recordings, emails, and bank transaction receipts.',
      'Report the financial fraud to 1930 and https://cybercrime.gov.in/.',
    ],
    relatedScams: ['matrimonial-scam', 'social-media-impersonation', 'sextortion'],
    sources: [
      { name: 'Central Board of Indirect Taxes and Customs (CBIC) Advisory on Fake Parcel Scams', url: 'https://www.cbic.gov.in/' },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'sextortion',
    slug: 'sextortion',
    title: 'Sextortion & Video Call Blackmail',
    category: 'Personal Safety & Extortion',
    riskIndicators: ['Personal Safety & Extortion', 'Financial Loss'],
    shortDescription:
      'Victims receive an unexpected WhatsApp video call showing an explicit clip, their screen is recorded, and criminals threaten to release morphed recordings to their family unless money is paid.',
    howItWorks: [
      'Contact: A stranger (often with an attractive female profile photo) messages on WhatsApp or Facebook, or initiates a sudden video call.',
      'Manipulation: When the victim answers, a pre-recorded nude or sexually explicit video plays on the other side. The scammer takes a screen recording showing the victim\'s face alongside the explicit footage.',
      'Action: Within minutes, the victim receives a video clip of the call along with screenshots of their family members\' Facebook/Instagram friend lists.',
      'Exploitation: Scammers demand ₹20,000 to ₹1,00,000, threatening to upload the video to YouTube, Facebook, and send it to the victim\'s parents and employer. An accomplice may also call posing as a "Delhi Police Cyber Officer" offering to delete the video for a fee.',
    ],
    realWorldExample:
      'Illustrative Example: Suresh answered an unknown WhatsApp video call late at night. The screen showed an explicit video for five seconds before disconnecting. Minutes later, Suresh received a video collage showing his face next to the explicit video, followed by a threatening message listing his wife\'s and daughter\'s phone numbers. Terrified, Suresh transferred ₹15,000, only for the extortionist to demand ₹30,000 more.',
    warningSigns: [
      'Unsolicited late-night video calls from unknown international or Indian numbers.',
      'Strangers quickly steering conversations toward sexually explicit topics or inviting you to video call.',
      'Follow-up calls from individuals claiming to be "YouTube Grievance Officers" or "Police Officers" demanding money to delete clips.',
    ],
    typicalTactics: [
      'Screen-recording software capturing the victim\'s shocked face looking at the phone camera.',
      'Forged Delhi Police or Crime Branch summons with fake seals demanding money to halt an FIR.',
    ],
    legitimateVsScam: {
      legitimate:
        'Law enforcement agencies and social platforms never charge fees to investigate or remove illegal extortion material.',
      scam:
        'Blackmailers operate in syndicates using fear and social stigma to extract endless rounds of extortion payments.',
    },
    preventionTips: [
      'Never answer video calls from unknown numbers on WhatsApp, Telegram, or social media.',
      'Keep your social media friend lists and family relations private to prevent blackmailers from identifying contacts.',
      'If caught in this situation, REMEMBER: Paying money NEVER stops the blackmail. It only confirms you are scared and leads to higher demands.',
    ],
    whatToDo: [
      'Do NOT pay any money. Block the extortionist on all channels immediately.',
      'Deactivate or set all your social media accounts to private temporarily.',
      'Preserve the extortion messages, phone numbers, and payment details as evidence.',
      'Report the incident immediately on https://cybercrime.gov.in/ (specialized section for Cyber Crime against Women & Children / Extortion).',
      'If facing severe mental distress or physical threats, call 112 or local police.',
    ],
    relatedScams: ['digital-arrest', 'social-media-impersonation', 'loan-app-fraud'],
    sources: [
      { name: 'MHA Advisory on Sextortion and Video Call Frauds', url: OFFICIAL_LINKS.I4C },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
      { name: 'National Emergency Support 112', url: OFFICIAL_LINKS.EMERGENCY_112 },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'remote-access-scam',
    slug: 'remote-access-scam',
    title: 'Remote Access Application Scams (AnyDesk, TeamViewer)',
    category: 'Account & Device Security',
    riskIndicators: ['Device Compromise', 'Account Takeover', 'Financial Loss'],
    shortDescription:
      'Fraudsters trick victims into downloading legitimate screen-sharing apps (AnyDesk, QuickSupport, TeamViewer, RustDesk), allowing the scammer to remotely view passwords and operate banking apps.',
    howItWorks: [
      'Contact: Caller claims to be from electricity board, telecom company, bank, or online marketplace support.',
      'Manipulation: They claim a pending refund, failed KYC, or faulty SIM requires technical diagnosis.',
      'Action: They guide the victim to install AnyDesk or TeamViewer QuickSupport from the Play Store and ask for the 9-digit remote access code.',
      'Exploitation: Once granted permission, the fraudster views the victim\'s screen in real-time, watches them enter banking passwords/PINs, or directly controls the phone to transfer funds.',
    ],
    realWorldExample:
      'Illustrative Example: Mohan was trying to resolve a faulty broadband connection. A fake technician called and told Mohan to download "AnyDesk" from Google Play to "update his broadband router configuration". Mohan installed it and read out the 9-digit session code. The technician asked Mohan to open his bank app and transfer ₹10 to check connectivity. The scammer watched Mohan type his credentials, and then emptied ₹90,000.',
    warningSigns: [
      'Any caller instructing you to install AnyDesk, TeamViewer, RustDesk, or QuickSupport on your mobile phone or computer.',
      'Callers asking you to share a 9-digit or 10-digit code displayed inside an application.',
      'A prompt on your screen asking "Do you want to allow remote access / screen recording?"',
    ],
    typicalTactics: [
      'Claiming the remote app is an "official bank security diagnostic tool" or "KYC verification certificate".',
    ],
    legitimateVsScam: {
      legitimate:
        'Legitimate companies and banks will NEVER ask you to install screen-sharing software on your personal phone to resolve consumer queries.',
      scam:
        'Scammers exploit legitimate IT remote assistance utilities to bypass app security and observe two-factor authentication codes.',
    },
    preventionTips: [
      'NEVER install AnyDesk, TeamViewer, RustDesk, or similar tools at the request of an incoming caller.',
      'Never read out or share remote connection codes or passwords.',
      'If you accidentally install one, disconnect Wi-Fi and mobile data immediately to cut off the remote connection.',
    ],
    whatToDo: [
      'Immediately put your device into Airplane Mode or switch off your Wi-Fi/mobile data.',
      'Uninstall the remote software immediately.',
      'From a separate trusted phone or computer, contact your bank to freeze net banking and cancel cards.',
      'Dial 1930 and file a complaint on https://cybercrime.gov.in/.',
    ],
    relatedScams: ['fake-customer-care', 'tech-support-scam', 'fake-kyc'],
    sources: [
      { name: 'Reserve Bank of India Advisory on Remote Access Apps', url: OFFICIAL_LINKS.RBI_AWARENESS },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'fake-kyc',
    slug: 'fake-kyc',
    title: 'Fake Bank & Telecom KYC Expiry Scams',
    category: 'Account & Device Security',
    riskIndicators: ['Account Takeover', 'Financial Loss', 'Identity Theft'],
    shortDescription:
      'Phishing SMS and automated calls falsely warning that your bank account, Paytm wallet, or SIM card will be deactivated within 24 hours unless you complete an immediate online KYC update.',
    howItWorks: [
      'Contact: Urgent SMS: "Dear Customer, your Bank Account KYC has expired. Your account will be frozen today. Click link to update."',
      'Manipulation: Threat of blocked finances or suspended mobile connectivity causes panic.',
      'Action: The link directs to a credential phishing webpage or prompts downloading a malicious APK file (e.g., `SBI_KYC_Update.apk`).',
      'Exploitation: The victim enters their Aadhaar, PAN, NetBanking username, password, and transaction OTPs, allowing the fraudster to siphon funds immediately.',
    ],
    realWorldExample:
      'Illustrative Example: Tarun received an SMS: "Dear User, your SBI YONO account will be blocked today due to pending KYC. Update your PAN card details immediately at sbi-kyc-service.com." Fearing his account would be frozen before salary day, Tarun clicked the link, submitted his net banking password and OTP. Within minutes, ₹60,000 was transferred to an unknown account in another state.',
    warningSigns: [
      'SMS sent from regular 10-digit mobile numbers rather than official alphanumeric sender IDs.',
      'Threatening language: "Account blocked in 12 hours", "SIM deactivated tonight".',
      'Links pointing to strange websites (e.g., `.xyz`, `.top`, `.vip`, or modified domain names).',
      'Requests to download an `.apk` file outside the official Google Play Store.',
    ],
    typicalTactics: [
      'SMS impersonating major banks (SBI, HDFC, ICICI, PNB) or telecom operators (Jio, Airtel, Vi).',
      'WhatsApp messages featuring bank logos with a downloadable application file titled `KYC_Update.apk`.',
    ],
    legitimateVsScam: {
      legitimate:
        'Banks notify customers well in advance for Periodic KYC and encourage visiting the official bank branch or using the verified official mobile banking app.',
      scam:
        'Scammers use artificial 24-hour ultimatums and unverified web links to steal banking credentials.',
    },
    preventionTips: [
      'Never click on links in SMS or WhatsApp claiming to update KYC.',
      'Always visit your official bank branch or log in securely through the bank\'s verified official mobile application.',
      'Forward suspicious scam SMS to 1909 or report them on the Chakshu portal (sancharsaathi.gov.in/sfc/).',
    ],
    whatToDo: [
      'Contact your bank immediately to freeze internet banking and hotlist debit/credit cards.',
      'Change all banking credentials and passwords from a secure device.',
      'Report the fraud to 1930 and https://cybercrime.gov.in/.',
    ],
    relatedScams: ['phishing', 'remote-access-scam', 'otp-fraud'],
    sources: [
      { name: 'Reserve Bank of India Advisory on KYC Update Frauds', url: OFFICIAL_LINKS.RBI_AWARENESS },
      { name: 'Sanchar Saathi Chakshu Portal', url: OFFICIAL_LINKS.CHAKSHU },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'lottery-scam',
    slug: 'lottery-scam',
    title: 'Lottery, KBC & Fake Prize Scams',
    category: 'Digital Payments',
    riskIndicators: ['Financial Loss', 'Identity Theft'],
    shortDescription:
      'Victims receive messages or calls claiming they have won ₹25 lakh in a Kaun Banega Crorepati (KBC) lottery or automobile lucky draw, but must pay processing fees and taxes to claim the prize.',
    howItWorks: [
      'Contact: A WhatsApp voice note or message with a photo of a popular celebrity or lottery certificate claiming a ₹25,00,000 prize.',
      'Manipulation: The victim is told their mobile number was selected in an international lucky draw.',
      'Action: To claim the jackpot, the victim must deposit ₹15,000 for "GST and processing charges".',
      'Exploitation: Once paid, the scammer demands additional payments for "RBI clearance", "Currency conversion fees", and "State taxes", bleeding the victim until they realize no lottery exists.',
    ],
    realWorldExample:
      'Illustrative Example: Geeta received a WhatsApp audio message with a celebratory banner: "Congratulations! Your SIM number won the KBC 25 Lakh All-India Lucky Draw. Contact Manager Rana Pratap Singh." Geeta called the number. The manager congratulated her and asked for an initial registration fee of ₹12,500. After paying, he demanded ₹45,000 for government tax. Geeta paid a total of ₹57,500 before realizing it was a fraud.',
    warningSigns: [
      'Winning a lottery, car, or contest that you never entered or bought a ticket for.',
      'Being asked to pay an advance fee, tax, or deposit in order to collect prize money.',
      'Communications received via WhatsApp voice notes with heavy static or fake official certificates.',
    ],
    typicalTactics: [
      'WhatsApp messages featuring forged photos of Amitabh Bachchan, the KBC logo, and fake Indian government seals.',
      'Scammers impersonating bank managers based at the State Bank of India main branch in Mumbai.',
    ],
    legitimateVsScam: {
      legitimate:
        'In genuine prize contests, applicable taxes (TDS) are deducted from the prize money itself; winners are NEVER asked to pay upfront money to receive their prize.',
      scam:
        'Fraudsters invent prizes purely to harvest repeated advance fee payments.',
    },
    preventionTips: [
      'Golden Rule: You cannot win a lottery that you never bought a ticket for.',
      'Never pay any advance money, processing fee, or tax to claim a prize or reward.',
      'Report the sender\'s number to Chakshu on Sanchar Saathi (sancharsaathi.gov.in/sfc/).',
    ],
    whatToDo: [
      'Do not send any further money. Block the numbers immediately.',
      'Call 1930 immediately to report the unauthorized transfers.',
      'File an official complaint on https://cybercrime.gov.in/ with chat records and payment slips.',
    ],
    relatedScams: ['job-scam', 'online-shopping-fraud', 'phishing'],
    sources: [
      { name: 'I4C Cautionary Notice on KBC Lottery Frauds', url: OFFICIAL_LINKS.I4C },
      { name: 'Sanchar Saathi Chakshu Facility', url: OFFICIAL_LINKS.CHAKSHU },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'tech-support-scam',
    slug: 'tech-support-scam',
    title: 'Tech Support & Fake Virus Alert Scams',
    category: 'Account & Device Security',
    riskIndicators: ['Financial Loss', 'Device Compromise'],
    shortDescription:
      'Deceptive browser pop-ups lock the computer screen with blaring audio sirens, falsely claiming Windows/Apple security detected a critical virus and prompting an immediate call to a fake helpline.',
    howItWorks: [
      'Contact: A pop-up ad or malicious redirect opens a full-screen browser window mimicking Microsoft or Windows Defender.',
      'Manipulation: The screen displays flashing red alerts, loud alarms, and warning messages: "System Infected! Your passwords and banking info are being stolen. Call Microsoft Support immediately at 1800-XXX-XXXX."',
      'Action: The terrified user calls the number. The fake technician claims the computer has been compromised by foreign hackers and offers to clean it for a fee ($200 to ₹15,000).',
      'Exploitation: The scammer connects via remote desktop, displays benign system event logs to feign a virus, charges the user\'s card, and may install genuine spyware for future access.',
    ],
    realWorldExample:
      'Illustrative Example: Prakash, a 65-year-old pensioner, was reading news when his screen locked with a loud alarm and a message: "CRITICAL ALERT: Windows Security has blocked your computer. Do not shut down. Call 1800-xxx-xxxx." He panicked and called. The "technician" asked Prakash to grant remote access and pay ₹12,000 for a five-year antivirus license. Prakash paid with his credit card.',
    warningSigns: [
      'Browser windows that refuse to close and make loud alarm sounds.',
      'Error messages on a webpage asking you to call a telephone number for technical support.',
      'Microsoft, Apple, or Google displaying a phone number on an unexpected pop-up screen.',
    ],
    typicalTactics: [
      'Using JavaScript full-screen exploits to prevent the user from clicking the normal "X" button.',
      'Opening the Windows Command Prompt, typing `tree` or `netstat`, and claiming harmless background connections are active hackers.',
    ],
    legitimateVsScam: {
      legitimate:
        'Microsoft and Apple will NEVER send unsolicited pop-up messages or phone calls instructing you to call a toll-free number to fix your computer.',
      scam:
        'Call center fraudsters use browser lock screens to intimidate non-technical users into paying for useless services.',
    },
    preventionTips: [
      'If your browser locks with a warning siren, simply force-close the browser (press Alt + F4 on Windows or Cmd + Option + Esc on Mac).',
      'Never call phone numbers displayed on browser error pop-ups.',
      'Use a reputable browser ad-blocker to prevent malicious redirect scripts.',
    ],
    whatToDo: [
      'Force close the browser and restart your device.',
      'If you granted remote access, immediately uninstall the software and disconnect from the internet.',
      'If you paid with a debit or credit card, call your bank immediately to dispute the charge.',
      'Report the phone number and website on https://cybercrime.gov.in/.',
    ],
    relatedScams: ['remote-access-scam', 'fake-customer-care', 'phishing'],
    sources: [
      { name: 'CERT-In Advisory on Tech Support Scams', url: OFFICIAL_LINKS.CERT_IN },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'identity-theft',
    slug: 'identity-theft',
    title: 'Identity Theft & Aadhaar / PAN Document Misuse',
    category: 'Account & Device Security',
    riskIndicators: ['Identity Theft', 'Financial Loss'],
    shortDescription:
      'Criminals use stolen photocopies or digital images of your Aadhaar card, PAN card, and electricity bills to obtain unauthorized SIM cards, take fraudulent micro-loans, or open mule bank accounts.',
    howItWorks: [
      'Contact: Scammers harvest copies of government IDs from unverified hotel check-ins, job applications, or data leaks.',
      'Manipulation: Using your identity, fraudsters impersonate you to financial or telecom entities.',
      'Action: They apply for instant consumer credit lines, register pre-activated SIM cards, or open mule accounts for money laundering.',
      'Exploitation: Months later, collection agents call the victim for unpaid loan defaults, or police arrive investigating cybercrimes committed using a phone number issued under the victim\'s name.',
    ],
    realWorldExample:
      'Illustrative Example: Harish applied for a home loan and discovered his CIBIL score had plummeted from 780 to 590. Upon downloading his credit report, he found three overdue personal loans of ₹25,000 each taken from digital lending apps he had never heard of, using his PAN and an old Aadhaar photo.',
    warningSigns: [
      'Receiving collection notices or debt recovery calls for loans you never applied for.',
      'Unexplained drops in your credit score (CIBIL / Experian).',
      'Discovering unfamiliar mobile numbers registered under your Aadhaar on the government TAFCOP portal.',
    ],
    typicalTactics: [
      'Using physical photocopy shops or unsecured resume collection portals to harvest unmasked ID proofs.',
      'Taking small unsecured consumer loans using forged e-KYC documents.',
    ],
    legitimateVsScam: {
      legitimate:
        'UIDAI recommends using Masked Aadhaar (showing only the last 4 digits) for general identity verification.',
      scam:
        'Identity thieves seek unmasked, full Aadhaar and PAN documents to bypass identity checks.',
    },
    preventionTips: [
      'Lock your Aadhaar biometrics using the official mAadhaar application or UIDAI portal (myaadhaar.uidai.gov.in).',
      'Always share "Masked Aadhaar" instead of the full 12-digit Aadhaar card for routine ID verification.',
      'Check your registered mobile connections regularly on the DoT TAFCOP portal (tafcop.sancharsaathi.gov.in).',
      'Periodically review your CIBIL credit report to detect unauthorized loan accounts.',
    ],
    whatToDo: [
      'Lock your Aadhaar biometrics immediately on the UIDAI portal.',
      'Disown unauthorized SIM connections on the TAFCOP portal.',
      'File an identity theft complaint at your local police station and at https://cybercrime.gov.in/.',
      'Dispute the fraudulent accounts with credit rating agencies (CIBIL, Experian, CRIF High Mark).',
    ],
    relatedScams: ['sim-swap', 'loan-app-fraud', 'fake-kyc'],
    sources: [
      { name: 'UIDAI - Masked Aadhaar and Biometric Lock Information', url: 'https://uidai.gov.in/' },
      { name: 'Sanchar Saathi TAFCOP Portal', url: OFFICIAL_LINKS.SANCHAR_SAATHI },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'cryptocurrency-scam',
    slug: 'cryptocurrency-scam',
    title: 'Cryptocurrency & Fake Trading Platform Scams',
    category: 'Employment & Investment',
    riskIndicators: ['Financial Loss'],
    shortDescription:
      'Fraudsters lure victims into purchasing cryptocurrency on peer-to-peer exchanges and depositing it into fraudulent international trading websites showing fake compounding balances.',
    howItWorks: [
      'Contact: Contact via social media or crypto discussion forums introducing an "exclusive arbitrage trading system" or "DeFi liquidity pool".',
      'Manipulation: Scammers show forged certificates and guide the victim to purchase USDT or Bitcoin on legitimate Indian exchanges (WazirX, CoinDCX, Binance P2P).',
      'Action: The victim is instructed to transfer the cryptocurrency out of their exchange wallet into a private deposit address belonging to the scammer\'s platform.',
      'Exploitation: The website displays fictional daily profits. When the victim requests a withdrawal, the platform demands an "Anti-Money Laundering certificate deposit" in crypto, permanently freezing the funds.',
    ],
    realWorldExample:
      'Illustrative Example: Manish met an investor on LinkedIn who introduced him to a "decentralized arbitrage platform". Manish purchased ₹2 lakh worth of USDT on a registered exchange and transferred the crypto to the platform\'s wallet. The dashboard showed his balance grow to $8,000. When he tried to withdraw, customer support demanded another $1,500 in USDT as an "overseas liquidity fee". He never recovered any funds.',
    warningSigns: [
      'Guaranteed high crypto returns (e.g. 5% daily return with zero risk).',
      'Instructions to transfer cryptocurrency off registered exchanges into unknown private web wallets or DApps.',
      'Demands to pay extra crypto for "wallet activation", "blockchain gas fees", or "AML tax" to withdraw your own money.',
    ],
    typicalTactics: [
      'Creating fake web interfaces mimicking legitimate crypto protocols like Uniswap or Binance.',
      'Using smart contract approvals that drain all tokens from a victim\'s Web3 wallet.',
    ],
    legitimateVsScam: {
      legitimate:
        'Cryptocurrency investments in India are subject to FIU-IND registration and carry inherent market risks with zero profit guarantees.',
      scam:
        'Crypto scammers exploit the irreversible nature of blockchain transactions to permanently siphon assets.',
    },
    preventionTips: [
      'Never transfer cryptocurrency from your personal wallet to unknown trading websites or private wallet addresses.',
      'Beware: Once a cryptocurrency transaction is confirmed on the blockchain, it CANNOT be reversed or cancelled by anyone.',
      'Verify if any virtual digital asset service provider is registered with FIU-IND (Financial Intelligence Unit India).',
    ],
    whatToDo: [
      'Do not send any more cryptocurrency under any circumstances.',
      'Note down the deposit wallet addresses, transaction hashes (TXID), and URLs.',
      'Report the incident immediately on https://cybercrime.gov.in/ with all blockchain transaction hashes.',
      'Dial 1930 to record the financial loss details.',
    ],
    relatedScams: ['investment-fraud', 'job-scam', 'romance-scam'],
    sources: [
      { name: 'FIU-IND Guidelines on Virtual Digital Asset Service Providers', url: 'https://fiuindia.gov.in/' },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'deepfake-scam',
    slug: 'deepfake-scam',
    title: 'Deepfake & AI-Enabled Voice Impersonation Scams',
    category: 'Emerging AI & Tech',
    riskIndicators: ['Financial Loss', 'Identity Theft', 'Personal Safety & Extortion'],
    shortDescription:
      'Scammers use artificial intelligence to clone the exact voice and appearance of family members or corporate executives, calling victims in staged distress to request urgent funds.',
    howItWorks: [
      'Contact: Criminals sample a person\'s voice from a 15-second social media video, reel, or public speech.',
      'Manipulation: Using generative AI voice cloning, they call the victim sounding identical to their son, daughter, or CEO.',
      'Action: The cloned voice speaks with panicked urgency: "Dad, I had a car accident and the police are holding me. Please send ₹50,000 to this advocate immediately so they let me go."',
      'Exploitation: Believing their loved one is in mortal danger, the parent immediately transfers money before verifying their child\'s actual whereabouts.',
    ],
    realWorldExample:
      'Illustrative Example: Kamla received a frantic phone call: "Mummy, please help me! My phone was stolen and I am trapped in a police station in Bengaluru. They are going to jail me unless I pay ₹40,000 fine right now." The voice sounded indistinguishable from her son. Weeping, Kamla transferred ₹40,000 to the provided UPI ID. An hour later, her son called from his normal office, completely unaware of the event.',
    warningSigns: [
      'Urgent distress call from a loved one using an unfamiliar phone number.',
      'The caller demands immediate money transfer while crying or speaking under background static to mask AI audio artifacts.',
      'Refusal to answer personal family questions that only your real relative would know.',
    ],
    typicalTactics: [
      'AI voice cloning trained on short public Instagram Reels or YouTube videos.',
      'Deepfake video calls showing a familiar face that makes unnatural eye movements or robotic audio synchronization.',
    ],
    legitimateVsScam: {
      legitimate:
        'A real family member facing a crisis will be able to answer intimate family facts or talk on their primary phone.',
      scam:
        'AI impersonators rely on overwhelming shock value to prevent the victim from pausing to think or verify.',
    },
    preventionTips: [
      'Establish a "Family Safe Word" — a secret phrase known only to your immediate family to confirm real distress situations.',
      'If you receive a panic call from a loved one from an unknown number, hang up and dial their real phone number directly.',
      'Ask a personal verification question: "What is our pet\'s name?" or "Where did we go on vacation last December?"',
      'Be cautious about sharing high-quality voice and video clips publicly on unrestricted social media accounts.',
    ],
    whatToDo: [
      'Hang up and verify directly with your family member or their workplace/school.',
      'If money was transferred, call 1930 immediately to freeze the recipient bank account.',
      'Lodge a cyber fraud complaint at https://cybercrime.gov.in/ under AI / Deepfake Impersonation.',
    ],
    relatedScams: ['social-media-impersonation', 'digital-arrest', 'sextortion'],
    sources: [
      { name: 'MeitY Advisories on Deepfakes and AI Misuse', url: 'https://www.meity.gov.in/' },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
  {
    id: 'matrimonial-scam',
    slug: 'matrimonial-scam',
    title: 'Matrimonial & Marriage Portal Scams',
    category: 'Impersonation & Coercion',
    riskIndicators: ['Financial Loss', 'Identity Theft'],
    shortDescription:
      'Impostors create attractive profiles on verified Indian matrimonial websites claiming to be wealthy NRIs or high-ranking civil servants, gaining family trust before concocting financial emergencies.',
    howItWorks: [
      'Contact: The fraudster connects on Shaadi.com, BharatMatrimony, or Jeevansathi with a profile depicting an affluent NRI doctor, engineer, or business owner.',
      'Manipulation: They converse with the victim and their parents, sharing fake identity documents and discussing marriage dates.',
      'Action: Shortly before visiting India for the wedding or engagement, they claim an urgent financial or legal obstacle (e.g. business account frozen, customs hold on jewelry).',
      'Exploitation: The victim\'s family is persuaded to transfer large sums (₹2 lakh to ₹20 lakh) to help their future son-in-law or daughter-in-law, after which the impostor deletes the profile and disappears.',
    ],
    realWorldExample:
      'Illustrative Example: Pooja and her parents matched with "Vikram", an alleged NRI software architect based in Canada, on a matrimonial portal. Vikram spoke with Pooja\'s parents on video and finalized a wedding date. Two weeks before his scheduled flight to Mumbai, Vikram called saying his offshore bank account was temporarily audited and he needed ₹4 lakh to pay for wedding jewelry import duty. Pooja\'s father transferred the money. Vikram immediately deleted his account and switched off his phone.',
    warningSigns: [
      'The prospective match expresses sudden haste to finalize marriage arrangements without an in-person meeting between families.',
      'Any request for money, financial assistance, or loan before the marriage has taken place in person.',
      'Claims of lavish overseas assets combined with sudden bizarre financial freezes or customs impoundments.',
    ],
    typicalTactics: [
      'Using stolen pictures of real doctors, pilots, or foreign professionals.',
      'Forging boarding passes, flight tickets, and foreign passport copies to prove upcoming travel to India.',
    ],
    legitimateVsScam: {
      legitimate:
        'Genuine marriage prospects and their families arrange physical meetings and do not ask for monetary loans or customs payments.',
      scam:
        'Con artists exploit social pressure, emotional vulnerability, and marriage aspirations to extract funds.',
    },
    preventionTips: [
      'Never send money to any prospective matrimonial match or their alleged family members before an in-person meeting.',
      'Conduct independent background verification of employment, residential address, and family credentials.',
      'Insist on meeting the prospective match and their parents in person in a safe, public environment.',
    ],
    whatToDo: [
      'Cease all financial transactions immediately.',
      'Report the fraudulent profile directly to the matrimonial portal administration with chat records.',
      'File an official cyber fraud and cheating complaint on https://cybercrime.gov.in/ and with local police.',
      'Call 1930 immediately if financial transfers occurred recently.',
    ],
    relatedScams: ['romance-scam', 'social-media-impersonation', 'identity-theft'],
    sources: [
      { name: 'Ministry of Home Affairs Advisory on Matrimonial Frauds', url: OFFICIAL_LINKS.I4C },
      { name: 'National Cyber Crime Reporting Portal', url: OFFICIAL_LINKS.CYBERCRIME_PORTAL },
    ],
    lastReviewed: 'October 2026',
  },
];

