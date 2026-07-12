import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'katex/dist/katex.min.css';

import Step0Layout from './pages/step0/index';
import Step1Layout from './pages/step1/index';
import Step2Layout from './pages/step2/index';
import Step3Layout from './pages/step3/index';
import Step4Layout from './pages/step4/index';

// The subagents will create and import their pages here.
// App.jsx will serve as the layout wrapper.

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navigation Sidebar will be injected/built here */}
        <aside className="sidebar">
          <div style={{ padding: '0 1rem', marginBottom: '1.5rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '1.5rem' }}>اقتصاد خرد</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>جزوه شب امتحانی جامع</p>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link to="/" className="chapter-link">صفحه اصلی</Link>
            <Link to="/step0" className="chapter-link">گام ۰: موتور ریاضی</Link>
            <Link to="/step1" className="chapter-link">گام ۱: رفتار مصرف‌کننده</Link>
            <Link to="/step2" className="chapter-link">گام ۲: رفتار تولیدکننده</Link>
            <Link to="/step3" className="chapter-link">گام ۳: بازارها</Link>
            <Link to="/step4" className="chapter-link">گام ۴: الیگوپولی</Link>
          </nav>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Hero Section */}
                <div className="glass-panel" style={{ padding: '2.5rem', borderRight: '4px solid var(--primary)' }}>
                  <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                    نقشه راه استراتژیک اقتصاد خرد پیشرفته
                  </h1>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                    این وب‌سایت یک جزوه «شب امتحانی توربو» بر اساس نحوه کارکرد مغز در یادگیری اقتصاد ریاضی است. 
                    برای تسلط کامل بر مطالب، توصیه می‌شود مراحل را به ترتیب از گام صفر تا گام چهارم طی کنید.
                  </p>
                </div>

                {/* Stepped Roadmap */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h2 style={{ marginBottom: '1.5rem', fontSize: '1.6rem', color: 'var(--primary-hover)' }}>
                    🚀 مراحل ۵ گانه تسلط (Mastery Roadmap)
                  </h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 10px', borderRadius: '8px', fontWeight: 'bold' }}>گام ۰</span>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>موتور ریاضیات اقتصاد (بهینه‌سازی مقید)</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>یادگیری ابزار ریاضی لاگرانژ، شرایط مرتبه اول (F.O.C) و تشکیل دترمینان هشین مرزی (S.O.C) برای درک بقیه مباحث.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ background: 'var(--secondary)', color: 'white', padding: '4px 10px', borderRadius: '8px', fontWeight: 'bold' }}>گام ۱</span>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>معماری رفتار مصرف‌کننده (پایه و اساس)</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>مطلوبیت، خط بودجه، توابع تقاضای مارشالی و هیکسی، دوگانگی، لم شپارد، معادله اسلاتسکی و سیستم مخارج خطی (LES).</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ background: 'var(--accent)', color: 'white', padding: '4px 10px', borderRadius: '8px', fontWeight: 'bold' }}>گام ۲</span>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>رفتار تولیدکننده و هزینه‌ها (قانون آینه)</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>بررسی تقارن کامل رفتار تولیدکننده با مصرف‌کننده، توابع هزینه کل، نهایی و متوسط، مسیر توسعه و تابع تولید CES.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ background: 'var(--success)', color: 'white', padding: '4px 10px', borderRadius: '8px', fontWeight: 'bold' }}>گام ۳</span>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>تعادل، پایداری و قدرت انحصار (کلاسیک‌ها)</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>تعادل رقابت کامل و انحصار کامل، درجات تبعیض قیمت، تحلیل اثر ۴ نوع مالیات بر انحصارگر و استثمار انحصار خرید.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ background: 'var(--warning)', color: 'white', padding: '4px 10px', borderRadius: '8px', fontWeight: 'bold' }}>گام ۴</span>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>استراتژی و جنگ بنگاه‌ها (الیگوپولی و نظریه بازی)</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>رقابت انحصاری، مدل‌های همگن الیگوپولی (کورنو، برتراند، استاکلبرگ، کارتل)، تقاضای شکسته سویزی و انحصار دوجانبه.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Key Recommendations */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <h2 style={{ marginBottom: '1.5rem', fontSize: '1.6rem', color: 'var(--secondary)' }}>
                    🎯 ۳ توصیه طلایی برای مطالعه شب امتحان
                  </h2>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--primary)' }}>
                      <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>۱. اقتصاد خرد رمان نیست!</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
                        فرمول‌ها را با چشم خوانش نکنید. پس از مطالعه هر اثبات ریاضی یا مثال تعادل، صفحات را ببندید و تلاش کنید لاگرانژ را خودتان روی کاغذ بنویسید و مقادیر بهینه را استخراج کنید.
                      </p>
                    </div>

                    <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--secondary)' }}>
                      <h3 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '0.75rem' }}>۲. خلاصه‌سازی جدولی الیگوپولی</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
                        برای مدل‌های مختلف انحصار چندجانبه (گام ۴)، حتماً از جدول ماتریس مقایسه‌ای انتهای صفحه استفاده کنید تا تفاوت شرط تعادل، قیمت و مقادیر هر ۴ مدل اصلی را کاملاً ملکه ذهن کنید.
                      </p>
                    </div>

                    <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '3px solid var(--success)' }}>
                      <h3 style={{ fontSize: '1.1rem', color: 'var(--success)', marginBottom: '0.75rem' }}>۳. پیش‌بینی سوالات ترکیبی</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
                        اساتید خرد معمولاً مباحث را ترکیب می‌کنند. مثلاً ممکن است یک تابع تقاضای انحصاری به همراه مالیات بر واحد ارائه داده و بخواهند تعادل را در حالت تبعیض قیمت کامل محاسبه کنید (ترکیب گام ۳).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            } />
            {/* Routes to be defined by subagents */}
            <Route path="/step0/*" element={<Step0Layout />} />
            <Route path="/step1/*" element={<Step1Layout />} />
            <Route path="/step2/*" element={<Step2Layout />} />
            <Route path="/step3/*" element={<Step3Layout />} />
            <Route path="/step4/*" element={<Step4Layout />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
