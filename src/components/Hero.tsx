import React from 'react';

interface HeroProps {
  onStartJourney: () => void;
  onOpenStoreModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney, onOpenStoreModal }) => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('how-it-works');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full relative overflow-hidden py-space-2xl md:py-space-2xl" id="home">
      <div className="max-w-[1200px] mx-auto px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Primary Copy & Conversions */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg z-10">
            {/* Micro Pill Tag */}
            <div className="inline-flex items-center gap-space-xs bg-surface-container px-space-md py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
              <span className="font-label-md text-label-md text-on-surface tracking-wide">
                SEBI Registered Investment Ecosystem
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight max-w-xl">
              Your investing journey starts here.
            </h1>

            {/* Body Description */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              Explore investing at your own pace. Start with ₹100 where available, and understand each step before you invest.
            </p>

            {/* Dominant Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
              <button
                type="button"
                className="h-14 px-space-xl bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl hover:bg-primary transition-all duration-200 active:scale-[0.99] shadow-md flex items-center justify-center gap-space-sm group cursor-pointer"
                onClick={onStartJourney}
                title="Start with ₹100"
              >
                <span>Start with ₹100</span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>

              <a
                className="h-14 px-space-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg rounded-xl hover:bg-surface-container transition-colors flex items-center justify-center gap-space-xs shadow-sm cursor-pointer"
                href="#how-it-works"
                onClick={scrollToHowItWorks}
              >
                <span className="material-symbols-outlined text-[20px]">explore</span>
                <span>See How it Works</span>
              </a>
            </div>

            {/* App Store Badges */}
            <div className="flex items-center gap-space-md pt-space-xs flex-wrap sm:flex-nowrap">
              <button
                type="button"
                className="flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest rounded-xl hover:bg-surface-container transition-colors shadow-sm text-left cursor-pointer border border-transparent hover:border-surface-container-high"
                onClick={onOpenStoreModal}
                aria-label="Get Sprout on Google Play"
              >
                <span className="material-symbols-outlined text-[26px] text-on-surface">shop</span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">GET IT ON</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Google Play</span>
                </div>
              </button>

              <button
                type="button"
                className="flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest rounded-xl hover:bg-surface-container transition-colors shadow-sm text-left cursor-pointer border border-transparent hover:border-surface-container-high"
                onClick={onOpenStoreModal}
                aria-label="Download Sprout on App Store"
              >
                <span className="material-symbols-outlined text-[26px] text-on-surface">phone_iphone</span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Download on the</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">App Store</span>
                </div>
              </button>
            </div>

            {/* Mandatory High-Contrast Risk Disclosure */}
            <div className="bg-surface-container-low p-space-md rounded-xl mt-space-xs">
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">info</span>
                <p className="font-label-md text-label-md text-on-surface-variant leading-relaxed">
                  All investments involve market risk and possible loss of capital. Review applicable product information and disclosures before investing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Mascot Visual & Floating Metric Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center my-6 lg:my-0">
            {/* Subtle Backdrop Orb */}
            <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-surface-container via-surface-variant/40 to-secondary-container/20 flex items-center justify-center p-space-xl shadow-inner relative">
              {/* Canonical Origami-Seed Mascot SVG */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex flex-col items-center justify-center drop-shadow-xl animate-pulse" style={{ animationDuration: '4s' }}>
                <svg className="w-40 h-40 sm:w-44 sm:h-44" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="80" cy="146" rx="44" ry="7" fill="#151E18" opacity="0.12"></ellipse>
                  <polygon points="80,14 26,78 80,142" fill="#176B52"></polygon>
                  <polygon points="80,14 134,78 80,142" fill="#0E4837"></polygon>
                  <polygon points="80,44 42,84 80,126" fill="#125641"></polygon>
                  <polygon points="80,44 118,84 80,126" fill="#1F7C61"></polygon>
                  <polygon points="80,64 112,96 80,128" fill="#D5F36A"></polygon>
                  <polygon points="80,64 48,96 80,128" fill="#CEEC64"></polygon>
                  <polygon points="80,82 98,100 80,118" fill="#E4F78F"></polygon>
                  <polygon points="80,82 62,100 80,118" fill="#A3E635"></polygon>
                  <line x1="80" y1="14" x2="80" y2="142" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.45"></line>
                  <line x1="26" y1="78" x2="134" y2="78" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2"></line>
                </svg>
              </div>

              {/* Floating Calibrated Chip */}
              <div className="absolute -bottom-4 right-2 sm:right-6 bg-surface-container-lowest p-space-md rounded-xl shadow-lg flex items-center gap-space-sm border-0">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">savings</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Min. Entry Step</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">₹100</span>
                </div>
              </div>

              {/* Floating Transparency Badge */}
              <div className="absolute -top-3 left-2 sm:left-6 bg-surface-container-lowest p-space-sm px-space-md rounded-xl shadow-md flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                <span className="font-label-sm text-label-sm text-on-surface font-medium">100% Direct Schemes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
