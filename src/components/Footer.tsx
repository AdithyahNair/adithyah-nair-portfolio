import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="footer">
      <p>Designed &amp; built by {site.name} — {site.location}</p>
      <div className="footer__links">
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={site.resumePath} download={site.resumeFilename}>
          Résumé
        </a>
      </div>
    </footer>
  );
}
