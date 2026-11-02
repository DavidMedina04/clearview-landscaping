import ServicePageTemplate from '@/components/service-page-template'

const service = {
  slug: 'hardscape',
  eyebrow: 'Hardscape',
  heroImage: '/Hardscape/hardscape%236.jpg',
  heroPosition: 'center',
  title: 'Durable patios, walls, and surfaces built for California living.',
  overview:
    'We design and install hardscape features that improve structure, comfort, and flow across your yard while creating long-lasting surfaces that stand up to daily use and the local climate.',
  intro:
    'Our hardscape work combines function and curb appeal with practical layout planning, solid base preparation, and clean finishes that feel natural and enduring.',
  included: [
    'Paver patios and walkways',
    'Concrete surfaces and finishing details',
    'Retaining walls and seating walls',
    'Decorative borders and transition areas',
    'Material matching and drainage-aware installation',
  ],
  gallery: [
    '/Hardscape/hardscape%235.jpg',
    '/Hardscape/hardscape%236.jpg',
    '/Hardscape/hardscape%231.jpg',
    '/Hardscape/hardscape%232.jpg',
    '/Hardscape/hardscape%237.jpg',
    '/Hardscape/hardscape%239.jpg',
    '/Hardscape/hardscape%238.jpg',
    '/Hardscape/hardscape%2311.jpg',
    '/Hardscape/hardscape%233.jpg',
    '/Hardscape/hardscape%234.webp',
    '/Hardscape/hardscape%2310.jpg',
    '/Hardscape/hardscape%2312.jpg',
  ],
  details: [
    'Every hardscape project begins with a clear plan for layout, use, and drainage. We help define the right material, shape, and finish to support the way you use the space.',
    'From patios and seating walls to walkways and retaining features, our hardscape installations are built to look clean, perform well, and last through changing weather and daily wear.',
  ],
  relatedServices: [
    { title: 'Outdoor Living', href: '/services/outdoor-living' },
    { title: 'Full Yard Remodels', href: '/services/full-yard-remodels' },
    { title: 'Planting', href: '/services/planting' },
  ],
  cta: 'Request a Quote',
  ctaHref: '/contact',
}

export default function Page() {
  return <ServicePageTemplate service={service} />
}
