import { Reveal } from './Reveal';

interface SectionTitleProps {
  number: string;
  children: string;
}

export function SectionTitle({ number, children }: SectionTitleProps) {
  return (
    <Reveal>
      <h2 className="section__title">
        <span className="section__num" aria-hidden="true">
          {number}
        </span>
        {children}
      </h2>
    </Reveal>
  );
}
