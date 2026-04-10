'use client';

const items = [
  '★★★★★ Excellent — Marcus, Enfield',
  'Fixed price from £899 · Pay after installation',
  '★★★★★ Done in 3 hours — Priya, Southgate',
  'NICEIC Approved · Part P Certified',
  '★★★★★ Recommend — James, Waltham Cross',
  'Charge at 7p/kWh · Octopus Intelligent Go',
];

export default function AnnounceBar() {
  // Duplicate items for seamless marquee loop
  const allItems = [...items, ...items];

  return (
    <div className="abar">
      <div className="abar-in">
        {allItems.map((text, i) => (
          <span key={i}>
            <span className="abi">{text}</span>
            <span className="abidot" />
          </span>
        ))}
      </div>
    </div>
  );
}
