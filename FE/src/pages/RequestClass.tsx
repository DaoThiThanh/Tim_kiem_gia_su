import React from 'react';
import { Form, Input, Select, InputNumber, Button, Checkbox, Radio, Upload } from 'antd';
import { BookOpen, MapPin, DollarSign, Calendar, UploadCloud, Target } from 'lucide-react';

const { TextArea } = Input;
const { Option } = Select;

const RequestClass: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Premium Header */}
      <div className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Tạo yêu cầu tìm gia sư</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Hãy mô tả chi tiết nhu cầu học tập của bạn. Hệ thống sẽ tự động ghép nối với những gia sư phù hợp nhất trong thời gian ngắn nhất.
          </p>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-slate-100">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-6"
            size="large"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4 flex items-center gap-2">
              <BookOpen className="text-blue-600" /> Thông tin môn học
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item name="mon_hoc_id" label={<span className="font-semibold text-slate-700">Môn học cần tìm</span>} rules={[{ required: true }]}>
                <Select placeholder="Chọn môn học (VD: Toán, Tiếng Anh...)" className="rounded-xl">
                  <Option value="1">Toán học</Option>
                  <Option value="2">Vật Lý</Option>
                  <Option value="3">Hóa học</Option>
                  <Option value="4">Tiếng Anh</Option>
                </Select>
              </Form.Item>

              <Form.Item name="lop_trinh_do" label={<span className="font-semibold text-slate-700">Lớp / Trình độ</span>} rules={[{ required: true }]}>
                <Input placeholder="VD: Lớp 12, Luyện thi đại học..." className="rounded-xl" />
              </Form.Item>
            </div>

            <Form.Item name="muc_tieu_hoc_tap" label={<span className="font-semibold text-slate-700">Mục tiêu học tập</span>} rules={[{ required: true }]}>
              <TextArea rows={3} placeholder="VD: Đạt 8+ điểm kỳ thi THPT Quốc Gia, Giao tiếp cơ bản sau 3 tháng..." className="rounded-xl" />
            </Form.Item>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-8 border-b border-slate-100 pb-4 flex items-center gap-2">
              <Calendar className="text-blue-600" /> Thời gian & Hình thức học
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item name="so_buoi" label={<span className="font-semibold text-slate-700">Số buổi / tuần</span>} rules={[{ required: true }]}>
                <Select placeholder="Chọn số buổi" className="rounded-xl">
                  <Option value={1}>1 buổi/tuần</Option>
                  <Option value={2}>2 buổi/tuần</Option>
                  <Option value={3}>3 buổi/tuần</Option>
                  <Option value={4}>4+ buổi/tuần</Option>
                </Select>
              </Form.Item>

              <Form.Item name="hinh_thuc_hoc" label={<span className="font-semibold text-slate-700">Hình thức học</span>} rules={[{ required: true }]}>
                <Radio.Group className="flex gap-4">
                  <Radio.Button value="ONLINE" className="rounded-lg h-10 leading-[38px] px-6">Online</Radio.Button>
                  <Radio.Button value="OFFLINE" className="rounded-lg h-10 leading-[38px] px-6">Tại nhà</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item name="ngan_sach" label={<span className="font-semibold text-slate-700">Ngân sách dự kiến (VNĐ/buổi)</span>}>
                <InputNumber 
                  style={{ width: '100%' }} 
                  placeholder="VD: 200,000" 
                  formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  className="rounded-xl h-10 flex items-center"
                />
              </Form.Item>

              <Form.Item name="khu_vuc" label={<span className="font-semibold text-slate-700">Khu vực (Nếu học tại nhà)</span>}>
                <Input placeholder="VD: Quận Cầu Giấy, Hà Nội" prefix={<MapPin className="w-4 h-4 text-slate-400" />} className="rounded-xl" />
              </Form.Item>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-8 border-b border-slate-100 pb-4 flex items-center gap-2">
              <Target className="text-blue-600" /> Yêu cầu khác
            </h2>

            <Form.Item name="yeu_cau_them" label={<span className="font-semibold text-slate-700">Yêu cầu thêm về gia sư (Giới tính, Kinh nghiệm...)</span>}>
              <TextArea rows={4} placeholder="VD: Ưu tiên nữ sinh viên Sư phạm, giọng nói chuẩn..." className="rounded-xl" />
            </Form.Item>

            <div className="pt-8">
              <Button type="primary" htmlType="submit" size="large" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 border-0 h-14 rounded-xl text-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.01] transition-all">
                Đăng Yêu Cầu Tìm Gia Sư
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RequestClass;
