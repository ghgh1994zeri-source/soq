import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

/**
 * تهيئة بيئة التشغيل:
 * يتم جلب مفتاح الـ API تلقائياً من البيئة المحيطة (Environment Variables).
 */
if (typeof (window as any).process === 'undefined') {
  (window as any).process = { env: {} };
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);