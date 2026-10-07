import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, Avatar } from 'antd';
import { ChevronRight, MapPin } from 'lucide-react';

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const isHomePage = location.pathname === '/';

  // Hiệu ứng cuộn trang cho Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Logic giao diện Header
  const headerBgClass = isHomePage 
    ? (scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3' : 'bg-transparent py-5')
    : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3 sticky';
    
  const textClass = (isHomePage && !scrolled) ? 'text-slate-900' : 'text-slate-900'; // Có thể dùng text-white nếu nền tối

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* HEADER ĐỒNG BỘ */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-xl">T</span>
              </div>
              <span className={`text-2xl font-extrabold tracking-tight transition-colors ${textClass}`}>
                Tutor<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Connect</span>
              </span>
            </div>
            
            {/* Nav */}
            <nav className={`hidden md:flex items-center space-x-1 px-2 py-1.5 rounded-full border shadow-sm transition-colors ${isHomePage && !scrolled ? 'bg-white/50 backdrop-blur-md border-white' : 'bg-slate-100/80 border-slate-200'}`}>
              <Link to="/" className={`px-5 py-2 rounded-full font-bold text-sm transition ${location.pathname === '/' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-600 hover:text-blue-600 hover:bg-white/50'}`}>Trang chủ</Link>
              <Link to="/tim-gia-su" className={`px-5 py-2 rounded-full font-bold text-sm transition ${location.pathname === '/tim-gia-su' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-600 hover:text-blue-600 hover:bg-white/50'}`}>Tìm gia sư</Link>
              <Link to="/yeu-cau-lop" className={`px-5 py-2 rounded-full font-bold text-sm transition ${location.pathname === '/yeu-cau-lop' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-600 hover:text-blue-600 hover:bg-white/50'}`}>Yêu cầu lớp</Link>
              <Link to="/cong-dong" className={`px-5 py-2 rounded-full font-bold text-sm transition ${location.pathname === '/cong-dong' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-600 hover:text-blue-600 hover:bg-white/50'}`}>Cộng đồng</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className={`flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border shadow-sm transition-colors ${isHomePage && !scrolled ? 'bg-white/70 backdrop-blur-md border-white' : 'bg-slate-50 border-slate-200'}`}>
                  <Avatar src="https://i.pravatar.cc/150?u=admin" className="border-2 border-white shadow-sm" />
                  <span className="text-slate-700 font-semibold text-sm hidden sm:block">{user.ho_ten}</span>
                  <div className="w-px h-4 bg-slate-300 mx-1 hidden sm:block"></div>
                  <button onClick={handleLogout} className="text-sm font-medium text-slate-500 hover:text-red-500 transition-colors">Thoát</button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="hidden sm:block text-slate-600 font-semibold hover:text-blue-600 transition-colors">
                    Đăng nhập
                  </Link>
                  <Link to="/register">
                    <Button type="primary" className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 font-bold rounded-full px-6 h-10 border-0 hover:shadow-blue-500/50 hover:scale-105 transition-all">
                      Bắt đầu ngay <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT GIỮA */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* FOOTER ĐỒNG BỘ */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-white font-extrabold text-xl">T</span>
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Tutor<span className="text-blue-600">Connect</span>
                </span>
              </div>
              <p className="text-slate-500 mb-6 leading-relaxed max-w-sm">
                Nền tảng kết nối gia sư và học viên thông minh, mang lại giá trị giáo dục thực sự thông qua công nghệ hiện đại.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-6">Sản phẩm</h4>
              <ul className="space-y-4">
                <li><Link to="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Tính năng</Link></li>
                <li><Link to="/tim-gia-su" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Tìm gia sư</Link></li>
                <li><Link to="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Gói học phí</Link></li>
                <li><Link to="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Đánh giá</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-6">Tài nguyên</h4>
              <ul className="space-y-4">
                <li><Link to="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Blog chia sẻ</Link></li>
                <li><Link to="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Tài liệu học tập</Link></li>
                <li><Link to="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Hướng dẫn</Link></li>
                <li><Link to="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Trung tâm hỗ trợ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-6">Liên hệ</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-slate-500 font-medium text-sm">Tầng 12, Tòa ABC, 123 Đường XYZ, TP. HCM</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">@</div>
                  <span className="text-slate-500 font-medium text-sm">hello@tutorconnect.vn</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
            <p className="text-slate-400">© 2026 TutorConnect. All rights reserved.</p>
            <div className="flex space-x-6 text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Điều khoản</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Bảo mật</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
