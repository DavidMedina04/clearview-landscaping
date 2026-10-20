import SiteHeader from '@/components/site-header'
import ContactForm from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-page-hero">
        <SiteHeader />
        <div className="page-shell contact-page-hero-content">
          <p className="eyebrow eyebrow-light"><span />Contact ClearView</p>
          <h1>Let&apos;s talk about your outdoor project.</h1>
          <p>Share a few details and we can start with a clear conversation about your property and goals.</p>
        </div>
      </section>
      <section className="page-shell contact-page-content">
        <div className="contact-form-wrap">
          <div className="contact-form-heading">
            <p className="eyebrow"><span />Request a Quote</p>
            <h2>Tell us about the work.</h2>
            <p>Fields marked required help us understand how to follow up.</p>
          </div>
          <ContactForm />
        </div>
        <aside className="contact-page-aside">
          <p className="eyebrow"><span />Local service</p>
          <h2>Serving Riverside and nearby communities.</h2>
          <p>ClearView works across Riverside, the Inland Empire, Orange County, Los Angeles, and Southern California.</p>
          <div className="contact-aside-rule" />
          <p className="contact-aside-label">PROJECT TYPES</p>
          <ul>
            <li>Full yard remodels</li>
            <li>Hardscape and patios</li>
            <li>Outdoor living and pools</li>
            <li>Planting and lawn upgrades</li>
          </ul>
        </aside>
      </section>
    </main>
  )
}
