import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Subpage1 from './Subpage1';
import Subpage2 from './Subpage2';
import Subpage3 from './Subpage3';
import Subpage4 from './Subpage4';
import PageWithNavigation from '../../components/PageWithNavigation';

const Step3Layout = () => {
  return (
    <div style={{ minWidth: 0 }}>
      <Routes>
        <Route path="/" element={<Navigate to="sub1" replace />} />
        
        <Route path="sub1" element={
          <PageWithNavigation 
            prevLink="/step2/sub3" 
            prevTitle="توابع هزینه، دوگانگی و لم شپارد" 
            nextLink="/step3/sub2" 
            nextTitle="انحصار کامل و تبعیض قیمت"
          >
            <Subpage1 />
          </PageWithNavigation>
        } />
        
        <Route path="sub2" element={
          <PageWithNavigation 
            prevLink="/step3/sub1" 
            prevTitle="رقابت کامل و تعادل پویا" 
            nextLink="/step3/sub3" 
            nextTitle="اثر مالیات بر انحصار"
          >
            <Subpage2 />
          </PageWithNavigation>
        } />
        
        <Route path="sub3" element={
          <PageWithNavigation 
            prevLink="/step3/sub2" 
            prevTitle="انحصار کامل و تبعیض قیمت" 
            nextLink="/step3/sub4" 
            nextTitle="انحصار خرید"
          >
            <Subpage3 />
          </PageWithNavigation>
        } />
        
        <Route path="sub4" element={
          <PageWithNavigation 
            prevLink="/step3/sub3" 
            prevTitle="اثر مالیات بر انحصار" 
            nextLink="/step4/sub1" 
            nextTitle="گام ۴: الیگوپولی (رقابت انحصاری)"
          >
            <Subpage4 />
          </PageWithNavigation>
        } />
      </Routes>
    </div>
  );
};

export default Step3Layout;
