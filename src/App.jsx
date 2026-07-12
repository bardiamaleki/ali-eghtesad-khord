import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Home, 
  Calculator, 
  User, 
  Layers, 
  TrendingUp, 
  Award 
} from 'lucide-react';

import Step0Layout from './pages/step0/index';
import Step1Layout from './pages/step1/index';
import Step2Layout from './pages/step2/index';
import Step3Layout from './pages/step3/index';
import Step4Layout from './pages/step4/index';

const MENU_ITEMS = [
  {
    title: 'صفحه اصلی',
    path: '/',
    icon: 'home',
  },
  {
    title: 'گام ۰: موتور ریاضی',
    path: '/step0',
    icon: 'math',
    subpages: [
      { title: 'لاگرانژ و شرط اول (F.O.C)', path: '/step0/sub1' },
      { title: 'شرط دوم و ماتریس هشین', path: '/step0/sub2' },
      { title: 'مثال‌های عددی حل‌شده', path: '/step0/sub3' },
    ]
  },
  {
    title: 'گام ۱: رفتار مصرف‌کننده',
    path: '/step1',
    icon: 'consumer',
    subpages: [
      { title: 'مقدمه و تعادل بازار', path: '/step1/sub1' },
      { title: 'رفتار مصرف‌کننده و مطلوبیت', path: '/step1/sub2' },
      { title: 'اثر درآمدی، جانشینی و اسلاتسکی', path: '/step1/sub3' },
      { title: 'دوگانگی و مطلوبیت غیرمستقیم', path: '/step1/sub4' },
      { title: 'سیستم مخارج خطی (LES)', path: '/step1/sub5' },
    ]
  },
  {
    title: 'گام ۲: رفتار تولیدکننده',
    path: '/step2',
    icon: 'producer',
    subpages: [
      { title: 'تولیدکننده و تقاضای نهاده', path: '/step2/sub1' },
      { title: 'توابع هزینه و لم شپارد', path: '/step2/sub2' },
      { title: 'انواع توابع تولید و CES', path: '/step2/sub3' },
    ]
  },
  {
    title: 'گام ۳: بازارها',
    path: '/step3',
    icon: 'markets',
    subpages: [
      { title: 'رقابت کامل و تعادل پویا', path: '/step3/sub1' },
      { title: 'انحصار کامل و تبعیض قیمت', path: '/step3/sub2' },
      { title: 'اثر مالیات بر انحصار', path: '/step3/sub3' },
      { title: 'انحصار خرید', path: '/step3/sub4' },
    ]
  },
  {
    title: 'گام ۴: الیگوپولی',
    path: '/step4',
    icon: 'oligopoly',
    subpages: [
      { title: '۱. رقابت انحصاری چمبرلین', path: '/step4/sub1' },
      { title: '۲. مدل‌های الیگوپولی همگن', path: '/step4/sub2' },
      { title: '۳. الیگوپولی غیرهمگن و تقاضای شکسته', path: '/step4/sub3' },
      { title: '۴. انحصار دوجانبه و چانه‌زنی', path: '/step4/sub4' },
    ]
  }
];

const getIcon = (name) => {
  switch(name) {
    case 'home': return Home;
    case 'math': return Calculator;
    case 'consumer': return User;
    case 'producer': return Layers;
    case 'markets': return TrendingUp;
    case 'oligopoly': return Award;
    default: return Home;
  }
};

function AppContent() {
  const location = useLocation();
  const [expandedStep, setExpandedStep] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // Auto-expand active step on location change
    const currentStep = MENU_ITEMS.find(item => 
      location.pathname === item.path || 
      (item.subpages && item.subpages.some(sub => location.pathname.startsWith(sub.path)))
    );
    if (currentStep && currentStep.subpages) {
      setExpandedStep(currentStep.path);
    }
  }, [location.pathname]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Calculate progress for mobile header
  const stepsWithContent = MENU_ITEMS.filter(i => i.subpages);
  const currentStepIndex = stepsWithContent.findIndex(item =>
    item.subpages && item.subpages.some(sub => location.pathname.startsWith(sub.path))
  );
  const progressPercent = currentStepIndex === -1
    ? (location.pathname === '/' ? 0 : 100)
    : Math.round(((currentStepIndex + 1) / stepsWithContent.length) * 100);
  const currentStepLabel = currentStepIndex === -1 ? 'صفحه اصلی' : stepsWithContent[currentStepIndex].title;

  return (
    <div className="app-container">
      {/* Mobile Header (App Bar) */}
      <header className="mobile-header">
        <div className="mobile-header-row">
          <button className="mobile-menu-btn" onClick={toggleDrawer} aria-label="منو">
            <Menu size={24} />
          </button>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)' }}>{currentStepLabel}</span>
          <div style={{ width: '40px' }}></div>
        </div>
        <div className="mobile-progress-bar">
          <div className="mobile-progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </header>

      {/* Drawer Backdrop for mobile */}
      <div className={`drawer-backdrop ${isDrawerOpen ? 'open' : ''}`} onClick={closeDrawer} />

      {/* Navigation Sidebar */}
      <aside className={`sidebar ${isDrawerOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0 0.5rem' }}>
          <div>
            <h2 className="text-gradient" style={{ fontSize: '1.5rem' }}>اقتصاد خرد</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>جزوه شب امتحانی جامع</p>
          </div>
          <button className="mobile-close-btn" onClick={closeDrawer} aria-label="بستن">
            <X size={20} />
          </button>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {MENU_ITEMS.map((item, idx) => {
            const isExpanded = expandedStep === item.path;
            const hasSubpages = !!item.subpages;
            const IconComponent = getIcon(item.icon);
            
            const isParentActive = location.pathname.startsWith(item.path) && item.path !== '/';
            const isHomeActive = location.pathname === '/' && item.path === '/';
            const isActive = isParentActive || isHomeActive;

            return (
              <div key={idx}>
                {hasSubpages ? (
                  <div 
                    className={`chapter-link ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setExpandedStep(isExpanded ? null : item.path);
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <IconComponent size={20} />
                      <span>{item.title}</span>
                    </div>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`chapter-link ${isActive ? 'active' : ''}`}
                    onClick={closeDrawer}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <IconComponent size={20} />
                      <span>{item.title}</span>
                    </div>
                  </Link>
                )}

                {hasSubpages && (
                  <div className={`submenu-container ${isExpanded ? 'open' : ''}`}>
                    {item.subpages.map((sub, sIdx) => {
                      const isSubActive = location.pathname === sub.path;
                      return (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          className={`subpage-link ${isSubActive ? 'active' : ''}`}
                          onClick={closeDrawer}
                        >
                          {sub.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
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
                  🚀 مراحل ۵ گانه تسلط <span dir="ltr" style={{ display: 'inline-block' }}>(Mastery Roadmap)</span>
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="roadmap-step">
                    <span className="step-badge" style={{ background: 'var(--primary)' }}>گام ۰</span>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>موتور ریاضیات اقتصاد (بهینه‌سازی مقید)</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>یادگیری ابزار ریاضی لاگرانژ، شرایط مرتبه اول (F.O.C) و تشکیل دترمینان هشین مرزی (S.O.C) برای درک بقیه مباحث.</p>
                    </div>
                  </div>

                  <div className="roadmap-step">
                    <span className="step-badge" style={{ background: 'var(--secondary)' }}>گام ۱</span>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>معماری رفتار مصرف‌کننده (پایه و اساس)</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>مطلوبیت، خط بودجه، توابع تقاضای مارشالی و هیکسی، دوگانگی، لم شپارد، معادله اسلاتسکی و سیستم مخارج خطی (LES).</p>
                    </div>
                  </div>

                  <div className="roadmap-step">
                    <span className="step-badge" style={{ background: 'var(--accent)' }}>گام ۲</span>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>رفتار تولیدکننده و هزینه‌ها (قانون آینه)</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>بررسی تقارن کامل رفتار تولیدکننده با مصرف‌کننده، توابع هزینه کل، نهایی و متوسط، مسیر توسعه و تابع تولید CES.</p>
                    </div>
                  </div>

                  <div className="roadmap-step">
                    <span className="step-badge" style={{ background: 'var(--success)' }}>گام ۳</span>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>تعادل، پایداری و قدرت انحصار (کلاسیک‌ها)</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>تعادل رقابت کامل و انحصار کامل، درجات تبعیض قیمت، تحلیل اثر ۴ نوع مالیات بر انحصارگر و استثمار انحصار خرید.</p>
                    </div>
                  </div>

                  <div className="roadmap-step">
                    <span className="step-badge" style={{ background: 'var(--warning)' }}>گام ۴</span>
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
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
