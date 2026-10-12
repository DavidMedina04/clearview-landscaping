import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
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
    title: 'Landscape design',
    description: 'A thoughtful plan for how you want to live outside, shaped around your home and the Southern California climate.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Hardscapes & patios',
    description: 'Lasting structure and natural texture, from custom paver patios to retaining walls and walkways.',
    icon: Mountain,
  },
  {
    number: '03',
    title: 'Turf & planting',
    description: 'Lush, considered planting with the choice of premium artificial turf, sod, and water-wise native gardens.',
    icon: Sprout,
  },
  {
    number: '04',
    title: 'Outdoor living',
    description: 'Make more of home with considered pergolas, outdoor kitchens, fire features, and places to gather.',
    icon: Flame,
  },
  {
    number: '05',
    title: 'Irrigation & drainage',
    description: 'Smart irrigation, grading, and drainage solutions designed to protect your investment and conserve water.',
    icon: Droplets,
  },
  {
    number: '06',
    title: 'Lighting & details',
    description: 'Warm, purposeful lighting and the finishing details that make a landscape feel complete after dark.',
    icon: Lightbulb,
  },
]

const projects = [
  {
    name: 'The Riverside Patio',
    category: 'Pavers, outdoor kitchen & fire feature',
    location: 'Riverside, CA',
    image: '/clearview-project-hardscape.png',
    alt: 'Completed Southern California patio with pavers, outdoor kitchen, fire feature, and new planting',
    className: 'project-featured',
  },
  {
    name: 'A Backyard Made to Gather',
    category: 'Patio, turf & backyard transformation',
    location: 'Orange County, CA',
    image: '/clearview-project-backyard.png',
    alt: 'Finished family backyard with paver patio, pergola, fire pit, turf, and water-wise planting',
    className: '',
  },
  {
    name: 'A Fresh Start Out Front',
    category: 'Front-yard remodel & turf',
    location: 'Inland Empire, CA',
    image: '/clearview-project-turf.png',
    alt: 'Contemporary California front yard with native grasses, olive tree, and lawn',
    className: '',
  },
]

function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="#home" className={`brand ${inverted ? 'brand-inverted' : ''}`} aria-label="ClearView Landscaping home">
      <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
      <span className="brand-wordmark"><strong>clearview</strong><small>LANDSCAPING · CALIFORNIA</small></span>
    </Link>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark inverted />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="#home">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <Link href="#contact" className="button button-dark header-cta">Request a quote <ArrowUpRight size={15} aria-hidden="true" /></Link>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu"><span className="menu-lines" aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="#home">Home</Link><Link href="#services">Services</Link><Link href="#projects">Projects</Link><Link href="#about">About</Link><Link href="#contact">Contact</Link>
            <Link href="#contact" className="button button-dark">Request a quote <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </nav>
        </details>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <Image src="/clearview-hero-completed.png" alt="Completed Southern California backyard with stone pavers, outdoor kitchen, fire feature, and water-wise planting" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <SiteHeader />
      <div className="hero-content page-shell">
        <p className="eyebrow eyebrow-light"><span /> LANDSCAPE DESIGN · REMODELING · BUILD</p>
        <h1 id="hero-heading">Transform Your Outdoor Space</h1>
        <p className="hero-copy">Landscape remodeling, patios and pavers, outdoor living, turf, and irrigation—designed and built for the way you live in Southern California.</p>
        <div className="hero-actions">
          <Link href="#contact" className="button button-sage">Get a free project quote <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link href="#projects" className="button button-glass">View our projects <ArrowDown size={15} aria-hidden="true" /></Link>
        </div>
        <div className="hero-location"><MapPin size={14} aria-hidden="true" /> RIVERSIDE · INLAND EMPIRE · SOUTHERN CALIFORNIA</div>
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span><span className="hero-index-line" /><span>03</span></div>
    </section>
  )
}

function TrustStrip() {
  const highlights = [
    { title: 'Thoughtful by design', copy: 'Built around the way you live', icon: Compass },
    { title: 'Made for our climate', copy: 'Water-wise, lasting choices', icon: Leaf },
    { title: 'From plan to planting', copy: 'One team, start to finish', icon: ShieldCheck },
    { title: 'Locally rooted', copy: 'Serving Southern California', icon: MapPin },
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
        <div className="services-heading"><SectionIntro eyebrow="Landscaping services" title={<>Designed outdoors.<br />Built to last.</>} copy="Complete landscape remodeling, patios and pavers, outdoor kitchens, turf, planting, and irrigation—from the first plan through installation." /><Link href="#contact" className="text-link">Explore all services <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <div className="services-grid">
          {services.map(({ number, title, description, icon: Icon }) => (
            <article className="service-card" key={number}>
              <div className="service-card-top"><span>{number}</span><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></div>
              <h3>{title}</h3><p>{description}</p><Link href="#contact" aria-label={`Ask us about ${title}`}><ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <p className="services-note"><Trees size={16} aria-hidden="true" /> Also offering commercial landscapes, drought-tolerant rock, grading, retaining walls, and more.</p>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="page-shell">
        <div className="projects-heading"><SectionIntro eyebrow="Recent projects" title={<>Landscaping built<br />for everyday living.</>} copy="See what thoughtful planning and quality installation can do for a front yard, patio, or complete backyard." /><Link href="#contact" className="text-link">Start your project <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.className}`} key={project.name}>
              <Link href="#contact" className="project-image-wrap" aria-label={`Discuss a project like ${project.name}`}>
                <Image src={project.image} alt={project.alt} fill sizes={index === 0 ? '(max-width: 700px) 100vw, 58vw' : '(max-width: 700px) 100vw, 36vw'} className="project-image" />
                <span className="project-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
              </Link>
              <div className="project-caption"><div><p>{project.category}</p><h3>{project.name}</h3></div><span><MapPin size={13} aria-hidden="true" />{project.location}</span></div>
            </article>
          ))}
        </div>
        <div className="projects-footnote"><span>01 — 03</span><span>Every landscape tells a different story.</span></div>
      </div>
    </section>
  )
}

function AboutSection() {
  const values = [
    'Design that belongs to your home and your everyday life.',
    'Clear communication, honest recommendations, and no guesswork.',
    'Water-wise materials and low-maintenance solutions that last.',
    'Craftsmanship carried through every finish and final detail.',
  ]
  return (
    <section className="about-section" id="about">
      <div className="about-image"><Image src="/clearview-project-backyard.png" alt="A completed patio and backyard transformation with pavers, turf, and garden planting" fill sizes="(max-width: 760px) 100vw, 50vw" className="about-photo" /><div className="about-image-label">MADE FOR THE CALIFORNIA WAY OF LIFE</div></div>
      <div className="about-content"><SectionIntro eyebrow="Why ClearView" title={<>Good planning.<br />Quality work.</>} copy="We bring landscape design and dependable construction together, with clear communication from the first walkthrough to the finished yard." />
        <ul className="value-list">{values.map((value) => <li key={value}><span><Check size={13} aria-hidden="true" /></span>{value}</li>)}</ul>
        <Link href="#contact" className="text-link">A little more about us <ArrowRight size={16} aria-hidden="true" /></Link>
        <div className="about-stamp"><span>CV</span><small>ROOTED IN<br />RIVERSIDE, CA</small></div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { number: '01', title: 'Consultation', copy: 'We listen, walk the space, and learn what matters most to you.' },
    { number: '02', title: 'Design', copy: 'Your ideas become a clear, considered plan with materials that fit.' },
    { number: '03', title: 'Build', copy: 'Our team brings the plan to life, with care in every last detail.' },
  ]
  return (
    <section className="process-section section-pad"><div className="page-shell"><div className="process-heading"><SectionIntro eyebrow="How we work" title={<>From first walkthrough<br />to finished landscape.</>} copy="A straightforward process, a skilled local team, and a clear plan at every stage." /></div><div className="process-grid">{steps.map(({ number, title, copy }) => <article className="process-step" key={number}><span className="step-number">{number}</span><div className="step-rule" /><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
  )
}

function TestimonialSection() {
  return (
    <section className="testimonial-section"><div className="testimonial-inner page-shell"><div className="testimonial-mark" aria-hidden="true">“</div><div className="testimonial-quotes"><article className="testimonial-content"><p className="eyebrow eyebrow-light"><span /> KIND WORDS</p><blockquote>“They took the time to understand what we wanted, and the finished space feels like it was always meant to be there.”</blockquote><div className="testimonial-byline"><span className="testimonial-line" /><span>HOMEOWNER · RIVERSIDE, CA</span></div></article><article className="testimonial-content"><p className="eyebrow eyebrow-light"><span /> BUILT AROUND YOU</p><blockquote>“From the first conversation to the final details, everything felt considered, clear, and genuinely easy.”</blockquote><div className="testimonial-byline"><span className="testimonial-line" /><span>HOMEOWNER · INLAND EMPIRE</span></div></article></div></div></section>
  )
}

function ServiceAreaSection() {
  const locations = ['Riverside', 'Inland Empire', 'Orange County', 'Los Angeles', 'Southern California']
  return (
    <section className="service-area-section section-pad"><div className="page-shell service-area-inner"><div><SectionIntro eyebrow="Serving Southern California" title={<>Local landscape<br />design & installation.</>} copy="One experienced team for outdoor upgrades across Riverside, the Inland Empire, Orange County, Los Angeles, and nearby communities." /><Link href="#contact" className="text-link">Check your area <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="area-list" aria-label="Service areas">{locations.map((place, index) => <div className="area-row" key={place}><span className="area-number">0{index + 1}</span><span>{place}</span><ArrowUpRight size={16} aria-hidden="true" /></div>)}</div></div></section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact"><div className="contact-image"><Image src="/clearview-hero-completed.png" alt="Completed Southern California backyard with paver patio, outdoor kitchen, fire feature, and planting" fill sizes="100vw" className="contact-photo" /></div><div className="contact-overlay" /><div className="contact-content page-shell"><p className="eyebrow eyebrow-light"><span /> READY TO GET STARTED?</p><h2>Let&apos;s plan your<br />yard transformation.</h2><p>Tell us about your landscape remodel, patio, turf, or outdoor living project. We&apos;ll help you take the next step.</p><Link href="mailto:hello@clearviewlandscaping.com?subject=Landscape%20project%20quote" className="button button-sage">Request a project quote <ArrowRight size={16} aria-hidden="true" /></Link><span className="contact-note">LOCAL TEAM · CLEAR ESTIMATES · QUALITY INSTALLATION</span></div></section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer"><div className="page-shell"><div className="footer-main"><div className="footer-brand-block"><BrandMark inverted /><p>Landscape design and installation,<br />serving Southern California homeowners.</p></div><div className="footer-column"><h2>Explore</h2><Link href="#services">Services</Link><Link href="#projects">Projects</Link><Link href="#about">About ClearView</Link></div><div className="footer-column"><h2>Get in touch</h2><Link href="#contact">Request a quote</Link><Link href="mailto:hello@clearviewlandscaping.com">Email our team</Link><span>Riverside, California</span></div><div className="footer-column footer-area"><h2>Service area</h2><span>Riverside · Inland Empire</span><span>Orange County · Los Angeles</span><span>Southern California</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ClearView Landscaping</span><span>Designed for the outside.</span><Link href="#home">BACK TO TOP ↑</Link></div></div></footer>
  )
}

export default function LandscapingHomepage() {
  return <><Hero /><TrustStrip /><ServicesSection /><ProjectsSection /><AboutSection /><ProcessSection /><TestimonialSection /><ServiceAreaSection /><ContactSection /><SiteFooter /></>
}

