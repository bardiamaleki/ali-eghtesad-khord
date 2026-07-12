import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Subpage1 from './Subpage1';
import Subpage2 from './Subpage2';
import Subpage3 from './Subpage3';
import Subpage4 from './Subpage4';
import Subpage5 from './Subpage5';
import PageWithNavigation from '../../components/PageWithNavigation';

const Step1Layout = () => {
  return (
    <div style={{ minWidth: 0 }}>
      <Routes>
        <Route path="/" element={<Navigate to="sub1" replace />} />
        
        <Route path="sub1" element={
          <PageWithNavigation 
            prevLink="/step0/sub3" 
            prevTitle="مثال‌های عددی حل‌شده (ریاضیات)" 
            nextLink="/step1/sub2" 
            nextTitle="رفتار مصرف‌کننده و مطلوبیت"
          >
            <Subpage1 />
          </PageWithNavigation>
        } />
        
        <Route path="sub2" element={
          <PageWithNavigation 
            prevLink="/step1/sub1" 
            prevTitle="مقدمه و تعادل بازار" 
            nextLink="/step1/sub3" 
            nextTitle="اثر درآمدی، جانشینی و اسلاتسکی"
          >
            <Subpage2 />
          </PageWithNavigation>
        } />
        
        <Route path="sub3" element={
          <PageWithNavigation 
            prevLink="/step1/sub2" 
            prevTitle="رفتار مصرف‌کننده و مطلوبیت" 
            nextLink="/step1/sub4" 
            nextTitle="دوگانگی و مطلوبیت غیرمستقیم"
          >
            <Subpage3 />
          </PageWithNavigation>
        } />
        
        <Route path="sub4" element={
          <PageWithNavigation 
            prevLink="/step1/sub3" 
            prevTitle="اثر درآمدی، جانشینی و اسلاتسکی" 
            nextLink="/step1/sub5" 
            nextTitle="سیستم مخارج خطی (LES)"
          >
            <Subpage4 />
          </PageWithNavigation>
        } />
        
        <Route path="sub5" element={
          <PageWithNavigation 
            prevLink="/step1/sub4" 
            prevTitle="دوگانگی و مطلوبیت غیرمستقیم" 
            nextLink="/step2/sub1" 
            nextTitle="تولیدکننده و تابع تولید (CES)"
          >
            <Subpage5 />
          </PageWithNavigation>
        } />
      </Routes>
    </div>
  );
};

export default Step1Layout;
