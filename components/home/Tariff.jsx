import { CheckIcon } from '../ui/Icons';

const tariffs = [
  { name: 'Octopus Intelligent Go', rate: '7p', cls: 'e', hours: '11:30pm–5:30am', compat: 'All chargers', compCls: 'yes' },
  { name: 'OVO Drive Anytime', rate: '7.5p', cls: 'e', hours: 'Smart charge', compat: 'All chargers', compCls: 'yes' },
  { name: 'E.ON Next Drive', rate: '7.5p', cls: 'e', hours: '12am–6am', compat: 'All chargers', compCls: 'yes' },
  { name: 'British Gas EV Driver', rate: '7.9p', cls: 'e', hours: '12am–5am', compat: 'All chargers', compCls: 'yes' },
  { name: 'Standard Rate', rate: '25p', cls: 'a', hours: 'Any time', compat: 'Slower savings', compCls: 'ok' },
  { name: 'Public Rapid Charger', rate: '65–79p', cls: 'r', hours: 'Any time', compat: 'No control', compCls: 'no' },
];

export default function Tariff() {
  return (
    <section className="tariff-sec" id="savings">
      <div className="w">
        <div className="tariff-grid">
          <div className="rv">
            <div className="t-ey">Smart Charging Savings</div>
            <h2>Stop paying<br /><em>25p a mile.</em></h2>
            <p>
              Every time you use a public rapid charger you&rsquo;re paying the equivalent of
              filling a petrol tank. Home charging on a smart tariff changes that permanently
              &mdash; and the smart charger does the scheduling for you.
            </p>
            <div className="t-compare">
              <div className="t-home">
                <div className="t-lbl">Home &middot; Octopus Intelligent Go</div>
                <div className="t-rate e">7p</div>
                <div className="t-note">per kWh &middot; off-peak overnight</div>
              </div>
              <div className="t-pub">
                <div className="t-lbl">Public Rapid Charger</div>
                <div className="t-rate r">79p</div>
                <div className="t-note">per kWh &middot; UK average 2025</div>
              </div>
            </div>
            <div className="t-pill">
              <CheckIcon />Save over &pound;1,500/year vs public charging
            </div>
          </div>
          <div className="tariff-tbl rv2">
            <table>
              <thead>
                <tr>
                  <th>Tariff</th>
                  <th>Rate</th>
                  <th>Hours</th>
                  <th>Works with</th>
                </tr>
              </thead>
              <tbody>
                {tariffs.map((t) => (
                  <tr key={t.name}>
                    <td className="tnm">{t.name}</td>
                    <td><span className={`trt ${t.cls}`}>{t.rate}</span></td>
                    <td>{t.hours}</td>
                    <td><span className={`tcp ${t.compCls}`}>{t.compat}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
