import React, { useState } from 'react';
import { PageRoute } from '../types';
import { HISTORIC_SITES } from '../data/villageData';
import { 
  Building2, Landmark, MapPin, Calendar, 
  Award, Shield, Compass, Sparkles, ArrowRight, HeartHandshake, CheckCircle2, Info,
  Camera, Eye, X, ChevronLeft, ChevronRight, Maximize2
} from 'lucide-react';

interface HeritageSitesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (type?: string) => void;
}

export const HeritageSitesPage: React.FC<HeritageSitesPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const [lightboxState, setLightboxState] = useState<{
    siteTitle: string;
    photos: { id: string; image: string; title: string; caption: string; desc: string }[];
    currentIdx: number;
  } | null>(null);
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#75543D]">
        <button onClick={() => onNavigate('home')} className="hover:underline hover:text-[#C94E16]">Trang chủ</button>
        <span>/</span>
        <span className="font-semibold text-[#211D1A]">Di tích</span>
      </nav>

      {/* Page Header */}
      <div className="space-y-3 pb-6 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#C94E16] uppercase tracking-wider">
          <Landmark className="w-4 h-4" />
          <span>KHÔNG GIAN TÂM LINH & LỊCH SỬ NGHỀ RÈN</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211D1A] tracking-tight">
              Quần Thể Di Tích Lịch Sử — Văn Hóa Hiền Lương
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl font-light">
              Chùa Giác Lương – Di tích Lịch sử cấp Quốc gia (công nhận năm 1992), Nhà thờ Đệ Nhất Khai Canh Hoàng Đình Chèm cùng hệ thống miếu mạo, giếng cổ gắn liền với cội nguồn làng nghề bên bờ sông Bồ.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto flex-wrap">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF0E4] border border-[#E8DFC9] text-xs font-bold text-[#75543D] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#C94E16]" /> Di tích Quốc gia (1992)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#211D1A] text-[#F8F5EF] text-xs font-semibold">
              Niên đại &gt;500 năm
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Sites + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left: Sites List (col-span-8) */}
        <div className="lg:col-span-8 space-y-10">
          
          {HISTORIC_SITES.map((site, index) => (
            <article
              key={site.id}
              className="bg-white rounded-2xl border border-[#E8DFC9] shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Site Image */}
              <div className="relative h-72 sm:h-96 w-full bg-[#211D1A] overflow-hidden group">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A] via-transparent to-black/20" />
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C94E16] text-white text-xs font-bold shadow">
                    Điểm số 0{index + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#211D1A]/80 backdrop-blur-xs text-[#F8F5EF] text-xs font-medium">
                    {site.period}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-[#C5A15B] font-semibold tracking-wider uppercase mb-1">
                    {site.subtitle}
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    {site.title}
                  </h2>
                </div>
              </div>

              {/* Site Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                  {site.description}
                </p>

                {/* Architectural Features */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-serif font-bold text-sm text-[#211D1A] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C94E16]" />
                    <span>Đặc Trưng Kiến Trúc & Giá Trị Văn Hóa</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {site.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF4EB] border border-[#E8DFC9]/60 text-xs text-stone-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C94E16] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dedicated Comprehensive Documentary Photo Gallery for Chùa Giác Lương */}
                {site.id === 'chua-giac-luong' && site.gallery && site.gallery.length > 0 && (
                  <div className="space-y-4 pt-3 border-t border-[#E8DFC9]/70">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF0E4] text-[#C94E16] text-[10px] font-bold uppercase tracking-wider mb-1">
                          <Camera className="w-3 h-3" />
                          <span>Tư liệu điền dã thực địa</span>
                        </div>
                        <h4 className="font-serif font-bold text-base text-[#211D1A] flex items-center gap-2">
                          <Landmark className="w-4 h-4 text-[#C94E16]" />
                          <span>Bộ Ảnh Tư Liệu Khảo Cổ & Kiến Trúc Nghệ Thuật Chùa Giác Lương</span>
                        </h4>
                      </div>
                      <span className="text-xs text-stone-500 font-medium self-start sm:self-auto">
                        {site.gallery.length} góc chụp tư liệu (Bấm để xem ảnh phóng to)
                      </span>
                    </div>

                    {/* Featured Photo: Aerial Flycam View */}
                    <div 
                      onClick={() => setLightboxState({ siteTitle: 'Chùa Cổ Giác Lương Tự', photos: site.gallery!, currentIdx: 0 })}
                      className="group relative rounded-2xl overflow-hidden border border-[#E8DFC9] bg-[#211D1A] cursor-pointer shadow-sm hover:shadow-xl transition-all"
                    >
                      <div className="h-64 sm:h-80 w-full overflow-hidden">
                        <img
                          src={site.gallery[0].image}
                          alt={site.gallery[0].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-between p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-[#C94E16] text-white text-xs font-bold shadow-sm flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            GÓC NHÌN FLYCAM TOÀN CẢNH
                          </span>
                          <span className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-4 h-4" />
                          </span>
                        </div>
                        <div className="text-white space-y-1">
                          <h5 className="font-serif font-bold text-base sm:text-xl text-[#F8F5EF] drop-shadow-sm">
                            {site.gallery[0].title}
                          </h5>
                          <p className="text-xs text-stone-200 line-clamp-2 max-w-2xl leading-relaxed">
                            {site.gallery[0].desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Grid for Remaining Documentary Photos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {site.gallery.slice(1).map((photo, pIdx) => {
                        const actualIdx = pIdx + 1;
                        return (
                          <div
                            key={photo.id}
                            onClick={() => setLightboxState({ siteTitle: 'Chùa Cổ Giác Lương Tự', photos: site.gallery!, currentIdx: actualIdx })}
                            className="rounded-xl overflow-hidden border border-[#E8DFC9] bg-[#FAF8F4] group shadow-xs hover:shadow-md cursor-pointer transition-all flex flex-col"
                          >
                            <div className="relative h-44 overflow-hidden bg-stone-100">
                              <img
                                src={photo.image}
                                alt={photo.title}
                                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#211D1A] text-xs font-bold flex items-center gap-1 shadow-sm">
                                  <Eye className="w-3.5 h-3.5 text-[#C94E16]" /> Xem chi tiết
                                </span>
                              </div>
                            </div>
                            <div className="p-3 text-[11px] text-stone-600 bg-white flex-1 flex flex-col justify-between">
                              <div>
                                <p className="font-bold text-[#75543D] text-xs line-clamp-1 leading-snug group-hover:text-[#C94E16] transition-colors">
                                  {photo.title}
                                </p>
                                <p className="text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                                  {photo.desc}
                                </p>
                              </div>
                              <span className="text-[10px] text-[#C94E16] font-semibold mt-2 inline-flex items-center gap-1">
                                <span>Phóng to tư liệu</span>
                                <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Dedicated Comprehensive Documentary Section for Nhà Thờ Tổ Nghề Rèn */}
                {site.id === 'nha-tho-to-nghe-ren' && site.gallery && site.gallery.length > 0 && (
                  <div className="space-y-4 pt-3 border-t border-[#E8DFC9]/70">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF0E4] text-[#C94E16] text-[10px] font-bold uppercase tracking-wider mb-1">
                          <Camera className="w-3 h-3" />
                          <span>Tổ Đình Nghề Rèn • Khởi lập TK XVIII</span>
                        </div>
                        <h4 className="font-serif font-bold text-base text-[#211D1A] flex items-center gap-2">
                          <Landmark className="w-4 h-4 text-[#C94E16]" />
                          <span>Hình Ảnh & Kiến Trúc Tổ Đình Nghề Rèn Hiền Lương</span>
                        </h4>
                      </div>
                      <span className="text-xs text-stone-500 font-medium self-start sm:self-auto">
                        Tư liệu ảnh thực địa (Bấm để xem ảnh phóng to)
                      </span>
                    </div>

                    {/* 2 Featured Photos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {site.gallery.map((photo, pIdx) => (
                        <div
                          key={photo.id}
                          onClick={() => setLightboxState({ siteTitle: 'Tổ Đình Nghề Rèn Hiền Lương', photos: site.gallery!, currentIdx: pIdx })}
                          className="rounded-2xl overflow-hidden border border-[#E8DFC9] bg-[#FAF8F4] group shadow-xs hover:shadow-lg cursor-pointer transition-all flex flex-col"
                        >
                          <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-900">
                            <img
                              src={photo.image}
                              alt={photo.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-between p-4">
                              <span className="self-start px-2.5 py-1 rounded-full bg-[#C94E16] text-white text-[10px] font-bold shadow-xs">
                                {pIdx === 0 ? 'MẶT TIỀN 3 GIAN CỔ KÍNH' : 'LỄ TẾ TỔ & HOÀNH PHI CỔ'}
                              </span>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-[#211D1A] text-xs font-bold flex items-center gap-1.5 shadow-sm">
                                  <Eye className="w-3.5 h-3.5 text-[#C94E16]" /> Xem chi tiết ảnh
                                </span>
                              </div>
                              <p className="text-xs font-bold text-white drop-shadow-sm">
                                {photo.title}
                              </p>
                            </div>
                          </div>
                          <div className="p-3.5 text-[11px] text-stone-600 bg-white flex-1 flex flex-col justify-between">
                            <p className="text-stone-600 leading-relaxed">
                              {photo.desc}
                            </p>
                            <span className="text-[10px] text-[#C94E16] font-semibold mt-2.5 inline-flex items-center gap-1">
                              <span>Phóng to tư liệu sắc nét</span>
                              <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Historical Context Callouts: Hoàng Văn Lịch, Trần Văn Đắc, Hàng Kỉnh & Lễ 18/2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-[#FAF4EB] border border-[#E8DFC9] space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#C94E16]">
                          <Award className="w-3.5 h-3.5" />
                          <span>Danh nhân Hoàng Văn Lịch (Kỹ sư hơi nước)</span>
                        </div>
                        <p className="text-[11px] text-stone-600 leading-relaxed">
                          Chỉ huy đóng 3 tàu hơi nước đầu tiên của Việt Nam (Yên Phi, Vân Phi, Vụ Phi), rèn súng hơi và gươm báu, được vua Minh Mạng thụ phong Hầu tước; nay được vinh danh đặt tên đường tại TP. Huế.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#FAF4EB] border border-[#E8DFC9] space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#75543D]">
                          <Shield className="w-3.5 h-3.5 text-[#C94E16]" />
                          <span>Hiệp hội Hàng Kỉnh & Lễ Giỗ Tổ 18/2 ÂL</span>
                        </div>
                        <p className="text-[11px] text-stone-600 leading-relaxed">
                          Mạng lưới tương trợ cơ khí độc đáo của người thợ rèn Hiền Lương khắp phương Nam; ngày 18 tháng 2 Âm lịch hàng năm tề tựu về Tổ đình dâng hương tri ân cội nguồn.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer action of card */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F0E8D9]">
                  <div className="flex items-center gap-2 text-xs text-[#75543D]">
                    <MapPin className="w-4 h-4 text-[#C94E16]" />
                    <span>Làng Hiền Lương, Phong Hiền, Phong Điền, Thừa Thiên Huế</span>
                  </div>

                  <button
                    onClick={() => onOpenBookingModal(`Dâng hương & tham quan ${site.title}`)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FAF0E4] hover:bg-[#F0E4D0] border border-[#E8DFC9] text-xs font-bold text-[#75543D] hover:text-[#C94E16] transition"
                  >
                    <HeartHandshake className="w-3.5 h-3.5" />
                    <span>Đăng ký dâng hương</span>
                  </button>
                </div>
              </div>
            </article>
          ))}

          {/* UNESCO / Di sản info box */}
          <div className="bg-[#FAF4EB] rounded-2xl p-6 sm:p-8 border border-[#E8DFC9] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#C94E16]/10 border border-[#C94E16]/30 flex items-center justify-center shrink-0">
                <Landmark className="w-6 h-6 text-[#C94E16]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#211D1A]">
                  Hệ Thống Bia Ký & Cổ Vật Quý Hiếm
                </h3>
                <p className="text-xs text-[#75543D]">
                  Bảo tồn nguyên vẹn các di vật minh chứng cho kỹ nghệ đúc kim hoàn và rèn sắt thời Chúa Nguyễn.
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
              Tại Chùa Giác Lương và Nhà thờ Tổ nghề, các nhà khảo cổ đã tìm thấy nhiều văn bia chữ Hán ghi nhận công đức đóng góp của phường thợ rèn Hiền Lương vào các công trình cung đình Huế, cùng các lệnh chỉ phong sắc của các triều vua Gia Long, Minh Mạng, Tự Đức cho các nghệ nhân xuất sắc của làng.
            </p>
          </div>

        </div>

        {/* Right: Sidebar (col-span-4) */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* ĐIỂM NHẤN DI TÍCH */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-[#F0E8D9] pb-3">
              <Award className="w-4 h-4 text-[#C94E16]" />
              <h3 className="font-serif font-bold text-[#211D1A] text-sm uppercase tracking-wider">
                Điểm Nhấn Di Tích
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#FAF4EB] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#C94E16] tracking-wider">NĂM 1992</span>
                <h5 className="font-bold text-[#211D1A]">Xếp Hạng Di Tích Quốc Gia</h5>
                <p className="text-stone-600 leading-relaxed">
                  Bộ Văn hóa Thông tin chính thức công nhận Chùa Giác Lương là Di tích Kiến trúc Nghệ thuật cấp Quốc gia.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF4EB] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#C94E16] tracking-wider">NĂM 1774</span>
                <h5 className="font-bold text-[#211D1A]">Bia Ký Chúa Nguyễn Ghi Công</h5>
                <p className="text-stone-600 leading-relaxed">
                  Ghi nhận công sức các lò rèn rèn vũ khí và giáo mác bảo vệ bờ cõi Thuận Hóa.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF4EB] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#C94E16] tracking-wider">CỤ HOÀNG ĐÌNH CHÈM</span>
                <h5 className="font-bold text-[#211D1A]">Tổ Sư Khai Sáng Nghề Rèn</h5>
                <p className="text-stone-600 leading-relaxed">
                  Ngài theo đoàn quân Nam tiến mang ngọn lửa rèn từ đồng bằng Bắc Bộ vào định cư lập nghiệp bên bờ sông Bồ.
                </p>
              </div>
            </div>
          </div>

          {/* QUY ĐỊNH VIẾNG THĂM */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-[#F0E8D9] pb-3">
              <Shield className="w-4 h-4 text-[#C94E16]" />
              <h3 className="font-serif font-bold text-[#211D1A] text-sm uppercase tracking-wider">
                Quy Định Viếng Thăm
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C94E16] mt-1.5 shrink-0" />
                <span>Trang phục lịch sự, kín đáo khi vào nội điện Chùa Giác Lương và Nhà thờ Tổ.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C94E16] mt-1.5 shrink-0" />
                <span>Giữ gìn trật tự, không xả rác trong khuôn viên sân đình và khuôn viên di tích.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C94E16] mt-1.5 shrink-0" />
                <span>Xin phép Ban Quản lý khi ghi hình tư liệu chuyên nghiệp hoặc phỏng vấn bô lão.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C94E16] mt-1.5 shrink-0" />
                <span>Thắp hương tại đúng các lư hương được ban quản lý chỉ định ngoài sảnh chính.</span>
              </li>
            </ul>
          </div>

          {/* ĐĂNG KÝ DÂNG HƯƠNG CTA */}
          <div className="bg-[#211D1A] text-[#F8F5EF] rounded-2xl p-6 shadow-md border border-[#75543D]/40 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#C94E16]/30 border border-[#C94E16]/40 text-[#C5A15B] text-[11px] font-bold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>HƯỚNG DẪN VIÊN CỘNG ĐỒNG</span>
            </div>
            <h4 className="font-serif font-bold text-lg text-white">
              Đăng Ký Dâng Hương & Tham Quan
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Được hướng dẫn viên địa phương thuộc Ban Bô lão thuyết minh trực tiếp về kiến trúc cổ, lịch sử dòng họ và ý nghĩa các đồ tế lễ làng nghề.
            </p>
            <button
              onClick={() => onOpenBookingModal('Dâng hương & nghe thuyết minh di tích')}
              className="w-full py-2.5 rounded-xl bg-[#C94E16] hover:bg-[#B34211] text-white text-xs font-bold transition shadow-md flex items-center justify-center gap-2"
            >
              <span>Đặt lịch tham quan có thuyết minh</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* TUYẾN ĐIỂM KẾT NỐI */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-[#F0E8D9] pb-3">
              <Compass className="w-4 h-4 text-[#C94E16]" />
              <h3 className="font-serif font-bold text-[#211D1A] text-sm uppercase tracking-wider">
                Tuyến Điểm Kết Nối
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF4EB]">
                <div className="w-6 h-6 rounded-full bg-[#C94E16] text-white font-bold flex items-center justify-center shrink-0 text-xs">1</div>
                <div>
                  <h6 className="font-bold text-[#211D1A]">Chùa Giác Lương & Nhà thờ Tổ</h6>
                  <p className="text-stone-600">Thăm di tích quốc gia và lễ Tổ sư (45 phút)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF4EB]">
                <div className="w-6 h-6 rounded-full bg-[#75543D] text-white font-bold flex items-center justify-center shrink-0 text-xs">2</div>
                <div>
                  <h6 className="font-bold text-[#211D1A]">Cụm Lò Rèn Xóm 2 & Xóm 3</h6>
                  <p className="text-stone-600">Trải nghiệm xem quai búa, tôi thép đỏ rực (60 phút)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF4EB]">
                <div className="w-6 h-6 rounded-full bg-stone-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</div>
                <div>
                  <h6 className="font-bold text-[#211D1A]">Làng Gốm Cổ Phước Tích</h6>
                  <p className="text-stone-600">Kết nối tuyến du lịch làng nghề Phong Điền (cách 18km)</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('lien-he')}
              className="w-full py-2 rounded-lg border border-[#E8DFC9] hover:bg-[#FAF0E4] text-[#75543D] text-xs font-semibold transition text-center"
            >
              Xem hướng dẫn lộ trình di chuyển
            </button>
          </div>

        </aside>

      </div>

      {/* LIGHTBOX MODAL FOR HERITAGE SITES PHOTO GALLERIES */}
      {lightboxState !== null && lightboxState.photos[lightboxState.currentIdx] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setLightboxState(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative max-w-5xl w-full bg-[#1A1816] rounded-2xl border border-stone-800 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-800 bg-[#211D1A]">
              <div className="flex items-center gap-2 text-xs text-amber-200">
                <Camera className="w-4 h-4 text-[#C94E16]" />
                <span className="font-bold">{lightboxState.siteTitle}</span>
                <span className="text-stone-500">•</span>
                <span className="text-stone-400">Ảnh {lightboxState.currentIdx + 1} / {lightboxState.photos.length}</span>
              </div>
              <button
                onClick={() => setLightboxState(null)}
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition"
                title="Đóng (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Image Display with Navigation Arrows */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[62vh] overflow-hidden">
              <img
                src={lightboxState.photos[lightboxState.currentIdx].image}
                alt={lightboxState.photos[lightboxState.currentIdx].title}
                className="max-w-full max-h-[60vh] object-contain select-none"
              />

              {/* Prev Button */}
              {lightboxState.currentIdx > 0 && (
                <button
                  onClick={() => setLightboxState({ ...lightboxState, currentIdx: lightboxState.currentIdx - 1 })}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C94E16] text-white flex items-center justify-center backdrop-blur-xs transition shadow-lg"
                  title="Ảnh trước"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {lightboxState.currentIdx < lightboxState.photos.length - 1 && (
                <button
                  onClick={() => setLightboxState({ ...lightboxState, currentIdx: lightboxState.currentIdx + 1 })}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C94E16] text-white flex items-center justify-center backdrop-blur-xs transition shadow-lg"
                  title="Ảnh kế tiếp"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Caption & Thumbnails */}
            <div className="p-5 bg-[#211D1A] border-t border-stone-800 space-y-3">
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#F8F5EF]">
                  {lightboxState.photos[lightboxState.currentIdx].title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                  {lightboxState.photos[lightboxState.currentIdx].desc}
                </p>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
                {lightboxState.photos.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setLightboxState({ ...lightboxState, currentIdx: idx })}
                    className={`shrink-0 w-14 h-11 rounded-md overflow-hidden border-2 transition-all ${
                      idx === lightboxState.currentIdx 
                        ? 'border-[#C94E16] scale-105 shadow-md' 
                        : 'border-stone-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
