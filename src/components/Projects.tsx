import type { MouseEvent } from 'react';
import { ExternalLink, Github, Trophy } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { ProjectArt } from './ProjectArt';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <SectionTitle number="03">Things I've built</SectionTitle>
      <span id="projects-title" className="sr-only">
        Projects
      </span>
      <Reveal>
        <p className="section__intro">
          Selected work across streaming data, on-device AI and blockchain. Two are featured; the hackathon winners
          follow.
        </p>
      </Reveal>

      <div className="projects">
        {featured.map((p, i) => (
          <Reveal key={p.id}>
            <ProjectCard project={p} featured flip={i % 2 === 1} />
          </Reveal>
        ))}
        <div className="projects__grid">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function setGlow(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
}

function ProjectCard({ project, featured = false, flip = false }: { project: Project; featured?: boolean; flip?: boolean }) {
  const classes = ['project'];
  if (featured) classes.push('project--featured');
  if (flip) classes.push('project--flip');
  if (project.award) classes.push('project--award');
  const headingId = `${project.id}-title`;

  return (
    <article className={classes.join(' ')} aria-labelledby={headingId} onMouseMove={setGlow} style={{ height: '100%' }}>
      <div className="project__visual">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt ?? `${project.title} screenshot`} loading="lazy" decoding="async" width={1600} height={1000} />
        ) : project.art ? (
          <ProjectArt kind={project.art} title={project.title} />
        ) : null}
      </div>

      <div className="project__content">
        {project.award ? (
          <p className="project__award">
            <Trophy size={13} aria-hidden="true" />
            {project.award}
          </p>
        ) : (
          <p className="project__tag">{project.tag}</p>
        )}
        <h3 className="project__name" id={headingId}>
          {project.title}
        </h3>
        {project.context && <p className="project__context">{project.context}</p>}

        <dl className="project__desc">
          <div>
            <dt>Problem.</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Built.</dt>
            <dd>{project.built}</dd>
          </div>
          <div>
            <dt>Outcome.</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>

        <ul className="project__stack" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="project__links">
          <a className="project__link" href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={15} aria-hidden="true" />
            GitHub
            <span className="sr-only"> repository for {project.title} (opens in a new tab)</span>
          </a>
          {project.demo && (
            <a className="project__link project__link--demo" href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} aria-hidden="true" />
              Live demo
              <span className="sr-only"> of {project.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
