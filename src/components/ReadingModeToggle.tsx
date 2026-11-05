import { Code2, Users } from 'lucide-react';
import { cn } from '@/lib/ui';
import { useReadingMode, type ReadingMode } from '@/lib/readingMode';

const OPTIONS: { value: ReadingMode; label: string; short: string; icon: typeof Code2; hint: string }[] = [
  {
    value: 'tech',
    label: 'Vue technique',
    short: 'Technique',
    icon: Code2,
    hint: 'Pour les professionnels de l’informatique : vocabulaire du métier, outils, référentiel.',
  },
  {
    value: 'simple',
    label: 'Vue simplifiée',
    short: 'Simplifiée',
    icon: Users,
    hint: 'Pour les RH et les personnes hors informatique : explications en langage courant.',
  },
];

/** Interrupteur à deux positions, utilisé dans l'en-tête (desktop et mobile). */
export function ReadingModeToggle({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = useReadingMode();

  return (
    <div
      role="group"
      aria-label="Niveau de détail du portfolio"
      className="relative inline-flex rounded-full border border-line bg-surface-2/80 p-0.5"
    >
      {OPTIONS.map(({ value, label, short, icon: Icon, hint }) => {
        const active = mode === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setMode(value)}
            aria-pressed={active}
            title={hint}
            className={cn(
              'relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
              active ? 'bg-cyan text-base' : 'text-muted hover:text-ink',
            )}
          >
            <Icon size={13} aria-hidden="true" />
            <span>{compact ? short : label}</span>
          </button>
        );
      })}
    </div>
  );
}
