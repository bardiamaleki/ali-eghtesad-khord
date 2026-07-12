import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Subpage1 from './Subpage1';
import Subpage2 from './Subpage2';
import Subpage3 from './Subpage3';
import Subpage4 from './Subpage4';

const Step4Layout = () => {
  const getLinkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    textDecoration: 'none',
    color: isActive ? 'white' : 'var(--text-muted)',
    background: isActive ? 'var(--primary)' : 'transparent',
    transition: 'all 0.3s',
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
      <div className="glass-panel" style={{ width: '280px', padding: '1.5rem', flexShrink: 0, position: 'sticky', top: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', fontSize: '1.1rem' }}>
          گام ۴: بازار استراتژیک و الیگوپولی
        </h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <NavLink to="sub1" className={({isActive}) => isActive ? "chapter-link active" : "chapter-link"} style={getLinkStyle}>
            ۱. رقابت انحصاری چمبرلین
          </NavLink>
          <NavLink to="sub2" className={({isActive}) => isActive ? "chapter-link active" : "chapter-link"} style={getLinkStyle}>
            ۲. مدل‌های الیگوپولی همگن
          </NavLink>
          <NavLink to="sub3" className={({isActive}) => isActive ? "chapter-link active" : "chapter-link"} style={getLinkStyle}>
            ۳. الیگوپولی غیرهمگن و تقاضای شکسته
          </NavLink>
          <NavLink to="sub4" className={({isActive}) => isActive ? "chapter-link active" : "chapter-link"} style={getLinkStyle}>
            ۴. انحصار دوجانبه و چانه‌زنی
          </NavLink>
        </nav>
      </div>
      <div style={{ flexGrow: 1, minWidth: 0 }}>
        <Routes>
          <Route path="/" element={<Navigate to="sub1" replace />} />
          <Route path="sub1" element={<Subpage1 />} />
          <Route path="sub2" element={<Subpage2 />} />
          <Route path="sub3" element={<Subpage3 />} />
          <Route path="sub4" element={<Subpage4 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Step4Layout;
