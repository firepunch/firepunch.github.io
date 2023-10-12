import React from 'react'
import { css } from '@emotion/css'

import data from '../../_projects/iob.json'
import Contact from '../../components/Contact'
import FullImage from '../../components/FullImage'
import NextProjects from '../../components/NextProjects'
import { removeProtocol } from '../../lib/utils'
import { flexStyles, fontStyles, spacing, wavyLink } from '../../shared/variables'

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
          <article className={projectStyles.detail}>
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
    ...flexStyles,
    gap: '4.8rem',
    lineHeight: 1.4,
    section: {
      paddingLeft: spacing.sidePadding,
      paddingRight: spacing.sidePadding,
    },
    a: wavyLink
  }),
  intro: css({
    'p:not(p:last-child)': {
      marginBottom: '2.4rem'
    }
  }),
  detail: css({
    fontSize: '1.6rem',
    strong: {
      display: 'block',
      margin: '2rem 0 0.4rem',
      ...fontStyles.semiBold,
      '&:first-child': {
        marginTop: 0,
      }
    }
  }),
  title: css({
    fontSize: '4.3rem',
    lineHeight: 'normal',
  }),
  summary: css({
    ...flexStyles,
    alignItems: 'start',
    gap: common.mb,
    paddingTop: spacing.topPadding,
  }),
  intro_img: css({
    borderRadius: '1rem',
  }),
  article: css({
    ...flexStyles,
    alignItems: 'start',
    marginBottom: '3.6rem'
  })
}