const reviews = [
  {
    initial: 'M',
    name: 'Marcus T.',
    location: 'Enfield, EN2',
    text: '"Adam and his team were brilliant. Turned up on time, done in three hours, left the place spotless. Charger set up on the Octopus app before they left. I was charging the same evening."',
  },
  {
    initial: 'P',
    name: 'Priya S.',
    location: 'Southgate, N14',
    text: '"Really professional. I was quoted a fixed price and that\'s exactly what I paid — no surprises. The Ohme charger is brilliant, already saving me a fortune vs the public chargers."',
  },
  {
    initial: 'J',
    name: 'James W.',
    location: 'Waltham Cross, EN8',
    text: '"Would absolutely recommend. Excellent communication throughout. Certificate same day and they helped me switch to Octopus Intelligent Go. Charging at 7p now. The difference is remarkable."',
  },
];

export default function Reviews() {
  return (
    <section className="sec rev-sec" id="reviews">
      <div className="w">
        <div className="rev-hdr rv">
          <div>
            <span className="ey e" style={{ marginBottom: 10 }}>Google Reviews</span>
            <h2 style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 'clamp(26px,3.5vw,42px)',
              fontWeight: 900,
              letterSpacing: '-.035em',
              color: 'var(--tx)',
            }}>
              What Enfield homeowners say
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="rev-big">4.9</div>
            <div className="rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div className="rev-cnt">47 Google Reviews</div>
          </div>
        </div>
        <div className="rev-grid rv2">
          {reviews.map((r) => (
            <article className="rcard" key={r.name}>
              <div className="rc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="rc-txt">{r.text}</p>
              <div className="rc-auth">
                <div className="rc-av">{r.initial}</div>
                <div>
                  <div className="rc-nm">{r.name}</div>
                  <div className="rc-loc">{r.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
