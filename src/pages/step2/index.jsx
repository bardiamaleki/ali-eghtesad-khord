import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Subpage1 from './Subpage1';
import Subpage2 from './Subpage2';
import Subpage3 from './Subpage3';
import PageWithNavigation from '../../components/PageWithNavigation';

const Step2Layout = () => {
  return (
    <div style={{ minWidth: 0 }}>
      <Routes>
        <Route path="/" element={<Navigate to="sub1" replace />} />
        
        <Route path="sub1" element={
          <PageWithNavigation 
            prevLink="/step1/sub5" 
            prevTitle="سیستم مخارج خطی (LES)" 
            nextLink="/step2/sub2" 
            nextTitle="تقاضای نهاده و محصولات مشترک"
          >
            <Subpage1 />
          </PageWithNavigation>
        } />
        
        <Route path="sub2" element={
          <PageWithNavigation 
            prevLink="/step2/sub1" 
            prevTitle="تولیدکننده و تابع تولید (CES)" 
            nextLink="/step2/sub3" 
            nextTitle="توابع هزینه، دوگانگی و لم شپارد"
          >
            <Subpage2 />
          </PageWithNavigation>
        } />
        
        <Route path="sub3" element={
          <PageWithNavigation 
            prevLink="/step2/sub2" 
            prevTitle="تقاضای نهاده و محصولات مشترک" 
            nextLink="/step3/sub1" 
            nextTitle="گام ۳: بازارهای کلاسیک (رقابت کامل)"
          >
            <Subpage3 />
          </PageWithNavigation>
        } />
      </Routes>
    </div>
  );
};

export default Step2Layout;
