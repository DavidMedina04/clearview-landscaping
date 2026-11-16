import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'

export type ServicePageProps = {
  service: {
    slug: string
    eyebrow: string
    heroImage?: string
    heroPosition?: string
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
        <Image
          src={service.heroImage ?? service.gallery[0]}
          alt=""
          aria-hidden="true"
          fill
          unoptimized
          sizes="100vw"
          className={`service-hero-image${service.slug === 'full-yard-remodels' ? ' service-hero-image-contained' : ''}`}
          style={{ objectPosition: service.heroPosition ?? 'center' }}
        />
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

      <section className={`service-gallery section-pad${service.slug === 'full-yard-remodels' ? ' service-gallery-full-yard' : service.slug === 'hardscape' ? ' service-gallery-hardscape' : service.slug === 'outdoor-living' ? ' service-gallery-outdoor-living' : service.slug === 'pools' ? ' service-gallery-pools' : service.slug === 'planting' ? ' service-gallery-planting' : ''}`}>
        <div className="page-shell">
          <p className="eyebrow"><span /> Project Gallery</p>
          <div className={`gallery-grid${service.slug === 'full-yard-remodels' ? ' gallery-grid-full-yard' : service.slug === 'hardscape' ? ' gallery-grid-hardscape' : service.slug === 'outdoor-living' ? ' gallery-grid-outdoor-living' : service.slug === 'pools' ? ' gallery-grid-pools' : service.slug === 'planting' ? ' gallery-grid-planting' : ''}`}>
            {service.gallery.map((image, index) => (
              <div
                className="gallery-item"
                data-gallery-image={service.slug === 'full-yard-remodels' ? image.match(/full-yard-(\d+)\.(?:jpg|jpeg|webp)$/)?.[1] : service.slug === 'hardscape' ? image.match(/hardscape%23(\d+)\.(?:jpg|webp)$/)?.[1] : service.slug === 'outdoor-living' ? image.match(/outdoor%23(\d+)\.(?:jpg|webp)$/)?.[1] : service.slug === 'pools' || service.slug === 'planting' ? index + 1 : undefined}
                key={`${service.slug}-${index}`}
              >
                <img src={image} alt={`${service.title} project preview ${index + 1}`} />
              </div>
            ))}
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

      </main>
    </>
  )
}
