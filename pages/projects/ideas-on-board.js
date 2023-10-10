import React from 'react'
import { css } from '@emotion/css'

import data from '../../_projects/iob.json'
import Contact from '../../components/Contact'
import FullImage from '../../components/FullImage'
import NextProjects from '../../components/NextProjects'
import { removeProtocol } from '../../lib/utils'
import { colors, flexStyles, fontStyles, spacing } from '../../shared/variables'

export default function IdeasOnBoard() {
  return (
    <>
      <article className={projectStyles.project}>
        <section className={projectStyles.summary}>
          <h1 className={projectStyles.title}>
            {data.title}
          </h1>
          <h2>
            {data.sub_title}
          </h2>
          <summary>
            {data.summary}
          </summary>
          <article>
            <h3>Launched</h3>
            <time dateTime={data.launched_at.num}>
              {data.launched_at.en}
            </time>
          </article>
          <article>
            <h3>What I Did</h3>
            <ul>
              {data.roles.map((role, idx) => (
                <li key={`role-${idx}`}>
                  {role}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3>What I Made</h3>
            <a href={data.live_link} target="_blank"            >
              {removeProtocol(data.live_link)}
            </a>
          </article>
          <FullImage src={data.banner_img} alt="Story cards from IOB" />
        </section>

        <section className={projectStyles.intro}>
          {data.intro?.map((content, idx) => (
            <p key={`intro-${idx}`}>
              {content}
            </p>
          ))}
        </section>
        <FullImage className={projectStyles.intro_img} src={data.intro_img} alt="Desktop screenshot from IOB" />

        <section className="features">
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

        <section className='learned'>
          {data.learned?.map((learn, idx) => (
            <article key={`learn-${idx}`} className={projectStyles.article}>
              <h3>{learn.name}</h3>
              <p>{learn.content}</p>
            </article>
          ))}
        </section>
      </article>
      <Contact />
      <NextProjects currentSlug={data.slug} />
    </>
  )
}

const common = {
  mb: '2.8rem',
}

const projectStyles = {
  project: css({
    lineHeight: 1.4,
    ...flexStyles,
    gap: '4.8rem',
    section: {
      paddingLeft: spacing.doublePadding,
      paddingRight: spacing.doublePadding,
    },
    h1: {
      lineHeight: 'normal',
    },
    a: {
      textDecorationLine: 'underline',
      textDecorationColor: colors.primary,
      '&:hover': {
        color: colors.primary,
        textDecorationStyle: 'wavy',
        textUnderlineOffset: '0.1em',
      }
    }
  }),
  intro: css({
    h3: {
      marginBottom: '0.4rem',
    },
    'p:not(p:last-child)': {
      marginBottom: '2.4rem'
    }
  }),
  title: css({
    ...fontStyles.title,
  }),
  summary: css({
    ...flexStyles,
    alignItems: 'start',
    gap: common.mb,
    paddingTop: spacing.topPadding,
  }),
  intro_img: css`
    border-radius: 1rem;
  `,
  article: css({
    ...flexStyles,
    alignItems: 'start',
    marginBottom: '3.6rem'
  })
}