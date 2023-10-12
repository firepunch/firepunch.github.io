import React from 'react'
import { css, cx } from '@emotion/css'

import data from '../../_projects/iob.json'
import Contact from '../../components/Contact'
import FullImage from '../../components/FullImage'
import NextProjects from '../../components/NextProjects'
import { removeProtocol } from '../../lib/utils'
import { flexStyles, fontStyles, mq, spacing, wavyLink } from '../../shared/variables'

export default function IdeasOnBoard() {
  return (
    <>
      <article className={projectStyles.project}>
        <section className={projectStyles.summarySection}>
          <div className={projectStyles.summaryContent}>
            <h1 className={projectStyles.title}>
              {data.title}
            </h1>
            <h2>
              {data.sub_title}
            </h2>
            <summary>
              {data.summary}
            </summary>
            <div>
              <strong>Launched</strong>
              <time dateTime={data.launched_at.num}>
                {data.launched_at.en}
              </time>
              <strong>What I Did</strong>
              <ul>
                {data.roles.map((role, idx) => (
                  <li key={`role-${idx}`}>
                    {role}
                  </li>
                ))}
              </ul>
              <strong>What I Made</strong>
              <a href={data.live_link} target="_blank">
                {removeProtocol(data.live_link)}
              </a>
            </div>
          </div>
          <FullImage
            className={projectStyles.banner}
            src={data.banner_img}
            alt="Story cards from IOB"
          />
        </section>

        <section className={cx(projectStyles.introSection)}>
          <div className={cx(projectStyles.contentSection)}>
            {data.intro?.map((content, idx) => (
              <p key={`intro-${idx}`}>
                {content}
              </p>
            ))}
          </div>
          <FullImage className={projectStyles.intro_img} src={data.intro_img} alt="Desktop screenshot from IOB" />
        </section>

        <section className={projectStyles.contentSection}>
          {data.features?.map((feature, idx) => (
            <article key={`feature-${idx}`} className={projectStyles.article}>
              <h3>{feature.name}</h3>
              <p>{feature.content}</p>
              {feature.type === 'image' ? (
                <FullImage src={feature.src} alt={feature.alt} />
              ) : (
                <video poster={feature.poster} autoPlay playsInline loop muted width="100%">
                  <source src={feature.src} type="video/mp4" />
                </video>
              )}
            </article>
          ))}
        </section>

        <section className={projectStyles.contentSection}>
          {data.learned?.map((learn, idx) => (
            <article key={`learn-${idx}`} className={projectStyles.article}>
              <h3>{learn.name}</h3>
              <p>{learn.content}</p>
            </article>
          ))}
        </section>
      </article >
      <Contact className={projectStyles.contactSection} />
      <NextProjects currentSlug={data.slug} />
    </>
  )
}

const GAP = {
  mobile: '4.8rem',
  pc: '8rem'
}

const projectStyles = {
  project: css({
    ...flexStyles,
    gap: GAP.mobile,
    lineHeight: 1.4,
    a: wavyLink,
    video: css({
      borderRadius: '1rem'
    }),
    [`${mq[0]}`]: {
      gap: GAP.pc
    }
  }),
  summarySection: css({
    padding: `${spacing.topPadding} ${spacing.sidePadding} 0`,
    [`${mq[0]}`]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      paddingLeft: spacing.pcSidePadding,
      paddingRight: spacing.pcSidePadding,
    }
  }),
  summaryContent: css({
    ...flexStyles,
    gap: '2.8rem',
    fontSize: '1.6rem',
    alignItems: 'start',
    marginBottom: GAP.mobile,
    strong: {
      display: 'block',
      margin: '2rem 0 0.4rem',
      ...fontStyles.semiBold,
      '&:first-child': {
        marginTop: 0,
      }
    },
    [`${mq[0]}`]: css({
      marginBottom: 0,
      summary: {
        fontSize: '1.8rem',
      },
    })
  }),
  title: css({
    fontSize: '4.3rem',
    lineHeight: 'normal',
    [`${mq[0]}`]: {
      fontSize: '4.8rem',
    }
  }),
  banner: css({
    width: '100%',
    [`${mq[0]}`]: css({
      marginTop: '20%',
      transform: 'scale(1.1)'
    })
  }),

  contentSection: css({
    padding: `0 ${spacing.sidePadding} 0`,
    fontSize: '1.8rem',
    [`${mq[0]}`]: css({
      padding: 0,
      maxWidth: '78rem',
    })
  }),
  introSection: css({
    p: {
      marginBottom: '2.4rem',
      '&:last-child': {
        marginBottom: GAP.mobile,
      },
    },
    [`${mq[0]}`]: css({
      ...flexStyles,
      gap: GAP.pc,
      'p:last-child': {
        marginBottom: 0,
      },
      div: {
        order: 2,
      },
      img: {
        order: 1
      }
    })
  }),
  intro_img: css({
    borderRadius: '1rem',
  }),
  article: css({
    ...flexStyles,
    alignItems: 'start',
    marginBottom: '3.6rem',
    '&:last-child': {
      marginBottom: 0,
    },
    [`${mq[0]}`]: css({
      marginBottom: GAP.pc
    })
  }),

  contactSection: css({
    [`${mq[0]}`]: css({
      maxWidth: '78rem',
      margin: '14rem auto'
    })
  })
}