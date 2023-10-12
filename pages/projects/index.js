import { css } from '@emotion/css'
import React from 'react'

import data from '../../_projects/summary.json'
import Contact from '../../components/Contact'
import ProjectCard from '../../components/ProjectCard'
import { mq, spacing } from '../../shared/variables'

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
      <Contact className={projectStyles.contact} />
    </>
  )
}

const projectStyles = {
  wrapper: css({
    padding: `${spacing.topPadding} ${spacing.sidePadding} 0`,
    [`${mq[0]}`]: {
      padding: `${spacing.topPadding} ${spacing.pcSidePadding} 0`,
      display: 'grid',
      gap: '4rem',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',

      article: {
        marginBottom: 0
      }
    }
  }),
  title: css({
    fontSize: '4.3rem',
    marginBottom: '4.8rem',
    [`${mq[0]}`]: {
      marginBottom: 0,
      gridRowStart: 1,
      gridColumn: '1 / 3'
    }
  }),
  contact: css({
    [`${mq[0]}`]: {
      margin: `10rem ${spacing.pcSidePadding}`,
    }
  })
}
