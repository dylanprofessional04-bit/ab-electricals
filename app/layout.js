import './globals.css';

export const metadata = {
  title: 'EV Charger Installation Enfield & North London | AB Electricals',
  description: 'NICEIC-approved EV charger installation in Enfield from £899 fully installed. Fixed price, same-day certificate, pay after installation. Serving EN1–EN3 and North London.',
  openGraph: {
    title: 'EV Charger Installation Enfield | AB Electricals',
    description: 'Fixed price EV charger installation from £899. NICEIC approved. Same-day certificate. Pay after.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ab-electricals.co.uk',
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ab-electricals.co.uk/#business",
      "name": "AB Electricals",
      "description": "NICEIC-approved EV charger installation specialists in Enfield and North London",
      "url": "https://ab-electricals.co.uk",
      "telephone": "07395501091",
      "email": "info@ab-electricals.co.uk",
      "priceRange": "££",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Winnington Road",
        "addressLocality": "Enfield",
        "postalCode": "EN3 5RH",
        "addressRegion": "Greater London",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.6538",
        "longitude": "-0.0598"
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "17:00" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Enfield" },
        { "@type": "City", "name": "Edmonton" },
        { "@type": "City", "name": "Waltham Cross" },
        { "@type": "City", "name": "Cheshunt" },
        { "@type": "City", "name": "Barnet" },
        { "@type": "City", "name": "Southgate" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How much does EV charger installation cost in Enfield?", "acceptedAnswer": { "@type": "Answer", "text": "EV charger installation in Enfield costs from £899 fully installed with AB Electricals. This includes the charger, all cabling, earthing, survey and Part P certificate. Ohme ePod £899, Ohme Home Pro £999, Hypervolt Home 3 £1,075. Labour only £299." } },
        { "@type": "Question", "name": "How long does EV charger installation take?", "acceptedAnswer": { "@type": "Answer", "text": "Most home EV charger installations in Enfield take 3 to 4 hours. You receive your Part P completion certificate the same day." } },
        { "@type": "Question", "name": "When do I pay for EV charger installation?", "acceptedAnswer": { "@type": "Answer", "text": "You pay after installation, once you are satisfied. No deposit required." } }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700;1,9..144,900&family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('ab-theme');var d=window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',s||(d?'dark':'light'));})();`
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
