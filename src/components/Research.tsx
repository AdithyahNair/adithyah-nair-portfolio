import { research } from '../data/research';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function Research() {
  return (
    <section className="section" id="research" aria-labelledby="research-title">
      <SectionTitle number="04">Research &amp; patent</SectionTitle>
      <span id="research-title" className="sr-only">
        Research and patent
      </span>
      <div className="research">
        {research.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.08}>
            <article className="research__card">
              <p className="research__kind">{item.kind}</p>
              <h3>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p>{item.description}</p>
              <p className="research__meta">{item.meta}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
