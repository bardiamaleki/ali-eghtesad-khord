import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Subpage1 from './Subpage1';
import Subpage2 from './Subpage2';
import Subpage3 from './Subpage3';
import PageWithNavigation from '../../components/PageWithNavigation';

const Step0Layout = () => {
  return (
    <div style={{ minWidth: 0 }}>
      <Routes>
        <Route path="/" element={<Navigate to="sub1" replace />} />
        
        <Route path="sub1" element={
          <PageWithNavigation 
            prevLink="/" 
            prevTitle="صفحه اصلی" 
            nextLink="/step0/sub2" 
            nextTitle="شرط دوم و ماتریس هشین"
          >
            <Subpage1 />
          </PageWithNavigation>
        } />
        
        <Route path="sub2" element={
          <PageWithNavigation 
            prevLink="/step0/sub1" 
            prevTitle="لاگرانژ و شرط اول (F.O.C)" 
            nextLink="/step0/sub3" 
            nextTitle="مثال‌های عددی حل‌شده"
          >
            <Subpage2 />
          </PageWithNavigation>
        } />
        
        <Route path="sub3" element={
          <PageWithNavigation 
            prevLink="/step0/sub2" 
            prevTitle="شرط دوم و ماتریس هشین" 
            nextLink="/step1/sub1" 
            nextTitle="گام ۱: رفتار مصرف‌کننده (مقدمه)"
          >
            <Subpage3 />
          </PageWithNavigation>
        } />
      </Routes>
    </div>
  );
};

export default Step0Layout;
