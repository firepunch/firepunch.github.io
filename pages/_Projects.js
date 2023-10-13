import { css, cx, keyframes } from '@emotion/css'

import { colors, mq, wavyLink, flexStyles } from '../shared/variables'
import data from '../_projects/summary.json'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className={projectStyles.wrapper}>
      {data?.map(project => project.featured && (
        <ProjectCard
          key={project.slug}
          className={project.slug}
          {...project}
        />
      ))}
      <article className={cx(workStyles.card, 'madup')}>
        <svg width="110" height="130" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={workStyles.logo}>
          <path d="M4.20382 12.8817V36.0027H0V6.22754L15.0618 12.8817L30 6.22754V36.0027H25.6725V12.8255L15.0618 17.67L4.20382 12.8817Z" fill="#4A60A8" />
          <path d="M0 6.23829L14.9944 0L30 6.22705L24.5935 8.64369L17.1975 5.62008V28.5051H12.9374V5.55264L5.53016 8.66617L0 6.23829Z" fill="#595959" />
        </svg>
        <h3 className={workStyles.title}>Madup</h3>
        <p className={workStyles.description}>
          Early on at <a href="https://madup.com/en.html" target="_blank">Madup</a> I built main products for both internal and <a href="https://lever.me" target="_blank">external</a> users and <a href="https://tech.madup.com/">blog</a>.
        </p>
      </article>
      <article className='view-all'>
        <a href="/projects" className={projectStyles.viewAllBtn}>
          View all
        </a>
      </article>
    </section>
  )
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const projectStyles = {
  wrapper: css({
    [`${mq[0]}`]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(4, auto)',
      gap: '4rem',
      '.view-all': {
        gridRow: '1 / 5',
        gridColumn: '4 / 5',
      },
      '.ideas-on-board': {
        gridRow: '1 / 3',
        gridColumn: '1 / 4',
        img: {
          height: '40rem',
          objectFit: 'contain'
        }
      },
      '.walkies': {
        gridRow: '3 / 5',
        gridColumn: '1 / 3',
      },
      '.madup': {
        gridRow: '3 / 4',
        gridColumn: '3 / 4',
      }
    }
  }),
  viewAllBtn: css({
    display: 'none',
    [`${mq[0]}`]: {
      ...flexStyles,
      position: 'sticky',
      top: '50%',
      width: '20rem',
      height: '20rem',
      color: colors.black,
      border: `1px solid ${colors.black}`,
      fontSize: '2.4rem',
      margin: '0 auto',
      borderRadius: '50%',
      animation: `${spin} 10s linear .01s infinite`
    }
  })
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
    width: '11rem',
    height: '13rem',
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
