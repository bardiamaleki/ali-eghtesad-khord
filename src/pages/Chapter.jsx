import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { BlockMath, InlineMath } from 'react-katex';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Chapter() {
  const { id } = useParams();
  const navigate = useNavigate();

  const chapterIndex = useMemo(() => chapters.findIndex(c => c.id === id), [id]);
  const chapter = chapters[chapterIndex];

  if (!chapter) {
    return <div style={{ color: 'white' }}>فصل مورد نظر یافت نشد.</div>;
  }

  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  return (
    <div style={{ animation: 'slideUp 0.5s ease' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{chapter.title}</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{chapter.description}</p>
      </header>

      {chapter.sections.map((section, idx) => (
        <section key={idx} className="glass-panel content-card">
          <h2 style={{ color: 'var(--primary-hover)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
            {section.title}
          </h2>
          
          <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#e2e8f0' }}>
            {section.content.map((block, bIdx) => {
              if (block.type === 'text') {
                return <p key={bIdx} style={{ marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: block.value }} />;
              } else if (block.type === 'formula') {
                return (
                  <div key={bIdx} className="formula-box">
                    <BlockMath math={block.value} />
                    {block.note && <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>{block.note}</p>}
                  </div>
                );
              } else if (block.type === 'example') {
                return (
                  <div key={bIdx} className="example-box">
                    <h4>مثال مهم</h4>
                    <div dangerouslySetInnerHTML={{ __html: block.value }} />
                  </div>
                );
              } else if (block.type === 'alert') {
                return (
                  <div key={bIdx} style={{ background: 'rgba(245, 158, 11, 0.1)', borderRight: '4px solid var(--warning)', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
                    <strong style={{ color: 'var(--warning)', display: 'block', marginBottom: '0.5rem' }}>نکته کلیدی</strong>
                    <span dangerouslySetInnerHTML={{ __html: block.value }} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </section>
      ))}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', borderTop: '1px solid var(--card-border)', paddingTop: '2rem' }}>
        {nextChapter ? (
          <button className="btn-primary" onClick={() => navigate(`/chapter/${nextChapter.id}`)}>
            <ArrowRight size={20} />
            فصل بعدی: {nextChapter.title}
          </button>
        ) : <div />}
        
        {prevChapter ? (
          <button className="btn-primary" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }} onClick={() => navigate(`/chapter/${prevChapter.id}`)}>
            فصل قبلی: {prevChapter.title}
            <ArrowLeft size={20} />
          </button>
        ) : <div />}
      </div>
    </div>
  );
}
