import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { navLinks, site } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { ResumeLink } from './ResumeLink';
import { EASE } from '../motion';

const SECTION_IDS = ['hero', ...navLinks.map((l) => l.id)] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    burgerRef.current?.focus();
  }, []);

  // Escape closes, focus moves into the drawer on open, body scroll is locked.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 60);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(t);
    };
  }, [open, close]);

  // Close the drawer if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)');
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const links = (mobile: boolean) =>
    navLinks.map((link, i) => {
      const isActive = active === link.id;
      return (
        <a
          key={link.id}
          ref={mobile && i === 0 ? firstLinkRef : undefined}
          className="nav__link"
          href={`#${link.id}`}
          aria-current={isActive ? 'true' : undefined}
          onClick={() => mobile && setOpen(false)}
        >
          {link.label}
          {!mobile && isActive && (
            <motion.span
              className="nav__indicator"
              layoutId="nav-indicator"
              transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 34 }}
            />
          )}
        </a>
      );
    });

  return (
    <header>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label="Primary">
        <a className="nav__logo" href="#hero" aria-label={`${site.initials}. Back to top`}>
          {site.initials}
          <span className="accent">.</span>
        </a>

        <div className="nav__links">{links(false)}</div>
        <ResumeLink className="nav__cta" iconSize={15} />

        <button
          ref={burgerRef}
          type="button"
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="nav__scrim"
              aria-label="Close menu"
              tabIndex={-1}
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              id="mobile-menu"
              className="nav__mobile"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={reduce ? { opacity: 0 } : { x: '100%' }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {links(true)}
              <ResumeLink className="nav__cta" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
