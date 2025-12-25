
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/ErrorBoundary';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const renderApp = async () => {
  try {
    // 1. فحص بيئة العمل قبل التحميل
    const isApiKeyMissing = !process.env.API_KEY || process.env.API_KEY === 'undefined';
    
    if (isApiKeyMissing) {
      console.warn("⚠️ Gemini AI Key is missing. AI features will be disabled.");
    }

    // 2. تحميل التطبيق ديناميكياً
    const { default: App } = await import('./App');
    
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
          {/* إظهار تنبيه المطور في حال نقص المفتاح */}
          {isApiKeyMissing && (
            <div style={{
              position: 'fixed', bottom: '10px', left: '10px', zIndex: 9999,
              background: '#ef4444', color: 'white', padding: '5px 12px',
              borderRadius: '20px', fontSize: '10px', fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)', pointerEvents: 'none'
            }}>
              ⚠️ AI OFFLINE: MISSING API_KEY
            </div>
          )}
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (error: any) {
    console.error("Critical Launch Error:", error);
    rootElement.innerHTML = `
      <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;color:white;background:#002f34;text-align:center;padding:20px;font-family:sans-serif;direction:rtl;">
        <div style="background:rgba(255,255,255,0.1);padding:30px;border-radius:20px;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);max-width:500px;box-shadow:0 20px 50px rgba(0,0,0,0.3);">
            <div style="font-size:50px;margin-bottom:20px;">🚧</div>
            <h2 style="color:#f1c40f;margin-bottom:15px;font-size:24px;">عذراً، الموقع يحتاج تهيئة</h2>
            <p style="color:#e2e8f0;margin-bottom:20px;line-height:1.6;">يبدو أن هناك تحديثاً كبيراً تم رفعه ولم يتم ربط قواعد البيانات الجديدة (SQL) أو مفتاح الـ AI بشكل صحيح.</p>
            <div style="background:#0f172a;padding:15px;border-radius:12px;font-size:12px;overflow:auto;max-width:100%;text-align:left;color:#ef4444;font-family:monospace;border:1px solid #1e293b;margin-bottom:20px;">
                ${error.message || error}
            </div>
            <div style="display:flex;gap:10px;justify-content:center;">
                <button onclick="window.location.reload()" style="background:#c59d5f;color:#002f34;border:none;padding:12px 25px;border-radius:10px;font-weight:bold;cursor:pointer;transition:0.3s;">إعادة المحاولة</button>
                <a href="https://app.supabase.com" target="_blank" style="text-decoration:none;background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.2);padding:12px 25px;border-radius:10px;font-weight:bold;cursor:pointer;transition:0.3s;">فتح Supabase SQL</a>
            </div>
        </div>
      </div>
    `;
  }
};

renderApp();
