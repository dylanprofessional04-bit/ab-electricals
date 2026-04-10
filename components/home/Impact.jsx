import { BoltIcon } from '../ui/Icons';

const stats = [
  { value: '7p', desc: 'Per kWh on Octopus Intelligent Go — vs 25p standard rate' },
  { value: '£1,500+', desc: 'Saved per year vs public rapid charging for average EV driver' },
  { value: '70%', desc: 'Lower carbon intensity of off-peak UK grid electricity vs midday' },
  { value: '2035', desc: 'All new UK petrol & diesel car sales banned — EV is the future' },
];

export default function Impact() {
  return (
    <section className="impact" id="why">
      <div className="w">
        <div className="impact-grid rv">
          <div>
            <div className="impact-ey">Every Charger. Every Home. Every Mile.</div>
            <h2>
              Home charging isn&rsquo;t just cheaper.<br />
              <em>It&rsquo;s the right thing to do.</em>
            </h2>
            <p className="impact-sub">
              Every EV charged at home overnight on a smart tariff uses renewable-heavy grid
              electricity at off-peak hours &mdash; when wind, solar, and hydro supply is highest
              and demand is lowest. You&rsquo;re not just saving money. You&rsquo;re making the grid
              cleaner every time you plug in.
            </p>
            <div className="impact-stats">
              {stats.map((s) => (
                <div className="istat" key={s.value}>
                  <div className="istat-v">{s.value}</div>
                  <div className="istat-l">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="impact-visual rv2">
            <div className="impact-orb">
              <BoltIcon className="impact-bolt" />
            </div>
            <svg
              viewBox="0 0 360 360"
              style={{
                position: 'absolute',
                width: 360,
                height: 360,
                animation: 'spin 40s linear infinite',
                opacity: 0.25,
              }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="180" cy="180" rx="178" ry="60" stroke="rgba(59,122,245,.5)" strokeWidth="1" transform="rotate(-20 180 180)" />
              <ellipse cx="180" cy="180" rx="140" ry="45" stroke="rgba(59,122,245,.35)" strokeWidth="1" transform="rotate(30 180 180)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
