import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import App from './App';
import { ReadingModeProvider } from './lib/readingMode';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* `reducedMotion="user"` : Framer Motion désactive ses animations
        si l'utilisateur a activé « réduire les animations » dans l'OS. */}
    <MotionConfig reducedMotion="user">
      <ReadingModeProvider>
        <App />
      </ReadingModeProvider>
    </MotionConfig>
  </StrictMode>,
);
