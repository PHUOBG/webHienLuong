import React from 'react';
import { PageRoute } from '../types';
import { Flame, MapPin, Phone, Mail, Globe, Award, Calendar, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <footer className="w-full bg-[#FAF8F4] border-t border-[#E8DFC9] text-[#211D1A] pt-12 pb-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#E8DFC9]">
          
          {/* Brand info column */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="cursor-pointer inline-block"
              title="Làng Hiền Lương"
            >
              <img
                src="/assets/logo-hien-luong.png"
                alt="Làng Hiền Lương — Di sản làng rèn cổ • Khởi 1471"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#5C4D43] leading-relaxed">
              Cổng thông tin quảng bá và bảo tồn Di sản văn hóa phi vật thể Làng nghề truyền thống rèn Hiền Lương. Nơi lưu giữ tinh hoa kỹ nghệ rèn sắt, đe búa trầm tích bên dòng sông Bồ qua bao thế kỷ.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#EFE9DC] text-[#75543D] text-[11px] font-medium border border-[#E3DAC8]">
                <Award className="w-3 h-3 text-[#C94E16]" />
                Di tích cấp Quốc gia
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#EFE9DC] text-[#75543D] text-[11px] font-medium border border-[#E3DAC8]">
                <Calendar className="w-3 h-3 text-[#C5A15B]" />
                Di sản 500 năm
              </span>
            </div>
          </div>

          {/* Management Board Contact */}
          <div className="md:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="font-serif font-bold text-sm tracking-wide text-[#211D1A] uppercase border-b border-[#C94E16] pb-1.5 inline-block">
              BAN QUẢN LÝ DI TÍCH LÀNG NGHỀ
            </h4>

            <ul className="space-y-2.5 text-[#5C4D43]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C94E16] shrink-0 mt-0.5" />
                <span>Làng Hiền Lương, xã Phong Hiền, huyện Phong Điền, tỉnh Thừa Thiên Huế</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C94E16] shrink-0" />
                <span>(+84) 0234 3551234 – Hotline: <strong>0914 205 678</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C94E16] shrink-0" />
                <span>bql.disan@hienluongforge.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C94E16] shrink-0" />
                <span>www.hienluongforge.vn</span>
              </li>
            </ul>
          </div>

          {/* Visiting Schedule */}
          <div className="md:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="font-serif font-bold text-sm tracking-wide text-[#211D1A] uppercase border-b border-[#C94E16] pb-1.5 inline-block">
              ĐÓN KHÁCH THAM QUAN
            </h4>

            <div className="bg-[#FAF4EB] p-3.5 rounded-lg border border-[#E8DFC9] space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-[#211D1A]">
                <span>Thứ Hai – Chủ Nhật:</span>
                <span className="text-[#C94E16]">07:30 – 17:30</span>
              </div>
              <p className="text-[11px] text-[#75543D] leading-relaxed pt-1 border-t border-[#E8DFC9]">
                Các đoàn nghiên cứu, học tập và trải nghiệm đập búa lò rèn vui lòng liên hệ trước 24 giờ với Ban Quản lý để được chuẩn bị chu đáo.
              </p>
              <button
                onClick={onOpenBookingModal}
                className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold text-[#C94E16] hover:text-[#B04212] hover:underline"
              >
                <span>Đăng ký tham quan đoàn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#75543D]">
          <p>© 2024 Cổng Thông Tin Di Sản Làng Rèn Hiền Lương. Bảo lưu mọi quyền.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('gioi-thieu')} className="hover:underline">Giới thiệu</button>
            <button onClick={() => onNavigate('di-tich')} className="hover:underline">Di tích</button>
            <button onClick={() => onNavigate('lien-he')} className="hover:underline">Bản đồ</button>
            <span className="text-stone-400">|</span>
            <p className="text-[11px] text-[#A3826C]">Đồng hành bảo tồn Di sản văn hóa làng nghề truyền thống Huế</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
