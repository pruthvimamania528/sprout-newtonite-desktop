import React, { useState } from 'react';
import { validatePAN } from '../utils/sproutLogic';

export const KycPreparation: React.FC = () => {
  const [copiedPan, setCopiedPan] = useState(false);
  const [testPanInput, setTestPanInput] = useState('');
  const [panTestResult, setPanTestResult] = useState<{ isValid: boolean; message?: string } | null>(null);
  const [showPanTester, setShowPanTester] = useState(false);

  const handleCopySamplePan = () => {
    navigator.clipboard.writeText('ABCDE1234F');
    setCopiedPan(true);
    setTimeout(() => setCopiedPan(false), 2000);
  };

  const handleTestPan = (val: string) => {
    setTestPanInput(val);
    if (!val.trim()) {
      setPanTestResult(null);
      return;
    }
    const res = validatePAN(val);
    setPanTestResult(res);
  };

  return (
    <section className="w-full py-space-2xl" id="kyc-prep">
      <div className="max-w-[1200px] mx-auto px-gutter-desktop">
        {/* Heading & Context */}
        <div className="max-w-2xl mb-space-xl">
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold block mb-space-xs">
            Onboarding Clarity
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
            A little preparation makes getting started easier.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Indian regulations require complete Know Your Customer (KYC) documentation for all securities transactions. Having these 3 components on hand ensures completion in under five minutes.
          </p>
        </div>

        {/* 3 Horizontal Preparation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Prep Card 1 */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">credit_card</span>
              </div>
              <div className="space-y-space-xs">
                <h3 className="font-title-md text-title-md text-on-surface">Keep your PAN ready.</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Your 10-character alphanumeric Permanent Account Number issued by the Income Tax Department is mandatory across all Indian mutual fund accounts.
                </p>
              </div>
            </div>

            <div className="mt-space-lg">
              <div
                className="bg-surface-container-low px-space-md py-space-sm rounded-lg flex items-center justify-between cursor-pointer hover:bg-surface-container transition-colors"
                onClick={handleCopySamplePan}
                title="Click to copy sample PAN format"
              >
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-on-surface font-mono">ABCDE1234F</span>
                  <span className="text-xs text-primary font-medium">{copiedPan ? 'Copied!' : ''}</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Alphanumeric</span>
              </div>

              {/* Format Checker Toggle */}
              <div className="mt-2 text-right">
                <button
                  type="button"
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                  onClick={() => setShowPanTester(!showPanTester)}
                >
                  <span className="material-symbols-outlined text-[14px]">tune</span>
                  <span>{showPanTester ? 'Close format checker' : 'Test PAN format'}</span>
                </button>
              </div>

              {showPanTester && (
                <div className="mt-2 p-2.5 bg-surface-container-high rounded-lg space-y-1.5 animate-fade-in">
                  <label htmlFor="pan-test-input" className="block text-[11px] font-semibold text-on-surface-variant uppercase">
                    Sample PAN Validator
                  </label>
                  <input
                    id="pan-test-input"
                    type="text"
                    maxLength={10}
                    placeholder="e.g. ABCDE1234F"
                    value={testPanInput}
                    onChange={(e) => handleTestPan(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs font-mono uppercase bg-surface-container-lowest rounded border border-outline-variant focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  {panTestResult && (
                    <div className={`text-[11px] flex items-center gap-1 ${panTestResult.isValid ? 'text-primary font-medium' : 'text-red-700'}`}>
                      <span className="material-symbols-outlined text-[14px]">
                        {panTestResult.isValid ? 'check_circle' : 'cancel'}
                      </span>
                      <span>{panTestResult.isValid ? 'Valid PAN structure' : panTestResult.message}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Prep Card 2 */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">fingerprint</span>
              </div>
              <div className="space-y-space-xs">
                <h3 className="font-title-md text-title-md text-on-surface">Keep your Aadhaar ready when required.</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Your 12-digit Unique Identification Number facilitates instant, paperless verification through DigiLocker or UIDAI eKYC services.
                </p>
              </div>
            </div>

            <div className="mt-space-lg">
              <div className="bg-surface-container-low px-space-md py-space-sm rounded-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface font-mono">XXXX XXXX 1234</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">12 Digits</span>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[11px] text-on-surface-variant flex items-center justify-end gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">security</span>
                  <span>Masked e-Aadhaar accepted</span>
                </span>
              </div>
            </div>
          </div>

          {/* Prep Card 3 */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">sms</span>
              </div>
              <div className="space-y-space-xs">
                <h3 className="font-title-md text-title-md text-on-surface">Ensure Aadhaar-linked mobile access.</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  One-Time Passwords (OTPs) are dispatched directly by UIDAI to verify identity authenticity. Ensure you can receive SMS on that active SIM card.
                </p>
              </div>
            </div>

            <div className="mt-space-lg">
              <div className="bg-surface-container-low px-space-md py-space-sm rounded-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface font-mono">+91 ••••• •••90</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Active OTP SIM</span>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[11px] text-on-surface-variant flex items-center justify-end gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">bolt</span>
                  <span>Direct UIDAI OTP delivery</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
