'use client';

import { useState } from 'react';
import { PlusIcon } from '../ui/Icons';

const faqs = [
  {
    q: 'How much does EV charger installation cost in Enfield?',
    a: 'EV charger installation in Enfield costs <strong>from £899 fully installed</strong> with AB Electricals. This includes the charger, all cabling, earthing, the free survey, and your Part P certificate. Ohme ePod: £899. Ohme Home Pro: £999. Hypervolt Home 3: £1,075. Labour only: £299. All prices include VAT. You pay after installation.',
  },
  {
    q: 'How long does EV charger installation take?',
    a: 'Most home EV charger installations in Enfield take <strong>3 to 4 hours</strong>. We aim to be finished before lunch. You receive your Part P completion certificate the same day and can charge your car the same evening.',
  },
  {
    q: 'Do I need to upgrade my consumer unit?',
    a: "<strong>Most homes don't need a consumer unit upgrade.</strong> We check yours during the free survey. If it does need upgrading, we'll tell you the cost before you commit to anything.",
  },
  {
    q: 'When do I pay for my EV charger installation?',
    a: "<strong>You pay after installation, once you're satisfied.</strong> We don't take deposits. Payment is due only after the charger is installed, tested, and working correctly.",
  },
  {
    q: 'Which smart tariff should I use?',
    a: '<strong>Octopus Intelligent Go is the best for most drivers</strong> — 7p per kWh between 11:30pm and 5:30am, automated. Your charger schedules overnight charging automatically. We help you get set up before we leave on installation day.',
  },
  {
    q: 'Do you install EV chargers for commercial properties?',
    a: 'Yes. Offices, car parks, retail units and business fleets across North London. Call 07395 501 091 to discuss commercial requirements.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(-1);

  function toggle(i) {
    setOpenIdx(openIdx === i ? -1 : i);
  }

  return (
    <section className="sec faq-sec" id="faq">
      <div className="w">
        <div className="sh rv">
          <span className="ey">FAQ</span>
          <h2>Common <em>questions</em></h2>
          <p>Everything you need to know about EV charger installation in Enfield and North London.</p>
        </div>
        <div className="faq-wrap rv2">
          {faqs.map((f, i) => (
            <div className="fi" key={i}>
              <button
                className={`fq${openIdx === i ? ' open' : ''}`}
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
              >
                {f.q}
                <div className="fq-ico"><PlusIcon /></div>
              </button>
              <div className={`fa${openIdx === i ? ' open' : ''}`}>
                <div className="fa-in" dangerouslySetInnerHTML={{ __html: f.a }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
