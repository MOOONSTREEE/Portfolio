import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data';
import { Section } from './Section';
import { useReadingMode } from '@/lib/readingMode';

export function Contact() {
  const { isSimple } = useReadingMode();
  const items = [
    { icon: Mail, label: profile.links.email, href: `mailto:${profile.links.email}` },
    { icon: Github, label: 'GitHub — MOOONSTREEE', href: profile.links.github },
    { icon: Linkedin, label: 'LinkedIn', href: profile.links.linkedin },
  ];

  return (
    <Section
      id="contact"
      eyebrow="~/contact"
      title="Contact"
      intro={
        isSimple
          ? 'Une question, une opportunité d’emploi ou d’alternance ? Écrivez-moi, je réponds rapidement.'
          : 'Disponible pour échanger autour des réseaux, des systèmes et de la cybersécurité.'
      }
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map(({ icon: Icon, label, href }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            className="surface-card flex items-center gap-3 p-5 transition-shadow hover:shadow-neon-cyan"
          >
            <span className="rounded-md border border-line bg-surface-2 p-2 text-cyan">
              <Icon size={18} />
            </span>
            <span className="truncate text-sm text-ink">{label}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
