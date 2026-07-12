import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Subpage1 from './Subpage1';

const Step4Layout = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
      <div className="glass-panel" style={{ width: '250px', padding: '1.5rem', flexShrink: 0, position: 'sticky', top: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>مباحث تکمیلی انحصار</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <NavLink to="sub1" className={({isActive}) => isActive ? "chapter-link active" : "chapter-link"} style={({isActive}) => ({ display: 'block', padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none', color: isActive ? 'white' : 'var(--text-muted)', background: isActive ? 'var(--primary)' : 'transparent', transition: 'all 0.3s' })}>انحصار دوجانبه و چانه‌زنی</NavLink>
        </nav>
      </div>
      <div style={{ flexGrow: 1, minWidth: 0 }}>
        <Routes>
          <Route path="/" element={<Navigate to="sub1" replace />} />
          <Route path="sub1" element={<Subpage1 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Step4Layout;
