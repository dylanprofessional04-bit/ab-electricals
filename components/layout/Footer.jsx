import { BoltIcon, PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon } from '../ui/Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="w">
        <div className="footer-grid">

          {/* Brand column */}
          <div>
            <div className="f-logo">
              <div className="nmark"><BoltIcon /></div>
              <span style={{ fontFamily: "'Cormorant',serif", fontSize: 16, fontWeight: 700, color: 'var(--tx)' }}>
                AB Electricals
              </span>
            </div>
            <p className="f-tagline">
              NICEIC-approved EV charger installation specialists. Fixed prices, same-day
              certificates, pay after installation. Covering Enfield and North London.
            </p>
          </div>

          {/* Services */}
          <div className="fc">
            <h4>Services</h4>
            <ul>
              <li><a href="https://ab-electricals.co.uk/ev-charger-installation/">Home EV Charger Installation</a></li>
              <li><a href="https://ab-electricals.co.uk/commercial-ev-charging/">Commercial EV Charging</a></li>
              <li><a href="https://ab-electricals.co.uk/workplace-ev-charging/">Workplace EV Charging</a></li>
              <li><a href="https://ab-electricals.co.uk/commercial-electrical/">Commercial Electrical Services</a></li>
              <li><a href="https://ab-electricals.co.uk/chargers/">Chargers &amp; Pricing</a></li>
            </ul>
          </div>

          {/* Areas */}
          <div className="fc">
            <h4>Areas We Cover</h4>
            <ul>
              <li><a href="https://ab-electricals.co.uk/ev-charger-installation-enfield/">EV Chargers Enfield</a></li>
              <li><a href="https://ab-electricals.co.uk/ev-charger-installation-north-london/">EV Chargers North London</a></li>
              <li><a href="https://ab-electricals.co.uk/ev-charger-installation-hertfordshire/">EV Chargers Hertfordshire</a></li>
              <li><a href="https://ab-electricals.co.uk/ev-charger-installation-essex/">EV Chargers Essex</a></li>
              <li><a href="https://ab-electricals.co.uk/ev-charger-installation-edmonton/">EV Chargers Edmonton</a></li>
              <li><a href="https://ab-electricals.co.uk/ev-charger-installation-tottenham/">EV Chargers Tottenham</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="fc">
            <h4>Company</h4>
            <ul>
              <li><a href="https://ab-electricals.co.uk/about-us/">About Us</a></li>
              <li><a href="https://ab-electricals.co.uk/case-studies/">Case Studies</a></li>
              <li><a href="https://ab-electricals.co.uk/blog/">Blog</a></li>
              <li><a href="https://ab-electricals.co.uk/contact/">Contact / Book Installation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="fc">
            <h4>Contact</h4>
            <div className="f-contact">
              <span><MapPinIcon />Winnington Road, Enfield, EN3 5RH</span>
              <a href="tel:07395501091"><PhoneIcon />07395 501091</a>
              <a href="mailto:info@ab-electricals.co.uk"><MailIcon />info@ab-electricals.co.uk</a>
              <a href="https://wa.me/447395501091" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        <div className="fbot">
          <p>&copy; {new Date().getFullYear()} AB Electricals. All rights reserved. Registered in England.</p>
          <div className="flinks">
            <a href="https://ab-electricals.co.uk/privacy/">Privacy Policy</a>
            <a href="https://ab-electricals.co.uk/terms/">Terms &amp; Conditions</a>
            <a href="https://ab-electricals.co.uk/cookies/">Cookie Policy</a>
            <a href="https://ab-electricals.co.uk/sitemap/">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
