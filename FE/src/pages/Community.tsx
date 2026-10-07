import React from 'react';
import { Avatar, Button, Input, Tag } from 'antd';
import { MessageSquare, ThumbsUp, Share2, Search, TrendingUp } from 'lucide-react';

const { Search: SearchInput } = Input;

const MOCK_POSTS = [
  {
    id: 1,
    author: 'Nguyễn Minh Tuấn',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    time: '2 giờ trước',
    content: 'Mọi người cho mình hỏi, để đạt IELTS 6.5 từ con số 0 thì cần học trong bao lâu và lộ trình thế nào cho hợp lý ạ? Mình đang cân nhắc thuê gia sư 1 kèm 1.',
    tags: ['IELTS', 'Hỏi đáp', 'Lộ trình'],
    likes: 24,
    comments: 12
  },
  {
    id: 2,
    author: 'Trần Cẩm Ly',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    time: '5 giờ trước',
    content: 'Review cực có tâm về gia sư Lê Hoàng Hải dạy Lập trình Web! Thầy dạy rất dễ hiểu, thực chiến, không lý thuyết suông. Mình từ một đứa mù công nghệ mà sau 2 tháng đã tự làm được web bán hàng cơ bản rồi.',
    tags: ['Review', 'Lập trình', 'Khoe thành tích'],
    likes: 156,
    comments: 38
  },
  {
    id: 3,
    author: 'Hoàng Văn Bách (Gia sư)',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    time: '1 ngày trước',
    content: 'Chia sẻ tài liệu ôn thi THPT Quốc Gia môn Toán (Khối A, A1) năm 2026. Bao gồm 50 đề thi thử bám sát cấu trúc của Bộ GD&ĐT. Các em học sinh tải về ôn luyện nhé!',
    tags: ['Tài liệu', 'Toán học', 'THPT Quốc Gia'],
    likes: 342,
    comments: 89
  }
];

const Community: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Cộng đồng TutorConnect</h1>
            <p className="text-slate-500">Nơi giao lưu, hỏi đáp và chia sẻ kiến thức của hàng ngàn gia sư và học viên.</p>
          </div>
          <div className="w-full md:w-auto">
            <SearchInput placeholder="Tìm kiếm bài viết, tài liệu..." size="large" className="w-full md:w-80 rounded-xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Create Post */}
            <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100 flex gap-4">
              <Avatar src="https://i.pravatar.cc/150?u=admin" size="large" />
              <div className="flex-1">
                <Input.TextArea 
                  placeholder="Bạn đang quan tâm điều gì? Đặt câu hỏi hoặc chia sẻ tài liệu..." 
                  className="bg-slate-50 border-transparent hover:border-blue-400 focus:bg-white rounded-xl mb-3" 
                  rows={2} 
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button type="text" className="text-slate-500 hover:text-blue-600 bg-slate-50 rounded-lg font-medium">Thêm ảnh</Button>
                    <Button type="text" className="text-slate-500 hover:text-blue-600 bg-slate-50 rounded-lg font-medium">Đính kèm</Button>
                  </div>
                  <Button type="primary" className="bg-blue-600 rounded-lg font-bold border-0 shadow-md">Đăng bài</Button>
                </div>
              </div>
            </div>

            {/* Posts List */}
            {MOCK_POSTS.map(post => (
              <div key={post.id} className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar src={post.avatar} size={48} className="border border-slate-200" />
                  <div>
                    <h3 className="font-bold text-slate-900">{post.author}</h3>
                    <p className="text-xs text-slate-400 font-medium">{post.time}</p>
                  </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4 text-base">
                  {post.content}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map(tag => (
                    <Tag key={tag} className="border-0 bg-blue-50 text-blue-600 font-semibold px-2.5 py-1 rounded-md">#{tag}</Tag>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 pt-4 border-t border-slate-50 text-slate-500">
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium">
                    <ThumbsUp className="w-5 h-5" /> {post.likes}
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium">
                    <MessageSquare className="w-5 h-5" /> {post.comments}
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium ml-auto">
                    <Share2 className="w-5 h-5" /> Chia sẻ
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="text-blue-600 w-5 h-5" /> Chủ đề nổi bật
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Ôn thi THPT', 'IELTS 7.0', 'Tài liệu Tiếng Anh', 'Review Gia Sư', 'Lập trình cơ bản'].map(topic => (
                  <span key={topic} className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg text-sm font-medium cursor-pointer transition-colors border border-slate-200">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-[1.5rem] shadow-lg text-white">
              <h3 className="font-bold text-xl mb-2">Trở thành Gia Sư Top 1</h3>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">Tham gia khóa đào tạo kỹ năng sư phạm độc quyền từ TutorConnect để nâng cao thu nhập.</p>
              <Button className="w-full rounded-xl h-10 font-bold text-blue-600 border-0 bg-white hover:bg-slate-50">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Community;
