import Link from 'next/link'
import SiteHeader from '@/components/site-header'

export type ServicePageProps = {
  service: {
    slug: string
    eyebrow: string
    title: string
    overview: string
    intro: string
    included: string[]
    gallery: string[]
    details: string[]
    relatedServices: { title: string; href: string }[]
    cta: string
    ctaHref: string
  }
}

export default function ServicePageTemplate({ service }: ServicePageProps) {
  return (
    <>
      <SiteHeader />
      <main className="service-page">
      <section className="service-hero">
        <div className="service-hero-image" style={{ backgroundImage: `url(${service.gallery[0]})` }} />
        <div className="service-hero-overlay" />
        <div className="page-shell service-hero-inner">
          <p className="eyebrow eyebrow-light"><span /> {service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p className="service-hero-copy">{service.overview}</p>
          <div className="service-hero-actions">
            <Link href={service.ctaHref} className="button button-sage">{service.cta} <span aria-hidden="true">→</span></Link>
            <Link href="/services/full-yard-remodels" className="button button-glass">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="service-intro section-pad">
        <div className="page-shell service-intro-grid">
          <div>
            <p className="eyebrow"><span /> Overview</p>
            <h2>{service.title}</h2>
          </div>
          <p>{service.intro}</p>
        </div>
      </section>

      <section className="service-sections section-pad">
        <div className="page-shell service-two-col">
          <div className="service-panel">
            <p className="eyebrow"><span /> What&apos;s Included</p>
            <ul className="service-list">
              {service.included.map((item) => (
                <li key={item}><span>✓</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-panel service-panel-alt">
            <p className="eyebrow"><span /> Service Information</p>
            <div className="service-facts">
              {service.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-gallery section-pad">
        <div className="page-shell">
          <p className="eyebrow"><span /> Project Gallery</p>
          <div className="gallery-grid">
            {service.gallery.map((image, index) => (
              <div className="gallery-item" key={`${service.slug}-${index}`}>
                <img src={image} alt={`${service.title} project preview ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-before-after section-pad">
        <div className="page-shell">
          <p className="eyebrow"><span /> Before / After</p>
          <div className="before-after-grid">
            <div className="before-after-card">
              <span>Before</span>
              <div className="before-after-placeholder before" />
            </div>
            <div className="before-after-card">
              <span>After</span>
              <div className="before-after-placeholder after" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-related section-pad">
        <div className="page-shell">
          <p className="eyebrow"><span /> Related Services</p>
          <div className="related-grid">
            {service.relatedServices.map((item) => (
              <Link href={item.href} key={item.title} className="related-card">
                <span>{item.title}</span>
                <strong>→</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-wrap">
        <div className="page-shell service-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light"><span /> Ready to start?</p>
            <h3>Let&apos;s plan your outdoor project.</h3>
          </div>
          <Link href={service.ctaHref} className="button button-sage">{service.cta} <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      </main>
    </>
  )
}
