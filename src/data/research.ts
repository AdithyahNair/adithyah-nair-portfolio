export interface ResearchItem {
  id: string;
  kind: string;
  title: string;
  description: string;
  meta: string;
  /** Only set when a real destination exists. */
  href?: string;
}

export const research: ResearchItem[] = [
  {
    id: 'comsnets-2024',
    kind: 'Conference',
    title: 'COMSNETS Graduate Forum 2024',
    description: 'Published and presented at the Graduate Forum of the International Conference on Communication Systems and Networks.',
    meta: 'Bengaluru, India · 2024',
  },
  {
    id: 'patent-202441045762',
    kind: 'Patent',
    title: 'Indian Patent 202441045762 A',
    description: 'Published patent application with the Indian Patent Office.',
    meta: 'Published · Indian Patent Office',
  },
];
