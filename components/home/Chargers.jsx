'use client';

import { BoltIcon } from '../ui/Icons';
import { EpodIcon, HomeProIcon, HypervoltIcon, LabourIcon } from '../ui/ChargerIcons';

const chargers = [
  {
    id: 'epod',
    brand: 'Ohme',
    name: 'ePod',
    badge: 'Best Value',
    featured: false,
    tagline: 'Smart scheduling. Octopus compatible. Compact and weatherproof.',
    icon: EpodIcon,
    specs: [
      { label: 'Output', value: '7.4kW' },
      { label: 'Cable', value: '6.5m' },
      { label: 'Warranty', value: '3 Yrs' },
    ],
    features: [
      { has: true, text: 'Smart tariff auto-scheduling' },
      { has: true, text: 'Octopus Intelligent Go compatible' },
      { has: true, text: 'App control and scheduling' },
      { has: true, text: 'Load balancing built-in' },
      { has: false, text: 'Solar integration' },
    ],
    priceLabel: 'Fully Installed — inc. VAT',
    price: 899,
    priceNote: 'All cabling · survey · certificate',
    btnText: 'Get a Quote',
  },
  {
    id: 'homepro',
    brand: 'Ohme',
    name: 'Home Pro',
    badge: 'Most Popular',
    featured: true,
    tagline: 'Colour display. Direct Octopus integration. See your cost per session.',
    icon: HomeProIcon,
    specs: [
      { label: 'Output', value: '7.4kW' },
      { label: 'Display', value: 'Colour' },
      { label: 'Warranty', value: '3 Yrs' },
    ],
    features: [
      { has: true, text: 'Smart tariff auto-scheduling' },
      { has: true, text: 'Octopus Intelligent — direct integration' },
      { has: true, text: 'Built-in colour display · cost per session' },
      { has: true, text: 'Load balancing built-in' },
      { has: false, text: 'Solar integration' },
    ],
    priceLabel: 'Fully Installed — inc. VAT',
    price: 999,
    priceNote: 'All cabling · survey · certificate',
    btnText: 'Get a Quote',
  },
  {
    id: 'hypervolt',
    brand: 'Hypervolt',
    name: 'Home 3',
    badge: 'Solar Ready',
    featured: false,
    tagline: 'Solar integration. All UK smart tariffs. Premium build quality.',
    icon: HypervoltIcon,
    specs: [
      { label: 'Output', value: '7.4kW' },
      { label: 'Solar', value: 'Built-in' },
      { label: 'Warranty', value: '3 Yrs' },
    ],
    features: [
      { has: true, text: 'All UK smart tariffs' },
      { has: true, text: 'Solar integration — charge free from roof' },
      { has: true, text: 'App control and scheduling' },
      { has: true, text: 'Load balancing built-in' },
      { has: true, text: 'Weatherproof IP65 rated' },
    ],
    priceLabel: 'Fully Installed — inc. VAT',
    price: 1075,
    priceNote: 'All cabling · survey · certificate',
    btnText: 'Get a Quote',
  },
  {
    id: 'labour',
    brand: 'AB Electricals',
    name: 'Labour Only',
    badge: 'Bring Your Own',
    featured: false,
    tagline: 'Already have a charger? We install any UK-approved unit.',
    icon: LabourIcon,
    specs: [
      { label: 'Includes', value: 'All wiring' },
      { label: 'Cert', value: 'Same Day' },
      { label: 'Any Make', value: '✓' },
    ],
    features: [
      { has: true, text: 'All electrical work and earthing' },
      { has: true, text: 'Part P completion certificate — same day' },
      { has: true, text: 'Any UK-approved charger brand' },
      { has: true, text: 'Pay after installation' },
      { has: false, text: 'Charger hardware not supplied' },
    ],
    priceLabel: 'Labour + Certificate — inc. VAT',
    price: 299,
    priceNote: 'Your charger · our expertise',
    btnText: 'Book Install',
  },
];

function formatPrice(price) {
  return price >= 1000 ? `£${Math.floor(price / 1000)},${String(price % 1000).padStart(3, '0')}` : `£${price}`;
}

export default function Chargers({ onOpenModal }) {
  return (
    <section className="sec chargers-sec" id="chargers">
      <div className="w">
        <div className="sh rv">
          <span className="ey e">EV Charger Options</span>
          <h2>Choose your charger.<br /><em className="e">All prices include full installation.</em></h2>
          <p>Every charger includes survey, all cabling, earthing, and your Part P certificate. Fixed price before we start. Pay after we finish.</p>
        </div>
        <div className="charger-grid rv2">
          {chargers.map((c) => (
            <div className={`ccard${c.featured ? ' featured' : ''}`} key={c.id}>
              <span className="cc-badge">{c.badge}</span>
              <div className="cc-top">
                <div className="cc-icon"><c.icon /></div>
                <div>
                  <div className="cc-brand">{c.brand}</div>
                  <div className="cc-name">{c.name}</div>
                  <div className="cc-tagline">{c.tagline}</div>
                </div>
              </div>
              <div className="cc-specs">
                {c.specs.map((s) => (
                  <div className="cc-spec" key={s.label}>
                    <div className="cc-spec-l">{s.label}</div>
                    <div className="cc-spec-v">{s.value}</div>
                  </div>
                ))}
              </div>
              <div className="cc-feats">
                {c.features.map((f, i) => (
                  <div className="ccf" key={i}>
                    <div className={`ccf-d ${f.has ? 'y' : 'n'}`}>{f.has ? '✓' : '–'}</div>
                    {f.text}
                  </div>
                ))}
              </div>
              <div className="cc-price-row">
                <div>
                  <div className="cc-price-l">{c.priceLabel}</div>
                  <div className="cc-price-v">{formatPrice(c.price)}</div>
                  <div className="cc-price-n">{c.priceNote}</div>
                </div>
                <div className="cc-price-r">Pay after<br />No deposit</div>
              </div>
              <button
                className="cc-btn"
                onClick={() => onOpenModal(`${c.brand} ${c.name}`, c.price)}
              >
                <BoltIcon />{c.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
