import { GraduationCap } from 'lucide-react';
import { education } from '../data/site';
import { skillGroups } from '../data/skills';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <SectionTitle number="01">About me</SectionTitle>
      <span id="about-title" className="sr-only">
        About me
      </span>

      <div className="about__grid">
        <Reveal className="about__text">
          <p>
            I'm a software engineer based in <strong>New York City</strong>. I completed my MS in Computer Science at{' '}
            <strong>NYU</strong> in May 2026, after earning a B.Tech in Computer Science and Engineering from SRM
            University AP in India.
          </p>
          <p>
            Today I'm a Founding Fellow / Engineer at <strong>RomanCoPilot AI</strong>, where I build an AI-powered
            revenue optimization platform for the med spa industry: deterministic logic that surfaces revenue
            opportunities, third-party data integrations, and a RAG system that makes the product easier to work with.
          </p>
          <p>
            Before that, at <strong>Block Convey</strong> I architected PRISM, an event-driven AI governance platform on
            GCP that audits ML and LLM systems for bias, drift, explainability and safety. At <strong>NYU</strong> I
            built grading automation and supported cybersecurity SEED labs for 120+ students, and earlier I shipped a
            production iOS app solo in six weeks at <strong>Jumping Minds</strong>.
          </p>
          <p>
            I'm happiest at the intersection of <strong>AI engineering</strong>, <strong>scalable backends</strong> and{' '}
            <strong>security</strong>, and I like winning hackathons along the way.
          </p>
        </Reveal>

        <Reveal className="about__aside" delay={0.1}>
          <div>
            <h3 className="about__label">Education</h3>
            <ul className="edu">
              {education.map((e) => (
                <li className="edu__item" key={e.school}>
                  <GraduationCap className="edu__icon" size={18} aria-hidden="true" />
                  <div>
                    <div className="edu__school">{e.school}</div>
                    <div className="edu__degree">{e.degree}</div>
                    <div className="edu__meta">
                      {e.dates} · {e.detail}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="skills">
        {skillGroups.map((group, i) => (
          <Reveal className="skills__group" key={group.title} delay={i * 0.05}>
            <h3>{group.title}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
