'use client';

import { useState, useCallback } from 'react';
import AnnounceBar from '../components/layout/AnnounceBar';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Impact from '../components/home/Impact';
import Chargers from '../components/home/Chargers';
import Features from '../components/home/Features';
import Tariff from '../components/home/Tariff';
import Reviews from '../components/home/Reviews';
import Areas from '../components/home/Areas';
import FAQ from '../components/home/FAQ';
import CTABanner from '../components/home/CTABanner';
import QuoteModal from '../components/ui/QuoteModal';
import WhatsAppFloat from '../components/ui/WhatsAppFloat';
import MobileBar from '../components/ui/MobileBar';
import RevealObserver from '../components/ui/RevealObserver';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCharger, setModalCharger] = useState(null);
  const [modalPrice, setModalPrice] = useState(null);

  const openModal = useCallback((charger, price) => {
    if (charger) {
      setModalCharger(charger);
      setModalPrice(price);
    }
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <>
      <RevealObserver />
      <AnnounceBar />
      <Nav onOpenModal={() => openModal()} />
      <Hero onOpenModal={() => openModal()} />
      <TrustBar />
      <Impact />
      <Chargers onOpenModal={openModal} />
      <Features />
      <Tariff />
      <Reviews />
      <Areas />
      <FAQ />
      <CTABanner onOpenModal={() => openModal()} />
      <Footer />
      <WhatsAppFloat />
      <MobileBar onOpenModal={() => openModal()} />
      <QuoteModal
        isOpen={modalOpen}
        onClose={closeModal}
        initialCharger={modalCharger}
        initialPrice={modalPrice}
      />
    </>
  );
}
