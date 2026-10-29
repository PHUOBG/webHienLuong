/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, GalleryItem } from './types';
import { GALLERY_ITEMS } from './data/villageData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HuLaoAiModal } from './components/HuLaoAiModal';
import { ExperienceBookingModal } from './components/ExperienceBookingModal';
import { ImageLightbox } from './components/ImageLightbox';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CraftPage } from './pages/CraftPage';
import { ArtisansPage } from './pages/ArtisansPage';
import { HeritageSitesPage } from './pages/HeritageSitesPage';
import { GalleryPage } from './pages/GalleryPage';
import { LineagesPage } from './pages/LineagesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';

import { initAuth, googleSignIn, googleSignOut } from './services/firebaseAuth';
import { User } from 'firebase/auth';
import { Sparkles, HeartHandshake, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<User | null>(null);

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefillType, setBookingPrefillType] = useState<string | undefined>(undefined);

  // Lightbox
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize Firebase Auth listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser) => setUser(currentUser),
      () => setUser(null)
    );
    return () => unsubscribe();
  }, []);

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validRoutes: PageRoute[] = [
        'home', 'gioi-thieu', 'quy-trinh-nghe', 'nghe-nhan', 
        'di-tich', 'thu-vien-anh', 'cac-dong-ho', 'tin-tuc-chi-tiet', 'lien-he'
      ];
      if (validRoutes.includes(hash as PageRoute)) {
        setCurrentRoute(hash as PageRoute);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (type?: string) => {
    setBookingPrefillType(type);
    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex(i => i.id === item.id);
    setLightboxIndex(idx !== -1 ? idx : 0);
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error('Google Sign-in failed', err);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (err) {
      console.error('Google Sign-out failed', err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#211D1A]">
      
      {/* HEADER */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAi={() => setIsAiOpen(true)}
        user={user}
        onGoogleSignIn={handleGoogleSignIn}
        onGoogleSignOut={handleGoogleSignOut}
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
            onOpenLightbox={handleOpenLightbox}
            onOpenAi={() => setIsAiOpen(true)}
          />
        )}

        {currentRoute === 'gioi-thieu' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentRoute === 'quy-trinh-nghe' && (
          <CraftPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentRoute === 'nghe-nhan' && (
          <ArtisansPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentRoute === 'di-tich' && (
          <HeritageSitesPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentRoute === 'thu-vien-anh' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentRoute === 'cac-dong-ho' && (
          <LineagesPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentRoute === 'tin-tuc-chi-tiet' && (
          <ArticleDetailPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
            selectedArticleId={selectedArticleId}
          />
        )}

        {currentRoute === 'lien-he' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* FLOATING ACTION DOCK (BOTTOM RIGHT) */}
      <aside aria-label="Lối tắt liên hệ và trợ lý số" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Cuộn lên đầu trang"
            className="pointer-events-auto w-10 h-10 rounded-full bg-white text-[#75543D] border border-[#E8DFC9] shadow-md hover:bg-[#FAF4EB] hover:text-[#C94E16] flex items-center justify-center transition"
            title="Lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating AI & Booking Pills */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setIsAiOpen(true)}
            aria-label="Mở Hư Lão Số AI tư vấn di sản"
            className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#211D1A] text-[#F8F5EF] border border-[#C5A15B]/40 shadow-xl hover:bg-[#362E2A] transition transform hover:-translate-y-0.5"
            title="Hư Lão Số AI tư vấn di sản"
          >
            <Sparkles className="w-4 h-4 text-[#C5A15B] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide hidden sm:inline">Hư Lão Số AI</span>
          </button>

          <button
            onClick={() => handleOpenBookingModal('Tư vấn nhanh')}
            aria-label="Đăng ký trải nghiệm làng rèn"
            className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#C94E16] text-white shadow-xl hover:bg-[#B34211] transition transform hover:-translate-y-0.5"
            title="Đăng ký trải nghiệm làng rèn"
          >
            <HeartHandshake className="w-4 h-4" />
            <span className="text-xs font-bold tracking-wide hidden sm:inline">Đăng Ký Thăm Lò</span>
          </button>
        </div>
      </aside>

      {/* MODALS */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <HuLaoAiModal
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        onNavigate={handleNavigate}
      />

      <ExperienceBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        user={user}
        defaultExperience={bookingPrefillType}
      />

      {lightboxIndex !== null && (
        <ImageLightbox
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}

    </div>
  );
}
