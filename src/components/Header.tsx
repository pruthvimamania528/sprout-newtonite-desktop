import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenAppModal: () => void;
  onOpenProfileModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppModal, onOpenProfileModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['how-it-works', 'kyc-prep', 'about-sprout', 'faqs', 'help-contact'];
      let current = 'home';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top micro pulse bar */}
      <div className="w-full bg-primary text-on-primary py-1 px-space-md text-center text-label-sm font-label-sm flex items-center justify-center gap-space-sm">
        <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
        <span className="hidden sm:inline">SEBI Registered • Direct Mutual Funds • ₹100 Min Investment</span>
      </div>

      <div className="h-20 max-w-[1200px] mx-auto px-gutter-desktop flex items-center justify-between">
        {/* Brand Logo */}
        <a
          className="flex items-center gap-space-sm cursor-pointer group"
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          aria-label="Sprout 2.0 Home"
        >
          {!imgError ? (
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1UE1yS2BNnxX7nQ5BWpxrr6bVsl-B5dfVb2pn2jpSWgkW8JobgOhNX-fPDSDbvpyQN0CE8G10lOCR1qyk6QbeLCczOcwySP4XXn1OyXfDqodIzqw00FHoqH49tan513GeFJRkj6QZQDVWKFn6iR-RoZp0rkMOjMnLsg299YF0qSyt9CdzQANzcA5Bl_R77Uf7jjzo2deRn6MeA_bYMtaZuk5uMr0O5ALEc22TIsai4Qx-FYdVqgEHdPTxhV"
              alt="Sprout"
              className="h-8 w-auto transition-transform group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 3L4 17L18 31V3Z" fill="#176B52"></path>
                <path d="M18 3L32 17L18 31V3Z" fill="#125641"></path>
                <path d="M18 10L27 19L18 28V10Z" fill="#D5F36A"></path>
                <path d="M18 15L23 20L18 25V15Z" fill="#CEEC64"></path>
              </svg>
              <span className="font-bold text-xl tracking-tight text-primary">Sprout</span>
            </div>
          )}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-space-sm" aria-label="Main Navigation">
          <a
            className={`px-space-md py-space-sm rounded-xl font-label-lg text-label-lg transition-colors ${
              activeSection === 'how-it-works'
                ? 'bg-surface-container-high text-on-surface'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            href="#how-it-works"
            onClick={(e) => scrollToSection(e, 'how-it-works')}
          >
            How it works
          </a>
          <a
            className={`px-space-md py-space-sm rounded-xl font-label-lg text-label-lg transition-colors ${
              activeSection === 'faqs'
                ? 'bg-surface-container-high text-on-surface'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            href="#faqs"
            onClick={(e) => scrollToSection(e, 'faqs')}
          >
            FAQs
          </a>
          <a
            className={`px-space-md py-space-sm rounded-xl font-label-lg text-label-lg transition-colors ${
              activeSection === 'about-sprout'
                ? 'bg-surface-container-high text-on-surface'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            href="#about-sprout"
            onClick={(e) => scrollToSection(e, 'about-sprout')}
          >
            About Sprout
          </a>
          <a
            className={`px-space-md py-space-sm rounded-xl font-label-lg text-label-lg transition-colors ${
              activeSection === 'help-contact'
                ? 'bg-surface-container-high text-on-surface'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            href="#help-contact"
            onClick={(e) => scrollToSection(e, 'help-contact')}
          >
            Help / Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-md">
          <button
            type="button"
            className="inline-flex items-center justify-center px-space-lg py-space-sm h-12 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl hover:bg-primary transition-all duration-150 active:scale-[0.99] shadow-[0_1px_3px_rgba(32,41,35,0.04)] cursor-pointer"
            onClick={onOpenAppModal}
          >
            Get the App
          </button>

          <button
            type="button"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:opacity-90 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
            onClick={onOpenProfileModal}
            title="Account & KYC Overview"
            aria-label="Account Overview"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-surface-container px-gutter-desktop py-space-lg shadow-lg flex flex-col gap-space-sm animate-fade-in">
          <a
            className="px-space-md py-3 rounded-xl font-label-lg text-on-surface hover:bg-surface-container"
            href="#how-it-works"
            onClick={(e) => scrollToSection(e, 'how-it-works')}
          >
            How it works
          </a>
          <a
            className="px-space-md py-3 rounded-xl font-label-lg text-on-surface hover:bg-surface-container"
            href="#faqs"
            onClick={(e) => scrollToSection(e, 'faqs')}
          >
            FAQs
          </a>
          <a
            className="px-space-md py-3 rounded-xl font-label-lg text-on-surface hover:bg-surface-container"
            href="#about-sprout"
            onClick={(e) => scrollToSection(e, 'about-sprout')}
          >
            About Sprout
          </a>
          <a
            className="px-space-md py-3 rounded-xl font-label-lg text-on-surface hover:bg-surface-container"
            href="#help-contact"
            onClick={(e) => scrollToSection(e, 'help-contact')}
          >
            Help / Contact
          </a>
          <div className="pt-2 border-t border-surface-container flex gap-2">
            <button
              type="button"
              className="flex-1 h-12 bg-primary-container text-on-primary font-label-lg rounded-xl flex items-center justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppModal();
              }}
            >
              Get the App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
