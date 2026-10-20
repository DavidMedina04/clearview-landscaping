import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className={`brand ${inverted ? 'brand-inverted' : ''}`} aria-label="ClearView Landscaping home">
      <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
      <span className="brand-wordmark"><strong>clearview</strong><small>LANDSCAPING · CALIFORNIA</small></span>
    </Link>
  )
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark inverted />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <div className="services-menu">
            <Link href="/services/full-yard-remodels" className="services-trigger">Services</Link>
            <div className="services-dropdown" aria-label="Services menu">
              <div className="services-dropdown-links">
                <Link href="/services/full-yard-remodels">Full Yard Remodels</Link>
                <Link href="/services/hardscape">Hardscape</Link>
                <Link href="/services/outdoor-living">Outdoor Living</Link>
                <Link href="/services/pools">Pools</Link>
                <Link href="/services/planting">Planting</Link>
              </div>
              <div className="services-feature">
                <div className="services-feature-image" aria-hidden="true" />
                <Link href="/contact" className="button button-dark">Request a Quote <ArrowUpRight size={15} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="button button-dark header-cta">Request a Quote <ArrowUpRight size={15} aria-hidden="true" /></Link>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu"><span className="menu-lines" aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            <details className="mobile-services-menu">
              <summary>Services</summary>
              <nav aria-label="Mobile services navigation">
                <Link href="/services/full-yard-remodels">Full Yard Remodels</Link>
                <Link href="/services/hardscape">Hardscape</Link>
                <Link href="/services/outdoor-living">Outdoor Living</Link>
                <Link href="/services/pools">Pools</Link>
                <Link href="/services/planting">Planting</Link>
              </nav>
            </details>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact" className="button button-dark">Request a Quote <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </nav>
        </details>
      </div>
    </header>
  )
}
