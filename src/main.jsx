/**
 * Application entry point.
 * Imports global styles and mounts the React app with the AppProvider context.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/AppContext';
import App from './App';

// Global styles — design system tokens, component styles, and page styles
import './styles/design-system.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
