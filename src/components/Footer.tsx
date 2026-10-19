import React from 'react';

interface FooterProps {
  onOpenAppModal: () => void;
  onOpenDisclosures: () => void;
  onOpenSupportModal: () => void;
  onOpenCompoundingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAppModal,
  onOpenDisclosures,
  onOpenSupportModal,
  onOpenCompoundingModal,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-surface-container-low pt-space-2xl pb-space-xl mt-space-2xl">
      <div className="max-w-[1200px] mx-auto px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl pb-space-xl">
          {/* Brand Column */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <div className="w-7 h-7 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 3L4 17L18 31V3Z" fill="#176B52"></path>
                  <path d="M18 3L32 17L18 31V3Z" fill="#125641"></path>
                  <path d="M18 10L27 19L18 28V10Z" fill="#D5F36A"></path>
                </svg>
              </div>
              <span className="font-title-md text-title-md text-on-surface font-bold">Sprout</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              Calm, grounded wealth building for modern retail investors. Thoughtfully designed long-term compounding.
            </p>
          </div>

          {/* Column: Company */}
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface mb-space-md">Company</h4>
            <ul className="flex flex-col gap-space-sm">
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={() => scrollTo('about-sprout')}
                >
                  About Us
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={onOpenDisclosures}
                >
                  Careers
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={onOpenDisclosures}
                >
                  Press &amp; Media
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={onOpenDisclosures}
                >
                  Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Product */}
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface mb-space-md">Product</h4>
            <ul className="flex flex-col gap-space-sm">
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={() => scrollTo('how-it-works')}
                >
                  Systematic Plans
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={() => scrollTo('how-it-works')}
                >
                  Core Portfolios
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={onOpenCompoundingModal}
                >
                  Compounding Engine
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={onOpenAppModal}
                >
                  Mobile iOS &amp; Android
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Support & Legal */}
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface mb-space-md">Support &amp; Legal</h4>
            <ul className="flex flex-col gap-space-sm">
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={onOpenSupportModal}
                >
                  Help Center
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={() => scrollTo('faqs')}
                >
                  FAQs
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={onOpenDisclosures}
                >
                  Terms of Service
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={onOpenDisclosures}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="leading-normal">
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  onClick={onOpenDisclosures}
                >
                  SEBI Disclosures
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclosure & Copyright */}
        <div className="pt-space-lg flex flex-col gap-space-md bg-surface-container/40 p-space-lg rounded-xl">
          <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
            Statutory Risk Disclosure: Mutual fund investments and securities market instruments are subject to market risks. Read all scheme and transaction-related documents carefully before investing. Past performance is not indicative of future returns. Sprout Wealth Tech India Pvt Ltd operates under registered SEBI RIA regulations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
            <p>© 2025 Sprout 2.0 Wealth Technologies. All rights reserved.</p>
            <p className="text-tertiary">Built for mindful financial growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
