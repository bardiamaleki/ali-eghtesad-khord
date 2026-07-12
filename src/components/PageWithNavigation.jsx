import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const PageWithNavigation = ({ children, prevLink, prevTitle, nextLink, nextTitle }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ minHeight: '60vh' }}>
        {children}
      </div>
      
      <div className="glass-panel pagination-container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1.25rem 1.5rem', 
        marginTop: '2rem',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        {prevLink ? (
          <Link 
            to={prevLink} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              color: 'var(--text-main)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            className="nav-prev-btn"
          >
            <ArrowRight size={20} style={{ color: 'var(--primary)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>بخش قبلی</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{prevTitle}</span>
            </div>
          </Link>
        ) : <div />}

        {nextLink ? (
          <Link 
            to={nextLink} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              color: 'var(--text-main)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            className="nav-next-btn"
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>بخش بعدی</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{nextTitle}</span>
            </div>
            <ArrowLeft size={20} style={{ color: 'var(--primary)' }} />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
};

export default PageWithNavigation;
