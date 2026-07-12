import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import fa_IR from 'antd/locale/fa_IR';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider direction="rtl" locale={fa_IR} theme={{ token: { fontFamily: 'Vazirmatn, sans-serif' } }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
