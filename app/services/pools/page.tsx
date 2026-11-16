import ServicePageTemplate from '@/components/service-page-template'

const service = {
  slug: 'pools',
  eyebrow: 'Pools',
  title: 'Refined poolside landscaping that feels seamless and easy to maintain.',
  overview:
    'Pool areas require thoughtful planning, practical materials, and careful drainage. We create surrounding spaces that look clean, feel comfortable, and work with the way you use the space.',
  intro:
    'From deck surfaces to planting and drainage, our pool landscaping projects create a polished and functional outdoor experience around your pool area.',
  included: [
    'Pool-area landscaping and upgrades',
    'Pool deck and surrounding hardscape',
    'Planting for privacy and color',
    'Lighting and safety-focused features',
    'Drainage and grading support around the pool',
  ],
  gallery: [
    '/Pools/pool%231.jpg',
    '/Pools/pool%232.jpg',
    '/Pools/pool%233.jpg',
    '/Pools/pool%234.jpg',
    '/Pools/pool%235.jpg',
    '/Pools/pool%236.jpg',
    '/Pools/pool%237.jpg',
    '/Pools/pool%238.jpg',
    '/Pools/pool%239.jpg',
    '/Pools/pool%2310.jpg',
    '/Pools/pool%2311.jpg',
  ],
  details: [
    'A successful pool landscape is more than just visual appeal. It needs safe, durable surfaces, good drainage, and effective use of planting and lighting to support the area year-round.',
    'We help define the materials and layout around your pool so the result feels intentional, balanced, and easy to care for.',
  ],
  relatedServices: [
    { title: 'Outdoor Living', href: '/services/outdoor-living' },
    { title: 'Hardscape', href: '/services/hardscape' },
    { title: 'Planting', href: '/services/planting' },
  ],
  cta: 'Request a Quote',
  ctaHref: '/contact',
}

export default function Page() {
  return <ServicePageTemplate service={service} />
}
