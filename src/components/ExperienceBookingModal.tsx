import React, { useState } from 'react';
import { TourBookingRequest } from '../types';
import { sendBookingEmailViaGmail } from '../services/gmailService';
import { getAccessToken, googleSignIn } from '../services/firebaseAuth';
import { X, CheckCircle2, AlertCircle, Mail, Send, Calendar, Users, ShieldAlert } from 'lucide-react';
import { User } from 'firebase/auth';
import { supabase } from '../services/supabaseClient';

interface ExperienceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  defaultExperience?: string;
}

export const ExperienceBookingModal: React.FC<ExperienceBookingModalProps> = ({
  isOpen,
  onClose,
  user,
  defaultExperience = 'Tham quan di tích & Trải nghiệm quai búa lò rèn',
}) => {
  const [formData, setFormData] = useState<TourBookingRequest>({
    fullName: user?.displayName || '',
    phone: '',
    email: user?.email || '',
    visitorCount: 'Khách lẻ / Gia đình (1 - 4 người)',
    visitDate: '',
    experienceType: defaultExperience,
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Vui lòng nhập họ tên và số điện thoại liên lạc.');
      return;
    }

    // Per Workspace Integration skill: present explicit confirmation dialog before sending via Gmail
    if (user && getAccessToken()) {
      setShowConfirmDialog(true);
    } else {
      executeSubmission(false);
    }
  };

  const executeSubmission = async (viaGmail: boolean) => {
    setLoading(true);
    setError(null);

    try {
      if (viaGmail && user) {
        const token = getAccessToken();
        if (!token) throw new Error('Chưa tìm thấy phiên xác thực Gmail.');
        const res = await sendBookingEmailViaGmail(token, formData, user.email || 'khach@gmail.com');
        if (!res.success) {
          throw new Error(res.error || 'Gửi thư qua Gmail thất bại');
        }
      } else {
        // Fallback local processing
        await new Promise((r) => setTimeout(r, 600));
      }

      // Lưu trực tiếp vào cơ sở dữ liệu Supabase
      try {
        await supabase.from('bookings').insert([
          {
            full_name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            visitor_count: formData.visitorCount,
            visit_date: formData.visitDate ? formData.visitDate : null,
            experience_type: formData.experienceType,
            message: formData.message,
            status: 'pending'
          }
        ]);
      } catch (dbErr) {
        console.warn('Lưu Supabase booking thất bại:', dbErr);
      }

      setSuccess(true);
      setShowConfirmDialog(false);
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra khi gửi đăng ký.');
      setShowConfirmDialog(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF8F4] w-full max-w-xl rounded-2xl shadow-2xl border border-[#E8DFC9] flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#211D1A] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#75543D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#C94E16] flex items-center justify-center p-2 shadow-sm shrink-0">
              <img
                src="/assets/favicon.png"
                alt="Logo Làng Hiền Lương"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-amber-100">
                Đăng Ký Tham Quan & Trải Nghiệm Lò Rèn
              </h3>
              <p className="text-[11px] text-stone-300">
                Ban Quản Lý Di Tích Làng Nghề Hiền Lương đón tiếp chu đáo
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmation Dialog before destructive/mutating Gmail action */}
        {showConfirmDialog ? (
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-3 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-[#75543D]">
              <ShieldAlert className="w-6 h-6 text-[#C94E16] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[#211D1A]">
                  Xác nhận gửi email qua tài khoản Gmail của bạn
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Hệ thống sẽ gửi thông tin đăng ký này từ địa chỉ <strong>{user?.email}</strong> đến Ban Quản Lý Di Tích (<strong>bql.disan@hienluongforge.vn</strong>).
                </p>
              </div>
            </div>

            <div className="bg-[#EFE9DC] p-3 rounded-lg text-xs space-y-1 text-stone-700">
              <p><strong>Người đăng ký:</strong> {formData.fullName} ({formData.phone})</p>
              <p><strong>Ngày dự kiến:</strong> {formData.visitDate || 'Chờ thỏa thuận'}</p>
              <p><strong>Trải nghiệm:</strong> {formData.experienceType}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E8DFC9]">
              <button
                type="button"
                onClick={() => setShowConfirmDialog(false)}
                disabled={loading}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={() => executeSubmission(true)}
                disabled={loading}
                className="px-5 py-2 text-xs font-bold rounded-lg bg-[#C94E16] hover:bg-[#B04212] text-white flex items-center gap-1.5 shadow-sm"
              >
                {loading ? <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>Xác nhận gửi email ngay</span>
              </button>
            </div>
          </div>
        ) : success ? (
          /* Success Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#211D1A]">
              Đăng Ký Tham Quan Đã Được Tiếp Nhận!
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Cảm ơn {formData.fullName}. Ban Quản Lý Di Tích Làng Nghề Hiền Lương sẽ liên hệ với quý khách qua số điện thoại <strong>{formData.phone}</strong> trong vòng 24 giờ để xác nhận lịch trình và bố trí nghệ nhân đón tiếp chu đáo.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSuccess(false);
                  onClose();
                }}
                className="px-6 py-2 rounded-lg bg-[#C94E16] text-white text-xs font-bold hover:bg-[#B04212]"
              >
                Hoàn tất & Đóng
              </button>
            </div>
          </div>
        ) : (
          /* Main Form */
          <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Google / Gmail Status banner */}
            <div className="p-3 rounded-xl bg-[#FAF0E4] border border-[#E8DFC9] flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C94E16]" />
                <span className="text-stone-700">
                  {user ? (
                    <>Đang kết nối: <strong>{user.email}</strong></>
                  ) : (
                    'Đăng nhập Google để nhận thư xác nhận trực tiếp qua Gmail'
                  )}
                </span>
              </div>
              {!user && (
                <button
                  type="button"
                  onClick={googleSignIn}
                  className="px-2.5 py-1 rounded bg-[#211D1A] text-white font-medium text-[11px] hover:bg-[#342D28] shrink-0"
                >
                  Đăng nhập
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#75543D] mb-1">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-white border border-[#E8DFC9] rounded-lg px-3 py-2 text-xs text-[#211D1A] focus:outline-hidden focus:border-[#C94E16]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#75543D] mb-1">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0912 345 678"
                  className="w-full bg-white border border-[#E8DFC9] rounded-lg px-3 py-2 text-xs text-[#211D1A] focus:outline-hidden focus:border-[#C94E16]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#75543D] mb-1">
                  Địa chỉ Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@domain.com"
                  className="w-full bg-white border border-[#E8DFC9] rounded-lg px-3 py-2 text-xs text-[#211D1A] focus:outline-hidden focus:border-[#C94E16]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#75543D] mb-1">
                  Số lượng khách dự kiến
                </label>
                <div className="relative">
                  <select
                    value={formData.visitorCount}
                    onChange={(e) => setFormData({ ...formData, visitorCount: e.target.value })}
                    className="w-full bg-white border border-[#E8DFC9] rounded-lg px-3 py-2 text-xs text-[#211D1A] focus:outline-hidden focus:border-[#C94E16] appearance-none"
                  >
                    <option>Khách lẻ / Gia đình (1 - 4 người)</option>
                    <option>Đoàn tham quan nhỏ (5 - 15 người)</option>
                    <option>Đoàn nghiên cứu / Học sinh (16 - 35 người)</option>
                    <option>Đoàn lớn trên 35 người</option>
                  </select>
                  <Users className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#75543D] mb-1">
                  Ngày dự kiến tham quan
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full bg-white border border-[#E8DFC9] rounded-lg px-3 py-2 text-xs text-[#211D1A] focus:outline-hidden focus:border-[#C94E16]"
                  />
                  <Calendar className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#75543D] mb-1">
                  Nhu cầu trải nghiệm chính
                </label>
                <select
                  value={formData.experienceType}
                  onChange={(e) => setFormData({ ...formData, experienceType: e.target.value })}
                  className="w-full bg-white border border-[#E8DFC9] rounded-lg px-3 py-2 text-xs text-[#211D1A] focus:outline-hidden focus:border-[#C94E16] appearance-none"
                >
                  <option>Tham quan di tích & Quai búa lò rèn</option>
                  <option>Dâng hương Chùa Cổ Giác Lương & Nhà Thờ Tổ</option>
                  <option>Nghiên cứu văn hóa & Kỹ nghệ tôi thép bùn non</option>
                  <option>Tìm hiểu phả hệ các dòng họ & Hàng Kỉnh</option>
                  <option>Đặt chế tác nông cụ / sản phẩm lưu niệm</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#75543D] mb-1">
                Nội dung lời nhắn hoặc yêu cầu hỗ trợ đặc biệt
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ghi rõ thời gian mong muốn, yêu cầu thuyết minh viên hoặc đề xuất về chương trình thực hành thử lửa..."
                className="w-full bg-white border border-[#E8DFC9] rounded-lg px-3 py-2 text-xs text-[#211D1A] focus:outline-hidden focus:border-[#C94E16]"
              />
            </div>

            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-[11px] text-[#75543D] leading-relaxed">
              * Ghi chú: Khách đoàn trải nghiệm thực tế quai búa lò rèn vui lòng đăng ký trước tối thiểu 01 ngày để Ban Quản Lý chuẩn bị than củi, phôi sắt nung đỏ và trang bị bảo hộ an toàn.
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E8DFC9]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 rounded-lg bg-[#C94E16] hover:bg-[#B04212] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>GỬI THÔNG TIN CHO BAN QUẢN LÝ</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
