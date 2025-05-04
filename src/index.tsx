import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppContextProvider } from './AppContext';
import GlobalStyles from './globalStyles';
import App from './App';

import './index.css';

if (!window.ResizeObserver) {
  window.ResizeObserver = await import('@juggle/resize-observer').then(
    (module) => module.ResizeObserver,
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
);
