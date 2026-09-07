import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, GraduationCap, Mail, MapPin } from 'lucide-react';
import { site } from '../data/site';
import { ResumeLink } from './ResumeLink';
import { EASE } from '../motion';

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay: 0.1 + i * 0.09 },
  });
  const line = (i: number) => ({
    initial: reduce ? false : { y: '110%' },
    animate: { y: 0 },
    transition: { duration: 0.7, ease: EASE, delay: 0.15 + i * 0.1 },
  });

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <motion.p className="hero__eyebrow" {...fade(0)}>
        Hi, my name is
      </motion.p>
      <h1 className="hero__title" id="hero-title">
        <span className="hero__line">
          <motion.span {...line(0)}>Adithyah</motion.span>
        </span>
        <span className="hero__line hero__line--accent">
          <motion.span {...line(1)}>Nair.</motion.span>
        </span>
      </h1>
      <p className="hero__subtitle">
        <span className="hero__line">
          <motion.span {...line(2)}>{site.tagline}</motion.span>
        </span>
      </p>

      <motion.ul className="hero__meta" {...fade(3)}>
        <li>
          <span aria-hidden="true">▹</span>
          {site.role}
        </li>
        <li>
          <MapPin size={14} aria-hidden="true" />
          {site.location}
        </li>
        <li>
          <GraduationCap size={15} aria-hidden="true" />
          NYU MS Computer Science, 2026
        </li>
      </motion.ul>

      <motion.p className="hero__desc" {...fade(4)}>
        I design and ship <strong>AI products</strong>, the <strong>cloud infrastructure</strong> behind them, and the{' '}
        <strong>full-stack applications</strong> people use them through. Currently a Founding Fellow / Engineer at{' '}
        <strong>RomanCoPilot AI</strong>, building an AI-powered revenue optimization platform.
      </motion.p>

      <motion.div className="hero__actions" {...fade(5)}>
        <a className="btn btn--solid" href="#projects">
          View projects
        </a>
        <ResumeLink className="btn btn--ghost" />
        <a className="text-link" href={`mailto:${site.email}`}>
          <Mail size={15} aria-hidden="true" />
          Get in touch
        </a>
      </motion.div>

      <motion.a className="hero__scroll" href="#about" aria-label="Scroll to About" {...fade(7)}>
        <span />
        scroll
        <ArrowDown size={12} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
