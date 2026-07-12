import React from 'react';
import { useNavigate } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { BookOpen, Rocket } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="glass-panel" style={{ padding: '2rem', minHeight: '80vh' }}>
      <div className="hero-section">
        <h1 className="text-gradient">جزوه شب امتحانی اقتصاد خرد</h1>
        <p>مرور سریع، ساختاریافته و جامع مفاهیم و فرمول‌های اقتصاد خرد. طراحی شده برای یادگیری سریع و آمادگی کامل برای امتحان.</p>
        
        <button className="btn-primary" onClick={() => navigate(`/chapter/${chapters[0].id}`)}>
          <Rocket size={20} />
          شروع یادگیری
        </button>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>سرفصل‌های پوشش داده شده</h2>
        <div className="grid-cards">
          {chapters.map((chapter) => (
            <div 
              key={chapter.id} 
              className="chapter-card"
              onClick={() => navigate(`/chapter/${chapter.id}`)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <BookOpen size={24} color="var(--primary)" />
                <h3>{chapter.title}</h3>
              </div>
              <p>{chapter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
