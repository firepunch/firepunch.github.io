import { useEffect, useState } from 'react'
import { css } from '@emotion/css'

import projectData from '../_projects/summary.json'
import { spacing } from '../shared/variables'
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
    <section className={projectStyles.self}>
      <h2 className={projectStyles.title}>
        Next Case
      </h2>
      {data.map(project => (
        <ProjectCard
          key={project.slug}
          {...project}
        />
      ))}
    </section>
  )
}

const projectStyles = {
  self: css({
    padding: `0 ${spacing.doublePadding}`,
    marginBottom: '8rem'
  }),
  title: css({
    fontSize: '2.4rem',
    marginBottom: '1rem'
  })
}