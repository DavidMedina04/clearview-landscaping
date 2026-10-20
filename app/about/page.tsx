import Link from 'next/link'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import SiteHeader from '@/components/site-header'

const commitments = [
  {
    title: 'Plan for real life',
    copy: 'We shape outdoor spaces around how you want to use them, with practical layouts and materials suited to the property.',
  },
  {
    title: 'Keep communication clear',
    copy: 'We explain the scope, selections, and next steps so you know what to expect throughout the work.',
  },
  {
    title: 'Build with care',
    copy: 'From site preparation to the finishing details, our focus is dependable installation and work that lasts.',
  },
]

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page-hero">
        <SiteHeader />
        <div className="page-shell about-page-hero-content">
          <p className="eyebrow eyebrow-light"><span />About ClearView</p>
          <h1>Landscaping built around how you live.</h1>
          <p>ClearView is a local residential landscaping team helping Southern California homeowners make more of their outdoor spaces.</p>
        </div>
      </section>

      <section className="page-shell about-page-content">
        <div className="about-page-intro">
          <div>
            <p className="eyebrow"><span />Our approach</p>
            <h2>Good planning. Clear communication. Quality work.</h2>
          </div>
          <p>We bring design and installation together to make outdoor projects easier to understand and easier to use. Each plan balances appearance, function, maintenance, and the way a household spends time outside.</p>
        </div>
        <div className="about-commitments">
          {commitments.map(({ title, copy }, index) => (
            <article className="about-commitment" key={title}>
              <span className="about-commitment-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-service-area">
        <div className="page-shell about-service-area-inner">
          <div>
            <p className="eyebrow eyebrow-light"><span />Where we work</p>
            <h2>Rooted in Riverside. Serving Southern California.</h2>
            <p>We work with homeowners in Riverside, the Inland Empire, Orange County, Los Angeles, and nearby communities.</p>
          </div>
          <div className="about-area-label"><MapPin size={17} aria-hidden="true" />Riverside, California</div>
        </div>
      </section>

      <section className="about-page-cta">
        <div className="page-shell about-page-cta-inner">
          <div>
            <p className="eyebrow"><span />Start a conversation</p>
            <h2>Tell us what you have in mind.</h2>
          </div>
          <Link href="/contact" className="button button-dark">Request a Quote <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  )
}
