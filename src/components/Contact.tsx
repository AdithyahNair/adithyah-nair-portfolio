import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../data/site';
import { ResumeLink } from './ResumeLink';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <SectionTitle number="05">Get in touch</SectionTitle>
      <span id="contact-title" className="sr-only">
        Get in touch
      </span>
      <Reveal>
        <p className="contact__text">
          I'm open to <strong>full-time software engineering and AI engineering roles</strong>. Whether you have an
          opportunity, a question, or just want to say hi, my inbox is open.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="contact__actions">
          <a className="btn btn--solid" href={`mailto:${site.email}`}>
            <Mail size={16} aria-hidden="true" />
            Say hello
          </a>
          <ResumeLink className="btn btn--ghost" />
          <ResumeLink className="text-link" view />
        </div>
      </Reveal>
      <Reveal delay={0.14}>
        <div className="contact__socials">
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail size={16} aria-hidden="true" />
            {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
