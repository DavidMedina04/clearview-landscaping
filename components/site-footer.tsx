import Link from 'next/link'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { BrandMark } from '@/components/site-header'

const serviceAreas = ['Riverside', 'Inland Empire', 'Orange County', 'Los Angeles', 'Southern California']

export default function SiteFooter() {
  return (
    <>
      <section className="prefooter-cta">
        <div className="page-shell prefooter-cta-inner">
          <div className="prefooter-cta-copy">
            <p className="eyebrow"><span />READY TO START?</p>
            <h2>Let&apos;s Build Your Outdoor Space.</h2>
          </div>
          <div className="prefooter-actions">
            <Link href="/contact" className="button button-dark">Request a Quote <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link href="/contact" className="button prefooter-phone"><Phone size={15} aria-hidden="true" />(951) XXX-XXXX</Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell">
          <div className="footer-main">
            <div className="footer-brand-block">
              <BrandMark inverted />
              <p>Landscape design and installation for Southern California homeowners.</p>
            </div>
            <div className="footer-column">
              <h2>Service Areas</h2>
              {serviceAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
            <div className="footer-column">
              <h2>Contact</h2>
              <span className="footer-contact-line"><MapPin size={13} aria-hidden="true" />Riverside, California</span>
              <Link href="/contact">(951) XXX-XXXX</Link>
              <Link href="mailto:hello@clearviewlandscaping.com">hello@clearviewlandscaping.com</Link>
              <span>Business hours: To be confirmed</span>
            </div>
            <div className="footer-column">
              <h2>Explore</h2>
              <Link href="/">Home</Link>
              <Link href="/services/full-yard-remodels">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faqs">FAQs</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 ClearView Landscaping</span>
            <span>Built for the outdoors.</span>
            <Link href="/#home">Back to top ↑</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
