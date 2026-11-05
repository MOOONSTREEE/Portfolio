import { Activity, Dumbbell, Gamepad2 } from 'lucide-react';
import { profile } from '@/data';
import { useReadingMode } from '@/lib/readingMode';
import { Section } from './Section';

const INTEREST_ICONS: Record<string, typeof Dumbbell> = {
  Musculation: Dumbbell,
  Calisthénie: Activity,
  'Jeux vidéo': Gamepad2,
};

export function About() {
  const { pick, isSimple } = useReadingMode();

  return (
    <Section id="a-propos" eyebrow="~/a-propos" title="À propos">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <p className="text-lg leading-relaxed text-muted">{pick(profile.about, profile.simple?.about)}</p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
              Centres d'intérêt
            </h3>
            <ul className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => {
                const Icon = INTEREST_ICONS[interest];
                return (
                  <li
                    key={interest}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink"
                  >
                    {Icon && <Icon size={15} className="text-cyan" />}
                    {interest}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
              {isSimple ? 'Qualités' : 'Soft skills'}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {profile.softSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-line/60 bg-surface-2 px-2.5 py-1 text-sm text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
