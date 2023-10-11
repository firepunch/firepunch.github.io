import { css } from '@emotion/css'
import Image from 'next/image'

import { colors, flexStyles, wavyLink } from '../shared/variables'
import data from '../_projects/summary.json'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section>
      {data?.map(project => project.featured && (
        <ProjectCard
          key={project.link}
          {...project}
        />
      ))}

      <article className={workStyles.card}>
        <Image src="/images/madup_logo.svg" alt="Madup Logo" className={workStyles.logo} width={110} height={130} />
        <h3 className={workStyles.title}>Madup</h3>
        <p className={workStyles.description}>
          Early on at <a href="https://madup.com/en.html" target="_blank">Madup</a> I built main products for both internal and <a href="https://lever.me" target="_blank">external</a> users and <a href="https://tech.madup.com/">blog</a>.
        </p>
      </article>
    </section>
  )
}

const workStyles = {
  card: css({
    position: 'relative',
    background: colors.lightBlue,
    fontSize: '1.6rem',
    padding: '3rem 2rem',
    borderRadius: '1rem',
    a: wavyLink
  }),
  logo: css({
    position: 'absolute',
    right: '2rem',
    bottom: 0,
    opacity: 0.2,
  }),
  title: css({
    fontSize: '2.2rem',
    marginBottom: '1rem',
  }),
  description: css({
    position: 'relative',
    lineHeight: 1.4,
    width: '80%',
    zIndex: 2,
  })
}