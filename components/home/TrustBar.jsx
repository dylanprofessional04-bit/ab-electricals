import { ShieldIcon, FileIcon, ClockIcon, CardIcon, BoltIcon, CheckIcon } from '../ui/Icons';

const badges = [
  { icon: ShieldIcon, label: 'NICEIC Approved', sub: 'Certified Contractor' },
  { icon: FileIcon, label: 'Part P Certified', sub: 'Building Regulations' },
  { icon: ClockIcon, label: 'Same-Day Cert', sub: 'Part P same day' },
  { icon: CardIcon, label: 'Pay After', sub: 'Installation only' },
  { icon: BoltIcon, label: 'Smart Charge Ready', sub: 'All major tariffs' },
  { icon: CheckIcon, label: '18th Edition', sub: 'Wiring Regulations' },
];

export default function TrustBar() {
  return (
    <div className="trust">
      <div className="w">
        <div className="trust-in">
          {badges.map((b) => (
            <div className="ti" key={b.label}>
              <div className="ti-ico"><b.icon /></div>
              <div className="ti-tx">
                {b.label}
                <span>{b.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
