export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  dates: string;
  current?: boolean;
  /** Always visible. */
  highlights: string[];
  /** Revealed by the optional "More detail" toggle. */
  details?: string[];
}

export const experience: Experience[] = [
  {
    id: 'romancopilot',
    company: 'RomanCoPilot AI',
    title: 'Founding Fellow / Engineer',
    location: 'New York, NY',
    dates: 'Jul 2026 – Present',
    current: true,
    highlights: [
      'Building an AI-powered revenue optimization platform for the med spa industry, working directly with clients to understand their requirements and deliver the product.',
      'Designed deterministic logic that identifies revenue opportunities and integrated third-party data sources to surface more of them, identifying up to $800,000 in hidden revenue opportunities for the latest client.',
      'Developed a retrieval-augmented generation (RAG) system so users can interact with the product more intuitively.',
    ],
    details: [
      'Working toward HIPAA compliance while handling protected health information (PHI).',
    ],
  },
  {
    id: 'nyu',
    company: 'New York University',
    title: 'Course Assistant + Grader',
    location: 'Brooklyn, NY',
    dates: 'Jan – May 2025 · Jan – May 2026',
    highlights: [
      'Engineered Python grading automation that cut manual assessment time by 95% across 500+ weekly submissions.',
      'Maintained the Interactive Classroom System at 99.7% uptime and performed QA for an AI-driven Virtual Tutor, improving its accuracy by 40% through review of 150+ flagged responses a week.',
      'Led 15 hands-on cybersecurity SEED lab sessions in network security, cryptography and penetration testing, lifting student assessment scores by 25%.',
    ],
    details: [
      'Delivered technical support with a 95% first-contact resolution rate, resolving 30+ weekly queries from a cohort of 120+ students.',
    ],
  },
  {
    id: 'blockconvey',
    company: 'Block Convey',
    title: 'Software Engineer Intern',
    location: 'New York, NY',
    dates: 'May – Aug 2025',
    highlights: [
      'Architected and deployed PRISM on GCP: a secure, auto-scaled, event-driven AI governance and audit system built with Cloud Run, Cloud Functions and Terraform, serving ML testing and LLM services across multi-tenant and single-tenant environments.',
      'Built storage-event-triggered analysis pipelines with Cloud Build for bias detection, drift analysis, explainability and benchmarking, plus LLM evaluation with guardrails against PII exposure, prompt injection and adversarial red-teaming.',
    ],
    details: [
      'Implemented statistical benchmarking tests for models under scenarios such as dataset noise induction.',
      'Built checks that assess model behaviour against evolving standards and regulations, including the EU AI Act, ISO 42001, NIST AI RMF, Colorado SB 21-169 and NYC Local Law 144.',
    ],
  },
  {
    id: 'jumpingminds',
    company: 'Jumping Minds',
    title: 'Lead iOS Application Developer',
    location: 'Remote, India',
    dates: 'Jul – Aug 2022',
    highlights: [
      'Shipped a production-ready iOS app in six weeks as the sole iOS developer using Swift, Xcode and UIKit, reaching 98% feature parity with the Android version and reducing cross-platform development time by 35%.',
      'Built a secure multi-factor verification flow with Core Data, KeychainAccess and JWT authentication at 99.9% reliability, and integrated REST and GraphQL APIs handling 10,000+ daily transactions at ~30 ms average response time.',
    ],
    details: [
      'Engineered responsive layouts with Auto Layout and UIStackView plus custom animations, achieving 100% compatibility across iOS devices, a 4.7/5 score in internal QA testing, and 80% fewer UI bug reports than previous projects.',
    ],
  },
];
