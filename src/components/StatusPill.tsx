import type { Status } from '@/data/types';
import { STATUS_META, cn } from '@/lib/ui';

const TONE: Record<'emerald' | 'cyan' | 'muted', string> = {
  emerald: 'border-emerald/40 bg-emerald-soft text-emerald',
  cyan: 'border-cyan/40 bg-cyan-soft text-cyan',
  muted: 'border-line bg-surface-2 text-muted',
};

/** Petite pastille d'état réutilisée par SAÉ, projets et compétences. */
export function StatusPill({ status, className }: { status: Status; className?: string }) {
  const meta = STATUS_META[status];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium',
        TONE[meta.tone],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {meta.label}
    </span>
  );
}
