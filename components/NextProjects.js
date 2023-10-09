import { useEffect, useState } from 'react'
import { css } from '@emotion/css'

import projectData from '../_projects/summary.json'
import { spacing, fontStyles } from '../shared/variables'
import ProjectCard from './ProjectCard'
import ScrollToTop from './ScrollToTop'

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
      <ScrollToTop />
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
  self: css`
    position: relative;
    padding-left: ${spacing.doublePadding};
    padding-right: ${spacing.doublePadding};
  `,
  title: css({
    fontSize: '2.4rem',
    marginBottom: '1rem'
  })
}