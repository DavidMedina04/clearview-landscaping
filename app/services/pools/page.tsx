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
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
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
  ctaHref: 'mailto:hello@clearviewlandscaping.com?subject=Request%20a%20quote',
}

export default function Page() {
  return <ServicePageTemplate service={service} />
}
