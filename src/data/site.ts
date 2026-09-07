export const site = {
  name: 'Adithyah Nair',
  initials: 'AN',
  role: 'Software Engineer / AI Engineer',
  location: 'New York, NY',
  tagline: 'I build intelligent, scalable systems.',
  email: 'adithyah.nair@gmail.com',
  github: 'https://www.github.com/adithyahnair',
  linkedin: 'https://www.linkedin.com/in/adithyahnair/',
  /** Served from public/resume — keep the PDF unchanged. */
  resumePath: '/resume/Adithyah_Nair_Resume.pdf',
  resumeFilename: 'Adithyah_Nair_Resume.pdf',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof navLinks)[number]['id'] | 'hero';

export const education = [
  {
    school: 'New York University',
    degree: 'MS, Computer Science',
    dates: 'Sep 2024 – May 2026',
    detail: 'GPA 3.75 · Brooklyn, NY',
  },
  {
    school: 'SRM University AP',
    degree: 'B.Tech, Computer Science and Engineering',
    dates: 'Sep 2020 – Jun 2024',
    detail: 'GPA 3.54 · India',
  },
];
