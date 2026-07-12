import React, { useMemo } from 'react';
import katex from 'katex';

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

  return <span className="inline-math" dangerouslySetInnerHTML={{ __html: html }} />;
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
    <div 
      className="block-math-container" 
      style={{ 
        overflowX: 'auto', 
        overflowY: 'hidden',
        margin: '1.2rem 0',
        padding: '0.5rem 0'
      }} 
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
};
