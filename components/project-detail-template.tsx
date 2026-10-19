import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import SiteHeader from '@/components/site-header'
import type { Project } from '@/lib/project-data'

export default function ProjectDetailTemplate({ project }: { project: Project }) {
  return (
    <main className="project-detail-page">
      <section className="project-detail-hero">
        <Image src={project.image} alt={project.alt} fill priority sizes="100vw" className="project-detail-hero-image" />
        <div className="project-detail-hero-shade" />
        <SiteHeader />
        <div className="page-shell project-detail-hero-content">
          <p className="eyebrow eyebrow-light"><span />{project.category}</p>
          <h1>{project.name}</h1>
          <p className="project-detail-location"><MapPin size={15} aria-hidden="true" />{project.location}</p>
          <p className="project-detail-summary">{project.summary}</p>
        </div>
      </section>

      <section className="project-detail-gallery section-pad">
        <div className="page-shell">
          <div className="project-detail-section-heading">
            <p className="eyebrow"><span />Project Gallery</p>
            <h2>Built for everyday living.</h2>
          </div>
          <div className="project-detail-gallery-grid">
            {project.gallery.map((image, index) => (
              <div className="project-detail-gallery-image" key={`${project.slug}-${image}`}>
                <Image src={image} alt={`${project.name} project view ${index + 1}`} fill sizes="(max-width: 700px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-detail-services section-pad">
        <div className="page-shell project-detail-services-inner">
          <div>
            <p className="eyebrow"><span />Project Details</p>
            <h2>Services used</h2>
          </div>
          <ul>
            {project.services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
      </section>

      <section className="project-detail-cta">
        <div className="page-shell project-detail-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light"><span />Have a project in mind?</p>
            <h2>Let&apos;s plan your outdoor space.</h2>
          </div>
          <Link href="/#contact" className="button button-sage">Request a Quote <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  )
}
