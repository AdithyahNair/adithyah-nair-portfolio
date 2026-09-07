import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { experience, type Experience as ExperienceItem } from '../data/experience';
import { Reveal } from './Reveal';
import { EASE } from '../motion';
import { SectionTitle } from './SectionTitle';

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <SectionTitle number="02">Experience</SectionTitle>
      <span id="experience-title" className="sr-only">
        Experience
      </span>
      <ol className="timeline">
        {experience.map((item, i) => (
          <Reveal key={item.id} delay={Math.min(i * 0.06, 0.2)} y={18}>
            <TimelineItem item={item} />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function TimelineItem({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const detailsId = `${item.id}-details`;
  const hasDetails = !!item.details?.length;

  return (
    <li className={`timeline__item${item.current ? ' timeline__item--current' : ''}`}>
      <div className="timeline__meta">
        <span className="timeline__date">{item.dates}</span>
        <span className="timeline__loc">{item.location}</span>
      </div>
      <div className="timeline__body">
        <h3>
          {item.title} <span className="timeline__company">@ {item.company}</span>
        </h3>
        <ul>
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        {hasDetails && (
          <>
            <button
              type="button"
              className="timeline__more"
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Less detail' : 'More detail'}
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={detailsId}
                  className="timeline__details"
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <ul>
                    {item.details!.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </li>
  );
}
