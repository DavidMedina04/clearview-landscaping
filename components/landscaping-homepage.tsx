import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import SiteHeader from '@/components/site-header'
import { projects } from '@/lib/project-data'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Droplets,
  Flame,
  Leaf,
  Lightbulb,
  MapPin,
  Mountain,
  ShieldCheck,
  Sprout,
  Trees,
} from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Full Yard Remodels',
    href: '/services/full-yard-remodels',
    description: 'Full front and backyard redesigns with updated layout, materials, planting, and drainage to improve function and curb appeal.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Hardscape',
    href: '/services/hardscape',
    description: 'Pavers, concrete, walkways, patios, retaining walls, and outdoor structure work built for durability and clean lines.',
    icon: Mountain,
  },
  {
    number: '03',
    title: 'Outdoor Living',
    href: '/services/outdoor-living',
    description: 'Patios, BBQ islands, fire pits, pergolas, and gathering spaces designed for relaxing, cooking, and entertaining.',
    icon: Flame,
  },
  {
    number: '04',
    title: 'Pools',
    href: '/services/pools',
    description: 'Pool-side landscaping, deck surfaces, planting, lighting, and drainage upgrades that make pool areas feel polished and functional.',
    icon: Droplets,
  },
  {
    number: '05',
    title: 'Planting',
    href: '/services/planting',
    description: 'Sod, drought-tolerant planting, decorative rock, trees, shrubs, and lawn replacement solutions tailored to Southern California.',
    icon: Sprout,
  },
]

function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className={`brand ${inverted ? 'brand-inverted' : ''}`} aria-label="ClearView Landscaping home">
      <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
      <span className="brand-wordmark"><strong>clearview</strong><small>LANDSCAPING · CALIFORNIA</small></span>
    </Link>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <Image src="/clearview-hero-completed.png" alt="Completed Southern California backyard with stone pavers, outdoor kitchen, fire feature, and water-wise planting" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <SiteHeader />
      <div className="hero-content page-shell">
        <p className="eyebrow eyebrow-light"><span /> FULL-SERVICE LANDSCAPING · RIVERSIDE</p>
        <h1 id="hero-heading">Complete Outdoor<br />Transformations</h1>
        <p className="hero-copy">Full front and backyard remodels, hardscapes, turf, irrigation, and outdoor living spaces built for Riverside and Southern California homes.</p>
        <div className="hero-actions">
          <Link href="#contact" className="button button-sage">Request a Quote <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link href="#projects" className="button button-glass">View Our Work <ArrowDown size={15} aria-hidden="true" /></Link>
        </div>
        <div className="hero-location"><MapPin size={14} aria-hidden="true" /> RIVERSIDE · INLAND EMPIRE · SOUTHERN CALIFORNIA</div>
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span><span className="hero-index-line" /><span>03</span></div>
    </section>
  )
}

function TrustStrip() {
  const highlights = [
    { title: 'Built for Southern California', copy: 'Durable, water-wise solutions', icon: Compass },
    { title: 'Full-service landscaping', copy: 'From design to final detail', icon: Leaf },
    { title: 'Clear, honest guidance', copy: 'Straightforward recommendations', icon: ShieldCheck },
    { title: 'Local professionals', copy: 'Serving Riverside and beyond', icon: MapPin },
  ]
  return (
    <section className="trust-strip" aria-label="The ClearView difference">
      <div className="trust-inner page-shell">
        {highlights.map(({ title, copy, icon: Icon }) => (
          <div className="trust-item" key={title}><Icon size={19} strokeWidth={1.5} aria-hidden="true" /><div><strong>{title}</strong><span>{copy}</span></div></div>
        ))}
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: ReactNode; copy?: string; dark?: boolean }) {
  return <div className={`section-intro ${dark ? 'section-intro-light' : ''}`}><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>
}

function ServicesSection() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="page-shell">
        <div className="services-heading"><SectionIntro eyebrow="Landscaping services" title={<>Complete outdoor<br />transformations.</>} copy="From full yard remodels and pavers to turf, planting, irrigation, and outdoor living, we build spaces that work beautifully for everyday life." /><Link href="/services/full-yard-remodels" className="text-link">Explore Services <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <div className="services-grid">
          {services.map(({ number, title, href, description, icon: Icon }) => (
            <article className="service-card" key={number}>
              <div className="service-card-top"><span>{number}</span><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></div>
              <h3>{title}</h3><p>{description}</p><Link href={href} aria-label={`View ${title} service page`}><ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <p className="services-note"><Trees size={16} aria-hidden="true" /> Also offering retaining walls, drought-tolerant landscaping, grading, and other residential landscape upgrades.</p>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="page-shell">
        <div className="projects-heading"><SectionIntro eyebrow="Featured Projects" title={<>Outdoor upgrades<br />that add value.</>} copy="See recent front yard, patio, and backyard transformations built for Riverside and Southern California homeowners." /><Link href="/projects" className="text-link">Explore Projects <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <div className="projects-grid">
          {projects.slice(0, 3).map((project, index) => (
            <article className={`project-card ${project.className}`} key={project.name}>
              <Link href={`/projects/${project.slug}`} className="project-image-wrap" aria-label={`View ${project.name} project`}>
                <Image src={project.image} alt={project.alt} fill sizes={index === 0 ? '(max-width: 700px) 100vw, 58vw' : '(max-width: 700px) 100vw, 36vw'} className="project-image" />
                <span className="project-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
              </Link>
              <div className="project-caption"><div><p>{project.caption}</p><h3>{project.name}</h3></div><span><MapPin size={13} aria-hidden="true" />{project.location}</span></div>
            </article>
          ))}
        </div>
        <div className="projects-footnote"><span>01 — 03</span><span>Thoughtful landscaping for everyday living.</span></div>
      </div>
    </section>
  )
}

function AboutSection() {
  const values = [
    'Front and backyard remodels designed around how you actually use the space.',
    'Paver patios, retaining walls, and concrete work built for durability.',
    'Drought-tolerant planting, turf, and irrigation that stay efficient and attractive.',
    'Clear communication, dependable scheduling, and craftsmanship from start to finish.',
  ]
  return (
    <section className="about-section" id="about">
      <div className="about-image"><Image src="/clearview-project-backyard.png" alt="A completed patio and backyard transformation with pavers, turf, and garden planting" fill sizes="(max-width: 760px) 100vw, 50vw" className="about-photo" /><div className="about-image-label">BUILT FOR THE CALIFORNIA WAY OF LIFE</div></div>
      <div className="about-content"><SectionIntro eyebrow="Why ClearView" title={<>Straightforward service.<br />Quality results.</>} copy="We bring practical design and dependable construction together to create outdoor spaces that look polished and perform well year-round." />
        <ul className="value-list">{values.map((value) => <li key={value}><span><Check size={13} aria-hidden="true" /></span>{value}</li>)}</ul>
        <Link href="/about" className="text-link">More About Us <ArrowRight size={16} aria-hidden="true" /></Link>
        <div className="about-stamp"><span>CV</span><small>ROOTED IN<br />RIVERSIDE, CA</small></div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { number: '01', title: 'Consultation', copy: 'We walk the space, listen to your goals, and recommend a plan that fits your property and budget.' },
    { number: '02', title: 'Planning', copy: 'We confirm layout, materials, and scope so you know exactly what to expect before work begins.' },
    { number: '03', title: 'Build', copy: 'Our crew installs the project with careful execution, quality craftsmanship, and clear communication throughout.' },
  ]
  return (
    <section className="process-section section-pad"><div className="page-shell"><div className="process-heading"><SectionIntro eyebrow="How we work" title={<>From first walk-through<br />to final detail.</>} copy="A simple process, honest guidance, and a local team focused on getting the work done right." /></div><div className="process-grid">{steps.map(({ number, title, copy }) => <article className="process-step" key={number}><span className="step-number">{number}</span><div className="step-rule" /><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
  )
}

function TestimonialSection() {
  return (
    <section className="testimonial-section"><div className="testimonial-inner page-shell"><div className="testimonial-mark" aria-hidden="true">“</div><div className="testimonial-quotes"><article className="testimonial-content"><p className="eyebrow eyebrow-light"><span /> KIND WORDS</p><blockquote>“They took the time to understand what we wanted, and the finished space feels like it was always meant to be there.”</blockquote><div className="testimonial-byline"><span className="testimonial-line" /><span>HOMEOWNER · RIVERSIDE, CA</span></div></article><article className="testimonial-content"><p className="eyebrow eyebrow-light"><span /> BUILT FOR EVERYDAY LIFE</p><blockquote>“From the first conversation to the final details, everything felt organized, professional, and genuinely easy.”</blockquote><div className="testimonial-byline"><span className="testimonial-line" /><span>HOMEOWNER · INLAND EMPIRE</span></div></article></div></div></section>
  )
}

function ServiceAreaSection() {
  const locations = ['Riverside', 'Inland Empire', 'Orange County', 'Los Angeles', 'Southern California']
  return (
    <section className="service-area-section section-pad"><div className="page-shell service-area-inner"><div><SectionIntro eyebrow="Serving Southern California" title={<>Landscape upgrades<br />for Riverside and beyond.</>} copy="From full property remodels to patios, turf, and planting projects, we work with homeowners across Riverside, the Inland Empire, Orange County, and nearby communities." /><Link href="#contact" className="text-link">See Service Areas <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="area-list" aria-label="Service areas">{locations.map((place, index) => <div className="area-row" key={place}><span className="area-number">0{index + 1}</span><span>{place}</span><ArrowUpRight size={16} aria-hidden="true" /></div>)}</div></div></section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact"><div className="contact-image"><Image src="/clearview-hero-completed.png" alt="Completed Southern California backyard with paver patio, outdoor kitchen, fire feature, and planting" fill sizes="100vw" className="contact-photo" /></div><div className="contact-overlay" /><div className="contact-content page-shell"><p className="eyebrow eyebrow-light"><span /> READY TO GET STARTED?</p><h2>Let&apos;s plan your<br />outdoor transformation.</h2><p>Tell us about your front yard, backyard, patio, turf, irrigation, or outdoor living project. We&apos;ll help you build a practical, lasting upgrade for your home.</p><Link href="/contact" className="button button-sage">Request a Quote <ArrowRight size={16} aria-hidden="true" /></Link><span className="contact-note">LOCAL TEAM · CLEAR ESTIMATES · QUALITY INSTALLATION</span></div></section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer"><div className="page-shell"><div className="footer-main"><div className="footer-brand-block"><BrandMark inverted /><p>Landscape design and installation<br />for Southern California homeowners.</p></div><div className="footer-column"><h2>Explore</h2><Link href="#services">Services</Link><Link href="/projects">Projects</Link><Link href="/about">About ClearView</Link></div><div className="footer-column"><h2>Get in touch</h2><Link href="/contact">Request a Quote</Link><Link href="mailto:hello@clearviewlandscaping.com">Email our team</Link><span>Riverside, California</span></div><div className="footer-column footer-area"><h2>Service area</h2><span>Riverside · Inland Empire</span><span>Orange County · Los Angeles</span><span>Southern California</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ClearView Landscaping</span><span>Built for the outdoors.</span><Link href="#home">BACK TO TOP ↑</Link></div></div></footer>
  )
}

export default function LandscapingHomepage() {
  return <><Hero /><TrustStrip /><ServicesSection /><ProjectsSection /><AboutSection /><ProcessSection /><TestimonialSection /><ServiceAreaSection /><ContactSection /><SiteFooter /></>
}

