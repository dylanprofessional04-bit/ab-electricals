'use client';

import { useEffect, useRef } from 'react';
import { BoltIcon, WhatsAppIcon } from '../ui/Icons';

export default function Hero({ onOpenModal }) {
  const bgRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-mist1" />
      <div className="hero-mist2" />
      <div className="hero-mist3" />
      <div className="hero-light" />
      <div className="hero-vgradient" />

      <div className="hero-content">
        <div className="hero-wrap">
          <div className="hero-badge">
            <span className="hero-bdot" />
            <span>Enfield &amp; North London &middot; EV Specialists</span>
          </div>
          <h1>
            The leaders in<br />
            EV charger installation.<br />
            <em>Fixed price. Done right.</em>
          </h1>
          <p className="hero-sub">
            Helping Enfield homes charge cleaner, cheaper, and smarter.{' '}
            <strong>From &pound;899 fully installed</strong> &mdash; NICEIC approved, same-day
            certificate, you pay after we&rsquo;re done.
          </p>
          <div className="hero-ctas">
            <button className="hcta-pri" onClick={onOpenModal}>
              <BoltIcon />Get a Free Quote
            </button>
            <a
              href="https://wa.me/447395501091"
              className="hcta-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />WhatsApp Us
            </a>
          </div>
        </div>
        <div className="hero-strip">
          <div className="hstrip-item">
            <div className="hstrip-v">4.9&#9733;</div>
            <div className="hstrip-l">Google Rating</div>
          </div>
          <div className="hstrip-item">
            <div className="hstrip-v e">&pound;899</div>
            <div className="hstrip-l">From Installed</div>
          </div>
          <div className="hstrip-item">
            <div className="hstrip-v">Same Day</div>
            <div className="hstrip-l">Certificate</div>
          </div>
          <div className="hstrip-item">
            <div className="hstrip-v e">7p</div>
            <div className="hstrip-l">Per kWh Off-Peak</div>
          </div>
        </div>
      </div>
    </section>
  );
}
