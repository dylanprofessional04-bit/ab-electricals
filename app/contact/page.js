import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';

export const metadata = {
  title: 'Contact | AB Electricals',
  description: 'Get in touch with AB Electricals for EV charger installation in Enfield and North London.',
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
        <p style={{ fontFamily: 'sans-serif', color: '#888', fontSize: '16px' }}>Contact page — coming soon.</p>
      </main>
      <Footer />
    </>
  );
}
