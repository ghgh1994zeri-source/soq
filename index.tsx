
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

/**
 * التحقق من وجود مفتاح الـ API.
 * ملاحظة: في بيئة الإنتاج على Netlify، يتم حقن هذا المفتاح تلقائياً 
 * فقط إذا كان الموقع مربوطاً بـ GitHub وتم تعريف المتغير في Settings.
 */
const apiKey = process.env.API_KEY;
const isApiKeyMissing = !apiKey || apiKey === 'undefined';

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
      {isApiKeyMissing && (
        <div style={{
          position: 'fixed', bottom: '0', left: '0', right: '0', zIndex: 99999,
          background: '#ef4444', color: 'white', padding: '12px',
          textAlign: 'center', fontSize: '12px', fontWeight: 'bold',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.3)', direction: 'rtl', fontFamily: 'sans-serif'
        }}>
          ⚠️ تنبيه: مفتاح الـ API غير متاح حالياً. يرجى ربط الموقع بـ GitHub لضمان حقن المتغيرات بشكل صحيح.
        </div>
      )}
    </ErrorBoundary>
  </React.StrictMode>
);
