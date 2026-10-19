import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { KycPreparation } from './components/KycPreparation';
import { AboutSprout } from './components/AboutSprout';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import {
  WelcomeModal,
  OnboardingModal,
  DisclosuresModal,
  ContactSupportModal,
  AccountProfileModal,
  CompoundingModal,
} from './components/Modals';

export default function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false);
  const [isDisclosuresModalOpen, setIsDisclosuresModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCompoundingModalOpen, setIsCompoundingModalOpen] = useState(false);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary">
      {/* Sticky Header with navigation and quick actions */}
      <Header
        onOpenAppModal={() => setIsWelcomeModalOpen(true)}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Section 1: Hero */}
          <Hero
            onStartJourney={() => setIsWelcomeModalOpen(true)}
            onOpenStoreModal={() => setIsWelcomeModalOpen(true)}
          />

          {/* Section 2: How It Works */}
          <HowItWorks />

          {/* Section 3: KYC Preparation */}
          <KycPreparation />

          {/* Section 4: About Sprout & Architecture */}
          <AboutSprout onOpenDisclosures={() => setIsDisclosuresModalOpen(true)} />

          {/* Section 5: FAQs & Support Hook */}
          <FaqSection onOpenSupportModal={() => setIsSupportModalOpen(true)} />

          {/* Section 6: Call To Action Banner */}
          <CtaBanner onGetApp={() => setIsWelcomeModalOpen(true)} />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenAppModal={() => setIsWelcomeModalOpen(true)}
        onOpenDisclosures={() => setIsDisclosuresModalOpen(true)}
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
        onOpenCompoundingModal={() => setIsCompoundingModalOpen(true)}
      />

      {/* Interactive Modals */}
      <WelcomeModal
        isOpen={isWelcomeModalOpen}
        onClose={() => setIsWelcomeModalOpen(false)}
        onProceedToOnboarding={() => {
          setIsWelcomeModalOpen(false);
          setIsOnboardingModalOpen(true);
        }}
      />

      <OnboardingModal
        isOpen={isOnboardingModalOpen}
        onClose={() => setIsOnboardingModalOpen(false)}
      />

      <DisclosuresModal
        isOpen={isDisclosuresModalOpen}
        onClose={() => setIsDisclosuresModalOpen(false)}
      />

      <ContactSupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />

      <AccountProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onStartKyc={() => {
          setIsProfileModalOpen(false);
          setIsOnboardingModalOpen(true);
        }}
      />

      <CompoundingModal
        isOpen={isCompoundingModalOpen}
        onClose={() => setIsCompoundingModalOpen(false)}
      />
    </div>
  );
}
