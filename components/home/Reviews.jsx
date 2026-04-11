// PLACEHOLDER — Replace with verified Google Reviews once collected.
// Per SEO docket: no fabricated testimonials. Copy real reviews from Google Business Profile.
const reviews = [
  {
    initial: '?',
    name: '[Customer Name]',
    location: 'Enfield',
    text: '"[Paste verified Google review here]"',
    placeholder: true,
  },
  {
    initial: '?',
    name: '[Customer Name]',
    location: 'North London',
    text: '"[Paste verified Google review here]"',
    placeholder: true,
  },
  {
    initial: '?',
    name: '[Customer Name]',
    location: 'Hertfordshire',
    text: '"[Paste verified Google review here]"',
    placeholder: true,
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
          {reviews.map((r, i) => (
            <article className="rcard" key={`${r.name}-${i}`}>
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
