import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Tag, Info } from 'lucide-react';

interface ImageLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Top action bar */}
      <div className="flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#C94E16] text-white text-xs font-bold tracking-wider">
            {currentItem.code}
          </span>
          <span className="text-xs text-stone-300 hidden sm:inline">
            {currentIndex + 1} / {items.length} tư liệu
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Đóng"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-2 sm:left-4 z-10 p-2.5 rounded-full bg-black/50 hover:bg-[#C94E16] text-white transition-all transform hover:scale-110"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[75vh] max-w-full object-contain rounded-md shadow-2xl border border-white/10"
        />

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-2 sm:right-4 z-10 p-2.5 rounded-full bg-black/50 hover:bg-[#C94E16] text-white transition-all transform hover:scale-110"
          aria-label="Ảnh sau"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info Bar */}
      <div className="max-w-3xl mx-auto w-full bg-[#211D1A]/90 border border-[#75543D]/50 rounded-lg p-3 sm:p-4 text-white">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 className="font-serif font-bold text-base sm:text-lg text-amber-100">
            {currentItem.title}
          </h3>
          <span className="flex items-center gap-1 text-[11px] text-[#C5A15B]">
            <Tag className="w-3 h-3" />
            {currentItem.categoryLabel}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-2">
          {currentItem.caption}
        </p>

        <div className="flex items-center justify-between text-[11px] text-stone-400 border-t border-white/10 pt-2">
          <span>{currentItem.meta}</span>
          <span className="flex items-center gap-1 text-[#C5A15B]">
            <Info className="w-3 h-3" /> {currentItem.attribution}
          </span>
        </div>
      </div>
    </div>
  );
};
