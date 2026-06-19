import type { SkillId } from '@/data/types';
import { getSkill } from '@/data';
import { cn } from '@/lib/ui';

interface SkillBadgeProps {
  id: SkillId;
  withLabel?: boolean;
  className?: string;
}

/** Badge `[RTx]` cohérent partout, couleur selon le parcours. */
export function SkillBadge({ id, withLabel = false, className }: SkillBadgeProps) {
  const skill = getSkill(id);
  if (!skill) return null;
  const isCyber = skill.track === 'cyber';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-xs',
        isCyber
          ? 'border-emerald/40 bg-emerald-soft text-emerald'
          : 'border-cyan/40 bg-cyan-soft text-cyan',
        className,
      )}
      title={skill.label}
    >
      [{skill.id}]{withLabel && <span className="text-muted">{skill.short}</span>}
    </span>
  );
}
