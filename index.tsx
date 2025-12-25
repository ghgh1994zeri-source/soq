import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

/**
 * تهيئة بيئة التشغيل:
 * نقوم بربط VITE_GEMINI_API_KEY بـ process.env.API_KEY ليعمل الذكاء الاصطناعي
 */
if (typeof (window as any).process === 'undefined') {
  (window as any).process = { env: {} };
}

// نقل المفتاح من Vite Env إلى Global Process Env
const viteKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
if (viteKey) {
  process.env.API_KEY = viteKey;
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