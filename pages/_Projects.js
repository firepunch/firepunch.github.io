import { css } from '@emotion/css'
import projectSummary from '../_projects/summary.json'
import { fontStyles } from "../shared/variables"

import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className='projects'>
      <div className={projectStyles.title}>
        <h2>Featured Work</h2>
        <span>Discover</span>
      </div>
      {projectSummary?.map(project => (
        <ProjectCard
          key={project.slug}
          {...project}
        />
      ))}
    </section>
  )
}

const projectStyles = {
  title: css({
    ...fontStyles.h1
  })
}