import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

/**
 * إعداد بيئة التشغيل لـ Vite:
 * نقوم بجلب المفتاح من import.meta.env (الخاص بـ Vite) 
 * ونضعه في process.env.API_KEY ليتوافق مع متطلبات محرك Gemini.
 */
if (typeof (window as any).process === 'undefined') {
  (window as any).process = { env: {} };
}

// قراءة المفتاح من ملف .env
const viteKey = (import.meta as any).env?.VITE_API_KEY;

if (viteKey) {
  // حقن المفتاح في المكان الذي يتوقعه محرك Gemini
  process.env.API_KEY = viteKey;
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

/**
 * التحقق النهائي قبل عرض التطبيق
 */
const apiKey = process.env.API_KEY;
const isApiKeyMissing = !apiKey || apiKey === 'undefined' || apiKey.includes('PLACEHOLDER');

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
      {isApiKeyMissing && (
        <div style={{
          position: 'fixed', bottom: '0', left: '0', right: '0', zIndex: 99999,
          background: '#dc2626', color: 'white', padding: '10px 20px',
          textAlign: 'center', fontSize: '12px', fontWeight: 'bold',
          direction: 'rtl', fontFamily: 'sans-serif'
        }}>
          ⚠️ تنبيه: نظام الذكاء الاصطناعي يتطلب مفتاح Gemini صالح في ملف .env ليعمل البوت وفحص الصور.
        </div>
      )}
    </ErrorBoundary>
  </React.StrictMode>
);