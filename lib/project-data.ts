export const projectCategories = [
  'All',
  'Full Yard Remodels',
  'Hardscape',
  'Outdoor Living',
  'Pools',
  'Planting',
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type Project = {
  slug: string
  name: string
  category: Exclude<ProjectCategory, 'All'>
  caption: string
  location: string
  image: string
  alt: string
  summary: string
  gallery: string[]
  services: string[]
  className: string
}

export const projects: Project[] = [
  {
    slug: 'riverside-backyard-remodel',
    name: 'The Riverside Patio',
    category: 'Hardscape',
    caption: 'Pavers, outdoor kitchen & fire feature',
    location: 'Riverside, CA',
    image: '/clearview-project-hardscape.png',
    alt: 'Completed Southern California patio with pavers, outdoor kitchen, fire feature, and new planting',
    summary: 'A welcoming backyard gathering space built around a durable paver patio, an outdoor kitchen, and a fire feature.',
    gallery: ['/clearview-project-hardscape.png', '/clearview-project-courtyard.png', '/clearview-project-backyard.png'],
    services: ['Paver patio installation', 'Outdoor kitchen', 'Fire feature', 'Landscape planting'],
    className: 'project-featured',
  },
  {
    slug: 'orange-county-outdoor-living',
    name: 'A Backyard Made to Gather',
    category: 'Outdoor Living',
    caption: 'Patio, turf & backyard transformation',
    location: 'Orange County, CA',
    image: '/clearview-project-backyard.png',
    alt: 'Finished family backyard with paver patio, pergola, fire pit, turf, and water-wise planting',
    summary: 'A comfortable backyard designed for gathering, with generous patio space, a pergola, and low-maintenance landscaping.',
    gallery: ['/clearview-project-backyard.png', '/clearview-project-hardscape.png', '/clearview-project-courtyard.png'],
    services: ['Patio and pavers', 'Pergola', 'Fire pit', 'Turf and planting'],
    className: '',
  },
  {
    slug: 'inland-empire-front-yard',
    name: 'A Fresh Start Out Front',
    category: 'Full Yard Remodels',
    caption: 'Front-yard remodel & turf',
    location: 'Inland Empire, CA',
    image: '/clearview-project-turf.png',
    alt: 'Contemporary California front yard with native grasses, olive tree, and lawn',
    summary: 'A refreshed front yard combining a clean lawn, structured planting, and a welcoming entry approach.',
    gallery: ['/clearview-project-turf.png', '/clearview-project-courtyard.png', '/clearview-project-hardscape.png'],
    services: ['Front-yard layout', 'Lawn and turf', 'Trees and planting', 'Entry path'],
    className: '',
  },
  {
    slug: 'riverside-courtyard-remodel',
    name: 'A Courtyard Reimagined',
    category: 'Planting',
    caption: 'Courtyard planting & hardscape',
    location: 'Riverside, CA',
    image: '/clearview-project-courtyard.png',
    alt: 'Landscaped courtyard with paved surfaces and layered planting',
    summary: 'A compact courtyard refreshed with considered planting and hardscape details for a more usable outdoor retreat.',
    gallery: ['/clearview-project-courtyard.png', '/clearview-project-turf.png', '/clearview-project-hardscape.png'],
    services: ['Courtyard planting', 'Paved surfaces', 'Landscape edging', 'Garden updates'],
    className: '',
  },
  {
    slug: 'southern-california-poolside-retreat',
    name: 'A Poolside Retreat',
    category: 'Pools',
    caption: 'Pool area & landscape refresh',
    location: 'Southern California',
    image: '/clearview-project-pool.png',
    alt: 'Residential pool area framed by a finished patio and landscaping',
    summary: 'A polished poolside setting with a clean transition between the swimming area, patio, and surrounding landscape.',
    gallery: ['/clearview-project-pool.png', '/clearview-project-backyard.png', '/clearview-project-courtyard.png'],
    services: ['Poolside landscaping', 'Patio surfaces', 'Planting', 'Drainage planning'],
    className: '',
  },
]
