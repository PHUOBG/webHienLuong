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

          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            <span className="text-[#C5A15B] hidden sm:inline">Tiếng Việt ▾</span>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-1.5 text-stone-200 hover:text-white transition-colors py-0.5 px-2 rounded-sm hover:bg-[#342D28]"
                >
                  <img
                    src={user.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&auto=format&fit=crop&q=80'}
                    alt={user.displayName || 'Tài khoản'}
                    className="w-4 h-4 rounded-full object-cover border border-[#C5A15B]"
                  />
                  <span className="max-w-[100px] truncate">{user.displayName || user.email}</span>
                  <ChevronDown className="w-3 h-3 text-stone-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-56 bg-[#211D1A] border border-[#75543D] rounded-md shadow-xl py-2 z-50 text-xs">
                    <div className="px-3 py-1.5 border-b border-[#38312B] text-stone-300">
                      <p className="font-semibold text-[#F8F5EF]">{user.displayName}</p>
                      <p className="text-[11px] text-stone-400 truncate">{user.email}</p>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> Đã kết nối Gmail gửi thư
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onGoogleSignOut();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-red-300 hover:bg-[#38312B] flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" /> Đăng xuất Google
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onGoogleSignIn}
                className="flex items-center gap-1.5 text-amber-200 hover:text-amber-100 hover:underline transition-colors"
                title="Đăng nhập tài khoản Google để gửi đăng ký tham quan qua Gmail"
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>Đăng nhập Gmail</span>
              </button>
            )}

            <button
              onClick={() => onNavigate('lien-he')}
              className="text-stone-300 hover:text-white hover:underline pl-2 border-l border-stone-700"
            >
              Liên hệ BQL
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 lg:px-6 xl:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-1.5 lg:gap-3">
        {/* Brand identity */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 rounded-lg bg-[#C94E16] text-white flex items-center justify-center shadow-md shadow-[#C94E16]/20 transition-transform group-hover:scale-105 shrink-0">
            <div className="relative">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#F8F5EF] animate-pulse" />
            </div>
          </div>
          <div className="shrink-0">
            <div className="flex items-center gap-1">
              <span className="font-serif font-bold text-sm sm:text-base xl:text-lg 2xl:text-xl tracking-tight text-[#211D1A] group-hover:text-[#C94E16] transition-colors whitespace-nowrap">
                LÀNG RÈN HIỀN LƯƠNG
              </span>
            </div>
            <p className="hidden md:block text-[9px] xl:text-[10px] 2xl:text-[11px] font-medium tracking-wider text-[#75543D] uppercase whitespace-nowrap">
              DI SẢN NGHỀ TRUYỀN THỐNG SÔNG BỒ
            </p>
          </div>
        </div>

        {/* Center navigation for desktop */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold text-[#211D1A] shrink-0">
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
                    <span className="xl:hidden">{item.shortLabel}</span>
                    <span className="hidden xl:inline">{item.label}</span>
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
        <div className="flex items-center gap-1 sm:gap-1.5 xl:gap-2.5 shrink-0">
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
            className="hidden sm:inline-flex items-center gap-1.5 px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-full border border-[#C94E16] text-[#C94E16] bg-amber-50/60 hover:bg-[#C94E16] hover:text-white transition-all text-[11px] xl:text-xs font-semibold shadow-xs whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#C94E16]" />
            <span className="hidden xl:inline">Hư lão số AI</span>
            <span className="inline xl:hidden">Hư lão AI</span>
          </button>

          {/* Direction CTA */}
          <button
            onClick={() => onNavigate('lien-he')}
            className="inline-flex items-center gap-1.5 bg-[#C94E16] hover:bg-[#B04212] text-white px-2.5 xl:px-3.5 py-1.5 rounded-md font-semibold text-[11px] xl:text-xs tracking-wide shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
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

            {!user ? (
              <button
                onClick={() => {
                  onGoogleSignIn();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-white border border-stone-300 text-stone-700 text-xs font-medium"
              >
                <UserIcon className="w-4 h-4 text-amber-700" />
                <span>Đăng nhập Gmail để gửi đăng ký tham quan</span>
              </button>
            ) : (
              <div className="p-2.5 bg-stone-100 rounded text-xs text-stone-700 flex items-center justify-between">
                <span>{user.displayName || user.email}</span>
                <button
                  onClick={onGoogleSignOut}
                  className="text-red-600 font-medium hover:underline"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
