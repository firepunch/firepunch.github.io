import { css } from '@emotion/css'
import React from 'react'

import data from '../../_projects/summary.json'
import Contact from '../../components/Contact'
import ProjectCard from '../../components/ProjectCard'
import { fontStyles, spacing } from '../../shared/variables'

export default function Projects() {
  return (
    <>
      <section className={projectStyles.wrapper}>
        <h1 className={projectStyles.title}>PROJECTS</h1>
        {data?.map(project => (
          <ProjectCard
            key={project.slug}
            {...project}
          />
        ))}
      </section>
      <Contact />
    </>
  )
}

const projectStyles = {
  wrapper: css({
    padding: `${spacing.topPadding} ${spacing.sidePadding} 0`
  }),
  title: css({
    fontSize: '4.3rem',
    marginBottom: '4.8rem'
  })
}

const cardStyles = {
  card: css({}),
  title: css({}),
  description: css({}),
}