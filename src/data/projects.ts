export type ProjectArt = 'nfl' | 'agri';

export interface Project {
  id: string;
  title: string;
  tag: string;
  award?: string;
  context?: string;
  problem: string;
  built: string;
  outcome: string;
  stack: string[];
  github: string;
  demo?: string;
  /** Real screenshot under public/assets/images. */
  image?: string;
  imageAlt?: string;
  /** Conceptual illustration when no authentic screenshot exists. */
  art?: ProjectArt;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'nfl-realtime-analytics',
    title: 'NFL Real-Time Analytics',
    tag: 'Big Data · ML',
    context: 'NYU Big Data final project',
    problem:
      'Live play-by-play and tracking data arrives fast, but useful signals such as expected points and scoring probability usually show up long after the play.',
    built:
      'A streaming pipeline on AWS Kinesis and PySpark that ingests live game data, scores it with XGBoost models, and serves expected points, scoring probabilities, play classification and QB-pressure risk to a React dashboard through FastAPI.',
    outcome:
      'Insights at sub-3-second latency. Models trained on ~310,000 plays across 9 seasons reached 98%+ accuracy on scoring probability and 99.5% R² on expected points.',
    stack: ['Python', 'AWS Kinesis', 'PySpark', 'XGBoost', 'FastAPI', 'React'],
    github: 'https://github.com/gokulnpc/nfl-realtime-analytics',
    art: 'nfl',
    featured: true,
  },
  {
    id: 'codeguardian',
    title: 'CodeGuardian',
    tag: 'AI · Security',
    context: 'On-Device AI Builders Hackathon 2024',
    problem:
      'Sending source code to a cloud LLM for security review means sharing private code with a third party.',
    built:
      'A VS Code extension that runs yi-coder-9b locally through LMStudio and flags SQL injection, XSS, path traversal and API security flaws as you write code, across 8+ languages.',
    outcome:
      '92% detection accuracy with complete data privacy, since every analysis runs on the developer’s machine.',
    stack: ['TypeScript', 'Python', 'LMStudio', 'yi-coder-9b', 'VS Code API'],
    github: 'https://github.com/AdithyahNair/CodeGuardianInfo',
    demo: 'https://codeguardianlmstudio.netlify.app',
    image: '/assets/images/codeguardian.jpg',
    imageAlt: 'CodeGuardian listing on the VS Code marketplace',
    featured: true,
  },
  {
    id: 'memeverse',
    title: 'MemeVerse',
    tag: 'Blockchain · Avalanche',
    award: 'Winner · Avalanche x MBC Hackathon 2024',
    problem:
      'Launching a meme coin fairly needs predictable pricing, instant liquidity and reach across chains.',
    built:
      'A launchpad on a custom Avalanche L1 subnet with bonding-curve tokenomics via a custom precompile, automated liquidity pools with 100% finality, cross-chain messaging through ICM, and a live analytics dashboard.',
    outcome: 'Processed 1,000+ transactions in testing across 23+ successful deployments.',
    stack: ['Solidity', 'Go', 'TypeScript', 'Avalanche L1', 'ICM'],
    github: 'https://github.com/AdithyahNair/Avax-Hackathon',
    demo: 'https://avax-hackathon.vercel.app',
    image: '/assets/images/memeverse.jpg',
    imageAlt: 'MemeVerse launchpad landing page',
  },
  {
    id: 'nftverse',
    title: 'NFTVerse',
    tag: 'Blockchain · Market data',
    award: 'Best Use of Crypto Market Data · QuickNode Hackathon',
    problem: 'NFT traders rarely see live market context next to the assets they are buying.',
    built:
      'An NFT marketplace pairing on-chain trading with live crypto market intelligence: real-time prices via CoinAPI on QuickNode infrastructure, MetaMask wallet connectivity, and market analytics for every trade.',
    outcome: 'Won the category and a $1,000 prize.',
    stack: ['TypeScript', 'React', 'Solidity', 'QuickNode', 'CoinAPI'],
    github: 'https://github.com/AdithyahNair/Quicknode-Hackathon',
    image: '/assets/images/nftverse.jpg',
    imageAlt: 'NFTVerse marketplace home page',
  },
  {
    id: 'agrisecurehub',
    title: 'AgriSecureHub',
    tag: 'Blockchain · IoT',
    problem:
      'Agricultural supply chains lack tamper-proof records of where food came from and how it was stored along the way.',
    built:
      'Ricardian smart contracts on Ethereum document each product end-to-end, ESP8266 IoT sensors feed real-time condition data, and a React dashboard lets anyone verify provenance.',
    outcome: 'End-to-end provenance and condition tracking for food products on a public ledger.',
    stack: ['Solidity', 'Node.js', 'React', 'Firebase', 'ESP8266'],
    github: 'https://github.com/AdithyahNair/AgriSecureHub',
    art: 'agri',
  },
];
