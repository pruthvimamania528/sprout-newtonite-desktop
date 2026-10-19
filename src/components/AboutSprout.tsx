import React, { useState } from 'react';

interface AboutSproutProps {
  onOpenDisclosures: () => void;
}

export const AboutSprout: React.FC<AboutSproutProps> = ({ onOpenDisclosures }) => {
  const [imgLoadFailed, setImgLoadFailed] = useState(false);

  return (
    <section className="w-full py-space-2xl bg-surface-container-low" id="about-sprout">
      <div className="max-w-[1200px] mx-auto px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left: Editorial Content */}
          <div className="lg:col-span-7 space-y-space-lg">
            <div className="space-y-space-xs">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">
                Safe, Thoughtful Architecture
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Transparent, guided investing for first-time investors
              </h2>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Sprout is engineered from the ground up to eliminate aggressive behavioral nudges. We don’t earn commissions on transactional turnover, and we do not nudge users toward speculative derivatives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">security</span>
                  <span className="font-title-md text-title-md text-on-surface">Bank-Grade Encryption</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  256-bit TLS data transmission in complete accordance with regulatory data privacy frameworks.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">no_accounts</span>
                  <span className="font-title-md text-title-md text-on-surface">No Lock-in Pressure</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Pause, alter, or cancel your automated SIP mandates anytime without auxiliary penalty fees.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">account_balance</span>
                  <span className="font-title-md text-title-md text-on-surface">Direct Custody</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Your assets sit directly with SEBI-registered Asset Management Companies and authorized custodians.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                  <span className="font-title-md text-title-md text-on-surface">Clear Disclosures</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Total Expense Ratios (TER), exit loads, and benchmark comparisons stated plainly on every fund card.
                </p>
              </div>
            </div>

            <div className="pt-space-sm">
              <button
                type="button"
                className="h-12 px-space-lg bg-surface-container-lowest text-primary hover:bg-surface-container font-label-lg text-label-lg rounded-xl shadow-sm transition-colors inline-flex items-center gap-space-xs cursor-pointer border border-transparent hover:border-surface-container-high"
                onClick={onOpenDisclosures}
              >
                <span>Read Our Full Charter &amp; Disclosures</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right: Photographic Visual Context */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md overflow-hidden">
              {!imgLoadFailed ? (
                <img
                  className="w-full h-72 object-cover rounded-lg"
                  alt="A calm, sunlit minimalist desk setup in an Indian home office, featuring a clean notepad, a cup of green tea, a smartphone displaying a calm green finance dashboard, soft morning light falling through slatted blinds, deep emerald and soft lime ceramic plant pots, premium editorial aesthetic."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBts6hev5O8ELGgN1UXUJGOBUFzXsdDsvJWrtgCrG6iPkM0m4zCaANoAl_Dxej1w0gLl_JZohephLzsYkrykorHzjT2BYSQjk3xCTB281KrWxcIJ-NmZ1hdg4bZEo3cigKWmOROJuuMZOM2I1pT_ATvBqcJgtNL1dPTHI7-L8g6clzXKpxt4qru7foU3GdFPKKUOiMK9dL4u-7CjowHWsHhCz_cLrWJkdlpPf0Okx4NwbLcM5-ANXypfA"
                  onError={() => setImgLoadFailed(true)}
                />
              ) : (
                <div className="w-full h-72 rounded-lg bg-gradient-to-br from-surface-container via-surface-variant to-primary/10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-4xl">energy_savings_leaf</span>
                  </div>
                  <span className="font-semibold text-on-surface">Calm, Grounded Investing</span>
                  <span className="text-xs text-on-surface-variant mt-1">Sustainable growth designed for decades</span>
                </div>
              )}
              <div className="pt-space-md space-y-1">
                <span className="font-label-md text-label-md text-on-surface font-semibold block">
                  Grounded Financial Growth
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Built to foster long-term clarity, not day-trading anxiety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
