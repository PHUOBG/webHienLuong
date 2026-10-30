import React from 'react';
import { PageRoute } from '../types';
import { 
  Calendar, Eye, User, Award, Flame, MapPin, 
  Navigation, ExternalLink, ChevronRight, Shield, Sparkles, Building, Hammer, BookOpen 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (type?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-8">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#75543D]">
        <button onClick={() => onNavigate('home')} className="hover:underline hover:text-[#C94E16]">Trang chủ</button>
        <span>/</span>
        <span className="font-semibold text-[#211D1A]">Giới thiệu</span>
      </nav>

      {/* Page Title & Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E8DFC9]">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211D1A] tracking-tight">
          Giới Thiệu Về Làng Rèn Hiền Lương
        </h1>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF0E4] border border-[#E8DFC9] text-xs font-bold text-[#75543D] self-start md:self-auto">
          <Award className="w-4 h-4 text-[#C94E16]" />
          <span>Di sản văn hóa làng nghề Thừa Thiên Huế</span>
        </div>
      </div>

      {/* Main Content & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Article Body (col-span-8) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#75543D]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C94E16]" /> 15/04/2024
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#C5A15B]" /> 3.420 lượt xem
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-stone-500" /> Ban Quản Lý Di Tích Làng Nghề
            </span>
          </div>

          {/* Lead paragraph */}
          <p className="font-serif text-lg sm:text-xl text-[#211D1A] leading-relaxed font-medium">
            Làng rèn Hiền Lương được hình thành từ thế kỷ XV dưới thời vua Lê Thánh Tông, tọa lạc bên dòng sông Bồ hiền hòa thuộc xã Phong Hiền, huyện Phong Điền, tỉnh Thừa Thiên Huế.
          </p>

          {/* Main Hero Photo: Cổng làng Hiền Lương */}
          <figure className="space-y-2">
            <div className="rounded-xl overflow-hidden border border-[#E8DFC9] shadow-sm">
              <img
                src="/assets/cong-lang-hien-luong-uong-nuoc-nho-nguon.jpg"
                alt="Cổng làng Hiền Lương — Uống Nước Nhớ Nguồn"
                className="w-full h-[320px] sm:h-[460px] object-cover"
              />
            </div>
            <figcaption className="text-xs text-stone-500 italic flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C94E16]" />
              Cổng làng Hiền Lương với bức đại tự &ldquo;Uống Nước Nhớ Nguồn&rdquo; đón chào du khách thập phương
            </figcaption>
          </figure>

          {/* SECTION: LỊCH SỬ HÌNH THÀNH & CỤ THỦY TỔ */}
          <section className="space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#C94E16]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#211D1A]">
                Lịch sử hình thành & Cụ Thủy tổ Hoàng Đình Chèm
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Theo gia phả truyền đời, vào thế kỷ XV, cụ Hoàng Đình Chèm cùng dòng họ mang bí quyết nghề rèn từ xứ Bắc di cư vào đất Thuận Hóa, chọn bờ sông Bồ màu mỡ để khai canh lập nghiệp và truyền lửa nghề cho con cháu. Trải qua hơn năm thế kỷ, ngọn lửa lò đe búa vẫn bừng sáng, trở thành biểu tượng tinh hoa lao động và lòng trung kiên của con người cố đô.
            </p>

            {/* 3 Historical Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#FAF4EB] border border-[#E8DFC9] rounded-xl p-4 space-y-1.5">
                <span className="text-xs font-bold text-[#C94E16]">TK XV</span>
                <h3 className="font-serif font-bold text-sm text-[#211D1A]">Khởi Thủy</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Thành lập xứ Hoa Lăng bên sông Bồ, đặt nền móng nghệ thuật luyện kim cố đô.
                </p>
              </div>

              <div className="bg-[#FAF4EB] border border-[#E8DFC9] rounded-xl p-4 space-y-1.5">
                <span className="text-xs font-bold text-[#C94E16]">Triều Nguyễn</span>
                <h3 className="font-serif font-bold text-sm text-[#211D1A]">Thời Kỳ Cực Thịnh</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Chế tác nông cụ bền bỉ và vũ khí hộ quốc, nhận nhiều sắc phong triều đình.
                </p>
              </div>

              <div className="bg-[#FAF4EB] border border-[#E8DFC9] rounded-xl p-4 space-y-1.5">
                <span className="text-xs font-bold text-[#C94E16]">Năm 2014</span>
                <h3 className="font-serif font-bold text-sm text-[#211D1A]">Vinh Danh Di Sản</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Chính thức được công nhận là Làng nghề truyền thống cấp tỉnh Thừa Thiên Huế.
                </p>
              </div>
            </div>
          </section>

          {/* Aerial photo */}
          <figure className="space-y-2 pt-4">
            <div className="rounded-xl overflow-hidden border border-[#E8DFC9] shadow-sm">
              <img
                src="/assets/toan-canh-lang-hien-luong-tren-cao.jpg"
                alt="Toàn cảnh làng cổ Hiền Lương và cánh đồng lúa thanh bình nhìn từ trên cao"
                className="w-full h-[280px] sm:h-[420px] object-cover"
              />
            </div>
            <figcaption className="text-xs text-stone-500 italic flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C94E16]" />
              Khuôn viên làng rợp bóng cây xanh nhìn từ trên cao
            </figcaption>
          </figure>

          {/* SECTION: KHÔNG GIAN SỐNG & 9 XÓM RÈN */}
          <section className="space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-[#C94E16]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#211D1A]">
                Không gian sống & 9 Xóm Rèn truyền thống
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Trong thời hưng thịnh nhất, Hiền Lương được tổ chức chặt chẽ thành 9 xóm rèn chuyên trách: xóm Dao, xóm Rựa, xóm Cuốc, xóm Kéo, xóm Dao Bếp... tạo nên chuỗi cung ứng sản phẩm sắt rèn tinh xảo nức tiếng khắp dải đất miền Trung.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#E8DFC9] space-y-1.5">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#C94E16]" />
                  <h3 className="font-bold text-xs sm:text-sm text-[#211D1A]">
                    Kỹ nghệ tôi thép bí truyền
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Bí quyết cân chuẩn lửa và nước tôi gia truyền, tạo độ sắc bén bền vững.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E8DFC9] space-y-1.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#75543D]" />
                  <h3 className="font-bold text-xs sm:text-sm text-[#211D1A]">
                    Làng vườn sinh thái bên sông
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Không gian vườn rợp bóng cây cổ thụ, thanh bình ôm trọn lưu vực sông Bồ.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E8DFC9] space-y-1.5">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#C5A15B]" />
                  <h3 className="font-bold text-xs sm:text-sm text-[#211D1A]">
                    Quần thể đình chùa cổ kính
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Nơi bảo tồn Chùa Giác Lương và Đình làng với kiến trúc chạm khắc rồng phượng.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E8DFC9] space-y-1.5">
                <div className="flex items-center gap-2">
                  <Hammer className="w-4 h-4 text-[#C94E16]" />
                  <h3 className="font-bold text-xs sm:text-sm text-[#211D1A]">
                    Trải nghiệm chạm búa thực cảnh
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Du khách được trực tiếp thử quai búa, thử kéo bễ cùng nghệ nhân lão làng.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: BẢN ĐỒ VỊ TRÍ ĐỊA LÝ HIỀN LƯƠNG */}
          <section className="space-y-3 pt-6 border-t border-[#E8DFC9]">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#108E6F] flex items-center gap-2">
              <span>Bản đồ:</span>
            </h3>

            <div className="relative rounded-2xl overflow-hidden border border-[#E8DFC9] bg-stone-100 shadow-sm">
              {/* Embedded Interactive Google Map */}
              <iframe
                title="Bản đồ vị trí Làng Hiền Lương"
                src="https://maps.google.com/maps?q=Hi%E1%BB%81n+L%C6%B0%C6%A1ng,+Phong+%C4%90i%E1%BB%81n,+Hu%E1%BA%BF&t=m&z=15&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[380px] sm:h-[430px] block"
              />

              {/* Top-Left Floating Info Card (Matching Google Maps Widget) */}
              <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-xs rounded-xl p-3 sm:p-3.5 shadow-lg border border-stone-200/80 max-w-[270px] sm:max-w-[310px] space-y-2 pointer-events-auto">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-stone-900 leading-snug">
                    Hiền Lương
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                    Hiền Lương, Phong Điền, Tp. Huế, Huế, Việt Nam
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hi%E1%BB%81n+L%C6%B0%C6%A1ng,+Phong+%C4%90i%E1%BB%81n,+Th%E1%BB%ABa+Thi%C3%AAn+Hu%E1%BA%BF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557b0] text-white text-xs font-semibold shadow-xs transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Mở trong Maps</span>
                  </a>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Hi%E1%BB%81n+L%C6%B0%C6%A1ng,+Phong+%C4%90i%E1%BB%81n,+Th%E1%BB%ABa+Thi%C3%AAn+Hu%E1%BA%BF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#1A73E8] hover:bg-[#1557b0] text-white flex items-center justify-center shadow-xs transition"
                    title="Chỉ đường đến Hiền Lương"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Source Attribution Right-Aligned */}
            <div className="flex justify-end pt-1">
              <p className="text-xs sm:text-sm font-bold text-stone-800">
                Nguồn: Khám phá Huế tổng hợp
              </p>
            </div>
          </section>

        </div>

        {/* Right Column: Sidebar Widgets (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Widget 1: Thông Tin Nhanh */}
          <div className="bg-white border border-[#E8DFC9] rounded-xl p-5 shadow-xs space-y-4">
            <h3 className="font-serif font-bold text-base text-[#211D1A] flex items-center gap-2 border-b border-[#E8DFC9] pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C94E16]" />
              Thông Tin Nhanh
            </h3>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Niên đại:</span>
                <span className="font-semibold text-[#211D1A]">Thế kỷ XV (~500 năm)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Khai lập:</span>
                <span className="font-semibold text-[#211D1A]">Cụ Hoàng Đình Chèm</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Địa lý:</span>
                <span className="font-semibold text-[#211D1A]">Hữu ngạn Sông Bồ</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500">Tuyến đường:</span>
                <span className="font-semibold text-[#211D1A]">Tỉnh lộ 11B ven sông</span>
              </div>
            </div>

            <button
              onClick={() => onOpenBookingModal('Tham quan di tích làng rèn')}
              className="w-full py-2.5 rounded-lg bg-[#C94E16] hover:bg-[#B04212] text-white text-xs font-bold tracking-wide transition-colors shadow-sm"
            >
              ĐĂNG KÝ THAM QUAN DI SẢN
            </button>
          </div>

          {/* Widget 2: Bài Viết Liên Quan */}
          <div className="bg-white border border-[#E8DFC9] rounded-xl p-5 shadow-xs space-y-4">
            <h3 className="font-serif font-bold text-base text-[#211D1A] flex items-center gap-2 border-b border-[#E8DFC9] pb-3">
              <BookOpen className="w-4 h-4 text-[#C94E16]" />
              Bài Viết Liên Quan
            </h3>

            <div className="space-y-3.5">
              <div
                onClick={() => onNavigate('quy-trinh-nghe')}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <img
                  src="/assets/aistudio/h_ng_k_nh_8f6265a8.jpg"
                  alt="Quy trình"
                  className="w-14 h-14 rounded-md object-cover shrink-0 border border-[#E8DFC9]"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#C94E16] uppercase">QUY TRÌNH</span>
                  <h4 className="text-xs font-semibold text-[#211D1A] group-hover:text-[#C94E16] transition-colors line-clamp-2 mt-0.5">
                    7 Bước đập búa tôi thép cổ truyền tại Hiền Lương
                  </h4>
                </div>
              </div>

              <div
                onClick={() => onNavigate('di-tich')}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <img
                  src="/assets/chua-giac-luong-tam-quan.jpg"
                  alt="Di tích Chùa Giác Lương"
                  className="w-14 h-14 rounded-md object-cover shrink-0 border border-[#E8DFC9]"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#75543D] uppercase">DI TÍCH</span>
                  <h4 className="text-xs font-semibold text-[#211D1A] group-hover:text-[#C94E16] transition-colors line-clamp-2 mt-0.5">
                    Kiến trúc cổ chùa Giác Lương Tự 500 năm tuổi
                  </h4>
                </div>
              </div>

              <div
                onClick={() => onNavigate('nghe-nhan')}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <img
                  src="/assets/aistudio/l_ng_4bad7b81.jpg"
                  alt="Con người"
                  className="w-14 h-14 rounded-md object-cover shrink-0 border border-[#E8DFC9]"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#C5A15B] uppercase">CON NGƯỜI</span>
                  <h4 className="text-xs font-semibold text-[#211D1A] group-hover:text-[#C94E16] transition-colors line-clamp-2 mt-0.5">
                    Chuyện những nghệ nhân lão thành giữ than đỏ
                  </h4>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};
