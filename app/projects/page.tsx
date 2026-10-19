import SiteHeader from '@/components/site-header'
import ProjectGallery from '@/components/project-gallery'

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-page-intro">
        <SiteHeader />
        <div className="page-shell projects-page-intro-content">
          <p className="eyebrow eyebrow-light"><span />ClearView Project Gallery</p>
          <h1>Outdoor spaces made for living.</h1>
          <p>Explore landscape and outdoor living projects from across Southern California.</p>
        </div>
      </section>
      <section className="page-shell projects-page-content" aria-label="ClearView projects">
        <ProjectGallery />
      </section>
    </main>
  )
}
