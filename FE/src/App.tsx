import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import FindTutor from './pages/FindTutor';
import RequestClass from './pages/RequestClass';
import Community from './pages/Community';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2563eb', // Đồng bộ với màu blue-600 của Tailwind
          borderRadius: 8,
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tim-gia-su" element={<FindTutor />} />
            <Route path="/yeu-cau-lop" element={<RequestClass />} />
            <Route path="/cong-dong" element={<Community />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
