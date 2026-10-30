import React, { useState } from 'react';
import { PageRoute, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/villageData';
import { 
  Images, Camera, Eye, Filter, Sparkles, 
  Upload, Quote, Shield, Info, ExternalLink 
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenBookingModal: (type?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenLightbox,
  onOpenBookingModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const categories = [
    { key: 'all', label: 'Tất cả ảnh', count: GALLERY_ITEMS.length },
    { key: 'quy-trinh', label: 'Quy trình rèn', count: GALLERY_ITEMS.filter(i => i.category === 'quy-trinh').length },
    { key: 'di-tich', label: 'Di tích & Tâm linh', count: GALLERY_ITEMS.filter(i => i.category === 'di-tich').length },
    { key: 'nghe-nhan', label: 'Nghệ nhân', count: GALLERY_ITEMS.filter(i => i.category === 'nghe-nhan').length },
    { key: 'san-pham', label: 'Sản phẩm dao kéo', count: GALLERY_ITEMS.filter(i => i.category === 'san-pham').length },
    { key: 'phong-canh', label: 'Phong cảnh làng quê', count: GALLERY_ITEMS.filter(i => i.category === 'phong-canh').length },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#75543D]">
        <button onClick={() => onNavigate('home')} className="hover:underline hover:text-[#C94E16]">Trang chủ</button>
        <span>/</span>
        <span className="font-semibold text-[#211D1A]">Thư viện ảnh</span>
      </nav>

      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#C94E16] uppercase tracking-wider">
          <Camera className="w-4 h-4" />
          <span>KHO LƯU TRỮ HÌNH ẢNH & TƯ LIỆU THỰC ĐỊA</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211D1A] tracking-tight">
              Thư Viện Ảnh Làng Rèn Hiền Lương
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl font-light">
              Tổng hợp các bức ảnh điền dã ghi lại nhịp sống lò rèn, không gian di tích Chùa Giác Lương, các bậc cao niên và sản phẩm nông cụ thủ công bên bờ sông Bồ.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto flex-wrap">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF0E4] border border-[#E8DFC9] text-xs font-bold text-[#75543D] flex items-center gap-1.5">
              <Images className="w-3.5 h-3.5 text-[#C94E16]" /> {GALLERY_ITEMS.length} Tư liệu thực địa
            </span>
            <button
              onClick={() => setUploadModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-[#C94E16] hover:bg-[#B34211] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Góp ảnh tư liệu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Folk Poetry Banner */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF0E4] border border-[#E8DFC9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#C94E16]/10 border border-[#C94E16]/30 flex items-center justify-center shrink-0 mt-1">
            <Quote className="w-5 h-5 text-[#C94E16]" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-sm text-[#211D1A]">Ca dao làng rèn Hiền Lương bên dòng sông Bồ</h4>
            <p className="font-serif italic text-xs sm:text-sm text-stone-700 leading-relaxed">
              &ldquo;Cầu Trường Tiền sáu vài mười hai nhịp — Em theo không kịp tội lắm anh ơi.<br />
              Thương anh thợ rèn Hiền Lương mồ hôi ướt áo — Để em mang gáo nước giếng bưng sang.&rdquo;
            </p>
          </div>
        </div>
        <div className="text-[11px] text-[#75543D] bg-white px-3 py-1.5 rounded-full border border-[#E8DFC9] whitespace-nowrap">
          Sưu tầm điền dã dân gian
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E8DFC9] scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition whitespace-nowrap flex items-center gap-2 ${
              activeCategory === cat.key
                ? 'bg-[#211D1A] text-white shadow-sm'
                : 'bg-white border border-[#E8DFC9] text-[#75543D] hover:bg-[#FAF4EB]'
            }`}
          >
            <span>{cat.label}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                activeCategory === cat.key ? 'bg-[#C94E16] text-white' : 'bg-stone-100 text-stone-600'
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenLightbox(item)}
            className="group cursor-pointer bg-white rounded-2xl border border-[#E8DFC9] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] bg-[#211D1A] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-[#211D1A] shadow">
                  <Eye className="w-3.5 h-3.5 text-[#C94E16]" />
                  <span>Xem ảnh lớn</span>
                </span>
              </div>

              {/* Code badge */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#211D1A]/80 backdrop-blur-xs text-[10px] font-mono text-[#F8F5EF] border border-white/20">
                {item.code}
              </div>

              {/* Category tag */}
              <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-[#C94E16] text-[10px] font-bold text-white shadow">
                {item.categoryLabel}
              </div>
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <h3 className="font-serif font-bold text-sm text-[#211D1A] group-hover:text-[#C94E16] transition line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed font-light">
                  {item.caption}
                </p>
              </div>

              <div className="pt-2 border-t border-[#F0E8D9] flex items-center justify-between text-[11px] text-stone-500">
                <span>{item.meta}</span>
                <span className="italic">{item.attribution}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contribution Modal / Dialog */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 border border-[#E8DFC9] shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#F0E8D9] pb-3">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#C94E16]" />
                <h3 className="font-serif font-bold text-lg text-[#211D1A]">
                  Đóng Góp Hình Ảnh Tư Liệu Làng Rèn
                </h3>
              </div>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Mọi tư liệu ảnh về đời sống thợ rèn, kỷ vật gia đình, sản phẩm nông cụ cổ hoặc hoạt động tế lễ của bà con và du khách đều được Hội đồng Biên tập lưu trữ trân trọng trong cổng số di sản Hiền Lương.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF4EB] border border-[#E8DFC9] space-y-2 text-xs text-[#75543D]">
              <div className="font-bold text-[#211D1A]">Phương thức gửi:</div>
              <ul className="space-y-1 list-disc list-inside">
                <li>Gửi trực tiếp qua hộp thư: <strong className="text-[#C94E16]">bql.disan@hienluongforge.vn</strong></li>
                <li>Gửi qua Zalo Trưởng ban: <strong className="text-[#211D1A]">0983 241 855</strong></li>
                <li>Hoặc điền biểu mẫu liên hệ trực tuyến trên website</li>
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setUploadModalOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-100"
              >
                Đóng lại
              </button>
              <button
                onClick={() => {
                  setUploadModalOpen(false);
                  onNavigate('lien-he');
                }}
                className="px-4 py-2 rounded-lg bg-[#C94E16] hover:bg-[#B34211] text-white text-xs font-bold transition shadow-xs"
              >
                Đi đến trang Liên Hệ
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
