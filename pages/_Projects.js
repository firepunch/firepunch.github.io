import { css } from '@emotion/css'

import ProjectCard from '../components/ProjectCard'
import ScrollToTop from '../components/ScrollToTop'
import projectSummary from '../_projects/summary.json'

export default function Projects() {
  return (
    <section className={projectStyles}>
      <ScrollToTop />
      {projectSummary?.map(project => project.featured && (
        <ProjectCard
          key={project.slug}
          {...project}
        />
      ))}
    </section>
  )
}

const projectStyles = css`
  position: relative;
`
