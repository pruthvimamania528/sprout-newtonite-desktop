import React, { useState } from 'react';
import { validatePAN, validateMobile, calculateCompoundingEstimate } from '../utils/sproutLogic';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Welcome / Get The App Modal (Source of truth from Stitch)
export const WelcomeModal: React.FC<ModalProps & { onProceedToOnboarding: () => void }> = ({
  isOpen,
  onClose,
  onProceedToOnboarding,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-gutter animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
    >
      <div className="bg-surface-container-lowest max-w-md w-full rounded-xl p-space-xl shadow-xl flex flex-col gap-space-lg relative">
        <button
          aria-label="Close"
          className="absolute top-space-md right-space-md w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-space-sm">
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3L4 17L18 31V3Z" fill="#176B52"></path>
              <path d="M18 3L32 17L18 31V3Z" fill="#125641"></path>
              <path d="M18 10L27 19L18 28V10Z" fill="#D5F36A"></path>
              <path d="M18 15L23 20L18 25V15Z" fill="#CEEC64"></path>
            </svg>
          </div>
          <div>
            <span className="font-headline-sm text-headline-sm text-on-surface block">Sprout App</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Simple, deliberate wealth</span>
          </div>
        </div>

        <div className="space-y-space-xs">
          <h3 id="welcome-modal-title" className="font-title-md text-title-md text-on-surface">
            Welcome to your mindful journey
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Scan the code or proceed through the web onboarding gateway to open your verified investor account.
          </p>
        </div>

        <div className="p-space-lg bg-surface-container-low rounded-xl flex items-center gap-space-md">
          <div className="w-24 h-24 bg-surface-container-lowest p-2 rounded-lg flex items-center justify-center shrink-0 shadow-xs">
            {/* Stylized QR Representation */}
            <svg className="w-20 h-20 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
              <rect fill="none" height="30" stroke="currentColor" strokeWidth="6" width="30" x="10" y="10"></rect>
              <rect height="10" width="10" x="20" y="20"></rect>
              <rect fill="none" height="30" stroke="currentColor" strokeWidth="6" width="30" x="60" y="10"></rect>
              <rect height="10" width="10" x="70" y="20"></rect>
              <rect fill="none" height="30" stroke="currentColor" strokeWidth="6" width="30" x="10" y="60"></rect>
              <rect height="10" width="10" x="20" y="70"></rect>
              <rect height="8" width="8" x="55" y="55"></rect>
              <rect height="18" width="8" x="70" y="55"></rect>
              <rect height="8" width="18" x="55" y="70"></rect>
              <rect height="10" width="10" x="80" y="80"></rect>
            </svg>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface font-semibold">iOS &amp; Android Ready</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Available on Google Play &amp; Apple App Store. Requires iOS 15+ or Android 9+.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-space-sm pt-space-xs">
          <button
            type="button"
            className="w-full h-12 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-space-xs cursor-pointer shadow-sm"
            onClick={() => {
              onClose();
              onProceedToOnboarding();
            }}
          >
            <span>Continue to Onboarding</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
          <button
            type="button"
            className="w-full h-10 text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors cursor-pointer"
            onClick={onClose}
          >
            Dismiss for now
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. Onboarding Simulation Modal
export const OnboardingModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [pan, setPan] = useState('');
  const [panError, setPanError] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  if (!isOpen) return null;

  const handlePanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = validatePAN(pan);
    if (!val.isValid) {
      setPanError(val.message || 'Invalid PAN');
      return;
    }
    setPanError('');
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(2);
    }, 600);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(3);
    }, 700);
  };

  const resetAndClose = () => {
    setStep(1);
    setPan('');
    setOtp('');
    setPanError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-gutter animate-fade-in">
      <div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl p-space-xl shadow-2xl relative">
        <button
          aria-label="Close Onboarding"
          className="absolute top-space-md right-space-md w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          onClick={resetAndClose}
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Progress Bar */}
        <div className="mb-space-lg pr-10">
          <div className="flex items-center justify-between text-xs font-semibold text-on-surface-variant mb-1">
            <span>Step {step} of 3</span>
            <span>{step === 1 ? 'PAN Verification' : step === 2 ? 'UIDAI eKYC' : 'Ready'}</span>
          </div>
          <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {step === 1 && (
          <form onSubmit={handlePanSubmit} className="space-y-space-md">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Enter your PAN</h3>
              <p className="font-body-md text-on-surface-variant mt-1">
                Mandatory under SEBI norms for KYC verification.
              </p>
            </div>

            <div>
              <label htmlFor="modal-pan-input" className="block text-xs font-semibold text-on-surface mb-1">
                Permanent Account Number
              </label>
              <input
                id="modal-pan-input"
                type="text"
                maxLength={10}
                placeholder="ABCDE1234F"
                value={pan}
                onChange={(e) => {
                  setPan(e.target.value.toUpperCase());
                  setPanError('');
                }}
                className="w-full h-12 px-space-md text-base font-mono uppercase bg-surface-container-low rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {panError && <p className="text-xs text-red-600 mt-1">{panError}</p>}
              <button
                type="button"
                className="text-xs text-primary mt-2 hover:underline cursor-pointer"
                onClick={() => setPan('ABCDE1234F')}
              >
                Use sample demo PAN: ABCDE1234F
              </button>
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full h-12 bg-primary-container text-on-primary font-label-lg rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isVerifying ? (
                <span>Checking records...</span>
              ) : (
                <>
                  <span>Verify PAN</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit} className="space-y-space-md">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Aadhaar Instant eKYC</h3>
              <p className="font-body-md text-on-surface-variant mt-1">
                Enter the 6-digit OTP sent to your Aadhaar-registered mobile (+91 ••••• •••90).
              </p>
            </div>

            <div>
              <label htmlFor="otp-input" className="block text-xs font-semibold text-on-surface mb-1">
                One-Time Password (OTP)
              </label>
              <input
                id="otp-input"
                type="text"
                maxLength={6}
                placeholder="1 2 3 4 5 6"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                className="w-full h-12 px-space-md text-center text-xl tracking-widest font-mono bg-surface-container-low rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="button"
                className="text-xs text-primary mt-2 hover:underline cursor-pointer"
                onClick={() => setOtp('123456')}
              >
                Auto-fill demo OTP (123456)
              </button>
            </div>

            <button
              type="submit"
              disabled={isVerifying || otp.length < 4}
              className="w-full h-12 bg-primary-container text-on-primary font-label-lg rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isVerifying ? (
                <span>Confirming DigiLocker...</span>
              ) : (
                <>
                  <span>Complete Verification</span>
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </>
              )}
            </button>
          </form>
        )}

        {step === 3 && (
          <div className="space-y-space-md text-center py-4">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl font-bold">check</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">KYC Verified Successfully</h3>
              <p className="font-body-md text-on-surface-variant mt-1 max-w-sm mx-auto">
                Your investor profile is established under SEBI RIA guidelines. You are ready to explore direct mutual funds starting at ₹100.
              </p>
            </div>

            <div className="p-4 bg-surface-container rounded-xl text-left text-xs space-y-2 text-on-surface-variant">
              <div className="flex justify-between">
                <span>Account Tier</span>
                <span className="font-semibold text-primary">100% Direct Schemes</span>
              </div>
              <div className="flex justify-between">
                <span>Commissions</span>
                <span className="font-semibold text-primary">₹0 Zero Commission</span>
              </div>
              <div className="flex justify-between">
                <span>Lock-in</span>
                <span className="font-semibold text-primary">Flexible / No Penalty</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full h-12 bg-primary text-on-primary font-label-lg rounded-xl hover:bg-primary-container transition-colors cursor-pointer"
              onClick={resetAndClose}
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// 3. Disclosures & Investor Charter Modal
export const DisclosuresModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-gutter animate-fade-in">
      <div className="bg-surface-container-lowest max-w-2xl w-full max-h-[85vh] rounded-2xl p-space-xl shadow-2xl relative flex flex-col">
        <button
          aria-label="Close Disclosures"
          className="absolute top-space-md right-space-md w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="mb-4">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Regulatory Compliance</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Investor Charter &amp; Disclosures</h3>
        </div>

        <div className="overflow-y-auto space-y-4 pr-2 text-sm text-on-surface-variant leading-relaxed">
          <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container">
            <h4 className="font-semibold text-on-surface mb-1">1. SEBI RIA Registered Entity</h4>
            <p>
              Sprout Wealth Tech India Pvt Ltd is a Registered Investment Advisor (RIA) regulated under the Securities and Exchange Board of India (Investment Advisers) Regulations, 2013. Registration does not guarantee returns or performance.
            </p>
          </div>

          <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container">
            <h4 className="font-semibold text-on-surface mb-1">2. Direct Mutual Funds Guarantee</h4>
            <p>
              Sprout offers strictly Direct Plans of mutual fund schemes. Direct plans bypass distributor commissions, resulting in lower Total Expense Ratios (TER) compared to regular plans, maximizing compounding wealth over decades.
            </p>
          </div>

          <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container">
            <h4 className="font-semibold text-on-surface mb-1">3. Direct Custody and Fund Remittance</h4>
            <p>
              All funds and securities are handled directly through authorized clearing corporations (BSE StAR MF / NSE NMF II) and deposited into designated bank accounts of SEBI-registered Asset Management Companies (AMCs). Sprout never holds client securities or pooled investor capital.
            </p>
          </div>

          <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container">
            <h4 className="font-semibold text-on-surface mb-1">4. Data Privacy &amp; 256-Bit Encryption</h4>
            <p>
              User PAN, Aadhaar credentials, and financial information are transmitted with 256-bit TLS encryption in compliance with Indian IT Act 2000 and Digital Personal Data Protection (DPDP) standards.
            </p>
          </div>
        </div>

        <div className="pt-4 mt-2 border-t border-surface-container flex justify-end">
          <button
            type="button"
            className="px-6 h-11 bg-primary text-on-primary font-label-md rounded-xl hover:bg-primary-container transition-colors cursor-pointer"
            onClick={onClose}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

// 4. Contact Support Modal
export const ContactSupportModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('KYC Question');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-gutter animate-fade-in">
      <div className="bg-surface-container-lowest max-w-md w-full rounded-2xl p-space-xl shadow-2xl relative">
        <button
          aria-label="Close Support Form"
          className="absolute top-space-md right-space-md w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          onClick={handleClose}
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-space-md">
            <div>
              <div className="flex items-center gap-2 text-primary mb-1">
                <span className="material-symbols-outlined text-[20px]">headset_mic</span>
                <span className="text-xs font-bold uppercase tracking-wider">Human Support</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">How can we assist you?</h3>
              <p className="font-body-md text-on-surface-variant mt-1">
                Monday–Saturday: 9:00 AM – 6:00 PM IST
              </p>
            </div>

            <div>
              <label htmlFor="support-name" className="block text-xs font-semibold text-on-surface mb-1">Your Name</label>
              <input
                id="support-name"
                required
                type="text"
                placeholder="Rohan Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 px-3 bg-surface-container-low rounded-xl border border-outline-variant focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              />
            </div>

            <div>
              <label htmlFor="support-email" className="block text-xs font-semibold text-on-surface mb-1">Email Address</label>
              <input
                id="support-email"
                required
                type="email"
                placeholder="rohan@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-3 bg-surface-container-low rounded-xl border border-outline-variant focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              />
            </div>

            <div>
              <label htmlFor="support-category" className="block text-xs font-semibold text-on-surface mb-1">Topic</label>
              <select
                id="support-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-11 px-3 bg-surface-container-low rounded-xl border border-outline-variant focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              >
                <option value="KYC Question">KYC Documentation &amp; Verification</option>
                <option value="Starting SIP">Starting with ₹100 / SIP Mandates</option>
                <option value="Direct Schemes">Fund Disclosures &amp; Direct Portfolios</option>
                <option value="Technical Support">App Access &amp; Mobile Setup</option>
              </select>
            </div>

            <div>
              <label htmlFor="support-message" className="block text-xs font-semibold text-on-surface mb-1">Message</label>
              <textarea
                id="support-message"
                required
                rows={3}
                placeholder="Tell us what you'd like to understand..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-surface-container-low rounded-xl border border-outline-variant focus:outline-none focus:ring-1 focus:ring-primary text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-primary-container text-on-primary font-label-lg rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Message</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl font-bold">check</span>
            </div>
            <h3 className="font-headline-sm text-on-surface">Inquiry Received</h3>
            <p className="text-sm text-on-surface-variant max-w-xs mx-auto">
              Thank you, {name}. Reference ticket <strong className="text-primary">#SP-4912</strong> has been registered. Our support team will reply to <em>{email}</em> within 2 business hours.
            </p>
            <button
              type="button"
              className="mt-4 px-6 h-11 bg-primary text-on-primary font-label-md rounded-xl hover:bg-primary-container transition-colors cursor-pointer"
              onClick={handleClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// 5. Account Profile Preview Modal
export const AccountProfileModal: React.FC<ModalProps & { onStartKyc: () => void }> = ({
  isOpen,
  onClose,
  onStartKyc,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-gutter animate-fade-in">
      <div className="bg-surface-container-lowest max-w-md w-full rounded-2xl p-space-xl shadow-2xl relative">
        <button
          aria-label="Close Profile"
          className="absolute top-space-md right-space-md w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-2xl">person</span>
          </div>
          <div>
            <h3 className="font-title-md text-on-surface font-semibold">Investor Profile</h3>
            <span className="text-xs text-primary font-medium">Guest / Discovery Mode</span>
          </div>
        </div>

        <div className="space-y-3 bg-surface-container-low p-4 rounded-xl text-xs text-on-surface-variant">
          <div className="flex justify-between items-center py-1 border-b border-surface-container">
            <span>KYC Verification Status</span>
            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-semibold">
              Pending
            </span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-surface-container">
            <span>Mandate Minimum</span>
            <span className="font-semibold text-on-surface">₹100 / month</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Scheme Type</span>
            <span className="font-semibold text-primary">100% Direct Plans</span>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <button
            type="button"
            className="w-full h-11 bg-primary text-on-primary font-label-md rounded-xl hover:bg-primary-container transition-colors flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => {
              onClose();
              onStartKyc();
            }}
          >
            <span>Start KYC Verification</span>
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
          </button>
          <button
            type="button"
            className="w-full h-10 text-on-surface-variant hover:text-on-surface text-xs font-medium cursor-pointer"
            onClick={onClose}
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};

// 6. Compounding Engine Calculator Modal
export const CompoundingModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [monthlyAmount, setMonthlyAmount] = useState(500);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(12);

  if (!isOpen) return null;

  const result = calculateCompoundingEstimate(monthlyAmount, years, rate);

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-gutter animate-fade-in">
      <div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl p-space-xl shadow-2xl relative">
        <button
          aria-label="Close Calculator"
          className="absolute top-space-md right-space-md w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="mb-4">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Compounding Engine</span>
          <h3 className="font-headline-sm text-on-surface">See your ₹100+ grow over time</h3>
          <p className="text-xs text-on-surface-variant mt-1">
            Illustrative compounding calculation based on systematic monthly contributions.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-on-surface mb-1">
              <span>Monthly Investment</span>
              <span className="text-primary font-bold">₹{monthlyAmount.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min={100}
              max={10000}
              step={100}
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-on-surface-variant">
              <span>₹100</span>
              <span>₹5,000</span>
              <span>₹10,000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-on-surface mb-1">
              <span>Time Horizon</span>
              <span className="text-primary font-bold">{years} Years</span>
            </div>
            <input
              type="range"
              min={1}
              max={25}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-on-surface-variant">
              <span>1 yr</span>
              <span>10 yrs</span>
              <span>25 yrs</span>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-surface-container-low p-4 rounded-xl space-y-2">
            <div className="flex justify-between text-xs text-on-surface-variant">
              <span>Total Capital Invested</span>
              <span className="font-medium text-on-surface">₹{result.totalInvested.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-xs text-on-surface-variant">
              <span>Estimated Compounded Gains (@{rate}%)</span>
              <span className="font-medium text-primary">₹{result.estimatedGains.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-on-surface pt-2 border-t border-surface-container">
              <span>Total Estimated Value</span>
              <span className="text-primary font-headline-sm">₹{result.totalValue.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <p className="text-[10px] text-on-surface-variant leading-tight">
            * Mutual funds are subject to market risks. Returns are illustrative based on historical market trends and not guaranteed.
          </p>

          <button
            type="button"
            className="w-full h-11 bg-primary text-on-primary font-label-md rounded-xl hover:bg-primary-container transition-colors cursor-pointer"
            onClick={onClose}
          >
            Close Calculator
          </button>
        </div>
      </div>
    </div>
  );
};
