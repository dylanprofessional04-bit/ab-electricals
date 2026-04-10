'use client';

import { useState } from 'react';
import { BoltIcon, MoonIcon, SunIcon } from '../ui/Icons';

const navLinks = [
  { href: '#why', label: 'Why Us' },
  { href: '#chargers', label: 'Chargers' },
  { href: '#savings', label: 'Savings' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#areas', label: 'Areas' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav({ onOpenModal }) {
  const [mobOpen, setMobOpen] = useState(false);

  function toggleTheme() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ab-theme', next);
  }

  function closeMob() {
    setMobOpen(false);
  }

  return (
    <>
      <nav className="nav">
        <div className="w">
          <div className="nav-in">
            <a className="nlogo" href="#">
              <div className="nmark">
                <BoltIcon />
              </div>
              <span className="nname">AB Electricals</span>
            </a>

            <ul className="nlinks">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            <div className="nact">
              <button className="tbtn" onClick={toggleTheme} aria-label="Toggle theme">
                <svg className="imoon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                <svg className="isun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </button>
              <a href="tel:07395501091" className="ntel">07395 501 091</a>
              <button className="nqbtn" onClick={onOpenModal}>
                <BoltIcon />Get a Quote
              </button>
              <button
                className={`hbg ${mobOpen ? 'open' : ''}`}
                onClick={() => setMobOpen(!mobOpen)}
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className={`mob-nav ${mobOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMob}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
