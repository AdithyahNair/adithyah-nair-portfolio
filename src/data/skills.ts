export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Swift', 'Solidity'],
  },
  {
    title: 'AI & data',
    items: [
      'RAG systems',
      'LLM evaluation & guardrails',
      'ML model testing (bias, drift, explainability)',
      'MCP',
      'Claude Code',
      'XGBoost',
      'PySpark',
    ],
  },
  {
    title: 'Cloud & infrastructure',
    items: ['GCP (Cloud Run, Cloud Functions, Cloud Build)', 'AWS (Kinesis)', 'Terraform', 'CI/CD', 'Git'],
  },
  {
    title: 'Product & full-stack',
    items: ['React', 'Node.js', 'MERN', 'MongoDB', 'FastAPI', 'REST & GraphQL', 'PostHog', 'Notion / Attio'],
  },
  {
    title: 'Mobile & blockchain',
    items: ['Swift / UIKit', 'Ethereum', 'Avalanche L1', 'Smart contracts'],
  },
];
