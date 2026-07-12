import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Subpage1 from './Subpage1';
import Subpage2 from './Subpage2';
import Subpage3 from './Subpage3';
import Subpage4 from './Subpage4';
import PageWithNavigation from '../../components/PageWithNavigation';

const Step4Layout = () => {
  return (
    <div style={{ minWidth: 0 }}>
      <Routes>
        <Route path="/" element={<Navigate to="sub1" replace />} />
        
        <Route path="sub1" element={
          <PageWithNavigation 
            prevLink="/step3/sub4" 
            prevTitle="انحصار خرید" 
            nextLink="/step4/sub2" 
            nextTitle="۲. مدل‌های الیگوپولی همگن"
          >
            <Subpage1 />
          </PageWithNavigation>
        } />
        
        <Route path="sub2" element={
          <PageWithNavigation 
            prevLink="/step4/sub1" 
            prevTitle="۱. رقابت انحصاری چمبرلین" 
            nextLink="/step4/sub3" 
            nextTitle="۳. الیگوپولی غیرهمگن و تقاضای شکسته"
          >
            <Subpage2 />
          </PageWithNavigation>
        } />
        
        <Route path="sub3" element={
          <PageWithNavigation 
            prevLink="/step4/sub2" 
            prevTitle="۲. مدل‌های الیگوپولی همگن" 
            nextLink="/step4/sub4" 
            nextTitle="۴. انحصار دوجانبه و چانه‌زنی"
          >
            <Subpage3 />
          </PageWithNavigation>
        } />
        
        <Route path="sub4" element={
          <PageWithNavigation 
            prevLink="/step4/sub3" 
            prevTitle="۳. الیگوپولی غیرهمگن و تقاضای شکسته" 
            nextLink="/" 
            nextTitle="صفحه اصلی (پایان نقشه راه)"
          >
            <Subpage4 />
          </PageWithNavigation>
        } />
      </Routes>
    </div>
  );
};

export default Step4Layout;
