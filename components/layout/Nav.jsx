'use client';

import { useState } from 'react';
import { BoltIcon } from '../ui/Icons';

const navItems = [
  { href: 'https://ab-electricals.co.uk/', label: 'Home' },
  {
    href: 'https://ab-electricals.co.uk/ev-charger-installation/',
    label: 'EV Charger Installation',
    children: [
      { href: 'https://ab-electricals.co.uk/ev-charger-installation/', label: 'Home EV Chargers' },
      { href: 'https://ab-electricals.co.uk/commercial-ev-charging/', label: 'Commercial EV Charging' },
      { href: 'https://ab-electricals.co.uk/workplace-ev-charging/', label: 'Workplace EV Charging' },
    ],
  },
  { href: 'https://ab-electricals.co.uk/commercial-electrical/', label: 'Commercial Electrical' },
  { href: 'https://ab-electricals.co.uk/chargers/', label: 'Chargers & Pricing' },
  {
    href: 'https://ab-electricals.co.uk/areas/',
    label: 'Areas We Cover',
    dropLabel: 'Service Areas',
    children: [
      { href: 'https://ab-electricals.co.uk/ev-charger-installation-enfield/', label: 'Enfield' },
      { href: 'https://ab-electricals.co.uk/ev-charger-installation-north-london/', label: 'North London' },
      { href: 'https://ab-electricals.co.uk/ev-charger-installation-hertfordshire/', label: 'Hertfordshire' },
      { href: 'https://ab-electricals.co.uk/ev-charger-installation-essex/', label: 'Essex' },
      { href: 'https://ab-electricals.co.uk/ev-charger-installation-edmonton/', label: 'Edmonton' },
      { href: 'https://ab-electricals.co.uk/ev-charger-installation-tottenham/', label: 'Tottenham' },
    ],
  },
  { href: 'https://ab-electricals.co.uk/case-studies/', label: 'Case Studies' },
  { href: 'https://ab-electricals.co.uk/blog/', label: 'Blog' },
];

const WA_HREF = 'https://wa.me/447395501091?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20an%20EV%20charger%20installation';

export default function Nav({ onOpenModal }) {
  const [mobOpen, setMobOpen] = useState(false);
  const [mobExpanded, setMobExpanded] = useState(null);

  function toggleTheme() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ab-theme', next);
  }

  function closeMob() {
    setMobOpen(false);
    setMobExpanded(null);
  }

  function toggleMobSub(index) {
    setMobExpanded(mobExpanded === index ? null : index);
  }

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="w">
          <div className="nav-in">
            <a className="nlogo" href="https://ab-electricals.co.uk/">
              <div className="nmark">
                <BoltIcon />
              </div>
              <span className="nname">AB Electricals</span>
            </a>

            <ul className="nlinks">
              {navItems.map((item, i) => (
                <li key={i} className={item.children ? 'nhas-drop' : ''}>
                  <a href={item.href}>
                    {item.label}
                    {item.children && <span className="narr">▾</span>}
                  </a>
                  {item.children && (
                    <div className="ndrop">
                      {item.dropLabel && <span className="ndrop-label">{item.dropLabel}</span>}
                      {item.children.map((child) => (
                        <a key={child.href} href={child.href}>{child.label}</a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="nact">
              <button className="tbtn" onClick={toggleTheme} aria-label="Toggle theme">
                <svg className="imoon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                <svg className="isun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </button>
              <a href="tel:07395501091" className="ntel">07395 501091</a>
              <a
                href={WA_HREF}
                className="nqbtn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BoltIcon />Get a Quote
              </a>
              <button
                className={`hbg ${mobOpen ? 'open' : ''}`}
                onClick={() => setMobOpen(!mobOpen)}
                aria-label="Toggle mobile menu"
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className={`mob-nav ${mobOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {navItems.map((item, i) =>
          item.children ? (
            <div key={i} className="mob-item">
              <button className="mob-toggle" onClick={() => toggleMobSub(i)}>
                {item.label}
                <span className={`narr${mobExpanded === i ? ' flip' : ''}`}>▾</span>
              </button>
              <div className={`mob-sdrop${mobExpanded === i ? ' open' : ''}`}>
                {item.children.map((child) => (
                  <a key={child.href} href={child.href} onClick={closeMob}>{child.label}</a>
                ))}
              </div>
            </div>
          ) : (
            <a key={i} href={item.href} onClick={closeMob}>{item.label}</a>
          )
        )}
        <a href="https://ab-electricals.co.uk/contact/" onClick={closeMob}>Contact</a>
        <div className="mob-cta">
          <a href={WA_HREF} className="nqbtn" target="_blank" rel="noopener noreferrer" onClick={closeMob}>
            <BoltIcon />WhatsApp Us
          </a>
          <a href="tel:07395501091" className="ntel">07395 501091</a>
        </div>
      </nav>
    </>
  );
}
