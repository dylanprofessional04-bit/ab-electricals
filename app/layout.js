import './globals.css';

export const metadata = {
  title: 'EV Charger Installation Enfield | AB Electricals — From £899 Installed',
  description: 'EV charger installation in Enfield & North London from £899 inc. standard installation. 6 qualified engineers, 140+ jobs/month. WhatsApp us today.',
  openGraph: {
    title: 'EV Charger Installation Enfield | AB Electricals — From £899 Installed',
    description: 'EV charger installation in Enfield & North London from £899. 6 NICEIC-approved engineers. Fixed price. Same-day certificate. Pay after.',
    type: 'website',
    url: 'https://ab-electricals.co.uk/',
  },
  alternates: {
    canonical: 'https://ab-electricals.co.uk/',
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ab-electricals.co.uk/#business",
      "name": "AB Electricals",
      "description": "NICEIC-approved EV charger installation specialists in Enfield and North London. 6 qualified engineers, 140+ installations per month. Fixed price from £899 fully installed.",
      "url": "https://ab-electricals.co.uk/",
      "telephone": "+447395501091",
      "email": "info@ab-electricals.co.uk",
      "priceRange": "£899–£1,150",
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
      "serviceType": [
        "EV Charger Installation",
        "Home EV Charger Installation",
        "Commercial EV Charging",
        "Workplace EV Charging",
        "Commercial Electrical Services"
      ],
      "areaServed": [
        { "@type": "City", "name": "Enfield" },
        { "@type": "City", "name": "North London" },
        { "@type": "AdministrativeArea", "name": "Hertfordshire" },
        { "@type": "AdministrativeArea", "name": "Essex" },
        { "@type": "City", "name": "Edmonton" },
        { "@type": "City", "name": "Tottenham" },
        { "@type": "City", "name": "Waltham Cross" },
        { "@type": "City", "name": "Barnet" },
        { "@type": "City", "name": "Southgate" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://ab-electricals.co.uk/#website",
      "url": "https://ab-electricals.co.uk/",
      "name": "AB Electricals",
      "description": "EV charger installation in Enfield and North London",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ab-electricals.co.uk/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://ab-electricals.co.uk/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does EV charger installation cost in Enfield?",
          "acceptedAnswer": { "@type": "Answer", "text": "EV charger installation in Enfield costs from £899 fully installed with AB Electricals. This includes the charger, all cabling, earthing, the free survey, and your Part P certificate. Ohme ePod: £899. Ohme Home Pro (5m): £999. Hypervolt Home 3 Pro (5m): £1,075. Labour only installation: £299. All prices include VAT. You pay after installation." }
        },
        {
          "@type": "Question",
          "name": "How long does EV charger installation take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most home EV charger installations in Enfield take 3 to 4 hours. We aim to be finished before lunch. You receive your Part P completion certificate the same day and can charge your car the same evening." }
        },
        {
          "@type": "Question",
          "name": "Do I need to upgrade my consumer unit for an EV charger?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most homes do not need a consumer unit upgrade for EV charger installation. We check yours during the free survey. If it does need upgrading, we will tell you the cost before you commit to anything." }
        },
        {
          "@type": "Question",
          "name": "When do I pay for EV charger installation?",
          "acceptedAnswer": { "@type": "Answer", "text": "You pay after installation, once you are satisfied. We do not take deposits. Payment is due only after the charger is installed, tested, and working correctly." }
        },
        {
          "@type": "Question",
          "name": "Which smart tariff should I use with my EV charger?",
          "acceptedAnswer": { "@type": "Answer", "text": "Octopus Intelligent Go is the best smart tariff for most EV drivers — 7p per kWh between 11:30pm and 5:30am, fully automated. Your charger schedules overnight charging automatically. We help you get set up on the day of installation." }
        },
        {
          "@type": "Question",
          "name": "Do you install EV chargers for commercial properties?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. AB Electricals installs EV chargers for offices, car parks, retail units, and business fleets across North London. Call 07395 501091 or WhatsApp us to discuss commercial requirements." }
        }
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
