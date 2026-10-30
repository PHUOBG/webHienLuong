import React, { useState } from 'react';
import { PageRoute } from '../types';
import { HAMLETS } from '../data/villageData';
import { 
  Users, Award, HeartHandshake, Shield, 
  MapPin, Sparkles, Building, Bookmark, ArrowRight, MessageSquare 
} from 'lucide-react';

interface LineagesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (type?: string) => void;
}

export const LineagesPage: React.FC<LineagesPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const [greetingText, setGreetingText] = useState('');
  const [greetingSent, setGreetingSent] = useState(false);

  const lineages = [
    {
      name: 'Họ Hoàng (Hoàng Tộc)',
      role: 'Đệ nhất Khai canh — Thủy tổ nghề rèn',
      desc: 'Cụ Hoàng Đình Chèm cùng con cháu di cư từ phương Bắc mang theo kỹ nghệ luyện sắt khai sáng làng nghề rèn bên bờ sông Bồ từ thế kỷ 16. Con cháu họ Hoàng qua bao đời nắm giữ bí truyền tôi thép.',
      members: 'Chi phái đông nhất làng, gìn giữ đền thờ Tổ sư',
    },
    {
      name: 'Họ Trương (Trương Tộc)',
      role: 'Đệ nhị Khai canh — Bậc thầy rèn nông cụ',
      desc: 'Dòng họ đóng vai trò rường cột trong việc cải tiến các loại nông cụ như lưỡi cày, rựa đốn củi, kéo cắt chỉ. Nổi danh với các thợ rèn cừ khôi chuyên phục vụ canh nông miền Trung.',
      members: 'Đóng góp công đức lớn xây dựng Chùa Giác Lương',
    },
    {
      name: 'Họ Nguyễn & Họ Lê',
      role: 'Bậc Tiền hiền khai khẩn — Canh tân làng xã',
      desc: 'Cùng chung sức mở mang đê điều, xây dựng các bến sông và lập nên chợ Hiền Lương để trao đổi các mặt hàng sắt thép với các thuyền buôn từ kinh đô Huế về.',
      members: 'Quản thủ hương ước và duy trì lễ nghi cổ truyền',
    },
    {
      name: 'Họ Trần, Phan & Các Họ Hậu Hiền',
      role: 'Đồng tâm tiếp nối — Đưa dao kéo đi khắp muôn phương',
      desc: 'Những cánh buồm ghe đò xuôi ngược đưa sản phẩm Hiền Lương đến tận Quảng Nam, Quảng Ngãi, Bình Định nhờ công sức của các chi họ hậu hiền kiên trì bám trụ.',
      members: 'Gắn kết bền chặt trong Hội đồng Bô lão làng',
    },
  ];

  const handleSendGreeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (greetingText.trim()) {
      setGreetingSent(true);
      setGreetingText('');
      setTimeout(() => setGreetingSent(false), 5000);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#75543D]">
        <button onClick={() => onNavigate('home')} className="hover:underline hover:text-[#C94E16]">Trang chủ</button>
        <span>/</span>
        <span className="font-semibold text-[#211D1A]">Dòng họ & Hàng Kỉnh</span>
      </nav>

      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#C94E16] uppercase tracking-wider">
          <Users className="w-4 h-4" />
          <span>CỘI NGUỒN HUYẾT THỐNG & NGHĨA TÌNH LÀNG XÃ</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211D1A] tracking-tight">
              Các Dòng Họ & Hàng Kỉnh Hiền Lương
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl font-light">
              Mối liên kết máu thịt và nghĩa tình tương trợ hơn 5 thế kỷ của các thế hệ con em dòng tộc khai khẩn, khai cơ và bảo tồn lửa nghề rèn truyền thống.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF0E4] border border-[#E8DFC9] text-xs font-bold text-[#75543D] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#C94E16]" /> Hội Đồng Tộc Biểu Làng
            </span>
          </div>
        </div>
      </div>

      {/* Intro banner about Hàng Kỉnh */}
      <div className="relative overflow-hidden rounded-2xl bg-[#211D1A] text-[#F8F5EF] p-6 sm:p-8 border border-[#75543D]/30 shadow-lg">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#C94E16]/20 border border-[#C94E16]/40 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-8 h-8 text-[#C94E16]" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F5EF]">
              Tập Tục &ldquo;Hàng Kỉnh&rdquo; — Nét Đẹp Tương Tế Độc Đáo
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light max-w-4xl">
              &ldquo;Hàng Kỉnh&rdquo; ở Hiền Lương là mạng lưới gắn kết xóm giềng và các dòng họ thành các tổ tương tế thân tộc. Khi nhà ai đỏ lửa rèn đợt hàng lớn, thợ các lò lân cận sang quai búa phụ; khi nhà có việc hiếu hỷ, cả Hàng Kỉnh cùng tề tựu lo liệu như ruột thịt trong nhà.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Lineages & Hamlets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Lineages */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#211D1A] flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-[#C94E16]" />
              <span>Các Đại Tộc Khai Canh & Tiền Hiền</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {lineages.map((lin, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-xs hover:shadow-md transition space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-[#F0E8D9] pb-3">
                    <h4 className="font-serif font-bold text-lg text-[#211D1A]">
                      {lin.name}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E4] text-[#C94E16] text-[11px] font-bold">
                      Bậc {idx + 1}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#75543D]">
                    {lin.role}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {lin.desc}
                  </p>

                  <div className="pt-2 text-[11px] text-stone-500 italic border-t border-[#F0E8D9]">
                    * {lin.members}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 9 Hamlets Grid */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-xl text-[#211D1A] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C94E16]" />
                <span>Không Gian 9 Xóm Làng Hiền Lương</span>
              </h3>
              <span className="text-xs text-[#75543D]">9 xóm dọc bờ sông Bồ</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {HAMLETS.map((hamlet) => (
                <div
                  key={hamlet.id}
                  className="p-4 rounded-xl bg-white border border-[#E8DFC9] hover:border-[#C94E16] transition space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#211D1A]">{hamlet.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF4EB] text-[#C94E16] font-semibold">
                      {hamlet.type}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-light">{hamlet.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Diaspora & Greetings */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* LỜI NHẮN BÀ CON XA QUÊ */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-base text-[#211D1A] uppercase tracking-wider text-xs border-b border-[#F0E8D9] pb-3">
              Gửi Lời Chúc Đến Bà Con Hiền Lương
            </h3>
            
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Dành cho con cháu làng rèn Hiền Lương đang học tập, làm việc xa quê và những người yêu mến văn hóa Huế gửi lời thăm hỏi tới bô lão và nghệ nhân làng.
            </p>

            {greetingSent && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
                Lời nhắn của bạn đã được ghi nhận vào Sổ Lưu Niệm Di Sản Hiền Lương!
              </div>
            )}

            <form onSubmit={handleSendGreeting} className="space-y-3 text-xs">
              <textarea
                rows={4}
                required
                value={greetingText}
                onChange={(e) => setGreetingText(e.target.value)}
                placeholder="Nhập lời thăm hỏi, chia sẻ kỷ niệm về lò rèn quê nhà..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFC9] focus:outline-none focus:border-[#C94E16] bg-[#FAF4EB]/30 text-stone-800 resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#C94E16] hover:bg-[#B34211] text-white font-bold text-xs transition shadow-xs flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Gửi lời nhắn vào sổ lưu niệm</span>
              </button>
            </form>
          </div>

          {/* LỄ HỘI MÙNG 8 THÁNG 2 ÂM LỊCH */}
          <div className="bg-[#FAF4EB] rounded-2xl p-6 border border-[#E8DFC9] space-y-3">
            <span className="text-[10px] uppercase font-bold text-[#C94E16] tracking-wider">
              SỰ KIỆN QUAN TRỌNG HÀNG NĂM
            </span>
            <h4 className="font-serif font-bold text-base text-[#211D1A]">
              Đại Lễ Giỗ Tổ Nghề Rèn
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed font-light">
              Vào ngày mùng 8 tháng 2 âm lịch hằng năm, toàn thể con cháu các dòng tộc họ Hoàng, Trương, Nguyễn, Lê... từ khắp mọi miền đất nước tề tựu về Nhà thờ Tổ nghề Hiền Lương để dâng hương tạ ơn tiền nhân đã truyền lại nghề nuôi sống bao thế hệ.
            </p>
            <button
              onClick={() => onOpenBookingModal('Tham dự Lễ Giỗ Tổ Nghề mùng 8 tháng 2 Âm lịch')}
              className="w-full py-2 rounded-lg bg-white border border-[#E8DFC9] hover:bg-[#FAF0E4] text-[#75543D] text-xs font-semibold transition"
            >
              Đăng ký tham dự lễ hội
            </button>
          </div>

        </aside>

      </div>

    </div>
  );
};
