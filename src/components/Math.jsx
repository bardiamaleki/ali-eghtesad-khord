import React, { useMemo } from 'react';
import katex from 'katex';

// Suppress KaTeX character metric warnings for Persian characters
// Since KaTeX doesn't officially support Persian fonts, it throws a warning 
// but correctly falls back to system fonts visually.
const originalWarn = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes("No character metrics for")) {
    return;
  }
  originalWarn(...args);
};

export const InlineMath = ({ math }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: false,
        throwOnError: false,
        strict: false
      });
    } catch (error) {
      console.error('KaTeX Inline Error:', error);
      return math;
    }
  }, [math]);

  return <span className="inline-math" dir="ltr" dangerouslySetInnerHTML={{ __html: html }} />;
};

export const BlockMath = ({ math }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: true,
        throwOnError: false,
        strict: false
      });
    } catch (error) {
      console.error('KaTeX Block Error:', error);
      return math;
    }
  }, [math]);

  return (
    <span 
      className="block-math-container" 
      dir="ltr"
      style={{ 
        display: 'block',
        overflowX: 'auto', 
        overflowY: 'hidden',
        margin: '1.2rem 0',
        padding: '0.5rem 0'
      }} 
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
};
