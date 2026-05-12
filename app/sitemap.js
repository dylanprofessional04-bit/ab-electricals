export const dynamic = 'force-static';

const base = 'https://ab-electricals.co.uk';

const routes = [
  { path: '/',                                           priority: 1.0, changeFrequency: 'weekly' },

  { path: '/ev-charger-installation/',                   priority: 0.9, changeFrequency: 'monthly' },
  { path: '/commercial-ev-charging/',                    priority: 0.8, changeFrequency: 'monthly' },
  { path: '/workplace-ev-charging/',                     priority: 0.8, changeFrequency: 'monthly' },
  { path: '/commercial-electrical/',                     priority: 0.8, changeFrequency: 'monthly' },
  { path: '/chargers/',                                  priority: 0.8, changeFrequency: 'monthly' },

  { path: '/areas/',                                     priority: 0.7, changeFrequency: 'monthly' },
  { path: '/ev-charger-installation-enfield/',           priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ev-charger-installation-north-london/',      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ev-charger-installation-hertfordshire/',     priority: 0.7, changeFrequency: 'monthly' },
  { path: '/ev-charger-installation-essex/',             priority: 0.7, changeFrequency: 'monthly' },
  { path: '/ev-charger-installation-edmonton/',          priority: 0.7, changeFrequency: 'monthly' },
  { path: '/ev-charger-installation-tottenham/',         priority: 0.7, changeFrequency: 'monthly' },

  { path: '/case-studies/',                              priority: 0.7, changeFrequency: 'weekly' },
  { path: '/blog/',                                      priority: 0.8, changeFrequency: 'weekly' },

  { path: '/about-us/',                                  priority: 0.6, changeFrequency: 'yearly' },
  { path: '/contact/',                                   priority: 0.8, changeFrequency: 'monthly' },

  { path: '/privacy/',                                   priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms/',                                     priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies/',                                   priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
