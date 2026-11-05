import { motion } from 'framer-motion';
import { Building2, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { internships } from '@/data';
import { Section } from './Section';
import { useReadingMode } from '@/lib/readingMode';

export function Internships() {
  const { pick } = useReadingMode();

  return (
    <Section id="stages" eyebrow="~/experience" title="Alternance & stages">
      <div className="grid gap-5 md:grid-cols-2">
        {internships.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="surface-card p-5"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 rounded-md border border-line bg-surface-2 p-2 text-cyan">
                <Building2 size={16} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold text-ink">{pick(item.role, item.simple?.role)}</h3>
                <p className="text-sm text-muted">{item.company}</p>
                {item.department && (
                  <p className="text-xs text-faint">
                    {pick(item.department, item.simple?.department)}
                  </p>
                )}
                <p className="mt-1 font-mono text-xs text-cyan">
                  {[item.period, item.duration].filter(Boolean).join(' · ')}
                </p>
              </div>
            </div>

            {pick(item.missions, item.simple?.missions).length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {pick(item.missions, item.simple?.missions).map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                    {m}
                  </li>
                ))}
              </ul>
            )}

            {item.links && item.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan hover:underline"
                  >
                    {link.label} <ExternalLinkIcon size={12} />
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
