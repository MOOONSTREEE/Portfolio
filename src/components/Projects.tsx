import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { visibleProjects } from '@/data';
import { Section } from './Section';
import { SkillBadge } from './SkillBadge';
import { StatusPill } from './StatusPill';
import { useReadingMode } from '@/lib/readingMode';

export function Projects() {
  const { pick, isSimple } = useReadingMode();
  const projects = visibleProjects();
  if (projects.length === 0) return null; // section + ancre masquées tant que vide

  return (
    <Section
      id="projets"
      eyebrow="~/projets"
      title="Projets personnels"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.id} className="surface-card flex h-full flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ink">{pick(p.title, p.simple?.title)}</h3>
              <StatusPill status={p.status} />
            </div>
            <p className="mt-2 flex-1 text-sm text-muted">{pick(p.summary, p.simple?.summary)}</p>
            {p.skills && p.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.skills.map((id) => (
                  <SkillBadge key={id} id={id} />
                ))}
              </div>
            )}
            {!isSimple && p.tools.length > 0 && (
              <p className="mt-3 font-mono text-xs text-faint">{p.tools.join(' · ')}</p>
            )}
            {p.links && p.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.links.map((link) => (
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
          </article>
        ))}
      </div>
    </Section>
  );
}
