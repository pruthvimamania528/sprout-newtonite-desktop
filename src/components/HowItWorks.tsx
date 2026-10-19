import React, { useState } from 'react';

interface HowItWorksProps {
  onOpenStepDetail?: (step: number) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  return (
    <section className="w-full py-space-2xl bg-surface-container-low/70" id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-gutter-desktop">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold block mb-space-xs">
              Clear Process
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">How it works</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Three calm, straightforward steps designed to build your confidence before any financial commitment.
          </p>
        </div>

        {/* 3 Connected Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
          {/* Step 1 */}
          <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[24px]">folder_open</span>
                </div>
                <span className="font-label-sm text-label-sm font-bold px-space-sm py-1 bg-surface-container rounded-full text-on-surface-variant">
                  Step 01
                </span>
              </div>
              <div className="space-y-space-xs pt-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Get prepared</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Understand which documents may be required. Review checklist items beforehand so there are no surprises.
                </p>
              </div>

              {/* Inline expandable checklist preview */}
              {expandedStep === 1 && (
                <div className="mt-2 pt-3 border-t border-surface-container bg-surface-container-low p-3 rounded-lg text-xs space-y-1.5 animate-fade-in text-on-surface-variant">
                  <div className="flex items-center gap-1.5 font-medium text-primary">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Valid PAN Card</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-primary">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Aadhaar card for digital signature</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-primary">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Active mobile phone for OTP</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-primary">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Indian bank account for SIP mandate</span>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              className="pt-space-lg flex items-center gap-space-xs text-primary font-label-md text-label-md text-left hover:underline cursor-pointer"
              onClick={() => toggleStep(1)}
              aria-expanded={expandedStep === 1}
            >
              <span>{expandedStep === 1 ? 'Hide requirements' : 'Check identity requirements'}</span>
              <span
                className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                  expandedStep === 1 ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>
          </div>

          {/* Step 2 */}
          <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[24px]">badge</span>
                </div>
                <span className="font-label-sm text-label-sm font-bold px-space-sm py-1 bg-surface-container rounded-full text-on-surface-variant">
                  Step 02
                </span>
              </div>
              <div className="space-y-space-xs pt-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Verify your identity</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Follow the KYC process and its instructions. Regulated Indian financial norms require swift electronic verification.
                </p>
              </div>

              {expandedStep === 2 && (
                <div className="mt-2 pt-3 border-t border-surface-container bg-surface-container-low p-3 rounded-lg text-xs space-y-1.5 animate-fade-in text-on-surface-variant">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                    <span>Instant DigiLocker / UIDAI verification</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">shield</span>
                    <span>Direct KRA (KYC Registration Agency) sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                    <span>Zero paper forms or physical branch visits</span>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              className="pt-space-lg flex items-center gap-space-xs text-primary font-label-md text-label-md text-left hover:underline cursor-pointer"
              onClick={() => toggleStep(2)}
              aria-expanded={expandedStep === 2}
            >
              <span>{expandedStep === 2 ? 'Close compliance info' : 'Standard compliant KYC'}</span>
              <span className="material-symbols-outlined text-[16px]">lock</span>
            </button>
          </div>

          {/* Step 3 */}
          <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[24px]">pie_chart</span>
                </div>
                <span className="font-label-sm text-label-sm font-bold px-space-sm py-1 bg-surface-container rounded-full text-on-surface-variant">
                  Step 03
                </span>
              </div>
              <div className="space-y-space-xs pt-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Explore investments</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Review available options and their associated information before deciding. Compare asset classes with zero jargon.
                </p>
              </div>

              {expandedStep === 3 && (
                <div className="mt-2 pt-3 border-t border-surface-container bg-surface-container-low p-3 rounded-lg text-xs space-y-1.5 animate-fade-in text-on-surface-variant">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface font-medium">Direct Index Funds</span>
                    <span className="text-primary font-bold">TER ~0.15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface font-medium">Distributor Commission</span>
                    <span className="text-primary font-bold">₹0 (Zero)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface font-medium">Minimum Start</span>
                    <span className="text-primary font-bold">₹100</span>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              className="pt-space-lg flex items-center gap-space-xs text-primary font-label-md text-label-md text-left hover:underline cursor-pointer"
              onClick={() => toggleStep(3)}
              aria-expanded={expandedStep === 3}
            >
              <span>{expandedStep === 3 ? 'Close disclosures' : 'Explore fund disclosures'}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
