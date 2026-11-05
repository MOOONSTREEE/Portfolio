import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/ui';
import { ReadingModeToggle } from './ReadingModeToggle';

export interface NavItem {
  id: string;
  label: string;
}

interface HeaderProps {
  initials: string;
  items: NavItem[];
  active: string;
}

export function Header({ initials, items, active }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#hero"
          className="font-mono text-sm font-bold tracking-wider text-ink"
          aria-label="Retour en haut"
        >
          <span className="text-cyan">~/</span>
          {initials}
        </a>

        {/* Navigation desktop */}
        <nav aria-label="Sections" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors',
                      isActive ? 'text-ink' : 'text-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-px bg-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sélecteur de vue (desktop) */}
        <div className="hidden xl:block">
          <ReadingModeToggle />
        </div>

        {/* Écrans plus étroits : sélecteur compact + menu */}
        <div className="flex items-center gap-2 xl:hidden">
          <ReadingModeToggle compact />
          <button
            type="button"
            className="rounded-md p-2 text-ink"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Panneau mobile */}
      {open && (
        <nav
          aria-label="Sections (mobile)"
          className="border-t border-line/70 bg-base/95 xl:hidden"
        >
          <ul className="flex flex-col px-5 py-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-md px-2 py-3 text-sm',
                    active === item.id ? 'text-cyan' : 'text-muted',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
