import React from 'react';

interface CtaBannerProps {
  onGetApp: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onGetApp }) => {
  return (
    <section className="w-full py-space-xl">
      <div className="max-w-[1200px] mx-auto px-gutter-desktop">
        <div className="bg-primary-container text-on-primary rounded-xl p-space-xl md:p-space-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-xl shadow-lg">
          {/* Abstract Faceted Backdrop Accent */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-10 pointer-events-none">
            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 200 200">
              <polygon points="100,20 40,90 100,180"></polygon>
              <polygon points="100,20 160,90 100,180"></polygon>
            </svg>
          </div>

          <div className="space-y-space-xs max-w-xl z-10 text-center md:text-left">
            <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">
              Start Small, Think Long
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary">
              Begin compounding from ₹100 today.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80">
              Open your account in moments. No hidden fees, no sales spam, just sensible investing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-space-sm z-10 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto h-14 px-space-xl bg-secondary-container text-on-secondary-container font-label-lg text-label-lg rounded-xl hover:bg-secondary-fixed transition-transform active:scale-[0.99] shadow-md flex items-center justify-center gap-space-xs font-bold cursor-pointer"
              onClick={onGetApp}
            >
              <span>Get the App</span>
              <span className="material-symbols-outlined text-[20px]">download</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
