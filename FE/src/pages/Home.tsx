import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { Search, Star, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <>
      <SEO 
        title="Trang chủ" 
        description="Nền tảng kết nối gia sư và học viên hàng đầu. Tìm kiếm gia sư chất lượng cao, đánh giá minh bạch."
        keywords="gia sư, học kèm, tìm gia sư, kết nối gia sư"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
              Tìm Gia Sư Xuất Sắc <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">
                Cho Tương Lai Của Bạn
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Hệ thống kết nối hàng ngàn gia sư chất lượng, được kiểm duyệt kỹ lưỡng. Giúp bạn đạt được mục tiêu học tập nhanh chóng.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/tim-gia-su" className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Search size={20} />
                Tìm Gia Sư Ngay
              </Link>
              <Link to="/dang-ky-gia-su" className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-100 rounded-full font-semibold shadow-sm hover:border-primary-200 hover:shadow-md transition-all duration-300">
                Đăng ký làm Gia sư
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn chúng tôi?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Chúng tôi mang lại trải nghiệm học tập tốt nhất bằng cách tập trung vào chất lượng và sự minh bạch.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Star className="text-yellow-400" size={32} />}
              title="Gia sư chất lượng"
              description="100% hồ sơ gia sư được hệ thống kiểm duyệt kỹ càng về bằng cấp và kinh nghiệm."
            />
            <FeatureCard 
              icon={<Search className="text-primary-500" size={32} />}
              title="Tìm kiếm thông minh"
              description="Thuật toán đề xuất gia sư phù hợp nhất với nhu cầu và ngân sách của bạn."
            />
            <FeatureCard 
              icon={<BookOpen className="text-green-500" size={32} />}
              title="Đánh giá minh bạch"
              description="Hàng ngàn đánh giá thực tế từ học viên giúp bạn đưa ra quyết định chính xác."
            />
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;
