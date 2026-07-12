import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Subpage1 from './Subpage1';
import Subpage2 from './Subpage2';
import Subpage3 from './Subpage3';
import Subpage4 from './Subpage4';

const Step3Layout = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
      <div className="glass-panel" style={{ width: '250px', padding: '1.5rem', flexShrink: 0, position: 'sticky', top: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>بازارهای کلاسیک</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <NavLink to="sub1" className={({isActive}) => isActive ? "chapter-link active" : "chapter-link"} style={({isActive}) => ({ display: 'block', padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none', color: isActive ? 'white' : 'var(--text-muted)', background: isActive ? 'var(--primary)' : 'transparent', transition: 'all 0.3s' })}>رقابت کامل و تعادل پویا</NavLink>
          <NavLink to="sub2" className={({isActive}) => isActive ? "chapter-link active" : "chapter-link"} style={({isActive}) => ({ display: 'block', padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none', color: isActive ? 'white' : 'var(--text-muted)', background: isActive ? 'var(--primary)' : 'transparent', transition: 'all 0.3s' })}>انحصار کامل و تبعیض قیمت</NavLink>
          <NavLink to="sub3" className={({isActive}) => isActive ? "chapter-link active" : "chapter-link"} style={({isActive}) => ({ display: 'block', padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none', color: isActive ? 'white' : 'var(--text-muted)', background: isActive ? 'var(--primary)' : 'transparent', transition: 'all 0.3s' })}>اثر مالیات بر انحصار</NavLink>
          <NavLink to="sub4" className={({isActive}) => isActive ? "chapter-link active" : "chapter-link"} style={({isActive}) => ({ display: 'block', padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none', color: isActive ? 'white' : 'var(--text-muted)', background: isActive ? 'var(--primary)' : 'transparent', transition: 'all 0.3s' })}>انحصار خرید</NavLink>
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

export default Step3Layout;
