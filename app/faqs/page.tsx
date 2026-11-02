import SiteHeader from '@/components/site-header'

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We serve Riverside, the Inland Empire, Orange County, Los Angeles, and nearby Southern California communities.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Contact us with a few details about your property and goals. We will discuss the project and the next steps for an estimate.',
  },
  {
    question: 'What types of landscaping projects do you handle?',
    answer: 'Our work includes full yard remodels, hardscape, outdoor living, pool areas, and planting projects.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timing depends on the project scope, site conditions, materials, and scheduling. We will talk through a practical timeline during planning.',
  },
  {
    question: 'Do you provide design help?',
    answer: 'Yes. We help plan layouts, select materials, and coordinate the features needed to make the space work for your home.',
  },
  {
    question: 'Can you work with existing landscaping?',
    answer: 'Yes. We can discuss what to keep, update, or remove based on the condition of the yard and your goals for the project.',
  },
  {
    question: 'Do you install pavers, concrete, turf, and planting?',
    answer: 'Yes. These are among the common materials and features included in our hardscape, full-yard, and planting projects.',
  },
  {
    question: 'Do you offer outdoor kitchens, fire pits, or pools?',
    answer: 'We build outdoor living features such as kitchen and fire-pit areas, and provide landscaping upgrades around pools.',
  },
  {
    question: 'What should I prepare before requesting a quote?',
    answer: 'A general project description, your city or ZIP code, a budget range if known, and any goals or timing preferences are a helpful place to start.',
  },
]

export default function FaqsPage() {
  return (
    <main className="faqs-page">
      <section className="faqs-page-hero">
        <SiteHeader />
        <div className="page-shell faqs-page-hero-content">
          <p className="eyebrow eyebrow-light"><span />ClearView FAQs</p>
          <h1>Common questions, clear answers.</h1>
          <p>Learn more about our landscaping services, project planning, and service area.</p>
        </div>
      </section>
      <section className="page-shell faqs-page-content" aria-label="Frequently asked questions">
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
