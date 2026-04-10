'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  XIcon, ArrowRightIcon, BoltIcon, CheckIcon, ClockIcon,
  HomeIcon, BuildingIcon, WrenchIcon, InfoIcon, FlatIcon, GarageIcon,
} from './Icons';

const TITLES = ['What do you need?', 'Choose your charger', 'Your property', 'Your details', ''];
const TAGS = ['Step 1 of 4', 'Step 2 of 4', 'Step 3 of 4', 'Step 4 of 4', ''];

const chargerOptions = [
  { name: 'Ohme ePod', sub: 'Smart scheduling · Octopus compatible · 7.4kW', price: 899 },
  { name: 'Ohme Home Pro', sub: 'Colour display · Direct Octopus integration · 7.4kW', price: 999, popular: true },
  { name: 'Hypervolt Home 3', sub: 'Solar integration · All smart tariffs · 7.4kW', price: 1075 },
];

const labourOption = { name: 'Labour Only', sub: 'You supply the charger · We handle everything else', price: 299 };

export default function QuoteModal({ isOpen, onClose, initialCharger, initialPrice }) {
  const [step, setStep] = useState(1);
  const [need, setNeed] = useState('home');
  const [charger, setCharger] = useState(initialCharger || 'Ohme ePod');
  const [chargerPrice, setChargerPrice] = useState(initialPrice || 899);
  const [property, setProperty] = useState('house');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitting(false);
      if (initialCharger) {
        setCharger(initialCharger);
        setChargerPrice(initialPrice || 899);
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, initialCharger, initialPrice]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  function goStep(n) {
    if (n === 2 && need === 'labour') {
      setCharger('Labour Only');
      setChargerPrice(299);
    }
    setStep(n);
  }

  function selectCharger(name, price) {
    setCharger(name);
    setChargerPrice(price);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    formData.set('charger', `${charger} (£${chargerPrice})`);
    formData.set('need_type', need);
    formData.set('property', property);

    try {
      await fetch('https://formspree.io/f/mjgprggz', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
    } catch {
      // Advance to success regardless
    }
    goStep(5);
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  const visibleChargers = need === 'labour' ? [labourOption] : chargerOptions;

  return (
    <div
      className={`mov${isOpen ? ' open' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal">
        <div className="m-top">
          <div>
            <div className="ms-ey">{TAGS[step - 1] || ''}</div>
            <div className="ms-h">{TITLES[step - 1] || ''}</div>
          </div>
          <button className="m-close" onClick={onClose} aria-label="Close">
            <XIcon />
          </button>
        </div>

        {step < 5 && (
          <div className="m-steps">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`m-step-pill${n === step ? ' active' : ''}${n < step ? ' done' : ''}`}
              >
                <div className="m-step-n">{n}</div>
                {['Need', 'Charger', 'Property', 'Details'][n - 1]}
              </div>
            ))}
          </div>
        )}

        <div className="m-body">
          {/* Step 1 - Need */}
          {step === 1 && (
            <div className="mstep on">
              <div className="ms-d">Takes about 2 minutes. No obligation until you&rsquo;re ready to book.</div>
              <div className="ngrid">
                {[
                  { key: 'home', icon: HomeIcon, label: 'Home', sub: 'Residential' },
                  { key: 'commercial', icon: BuildingIcon, label: 'Commercial', sub: 'Office / car park' },
                  { key: 'labour', icon: WrenchIcon, label: 'Labour', sub: 'I have a charger' },
                ].map((opt) => (
                  <div
                    key={opt.key}
                    className={`nc${need === opt.key ? ' on' : ''}`}
                    onClick={() => setNeed(opt.key)}
                  >
                    <opt.icon />
                    <div className="nc-t">{opt.label}</div>
                    <div className="nc-s">{opt.sub}</div>
                  </div>
                ))}
              </div>
              <div className="m-nav">
                <div />
                <button className="m-next" onClick={() => goStep(2)}>
                  Continue <ArrowRightIcon />
                </button>
              </div>
            </div>
          )}

          {/* Step 2 - Charger */}
          {step === 2 && (
            <div className="mstep on">
              <div className="ms-d">Fixed prices &mdash; everything included. Pay after installation only.</div>
              <div className="cc-list-m">
                {visibleChargers.map((c) => (
                  <div
                    key={c.name}
                    className={`ccm${charger === c.name ? ' on' : ''}`}
                    onClick={() => selectCharger(c.name, c.price)}
                  >
                    <div className="ccm-r" />
                    <div className="ccm-nm">
                      {c.name}
                      <span>{c.sub}</span>
                    </div>
                    <div className="ccm-p">
                      &pound;{c.price >= 1000 ? `${Math.floor(c.price / 1000)},${String(c.price % 1000).padStart(3, '0')}` : c.price}
                    </div>
                    {c.popular && <div className="ccm-b">Popular</div>}
                  </div>
                ))}
              </div>
              <div className="m-nav">
                <button className="m-back" onClick={() => goStep(1)}>Back</button>
                <button className="m-next" onClick={() => goStep(3)}>
                  Continue <ArrowRightIcon />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - Property */}
          {step === 3 && (
            <div className="mstep on">
              <div className="ms-d">Helps us confirm your quote is accurate before we call.</div>
              <div className="pgrid">
                {[
                  { key: 'house', icon: HomeIcon, label: 'House', sub: 'Detached, semi or terrace' },
                  { key: 'flat', icon: FlatIcon, label: 'Flat / Apartment', sub: 'With parking access' },
                  { key: 'garage', icon: GarageIcon, label: 'Garage / Driveway', sub: 'Off-street parking' },
                  { key: 'other', icon: InfoIcon, label: 'Not Sure', sub: "We'll discuss on call" },
                ].map((opt) => (
                  <div
                    key={opt.key}
                    className={`pc${property === opt.key ? ' on' : ''}`}
                    onClick={() => setProperty(opt.key)}
                  >
                    <opt.icon />
                    <div className="pc-t">{opt.label}</div>
                    <div className="pc-s">{opt.sub}</div>
                  </div>
                ))}
              </div>
              <div className="m-nav">
                <button className="m-back" onClick={() => goStep(2)}>Back</button>
                <button className="m-next" onClick={() => goStep(4)}>
                  Continue <ArrowRightIcon />
                </button>
              </div>
            </div>
          )}

          {/* Step 4 - Details */}
          {step === 4 && (
            <div className="mstep on">
              <div className="ms-d">We&rsquo;ll call within 60 minutes to confirm your fixed price.</div>
              <form onSubmit={handleSubmit} noValidate>
                <input type="hidden" name="_subject" value="New Quote — AB Electricals" />
                <div className="f-field">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="First and last name" required autoComplete="name" />
                </div>
                <div className="f-field">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="We'll call this number" required autoComplete="tel" />
                </div>
                <div className="f-field">
                  <label>Postcode</label>
                  <input type="text" name="postcode" placeholder="e.g. EN2 6PG" required autoComplete="postal-code" />
                </div>
                <div className="f-note">
                  <InfoIcon />
                  <p>We call within 60 minutes (Mon–Sat 7am–7pm). Your fixed price is confirmed before any work starts.</p>
                </div>
                <div className="m-nav">
                  <button className="m-back" type="button" onClick={() => goStep(3)}>Back</button>
                  <button className="m-next" type="submit" disabled={submitting}>
                    <BoltIcon />{submitting ? 'Sending...' : 'Get My Fixed Price'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 5 - Success */}
          {step === 5 && (
            <div className="mstep on">
              <div className="m-succ">
                <div className="succ-ico"><CheckIcon /></div>
                <div className="succ-h">You&rsquo;re all set.</div>
                <p className="succ-p">
                  We&rsquo;ve received your request. Adam or one of the team will call within 60
                  minutes to confirm your fixed price. No obligation until you&rsquo;re ready to
                  book.
                </p>
                <div className="succ-pill">
                  <ClockIcon />Call within 60 minutes
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
