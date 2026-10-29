import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ARTISANS } from '../data/villageData';
import { AudioPlayerWidget } from '../components/AudioPlayerWidget';
import { 
  Flame, Award, Hammer, Users, Calendar, 
  MapPin, CheckCircle2, MessageSquare, HeartHandshake, Sparkles, Quote, ArrowRight, Share2 
} from 'lucide-react';

interface ArtisansPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (type?: string) => void;
}

export const ArtisansPage: React.FC<ArtisansPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const specialties = ['all', 'Tôi thép', 'Dao chuối & Nông cụ', 'Chấn chỉnh dao kéo', 'Kế nghiệp'];

  const filteredArtisans = selectedSpecialty === 'all'
    ? ARTISANS
    : ARTISANS.filter(a => a.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase()) || 
                          a.title.toLowerCase().includes(selectedSpecialty.toLowerCase()));

  const handleShare = (artisanName: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/#nghe-nhan-${id}`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#75543D]">
        <button onClick={() => onNavigate('home')} className="hover:underline hover:text-[#C94E16]">Trang chủ</button>
        <span>/</span>
        <span className="font-semibold text-[#211D1A]">Nghệ nhân</span>
      </nav>

      {/* Header Banner */}
      <div className="space-y-3 pb-6 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#C94E16] uppercase tracking-wider">
          <Flame className="w-4 h-4" />
          <span>BẬC THẦY LUYỆN THÉP VÀ GÌN GIỮ HỒN NGHỀ</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211D1A] tracking-tight">
              Những Bàn Tay Giữ Lửa Hiền Lương
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Tôn vinh các nghệ nhân cao niên, bậc thầy tôi thép và thế hệ thợ trẻ đang ngày đêm giữ ấm ánh lửa lò rèn truyền thống bên dòng sông Bồ.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start lg:self-auto flex-wrap">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF0E4] border border-[#E8DFC9] text-xs font-bold text-[#75543D] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#C94E16]" /> 4 Nghệ nhân tiêu biểu
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#211D1A] text-[#F8F5EF] text-xs font-semibold">
              10+ Lò rèn duy trì
            </span>
          </div>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#211D1A] text-[#F8F5EF] p-6 sm:p-8 border border-[#75543D]/30 shadow-lg">
        <div className="absolute -right-6 -bottom-6 text-[#C94E16]/10 pointer-events-none">
          <Quote className="w-48 h-48" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#C94E16]/20 border border-[#C94E16]/40 flex items-center justify-center shrink-0">
            <Flame className="w-8 h-8 text-[#C94E16]" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <p className="font-serif italic text-base sm:text-xl text-[#F8F5EF] leading-relaxed">
              &ldquo;Người thợ rèn Hiền Lương cả đời cúi mình bên đe búa, nhưng sản phẩm làm ra phải đứng thẳng cùng nhà nông qua bao mùa gặt cay đắng ngọt bùi.&rdquo;
            </p>
            <p className="text-xs text-[#C5A15B] font-semibold tracking-wider uppercase">
              — Nghệ nhân Hoàng Tiến (72 tuổi, 55 năm giữ lửa nghề)
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Artisan cards + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left: Artisan list (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-semibold text-[#75543D] whitespace-nowrap mr-1">Bộ lọc chuyên môn:</span>
            {specialties.map(spec => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition whitespace-nowrap ${
                  selectedSpecialty === spec
                    ? 'bg-[#C94E16] text-white shadow-sm'
                    : 'bg-white border border-[#E8DFC9] text-[#75543D] hover:bg-[#FAF0E4]'
                }`}
              >
                {spec === 'all' ? 'Tất cả nghệ nhân' : spec}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {filteredArtisans.map((artisan, index) => (
              <article
                key={artisan.id}
                id={`nghe-nhan-${artisan.id}`}
                className="bg-white rounded-2xl border border-[#E8DFC9] shadow-sm hover:shadow-md transition overflow-hidden p-6 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Avatar / Portrait */}
                  <div className="relative w-full sm:w-48 h-56 sm:h-auto rounded-xl overflow-hidden shrink-0 bg-[#211D1A]">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover object-center filter contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#C94E16] text-white text-[11px] font-bold shadow">
                      {artisan.badge}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-[#211D1A]/80 backdrop-blur-xs text-[11px] text-white text-center">
                      {artisan.experience} tuổi nghề
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0E8D9] pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#211D1A]">
                            {artisan.name}
                          </h2>
                          <span className="text-xs font-normal text-stone-500">({artisan.age} tuổi)</span>
                        </div>
                        <p className="text-xs font-semibold text-[#C94E16] mt-0.5">
                          {artisan.title}
                        </p>
                      </div>

                      <button
                        onClick={() => handleShare(artisan.name, artisan.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF4EB] hover:bg-[#F0E4D0] border border-[#E8DFC9] text-xs text-[#75543D] transition self-start"
                        title="Sao chép liên kết nghệ nhân"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>{copiedId === artisan.id ? 'Đã sao chép!' : 'Chia sẻ'}</span>
                      </button>
                    </div>

                    {/* Workshop & specialty details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF4EB]/70 border border-[#E8DFC9]/50">
                        <MapPin className="w-3.5 h-3.5 text-[#C94E16] shrink-0" />
                        <span className="text-stone-700"><strong>Lò rèn:</strong> {artisan.workshop}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF4EB]/70 border border-[#E8DFC9]/50">
                        <Hammer className="w-3.5 h-3.5 text-[#C94E16] shrink-0" />
                        <span className="text-stone-700"><strong>Sở trường:</strong> {artisan.specialty}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-stone-700 text-sm leading-relaxed font-light">
                      {artisan.bio}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => onOpenBookingModal(`Gặp gỡ nghệ nhân ${artisan.name}`)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C94E16] hover:bg-[#B34211] text-white text-xs font-bold transition shadow-xs"
                      >
                        <HeartHandshake className="w-3.5 h-3.5" />
                        <span>Đăng ký tham quan lò rèn</span>
                      </button>

                      <button
                        onClick={() => onNavigate('quy-trinh-nghe')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition"
                      >
                        <span>Xem quy trình nghề</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Heritage preservation message */}
          <div className="p-6 rounded-2xl bg-[#FAF0E4] border border-[#E8DFC9] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#C94E16]/10 border border-[#C94E16]/30 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-[#C94E16]" />
            </div>
            <div className="space-y-1 text-xs text-[#75543D]">
              <h4 className="font-bold text-sm text-[#211D1A]">Đề án truyền nghề & phát triển thế hệ kế cận</h4>
              <p className="leading-relaxed">
                Ban Quản lý Di tích Làng Rèn Hiền Lương phối hợp cùng Hội Đồng Tộc Biểu và UBND xã Phong Hiền thường xuyên tổ chức các lớp truyền dạy kỹ thuật tôi thép gia truyền cho con em dòng họ, nhằm giữ cho ngọn lửa 500 năm không bị mai một.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Sidebar (col-span-4) */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* STATS 2024 */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-[#F0E8D9] pb-3">
              <Award className="w-4 h-4 text-[#C94E16]" />
              <h3 className="font-serif font-bold text-[#211D1A] text-sm uppercase tracking-wider">
                Thống Kê Nghệ Nhân 2024
              </h3>
            </div>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF4EB]">
                <span className="text-stone-600">Hộ rèn duy trì:</span>
                <span className="font-bold text-[#211D1A] text-sm">12 hộ gia đình</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF4EB]">
                <span className="text-stone-600">Nghệ nhân cao niên (&gt;65t):</span>
                <span className="font-bold text-[#C94E16] text-sm">6 cụ bô lão</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF4EB]">
                <span className="text-stone-600">Thế hệ trẻ tiếp nối (&lt;40t):</span>
                <span className="font-bold text-[#211D1A] text-sm">4 thợ trẻ</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF4EB]">
                <span className="text-stone-600">Sản lượng thủ công/năm:</span>
                <span className="font-bold text-[#75543D] text-sm">~15.000 nông cụ</span>
              </div>
            </div>
            
            <p className="text-[11px] text-stone-500 italic pt-1 text-center">
              * Số liệu cập nhật từ sổ thống kê Ban Quản lý Di tích Hiền Lương Q1/2024
            </p>
          </div>

          {/* AUDIO PLAYER WIDGET */}
          <AudioPlayerWidget />

          {/* Giao lưu nghệ nhân CTA */}
          <div className="bg-gradient-to-br from-[#211D1A] to-[#362E2A] text-[#F8F5EF] rounded-2xl p-6 shadow-md border border-[#75543D]/40 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#C94E16]/30 border border-[#C94E16]/40 text-[#C5A15B] text-[11px] font-bold">
              <Users className="w-3.5 h-3.5" />
              <span>TRẢI NGHIỆM THỰC TẾ</span>
            </div>
            <h4 className="font-serif font-bold text-lg text-white">
              Gặp Gỡ & Giao Lưu Nghệ Nhân
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Lắng nghe trực tiếp các cụ kể về lịch sử làng rèn, cách nhận biết màu thép nung và tự tay cầm búa đập phôi sắt nóng 1000°C cùng nghệ nhân.
            </p>
            <button
              onClick={() => onOpenBookingModal('Trải nghiệm quai búa & trò chuyện cùng nghệ nhân')}
              className="w-full py-2.5 rounded-xl bg-[#C94E16] hover:bg-[#B34211] text-white text-xs font-bold transition shadow-md flex items-center justify-center gap-2"
            >
              <span>Đăng ký buổi trò chuyện</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Góp tư liệu */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#211D1A]">
              Đóng Góp Tư Liệu Nghệ Nhân
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Bạn có tư liệu ảnh, gia phả, hoặc câu chuyện kỷ niệm về các nghệ nhân rèn Hiền Lương qua các thời kỳ? Hãy chia sẻ để Ban Quản lý bổ sung vào cổng lưu trữ số.
            </p>
            <button
              onClick={() => onNavigate('lien-he')}
              className="w-full py-2 rounded-lg border border-[#C94E16] text-[#C94E16] hover:bg-[#FAF0E4] text-xs font-semibold transition"
            >
              Gửi tư liệu tới BQL
            </button>
          </div>

        </aside>

      </div>

    </div>
  );
};
