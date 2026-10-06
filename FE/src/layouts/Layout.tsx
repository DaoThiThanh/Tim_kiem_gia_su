import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              GiaSuPro
            </Link>
            <nav className="flex space-x-8">
              <Link to="/tim-gia-su" className="text-gray-600 hover:text-primary-600 transition-colors">Tìm Gia Sư</Link>
              <Link to="/dang-nhap" className="text-gray-600 hover:text-primary-600 transition-colors">Đăng nhập</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GiaSuPro</h3>
              <p className="text-gray-400">Kết nối người học và người dạy tốt nhất.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/tim-gia-su" className="hover:text-white transition-colors">Tìm gia sư</Link></li>
                <li><Link to="/dang-ky-gia-su" className="hover:text-white transition-colors">Trở thành gia sư</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên hệ</h4>
              <p className="text-gray-400">Email: hotro@giasupro.com</p>
              <p className="text-gray-400">Điện thoại: 1900 xxxx</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
