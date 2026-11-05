import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

// ──────────────────────────────────────────────────────────────────────────
// Mode de lecture du portfolio.
//   'tech'   → vue technique (vocabulaire du métier, codes, outils, AC)
//   'simple' → vue simplifiée (RH, recruteurs, personnes hors informatique)
//
// Ordre de priorité au chargement :
//   1. paramètre d'URL `?vue=simple` / `?vue=technique` (lien à envoyer à un·e RH)
//   2. dernier choix du visiteur (localStorage)
//   3. vue technique par défaut
// ──────────────────────────────────────────────────────────────────────────

export type ReadingMode = 'tech' | 'simple';

const STORAGE_KEY = 'portfolio:vue';
const PARAM = 'vue';

function fromParam(value: string | null): ReadingMode | null {
  if (!value) return null;
  const v = value.toLowerCase();
  if (['simple', 'simplifiee', 'simplifiée', 'rh'].includes(v)) return 'simple';
  if (['technique', 'tech'].includes(v)) return 'tech';
  return null;
}

function initialMode(): ReadingMode {
  if (typeof window === 'undefined') return 'tech';
  const fromUrl = fromParam(new URLSearchParams(window.location.search).get(PARAM));
  if (fromUrl) return fromUrl;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'simple' || stored === 'tech') return stored;
  } catch {
    /* stockage indisponible (navigation privée stricte) : on ignore */
  }
  return 'tech';
}

interface ReadingModeValue {
  mode: ReadingMode;
  isSimple: boolean;
  setMode: (mode: ReadingMode) => void;
  toggle: () => void;
  /** Renvoie la version simplifiée si elle existe et que la vue simplifiée est active. */
  pick: <T>(tech: T, simple?: T | null) => T;
}

const Ctx = createContext<ReadingModeValue | null>(null);

export function ReadingModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ReadingMode>(initialMode);

  const setMode = useCallback((next: ReadingMode) => setModeState(next), []);
  const toggle = useCallback(() => setModeState((m) => (m === 'tech' ? 'simple' : 'tech')), []);

  // Mémorise le choix et garde l'URL partageable (sans toucher à l'ancre #section).
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
    const url = new URL(window.location.href);
    if (mode === 'simple') url.searchParams.set(PARAM, 'simple');
    else url.searchParams.delete(PARAM);
    window.history.replaceState(window.history.state, '', url.toString());
    document.documentElement.dataset.vue = mode;
  }, [mode]);

  const value = useMemo<ReadingModeValue>(
    () => ({
      mode,
      isSimple: mode === 'simple',
      setMode,
      toggle,
      pick: (tech, simple) => (mode === 'simple' && simple != null ? simple : tech),
    }),
    [mode, setMode, toggle],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useReadingMode(): ReadingModeValue {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useReadingMode doit être utilisé dans <ReadingModeProvider>');
  return ctx;
}
