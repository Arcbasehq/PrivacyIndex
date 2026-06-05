export interface Tool {
  name: string;
  url: string;
  description: string;
  tags: string[];
  oss?: boolean;
}

export interface GuidePage {
  slug: string;
  title: string;
  category: string;
  color: string;
  icon: string;
  description: string;
  intro: string;
  criteria: string[];
  tools: Tool[];
  note?: string;
}

export const guidePages: GuidePage[] = [
  {
    slug: 'privacy-vpn',
    title: 'VPN Services',
    category: 'Browsing',
    color: '#2dd4bf',
    icon: 'fa-shield-halved',
    description:
      'Encrypted tunnel services evaluated for logging practices, jurisdiction, and audit history.',
    intro:
      'A VPN (Virtual Private Network) routes your internet traffic through an encrypted tunnel to a server operated by the VPN provider. This masks your IP address from websites you visit and prevents your ISP from logging your browsing activity. A VPN does not make you anonymous — the VPN provider can see your traffic — so provider selection and trust verification are critical.',
    criteria: [
      'No-logs policy verified by independent third-party audit',
      'Jurisdiction outside 5/9/14 Eyes intelligence alliances',
      'Open-source client software with reproducible builds',
      'Accepts anonymous payment methods (cash, Monero)',
      'Supports modern protocols: WireGuard, OpenVPN',
      'Warrant canary maintained and updated regularly',
    ],
    tools: [
      {
        name: 'Mullvad VPN',
        url: 'https://mullvad.net',
        description:
          'Sweden-based, no-account model, accepts cash. Independently audited. WireGuard and OpenVPN support.',
        tags: ['No Logs', 'Audited', 'Open Source', 'Cash Payment'],
      },
      {
        name: 'IVPN',
        url: 'https://www.ivpn.net',
        description:
          'Gibraltar-based, account-free option, open-source apps. Strong privacy policy with published audit.',
        tags: ['No Logs', 'Audited', 'Open Source'],
      },
      {
        name: 'Proton VPN',
        url: 'https://protonvpn.com',
        description:
          'Swiss-based, free tier available, open-source clients. Part of Proton ecosystem.',
        tags: ['No Logs', 'Audited', 'Open Source', 'Free Tier'],
      },
    ],
    note: 'Avoid VPNs that are free, ad-supported, or owned by large holding companies with opaque ownership structures. A VPN shifts trust from your ISP to the VPN provider — verify that trust independently.',
  },
  {
    slug: 'private-browser',
    title: 'Web Browsers',
    category: 'Browsing',
    color: '#60a5fa',
    icon: 'fa-globe',
    description:
      'Privacy-respecting browsers that minimize fingerprinting, telemetry, and third-party tracking.',
    intro:
      'Your browser is one of the highest-risk surfaces for privacy leakage. Default browsers from major vendors collect telemetry, enable broad third-party access, and resist meaningful configuration. Privacy-focused browsers reduce this surface through hardened defaults, fingerprinting resistance, and minimal or zero telemetry.',
    criteria: [
      'No telemetry by default, or fully opt-in',
      'Fingerprinting resistance built into the engine',
      'Tracker and ad blocking included or easily added',
      'No integration with advertising or data broker services',
      'Open-source codebase with reproducible builds',
      'Regular security patch cadence tracking upstream',
    ],
    tools: [
      {
        name: 'Firefox',
        url: 'https://www.mozilla.org/firefox/',
        description:
          'Highly configurable with strong extension support. Requires manual hardening or user.js profile for privacy. Best base for desktop browsing.',
        tags: ['Open Source', 'Extensions'],
        oss: true,
      },
      {
        name: 'Librewolf',
        url: 'https://librewolf.net',
        description:
          'Firefox fork with privacy defaults pre-applied: uBlock Origin included, telemetry removed, strict content blocking.',
        tags: ['Open Source', 'Hardened Defaults', 'No Telemetry'],
        oss: true,
      },
      {
        name: 'Brave',
        url: 'https://brave.com',
        description:
          'Chromium-based with built-in ad/tracker blocking and fingerprinting resistance. Ships crypto features that can be disabled.',
        tags: ['Open Source', 'Built-in Blocking'],
        oss: true,
      },
      {
        name: 'Tor Browser',
        url: 'https://www.torproject.org',
        description:
          'Routes traffic through the Tor network. Maximum anonymity at the cost of performance. Only option for high-risk threat models.',
        tags: ['Open Source', 'Tor Network', 'Anonymity'],
        oss: true,
      },
    ],
  },
  {
    slug: 'privacy-browser-addons',
    title: 'Browser Addons',
    category: 'Browsing',
    color: '#60a5fa',
    icon: 'fa-puzzle-piece',
    description:
      'Vetted browser extensions that reduce tracking, block ads, and harden browser privacy without introducing new risks.',
    intro:
      'Browser extensions can significantly improve privacy — or introduce new risks if poorly chosen. Every extension you install has access to your browsing data. Keep your extension surface minimal and audit each one. Prefer open-source extensions from established projects with published privacy policies.',
    criteria: [
      'Open-source with auditable code',
      'Minimal permissions — no unnecessary access',
      'No monetization via data collection or tracking',
      'Actively maintained with regular updates',
      'Compatible with privacy-focused browsers',
    ],
    tools: [
      {
        name: 'uBlock Origin',
        url: 'https://github.com/gorhill/uBlock',
        description:
          'The standard for ad and tracker blocking. Efficient, highly configurable, and fully open-source. Use in medium or strict mode.',
        tags: ['Open Source', 'Ad Blocking', 'Tracker Blocking'],
        oss: true,
      },
      {
        name: 'LocalCDN',
        url: 'https://www.localcdn.org',
        description:
          'Intercepts CDN requests and serves resources locally, preventing cross-site tracking via shared CDN infrastructure.',
        tags: ['Open Source', 'CDN Blocking'],
        oss: true,
      },
      {
        name: 'Cookie AutoDelete',
        url: 'https://github.com/Cookie-AutoDelete/Cookie-AutoDelete',
        description:
          'Automatically removes cookies from closed tabs. Pairs well with a whitelist for sites you want to stay logged in to.',
        tags: ['Open Source', 'Cookie Management'],
        oss: true,
      },
      {
        name: 'KeePassXC-Browser',
        url: 'https://keepassxc.org',
        description:
          'Browser integration for KeePassXC password manager. Fills credentials without relying on cloud storage.',
        tags: ['Open Source', 'Password Manager'],
        oss: true,
      },
    ],
    note: 'Do not install multiple ad blockers simultaneously — they conflict and can degrade performance. uBlock Origin alone in strict mode is sufficient for most users.',
  },
  {
    slug: 'private-search',
    title: 'Search Engines',
    category: 'Browsing',
    color: '#a78bfa',
    icon: 'fa-magnifying-glass',
    description:
      'Search engines that do not profile users, build cross-session tracking databases, or sell query data.',
    intro:
      'Every search query you submit is a direct signal of your interests, concerns, and intentions. Major search engines aggregate this into persistent user profiles used for ad targeting. Privacy-respecting search engines either avoid logging queries entirely or provide self-hosted options where you control the data.',
    criteria: [
      'No persistent user profiles or query history',
      'No cross-site tracking identifiers',
      'Transparent privacy policy with no data sales clauses',
      'Own index or clearly disclosed index sources',
      'Accessible over Tor or without JavaScript',
    ],
    tools: [
      {
        name: 'SearXNG',
        url: 'https://searxng.org',
        description:
          'Self-hosted metasearch engine aggregating results from multiple sources. Zero data retention when self-hosted. Many public instances available.',
        tags: ['Open Source', 'Self-Hostable', 'No Logs'],
        oss: true,
      },
      {
        name: 'Brave Search',
        url: 'https://search.brave.com',
        description:
          'Independent index — not proxied from Google/Bing. Anonymous search mode. US-based with published privacy policy.',
        tags: ['Independent Index', 'Anonymous Mode'],
      },
      {
        name: 'DuckDuckGo',
        url: 'https://duckduckgo.com',
        description:
          'Bing-based results. No user profiles built. US-based jurisdiction. Long track record in privacy space.',
        tags: ['No Profiles', 'Onion Available'],
      },
      {
        name: 'Startpage',
        url: 'https://www.startpage.com',
        description:
          'Proxies Google results without passing your IP or identity to Google. Netherlands-based. Good for result quality.',
        tags: ['Google Results', 'No IP Sharing'],
      },
    ],
  },
  {
    slug: 'anonymizing-networks',
    title: 'Anonymizing Networks',
    category: 'Browsing',
    color: '#2dd4bf',
    icon: 'fa-user-secret',
    description:
      'Overlay networks designed to anonymize traffic by routing it through multiple nodes, preventing any single observer from linking source to destination.',
    intro:
      'Anonymizing networks provide a stronger privacy guarantee than VPNs by removing the need to trust a single provider. Traffic is encrypted in layers and routed through multiple relays — no single node knows both the origin and destination. This comes at the cost of latency and throughput.',
    criteria: [
      'Multi-hop routing with layered encryption',
      'No single point of trust or failure',
      'Open-source protocol and reference implementation',
      'Active security research and public audits',
      'Resistant to traffic correlation attacks',
    ],
    tools: [
      {
        name: 'Tor',
        url: 'https://www.torproject.org',
        description:
          'The most widely deployed anonymity network. Three-hop onion routing. Used by journalists, activists, and researchers worldwide.',
        tags: ['Open Source', 'Three-Hop', 'Onion Routing'],
        oss: true,
      },
      {
        name: 'I2P',
        url: 'https://geti2p.net',
        description:
          'Garlic routing network optimized for internal services. Less exit-node dependent than Tor. Strong for .i2p site access.',
        tags: ['Open Source', 'Garlic Routing', 'Internal Services'],
        oss: true,
      },
    ],
    note: 'Anonymizing networks are not suitable for high-bandwidth activities like video streaming. Use Tor Browser for anonymous web browsing; use I2P for accessing internal I2P network services.',
  },
  {
    slug: 'secure-password-manager',
    title: 'Password Managers',
    category: 'Identity',
    color: '#f87171',
    icon: 'fa-key',
    description:
      'Encrypted credential stores that generate, store, and autofill unique passwords for every account.',
    intro:
      'Password reuse is one of the most common causes of account compromise. A password manager generates unique, random passwords for every account and stores them in an encrypted vault. The vault is protected by a single master password that never leaves your device unencrypted.',
    criteria: [
      'Zero-knowledge architecture — provider cannot read vault',
      'Open-source client with audited encryption implementation',
      'End-to-end encrypted sync if cloud-based',
      'Local or self-hosted option available',
      'Strong key derivation function (Argon2, bcrypt)',
      'TOTP/2FA support for vault access',
    ],
    tools: [
      {
        name: 'Bitwarden',
        url: 'https://bitwarden.com',
        description:
          'Open-source, zero-knowledge cloud password manager. Self-hostable via Vaultwarden. Independently audited. Free tier available.',
        tags: ['Open Source', 'Audited', 'Self-Hostable', 'Free'],
        oss: true,
      },
      {
        name: 'KeePassXC',
        url: 'https://keepassxc.org',
        description:
          'Local-only, no cloud sync by default. Store the encrypted database wherever you choose. Maximum control over data location.',
        tags: ['Open Source', 'Local Only', 'No Cloud'],
        oss: true,
      },
      {
        name: 'Proton Pass',
        url: 'https://proton.me/pass',
        description:
          'From the Proton ecosystem. Zero-knowledge, end-to-end encrypted. Integrates with Proton email aliases.',
        tags: ['Open Source', 'E2E Encrypted', 'Alias Integration'],
        oss: true,
      },
    ],
  },
  {
    slug: 'two-factor-authentication-2fa',
    title: 'Two-Factor Authentication',
    category: 'Identity',
    color: '#f87171',
    icon: 'fa-mobile-screen',
    description:
      'TOTP authenticator apps and hardware security keys that add a second verification factor to account logins.',
    intro:
      'Two-factor authentication (2FA) requires a second proof of identity beyond a password. Even if your password is compromised, an attacker cannot access your account without the second factor. TOTP (Time-based One-Time Password) apps and hardware security keys are the most secure options. SMS-based 2FA is vulnerable to SIM-swap attacks and should be avoided where alternatives exist.',
    criteria: [
      'TOTP support (RFC 6238) with offline code generation',
      'Encrypted local backup of TOTP secrets',
      'No cloud sync of unencrypted secrets',
      'Open-source code and audited implementation',
      'Hardware key support: FIDO2/WebAuthn preferred',
    ],
    tools: [
      {
        name: 'Aegis Authenticator',
        url: 'https://getaegis.app',
        description:
          'Android TOTP app. Encrypted local vault, backup/restore support, open-source. The best TOTP app for Android.',
        tags: ['Open Source', 'Android', 'Encrypted Backup'],
        oss: true,
      },
      {
        name: 'Ente Auth',
        url: 'https://ente.io/auth',
        description:
          'Cross-platform TOTP app with encrypted cloud backup. Open-source. Available on iOS and Android.',
        tags: ['Open Source', 'Cross-Platform', 'Encrypted Sync'],
        oss: true,
      },
      {
        name: 'YubiKey',
        url: 'https://www.yubico.com',
        description:
          'Hardware security key supporting FIDO2, WebAuthn, and TOTP. The gold standard for phishing-resistant 2FA.',
        tags: ['Hardware Key', 'FIDO2', 'WebAuthn'],
      },
      {
        name: 'Nitrokey',
        url: 'https://www.nitrokey.com',
        description:
          'Open-source hardware security key. FIDO2 and GPG support. German-made alternative to YubiKey.',
        tags: ['Open Source Hardware', 'FIDO2', 'GPG'],
        oss: true,
      },
    ],
  },
  {
    slug: 'privacy-email',
    title: 'Email Providers',
    category: 'Identity',
    color: '#f87171',
    icon: 'fa-envelope',
    description:
      'Email providers with end-to-end encryption, zero-knowledge architecture, and minimal metadata retention.',
    intro:
      'Standard email is inherently insecure — messages traverse multiple servers in plaintext and are routinely scanned. Privacy-focused email providers implement end-to-end encryption (E2EE) so that even the provider cannot read message content. Metadata (sender, recipient, timestamp) remains more difficult to protect by design of the email protocol.',
    criteria: [
      'End-to-end encryption by default or easily enabled',
      'Zero-knowledge server-side storage',
      'No scanning of message content for advertising',
      'Minimal metadata retention policy',
      'Located in a privacy-friendly jurisdiction',
      'Supports custom domains and standard IMAP/SMTP',
    ],
    tools: [
      {
        name: 'Proton Mail',
        url: 'https://proton.me/mail',
        description:
          'Swiss-based, end-to-end encrypted by default between Proton users. Zero-knowledge architecture. Free tier available.',
        tags: ['E2E Encrypted', 'Zero Knowledge', 'Free Tier'],
      },
      {
        name: 'Tuta',
        url: 'https://tuta.com',
        description:
          'German-based, encrypts subject lines and body. Open-source clients. Calendar included. Free tier available.',
        tags: ['Open Source', 'E2E Encrypted', 'Free Tier'],
        oss: true,
      },
      {
        name: 'Fastmail',
        url: 'https://www.fastmail.com',
        description:
          'Australian-based. Not zero-knowledge but strong privacy policy. Best for users needing full IMAP/SMTP compatibility.',
        tags: ['IMAP/SMTP', 'Custom Domain'],
      },
    ],
  },
  {
    slug: 'email-client',
    title: 'Email Clients',
    category: 'Identity',
    color: '#f87171',
    icon: 'fa-inbox',
    description:
      'Desktop and mobile email clients that support PGP/MIME encryption, minimal telemetry, and local storage.',
    intro:
      'Your email client determines how your messages are stored, displayed, and potentially exposed. Clients that store email locally give you full control. Clients with built-in PGP support allow end-to-end encrypted communication with any email provider, not just those with native E2EE.',
    criteria: [
      'PGP/S-MIME support for universal E2EE',
      'Local storage with no mandatory cloud backup',
      'No telemetry or usage tracking',
      'Open-source preferred',
      'Supports multiple accounts and IMAP/SMTP',
    ],
    tools: [
      {
        name: 'Thunderbird',
        url: 'https://www.thunderbird.net',
        description:
          'The standard open-source desktop email client. Native OpenPGP support since v78. Highly extensible.',
        tags: ['Open Source', 'PGP Built-in', 'Desktop'],
        oss: true,
      },
      {
        name: 'K-9 Mail',
        url: 'https://k9mail.app',
        description:
          'Android email client with PGP support via OpenKeychain. Now the official Thunderbird Android client.',
        tags: ['Open Source', 'Android', 'PGP Support'],
        oss: true,
      },
      {
        name: 'Claws Mail',
        url: 'https://www.claws-mail.org',
        description:
          'Lightweight desktop client with long security track record. PGP via plugin. Available on Linux and Windows.',
        tags: ['Open Source', 'Lightweight', 'PGP Plugin'],
        oss: true,
      },
    ],
  },
  {
    slug: 'encrypted-messaging',
    title: 'Encrypted Messaging',
    category: 'Communication',
    color: '#34d399',
    icon: 'fa-comments',
    description:
      'Messaging apps with end-to-end encryption, minimal metadata collection, and open-source protocols.',
    intro:
      'End-to-end encrypted messaging ensures that only the communicating parties can read messages — not the service provider, not the network, and not law enforcement without physical access to an endpoint device. The Signal Protocol is the current gold standard for E2EE messaging.',
    criteria: [
      'End-to-end encryption enabled by default for all messages',
      'Open-source client and preferably open-source server',
      'Minimal metadata retention (contact graph, timestamps)',
      'Forward secrecy: past sessions not compromised by key compromise',
      'Independent security audit published',
    ],
    tools: [
      {
        name: 'Signal',
        url: 'https://signal.org',
        description:
          'The reference implementation of modern E2EE messaging. Signal Protocol with forward secrecy. Sealed sender for metadata protection.',
        tags: ['Open Source', 'Audited', 'Forward Secrecy', 'Sealed Sender'],
        oss: true,
      },
      {
        name: 'Element (Matrix)',
        url: 'https://element.io',
        description:
          'Federated messaging over the Matrix protocol. Self-hostable server. E2EE via Megolm protocol.',
        tags: ['Open Source', 'Federated', 'Self-Hostable', 'E2E'],
        oss: true,
      },
      {
        name: 'Session',
        url: 'https://getsession.org',
        description:
          'No phone number required. Decentralized network. Onion routing for metadata protection. Slower than Signal.',
        tags: ['Open Source', 'No Phone Number', 'Onion Routing'],
        oss: true,
      },
    ],
  },
  {
    slug: 'chat',
    title: 'Chat Platforms',
    category: 'Communication',
    color: '#34d399',
    icon: 'fa-message',
    description:
      'Team chat and community platforms that respect user privacy and offer self-hosting options.',
    intro:
      'Most mainstream chat platforms (Slack, Discord, Teams) store all messages in plaintext and provide broad access to law enforcement and third-party analytics. Privacy-respecting chat platforms offer self-hosting, message encryption, and minimal data retention.',
    criteria: [
      'Self-hostable server option',
      'Message encryption at rest and in transit',
      'No mandatory phone number or real-name registration',
      'Open-source server and client code',
      'Minimal metadata logging policy',
    ],
    tools: [
      {
        name: 'Element (Matrix)',
        url: 'https://element.io',
        description:
          'Matrix-based team chat. Self-hostable. E2EE for direct messages and rooms. Rich feature set comparable to Slack.',
        tags: ['Open Source', 'Self-Hostable', 'E2E'],
        oss: true,
      },
      {
        name: 'Zulip',
        url: 'https://zulip.com',
        description:
          'Thread-based team chat. Open-source and self-hostable. Good for async communication. No E2EE but strong access controls.',
        tags: ['Open Source', 'Self-Hostable', 'Threaded'],
        oss: true,
      },
      {
        name: 'Rocket.Chat',
        url: 'https://rocket.chat',
        description:
          'Full-featured self-hosted team chat. E2EE for direct messages. Good Slack alternative for organizations.',
        tags: ['Open Source', 'Self-Hostable', 'E2E DMs'],
        oss: true,
      },
    ],
  },
  {
    slug: 'tor-messaging',
    title: 'Tor-Based Messaging',
    category: 'Communication',
    color: '#34d399',
    icon: 'fa-circle-nodes',
    description:
      'Messaging applications that route communications over Tor for anonymity alongside end-to-end encryption.',
    intro:
      'Standard E2EE messaging hides content but may expose metadata — who communicated with whom, and when. Tor-based messaging routes communications through the Tor anonymity network, protecting both message content and communication metadata. Suitable for high-risk threat models.',
    criteria: [
      'All traffic routed through Tor network',
      'End-to-end encryption independent of Tor',
      'No persistent user identifiers linked to real identity',
      'Open-source implementation',
      'Rendezvous-based delivery to hide IP addresses',
    ],
    tools: [
      {
        name: 'Briar',
        url: 'https://briarproject.org',
        description:
          'P2P messaging over Tor. No central server. Works offline via Bluetooth/WiFi. Designed for activists and journalists.',
        tags: ['Open Source', 'P2P', 'Tor', 'Offline Capable'],
        oss: true,
      },
      {
        name: 'Ricochet Refresh',
        url: 'https://www.ricochetrefresh.net',
        description:
          'Desktop messaging over Tor onion services. No accounts, no metadata, no servers. For desktop-only high-risk use cases.',
        tags: ['Open Source', 'Tor Onion Services', 'No Accounts'],
        oss: true,
      },
    ],
  },
  {
    slug: 'encrypted-voip',
    title: 'Encrypted VoIP',
    category: 'Communication',
    color: '#34d399',
    icon: 'fa-phone',
    description:
      'Voice and video calling applications with end-to-end encryption and minimal metadata collection.',
    intro:
      'Traditional phone calls expose metadata to carriers and are trivially interceptable. VoIP apps built on open standards with E2EE provide significantly better privacy. The same threat model considerations that apply to messaging apply here: content encryption is easier to achieve than metadata protection.',
    criteria: [
      'End-to-end encrypted voice and video by default',
      'Open-source protocol (ZRTP, Signal Protocol)',
      'No mandatory carrier integration or phone number',
      'Minimal call metadata retention',
    ],
    tools: [
      {
        name: 'Signal',
        url: 'https://signal.org',
        description:
          'E2EE voice and video calls using the same Signal Protocol infrastructure. Best option for private calling.',
        tags: ['Open Source', 'E2E', 'Voice & Video'],
        oss: true,
      },
      {
        name: 'Element',
        url: 'https://element.io',
        description:
          'Matrix-based E2EE voice and video calls. Self-hostable infrastructure option.',
        tags: ['Open Source', 'Self-Hostable', 'E2E'],
        oss: true,
      },
      {
        name: 'Linphone',
        url: 'https://www.linphone.org',
        description:
          'Open-source SIP client with ZRTP encryption. Works with any SIP provider. Good for custom VoIP infrastructure.',
        tags: ['Open Source', 'SIP', 'ZRTP'],
        oss: true,
      },
    ],
  },
  {
    slug: 'private-translations',
    title: 'Private Translation',
    category: 'Communication',
    color: '#34d399',
    icon: 'fa-language',
    description:
      'Translation services and tools that do not retain translated text or build user profiles from translation queries.',
    intro:
      'Commercial translation services (Google Translate, DeepL) retain submitted text for product improvement and model training. This creates risk when translating sensitive documents, private communications, or confidential business content. Privacy-respecting alternatives either process locally or have clear no-retention policies.',
    criteria: [
      'No retention of submitted text for training or analytics',
      'Local processing option preferred',
      'Transparent data handling policy',
      'No account required for basic use',
    ],
    tools: [
      {
        name: 'LibreTranslate',
        url: 'https://libretranslate.com',
        description:
          'Self-hostable machine translation. Run locally for complete privacy. Open-source and free.',
        tags: ['Open Source', 'Self-Hostable', 'Local Option'],
        oss: true,
      },
      {
        name: 'Argos Translate',
        url: 'https://github.com/argosopentech/argos-translate',
        description:
          'Fully offline translation using local ML models. No network requests. Available as desktop app and CLI.',
        tags: ['Open Source', 'Fully Offline', 'Local Models'],
        oss: true,
      },
      {
        name: 'SimplyTranslate',
        url: 'https://simplytranslate.org',
        description:
          'Privacy frontend for multiple translation backends. No JavaScript required. Multiple public instances.',
        tags: ['Open Source', 'No JS', 'Multiple Backends'],
        oss: true,
      },
    ],
  },
  {
    slug: 'decentralized-social',
    title: 'Decentralized Social Networks',
    category: 'Communication',
    color: '#34d399',
    icon: 'fa-diagram-project',
    description:
      'Federated and decentralized social platforms that return data ownership to users and eliminate centralized surveillance.',
    intro:
      'Centralized social networks monetize user attention and data at scale. Decentralized alternatives use open protocols (ActivityPub, AT Protocol) so that no single entity controls the network. Users choose their server, can migrate between instances, and interact across the entire network.',
    criteria: [
      'Open, standardized protocol (ActivityPub, AT Protocol)',
      'User data portability and account migration',
      'No algorithmic content amplification for advertising',
      'Self-hostable server option',
      'No surveillance-based monetization',
    ],
    tools: [
      {
        name: 'Mastodon',
        url: 'https://joinmastodon.org',
        description:
          'The largest ActivityPub network. Twitter-like microblogging across thousands of independent instances.',
        tags: ['Open Source', 'ActivityPub', 'Self-Hostable'],
        oss: true,
      },
      {
        name: 'Pixelfed',
        url: 'https://pixelfed.org',
        description:
          'Federated photo sharing via ActivityPub. Instagram-like interface without the surveillance business model.',
        tags: ['Open Source', 'ActivityPub', 'Photo Sharing'],
        oss: true,
      },
      {
        name: 'Lemmy',
        url: 'https://join-lemmy.org',
        description:
          'Federated link aggregator and forum. Reddit-like communities across ActivityPub instances.',
        tags: ['Open Source', 'ActivityPub', 'Forum'],
        oss: true,
      },
    ],
  },
  {
    slug: 'blogs',
    title: 'Privacy & Security Blogs',
    category: 'Communication',
    color: '#34d399',
    icon: 'fa-pen-nib',
    description:
      'Recommended reading: independent researchers, security journalists, and transparency organizations.',
    intro:
      'Staying informed about privacy threats, surveillance developments, and security research requires following credible, independent sources. The following resources are selected for accuracy, transparency about funding, and editorial independence.',
    criteria: [
      'Editorial independence from surveillance industry',
      'Transparent funding and conflict-of-interest disclosures',
      'Primary research or authoritative reporting',
      'No sponsored content undisclosed as such',
    ],
    tools: [
      {
        name: 'Electronic Frontier Foundation',
        url: 'https://www.eff.org',
        description:
          'Leading digital rights nonprofit. Deep reporting on surveillance, legal cases, and technology policy.',
        tags: ['Nonprofit', 'Legal', 'Policy'],
      },
      {
        name: 'Privacy International',
        url: 'https://privacyinternational.org',
        description:
          'UK-based nonprofit focused on surveillance law and corporate data practices globally.',
        tags: ['Nonprofit', 'Surveillance Law'],
      },
      {
        name: 'Schneier on Security',
        url: 'https://www.schneier.com',
        description:
          "Bruce Schneier's long-running security blog. Accessible analysis of cryptography, policy, and security research.",
        tags: ['Individual Researcher', 'Cryptography'],
      },
      {
        name: 'The Intercept',
        url: 'https://theintercept.com',
        description:
          'Investigative journalism with a focus on surveillance, national security, and civil liberties.',
        tags: ['Investigative Journalism'],
      },
    ],
  },
  {
    slug: 'secure-file-encryption',
    title: 'File Encryption',
    category: 'Files & Storage',
    color: '#fb923c',
    icon: 'fa-lock',
    description:
      'Tools for encrypting files, disks, and archives to protect data at rest on local and removable storage.',
    intro:
      'Encrypting data at rest protects it from physical theft, unauthorized access, and forensic analysis. Full-disk encryption protects an entire storage device. File-level and container encryption protects specific files or directories and is portable across systems.',
    criteria: [
      'Strong, modern cipher: AES-256, ChaCha20',
      'Open-source and independently audited',
      'Plausible deniability support where relevant',
      'No key escrow or backdoor provisions',
      'Cross-platform support',
    ],
    tools: [
      {
        name: 'VeraCrypt',
        url: 'https://veracrypt.fr',
        description:
          'Full disk encryption and encrypted containers. Successor to TrueCrypt. Independently audited. Supports hidden volumes for plausible deniability.',
        tags: ['Open Source', 'Audited', 'Full Disk', 'Hidden Volumes'],
        oss: true,
      },
      {
        name: 'Cryptomator',
        url: 'https://cryptomator.org',
        description:
          'Encrypts individual files for cloud storage. Transparent encryption layer over any cloud provider. Good for Nextcloud/S3.',
        tags: ['Open Source', 'Cloud Friendly', 'File-Level'],
        oss: true,
      },
      {
        name: 'age',
        url: 'https://age-encryption.org',
        description:
          'Modern file encryption tool with a simple, composable design. CLI-first. Designed to replace GPG for file encryption use cases.',
        tags: ['Open Source', 'CLI', 'Modern Crypto'],
        oss: true,
      },
    ],
  },
  {
    slug: 'file-sharing-sync',
    title: 'File Sharing & Sync',
    category: 'Files & Storage',
    color: '#fb923c',
    icon: 'fa-share-nodes',
    description:
      'Encrypted file sharing and synchronization tools that avoid centralized surveillance.',
    intro:
      'Mainstream file sharing services (Google Drive, Dropbox) have full access to your files unless you encrypt before uploading. Privacy-respecting alternatives either provide client-side encryption (so the provider cannot read files) or are fully self-hostable.',
    criteria: [
      'Client-side encryption before upload (zero-knowledge)',
      'Open-source client software',
      'Self-hostable server option',
      'No sharing of file contents with third parties',
    ],
    tools: [
      {
        name: 'Syncthing',
        url: 'https://syncthing.net',
        description:
          'P2P file sync with no central server. Files synced directly between your devices over TLS. Open-source and no accounts.',
        tags: ['Open Source', 'P2P', 'No Server', 'No Accounts'],
        oss: true,
      },
      {
        name: 'Nextcloud',
        url: 'https://nextcloud.com',
        description:
          'Self-hosted cloud storage and collaboration suite. Full control over data. Large plugin ecosystem.',
        tags: ['Open Source', 'Self-Hostable', 'Full Suite'],
        oss: true,
      },
      {
        name: 'OnionShare',
        url: 'https://onionshare.org',
        description:
          'Share files anonymously via Tor onion services. No account, no server, no metadata. For one-time secure transfers.',
        tags: ['Open Source', 'Tor', 'Anonymous', 'One-Time'],
        oss: true,
      },
    ],
  },
  {
    slug: 'encrypted-cloud-storage',
    title: 'Encrypted Cloud Storage',
    category: 'Files & Storage',
    color: '#fb923c',
    icon: 'fa-cloud',
    description:
      'Cloud storage providers with zero-knowledge encryption or strong client-side encryption before sync.',
    intro:
      'Cloud storage convenience comes with a privacy trade-off: the provider can read your files unless you encrypt first. Zero-knowledge cloud providers encrypt files on your device before uploading, holding no keys that would allow them to decrypt your data.',
    criteria: [
      'Zero-knowledge architecture — provider cannot decrypt files',
      'End-to-end encrypted by default',
      'Open-source client',
      'Published security audit',
      'No mining of file contents for analytics or advertising',
    ],
    tools: [
      {
        name: 'Proton Drive',
        url: 'https://proton.me/drive',
        description:
          'Swiss-based zero-knowledge cloud storage. End-to-end encrypted. Integrates with Proton ecosystem. Free tier available.',
        tags: ['Zero Knowledge', 'E2E', 'Swiss', 'Free Tier'],
      },
      {
        name: 'Tresorit',
        url: 'https://tresorit.com',
        description:
          'Swiss-based zero-knowledge cloud storage for teams and individuals. Independently audited. Strong enterprise features.',
        tags: ['Zero Knowledge', 'Audited', 'Swiss'],
      },
      {
        name: 'Cryptomator + Any Provider',
        url: 'https://cryptomator.org',
        description:
          'Add client-side encryption on top of any cloud provider (S3, Nextcloud, etc.). Open-source. Best flexibility option.',
        tags: ['Open Source', 'Any Provider', 'Client-Side'],
        oss: true,
      },
    ],
  },
  {
    slug: 'encrypted-photo-storage',
    title: 'Encrypted Photo Storage',
    category: 'Files & Storage',
    color: '#fb923c',
    icon: 'fa-images',
    description:
      'Photo storage and backup solutions with end-to-end encryption that prevent provider access to your images.',
    intro:
      'Photo libraries are among the most intimate personal data. Major cloud photo services scan images for content classification, facial recognition, and object detection. Privacy-respecting alternatives store your photos encrypted so that only you can access them.',
    criteria: [
      'End-to-end encryption — provider cannot scan images',
      'No facial recognition or AI content analysis',
      'Client-side encryption before upload',
      'Open-source client',
    ],
    tools: [
      {
        name: 'Ente Photos',
        url: 'https://ente.io',
        description:
          'End-to-end encrypted photo storage with mobile and desktop apps. Open-source clients and server. Self-hostable.',
        tags: ['Open Source', 'E2E', 'Self-Hostable', 'Mobile'],
        oss: true,
      },
      {
        name: 'Stingle Photos',
        url: 'https://stingle.org',
        description:
          'E2EE photo backup app. Open-source. Encrypted sharing with specific people. Available on Android and iOS.',
        tags: ['Open Source', 'E2E', 'Sharing'],
        oss: true,
      },
      {
        name: 'Photoprism (self-hosted)',
        url: 'https://photoprism.app',
        description:
          'Self-hosted photo management. Full control, no third-party access. Optional AI features run locally.',
        tags: ['Open Source', 'Self-Hosted', 'Local AI'],
        oss: true,
      },
    ],
  },
  {
    slug: 'encrypted-notebooks',
    title: 'Encrypted Notebooks',
    category: 'Files & Storage',
    color: '#fb923c',
    icon: 'fa-notebook',
    description:
      'Note-taking applications with end-to-end encryption or local storage that never exposes note content to a server.',
    intro:
      'Notes applications often contain highly sensitive personal, financial, and professional information. Cloud-based note apps that store content in plaintext are a significant risk. Privacy-respecting alternatives encrypt notes client-side or store them entirely locally.',
    criteria: [
      'End-to-end encryption or local-only storage',
      'No server-side access to note content',
      'Open-source or independently audited',
      'Export support for data portability',
    ],
    tools: [
      {
        name: 'Standard Notes',
        url: 'https://standardnotes.com',
        description:
          'E2EE note-taking with a long-term commitment to user privacy. Free tier available. Extensions for rich editing.',
        tags: ['Open Source', 'E2E', 'Extensions', 'Free Tier'],
        oss: true,
      },
      {
        name: 'Obsidian',
        url: 'https://obsidian.md',
        description:
          'Local-first Markdown notes with a powerful plugin system. Files stored as plain Markdown on your device. No cloud required.',
        tags: ['Local First', 'Markdown', 'No Cloud', 'Extensible'],
      },
      {
        name: 'Joplin',
        url: 'https://joplinapp.org',
        description:
          'Open-source note-taking with optional E2EE sync via any WebDAV or Nextcloud provider.',
        tags: ['Open Source', 'E2E Sync', 'Self-Hostable'],
        oss: true,
      },
    ],
  },
  {
    slug: 'encrypted-calendars',
    title: 'Encrypted Calendars',
    category: 'Files & Storage',
    color: '#fb923c',
    icon: 'fa-calendar',
    description:
      'Calendar applications with end-to-end encryption that prevent service providers from reading your schedule.',
    intro:
      'Calendar data reveals your physical location patterns, social connections, medical appointments, and work schedule. Most calendar providers store events in plaintext and may analyze them for advertising. E2EE calendar solutions ensure your schedule remains private.',
    criteria: [
      'End-to-end encryption for event content',
      'Support for CalDAV standard for interoperability',
      'No content-based advertising or analytics',
      'Self-hostable server option',
    ],
    tools: [
      {
        name: 'Proton Calendar',
        url: 'https://proton.me/calendar',
        description:
          'E2EE calendar integrated with Proton ecosystem. All event details encrypted client-side. Free tier available.',
        tags: ['E2E', 'Proton Ecosystem', 'Free Tier'],
      },
      {
        name: 'Tuta Calendar',
        url: 'https://tuta.com',
        description:
          'Included with Tuta Mail. E2EE calendar. Subject and event details encrypted. Good option if already using Tuta.',
        tags: ['Open Source', 'E2E', 'Included with Email'],
        oss: true,
      },
      {
        name: 'Nextcloud Calendar',
        url: 'https://nextcloud.com',
        description:
          'Self-hosted CalDAV calendar. Full control over data. Works with any CalDAV client.',
        tags: ['Open Source', 'Self-Hosted', 'CalDAV'],
        oss: true,
      },
    ],
  },
  {
    slug: 'productivity',
    title: 'Privacy-Respecting Productivity',
    category: 'Files & Storage',
    color: '#fb923c',
    icon: 'fa-briefcase',
    description:
      'Office suites, task managers, and collaboration tools that do not mine your documents or expose your work.',
    intro:
      'Major productivity suites (Microsoft 365, Google Workspace) scan document contents for advertising, compliance, and product improvement. Privacy-respecting alternatives are self-hostable, do not process your content server-side, or use strong encryption.',
    criteria: [
      'No scanning of document content for advertising',
      'Self-hostable or local-only option',
      'Open file formats for data portability',
      'Open-source preferred',
    ],
    tools: [
      {
        name: 'LibreOffice',
        url: 'https://www.libreoffice.org',
        description:
          'Full office suite: Writer, Calc, Impress. Entirely local. No cloud dependency. Open Document Format.',
        tags: ['Open Source', 'Local Only', 'Full Suite'],
        oss: true,
      },
      {
        name: 'Nextcloud Office',
        url: 'https://nextcloud.com',
        description:
          'Self-hosted collaborative office suite using Collabora Online. Full control over documents.',
        tags: ['Open Source', 'Self-Hosted', 'Collaborative'],
        oss: true,
      },
      {
        name: 'Gitea / Forgejo',
        url: 'https://forgejo.org',
        description:
          'Self-hosted Git forge for code and project management. Full replacement for GitHub in a self-controlled environment.',
        tags: ['Open Source', 'Self-Hosted', 'Git'],
        oss: true,
      },
    ],
  },
  {
    slug: 'windows',
    title: 'Windows Privacy Hardening',
    category: 'System',
    color: '#94a3b8',
    icon: 'fa-brands fa-microsoft',
    description:
      'Tools and configuration guides to minimize telemetry, advertising integration, and data collection on Windows.',
    intro:
      'Windows 10 and 11 collect substantial telemetry by default including app usage, browsing history, location data, and typed text. While complete elimination of telemetry is not possible on Windows, it can be significantly reduced through configuration, policy settings, and dedicated hardening tools.',
    criteria: [
      'Disables telemetry and diagnostic data sending',
      'Blocks Microsoft advertising ID',
      'Prevents Cortana and search integration sending data',
      'Configures Windows Update for privacy',
      'Auditable, open-source hardening scripts',
    ],
    tools: [
      {
        name: 'O&O ShutUp10++',
        url: 'https://www.oo-software.com/en/shutup10',
        description:
          'GUI tool for disabling Windows 10/11 telemetry, background data collection, and privacy-invasive defaults. Portable, no install required.',
        tags: ['Free', 'GUI', 'No Install', 'Telemetry Control'],
      },
      {
        name: 'WindowsSpyBlocker',
        url: 'https://github.com/crazy-max/WindowsSpyBlocker',
        description:
          'Maintains curated blocklists for Windows telemetry domains. Supports hosts file, firewall rules, and Pi-hole integration.',
        tags: ['Open Source', 'Blocklists', 'Firewall', 'DNS Filtering'],
        oss: true,
      },
      {
        name: 'Chris Titus Tech WinUtil',
        url: 'https://github.com/ChrisTitusTech/winutil',
        description:
          'PowerShell-based Windows debloat and setup utility. Automates removal of bloatware, tweaks performance, and applies privacy settings.',
        tags: ['Open Source', 'PowerShell', 'Debloat', 'Automation'],
        oss: true,
      },

      {
        name: 'WPD (Windows Privacy Dashboard)',
        url: 'https://wpd.app',
        description:
          'Lightweight privacy tool for disabling telemetry, scheduled tasks, and Windows tracking components with a simple UI.',
        tags: ['Free', 'GUI', 'Telemetry Control'],
      },
      {
        name: 'Privatezilla',
        url: 'https://github.com/builtbybel/privatezilla',
        description:
          'Simple Windows 10/11 privacy configuration tool that applies recommended privacy tweaks and disables telemetry features.',
        tags: ['Open Source', 'GUI', 'Privacy Tweaks'],
        oss: true,
      },
      {
        name: 'Debloat Windows 10',
        url: 'https://github.com/Sycnex/Windows10Debloater',
        description:
          'Script-based debloating tool for removing preinstalled apps, disabling telemetry, and cleaning Windows installations.',
        tags: ['Open Source', 'PowerShell', 'Debloat'],
        oss: true,
      },
      {
        name: 'Sophia Script for Windows',
        url: 'https://github.com/farag2/Sophia-Script-for-Windows',
        description:
          'Advanced PowerShell script with extensive privacy, performance, and UI customization options for Windows 10/11.',
        tags: ['Open Source', 'PowerShell', 'Advanced Tweaks'],
        oss: true,
      },
      {
        name: 'Winaero Tweaker',
        url: 'https://winaero.com/winaero-tweaker',
        description:
          'General Windows customization tool including privacy tweaks, UI changes, and system behavior controls.',
        tags: ['Free', 'GUI', 'Tweaking'],
      },
      {
        name: 'Spybot Anti-Beacon',
        url: 'https://www.safer-networking.org/products/spybot-anti-beacon/',
        description:
          'Disables Windows telemetry and tracking services using predefined privacy configurations.',
        tags: ['Free', 'Telemetry Blocking'],
      },
      {
        name: 'ShutUp10+ Alternatives Stack (manual policy)',
        url: 'https://learn.microsoft.com/en-us/windows/privacy/',
        description:
          'Official Microsoft documentation for Group Policy, registry, and enterprise privacy controls. Useful for manual hardening without third-party tools.',
        tags: ['Official Docs', 'Group Policy', 'Manual Hardening'],
      },
    ],
    note: 'For strong privacy guarantees, consider switching to a Linux distribution. Windows telemetry cannot be fully disabled through software alone.',
  },
  {
    slug: 'android-alternatives',
    title: 'Mobile Operating Systems',
    category: 'System',
    color: '#94a3b8',
    icon: 'fa-mobile-screen',
    description:
      'Android-based operating systems with Google services removed, hardened security, and privacy-respecting defaults.',
    intro:
      'Stock Android and iOS collect substantial data for advertising and analytics. Custom Android ROMs can remove Google services entirely while maintaining full application compatibility. The trade-off is loss of some mainstream app functionality and potentially increased manual update management.',
    criteria: [
      'Google Play Services removed or sandboxed',
      'Verified boot and strong security model maintained',
      'Timely security patch delivery',
      'Open-source codebase',
      'No bundled advertising or telemetry',
    ],
    tools: [
      {
        name: 'GrapheneOS',
        url: 'https://grapheneos.org',
        description:
          'The gold standard for hardened Android. Strong exploit mitigations, aggressive app sandboxing, verified boot hardening, and optional sandboxed Google Play. Pixel-only.',
        tags: [
          'Open Source',
          'Hardened',
          'Security-first',
          'Audited',
          'Pixel Only',
        ],
        oss: true,
      },
      {
        name: 'CalyxOS',
        url: 'https://calyxos.org',
        description:
          'Privacy-focused Android with usability-first design and optional microG. Balanced approach between security, privacy, and mainstream usability.',
        tags: ['Open Source', 'Privacy', 'microG', 'User Friendly'],
        oss: true,
      },
      {
        name: 'LineageOS',
        url: 'https://lineageos.org',
        description:
          'The base of most custom ROMs. Clean AOSP fork with minimal Google integration and wide device support.',
        tags: ['Open Source', 'Base ROM', 'Wide Device Support'],
        oss: true,
      },
      {
        name: 'LineageOS for microG',
        url: 'https://lineage.microg.org',
        description:
          'LineageOS build preconfigured with microG for Google service compatibility without proprietary Google Play services.',
        tags: ['Open Source', 'microG', 'Privacy'],
        oss: true,
      },
      {
        name: 'iodéOS',
        url: 'https://iode.tech',
        description:
          'LineageOS-based ROM with system-wide tracker blocking and integrated microG. Focus on privacy filtering at OS level.',
        tags: ['Open Source', 'Tracker Blocking', 'microG', 'Privacy'],
        oss: true,
      },
      {
        name: '/e/OS (Murena)',
        url: 'https://e.foundation',
        description:
          'De-Googled Android distribution with its own cloud ecosystem and app store. Designed for mainstream privacy migration.',
        tags: ['Open Source', 'De-Googled', 'Ecosystem'],
        oss: true,
      },
      {
        name: 'crDroid',
        url: 'https://crdroid.net',
        description:
          'Feature-rich LineageOS-based ROM with heavy customization. Not privacy-focused by default but commonly debloated by users.',
        tags: ['Open Source', 'Customization', 'LineageOS Fork'],
        oss: true,
      },
      {
        name: 'ArrowOS',
        url: 'https://arrowos.net',
        description:
          'Minimalist AOSP-based ROM focused on simplicity and performance with limited modifications.',
        tags: ['Open Source', 'Minimal', 'AOSP'],
        oss: true,
      },
      {
        name: 'PixelOS',
        url: 'https://pixelos.net',
        description:
          'Pixel-like experience on non-Pixel devices. Focused on UI consistency rather than privacy hardening.',
        tags: ['Open Source', 'Pixel UI', 'AOSP'],
        oss: true,
      },
      {
        name: 'Evolution X',
        url: 'https://evolution-x.org',
        description:
          'Highly customized ROM inspired by Pixel UI with extensive feature additions. Not privacy-focused.',
        tags: ['Open Source', 'Customization', 'Pixel UI'],
        oss: true,
      },
      {
        name: 'Paranoid Android',
        url: 'https://paranoidandroid.co',
        description:
          'Long-running Android ROM with focus on clean UX and subtle system enhancements. Historically security-conscious.',
        tags: ['Open Source', 'UX Focused'],
        oss: true,
      },
      {
        name: 'Bliss ROMs',
        url: 'https://blissroms.com',
        description:
          'Highly customizable ROM focused on features and UI flexibility rather than privacy or security hardening.',
        tags: ['Open Source', 'Customization'],
        oss: true,
      },
      {
        name: 'Havoc-OS',
        url: 'https://havoc-os.com',
        description:
          'Feature-heavy Android ROM with broad customization options. Not security-focused.',
        tags: ['Open Source', 'Customization'],
        oss: true,
      },
      {
        name: 'DerpFest',
        url: 'https://derpfest.org',
        description:
          'Community-driven feature-rich ROM with strong customization focus and frequent updates.',
        tags: ['Open Source', 'Customization'],
        oss: true,
      },
      {
        name: 'OmniROM',
        url: 'https://omnirom.org',
        description:
          'One of the oldest AOSP forks, focused on stability and moderate feature additions.',
        tags: ['Open Source', 'Stable'],
        oss: true,
      },
      {
        name: '/e/OS (Murena)',
        url: 'https://e.foundation',
        description:
          'Privacy-focused Android ecosystem with integrated services and de-Googled base system.',
        tags: ['Open Source', 'De-Googled', 'Privacy'],
        oss: true,
      },
    ],
  },
  {
    slug: 'android-keyboard',
    title: 'Android Keyboards',
    category: 'System',
    color: '#94a3b8',
    icon: 'fa-keyboard',
    description:
      'Keyboard applications that do not transmit keystrokes to remote servers for analytics, advertising, or cloud features.',
    intro:
      'Your keyboard has access to everything you type — passwords, messages, search queries, and private thoughts. Most popular keyboards (Gboard, SwiftKey) send keystrokes to cloud servers for personalization and autocomplete improvement. Privacy-respecting keyboards process input entirely on-device.',
    criteria: [
      'No cloud transmission of typed input',
      'On-device autocorrect and prediction models',
      'No analytics or usage telemetry',
      'Open-source preferred',
    ],
    tools: [
      {
        name: 'FUTO Keyboard',
        url: 'https://keyboard.futo.org',
        description:
          'On-device speech input and prediction with a strong privacy stance. No network dependency, fully local processing, actively developed.',
        tags: ['Open Source', 'On-Device AI', 'No Cloud', 'Speech Input'],
        oss: true,
      },
      {
        name: 'HeliBoard',
        url: 'https://github.com/Helium314/HeliBoard',
        description:
          'Privacy-focused keyboard based on OpenBoard. No network permission, supports gesture typing, themes, and multilingual input.',
        tags: ['Open Source', 'No Network', 'OpenBoard Fork', 'Multilingual'],
        oss: true,
      },
      {
        name: 'Simple Keyboard',
        url: 'https://github.com/rkkr/simple-keyboard',
        description:
          'Ultra-minimal keyboard with no internet access, no telemetry, and minimal permissions. No autocorrect or predictive typing.',
        tags: ['Open Source', 'Minimal', 'No Permissions'],
        oss: true,
      },
      {
        name: 'OpenBoard',
        url: 'https://github.com/dslul/openboard',
        description:
          'Clean AOSP-style keyboard forked from AOSP keyboard with removed Google dependencies. Stable and widely used baseline privacy keyboard.',
        tags: ['Open Source', 'AOSP Fork', 'No Google'],
        oss: true,
      },
      {
        name: 'AnySoftKeyboard',
        url: 'https://anysoftkeyboard.github.io',
        description:
          'Highly configurable keyboard with strong privacy orientation and plugin-based language support.',
        tags: ['Open Source', 'Plugins', 'Multilingual'],
        oss: true,
      },
      {
        name: 'FlorisBoard',
        url: 'https://florisboard.org',
        description:
          'Modern open-source keyboard with Kotlin rewrite, gesture typing, and planned extensibility. Still evolving but promising.',
        tags: ['Open Source', 'Modern', 'Gesture Typing'],
        oss: true,
      },
      {
        name: 'Unexpected Keyboard',
        url: 'https://github.com/Julow/Unexpected-Keyboard',
        description:
          'Compact keyboard designed for power users, exposing symbols and shortcuts efficiently. No network access.',
        tags: ['Open Source', 'Power User', 'Compact'],
        oss: true,
      },
      {
        name: 'OpenBoard (AOSP Fork)',
        url: 'https://github.com/dslul/openboard',
        description:
          'Privacy-focused fork of AOSP keyboard with removed proprietary dependencies and offline operation.',
        tags: ['Open Source', 'AOSP Fork', 'Offline'],
        oss: true,
      },
      {
        name: 'AnySoftKeyboard (Core)',
        url: 'https://github.com/AnySoftKeyboard/AnySoftKeyboard',
        description:
          'Core engine for one of the most modular privacy keyboards on Android. Supports extensive language packs and customization.',
        tags: ['Open Source', 'Modular', 'Multilingual'],
        oss: true,
      },
    ],
  },
  {
    slug: 'encrypted-dns',
    title: 'DNS Resolvers',
    category: 'System',
    color: '#94a3b8',
    icon: 'fa-server',
    description:
      'DNS resolvers with query encryption (DoH/DoT/DoQ) that minimize query logging and support filtering.',
    intro:
      'Unencrypted DNS queries expose every domain you visit to your ISP and any network observer. Encrypted DNS (DNS-over-HTTPS, DNS-over-TLS, DNS-over-QUIC) prevents this interception. Resolver selection determines who receives your query logs — choose a resolver with a verified no-logging policy.',
    criteria: [
      'Supports modern encrypted DNS protocols (DoH/DoT/DoQ)',
      'No-logging policy with third-party verification',
      'DNSSEC validation enabled',
      'QNAME minimization to reduce query data shared upstream',
      'Located outside major surveillance alliance jurisdictions',
    ],
    tools: [
      {
        name: 'Quad9',
        url: 'https://quad9.net',
        description:
          'Swiss-based, non-profit. No logging, malware blocking. DoH/DoT support. Confirmed no-logging by Swiss AG.',
        tags: ['Non-Profit', 'No Logs', 'Swiss', 'Malware Blocking'],
      },
      {
        name: 'Mullvad DNS',
        url: 'https://mullvad.net/en/help/dns-over-https-and-dns-over-tls',
        description:
          'From Mullvad VPN. No logging, no filtering by default, with optional ad/malware blocking variants.',
        tags: ['No Logs', 'DoH/DoT', 'Optional Filtering'],
      },
      {
        name: 'AdGuard DNS',
        url: 'https://adguard-dns.io',
        description:
          'Encrypted DNS with ad and tracker blocking built in. Public and custom configurations available.',
        tags: ['Ad Blocking', 'DoH/DoT', 'Filtering'],
      },
      {
        name: 'Pi-hole',
        url: 'https://pi-hole.net',
        description:
          'Self-hosted DNS sinkhole that blocks ads and trackers at the network level. Runs on local hardware (Raspberry Pi, VM, etc). Not a DNS provider—works as a local filtering layer in front of upstream resolvers.',
        tags: [
          'Self-Hosted',
          'Network-Level Blocking',
          'DNS Sinkhole',
          'Local Control',
        ],
      },
      {
        name: 'NextDNS',
        url: 'https://nextdns.io',
        description:
          'Customizable encrypted DNS with per-device filtering, analytics, and blocklists. Free tier available.',
        tags: ['Customizable', 'Per-Device', 'Analytics', 'Free Tier'],
      },
    ],
  },
  {
    slug: 'open-source-router-firmware',
    title: 'Router Firmware',
    category: 'System',
    color: '#94a3b8',
    icon: 'fa-wifi',
    description:
      'Open-source router firmware that replaces vendor firmware with auditable, privacy-respecting alternatives.',
    intro:
      'Consumer router firmware is often poorly maintained, contains proprietary blobs, and may include telemetry or remote management backdoors. Open-source alternatives provide auditable code, long-term security updates, and advanced privacy features like network-wide DNS encryption and VPN integration.',
    criteria: [
      'Open-source codebase with active security maintenance',
      'Regular security updates independent of hardware vendor',
      'No telemetry or remote management without explicit consent',
      'Supports modern encryption protocols',
      'Broad hardware support',
    ],
    tools: [
      {
        name: 'OpenWrt',
        url: 'https://openwrt.org',
        description:
          'The most widely supported open-source router OS. Package-based system allowing full customization. Runs on hundreds of devices.',
        tags: ['Open Source', 'Package System', 'Wide Support'],
        oss: true,
      },
      {
        name: 'pfSense CE',
        url: 'https://www.pfsense.org',
        description:
          'FreeBSD-based firewall/router. Enterprise-grade features including VPN, IDS/IPS, and traffic shaping.',
        tags: ['Open Source', 'Enterprise Features', 'VPN'],
        oss: true,
      },
      {
        name: 'OPNsense',
        url: 'https://opnsense.org',
        description:
          'Fork of pfSense with more frequent updates and a cleaner UI. Strong community and plugin ecosystem.',
        tags: ['Open Source', 'Regular Updates', 'Plugin Ecosystem'],
        oss: true,
      },
    ],
  },
  {
    slug: 'open-source-torrent-clients',
    title: 'Torrent Clients',
    category: 'Internet',
    color: '#a78bfa',
    icon: 'fa-arrow-right-arrow-left',
    description:
      'Open-source BitTorrent clients with no bundled adware, no telemetry, and support for I2P/Tor anonymization.',
    intro:
      'Many popular torrent clients include adware, spyware, or cryptocurrency miners. Open-source alternatives provide clean, auditable clients. For privacy, torrent traffic should be routed through a VPN or I2P to prevent IP exposure to swarm participants.',
    criteria: [
      'Open-source with no bundled adware or miners',
      'No telemetry or usage analytics',
      'I2P or Tor support for anonymous torrenting',
      'Sequential download and seeding control',
    ],
    tools: [
      {
        name: 'qBittorrent',
        url: 'https://www.qbittorrent.org',
        description:
          'The standard open-source torrent client. No ads, no bundleware. Available on all major platforms.',
        tags: ['Open Source', 'No Ads', 'Cross-Platform'],
        oss: true,
      },
      {
        name: 'Transmission',
        url: 'https://transmissionbt.com',
        description:
          'Lightweight, minimal torrent client. Low resource usage. Good for headless server use.',
        tags: ['Open Source', 'Lightweight', 'Headless'],
        oss: true,
      },
      {
        name: 'i2psnark (via I2P)',
        url: 'https://geti2p.net',
        description:
          'Built-in torrent client for the I2P network. Anonymous by design — no IP exposed to swarm.',
        tags: ['Open Source', 'Anonymous', 'I2P Network'],
        oss: true,
      },
    ],
  },
  {
    slug: 'privacy-rss-feed-readers',
    title: 'RSS Feed Readers',
    category: 'Internet',
    color: '#a78bfa',
    icon: 'fa-rss',
    description:
      'RSS and Atom feed readers that allow following content sources without algorithmic filtering or tracking.',
    intro:
      'RSS feeds let you follow websites and content sources directly, without algorithmic curation, without tracking, and without creating engagement profiles. A feed reader is the most privacy-respecting way to consume news and blog content.',
    criteria: [
      'No tracking of reading habits to third parties',
      'Local or self-hosted option available',
      'Supports RSS, Atom, and JSON Feed formats',
      'No algorithmic curation or engagement optimization',
    ],
    tools: [
      {
        name: 'Miniflux',
        url: 'https://miniflux.app',
        description:
          'Minimalist, self-hosted RSS reader. Clean interface, no tracking, fast. Can be run on any server.',
        tags: ['Open Source', 'Self-Hosted', 'Minimal'],
        oss: true,
      },
      {
        name: 'NewsFlash',
        url: 'https://apps.gnome.org/NewsFlash/',
        description:
          'Desktop RSS reader for Linux with modern UI. Syncs with local or self-hosted backends.',
        tags: ['Open Source', 'Desktop', 'Linux'],
        oss: true,
      },
      {
        name: 'FreshRSS',
        url: 'https://freshrss.org',
        description:
          'Self-hosted, feature-rich RSS aggregator. Web interface with mobile app support. Multi-user capable.',
        tags: ['Open Source', 'Self-Hosted', 'Multi-User'],
        oss: true,
      },
    ],
  },
  {
    slug: 'world-maps',
    title: 'Private Map Services',
    category: 'Internet',
    color: '#a78bfa',
    icon: 'fa-map',
    description:
      'Map and navigation services that do not track your location history or build movement profiles.',
    intro:
      'Google Maps and Apple Maps track your location queries, route history, and Points of Interest visits. This data is highly sensitive — it reveals where you live, work, worship, seek medical care, and spend time. Privacy-respecting alternatives provide mapping without persistent location tracking.',
    criteria: [
      'No persistent location history stored server-side',
      'Offline map support for zero-network navigation',
      'Open data sources (OpenStreetMap preferred)',
      'No account required for basic use',
    ],
    tools: [
      {
        name: 'Organic Maps',
        url: 'https://organicmaps.app',
        description:
          'Offline maps based on OpenStreetMap. No accounts, no tracking, no ads. Best offline navigation option.',
        tags: ['Open Source', 'Offline', 'No Account', 'OpenStreetMap'],
        oss: true,
      },
      {
        name: 'OsmAnd',
        url: 'https://osmand.net',
        description:
          'Feature-rich offline maps with turn-by-turn navigation. OpenStreetMap based. Available on Android and iOS.',
        tags: ['Open Source', 'Offline', 'Turn-by-Turn'],
        oss: true,
      },
      {
        name: 'OpenStreetMap',
        url: 'https://www.openstreetmap.org',
        description:
          'The underlying open dataset. Web-based map with no account required. No tracking beyond basic access logs.',
        tags: ['Open Data', 'Web', 'No Account'],
      },
    ],
  },
  {
    slug: 'privacy-frontends',
    title: 'Privacy Frontends',
    category: 'Internet',
    color: '#a78bfa',
    icon: 'fa-layer-group',
    description:
      'Alternative frontends that let you access mainstream platforms without being tracked or profiled by them.',
    intro:
      'Privacy frontends are alternative interfaces for mainstream platforms (YouTube, Twitter, Reddit, Wikipedia) that strip tracking, remove JavaScript surveillance, and forward no identifying information to the original platform. You get the content without the surveillance.',
    criteria: [
      'Proxies requests so original platform does not see your IP',
      'Removes JavaScript tracking and fingerprinting',
      'Open-source and self-hostable',
      'No ads or tracking on the frontend itself',
    ],
    tools: [
      {
        name: 'Invidious',
        url: 'https://invidious.io',
        description:
          'YouTube frontend. Strips tracking, no Google cookies, subscription support without Google account.',
        tags: ['Open Source', 'Self-Hostable', 'YouTube'],
        oss: true,
      },
      {
        name: 'Nitter',
        url: 'https://github.com/zedeus/nitter',
        description:
          'Twitter/X frontend. No JavaScript, no tracking. Supports RSS feeds for accounts.',
        tags: ['Open Source', 'Self-Hostable', 'Twitter'],
        oss: true,
      },
      {
        name: 'Redlib',
        url: 'https://github.com/redlib-org/redlib',
        description:
          'Reddit frontend. No ads, no tracking, no JavaScript required. Fork of Libreddit.',
        tags: ['Open Source', 'Self-Hostable', 'Reddit'],
        oss: true,
      },
      {
        name: 'Rimgo',
        url: 'https://rimgo.codeberg.page',
        description:
          'Imgur frontend. Serves images without Imgur tracking or ads.',
        tags: ['Open Source', 'Self-Hostable', 'Imgur'],
        oss: true,
      },
    ],
  },
  {
    slug: 'youtube-alternatives',
    title: 'Video Platforms',
    category: 'Internet',
    color: '#a78bfa',
    icon: 'fa-video',
    description:
      'Decentralized and privacy-respecting video hosting platforms that do not build viewer profiles for advertising.',
    intro:
      "YouTube's business model is advertising, which requires extensive viewer profiling. Decentralized video platforms using protocols like ActivityPub provide video hosting without surveillance-based monetization.",
    criteria: [
      'No advertising-based viewer profiling',
      'Federated or decentralized architecture',
      'Open-source platform code',
      'No mandatory account for viewing',
    ],
    tools: [
      {
        name: 'PeerTube',
        url: 'https://joinpeertube.org',
        description:
          'Federated video platform using ActivityPub. No central owner. Self-hostable instances. P2P video delivery.',
        tags: ['Open Source', 'Federated', 'Self-Hostable', 'P2P'],
        oss: true,
      },
      {
        name: 'Odysee / LBRY',
        url: 'https://odysee.com',
        description:
          'Blockchain-based video platform with creator monetization. No ad-targeting profiles. Content moderation challenges exist.',
        tags: ['Decentralized', 'Blockchain', 'Creator Monetization'],
      },
    ],
  },
  {
    slug: 'disk-file-cleaner',
    title: 'Disk & File Cleaners',
    category: 'Internet',
    color: '#a78bfa',
    icon: 'fa-broom',
    description:
      'Tools for securely deleting files, wiping free space, and removing traces of activity from storage devices.',
    intro:
      'Deleting a file does not erase it — the data remains on disk until overwritten. Forensic tools can recover deleted files months or years later. Secure deletion tools overwrite data to prevent recovery. Privacy-sensitive users should also clean application caches, browser history, and temporary files.',
    criteria: [
      'Secure overwrite with multiple passes',
      'Free space wiping to remove traces of deleted files',
      'Application cache and history cleaning',
      'Open-source and auditable',
    ],
    tools: [
      {
        name: 'BleachBit',
        url: 'https://www.bleachbit.org',
        description:
          'Open-source system cleaner. Removes application caches, browser history, and temporary files. Secure file deletion. Cross-platform.',
        tags: ['Open Source', 'Cross-Platform', 'Secure Delete'],
        oss: true,
      },
      {
        name: 'shred (coreutils)',
        url: 'https://www.gnu.org/software/coreutils/',
        description:
          'Command-line secure file deletion on Linux. Part of GNU coreutils. Multiple overwrite passes.',
        tags: ['Open Source', 'CLI', 'Linux'],
        oss: true,
      },
      {
        name: 'Eraser',
        url: 'https://eraser.heidi.ie',
        description:
          'Windows secure deletion tool with scheduler. Multiple overwrite standards (DoD, Gutmann). Free and open-source.',
        tags: ['Open Source', 'Windows', 'Scheduled'],
        oss: true,
      },
    ],
  },
  {
    slug: 'crypto',
    title: 'Privacy Cryptocurrency',
    category: 'Finance',
    color: '#fbbf24',
    icon: 'fa-coins',
    description:
      'Cryptocurrencies and tools designed for financial privacy, with focus on Monero and Bitcoin privacy layers.',
    intro:
      'Bitcoin and most cryptocurrencies use transparent public ledgers where all transactions are visible. This provides poor financial privacy by default. Privacy-preserving cryptocurrencies use cryptographic techniques to obscure transaction amounts, sender, and receiver.',
    criteria: [
      'Transaction amounts, sender, and receiver obscured by default',
      'Decentralized and censorship-resistant',
      'Active development and security research',
      'Available on exchanges without mandatory KYC for small amounts',
    ],
    tools: [
      {
        name: 'Monero (XMR)',
        url: 'https://www.getmonero.org',
        description:
          'The leading privacy cryptocurrency. Ring signatures, stealth addresses, and RingCT obscure all transaction details by default.',
        tags: ['Open Source', 'Private by Default', 'Ring Signatures'],
        oss: true,
      },
      {
        name: 'Zcash (ZEC)',
        url: 'https://z.cash',
        description:
          'Optional shielded transactions using zk-SNARKs. Privacy is not default — must use shielded addresses explicitly.',
        tags: ['Open Source', 'zk-SNARKs', 'Optional Privacy'],
        oss: true,
      },
    ],
    note: 'Bitcoin is pseudonymous, not anonymous. With chain analysis, Bitcoin transactions are routinely de-anonymized. Use Monero for financial privacy.',
  },
  {
    slug: 'bitcoin',
    title: 'Bitcoin Privacy',
    category: 'Finance',
    color: '#fbbf24',
    icon: 'fa-bitcoin-sign',
    description:
      'Tools and practices for improving Bitcoin transaction privacy through CoinJoin, Lightning Network, and careful UTXO management.',
    intro:
      "Bitcoin's public ledger means all transactions are visible to anyone. While Bitcoin addresses are not directly linked to identities, chain analysis can often de-anonymize users through transaction graph analysis. Privacy can be improved through coin mixing, Lightning Network, and careful address hygiene.",
    criteria: [
      'Non-custodial wallet with full node option',
      'CoinJoin support for transaction mixing',
      'Lightning Network support for off-chain privacy',
      'Tor support for network-level privacy',
      'Open-source and audited',
    ],
    tools: [
      {
        name: 'Sparrow Wallet',
        url: 'https://sparrowwallet.com',
        description:
          'Desktop Bitcoin wallet with full CoinJoin support via Whirlpool. Full node connectivity. Best for privacy-focused Bitcoin use.',
        tags: ['Open Source', 'CoinJoin', 'Full Node', 'Desktop'],
        oss: true,
      },
      {
        name: 'Wasabi Wallet',
        url: 'https://wasabiwallet.io',
        description:
          'Privacy-focused Bitcoin wallet with built-in WabiSabi CoinJoin. Tor-by-default routing.',
        tags: ['Open Source', 'CoinJoin', 'Tor by Default'],
        oss: true,
      },
      {
        name: 'Phoenix Wallet',
        url: 'https://phoenix.acinq.co',
        description:
          'Self-custodial Lightning Network wallet. Off-chain payments with improved privacy versus on-chain.',
        tags: ['Open Source', 'Lightning', 'Self-Custodial'],
        oss: true,
      },
    ],
  },
  {
    slug: 'monero',
    title: 'Monero',
    category: 'Finance',
    color: '#fbbf24',
    icon: 'fa-circle-dollar-to-slot',
    description:
      'Wallets, exchanges, and tools for using Monero (XMR) — the leading privacy-preserving cryptocurrency.',
    intro:
      'Monero uses ring signatures, stealth addresses, and RingCT (Ring Confidential Transactions) to obscure the sender, receiver, and amount of every transaction by default. Unlike Bitcoin, there is no opt-in to privacy — all Monero transactions are private.',
    criteria: [
      'Non-custodial — you control your keys',
      'Open-source with audited cryptography',
      'No KYC requirement for peer-to-peer exchange',
      'Active security research and regular protocol updates',
    ],
    tools: [
      {
        name: 'Feather Wallet',
        url: 'https://featherwallet.org',
        description:
          'Lightweight desktop Monero wallet. Tor built-in, no account required, easy setup. Best desktop option.',
        tags: ['Open Source', 'Desktop', 'Tor Built-in'],
        oss: true,
      },
      {
        name: 'Monero GUI Wallet',
        url: 'https://www.getmonero.org/downloads/',
        description:
          'Official desktop wallet with full node option. Maximum verification and privacy when running own node.',
        tags: ['Open Source', 'Official', 'Full Node Option'],
        oss: true,
      },
      {
        name: 'Monerujo',
        url: 'https://www.monerujo.io',
        description:
          'Android Monero wallet. Open-source, non-custodial. Tor support via Orbot.',
        tags: ['Open Source', 'Android', 'Non-Custodial'],
        oss: true,
      },
    ],
  },
  {
    slug: 'secure-hosting-domain',
    title: 'Hosting & Domains',
    category: 'Reference',
    color: '#8b929e',
    icon: 'fa-server',
    description:
      'Privacy-respecting hosting providers and domain registrars with anonymous payment options and minimal data retention.',
    intro:
      'Hosting a website or service requires selecting providers who will not expose your identity to advertisers or cooperate with overreaching legal requests. For high-risk use cases, anonymous payment and minimal registration data are important factors.',
    criteria: [
      'Anonymous or pseudonymous registration with cash/Monero',
      'Located outside major surveillance alliance jurisdictions',
      'Transparent legal request policy with warrant canary',
      'No logging of access patterns beyond operational necessity',
      'WHOIS privacy enabled by default',
    ],
    tools: [
      {
        name: 'Njalla',
        url: 'https://njal.la',
        description:
          'Domain registrar and hosting that registers domains on your behalf, keeping your identity out of WHOIS entirely. Accepts Monero and Bitcoin.',
        tags: ['Anonymous Registration', 'Crypto Payment', 'WHOIS Privacy'],
      },
      {
        name: 'Mullvad Hosting',
        url: 'https://mullvad.net',
        description:
          "Mullvad's hosting infrastructure for privacy-focused server deployments. No-logs policy.",
        tags: ['No Logs', 'Privacy Focused'],
      },
      {
        name: '1984 Hosting',
        url: 'https://1984.hosting',
        description:
          'Iceland-based hosting with strong privacy stance and transparent legal request handling. Named after the Orwell novel.',
        tags: ['Iceland', 'Transparent Legal Policy', 'Privacy Stance'],
      },
    ],
  },
  {
    slug: 'secure-whistleblower',
    title: 'Secure Whistleblowing',
    category: 'Reference',
    color: '#8b929e',
    icon: 'fa-bullhorn',
    description:
      'Platforms and tools for securely submitting sensitive documents and information to journalists or organizations.',
    intro:
      'Whistleblowers face significant legal and personal risk. Secure submission platforms use Tor onion services, end-to-end encryption, and metadata stripping to protect source identity. The correct platform choice depends on your threat model and who you are submitting to.',
    criteria: [
      'Tor onion service for network anonymity',
      'End-to-end encrypted submissions',
      'Metadata stripping from submitted documents',
      'Open-source and independently audited',
      'No server-side logging of source IP or metadata',
    ],
    tools: [
      {
        name: 'SecureDrop',
        url: 'https://securedrop.org',
        description:
          'Industry-standard whistleblowing platform used by major news organizations. Runs on Tor, typically deployed on air-gapped or heavily isolated systems.',
        tags: ['Open Source', 'Tor', 'Journalism', 'Audited'],
        oss: true,
      },
      {
        name: 'OnionShare',
        url: 'https://onionshare.org',
        description:
          'Peer-to-peer anonymous file sharing over Tor. Can be self-hosted locally for direct secure transfers without intermediaries.',
        tags: ['Open Source', 'Tor', 'Self-Hosted', 'File Sharing'],
        oss: true,
      },
      {
        name: 'GlobaLeaks',
        url: 'https://www.globaleaks.org',
        description:
          'Open-source whistleblowing platform used by NGOs and investigative projects. Supports Tor, encrypted submissions, and multi-language deployments.',
        tags: ['Open Source', 'Whistleblowing Platform', 'Tor', 'NGO'],
        oss: true,
      },
      {
        name: 'Whistleblower Software (whistleblower.org)',
        url: 'https://www.whistleblower.org',
        description:
          'Framework and advocacy ecosystem for secure reporting channels, often used to deploy compliant disclosure systems in organizations.',
        tags: ['NGO', 'Reporting Infrastructure'],
      },
    ],
    note: "Before submitting sensitive materials, consult with a trusted legal advisor and read the EFF's Surveillance Self-Defense guide for your specific situation.",
  },
  {
    slug: 'gag',
    title: 'Gag Orders & Legal Pressure',
    category: 'Reference',
    color: '#8b929e',
    icon: 'fa-gavel',
    description:
      'Documentation of national security letters, gag orders, and legal pressure on privacy-focused service providers.',
    intro:
      'Governments use national security letters (NSLs), court orders, and other legal mechanisms to compel service providers to hand over user data — often with gag orders preventing disclosure. Warrant canaries and transparency reports are imperfect but meaningful signals.',
    criteria: [],
    tools: [
      {
        name: 'EFF: Who Has Your Back',
        url: 'https://www.eff.org/issues/who-has-your-back',
        description:
          'Annual EFF report rating major tech companies on privacy practices, government data request transparency, and user notification policies.',
        tags: ['Annual Report', 'Tech Companies', 'EFF'],
      },
      {
        name: 'Google Transparency Report',
        url: 'https://transparencyreport.google.com',
        description:
          "Google's disclosures on government data requests, content removal orders, and law enforcement cooperation.",
        tags: ['Transparency Report', 'Google'],
      },
      {
        name: 'Warrant Canary Watch',
        url: 'https://www.canarywatch.org',
        description:
          'Tracks warrant canaries across services. A warrant canary that disappears signals potential legal compulsion.',
        tags: ['Warrant Canary', 'Tracker'],
      },
    ],
    note: 'The safest assumption is that any service can be compelled to produce data it holds. The best protection is choosing services that hold minimal data and cannot decrypt what they store.',
  },
];
