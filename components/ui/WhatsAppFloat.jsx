import { WhatsAppIcon } from './Icons';

export default function WhatsAppFloat() {
  return (
    <div className="wa-float">
      <div className="wa-tip">Chat on WhatsApp</div>
      <a
        href="https://wa.me/447395501091"
        className="wa-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
