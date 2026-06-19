import { motion } from 'framer-motion';
import { skills } from '@/data';
import { Section } from './Section';
import { SkillCard } from './SkillCard';

interface SkillsProps {
  onOpenSkill: (id: string) => void;
}

export function Skills({ onOpenSkill }: SkillsProps) {
  return (
    <Section
      id="competences"
      eyebrow="~/competences"
      title="Compétences"
      intro="Compétences du référentiel BUT R&T. Cliquez une carte pour voir les apprentissages critiques et les SAÉ rattachées."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <SkillCard skill={skill} onOpen={onOpenSkill} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
