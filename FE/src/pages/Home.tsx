import React, { useState, useEffect } from 'react';
import { Button, Tag, Rate, Avatar } from 'antd';
import {
  Search, MapPin, Star, Award, Users, TrendingUp,
  CheckCircle2, BookOpen, Clock, ShieldCheck,
  PlayCircle, Sparkles, Zap, ChevronRight, ChevronLeft
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// --- MOCK DATA TĂNG CƯỜNG ---
const FEATURED_TUTORS = [
  {
    user_id: '550e8400-e29b-41d4-a716-446655440000',
    ho_ten: 'Nguyễn Văn An',
    mon_hoc_giang_day: ['Toán học', 'Vật Lý'],
    so_sao_trung_binh: 4.9,
    luot_danh_gia: 124,
    hoc_phi: 200000,
    anh_dai_dien: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80',
    tags: ['Sinh viên ĐH Bách Khoa', 'Ôn thi Đại học'],
    khu_vuc: 'Cầu Giấy, Hà Nội',
    trang_thai_duyet: 'DA_DUYET',
    badges: ['Top 1%']
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440001',
    ho_ten: 'Trần Thị Bích',
    mon_hoc_giang_day: ['Tiếng Anh', 'IELTS'],
    so_sao_trung_binh: 5.0,
    luot_danh_gia: 89,
    hoc_phi: 300000,
    anh_dai_dien: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    tags: ['IELTS 8.0', 'Phát âm chuẩn'],
    khu_vuc: 'Quận 1, TP. HCM',
    trang_thai_duyet: 'DA_DUYET',
    badges: ['Giáo viên']
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440002',
    ho_ten: 'Lê Hoàng Hải',
    mon_hoc_giang_day: ['Lập trình Web'],
    so_sao_trung_binh: 4.8,
    luot_danh_gia: 56,
    hoc_phi: 250000,
    anh_dai_dien: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    tags: ['Senior Frontend', 'Thực chiến'],
    khu_vuc: 'Online',
    trang_thai_duyet: 'DA_DUYET',
    badges: ['Nhiệt tình']
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440003',
    ho_ten: 'Phạm Minh Tâm',
    mon_hoc_giang_day: ['Ngữ Văn'],
    so_sao_trung_binh: 4.9,
    luot_danh_gia: 210,
    hoc_phi: 150000,
    anh_dai_dien: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    tags: ['Thạc sĩ Văn học', 'Dạy tận tâm'],
    khu_vuc: 'Hải Châu, Đà Nẵng',
    trang_thai_duyet: 'DA_DUYET',
    badges: ['Top 5%']
  }
];

const STEPS = [
  { icon: <Search className="w-6 h-6 text-blue-600" />, title: 'Tìm kiếm', desc: 'Sử dụng bộ lọc thông minh để tìm gia sư phù hợp nhất.' },
  { icon: <CheckCircle2 className="w-6 h-6 text-indigo-600" />, title: 'Lựa chọn', desc: 'Xem hồ sơ, đánh giá và học phí để đưa ra quyết định.' },
  { icon: <Clock className="w-6 h-6 text-purple-600" />, title: 'Kết nối', desc: 'Đặt lịch hẹn và thống nhất thời gian học tập linh hoạt.' },
  { icon: <Sparkles className="w-6 h-6 text-pink-600" />, title: 'Bắt đầu học', desc: 'Trải nghiệm quá trình học tập cá nhân hóa, hiệu quả cao.' },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Hà Linh',
    role: 'Phụ huynh học sinh',
    content: 'TutorConnect đã thay đổi hoàn toàn việc học của con tôi. Hệ thống gợi ý gia sư cực kỳ chính xác. Con tôi đã đỗ trường chuyên như ý nguyện!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 2,
    name: 'Minh Quân',
    role: 'Sinh viên ĐH Ngoại Thương',
    content: 'Một nền tảng quá tuyệt vời cho sinh viên đi làm thêm. Giao diện đẹp, dễ sử dụng và đặc biệt là phí nhận lớp rất hợp lý. Mình đã có lớp ngay sau 2 ngày.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 3,
    name: 'Thanh Trúc',
    role: 'Người đi làm',
    content: 'Tôi muốn học giao tiếp Tiếng Trung cấp tốc và đã tìm được cô giáo tuyệt vời trên này. Rất ấn tượng với tính năng xác thực hồ sơ của hệ thống.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const [scrolled, setScrolled] = useState(false);

  // Hiệu ứng cuộn trang cho Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">




      {/* Hero Section - Hiện đại và sinh động */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          {/* Lưới Grid tinh tế */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Cột Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-blue-700 text-sm font-bold mb-6 border border-blue-100 shadow-sm animate-fade-in-up">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                Kết nối gia sư thông minh 4.0
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                Chinh phục <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  tri thức mới
                </span>
                <br />
                cùng chuyên gia
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Tìm kiếm hàng ngàn gia sư được xác thực, đánh giá cao. Cá nhân hóa lộ trình học tập để đạt kết quả vượt bậc chỉ sau 30 ngày.
              </p>

              {/* Box Tìm Kiếm Glassmorphism */}
              <div className="bg-white/60 backdrop-blur-xl p-2 rounded-2xl shadow-2xl shadow-blue-900/10 border border-white flex flex-col sm:flex-row items-center gap-2 max-w-2xl mx-auto lg:mx-0 relative z-20">
                <div className="flex-1 px-4 py-3 flex items-center w-full bg-white rounded-xl shadow-sm border border-slate-100 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <BookOpen className="text-slate-400 w-5 h-5 mr-3 flex-shrink-0" />
                  <input type="text" placeholder="Bạn muốn học môn gì?" className="w-full outline-none text-slate-700 bg-transparent font-medium placeholder:font-normal" />
                </div>
                <div className="flex-1 px-4 py-3 flex items-center w-full bg-white rounded-xl shadow-sm border border-slate-100 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <MapPin className="text-slate-400 w-5 h-5 mr-3 flex-shrink-0" />
                  <input type="text" placeholder="Khu vực của bạn" className="w-full outline-none text-slate-700 bg-transparent font-medium placeholder:font-normal" />
                </div>
                <Button type="primary" size="large" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl px-8 h-12 text-base font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all border-0">
                  Tìm Gia Sư
                </Button>
              </div>

              {/* Users Trust */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+5k</div>
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Hơn <span className="text-slate-900 font-bold">50.000+</span> học viên <br />đã tìm được gia sư thành công
                </div>
              </div>
            </div>

            {/* Cột Image/Graphics Floating */}
            <div className="relative hidden lg:block h-[500px]">
              {/* Hình ảnh chính */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-8 border-white z-10 animate-float">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-white text-xs font-bold flex items-center gap-1">
                      <PlayCircle className="w-3 h-3" /> Trực tuyến
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl leading-tight">Học hiệu quả hơn với mô hình 1-kèm-1</h3>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute left-0 top-20 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 animate-float-delayed flex items-center gap-4 w-64">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">100% Gia sư</p>
                  <p className="text-slate-900 font-extrabold text-lg">Đã kiểm duyệt</p>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -left-10 bottom-32 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 animate-float flex flex-col gap-2 w-48">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Đánh giá</span>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-600 font-bold text-xs">
                    4.9 <Star className="w-3 h-3 fill-amber-600" />
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/150?img=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="avatar" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-8 bg-white border-y border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-widest">Được tin dùng bởi học viên đến từ</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <h2 className="text-2xl font-black text-slate-700">VNU</h2>
            <h2 className="text-2xl font-black text-slate-700">HUST</h2>
            <h2 className="text-2xl font-black text-slate-700">NEU</h2>
            <h2 className="text-2xl font-black text-slate-700">RMIT</h2>
            <h2 className="text-2xl font-black text-slate-700">FPT Univ</h2>
          </div>
        </div>
      </section>

      {/* How it Works - UI Bento/Steps */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Quy trình đơn giản</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Bắt đầu học chỉ với 4 bước</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Đường gạch ngang kết nối (chỉ hiện trên Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>

            {STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center group">
                <div className="w-24 h-24 mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 relative transition-transform duration-300 group-hover:-translate-y-2 border border-slate-100">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {idx + 1}
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Subjects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Môn học nổi bật</h2>
              <p className="text-slate-500 text-lg">Khám phá các môn học được tìm kiếm nhiều nhất với đội ngũ gia sư chất lượng hàng đầu.</p>
            </div>
            <Button type="link" className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-1 text-base">
              Xem toàn bộ <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Box Lớn 1 */}
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Toán học" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">1.2k+ Gia sư</div>
                <h3 className="text-3xl font-extrabold text-white mb-2">Khối Tự Nhiên</h3>
                <p className="text-slate-200">Toán, Vật Lý, Hóa Học, Sinh Học</p>
              </div>
            </div>

            {/* Box Nhỏ */}
            <div className="rounded-3xl overflow-hidden relative group cursor-pointer bg-indigo-50 flex flex-col justify-between p-6 border border-indigo-100 hover:border-indigo-300 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-600">
                <span className="font-serif text-2xl font-bold">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Ngoại Ngữ</h3>
                <p className="text-slate-500 text-sm font-medium">IELTS, TOEIC, Giao tiếp</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden relative group cursor-pointer bg-slate-900 text-white flex flex-col justify-between p-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                <span className="font-mono text-xl text-blue-400">{"</>"}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Lập trình</h3>
                <p className="text-slate-400 text-sm font-medium">Web, App, Python</p>
              </div>
            </div>

            {/* Box Ngang */}
            <div className="md:col-span-2 rounded-3xl overflow-hidden relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Năng khiếu" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-extrabold text-white mb-2">Năng khiếu & Nghệ thuật</h3>
                <p className="text-slate-200 max-w-xs">Piano, Guitar, Hội họa, Thanh nhạc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutors (Premium Cards) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Gia sư <span className="text-blue-600">Top Đầu</span></h2>
            <p className="text-slate-500 text-lg">Đội ngũ giảng viên ưu tú với bề dày kinh nghiệm và thành tích đáng nể.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_TUTORS.map(tutor => (
              <div key={tutor.user_id} className="bg-white rounded-[2rem] p-4 border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group relative">
                {/* Badges */}
                <div className="absolute top-6 left-6 z-10 flex gap-2">
                  {tutor.trang_thai_duyet === 'DA_DUYET' && (
                    <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Xác thực
                    </div>
                  )}
                  {tutor.badges.map(b => (
                    <div key={b} className="bg-amber-400 text-amber-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      {b}
                    </div>
                  ))}
                </div>

                {/* Image */}
                <div className="h-48 rounded-3xl overflow-hidden mb-5 relative bg-slate-100">
                  <img src={tutor.anh_dai_dien} alt={tutor.ho_ten} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="font-bold text-sm text-slate-700">{tutor.so_sao_trung_binh}</span>
                    <span className="text-xs text-slate-400">({tutor.luot_danh_gia})</span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{tutor.ho_ten}</h3>
                  <p className="text-slate-500 font-medium mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-400 flex-shrink-0" /> {tutor.mon_hoc_giang_day.join(', ')}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {tutor.tags.map(tag => (
                      <span key={tag} className="bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1 rounded-lg text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xl font-black text-slate-900">{(tutor.hoc_phi / 1000)}k/h</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="large" className="rounded-full px-10 h-14 font-bold border-2 border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 shadow-none hover:shadow-lg transition-all">
              Khám phá thêm 10,000+ gia sư khác
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Staggered UI */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <Star className="w-12 h-12 text-amber-400 fill-amber-400 mb-6" />
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">Được yêu thích bởi hàng ngàn học viên</h2>
              <p className="text-slate-400 text-lg mb-8">Đừng chỉ nghe chúng tôi nói, hãy xem những người đã trải nghiệm đánh giá thế nào về chất lượng tại TutorConnect.</p>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors border-0">
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {TESTIMONIALS.slice(0, 2).map((item, idx) => (
                <div key={item.id} className={`bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] ${idx === 1 ? 'md:translate-y-12' : ''}`}>
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-8 text-slate-200">"{item.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-slate-600 object-cover" />
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-slate-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center rounded-[3rem] overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>

            <div className="relative z-10 p-12 md:p-20 lg:w-2/3">
              <span className="px-3 py-1 bg-blue-500/30 border border-blue-400/50 rounded-full text-blue-100 text-sm font-bold tracking-wider uppercase mb-6 inline-block">Nắm bắt cơ hội</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">Mở khóa tiềm năng của bạn ngay hôm nay!</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Tham gia mạng lưới giáo dục chất lượng cao. Học hỏi, phát triển và đạt được mục tiêu của bạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="large" className="h-14 px-8 rounded-full bg-white text-blue-900 font-bold text-lg shadow-xl border-0 hover:bg-slate-50 hover:scale-105 transition-all">
                  Đăng ký tìm gia sư
                </Button>
                <Button size="large" className="h-14 px-8 rounded-full bg-transparent text-white font-bold text-lg border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all">
                  Trở thành gia sư
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Home;
