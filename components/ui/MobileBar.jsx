'use client';

import { PhoneIcon } from './Icons';

export default function MobileBar({ onOpenModal }) {
  return (
    <div className="mob-bar">
      <button className="mob-bar-q" onClick={onOpenModal}>
        Get a Fixed Price
      </button>
      <a href="tel:07395501091" className="mob-bar-c" aria-label="Call">
        <PhoneIcon />
      </a>
    </div>
  );
}
