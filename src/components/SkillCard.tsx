import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import type { Skill } from '@/data/types';
import { LEVEL_LABEL } from '@/lib/ui';
import { StatusPill } from './StatusPill';

interface SkillCardProps {
  skill: Skill;
  onOpen: (id: string) => void;
}

export function SkillCard({ skill, onOpen }: SkillCardProps) {
  const acCount = skill.apprentissagesCritiques?.length ?? 0;

  return (
    <button
      type="button"
      onClick={() => onOpen(skill.id)}
      className="surface-card group flex h-full w-full flex-col p-5 text-left transition-shadow hover:shadow-neon-cyan focus-visible:shadow-neon-cyan"
      aria-label={`Détails de la compétence ${skill.id}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-cyan">[{skill.id}]</span>
          {skill.track === 'cyber' && (
            <ShieldCheck size={15} className="text-emerald" aria-label="Parcours Cybersécurité" />
          )}
        </div>
        <StatusPill status={skill.status} />
      </div>

      <h3 className="mt-3 font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-cyan">
        {skill.label}
      </h3>

      <p className="mt-2 flex-1 text-sm text-muted">{skill.description}</p>

      {/* Jauge de niveau */}
      <div className="mt-4">
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="font-mono text-faint">{LEVEL_LABEL[skill.level]}</span>
          <span className="font-mono text-muted">{skill.levelPercent}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan to-emerald"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.levelPercent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
        </div>
      </div>

      <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-cyan opacity-0 transition-opacity group-hover:opacity-100">
        {acCount > 0 ? `${acCount} apprentissages critiques` : 'Voir le détail'}
        <ArrowUpRight size={13} />
      </span>
    </button>
  );
}
