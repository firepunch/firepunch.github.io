import { css } from '@emotion/css'
import projectSummary from '../_projects/summary.json'
import { fontStyles } from "../shared/variables"

import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section>
      {projectSummary?.map(project => project.featured && (
        <ProjectCard
          key={project.slug}
          {...project}
        />
      ))}
    </section>
  )
}
