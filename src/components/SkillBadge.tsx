import type { SkillId } from '@/data/types';
import { getSkill } from '@/data';
import { cn } from '@/lib/ui';
import { useReadingMode } from '@/lib/readingMode';

interface SkillBadgeProps {
  id: SkillId;
  withLabel?: boolean;
  className?: string;
}

/** Badge `[RTx]` cohérent partout, couleur selon le parcours. */
export function SkillBadge({ id, withLabel = false, className }: SkillBadgeProps) {
  const { isSimple } = useReadingMode();
  const skill = getSkill(id);
  if (!skill) return null;
  const isCyber = skill.track === 'cyber';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs',
        !isSimple && 'font-mono',
        isCyber
          ? 'border-emerald/40 bg-emerald-soft text-emerald'
          : 'border-cyan/40 bg-cyan-soft text-cyan',
        className,
      )}
      title={isSimple ? skill.simple?.label ?? skill.label : skill.label}
    >
      {isSimple ? (
        skill.simple?.short ?? skill.short
      ) : (
        <>
          [{skill.id}]{withLabel && <span className="text-muted">{skill.short}</span>}
        </>
      )}
    </span>
  );
}
