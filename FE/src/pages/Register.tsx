import React, { useState } from 'react';
import { Form, Input, Button, message, Radio, Divider } from 'antd';
import { User, Mail, Lock, Phone, GraduationCap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<'HOC_VIEN' | 'GIA_SU'>('HOC_VIEN');
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      message.success('Đăng ký tài khoản thành công!');
      navigate('/login');
    } catch (error: any) {
      message.error(error.response?.data?.message || 'Đăng ký thất bại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Cột trái: Hình ảnh banner (Đảo ngược so với Login để tạo sự đa dạng) */}
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/auth-bg.jpg"
          alt="Tutor Platform"
          style={{ transform: 'scaleX(-1)' }} // Lật ảnh để bố cục trông mới mẻ hơn
        />
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-16 text-white">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold mb-6">
            Gia nhập cộng đồng 10,000+ thành viên
          </div>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">Mở khóa tri thức,<br/>Vươn tới thành công.</h2>
          <p className="text-lg text-blue-100 max-w-xl font-medium">
            Dù bạn là học viên khao khát học hỏi hay gia sư tận tâm muốn chia sẻ kiến thức, TutorConnect luôn có chỗ dành cho bạn.
          </p>
        </div>
      </div>

      {/* Cột phải: Form Đăng ký */}
      <div className="flex flex-1 flex-col justify-center px-4 py-10 sm:px-6 lg:flex-none lg:w-1/2 lg:px-20 xl:px-24 bg-slate-50">
        <div className="mx-auto w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-xl shadow-sm object-cover" />
            <span className="text-2xl font-extrabold text-blue-700 tracking-tight">TutorConnect</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Tạo tài khoản mới</h2>
            <p className="text-slate-500 mt-1">Đăng ký hoàn toàn miễn phí ngay hôm nay</p>
          </div>

          <div className="flex justify-center mb-6">
            <Radio.Group 
              value={role} 
              onChange={(e) => {
                setRole(e.target.value);
                form.resetFields(['lop_hoc']);
              }}
              optionType="button"
              buttonStyle="solid"
              className="w-full flex shadow-sm rounded-lg overflow-hidden p-1 bg-slate-100"
            >
              <Radio.Button value="HOC_VIEN" className="flex-1 text-center font-medium border-0 bg-transparent before:hidden rounded-md h-10 leading-10 data-[checked]:bg-white data-[checked]:shadow-sm">Tôi là Học Viên</Radio.Button>
              <Radio.Button value="GIA_SU" className="flex-1 text-center font-medium border-0 bg-transparent before:hidden rounded-md h-10 leading-10 data-[checked]:bg-white data-[checked]:shadow-sm">Tôi là Gia Sư</Radio.Button>
            </Radio.Group>
          </div>

          <Form form={form} layout="vertical" onFinish={onFinish} size="large" requiredMark={false}>
            <Form.Item name="ho_ten" rules={[{ required: true, message: 'Nhập Họ và tên!' }]}>
              <Input prefix={<User className="w-5 h-5 text-slate-400 mr-2" />} placeholder="Họ và tên" className="rounded-lg" />
            </Form.Item>

            <Form.Item name="email" rules={[{ required: true, message: 'Nhập Email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}>
              <Input prefix={<Mail className="w-5 h-5 text-slate-400 mr-2" />} placeholder="Địa chỉ Email" className="rounded-lg" />
            </Form.Item>

            <div className="flex gap-4">
              <Form.Item name="so_dien_thoai" rules={[{ required: true, message: 'Nhập SĐT!' }]} className="flex-1">
                <Input prefix={<Phone className="w-5 h-5 text-slate-400 mr-2" />} placeholder="Số điện thoại" className="rounded-lg" />
              </Form.Item>

              {role === 'HOC_VIEN' && (
                <Form.Item name="lop_hoc" rules={[{ required: true, message: 'Nhập Lớp!' }]} className="flex-1">
                  <Input prefix={<GraduationCap className="w-5 h-5 text-slate-400 mr-2" />} placeholder="Lớp (Ví dụ: Lớp 10)" className="rounded-lg" />
                </Form.Item>
              )}
            </div>

            <Form.Item name="password" rules={[{ required: true, message: 'Nhập mật khẩu!' }, { min: 6, message: 'Mật khẩu > 6 ký tự' }]}>
              <Input.Password prefix={<Lock className="w-5 h-5 text-slate-400 mr-2" />} placeholder="Mật khẩu" className="rounded-lg" />
            </Form.Item>

            <Form.Item className="mt-8 mb-2">
              <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 rounded-lg text-[16px] font-semibold shadow-md" loading={loading}>
                Đăng ký tài khoản
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center text-sm text-slate-600 mt-6">
            Đã có tài khoản?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
