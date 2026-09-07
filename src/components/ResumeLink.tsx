import { Download, FileText } from 'lucide-react';
import { site } from '../data/site';

interface ResumeLinkProps {
  className?: string;
  label?: string;
  /** Opens the PDF in a new tab instead of downloading it. */
  view?: boolean;
  iconSize?: number;
}

/** The single source of truth for résumé links across the page. */
export function ResumeLink({ className = 'btn btn--ghost', label, view = false, iconSize = 16 }: ResumeLinkProps) {
  if (view) {
    return (
      <a className={className} href={site.resumePath} target="_blank" rel="noopener noreferrer">
        <FileText size={iconSize} aria-hidden="true" />
        {label ?? 'View résumé'}
        <span className="sr-only"> (opens PDF in a new tab)</span>
      </a>
    );
  }
  return (
    <a className={className} href={site.resumePath} download={site.resumeFilename}>
      <Download size={iconSize} aria-hidden="true" />
      {label ?? 'Download résumé'}
      <span className="sr-only"> (PDF)</span>
    </a>
  );
}
