import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Chapter from './pages/Chapter';
import 'katex/dist/katex.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapter/:id" element={<Chapter />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
