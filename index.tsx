
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
 * نقوم بالتحقق من الاسم القياسي (API_KEY) والاسم الذي استخدمته (VITE_ALWASEET)
 */
const apiKey = process.env.API_KEY || (process.env as any).VITE_ALWASEET;
const isApiKeyMissing = !apiKey || apiKey === 'undefined' || apiKey === '';

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
      {isApiKeyMissing && (
        <div style={{
          position: 'fixed', bottom: '0', left: '0', right: '0', zIndex: 99999,
          background: '#dc2626', color: 'white', padding: '10px 20px',
          textAlign: 'center', fontSize: '12px', fontWeight: 'bold',
          boxShadow: '0 -4px 15px rgba(0,0,0,0.2)', direction: 'rtl', fontFamily: 'sans-serif',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
        }}>
          <span>⚠️ نظام الذكاء الاصطناعي معطل. يرجى التأكد من إضافة المفتاح في Netlify باسم <b>API_KEY</b> أو <b>VITE_ALWASEET</b>.</span>
          <button 
            onClick={() => window.location.reload()} 
            style={{ background: 'white', color: '#dc2626', border: 'none', padding: '2px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px' }}
          >
            تحديث الصفحة
          </button>
        </div>
      )}
    </ErrorBoundary>
  </React.StrictMode>
);