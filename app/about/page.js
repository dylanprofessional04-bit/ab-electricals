import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';

export const metadata = {
  title: 'About | AB Electricals',
  description: 'NICEIC approved EV charger installers based in Enfield, North London.',
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
        <p style={{ fontFamily: 'sans-serif', color: '#888', fontSize: '16px' }}>About page — coming soon.</p>
      </main>
      <Footer />
    </>
  );
}
