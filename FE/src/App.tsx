import { Button } from 'antd';
import { Search } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Hệ Thống Tìm Kiếm Gia Sư
        </h1>
        <p className="text-slate-500">
          Frontend đã được cấu hình thành công với React, Vite, Tailwind CSS và Ant Design.
        </p>
        <div className="pt-4 border-t border-slate-100">
          <Button type="primary" size="large" icon={<Search className="w-4 h-4 mr-2" inline="true" />}>
            Bắt đầu tìm kiếm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
