import { notFound } from 'next/navigation'
import ProjectDetailTemplate from '@/components/project-detail-template'
import { projects } from '@/lib/project-data'

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) notFound()

  return <ProjectDetailTemplate project={project} />
}
