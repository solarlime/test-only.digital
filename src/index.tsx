import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from './globalStyles';
import './index.css';
import { AppContextProvider } from './AppContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
);
