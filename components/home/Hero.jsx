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
            EV Charger Installation<br />
            in Enfield &amp; North London.<br />
            <em>Fixed price. Done right.</em>
          </h1>
          <p className="hero-sub">
            <strong>From &pound;899 fully installed</strong> &mdash; 6 NICEIC-approved engineers,
            140+ installations per month. Same-day certificate, you pay after we&rsquo;re done.
          </p>
          <div className="hero-ctas">
            <a
              href="https://wa.me/447395501091?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20an%20EV%20charger%20installation"
              className="hcta-pri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />WhatsApp for a Quote
            </a>
            <a href="tel:07395501091" className="hcta-ghost">
              <BoltIcon />Call 07395 501091
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
