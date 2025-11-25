// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // No <React.StrictMode> – helps keep Three.js context stable
  <App />
);
