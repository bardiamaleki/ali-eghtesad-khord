import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Target, LayoutDashboard, Briefcase, Users, Layers, ShieldAlert, Award } from 'lucide-react';
import { chapters } from '../data/chapters';

export default function Sidebar() {
  const icons = [BookOpen, Target, Briefcase, Users, Layers, ShieldAlert, Award, LayoutDashboard];

  return (
    <aside className="sidebar">
      <div style={{ padding: '0 1rem', marginBottom: '1rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={24} />
          اقتصاد خرد
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>جزوه شب امتحانی جامع</p>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <NavLink to="/" end className={({ isActive }) => `chapter-link ${isActive ? 'active' : ''}`}>
          <LayoutDashboard size={20} />
          <span style={{ fontSize: '0.95rem' }}>صفحه اصلی (مرور سریع)</span>
        </NavLink>
        
        {chapters.map((chapter, index) => {
          const Icon = icons[index % icons.length];
          return (
            <NavLink 
              key={chapter.id} 
              to={`/chapter/${chapter.id}`}
              className={({ isActive }) => `chapter-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span style={{ fontSize: '0.95rem' }}>{chapter.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
