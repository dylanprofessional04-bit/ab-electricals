'use client';

import { BoltIcon, WhatsAppIcon } from '../ui/Icons';

export default function CTABanner({ onOpenModal }) {
  return (
    <section className="cban">
      <div className="w">
        <div className="cban-in rv">
          <h2>Ready to charge at<br /><em>7p per kWh?</em></h2>
          <p>Get your fixed price today. No obligation. We call within 60 minutes.</p>
          <div className="cban-btns">
            <button className="hcta-pri" onClick={onOpenModal}>
              <BoltIcon />Get Your Fixed Price
            </button>
            <a
              href="https://wa.me/447395501091"
              className="hcta-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
