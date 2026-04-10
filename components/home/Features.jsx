import { SearchIcon, BoltIcon, FileUpIcon, CheckIcon } from '../ui/Icons';

const steps = [
  {
    num: '1',
    icon: SearchIcon,
    title: 'Free Survey',
    desc: "We assess your property, consumer unit, and parking setup. You get a fixed price before we touch a cable. No obligation until you're ready to book.",
    tag: 'No obligation',
  },
  {
    num: '2',
    icon: BoltIcon,
    title: 'Professional Install',
    desc: "Most home installs complete in a single morning. All cabling, earthing, smart charger setup, and app configuration included. We don't leave until it's working.",
    tag: 'Usually one morning',
  },
  {
    num: '3',
    icon: FileUpIcon,
    title: 'Certified & Connected',
    desc: "You receive your Part P certificate same day. We help you set up your smart tariff. Pay only after you're satisfied. Then charge at 7p a kWh overnight.",
    tag: 'Pay after',
  },
];

export default function Features() {
  return (
    <section className="sec features-sec" id="how">
      <div className="w">
        <div className="sh rv">
          <span className="ey">The Process</span>
          <h2>Three steps to<br /><em>plugged in</em></h2>
          <p>No guesswork, no hidden charges. We handle everything from survey to sign-off.</p>
        </div>
        <div className="feat-grid rv2">
          {steps.map((s) => (
            <div className="feat-card" key={s.num}>
              <div className="feat-n">{s.num}</div>
              <div className="feat-ico"><s.icon /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="feat-tag"><CheckIcon />{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
