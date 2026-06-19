import { Github } from 'lucide-react';
import { profile } from '@/data';

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.fullName} — Portfolio BUT R&T
        </p>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-cyan"
        >
          <Github size={14} /> Code source
        </a>
      </div>
    </footer>
  );
}
