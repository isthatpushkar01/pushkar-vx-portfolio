import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

if (import.meta.env.DEV && typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('[PUSHKAR.VX Uncaught Error]', event.error || event.message);
  });
  window.addEventListener('unhandledrejection', (event) => {
    console.error('[PUSHKAR.VX Unhandled Rejection]', event.reason);
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary sectionName="Application Root">
      <App />
    </ErrorBoundary>
  </StrictMode>
);
