import React, { useState } from 'react';
import { PageRoute } from '../types';
import { 
  MapPin, Clock, Search, Sparkles, Navigation, Menu, X, 
  Flame, User as UserIcon, LogOut, CheckCircle2, ChevronDown 
} from 'lucide-react';
import { User } from 'firebase/auth';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenSearch: () => void;
  onOpenAi: () => void;
  user: User | null;
  onGoogleSignIn: () => void;
  onGoogleSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onOpenAi,
  user,
  onGoogleSignIn,
  onGoogleSignOut,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navItems: { route: PageRoute; label: string; shortLabel?: string }[] = [
    { route: 'home', label: 'TRANG CHỦ' },
    { route: 'gioi-thieu', label: 'GIỚI THIỆU' },
    { route: 'quy-trinh-nghe', label: 'QUY TRÌNH NGHỀ', shortLabel: 'QUY TRÌNH' },
    { route: 'nghe-nhan', label: 'NGHỆ NHÂN' },
    { route: 'di-tich', label: 'DI TÍCH' },
    { route: 'thu-vien-anh', label: 'THƯ VIỆN ẢNH', shortLabel: 'THƯ VIỆN' },
    { route: 'cac-dong-ho', label: 'DÒNG HỌ & HÀNG KỈNH', shortLabel: 'DÒNG HỌ' },
    { route: 'lien-he', label: 'LIÊN HỆ' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F4] border-b border-[#E8DFC9] shadow-xs">
      {/* Top utility bar */}
      <div className="bg-[#211D1A] text-[#EFE9DC] text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-[#38312B]">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C94E16]" />
              <span>Phong Hiền, Phong Điền, Thừa Thiên Huế</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span>Giờ đón khách tham quan: 07:30 – 17:30</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <span className="text-[#C5A15B] text-xs">Tiếng Việt ▾</span>
            <button
              onClick={() => onNavigate('lien-he')}
              className="text-stone-300 hover:text-white hover:underline pl-3 border-l border-stone-700"
            >
              Liên hệ BQL
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-[1440px] w-full mx-auto px-2.5 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-2.5 xl:py-3 flex items-center justify-between gap-1.5 lg:gap-2 xl:gap-3">
        {/* Brand identity */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center cursor-pointer group shrink-0 py-0.5"
          title="Trang chủ Làng Hiền Lương"
        >
          <img
            src="/assets/logo-hien-luong.png"
            alt="Làng Hiền Lương — Di sản làng rèn cổ • Khởi 1471"
            className="h-10 sm:h-12 lg:h-[50px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </div>

        {/* Center navigation for desktop */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-[11px] xl:text-xs 2xl:text-[13px] font-semibold text-[#211D1A] shrink-0">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => onNavigate(item.route)}
                className={`px-1.5 xl:px-2 2xl:px-2.5 py-1.5 rounded-sm transition-all duration-150 relative whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#C94E16] font-bold'
                    : 'text-[#211D1A] hover:text-[#C94E16] hover:bg-[#F0EAE0]'
                }`}
              >
                {item.shortLabel ? (
                  <>
                    <span className="2xl:hidden">{item.shortLabel}</span>
                    <span className="hidden 2xl:inline">{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 xl:left-2 xl:right-2 h-[2px] bg-[#C94E16] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-1.5 xl:gap-2 shrink-0">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-1.5 sm:p-2 text-[#75543D] hover:text-[#C94E16] hover:bg-[#EFE9DC] rounded-full transition-colors shrink-0"
            title="Tìm kiếm tư liệu và bài viết"
            aria-label="Tìm kiếm"
          >
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* AI Assistant button */}
          <button
            onClick={onOpenAi}
            className="hidden md:inline-flex items-center gap-1.5 px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-full border border-[#C94E16] text-[#C94E16] bg-amber-50/60 hover:bg-[#C94E16] hover:text-white transition-all text-[11px] xl:text-xs font-semibold shadow-xs whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#C94E16]" />
            <span className="hidden 2xl:inline">Hư lão số AI</span>
            <span className="hidden xl:inline 2xl:hidden">Hư lão AI</span>
          </button>

          {/* Direction CTA */}
          <button
            onClick={() => onNavigate('lien-he')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#C94E16] hover:bg-[#B04212] text-white px-2.5 xl:px-3.5 py-1.5 rounded-md font-semibold text-[11px] xl:text-xs tracking-wide shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
          >
            <Navigation className="w-3.5 h-3.5 shrink-0" />
            <span>CHỈ ĐƯỜNG</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-[#211D1A] hover:bg-[#EFE9DC] rounded-md transition-colors shrink-0"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F4] border-t border-[#E8DFC9] px-5 py-4 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => {
                  onNavigate(item.route);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === item.route
                    ? 'bg-[#C94E16] text-white font-bold'
                    : 'text-[#211D1A] hover:bg-[#EFE9DC]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8DFC9] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenAi();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-amber-100 text-[#C94E16] border border-[#C94E16] font-semibold text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Trò chuyện cùng Hư lão số AI</span>
            </button>

            <button
              onClick={() => {
                onNavigate('lien-he');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-[#C94E16] text-white text-xs font-semibold"
            >
              <Navigation className="w-4 h-4" />
              <span>Liên hệ & Chỉ đường BQL</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
