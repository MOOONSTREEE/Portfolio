import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { sortedSaes, usedSkillIds, getSkill } from '@/data';
import type { SkillId } from '@/data/types';
import { cn } from '@/lib/ui';
import { Section } from './Section';
import { SaeCard } from './SaeCard';
import { useReadingMode } from '@/lib/readingMode';

interface SaesProps {
  onOpen: (id: string) => void;
}

type Filter = 'all' | SkillId;

export function Saes({ onOpen }: SaesProps) {
  const all = useMemo(() => sortedSaes(), []);
  const filters = useMemo(() => usedSkillIds(), []); // généré, jamais codé en dur
  const [active, setActive] = useState<Filter>('all');
  const { isSimple } = useReadingMode();

  // En vue simplifiée, les filtres (codes RT) sont masqués : on affiche tout.
  const current = isSimple ? 'all' : active;
  const list = current === 'all' ? all : all.filter((s) => s.skills.includes(current));

  return (
    <Section
      id="saes"
      eyebrow={isSimple ? '~/projets-etudes' : '~/saes'}
      title={isSimple ? 'Projets d’études' : 'SAÉ'}
      intro={
        isSimple
          ? 'Les projets concrets réalisés pendant ma formation, seul ou en équipe. Cliquez une carte pour le détail.'
          : "Situations d'apprentissage et d'évaluation. Cliquez une carte pour le détail."
      }
    >
      {/* Filtre par compétence (généré depuis les SAÉ existantes) */}
      {!isSimple && filters.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <FilterChip label="Tout" active={active === 'all'} onClick={() => setActive('all')} />
          {filters.map((id) => (
            <FilterChip
              key={id}
              label={id}
              active={active === id}
              onClick={() => setActive(id)}
              title={getSkill(id)?.label}
            />
          ))}
        </div>
      )}

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((sae) => (
          <motion.div key={sae.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SaeCard sae={sae} onOpen={onOpen} />
          </motion.div>
        ))}
      </motion.div>

      {list.length === 0 && (
        <p className="text-sm text-muted">Aucune SAÉ pour ce filtre.</p>
      )}
    </Section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
  title,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  title?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-3 py-1 font-mono text-xs transition-colors',
        active
          ? 'border-cyan/60 bg-cyan-soft text-cyan'
          : 'border-line text-muted hover:border-cyan/40 hover:text-ink',
      )}
    >
      {label}
    </button>
  );
}
