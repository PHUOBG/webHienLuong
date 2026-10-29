import React from 'react';
import { PageRoute, GalleryItem } from '../types';
import { 
  CRAFT_STEPS, PRODUCTS, ARTISANS, HISTORIC_SITES, 
  ARTICLES, GALLERY_ITEMS, VILLAGE_INFO 
} from '../data/villageData';
import { 
  Flame, ArrowRight, ShieldCheck, MapPin, Sparkles, 
  ChevronRight, Calendar, Eye, Compass, HeartHandshake, BookOpen 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (type?: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenAi: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingModal,
  onOpenLightbox,
  onOpenAi,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-[#211D1A] text-white">
        {/* Hero Background with authentic forge photo and warm overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aistudio/c99QpHCNl6N_8DDZTmgsVqZnAC5TtCgEA_m9CbDwYir8w59UjA3rj7UrCUfw3xOSdLq2h1TQSqTFciZoUW1Mv09wCI2MNUFvZHIUx_W1R2H61nqKZHSuVOPe91NQYLd_PAJ7zLPE2nEKXdBDTBnEzae8K01sUPw3BPkWRen8Ob7yIymJ2nPI5QAgwJHyWaZn_5e83773e.jpg"
            alt="Làng rèn Hiền Lương bên dòng sông Bồ"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-75 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A] via-[#211D1A]/70 to-[#211D1A]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C94E16]/20 border border-[#C94E16]/40 text-[#C5A15B] text-xs font-bold tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5 text-[#C94E16]" />
              <span>DI SẢN • LÀNG NGHỀ • CỘI NGUỒN</span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F8F5EF] leading-[1.15] tracking-tight">
              &ldquo;Hiền Lương — Nơi lửa nghề gìn giữ hồn quê&rdquo;
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
              Từ tiếng búa bên lò rèn đến những câu chuyện truyền đời, mỗi trang tư liệu là một nhịp cầu nối người Hiền Lương với quê hương.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('gioi-thieu')}
                className="px-6 py-3 rounded-lg bg-[#C94E16] hover:bg-[#B04212] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#C94E16]/30 transition-all flex items-center gap-2 group"
              >
                <span>Khám phá làng rèn</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('di-tich')}
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-[#F8F5EF] border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all"
              >
                Tìm về cội nguồn
              </button>

              <button
                onClick={onOpenAi}
                className="px-4 py-3 rounded-lg bg-[#FAF8F4]/10 hover:bg-[#FAF8F4]/20 text-amber-200 border border-amber-300/30 font-semibold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Hỏi Hư lão số AI</span>
              </button>
            </div>
          </div>

          {/* Quick stats ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 border-t border-white/10">
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">500+ Năm</p>
              <p className="text-xs text-stone-400">Lửa lò truyền đời bên sông Bồ</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">14 Lò rèn</p>
              <p className="text-xs text-stone-400">Hộ gia đình giữ lửa đỏ mỗi sáng</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">09 Xóm rèn</p>
              <p className="text-xs text-stone-400">Chuỗi cung ứng kim khí Cố Đô</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">Năm 1992</p>
              <p className="text-xs text-stone-400">Di tích Kiến trúc Nghệ thuật Quốc gia</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPLORE THE VILLAGE (Editorial Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C94E16]">
              KHÁM PHÁ DI SẢN
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#211D1A] mt-1">
              Không Gian Ký Ức & Văn Hóa Hiền Lương
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#75543D] max-w-md">
            Mỗi góc làng, ngôi chùa cổ hay tiếng đập búa nơi bến sông đều chuyên chở một kho tàng lịch sử trầm tích xứ Huế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Lịch sử & Cụ Thủy tổ */}
          <div 
            onClick={() => onNavigate('gioi-thieu')}
            className="group bg-[#FAF8F4] border border-[#E8DFC9] rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col"
          >
            <div className="h-52 overflow-hidden relative">
              <img
                src="/assets/aistudio/__n__ng__ang_r_n_3d1f5391.jpg"
                alt="Cổng làng Hiền Lương"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-[#211D1A]/80 text-[#C5A15B] text-[11px] font-bold">
                LỊCH SỬ KHỞI NGUỒN
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#211D1A] group-hover:text-[#C94E16] transition-colors mb-2">
                  Lịch Sử Hình Thành & Cụ Thủy Tổ Hoàng Đình Chèm
                </h3>
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  Từ thế kỷ XV thời vua Lê Thánh Tông, bước chân khai hoang của cụ Thủy tổ đã đặt nền móng cho nghệ thuật luyện kim nức tiếng đất Cố Đô.
                </p>
              </div>
              <div className="pt-4 mt-2 border-t border-[#E8DFC9] flex items-center justify-between text-xs font-bold text-[#C94E16]">
                <span>Xem chi tiết dòng sử</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Quy trình tôi thép bùn non */}
          <div 
            onClick={() => onNavigate('quy-trinh-nghe')}
            className="group bg-[#FAF8F4] border border-[#E8DFC9] rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col"
          >
            <div className="h-52 overflow-hidden relative">
              <img
                src="/assets/aistudio/2_ng__i__ang_r_n_bd32c118.jpg"
                alt="Quy trình rèn Hiền Lương"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-[#C94E16] text-white text-[11px] font-bold">
                BÍ THUẬT GIA TRUYỀN
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#211D1A] group-hover:text-[#C94E16] transition-colors mb-2">
                  Quy Trình 5 Công Đoạn Đập Búa & Trui Thép Bùn Non
                </h3>
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  Bí quyết kết hợp nước phù sa sông Bồ làm dịu nhiệt nung than 1.000°C, cho ra đời những lưỡi dao chém sắt ngọt lịm không quằn mẻ.
                </p>
              </div>
              <div className="pt-4 mt-2 border-t border-[#E8DFC9] flex items-center justify-between text-xs font-bold text-[#C94E16]">
                <span>Khám phá 5 công đoạn</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Quần thể di tích Giác Lương Tự */}
          <div 
            onClick={() => onNavigate('di-tich')}
            className="group bg-[#FAF8F4] border border-[#E8DFC9] rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col"
          >
            <div className="h-52 overflow-hidden relative">
              <img
                src="/assets/aistudio/_ang_r_n_2_9d85b900.jpg"
                alt="Chùa Giác Lương Tự"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-[#75543D] text-amber-200 text-[11px] font-bold">
                DI TÍCH QUỐC GIA 1992
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#211D1A] group-hover:text-[#C94E16] transition-colors mb-2">
                  Chùa Cổ Giác Lương & Nhà Thờ Tổ Nghề Rèn
                </h3>
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  Ngôi chùa rường gỗ lim 500 năm tuổi thời Lê Trung Hưng và Nhà Thờ Tổ lưu giữ bức hoành phi &ldquo;Nghiệp Lưu Tổ Đức&rdquo; linh thiêng.
                </p>
              </div>
              <div className="pt-4 mt-2 border-t border-[#E8DFC9] flex items-center justify-between text-xs font-bold text-[#C94E16]">
                <span>Chiêm bái di tích</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE BLACKSMITHING TRADITION (Highlight Craft) */}
      <section className="bg-[#FAF4EB] py-16 border-y border-[#E8DFC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left image feature */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8DFC9]">
                <img
                  src="/assets/aistudio/h_ng_k_nh_8f6265a8.jpg"
                  alt="Bếp lò than củi và ấm nước sôi xóm rèn"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="text-xs font-mono text-[#C5A15B]">TƯ LIỆU THỰC ĐỊA XƯỞNG RÈN</p>
                    <p className="font-serif text-lg font-bold">Bếp lò than muồng và ấm nước sôi tiếp lửa</p>
                    <p className="text-xs text-stone-300">Nơi nuôi dưỡng thỏi sắt nung đỏ trước nhịp quai búa tạ 6kg.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right craft explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#C94E16] uppercase tracking-wider">
                  QUY CHUẨN KỸ NGHỆ CỐ ĐÔ
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#211D1A]">
                  5 Bước Rèn Đạt Đỉnh Sắc Bén & Độ Dẻo Dai
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Kỹ nghệ rèn sắt thép thủ công đòi hỏi kinh nghiệm tôi luyện, canh lửa than và nhịp đập búa đồng bộ của người thợ già. Từng nhát búa giáng xuống không chỉ uốn nắn thỏi thép nóng đỏ mà còn truyền giữ hồn cốt tinh hoa của làng nghề nửa thiên niên kỷ.
                </p>
              </div>

              {/* Steps overview */}
              <div className="space-y-3">
                {CRAFT_STEPS.slice(0, 3).map((step) => (
                  <div
                    key={step.stepNumber}
                    onClick={() => onNavigate('quy-trinh-nghe')}
                    className="p-3.5 bg-white rounded-lg border border-[#E8DFC9] flex items-start gap-3 hover:border-[#C94E16] cursor-pointer transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#C94E16] text-white flex items-center justify-center font-serif font-bold text-xs shrink-0">
                      {step.stepNumber}
                    </span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#211D1A]">
                        {step.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 line-clamp-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('quy-trinh-nghe')}
                  className="px-5 py-2.5 rounded-lg bg-[#C94E16] hover:bg-[#B04212] text-white text-xs font-bold flex items-center gap-2"
                >
                  <span>Xem trọn vẹn 5 công đoạn</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenBookingModal('Trải nghiệm đập búa lò rèn')}
                  className="px-5 py-2.5 rounded-lg bg-white border border-[#C94E16] text-[#C94E16] hover:bg-amber-50 text-xs font-bold"
                >
                  Đăng ký thử quai búa
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 4 SIGNATURE PRODUCTS (Showcase) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C94E16]">
            SẢN VẬT TIÊU BIỂU
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#211D1A]">
            Tinh Hoa Dao Kéo & Nông Cụ Lò Rèn
          </h2>
          <p className="text-xs sm:text-sm text-[#75543D]">
            Độ bền được chứng minh qua nhiều thế hệ canh tác nông ngư cụ vùng đồng bằng xứ Huế.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#FAF8F4] border border-[#E8DFC9] rounded-xl p-5 hover:shadow-md hover:border-[#C94E16] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#75543D] uppercase">
                    {prod.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-[#C94E16] text-xs font-bold">
                    {prod.hardness}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-[#211D1A]">
                  {prod.name}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {prod.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFC9] text-[11px] text-[#75543D] space-y-1">
                <p><strong>Kích thước:</strong> {prod.specs.dimensions}</p>
                <p><strong>Vật liệu:</strong> {prod.specs.material}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: ARTISANS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#211D1A] rounded-2xl text-white p-6 sm:p-10 lg:p-12 overflow-hidden relative">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A15B]">
              NGHỆ NHÂN & NGƯỜI GIỮ LỬA
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-amber-100">
              Những Bàn Tay Giữ Hồn Sắt Thép Bên Dòng Sông Bồ
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Làng hiện còn hơn chục lò rèn đỏ lửa mỗi sáng, nơi các cụ cao niên vẫn miệt mài truyền dạy ngọn lửa nghề cho thế hệ con cháu. Mỗi nhát búa quai xuống đe không chỉ tôi luyện ra những lưỡi dao sắc ngọt, mà còn là bản trường ca kiên trinh giữ vẹn nguyên kỹ nghệ rèn thủ công nửa thiên niên kỷ.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => onNavigate('nghe-nhan')}
                className="px-5 py-2.5 rounded-lg bg-[#C94E16] hover:bg-[#B04212] text-white text-xs font-bold flex items-center gap-2"
              >
                <span>Gặp gỡ các nghệ nhân</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenBookingModal('Trải nghiệm quai búa cùng nghệ nhân')}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold"
              >
                Đăng ký trải nghiệm tại lò
              </button>
            </div>
          </div>

          {/* Quick artisan thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-white/10">
            {ARTISANS.map((art) => (
              <div
                key={art.id}
                onClick={() => onNavigate('nghe-nhan')}
                className="group cursor-pointer space-y-2 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto overflow-hidden border-2 border-[#C5A15B] group-hover:scale-105 transition-transform">
                  <img src={art.image} alt={art.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">{art.name}</p>
                  <p className="text-[11px] text-stone-400">{art.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LATEST ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C94E16]">
              TƯ LIỆU & BÀI VIẾT
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#211D1A] mt-1">
              Bài Viết Mới Về Di Sản Làng Rèn
            </h2>
          </div>
          <button
            onClick={() => onNavigate('tin-tuc-chi-tiet')}
            className="text-xs font-bold text-[#C94E16] hover:underline flex items-center gap-1"
          >
            <span>Đọc tất cả</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate('tin-tuc-chi-tiet')}
              className="bg-[#FAF8F4] border border-[#E8DFC9] rounded-xl overflow-hidden hover:shadow-md cursor-pointer transition-all flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#211D1A]/80 text-[#C5A15B] text-[10px] font-bold">
                  {article.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-[#75543D] mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C94E16]" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#C5A15B]" /> {article.views} lượt xem
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-[#211D1A] group-hover:text-[#C94E16] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mt-2">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8DFC9] flex items-center justify-between text-xs font-bold text-[#C94E16]">
                  <span>Đọc tiếp bài viết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 7: MEDIA GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C94E16]">
              KHO TƯ LIỆU SỐ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#211D1A] mt-1">
              Hình Ảnh Tư Liệu Làng Rèn & Đời Sống Sông Bồ
            </h2>
          </div>
          <button
            onClick={() => onNavigate('thu-vien-anh')}
            className="text-xs font-bold text-[#C94E16] hover:underline flex items-center gap-1"
          >
            <span>Mở toàn bộ thư viện</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.slice(0, 8).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-xl overflow-hidden aspect-4/3 bg-stone-200 cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between">
                <span className="self-start text-[10px] font-bold px-2 py-0.5 rounded bg-[#C94E16] text-white">
                  {item.code}
                </span>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">{item.title}</p>
                  <p className="text-[10px] text-stone-300 truncate mt-0.5">{item.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: COMMUNITY CONTRIBUTION & EXPERIENCE CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#FAF4EB] border border-[#E8DFC9] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#211D1A]">
              Chung Tay Bảo Tồn & Đóng Góp Ký Ức Làng Rèn
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Quý kiều bào, các cụ cao niên và các nhà nghiên cứu có hình ảnh, gia phả hay hiện vật cổ kính về làng rèn Hiền Lương xin vui lòng gửi về Ban Quản Lý để số hóa và lưu giữ muôn đời.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('thu-vien-anh')}
              className="px-5 py-2.5 rounded-lg bg-[#211D1A] hover:bg-[#342D28] text-white text-xs font-bold flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4 text-[#C5A15B]" />
              <span>Gửi tư liệu đóng góp</span>
            </button>
            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 rounded-lg bg-[#C94E16] hover:bg-[#B04212] text-white text-xs font-bold flex items-center gap-2"
            >
              <span>Đăng ký tham quan</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
