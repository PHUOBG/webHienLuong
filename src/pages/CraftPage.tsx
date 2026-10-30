import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CRAFT_STEPS, PRODUCTS } from '../data/villageData';
import { 
  Flame, Award, ArrowRight, Play, CheckCircle2, 
  Sparkles, Shield, Wrench, Thermometer, Hammer, Layers, Quote 
} from 'lucide-react';

interface CraftPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (type?: string) => void;
}

export const CraftPage: React.FC<CraftPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#75543D]">
        <button onClick={() => onNavigate('home')} className="hover:underline hover:text-[#C94E16]">Trang chủ</button>
        <span>/</span>
        <span className="font-semibold text-[#211D1A]">Quy trình nghề</span>
      </nav>

      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#C94E16] uppercase tracking-wider">
          <Flame className="w-4 h-4" />
          <span>BÍ QUYẾT 500 NĂM BÊN DÒNG SÔNG BỒ</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211D1A] tracking-tight">
            Quy Trình 5 Công Đoạn Nghề Rèn Hiền Lương
          </h1>
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <span className="px-3 py-1 rounded bg-[#FAF4EB] border border-[#E8DFC9] text-xs font-semibold text-[#75543D]">
              Di sản phi vật thể quốc gia
            </span>
            <span className="px-3 py-1 rounded bg-[#C94E16] text-white text-xs font-bold">
              Thủ công 100%
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 max-w-4xl leading-relaxed pt-2">
          Kỹ nghệ rèn sắt thép thủ công đòi hỏi kinh nghiệm tôi luyện, canh lửa than và nhịp đập búa đồng bộ của người thợ già. Từng nhát búa giáng xuống không chỉ uốn nắn thỏi thép nóng đỏ mà còn truyền giữ hồn cốt tinh hoa của làng nghề nửa thiên niên kỷ.
        </p>
      </div>

      {/* Main Grid: 5 Steps & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: 5 Steps (col-span-8) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Photo Banner: Bếp Lò Than Củi */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E8DFC9] shadow-md group">
            <img
              src="/assets/aistudio/h_ng_k_nh_8f6265a8.jpg"
              alt="Bếp Lò Than Củi & Ấm Nước Sôi"
              className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="self-start px-2.5 py-1 rounded-sm bg-[#C94E16] text-white text-[10px] font-bold tracking-wider mb-2">
                TƯ LIỆU THỰC ĐỊA XƯỞNG RÈN
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-amber-100">
                Bếp Lò Than Củi & Ấm Nước Sôi
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-xl mt-1 leading-relaxed">
                Ngọn lửa than muồng giữ ấm không gian và nuôi dưỡng thỏi sắt trước giờ dập búa.
              </p>
            </div>
          </div>

          {/* Section header: 5 Bước Rèn */}
          <div className="flex items-center justify-between border-b border-[#E8DFC9] pb-3 pt-4">
            <div>
              <span className="text-[11px] font-bold text-[#C94E16] uppercase tracking-wider">
                QUY CHUẨN KỸ NGHỆ
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#211D1A]">
                5 Bước Rèn Đạt Đỉnh Sắc Bén
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              Quy trình chuẩn xưởng Cố Đô
            </span>
          </div>

          {/* Step 01 */}
          <div className="bg-white border border-[#E8DFC9] rounded-xl p-5 sm:p-6 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C94E16]">01</span>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#211D1A]">
                    Chọn & Cắt Phôi Thép Vụn
                  </h3>
                  <p className="text-xs text-[#75543D]">Phôi thép nhíp chọn lọc kĩ lưỡng</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#EFE9DC] text-[#75543D] uppercase">
                GIAI ĐOẠN CHUẨN BỊ
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Phân loại mác thép đàn hồi, dẻo dai từ các mảnh nhíp ô tô hoặc sắt thanh đặc chủng. Thợ cắt thành từng đoạn phôi chuẩn tỉ lệ độ dày theo từng chủng loại nông cụ.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-[#75543D]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C94E16]" /> Thép nhíp Nga / Nhật
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C94E16]" /> Cắt nguội chuẩn ly
              </span>
            </div>
          </div>

          {/* Step 02 (with photo) */}
          <div className="bg-white border border-[#E8DFC9] rounded-xl p-5 sm:p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C94E16]">02</span>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#211D1A]">
                    Nung Than Rực Hồng (850°C – 1.000°C)
                  </h3>
                  <p className="text-xs text-[#75543D]">Canh lửa than hồng đạt sắc chuối chín</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-amber-100 text-[#C94E16] uppercase">
                ĐIỂM NHIỆT CỐT LÕI
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Đưa phôi vào tâm lò than muồng đượm khói, thụt gió đều tay canh ngọn lửa đạt sắc hồng cam &ldquo;màu hoa đào&rdquo; đặc trưng trước khi thép mềm dẻo tuyệt đối.
            </p>

            <div className="rounded-lg overflow-hidden relative border border-[#E8DFC9]">
              <img
                src="/assets/aistudio/ng__i__ang_r_n_c7d2dedb.jpg"
                alt="Nhiệt độ đạt chuẩn 950°C - Sắc lửa hoa đào"
                className="w-full h-56 object-cover"
              />
              <span className="absolute bottom-2 left-2 text-[11px] bg-black/70 text-amber-200 px-2.5 py-1 rounded">
                Nhiệt độ đạt chuẩn 950°C — Sắc lửa hoa đào
              </span>
            </div>
          </div>

          {/* Step 03 (with photo) */}
          <div className="bg-white border border-[#E8DFC9] rounded-xl p-5 sm:p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C94E16]">03</span>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#211D1A]">
                    Đập Thô & Quai Búa Song Gia
                  </h3>
                  <p className="text-xs text-[#75543D]">Búa cả dẫn nhịp, búa con dội chuẩn xác</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-amber-100 text-[#75543D] uppercase">
                ĐỒNG BỘ NHỊP ĐIỆU
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Nhịp búa đập hiệp đồng ăn khớp giữa <strong>thợ cả gõ búa con dẫn đường</strong> và <strong>thợ phụ quai búa tạ 6kg</strong> dội xuống. Sắt giãn nở, kết tinh hạt kim loại sít chặt, loại bỏ xỉ than.
            </p>

            <div className="rounded-lg overflow-hidden relative border border-[#E8DFC9]">
              <img
                src="/assets/aistudio/2_ng__i__ang_r_n_bd32c118.jpg"
                alt="Nhịp búa song gia: Một thợ gõ nhịp dẫn – Một thợ quai búa tạ"
                className="w-full h-56 object-cover"
              />
              <span className="absolute bottom-2 left-2 text-[11px] bg-black/70 text-white px-2.5 py-1 rounded">
                Nhịp búa song gia: Một thợ gõ nhịp dẫn — Một thợ quai búa tạ
              </span>
            </div>
          </div>

          {/* Step 04 */}
          <div className="bg-white border border-[#E8DFC9] rounded-xl p-5 sm:p-6 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C94E16]">04</span>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#211D1A]">
                    Mài Bén & Dũa Gọt Cân Đối
                  </h3>
                  <p className="text-xs text-[#75543D]">Tạo góc vát và sống dao hoàn hảo</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#EFE9DC] text-[#75543D] uppercase">
                CĂN CHỈNH HÌNH THỂ
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Tạo sống dao thẳng tắp, góc vát sắc bén đối xứng hai bên. Thợ dùng giũa thép và đá mài bùn loại bỏ bavia, kiểm tra mặt phẳng trước khi tôi nước.
            </p>

            <div className="flex flex-wrap gap-4 pt-1 text-xs text-[#75543D]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C94E16]" /> Góc vát 18° – 22°
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C94E16]" /> Sống dao thẳng tuyệt đối
              </span>
            </div>
          </div>

          {/* Step 05 */}
          <div className="bg-amber-50/60 border border-amber-300/80 rounded-xl p-5 sm:p-6 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C94E16]">05</span>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#211D1A]">
                    Tôi Thép Bí Truyền Bằng Nước Bùn Non Sông Bồ
                  </h3>
                  <p className="text-xs text-[#75543D]">Đặc sản luyện kim độc nhất vô nhị xứ Huế</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#C94E16] text-white uppercase">
                BÍ THUẬT GIA TRUYỀN
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Yếu tố tạo nên độ dẻo quánh độc nhất: Nhúng chìm lưỡi dao nung vào thùng nước pha phù sa bùn non ven sông Bồ. Tốc độ tản nhiệt dịu hơn nước lã, giúp lưỡi đanh cứng mà ruột vẫn dẻo mềm, <strong>&ldquo;chém sắt ngọt lịm không quằn mẻ&rdquo;</strong>.
            </p>

            <div className="p-3 bg-white/80 rounded-lg border border-amber-200 text-xs text-[#75543D] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C94E16] shrink-0" />
              <span>Đạt chỉ số 58 – 60 HRC: Cắt gỗ lim ngọt mát, sử dụng bền bỉ hàng chục năm không cần mài lại nhiều lần.</span>
            </div>
          </div>

        </div>

        {/* Right Column: Sidebar (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Widget 1: Thông số kỹ thuật nghề */}
          <div className="bg-white border border-[#E8DFC9] rounded-xl p-5 shadow-xs space-y-4">
            <h3 className="font-serif font-bold text-base text-[#211D1A] flex items-center gap-2 border-b border-[#E8DFC9] pb-3">
              <Wrench className="w-4 h-4 text-[#C94E16]" />
              THÔNG SỐ KỸ THUẬT NGHỀ
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-stone-100">
                <span className="text-stone-500 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C94E16]" /> Độ cứng lưỡi cắt:
                </span>
                <span className="font-bold text-[#211D1A]">58 – 60 HRC</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-stone-100">
                <span className="text-stone-500 flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-[#C94E16]" /> Nhiệt than nung:
                </span>
                <span className="font-bold text-[#211D1A]">850°C – 1.000°C</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-stone-100">
                <span className="text-stone-500 flex items-center gap-1.5">
                  <Hammer className="w-3.5 h-3.5 text-[#C94E16]" /> Trọng lượng búa tạ:
                </span>
                <span className="font-bold text-[#211D1A]">5 – 7 kg</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-stone-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C94E16]" /> Môi trường tôi:
                </span>
                <span className="font-bold text-[#C94E16]">Bùn non Sông Bồ</span>
              </div>
            </div>

            <button
              onClick={() => onOpenBookingModal('Trải nghiệm đập búa tại lò')}
              className="w-full py-2.5 rounded-lg bg-[#C94E16] hover:bg-[#B04212] text-white text-xs font-bold tracking-wide transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <Hammer className="w-3.5 h-3.5" />
              <span>TRẢI NGHIỆM ĐẬP BÚA TẠI LÒ</span>
            </button>
          </div>

          {/* Widget 2: Dụng cụ xưởng rèn */}
          <div className="bg-white border border-[#E8DFC9] rounded-xl p-5 shadow-xs space-y-4">
            <h3 className="font-serif font-bold text-base text-[#211D1A] flex items-center gap-2 border-b border-[#E8DFC9] pb-3">
              <Sparkles className="w-4 h-4 text-[#C94E16]" />
              DỤNG CỤ XƯỞNG RÈN
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <h4 className="font-bold text-[#211D1A]">Đe Thép Cổ 100 Năm</h4>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Khối thép đúc nặng trên 80kg chôn chặt vào bệ gỗ lim tạo lực đàn hồi trầm bổng khi búa nện.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-stone-100">
                <h4 className="font-bold text-[#211D1A]">Kẹp Lửa Mỏ Quạ</h4>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Cán dài cách nhiệt giúp nghệ nhân gắp trọn thỏi thép nung đỏ xoay chuyển 360 độ an toàn.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-stone-100">
                <h4 className="font-bold text-[#211D1A]">Bễ Thụt Ống Gỗ Truyền Thống</h4>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Ống bễ đôi bằng thân gỗ khoét rỗng, cung cấp luồng gió liên tục thổi bùng ngọn lửa than củi.
                </p>
              </div>
            </div>
          </div>

          {/* Widget 3: Thước Phim Tư Liệu */}
          <div className="bg-white border border-[#E8DFC9] rounded-xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-base text-[#211D1A] flex items-center gap-1.5">
                <Play className="w-4 h-4 text-[#C94E16]" />
                THƯỚC PHIM TƯ LIỆU
              </h3>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">
                HD 1080P
              </span>
            </div>

            {/* Video preview thumbnail */}
            <div 
              onClick={() => setVideoModalOpen(true)}
              className="relative rounded-lg overflow-hidden border border-[#E8DFC9] cursor-pointer group"
            >
              <img
                src="/assets/aistudio/2_ng__i__ang_r_n_bd32c118.jpg"
                alt="Thước phim tư liệu làng rèn"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#C94E16] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[11px] text-white font-medium bg-black/60 px-2 py-1 rounded">
                <span>Nhịp búa song gia xưởng cụ Hoàng</span>
                <span>03:45</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed italic">
              Trích đoạn ghi âm thanh thực địa: tiếng gió rít ống bễ, tiếng đe vang giòn và âm rít tôi bùn non đặc trưng của Hiền Lương.
            </p>
          </div>

        </div>

      </div>

      {/* SECTION: 4 SẢN PHẨM TIÊU BIỂU LÒ RÈN */}
      <section className="space-y-6 pt-6 border-t border-[#E8DFC9]">
        <div>
          <span className="text-xs font-bold text-[#C94E16] uppercase tracking-wider">
            THÀNH PHẨM TINH HOA
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#211D1A]">
            4 Sản Phẩm Tiêu Biểu Lò Rèn
          </h2>
          <p className="text-xs sm:text-sm text-[#75543D] mt-1">
            Độ bền được chứng minh qua nhiều thế hệ nông ngư cụ xứ Huế
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white border border-[#E8DFC9] rounded-xl p-5 space-y-3 shadow-xs hover:border-[#C94E16] transition-colors"
            >
              <div className="flex justify-between items-center text-xs">
                <span className="text-[11px] font-bold text-[#75543D] uppercase">
                  {prod.category}
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-100 text-[#C94E16] font-bold">
                  {prod.hardness}
                </span>
              </div>

              <h3 className="font-serif font-bold text-base text-[#211D1A]">
                {prod.name}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed">
                {prod.description}
              </p>

              <div className="pt-3 border-t border-stone-100 text-[11px] text-[#75543D] space-y-1">
                <p><strong>Thông số:</strong> {prod.specs.dimensions}</p>
                <p><strong>Vật liệu:</strong> {prod.specs.material}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Quote & Navigation CTA Banner */}
      <div className="bg-[#FAF4EB] border border-[#E8DFC9] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-3">
          <Quote className="w-8 h-8 text-[#C94E16] shrink-0 opacity-80" />
          <div>
            <p className="font-serif italic text-base sm:text-lg text-[#211D1A]">
              &ldquo;Sắt quấn bùn sông Bồ, ngàn năm còn giữ lửa. Tay thợ gõ nhịp búa, vạn thuở tiếng rền vang.&rdquo;
            </p>
            <p className="text-xs text-[#75543D] mt-1">— TỤC TRUYỀN THỢ RÈN LÀNG HIỀN LƯƠNG</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('nghe-nhan')}
            className="px-4 py-2 rounded-lg bg-white border border-[#E8DFC9] hover:bg-stone-50 text-xs font-bold text-[#211D1A]"
          >
            Tìm hiểu Nghệ Nhân →
          </button>
          <button
            onClick={() => onNavigate('di-tich')}
            className="px-5 py-2.5 rounded-lg bg-[#C94E16] hover:bg-[#B04212] text-white text-xs font-bold"
          >
            Xem Di Tích Đình Làng
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#211D1A] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-stone-700 p-4 space-y-3">
            <div className="flex items-center justify-between text-white">
              <h4 className="font-serif font-bold text-base">Thước Phim: Nhịp Búa Lò Rèn Hiền Lương</h4>
              <button onClick={() => setVideoModalOpen(false)} className="text-stone-400 hover:text-white text-sm">✕ Đóng</button>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center relative">
              <img src="/assets/aistudio/2_ng__i__ang_r_n_bd32c118.jpg" alt="Video cover" className="w-full h-full object-cover opacity-60" />
              <div className="text-center text-white space-y-2 p-6 z-10">
                <Play className="w-12 h-12 text-[#C94E16] mx-auto animate-pulse" />
                <p className="text-sm font-semibold">Tư liệu ghi hình thực địa xưởng rèn sông Bồ</p>
                <p className="text-xs text-stone-300">Đăng ký tham quan để trải nghiệm trực tiếp cùng nghệ nhân lão làng.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
