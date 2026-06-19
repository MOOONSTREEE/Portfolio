import { motion } from 'framer-motion';
import { education } from '@/data';
import { Section } from './Section';

export function Education() {
  return (
    <Section id="formation" eyebrow="~/formation" title="Formation">
      <ol className="relative ml-3 border-l border-line">
        {education.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="mb-10 ml-6 last:mb-0"
          >
            <span
              className={
                'absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full ring-4 ring-base ' +
                (item.current ? 'bg-cyan shadow-[0_0_10px_rgba(34,211,238,0.9)]' : 'bg-faint')
              }
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              {item.period && (
                <span className="font-mono text-xs text-cyan">{item.period}</span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted">{item.institution}</p>
            {item.track && <p className="mt-1 text-sm text-emerald">{item.track}</p>}
            {item.description && (
              <p className="mt-2 text-sm text-faint">{item.description}</p>
            )}
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
