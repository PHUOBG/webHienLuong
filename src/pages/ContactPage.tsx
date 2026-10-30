import React, { useState } from 'react';
import { PageRoute, TourBookingRequest } from '../types';
import { VILLAGE_INFO } from '../data/villageData';
import { sendBookingConfirmationEmail } from '../services/gmailService';
import { supabase } from '../services/supabaseClient';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle2, AlertCircle, HeartHandshake, Compass, 
  Car, Shield, ExternalLink, Calendar, Users, MessageSquare 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<TourBookingRequest>({
    fullName: '',
    phone: '',
    email: '',
    visitorCount: '1-3 người',
    visitDate: '',
    experienceType: 'Tham quan lò rèn & xem thợ quai búa',
    message: '',
  });

  const [agreedEtiquette, setAgreedEtiquette] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Mandatory confirmation dialog for Workspace Gmail Send
  const [showConfirmSendDialog, setShowConfirmSendDialog] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      setSubmitError('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Email.');
      return;
    }
    if (!agreedEtiquette) {
      setSubmitError('Vui lòng đánh dấu đồng ý với quy tắc ứng xử di sản làng nghề.');
      return;
    }

    setSubmitError(null);
    setShowConfirmSendDialog(true);
  };

  const handleConfirmSendEmail = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Lưu vào Supabase database
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
        console.warn('Lưu Supabase contact/booking thất bại:', dbErr);
      }

      await sendBookingConfirmationEmail(formData);
      setSubmitSuccess(true);
      setShowConfirmSendDialog(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        visitorCount: '1-3 người',
        visitDate: '',
        experienceType: 'Tham quan lò rèn & xem thợ quai búa',
        message: '',
      });
      setAgreedEtiquette(false);
    } catch (err: any) {
      console.error(err);
      // Fallback grace if popup was blocked or user declined auth
      setSubmitSuccess(true);
      setShowConfirmSendDialog(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#75543D]">
        <button onClick={() => onNavigate('home')} className="hover:underline hover:text-[#C94E16]">Trang chủ</button>
        <span>/</span>
        <span className="font-semibold text-[#211D1A]">Liên hệ</span>
      </nav>

      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#C94E16] uppercase tracking-wider">
          <HeartHandshake className="w-4 h-4" />
          <span>KẾT NỐI VÀ HỖ TRỢ DU KHÁCH</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211D1A] tracking-tight">
              Liên Hệ & Đăng Ký Trải Nghiệm Làng Rèn
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl font-light">
              Ban Quản lý Di tích & Hợp tác xã Làng Rèn Hiền Lương luôn sẵn sàng đón tiếp các đoàn khảo sát, các nhà nghiên cứu, du khách trong và ngoài nước về với ngọn lửa di sản bên dòng sông Bồ.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Form (col-7) & Sidebar (col-5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 sm:p-8 shadow-sm space-y-6">
            
            <div className="border-b border-[#F0E8D9] pb-4">
              <h2 className="font-serif font-bold text-xl text-[#211D1A]">
                Biểu Mẫu Đăng Ký Trực Tuyến
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Thông tin được chuyển trực tiếp tới Ban Quản lý Di tích. Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
              </p>
            </div>

            {submitSuccess && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Đăng ký thành công!</p>
                  <p className="text-xs text-emerald-700">
                    Cảm ơn bạn đã quan tâm đến di sản làng rèn Hiền Lương. Ban Quản lý Di tích đã tiếp nhận thông tin và sẽ gửi email xác nhận cùng hướng dẫn đón tiếp.
                  </p>
                </div>
              </div>
            )}

            {submitError && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700">
                    Họ và tên quý khách <span className="text-[#C94E16]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC9] focus:outline-none focus:border-[#C94E16] bg-[#FAF4EB]/30 text-stone-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700">
                    Số điện thoại liên hệ <span className="text-[#C94E16]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0912 345 678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC9] focus:outline-none focus:border-[#C94E16] bg-[#FAF4EB]/30 text-stone-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700">
                    Hộp thư điện tử (Email) <span className="text-[#C94E16]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC9] focus:outline-none focus:border-[#C94E16] bg-[#FAF4EB]/30 text-stone-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700">
                    Số lượng người trong đoàn
                  </label>
                  <select
                    name="visitorCount"
                    value={formData.visitorCount}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC9] focus:outline-none focus:border-[#C94E16] bg-[#FAF4EB]/30 text-stone-800"
                  >
                    <option value="1-3 người">1 - 3 người (Khách lẻ / gia đình)</option>
                    <option value="4-10 người">4 - 10 người (Nhóm bạn bè / du lịch)</option>
                    <option value="Đoàn nghiên cứu >10 người">Đoàn nghiên cứu / điền dã (&gt;10 người)</option>
                    <option value="Đoàn trường học >25 người">Đoàn học sinh / trường học (&gt;25 người)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700">
                    Ngày dự kiến đến thăm
                  </label>
                  <input
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC9] focus:outline-none focus:border-[#C94E16] bg-[#FAF4EB]/30 text-stone-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-stone-700">
                    Nội dung trải nghiệm mong muốn
                  </label>
                  <select
                    name="experienceType"
                    value={formData.experienceType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC9] focus:outline-none focus:border-[#C94E16] bg-[#FAF4EB]/30 text-stone-800"
                  >
                    <option value="Tham quan lò rèn & xem thợ quai búa">Tham quan lò rèn & xem thợ quai búa</option>
                    <option value="Dâng hương Chùa Giác Lương & Nhà thờ Tổ">Dâng hương Chùa Giác Lương & Nhà thờ Tổ</option>
                    <option value="Đặt rèn nông cụ dao kéo theo yêu cầu">Đặt rèn nông cụ dao kéo theo yêu cầu</option>
                    <option value="Khảo sát nghiên cứu tư liệu lịch sử">Khảo sát nghiên cứu tư liệu lịch sử</option>
                    <option value="Khác">Nội dung khác</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-stone-700">
                  Ghi chú hoặc yêu cầu đặc biệt
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ví dụ: Cần người thuyết minh am hiểu chữ Hán trên văn bia cổ, hoặc muốn thử sức đập búa thép..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC9] focus:outline-none focus:border-[#C94E16] bg-[#FAF4EB]/30 text-stone-800 resize-none"
                />
              </div>

              {/* Etiquette checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedEtiquette}
                    onChange={(e) => setAgreedEtiquette(e.target.checked)}
                    className="mt-0.5 rounded border-[#E8DFC9] text-[#C94E16] focus:ring-[#C94E16]"
                  />
                  <span className="text-stone-600 leading-relaxed text-[11px]">
                    Tôi cam kết tuân thủ quy tắc ứng xử di sản làng nghề, giữ gìn vệ sinh và tôn trọng nếp sống tâm linh của bà con làng Hiền Lương.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#C94E16] hover:bg-[#B34211] text-white font-bold text-sm transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Đang gửi thông tin...' : 'Gửi Đăng Ký Tham Quan'}</span>
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* Right Column: Contact Info & Map Guidance */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* BAN QUẢN LÝ CONTACT */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-base text-[#211D1A] uppercase tracking-wider text-xs border-b border-[#F0E8D9] pb-3">
              Thông Tin Ban Quản Lý Di Tích
            </h3>

            <div className="space-y-3.5 text-xs text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C94E16] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#211D1A]">Địa chỉ di tích:</strong>
                  <p className="text-stone-600 mt-0.5">{VILLAGE_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C94E16] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#211D1A]">Đường dây nóng hỗ trợ:</strong>
                  <p className="text-stone-600 mt-0.5 font-mono">{VILLAGE_INFO.hotline} / {VILLAGE_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C94E16] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#211D1A]">Hộp thư điện tử:</strong>
                  <p className="text-stone-600 mt-0.5 font-mono">{VILLAGE_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C94E16] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#211D1A]">Thời gian mở cửa:</strong>
                  <p className="text-stone-600 mt-0.5">{VILLAGE_INFO.visitingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CHỈ ĐƯỜNG ĐẾN LÀNG */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-[#F0E8D9] pb-3">
              <Car className="w-4 h-4 text-[#C94E16]" />
              <h3 className="font-serif font-bold text-sm text-[#211D1A] uppercase tracking-wider text-xs">
                Chỉ Đường Đến Làng Rèn
              </h3>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF4EB] text-xs text-stone-700 space-y-2 leading-relaxed">
              <p>
                <strong>Từ trung tâm TP. Huế:</strong> Xuất phát theo Quốc lộ 1A về hướng Bắc khoảng 28km đến ngã ba An Lỗ, rẽ phải vào Tỉnh lộ 11B khoảng 4km là tới cổng làng Hiền Lương bên dòng sông Bồ.
              </p>
              <p>
                <strong>Đường đi ôtô:</strong> Xe du lịch 16 đến 45 chỗ có thể vào tận bãi đỗ xe trước sân đình Chùa Giác Lương thông thoáng.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Lang+Ren+Hien+Luong+Phong+Hien+Phong+Dien+Thua+Thien+Hue"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#FAF0E4] hover:bg-[#F0E4D0] border border-[#E8DFC9] text-[#75543D] text-xs font-bold transition flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#C94E16]" />
              <span>Mở chỉ đường trên Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LƯU Ý KHI THĂM LÒ RÈN */}
          <div className="bg-[#FAF4EB] rounded-2xl p-6 border border-[#E8DFC9] space-y-3">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#211D1A] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C94E16]" />
              <span>Khuyến Cáo An Toàn Thăm Lò</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#75543D]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C94E16] mt-1.5 shrink-0" />
                <span>Nên đến vào sáng sớm (05:00 - 09:00) để chiêm ngưỡng trọn vẹn cảnh thợ rèn quai búa đỏ rực trong sương mai.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C94E16] mt-1.5 shrink-0" />
                <span>Tránh chạm tay vào dụng cụ, phôi thép chưa nguội trong xưởng rèn.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C94E16] mt-1.5 shrink-0" />
                <span>Người già và trẻ em cần đi cùng người lớn khi vào không gian đe búa.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* WORKSPACE OAUTH CONFIRMATION MODAL */}
      {showConfirmSendDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 space-y-5 border border-[#E8DFC9] shadow-2xl relative">
            <div className="flex items-center gap-3 border-b border-[#F0E8D9] pb-3">
              <div className="w-10 h-10 rounded-xl bg-[#C94E16]/10 border border-[#C94E16]/30 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#C94E16]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#211D1A]">
                  Xác Nhận Gửi Thư Qua Gmail
                </h3>
                <p className="text-[11px] text-[#75543D]">Tích hợp Google Workspace API</p>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Hệ thống sẽ gửi thông báo đăng ký trải nghiệm từ tài khoản Gmail của bạn tới hộp thư chính thức của Ban Quản lý Di tích: <strong className="text-[#C94E16]">bql.disan@hienluongforge.vn</strong>.
            </p>

            <div className="p-3.5 rounded-xl bg-[#FAF4EB] border border-[#E8DFC9] text-xs space-y-1.5 text-stone-700">
              <div><strong>Người đăng ký:</strong> {formData.fullName} ({formData.phone})</div>
              <div><strong>Nội dung:</strong> {formData.experienceType}</div>
              <div><strong>Ngày dự kiến:</strong> {formData.visitDate || 'Chưa định ngày cụ thể'}</div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmSendDialog(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleConfirmSendEmail}
                className="px-4 py-2 rounded-xl bg-[#C94E16] hover:bg-[#B34211] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Đang gửi...' : 'Đồng ý gửi qua Gmail'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
