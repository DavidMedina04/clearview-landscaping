import ServicePageTemplate from '@/components/service-page-template'

const service = {
  slug: 'planting',
  eyebrow: 'Planting',
  title: 'Thoughtful planting designed for beauty and long-term ease.',
  overview:
    'Planting brings life, texture, and natural warmth to a landscape. We help homeowners choose low-water, durable plantings that look polished and fit the Southern California climate.',
  intro:
    'Our planting plans balance aesthetics with practical care, using drought-tolerant selections, clean material layering, and cohesive plant placement that feels natural and intentional.',
  included: [
    'Sod and lawn replacement',
    'General planting and perennial beds',
    'Drought-tolerant landscaping',
    'Decorative rock and mulch accents',
    'Trees, shrubs, and maintenance-friendly varieties',
  ],
  gallery: [
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
  ],
  details: [
    'Great planting does more than add color. It creates depth, structure, and softness that complement the hardscape and help the whole landscape feel balanced and complete.',
    'We recommend plants that are attractive, water-conscious, and appropriate for your property so your yard stays easier to maintain long after installation.',
  ],
  relatedServices: [
    { title: 'Full Yard Remodels', href: '/services/full-yard-remodels' },
    { title: 'Hardscape', href: '/services/hardscape' },
    { title: 'Pools', href: '/services/pools' },
  ],
  cta: 'Request a Quote',
  ctaHref: '/contact',
}

export default function Page() {
  return <ServicePageTemplate service={service} />
}
