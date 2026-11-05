import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data';
import { HeroBackground } from './Background';
import { Typewriter } from './Typewriter';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        {/* Ligne terminal */}
        <div className="mb-8 font-mono text-sm text-emerald">
          <span className="text-faint">$</span>{' '}
          <Typewriter text="> initialisation_profil..." />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-7xl"
        >
          {profile.fullName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 max-w-2xl font-mono text-sm text-cyan sm:text-base"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#competences"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-base transition-shadow hover:shadow-neon-cyan"
          >
            Voir mes compétences <ArrowDown size={16} />
          </a>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-cyan/60 hover:text-cyan"
          >
            <Download size={16} /> CV (FR)
          </a>
          {profile.cvUrlEn && (
            <a
              href={profile.cvUrlEn}
              target="_blank"
              rel="noreferrer"
              lang="en"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-cyan/60 hover:text-cyan"
            >
              <Download size={16} /> Resume (EN)
            </a>
          )}
        </motion.div>

        {/* Liens rapides */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex items-center gap-5 text-muted"
        >
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-cyan"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-cyan"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="E-mail"
            className="transition-colors hover:text-cyan"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
