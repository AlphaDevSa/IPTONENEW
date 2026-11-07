import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function migrateHashToPath() {
  const { hash, search } = window.location;
  if (hash && hash.startsWith('#/')) {
    const hashWithoutSymbol = hash.slice(1);
    const [hashPath, hashQuery] = hashWithoutSymbol.split('?');
    const query = hashQuery ? `?${hashQuery}` : search;
    const newUrl = `${hashPath || '/'}${query || ''}`;
    window.history.replaceState(null, '', newUrl);
  }
}

migrateHashToPath();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
