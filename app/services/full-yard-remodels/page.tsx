import ServicePageTemplate from '@/components/service-page-template'

const service = {
  slug: 'full-yard-remodels',
  eyebrow: 'Full Yard Remodels',
  heroImage: '/full-yard-remodels-hero.png',
  heroPosition: 'center',
  title: 'Complete outdoor transformations for everyday living.',
  overview:
    'From the front entry to the back patio, we rework underused outdoor spaces into clean, functional, and inviting landscapes that fit the way your family lives in Southern California.',
  intro:
    'ClearView builds full-yard remodeling projects with a practical approach: improved layout, better flow, modern materials, and low-maintenance landscaping that feels polished and easy to live with.',
  included: [
    'Front yard remodels and curb appeal improvements',
    'Backyard redesigns and outdoor entertaining spaces',
    'Complete redesign planning and material coordination',
    'Irrigation and drainage integration',
    'Planting and hardscape coordination for a cohesive finish',
  ],
  gallery: [
    '/full-yard-1.jpg',
    '/full-yard-2.jpg',
    '/full-yard-3.jpg',
    '/full-yard-4.jpg',
    '/full-yard-5.jpg',
    '/full-yard-6.jpg',
    '/full-yard-7.jpg',
    '/full-yard-8.webp',
    '/full-yard-9.jpg',
    '/full-yard-10.jpeg',
  ],
  details: [
    'A well-designed yard should feel connected to your home and easy to maintain. We create layout plans that improve flow, create usable zones, and align with your goals for entertaining, relaxing, and everyday function.',
    'Every project is coordinated to balance structure, planting, function, and long-term durability. We help match materials and planting choices to your property, your budget, and your climate.',
  ],
  relatedServices: [
    { title: 'Hardscape', href: '/services/hardscape' },
    { title: 'Planting', href: '/services/planting' },
    { title: 'Outdoor Living', href: '/services/outdoor-living' },
  ],
  cta: 'Request a Quote',
  ctaHref: '/contact',
}

export default function Page() {
  return <ServicePageTemplate service={service} />
}
