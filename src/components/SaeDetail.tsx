import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink as ExternalLinkIcon, X } from 'lucide-react';
import type { Sae } from '@/data/types';
import { getSkill } from '@/data';
import { SkillBadge } from './SkillBadge';
import { StatusPill } from './StatusPill';
import { useReadingMode } from '@/lib/readingMode';

interface SaeDetailProps {
  sae: Sae | null;
  onClose: () => void;
}

export function SaeDetail({ sae, onClose }: SaeDetailProps) {
  const { pick, isSimple } = useReadingMode();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sae) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [sae, onClose]);

  return (
    <AnimatePresence>
      {sae && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sae-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="surface-card relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl p-6 sm:rounded-2xl sm:p-8"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 rounded-md p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <X size={18} />
            </button>

            <div className="flex flex-wrap items-center gap-3 pr-8">
              {!isSimple && sae.code && (
                <span className="font-mono text-xs text-cyan">{sae.code}</span>
              )}
              <StatusPill status={sae.status} />
              {sae.period && (
                <span className="font-mono text-xs text-faint">{sae.period}</span>
              )}
            </div>

            <h2
              id="sae-title"
              className="mt-3 font-display text-2xl font-semibold text-ink"
            >
              {pick(sae.title, sae.simple?.title)}
            </h2>

            <p className="mt-3 leading-relaxed text-muted">
              {isSimple
                ? sae.simple?.description ?? sae.simple?.summary ?? sae.description ?? sae.summary
                : sae.description ?? sae.summary}
            </p>

            {(() => {
              const highlights = pick(sae.highlights, sae.simple?.highlights);
              return highlights && highlights.length > 0 ? (
              <ul className="mt-5 space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    {h}
                  </li>
                ))}
              </ul>
              ) : null;
            })()}

            <div className={isSimple ? 'mt-6' : 'mt-6 grid gap-5 sm:grid-cols-2'}>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                  {isSimple ? 'Savoir-faire mobilisés' : 'Compétences'}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {sae.skills.map((id) => (
                    <SkillBadge key={id} id={id} withLabel />
                  ))}
                </div>
              </div>
              {!isSimple && (
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                  Outils
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {sae.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-line/60 bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              )}
            </div>

            {/* Apprentissages critiques des compétences mobilisées (repliable) */}
            {!isSimple && sae.skills.length > 0 && (
              <div className="mt-6 border-t border-line/60 pt-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                  Apprentissages critiques mobilisés
                </p>
                <div className="space-y-2">
                  {sae.skills.map((id) => {
                    const skill = getSkill(id);
                    if (!skill?.apprentissagesCritiques?.length) return null;
                    return (
                      <details
                        key={id}
                        className="group rounded-lg border border-line/60 bg-surface-2/50 px-3 py-2"
                      >
                        <summary className="flex cursor-pointer list-none items-center gap-2 text-sm text-ink">
                          <span className="font-mono text-xs text-cyan">[{skill.id}]</span>
                          <span className="flex-1">{skill.short}</span>
                          <span className="font-mono text-xs text-faint transition-transform group-open:rotate-90">
                            ›
                          </span>
                        </summary>
                        <ul className="mt-2 space-y-1.5 pl-1">
                          {skill.apprentissagesCritiques.map((ac, i) => (
                            <li key={ac.code ?? i} className="flex gap-2 text-xs text-muted">
                              <span className="shrink-0 font-mono text-emerald">
                                {ac.code ?? '•'}
                              </span>
                              <span>{ac.label}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    );
                  })}
                </div>
              </div>
            )}

            {sae.links && sae.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-line/60 pt-5">
                {sae.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm text-ink transition-colors hover:border-cyan/60 hover:text-cyan"
                  >
                    {link.label} <ExternalLinkIcon size={13} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
