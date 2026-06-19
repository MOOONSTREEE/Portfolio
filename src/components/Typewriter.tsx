import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface TypewriterProps {
  text: string;
  speed?: number; // ms par caractère
  className?: string;
}

/** Affiche `text` caractère par caractère, façon terminal. */
export function Typewriter({ text, speed = 45, className }: TypewriterProps) {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(reduced ? text.length : 0);

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return;
    }
    setCount(0);
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, reduced]);

  const done = count >= text.length;

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span
        aria-hidden="true"
        className={done ? 'animate-blink' : ''}
        style={{ color: 'var(--color-cyan)' }}
      >
        ▋
      </span>
    </span>
  );
}
