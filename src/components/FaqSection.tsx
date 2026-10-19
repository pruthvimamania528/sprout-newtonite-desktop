import React, { useState } from 'react';

interface FaqSectionProps {
  onOpenSupportModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenSupportModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'What do I need before starting KYC?',
      answer:
        'You will need your 10-character Permanent Account Number (PAN), your 12-digit Aadhaar number, and active mobile access to the phone number linked to your Aadhaar card for quick OTP verification. You may also be prompted for active bank account details (account number and IFSC code) where redemption funds will be remitted.',
    },
    {
      id: 2,
      question: 'Why are my identity details requested?',
      answer:
        'SEBI and the Reserve Bank of India mandate identity verification (KYC) to combat fraud, money laundering, and impersonation. Completing KYC confirms that your investment folios belong strictly to you and guarantees that withdrawals can only ever be paid directly to your registered bank account.',
    },
    {
      id: 3,
      question: 'What happens if verification takes longer than expected?',
      answer:
        'In most instances, digital verification is completed within 2 to 4 minutes. In cases where manual document inspection is required by the KYC Registration Agency (KRA), verification may take 24–48 business hours. You can track your exact verification status live within your dashboard without resubmitting documents.',
    },
    {
      id: 4,
      question: 'Where can I get help?',
      answer:
        'Our human customer support team is available Monday through Saturday from 9:00 AM to 6:00 PM IST via in-app chat or email at support@sproutinvest.in. You can also view step-by-step resolution walkthroughs in our dedicated Help Center.',
    },
  ];

  const handleToggle = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-full py-space-2xl" id="faqs">
      <div className="max-w-[1200px] mx-auto px-gutter-desktop">
        <div className="max-w-2xl mx-auto text-center mb-space-xl">
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold block mb-space-xs">
            Clear Answers
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
            Frequently asked questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Everything you need to know about setting up your account, identity checks, and maintaining calm control over your portfolio.
          </p>
        </div>

        {/* Functional Accessible Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-space-sm">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-surface-container-lowest rounded-xl shadow-sm transition-all overflow-hidden border border-transparent ${
                  isOpen ? 'bg-surface-container-low/60 border-surface-container' : 'hover:border-surface-container'
                }`}
              >
                <button
                  type="button"
                  className="w-full p-space-lg flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-title-md text-title-md text-on-surface pr-space-md">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-on-surface-variant text-[24px] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-space-lg pb-space-lg text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-surface-container/50 pt-space-sm animate-fade-in"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Action Prompt */}
        <div
          className="max-w-3xl mx-auto mt-space-xl p-space-lg bg-surface-container rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md"
          id="help-contact"
        >
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">headset_mic</span>
            </div>
            <div>
              <span className="font-title-md text-title-md text-on-surface block">Still have questions?</span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                Our support specialists are here to guide you calmly.
              </span>
            </div>
          </div>
          <button
            type="button"
            className="h-10 px-space-md bg-surface-container-lowest text-primary font-label-md text-label-md rounded-xl hover:bg-surface-container-high transition-colors shadow-sm shrink-0 cursor-pointer border border-transparent hover:border-surface-container-highest"
            onClick={onOpenSupportModal}
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};
