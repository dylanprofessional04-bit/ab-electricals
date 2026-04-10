const areas = [
  { name: 'Enfield', pc: 'EN1 · EN2 · EN3', info: 'Primary area — same day often available', primary: true, badge: 'HQ' },
  { name: 'Edmonton', pc: 'N9 · N18', info: 'Usually same day' },
  { name: 'Waltham Cross', pc: 'EN8 · EN9', info: 'Next day available' },
  { name: 'Cheshunt', pc: 'EN7 · EN8', info: 'Next day available' },
  { name: 'Barnet', pc: 'EN4 · EN5', info: 'Next day available' },
  { name: 'Southgate', pc: 'N14 · N21', info: 'Next day available' },
  { name: 'Tottenham', pc: 'N15 · N17', info: 'Next day available' },
  { name: 'Walthamstow', pc: 'E17', info: '2–3 day lead time' },
];

export default function Areas() {
  return (
    <section className="sec areas-sec" id="areas">
      <div className="w">
        <div className="sh rv">
          <span className="ey">Service Areas</span>
          <h2>Covering <em>North London</em><br />and Hertfordshire borders</h2>
          <p>Based in Enfield EN3. Most installations booked within 24–48 hours of enquiry.</p>
        </div>
        <div className="areas-grid rv2">
          {areas.map((a) => (
            <div className={`acard${a.primary ? ' pri' : ''}`} key={a.name}>
              <div className="a-nm">{a.name}</div>
              <div className="a-pc">{a.pc}</div>
              <div className="a-info">{a.info}</div>
              {a.badge && <div className="a-badge">{a.badge}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
