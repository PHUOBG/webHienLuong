import React, { useState, useEffect, useMemo } from 'react';
import { PageRoute } from '../types';
import { ARTICLES, ARTISANS, CRAFT_STEPS, HISTORIC_SITES, PRODUCTS, NINE_HAMLETS } from '../data/villageData';
import { Search, X, ArrowRight, BookOpen, User, Sparkles, MapPin, Wrench } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    const items: { type: string; title: string; desc: string; route: PageRoute; icon: any }[] = [];

    // Articles
    ARTICLES.forEach((a) => {
      if (a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)) {
        items.push({
          type: 'Bài viết',
          title: a.title,
          desc: a.summary,
          route: 'tin-tuc-chi-tiet',
          icon: BookOpen,
        });
      }
    });

    // Craft steps
    CRAFT_STEPS.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.subtitle.toLowerCase().includes(q)) {
        items.push({
          type: 'Quy trình nghề',
          title: `Công đoạn ${s.stepNumber}: ${s.title}`,
          desc: s.description,
          route: 'quy-trinh-nghe',
          icon: Sparkles,
        });
      }
    });

    // Artisans
    ARTISANS.forEach((art) => {
      if (art.name.toLowerCase().includes(q) || art.bio.toLowerCase().includes(q) || art.specialty.toLowerCase().includes(q)) {
        items.push({
          type: 'Nghệ nhân',
          title: `${art.name} (${art.title})`,
          desc: art.bio,
          route: 'nghe-nhan',
          icon: User,
        });
      }
    });

    // Products
    PRODUCTS.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        items.push({
          type: 'Sản phẩm dao kéo',
          title: p.name,
          desc: `${p.hardness} — ${p.description}`,
          route: 'quy-trinh-nghe',
          icon: Wrench,
        });
      }
    });

    // Historic sites
    HISTORIC_SITES.forEach((site) => {
      if (site.title.toLowerCase().includes(q) || site.description.toLowerCase().includes(q)) {
        items.push({
          type: 'Di tích lịch sử',
          title: site.title,
          desc: site.description,
          route: 'di-tich',
          icon: MapPin,
        });
      }
    });

    // Nine Hamlets
    NINE_HAMLETS.forEach((h) => {
      if (h.name.toLowerCase().includes(q) || h.desc.toLowerCase().includes(q)) {
        items.push({
          type: '9 Xóm rèn truyền thống',
          title: h.name,
          desc: h.desc,
          route: 'gioi-thieu',
          icon: MapPin,
        });
      }
    });

    return items;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 p-4 animate-in fade-in duration-150">
      <div className="bg-[#FAF8F4] w-full max-w-2xl rounded-xl shadow-2xl border border-[#E8DFC9] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input bar */}
        <div className="flex items-center gap-3 p-4 border-b border-[#E8DFC9] bg-white">
          <Search className="w-5 h-5 text-[#C94E16]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm tư liệu, công đoạn rèn, nghệ nhân, chùa Giác Lương..."
            className="w-full bg-transparent text-[#211D1A] placeholder-stone-400 text-sm focus:outline-hidden"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold rounded bg-[#EFE9DC] text-[#75543D] hover:bg-[#E3DAC8]"
          >
            Esc
          </button>
        </div>

        {/* Results list */}
        <div className="overflow-y-auto p-4 space-y-3 flex-1">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-stone-500 space-y-2">
              <Search className="w-8 h-8 text-[#C5A15B] mx-auto opacity-60" />
              <p className="text-sm font-medium">Nhập từ khóa để tra cứu hồ sơ di sản Hiền Lương</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
                {['Tôi thép bùn non', 'Cụ Hoàng Đình Chèm', 'Chùa Giác Lương', 'Dao phay Cố Đô', 'Cụ Trương Văn Bổn'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-full bg-[#EFE9DC] hover:bg-[#C94E16] hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-stone-500">
              <p className="text-sm">Không tìm thấy tài liệu phù hợp với &ldquo;{query}&rdquo;.</p>
              <p className="text-xs text-stone-400 mt-1">Hãy thử tìm với các từ khóa: sông Bồ, thợ rèn, Giác Lương, búa tạ...</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#75543D] uppercase tracking-wider mb-2">
                Tìm thấy {results.length} kết quả phù hợp:
              </p>
              {results.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      onNavigate(item.route);
                      onClose();
                    }}
                    className="p-3 rounded-lg bg-white hover:bg-[#FAF0E4] border border-[#E8DFC9] cursor-pointer transition-colors group flex items-start gap-3"
                  >
                    <div className="p-2 rounded bg-[#EFE9DC] text-[#C94E16] group-hover:bg-[#C94E16] group-hover:text-white transition-colors mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-[#C94E16]">
                          {item.type}
                        </span>
                        <h4 className="text-sm font-semibold text-[#211D1A] group-hover:text-[#C94E16] transition-colors truncate">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#C94E16] group-hover:translate-x-1 transition-transform shrink-0 self-center" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
