import { css } from '@emotion/css'
import { fontStyles } from "../shared/variables"
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className='projects'>
      <div className={projectStyles.title}>
        <h2>Featured Work</h2>
        <span>Discover</span>
      </div>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  )
}

const projectStyles = {
  title: css({
    ...fontStyles.h1
  })
}