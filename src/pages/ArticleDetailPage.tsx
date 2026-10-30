import React, { useState } from 'react';
import { PageRoute, Article } from '../types';
import { ARTICLES } from '../data/villageData';
import { 
  Calendar, Eye, User, Clock, ArrowLeft, 
  Share2, Bookmark, Check, Sparkles, BookOpen, 
  ChevronRight, ArrowRight, Quote, Flame, MapPin 
} from 'lucide-react';

interface ArticleDetailPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (type?: string) => void;
  selectedArticleId?: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  onNavigate,
  onOpenBookingModal,
  selectedArticleId,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeArticleId, setActiveArticleId] = useState<string>(
    selectedArticleId || ARTICLES[0].id
  );

  const article = ARTICLES.find(a => a.id === activeArticleId) || ARTICLES[0];
  const relatedArticles = ARTICLES.filter(a => a.id !== article.id);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#75543D]">
        <button onClick={() => onNavigate('home')} className="hover:underline hover:text-[#C94E16]">Trang chủ</button>
        <span>/</span>
        <button onClick={() => onNavigate('gioi-thieu')} className="hover:underline hover:text-[#C94E16]">Tin tức & Tư liệu</button>
        <span>/</span>
        <span className="font-semibold text-[#211D1A] truncate max-w-xs sm:max-w-md">{article.title}</span>
      </nav>

      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#75543D] hover:text-[#C94E16] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại trang chủ</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Article Body (col-span-8) */}
        <article className="lg:col-span-8 space-y-8">
          
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E4] border border-[#E8DFC9] text-xs font-bold text-[#C94E16] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{article.category}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211D1A] leading-[1.2] tracking-tight">
              {article.title}
            </h1>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-3 border-y border-[#E8DFC9] text-xs text-[#75543D]">
              <span className="flex items-center gap-1.5 font-medium text-[#211D1A]">
                <User className="w-4 h-4 text-[#C94E16]" /> {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C94E16]" /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C94E16]" /> 6 phút đọc
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-[#C94E16]" /> {article.views.toLocaleString()} lượt xem
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="space-y-2">
            <div className="relative rounded-2xl overflow-hidden bg-[#211D1A] aspect-video">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <figcaption className="text-center text-xs text-stone-500 italic">
              {article.coverCaption}
            </figcaption>
          </figure>

          {/* Lead / Summary box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF0E4] border-l-4 border-[#C94E16] space-y-2">
            <p className="font-serif italic text-base sm:text-lg text-[#211D1A] leading-relaxed">
              &ldquo;{article.summary}&rdquo;
            </p>
          </div>

          {/* 5 Core Factors Card */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8DFC9] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C94E16] uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>5 YẾU TỐ CỐT LÕI CỦA THÉP HIỀN LƯƠNG</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#FAF4EB] border border-[#E8DFC9]/60">
                <span className="font-bold text-[#211D1A]">1. Nhiệt than hầm:</span>
                <p className="text-stone-600 mt-0.5">Dùng than gỗ tràm khô, không khói muội, duy trì nhiệt đều 1000°C.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF4EB] border border-[#E8DFC9]/60">
                <span className="font-bold text-[#211D1A]">2. Mắt thợ nhìn màu:</span>
                <p className="text-stone-600 mt-0.5">Từ đỏ sẫm sang vàng rơm, chuẩn xác tới từng giây trước khi nhúng tôi.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF4EB] border border-[#E8DFC9]/60">
                <span className="font-bold text-[#211D1A]">3. Búa quai ăn nhịp:</span>
                <p className="text-stone-600 mt-0.5">Búa cái định hình vết đập, búa con san phẳng dăm thép tạo độ nén chặt.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF4EB] border border-[#E8DFC9]/60">
                <span className="font-bold text-[#211D1A]">4. Nước tôi giếng cổ:</span>
                <p className="text-stone-600 mt-0.5">Nước giếng đào sâu làng Hiền Lương pha bùn non làm hạ nhiệt thần tốc.</p>
              </div>
            </div>
          </div>

          {/* Body Paragraphs */}
          <div className="prose prose-stone max-w-none text-stone-800 text-sm sm:text-base leading-relaxed space-y-5 font-light">
            {article.contentParagraphs.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Pull Quote */}
          <div className="relative overflow-hidden rounded-2xl bg-[#211D1A] text-[#F8F5EF] p-8 border border-[#75543D]/30 shadow-md">
            <Quote className="absolute top-4 right-4 w-20 h-20 text-[#C94E16]/20 pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <p className="font-serif italic text-lg sm:text-xl text-[#F8F5EF] leading-relaxed">
                &ldquo;Cây dao Hiền Lương dù chém phải đá cũng chỉ mẻ mép chứ không bao giờ gãy vụn, liếc lại trên đá bùn là lại bén ngọt như thường.&rdquo;
              </p>
              <div className="flex items-center gap-2 text-xs text-[#C5A15B] font-semibold uppercase tracking-wider">
                <span>— Truyền khẩu dân gian vùng Sông Bồ, Phong Điền</span>
              </div>
            </div>
          </div>

          {/* Share & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-[#E8DFC9]">
            <span className="text-xs font-semibold text-[#75543D]">Chia sẻ bài viết này:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF4EB] hover:bg-[#F0E4D0] border border-[#E8DFC9] text-xs font-semibold text-[#75543D] transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#C94E16]" />}
                <span>{copied ? 'Đã sao chép liên kết' : 'Sao chép link'}</span>
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="space-y-4 pt-4">
            <h3 className="font-serif font-bold text-xl text-[#211D1A]">
              Tư Liệu & Bài Viết Liên Quan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    setActiveArticleId(rel.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer p-4 rounded-xl bg-white border border-[#E8DFC9] hover:border-[#C94E16] hover:shadow-md transition space-y-2"
                >
                  <div className="aspect-video rounded-lg overflow-hidden bg-stone-100">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#C94E16] uppercase">{rel.category}</span>
                  <h4 className="font-serif font-bold text-sm text-[#211D1A] group-hover:text-[#C94E16] transition line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2">{rel.summary}</p>
                </div>
              ))}
            </div>
          </div>

        </article>

        {/* Right Column: Sidebar (col-span-4) */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Author Card */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#C94E16]/10 border border-[#C94E16]/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-[#C94E16]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#211D1A]">
                  Ban Biên Tập Di Sản
                </h4>
                <p className="text-xs text-[#75543D]">Hiền Lương Digital Archive</p>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Nhóm nghiên cứu văn hóa dân gian phối hợp cùng Ban Quản lý Di tích Làng Rèn Hiền Lương và các bô lão tộc biểu, thu thập và xác thực tư liệu gốc qua điền dã thực tế.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#211D1A] uppercase tracking-wider text-xs border-b border-[#F0E8D9] pb-2">
              Mục Lục Tư Liệu
            </h4>
            <ul className="space-y-2 text-xs text-[#75543D]">
              <li className="hover:text-[#C94E16] cursor-pointer flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#C94E16]" />
                <span>1. Than hầm từ củi rừng & nhiệt độ</span>
              </li>
              <li className="hover:text-[#C94E16] cursor-pointer flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#C94E16]" />
                <span>2. Mắt nhìn sắc lửa thay máy đo</span>
              </li>
              <li className="hover:text-[#C94E16] cursor-pointer flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#C94E16]" />
                <span>3. Tiếng búa đực — búa cái nhịp nhàng</span>
              </li>
              <li className="hover:text-[#C94E16] cursor-pointer flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#C94E16]" />
                <span>4. Bí truyền nước tôi giếng cổ</span>
              </li>
            </ul>
          </div>

          {/* Tour CTA */}
          <div className="bg-[#211D1A] text-[#F8F5EF] rounded-2xl p-6 shadow-md border border-[#75543D]/40 space-y-4">
            <span className="text-[11px] font-bold text-[#C5A15B] uppercase tracking-widest">
              TRẢI NGHIỆM ĐIỀN DÃ
            </span>
            <h4 className="font-serif font-bold text-base text-white">
              Quan Sát Trực Tiếp Thợ Rèn Tôi Thép
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Mục sở thị khoảnh khắc nhúng lưỡi rựa đỏ hồng vào bể nước tôi sủi bọt trắng xóa và bốc khói nghi ngút tại lò rèn truyền thống.
            </p>
            <button
              onClick={() => onOpenBookingModal('Xem kỹ thuật tôi thép thực tế')}
              className="w-full py-2.5 rounded-xl bg-[#C94E16] hover:bg-[#B34211] text-white text-xs font-bold transition flex items-center justify-center gap-2"
            >
              <span>Đăng ký tham quan lò</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Làng nghề lân cận */}
          <div className="bg-white rounded-2xl border border-[#E8DFC9] p-6 shadow-sm space-y-3">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#211D1A] border-b border-[#F0E8D9] pb-2">
              Làng Nghề Lân Cận Tuyến Sông Bồ
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C94E16] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#211D1A]">Làng Đệm Bàng Phò Trạch:</span>
                  <p className="text-stone-500">Cách 4km, nghề đan đệm bàng truyền thống</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C94E16] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#211D1A]">Làng Mộc Mỹ Xuyên:</span>
                  <p className="text-stone-500">Cách 8km, nghệ nhân chạm khắc nhà rường</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C94E16] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#211D1A]">Làng Gốm Cổ Phước Tích:</span>
                  <p className="text-stone-500">Cách 18km, gốm đất nung không men</p>
                </div>
              </div>
            </div>
          </div>

        </aside>

      </div>

    </div>
  );
};
