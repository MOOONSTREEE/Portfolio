import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/ui';

interface SectionProps {
  id: string;
  eyebrow: string; // chemin terminal, ex: '~/competences'
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

/** Conteneur de section homogène avec en-tête « console » et reveal. */
export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28', className)}>
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-10 max-w-2xl"
      >
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 text-muted">{intro}</p>}
      </motion.header>
      {children}
    </section>
  );
}
