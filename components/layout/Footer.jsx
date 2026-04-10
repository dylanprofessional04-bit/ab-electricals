import { BoltIcon, PhoneIcon, MailIcon, MapPinIcon } from '../ui/Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="w">
        <div className="footer-grid">
          <div>
            <div className="f-logo">
              <div className="nmark"><BoltIcon /></div>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: 16, fontWeight: 700, color: 'var(--tx)' }}>
                AB Electricals
              </span>
            </div>
            <p className="f-tagline">
              NICEIC-approved EV charger installation specialists. Fixed prices, same-day
              certificates, pay after installation. Covering Enfield and North London.
            </p>
            <div className="f-contact">
              <a href="tel:07395501091"><PhoneIcon />07395 501 091</a>
              <a href="mailto:info@ab-electricals.co.uk"><MailIcon />info@ab-electricals.co.uk</a>
              <a href="#"><MapPinIcon />Winnington Road, Enfield EN3 5RH</a>
            </div>
          </div>
          <div className="fc">
            <h4>Services</h4>
            <ul>
              <li><a href="#chargers">Home EV Installation</a></li>
              <li><a href="#chargers">Commercial EV Charging</a></li>
              <li><a href="#chargers">Labour Only Install</a></li>
              <li><a href="#">General Electrical</a></li>
              <li><a href="#">Emergency Repairs</a></li>
            </ul>
          </div>
          <div className="fc">
            <h4>Areas We Cover</h4>
            <ul>
              <li><a href="#areas">Enfield EN1–EN3</a></li>
              <li><a href="#areas">Edmonton N9, N18</a></li>
              <li><a href="#areas">Waltham Cross EN8</a></li>
              <li><a href="#areas">Barnet EN4, EN5</a></li>
              <li><a href="#areas">Southgate N14</a></li>
              <li><a href="#areas">Tottenham N17</a></li>
            </ul>
          </div>
          <div className="fc">
            <h4>Company</h4>
            <ul>
              <li><a href="#why">About AB Electricals</a></li>
              <li><a href="#reviews">Customer Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <p>&copy; 2026 AB Electricals. NICEIC Approved Contractor. Registered in England. Winnington Road, Enfield EN3 5RH.</p>
          <div className="fbadges">
            <span className="fbadge">NICEIC</span>
            <span className="fbadge">Part P</span>
            <span className="fbadge">18th Edition</span>
            <span className="fbadge">EV Specialist</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
