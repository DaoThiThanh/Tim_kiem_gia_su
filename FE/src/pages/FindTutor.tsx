import React, { useState } from 'react';
import { Button, Checkbox, Slider, Select, Rate, Pagination, Tag, Avatar } from 'antd';
import { 
  Search, MapPin, Star, Filter, BookOpen, 
  ChevronRight, ChevronDown, CheckCircle2, 
  Heart, GraduationCap, Clock
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;

// --- INTERFACE DỰA THEO CSDL ---
export interface TutorData {
  user_id: string;
  ho_ten: string;
  anh_dai_dien: string;
  ho_so_id: string;
  gioi_thieu: string;
  trinh_do: string;
  kinh_nghiem: string;
  bang_cap: string;
  hoc_phi: number;
  hinh_thuc_day: string;
  khu_vuc: string;
  trang_thai_duyet: string;
  // Dữ liệu lấy từ các bảng liên kết (mon_hoc, danh_gia)
  mon_hoc_giang_day: string[];
  so_sao_trung_binh: number;
  luot_danh_gia: number;
}

// --- MOCK DATA GIA SƯ (Theo đúng CSDL) ---
const MOCK_TUTORS: TutorData[] = [
  {
    user_id: '550e8400-e29b-41d4-a716-446655440000',
    ho_ten: 'Nguyễn Văn An',
    anh_dai_dien: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80',
    ho_so_id: 'hs-001',
    gioi_thieu: 'Từng đạt giải Nhất Toán Quốc gia. Phương pháp dạy tư duy logic, không học vẹt. Đã có 3 năm kinh nghiệm ôn thi đại học khối A, A1.',
    trinh_do: 'Sinh viên',
    kinh_nghiem: '3 năm kinh nghiệm ôn thi đại học',
    bang_cap: 'Sinh viên năm 3 ĐH Bách Khoa HN',
    hoc_phi: 200000,
    hinh_thuc_day: 'ONLINE_OFFLINE',
    khu_vuc: 'Cầu Giấy, Hà Nội',
    trang_thai_duyet: 'DA_DUYET',
    mon_hoc_giang_day: ['Toán học', 'Vật Lý'],
    so_sao_trung_binh: 4.9,
    luot_danh_gia: 124
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440001',
    ho_ten: 'Trần Thị Bích',
    anh_dai_dien: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    ho_so_id: 'hs-002',
    gioi_thieu: 'Giáo viên trường THPT Chuyên năng khiếu. Chuyên luyện thi IELTS cho người mới bắt đầu. Đã giúp 50+ học sinh đạt band 6.5+.',
    trinh_do: 'Giáo viên',
    kinh_nghiem: '5 năm kinh nghiệm luyện thi IELTS',
    bang_cap: 'Cử nhân Ngôn ngữ Anh, IELTS 8.0',
    hoc_phi: 350000,
    hinh_thuc_day: 'ONLINE',
    khu_vuc: 'Quận 1, TP. HCM',
    trang_thai_duyet: 'DA_DUYET',
    mon_hoc_giang_day: ['Tiếng Anh', 'IELTS'],
    so_sao_trung_binh: 5.0,
    luot_danh_gia: 89
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440002',
    ho_ten: 'Lê Hoàng Hải',
    anh_dai_dien: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    ho_so_id: 'hs-003',
    gioi_thieu: 'Senior Frontend Developer tại công ty đa quốc gia. Dạy HTML, CSS, JavaScript, ReactJS bằng dự án thực tế. Hỗ trợ review CV.',
    trinh_do: 'Chuyên gia',
    kinh_nghiem: '4 năm làm việc thực tế Frontend',
    bang_cap: 'Kỹ sư CNTT Đại học FPT',
    hoc_phi: 250000,
    hinh_thuc_day: 'ONLINE_OFFLINE',
    khu_vuc: 'Đống Đa, Hà Nội',
    trang_thai_duyet: 'DA_DUYET',
    mon_hoc_giang_day: ['Lập trình Web', 'ReactJS'],
    so_sao_trung_binh: 4.8,
    luot_danh_gia: 56
  },
  {
    user_id: '550e8400-e29b-41d4-a716-446655440003',
    ho_ten: 'Phạm Minh Tâm',
    anh_dai_dien: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    ho_so_id: 'hs-004',
    gioi_thieu: 'Chuyên bồi dưỡng học sinh giỏi và ôn thi chuyển cấp. Khơi dậy niềm đam mê văn học qua cách giảng bài truyền cảm hứng.',
    trinh_do: 'Giáo viên',
    kinh_nghiem: '10 năm giảng dạy Ngữ Văn',
    bang_cap: 'Thạc sĩ Văn học',
    hoc_phi: 150000,
    hinh_thuc_day: 'OFFLINE',
    khu_vuc: 'Hải Châu, Đà Nẵng',
    trang_thai_duyet: 'DA_DUYET',
    mon_hoc_giang_day: ['Ngữ Văn'],
    so_sao_trung_binh: 4.9,
    luot_danh_gia: 210
  }
];

const FindTutor: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  // State Filter (Mock UI)
  const [priceRange, setPriceRange] = useState<[number, number]>([100000, 500000]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      

      {/* Hero / Search Header */}
      <div className="bg-slate-900 pt-16 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Tìm kiếm gia sư phù hợp nhất</h1>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">Hơn 10,000+ gia sư chất lượng cao sẵn sàng đồng hành cùng bạn trên con đường chinh phục tri thức.</p>
          
          <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto">
            <div className="flex-1 w-full px-4 py-2 flex items-center bg-slate-50 rounded-xl border border-transparent focus-within:border-blue-400 focus-within:bg-white transition-all">
              <Search className="text-slate-400 w-5 h-5 mr-3 flex-shrink-0" />
              <input type="text" placeholder="Tìm tên môn học, kỹ năng..." className="w-full outline-none text-slate-700 bg-transparent font-medium" />
            </div>
            <div className="flex-1 w-full px-4 py-2 flex items-center bg-slate-50 rounded-xl border border-transparent focus-within:border-blue-400 focus-within:bg-white transition-all">
              <MapPin className="text-slate-400 w-5 h-5 mr-3 flex-shrink-0" />
              <input type="text" placeholder="Khu vực của bạn" className="w-full outline-none text-slate-700 bg-transparent font-medium" />
            </div>
            <Button type="primary" size="large" className="w-full md:w-auto bg-blue-600 rounded-xl px-10 h-12 text-base font-bold border-0 shadow-md hover:bg-blue-700">
              Tìm Kiếm
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/40 border border-slate-100 sticky top-24">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-800 mb-6 pb-4 border-b border-slate-100">
                <Filter className="w-5 h-5 text-blue-600" />
                Bộ lọc tìm kiếm
              </div>

              {/* Môn học */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm">Môn học</h4>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Chọn môn học"
                  className="font-medium"
                >
                  <Option value="toan">Toán học</Option>
                  <Option value="vat-ly">Vật lý</Option>
                  <Option value="hoa-hoc">Hóa học</Option>
                  <Option value="tieng-anh">Tiếng Anh</Option>
                  <Option value="lap-trinh">Lập trình</Option>
                </Select>
              </div>

              {/* Kiểu gia sư */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm">Trình độ gia sư</h4>
                <div className="flex flex-col gap-3 font-medium text-slate-600">
                  <Checkbox>Sinh viên</Checkbox>
                  <Checkbox>Giáo viên</Checkbox>
                  <Checkbox>Chuyên gia / Đi làm</Checkbox>
                  <Checkbox>Gia sư nước ngoài</Checkbox>
                </div>
              </div>

              {/* Hình thức học */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm">Hình thức học</h4>
                <div className="flex flex-col gap-3 font-medium text-slate-600">
                  <Checkbox>Học Online (Trực tuyến)</Checkbox>
                  <Checkbox>Học Offline (Gặp mặt)</Checkbox>
                </div>
              </div>

              {/* Mức giá */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-slate-900 text-sm">Học phí (VNĐ/h)</h4>
                </div>
                <Slider 
                  range 
                  min={50000} 
                  max={1000000} 
                  step={50000} 
                  defaultValue={[100000, 500000]}
                  onChange={(val) => setPriceRange(val as [number, number])}
                  tooltip={{ formatter: (value) => `${(value || 0).toLocaleString()}đ` }}
                />
                <div className="flex justify-between text-xs font-bold text-slate-500 mt-2">
                  <span>{priceRange[0].toLocaleString()}đ</span>
                  <span>{priceRange[1].toLocaleString()}đ</span>
                </div>
              </div>

              {/* Xếp hạng */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm">Đánh giá tối thiểu</h4>
                <Rate allowHalf defaultValue={4} className="text-amber-400 text-sm" />
              </div>

              <Button type="primary" block className="bg-blue-50 text-blue-600 font-bold hover:bg-blue-100 hover:text-blue-700 border-0 h-10 shadow-none mt-4">
                Xóa bộ lọc
              </Button>
            </div>
          </div>

          {/* Results Area */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                Hiển thị <span className="text-blue-600">{MOCK_TUTORS.length}</span> kết quả
              </h2>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-slate-500">Sắp xếp theo:</span>
                <Select defaultValue="match" style={{ width: 140 }} bordered={false} className="bg-white rounded-lg border border-slate-200 shadow-sm font-semibold text-slate-700">
                  <Option value="match">Phù hợp nhất</Option>
                  <Option value="rating">Đánh giá cao</Option>
                  <Option value="price_asc">Giá từ thấp-cao</Option>
                  <Option value="price_desc">Giá từ cao-thấp</Option>
                </Select>
              </div>
            </div>

            {/* List Gia Sư */}
            <div className="flex flex-col gap-6">
              {MOCK_TUTORS.map(tutor => (
                <div key={tutor.user_id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group flex flex-col md:flex-row gap-6 relative">
                  
                  {/* Badge & Avatar */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="relative mb-4">
                      <Avatar src={tutor.anh_dai_dien} size={120} className="border-4 border-slate-50 shadow-md group-hover:scale-105 transition-transform object-cover" />
                      {tutor.trang_thai_duyet === 'DA_DUYET' && (
                        <div className="absolute -bottom-2 right-2 bg-blue-600 text-white p-1 rounded-full border-2 border-white shadow-sm" title="Đã xác thực hồ sơ">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="font-bold text-sm text-slate-800">{tutor.so_sao_trung_binh}</span>
                      <span className="text-xs text-slate-500">({tutor.luot_danh_gia})</span>
                    </div>
                  </div>

                  {/* Thông tin chính */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                            {tutor.ho_ten}
                          </h3>
                          <div className="flex items-center gap-2 text-slate-500 font-medium text-sm mt-1">
                            <BookOpen className="w-4 h-4" /> {tutor.mon_hoc_giang_day.join(', ')}
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <MapPin className="w-4 h-4" /> {tutor.khu_vuc}
                          </div>
                        </div>
                        
                        <div className="text-right flex-shrink-0 hidden md:block">
                          <div className="text-2xl font-black text-slate-900">{(tutor.hoc_phi / 1000)}k/h</div>
                          <button className="text-slate-400 hover:text-red-500 transition-colors mt-1">
                            <Heart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Loại gia sư & Hình thức */}
                      <div className="flex flex-wrap items-center gap-3 mb-4 mt-3">
                        <div className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700">
                          <GraduationCap className="w-3.5 h-3.5" />
                          {tutor.trinh_do}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                          {(tutor.hinh_thuc_day === 'ONLINE' || tutor.hinh_thuc_day === 'ONLINE_OFFLINE') && <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Online</span>}
                          {(tutor.hinh_thuc_day === 'OFFLINE' || tutor.hinh_thuc_day === 'ONLINE_OFFLINE') && <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Tại nhà</span>}
                        </div>
                      </div>

                      {/* Mô tả ngắn */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {tutor.gioi_thieu}
                      </p>

                      {/* Tags / Kinh nghiệm / Bằng cấp */}
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-md text-xs font-semibold truncate max-w-[200px]" title={tutor.bang_cap}>
                          🎓 {tutor.bang_cap}
                        </span>
                        <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-md text-xs font-semibold truncate max-w-[200px]" title={tutor.kinh_nghiem}>
                          💼 {tutor.kinh_nghiem}
                        </span>
                      </div>
                    </div>
                    
                    {/* Action buttons (Mobile shows price here too) */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                      <div className="md:hidden">
                        <div className="text-lg font-black text-slate-900">{(tutor.hoc_phi / 1000)}k/h</div>
                      </div>
                      <div className="flex gap-3 w-full md:w-auto justify-end">
                        <Button className="h-10 px-6 rounded-xl font-bold border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors hidden sm:block">
                          Xem chi tiết
                        </Button>
                        <Button type="primary" className="h-10 px-8 rounded-xl font-bold bg-blue-600 border-0 hover:bg-blue-700 shadow-md">
                          Mời dạy
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Absolute Heart for Mobile */}
                  <div className="absolute top-4 right-4 md:hidden">
                    <button className="text-slate-400 hover:text-red-500 transition-colors p-2 bg-white rounded-full shadow-sm">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <Pagination defaultCurrent={1} total={50} showSizeChanger={false} />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default FindTutor;
