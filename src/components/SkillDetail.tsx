import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';
import type { Skill } from '@/data/types';
import { getSaeById } from '@/data';
import { LEVEL_LABEL } from '@/lib/ui';
import { StatusPill } from './StatusPill';
import { useReadingMode } from '@/lib/readingMode';

interface SkillDetailProps {
  skill: Skill | null;
  onClose: () => void;
  onOpenSae: (id: string) => void;
}

export function SkillDetail({ skill, onClose, onOpenSae }: SkillDetailProps) {
  const { pick, isSimple } = useReadingMode();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!skill) return;
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
  }, [skill, onClose]);

  const proofs = skill
    ? skill.proofSaeIds
        .map((id) => getSaeById(id))
        .filter((s): s is NonNullable<typeof s> => Boolean(s))
    : [];

  return (
    <AnimatePresence>
      {skill && (
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
            aria-labelledby="skill-title"
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
              {!isSimple && (
                <span className="font-mono text-sm font-bold text-cyan">[{skill.id}]</span>
              )}
              {skill.track === 'cyber' && (
                <span className="inline-flex items-center gap-1 text-xs text-emerald">
                  <ShieldCheck size={14} /> {isSimple ? 'Spécialité cybersécurité' : 'Parcours Cybersécurité'}
                </span>
              )}
              <StatusPill status={skill.status} />
            </div>

            <h2 id="skill-title" className="mt-3 font-display text-2xl font-semibold text-ink">
              {pick(skill.label, skill.simple?.label)}
            </h2>

            <p className="mt-3 leading-relaxed text-muted">{pick(skill.description, skill.simple?.description)}</p>

            {/* Jauge de niveau */}
            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-mono text-faint">{LEVEL_LABEL[skill.level]}</span>
                {!isSimple && <span className="font-mono text-muted">{skill.levelPercent}%</span>}
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan to-emerald"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.levelPercent}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Vue simplifiée : exemples concrets à la place du référentiel */}
            {isSimple && skill.simple?.examples && skill.simple.examples.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-medium text-ink">Concrètement, cela veut dire :</p>
                <ul className="mt-3 space-y-2.5">
                  {skill.simple.examples.map((ex) => (
                    <li key={ex} className="flex gap-3 text-sm text-ink">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Apprentissages critiques (vue technique) */}
            {!isSimple && skill.apprentissagesCritiques && skill.apprentissagesCritiques.length > 0 && (
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
                  Apprentissages critiques
                </p>
                {skill.acLevel && (
                  <p className="mt-1 text-xs text-cyan">{skill.acLevel}</p>
                )}
                <ul className="mt-3 space-y-2.5">
                  {skill.apprentissagesCritiques.map((ac, i) => (
                    <li key={ac.code ?? i} className="flex gap-3 text-sm">
                      <span className="mt-0.5 shrink-0 font-mono text-xs text-emerald">
                        {ac.code ?? '•'}
                      </span>
                      <span className="text-ink">{ac.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Preuves (SAÉ) */}
            {proofs.length > 0 && (
              <div className="mt-6 border-t border-line/60 pt-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                  {isSimple ? 'Projets où je l’ai mis en pratique' : 'Preuves — SAÉ rattachées'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proofs.map((sae) => (
                    <button
                      key={sae.id}
                      type="button"
                      onClick={() => onOpenSae(sae.id)}
                      className="rounded-lg border border-line px-3 py-2 text-left text-sm text-ink transition-colors hover:border-cyan/60 hover:text-cyan"
                    >
                      {!isSimple && (
                        <span className="mr-2 font-mono text-xs text-faint">{sae.code ?? 'SAÉ'}</span>
                      )}
                      <span>{pick(sae.title, sae.simple?.title)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
