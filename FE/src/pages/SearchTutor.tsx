import { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { mockTutors } from '../mock/data';
import { MapPin, Star, BookOpen, Search as SearchIcon } from 'lucide-react';

const SearchTutor = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTutors = mockTutors.filter(tutor => 
    tutor.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Tìm Gia Sư" 
        description="Tìm kiếm gia sư phù hợp nhất với nhu cầu của bạn qua hệ thống lọc thông minh." 
      />
      
      <div className="bg-primary-600 pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Khám Phá Gia Sư Tài Năng</h1>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border-transparent rounded-full leading-5 bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-300 focus:border-transparent transition-all duration-300 placeholder-gray-400"
              placeholder="Nhập môn học hoặc khu vực..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutors.map((tutor) => (
            <div key={tutor.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={tutor.avatar} alt={tutor.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary-100" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{tutor.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="font-medium text-gray-700">{tutor.rating}</span>
                      <span className="ml-1">({tutor.reviews} đánh giá)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-2 text-primary-500" />
                    <span className="font-medium">{tutor.subject}</span>
                    <span className="mx-2">•</span>
                    <span>{tutor.level}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                    {tutor.location}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tutor.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-lg font-bold text-primary-600">
                    {tutor.price.toLocaleString('vi-VN')}đ<span className="text-sm font-normal text-gray-500">/buổi</span>
                  </div>
                  <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTutors.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg">Không tìm thấy gia sư nào phù hợp với tìm kiếm của bạn.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchTutor;
