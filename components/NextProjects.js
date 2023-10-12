import { useEffect, useState } from 'react'
import { css } from '@emotion/css'

import projectData from '../_projects/summary.json'
import { spacing, mq } from '../shared/variables'
import ProjectCard from './ProjectCard'

export default function NextProjects({ currentSlug }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const filterData = [...projectData]
    const targetIdx = filterData.find(item => item.slug === currentSlug)
    filterData.splice(targetIdx, 1)

    setData([filterData[0], filterData[1]])
  }, [currentSlug])

  return (
    <section className={projectStyles.wrapper}>
      <h2 className={projectStyles.title}>
        Next Case
      </h2>
      <div className={projectStyles.cards}>
        {data.map(project => (
          <ProjectCard
            key={project.slug}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

const projectStyles = {
  wrapper: css({
    padding: `0 ${spacing.sidePadding}`,
    marginBottom: '8rem',
    [`${mq[0]}`]: {
      padding: `0 ${spacing.pcSidePadding}`,
    }
  }),
  title: css({
    fontSize: '2.4rem',
    marginBottom: '1rem'
  }),
  cards: css({
    [`${mq[0]}`]: {
      display: 'grid',
      gap: spacing.pcSidePadding,
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto'
    }
  })
}