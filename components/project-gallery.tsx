'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { projectCategories, projects, type ProjectCategory } from '@/lib/project-data'

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const visibleProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      <div className="project-filters" aria-label="Filter projects by service">
        {projectCategories.map((category) => (
          <button
            type="button"
            className={`project-filter${activeCategory === category ? ' is-active' : ''}`}
            aria-pressed={activeCategory === category}
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-gallery-grid">
        {visibleProjects.map((project) => (
          <Link className="project-gallery-card" href={`/projects/${project.slug}`} key={project.slug}>
            <span className="project-gallery-image">
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
            </span>
            <span className="project-gallery-caption">
              <span className="project-gallery-category">{project.category}</span>
              <strong>{project.name}</strong>
              <span className="project-gallery-location"><MapPin size={13} aria-hidden="true" />{project.location}</span>
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}
