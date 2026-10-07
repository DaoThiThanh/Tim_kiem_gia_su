import React, { useState } from 'react';
import { Form, Input, Button, message, Divider } from 'antd';
import { Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // await api.post('/auth/login', values);
      message.success('Đăng nhập thành công!');
      navigate('/');
    } catch (error: any) {
      message.error(error.response?.data?.message || 'Đăng nhập thất bại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Cột trái: Form Đăng nhập */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-1/2 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-xl shadow-sm object-cover" />
            <span className="text-2xl font-extrabold text-blue-700 tracking-tight">TutorConnect</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Đăng nhập</h2>
          <p className="text-slate-500 mb-8">Chào mừng bạn quay lại hệ thống tìm kiếm gia sư hàng đầu.</p>

          <Form layout="vertical" onFinish={onFinish} size="large">
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập Email hoặc Số điện thoại!' }]}
            >
              <Input prefix={<Mail className="w-5 h-5 text-slate-400 mr-2" />} placeholder="Email hoặc Số điện thoại" className="rounded-lg hover:border-blue-400 focus:border-blue-500" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password prefix={<Lock className="w-5 h-5 text-slate-400 mr-2" />} placeholder="Mật khẩu" className="rounded-lg hover:border-blue-400 focus:border-blue-500" />
            </Form.Item>

            <div className="flex justify-end mb-6">
              <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                Quên mật khẩu?
              </a>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 rounded-lg text-[16px] font-semibold shadow-md hover:shadow-lg transition-all" loading={loading}>
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>

          <Divider className="text-slate-400 text-sm">hoặc tiếp tục với</Divider>
          
          <div className="mt-6 text-center text-sm text-slate-600">
            Bạn chưa có tài khoản?{' '}
            <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
              Tạo tài khoản mới
            </Link>
          </div>
        </div>
      </div>

      {/* Cột phải: Hình ảnh banner sang trọng */}
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/auth-bg.jpg"
          alt="Education Background"
        />
        {/* Lớp phủ Gradient tạo chiều sâu */}
        <div className="absolute inset-0 bg-indigo-900/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
        
        {/* Nội dung trên Banner */}
        <div className="absolute bottom-0 left-0 right-0 p-16 text-white transform transition-all duration-700 translate-y-0">
          <h2 className="text-5xl font-extrabold mb-4 leading-tight tracking-tight">Khơi dậy tiềm năng,<br/>kết nối tri thức.</h2>
          <p className="text-lg text-slate-200 max-w-xl font-medium leading-relaxed">
            Nền tảng tìm kiếm gia sư uy tín hàng đầu, giúp bạn dễ dàng tìm được người đồng hành hoàn hảo nhất trên con đường học vấn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
