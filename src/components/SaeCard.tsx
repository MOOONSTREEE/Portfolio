import { ArrowUpRight, Star } from 'lucide-react';
import type { Sae } from '@/data/types';
import { SkillBadge } from './SkillBadge';
import { StatusPill } from './StatusPill';
import { useReadingMode } from '@/lib/readingMode';

interface SaeCardProps {
  sae: Sae;
  onOpen: (id: string) => void;
}

export function SaeCard({ sae, onOpen }: SaeCardProps) {
  const { pick, isSimple } = useReadingMode();

  return (
    <button
      type="button"
      onClick={() => onOpen(sae.id)}
      className="surface-card group flex h-full w-full flex-col p-5 text-left transition-shadow hover:shadow-neon-cyan focus-visible:shadow-neon-cyan"
      aria-label={`Détails de la SAÉ ${sae.code ?? sae.title}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {!isSimple && sae.code && (
            <span className="font-mono text-xs text-faint">{sae.code}</span>
          )}
          {sae.featured && (
            <Star size={13} className="text-cyan" aria-label="Mise en avant" />
          )}
        </div>
        <StatusPill status={sae.status} />
      </div>

      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-cyan">
        {pick(sae.title, sae.simple?.title)}
      </h3>

      <p className="mt-2 flex-1 text-sm text-muted">{pick(sae.summary, sae.simple?.summary)}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {sae.skills.map((id) => (
          <SkillBadge key={id} id={id} />
        ))}
      </div>

      {!isSimple && sae.tools.length > 0 && (
        <p className="mt-3 font-mono text-xs text-faint">{sae.tools.join(' · ')}</p>
      )}

      <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-cyan opacity-0 transition-opacity group-hover:opacity-100">
        Voir le détail <ArrowUpRight size={13} />
      </span>
    </button>
  );
}
