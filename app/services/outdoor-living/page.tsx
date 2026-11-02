import ServicePageTemplate from '@/components/service-page-template'

const service = {
  slug: 'outdoor-living',
  eyebrow: 'Outdoor Living',
  heroImage: '/Outdoor%20Living/heroimage.jpg',
  heroPosition: 'center',
  title: 'Create gathering spaces that feel like an extension of home.',
  overview:
    'Outdoor living additions give your yard practical value and everyday comfort, creating beautiful spaces for cooking, relaxing, and entertaining with family and friends.',
  intro:
    'We design and build outdoor living features that balance comfort, durability, and relaxation, with attention to layout, materials, and practical day-to-day use.',
  included: [
    'Patios for entertaining and gathering',
    'BBQ islands and outdoor kitchen builds',
    'Fire pits and seating areas',
    'Pergolas and shaded gathering zones',
    'Warm lighting and integrated hardscape details',
  ],
  gallery: [
    '/Outdoor%20Living/outdoor%235.jpg',
    '/Outdoor%20Living/outdoor%236.jpg',
    '/Outdoor%20Living/outdoor%232.jpg',
    '/Outdoor%20Living/outdoor%233.jpg',
    '/Outdoor%20Living/outdoor%231.jpg',
    '/Outdoor%20Living/outdoor%237.jpg',
    '/Outdoor%20Living/outdoor%2310.jpg',
    '/Outdoor%20Living/outdoor%234.jpg',
    '/Outdoor%20Living/outdoor%238.jpg',
    '/Outdoor%20Living/outdoor%239.jpg',
    '/Outdoor%20Living/outdoor%2311.jpg',
  ],
  details: [
    'Outdoor kitchens and gathering spaces should feel easy to use, durable, and connected to the home. We focus on layouts that support daily life as much as entertaining.',
    'From fire features to BBQ islands and shaded seating areas, we build outdoor spaces that are functional, inviting, and designed to hold up season after season.',
  ],
  relatedServices: [
    { title: 'Hardscape', href: '/services/hardscape' },
    { title: 'Full Yard Remodels', href: '/services/full-yard-remodels' },
    { title: 'Pools', href: '/services/pools' },
  ],
  cta: 'Request a Quote',
  ctaHref: '/contact',
}

export default function Page() {
  return <ServicePageTemplate service={service} />
}
