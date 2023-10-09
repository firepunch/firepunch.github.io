import React from 'react'
import { css } from '@emotion/css'

import data from '../../_projects/iob.json'
import FullImage from '../../components/FullImage'
import { removeProtocol } from '../../lib/utils'
import { colors, fontStyles, flexStyles, spacing } from '../../shared/variables'
import Contact from '../../components/Contact'
import NextProjects from '../../components/NextProjects'

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
        <section className='features'>
          {data.features?.map((feature, idx) => (
            <article key={`feature-${idx}`}>
              <h3>{feature.name}</h3>
              <p>{feature.content}</p>
            </article>
          ))}
        </section>
        <section className='learned'>
          {data.learned?.map((learn, idx) => (
            <article key={`learn-${idx}`}>
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
  project: css`
    line-height: 1.4;

    h1 {
      line-height: normal;
    }

    a {
      text-decoration-line: underline;
      text-decoration-color: ${colors.primary};

      &:hover {
        color: ${colors.primary};
        text-decoration-style: wavy;
        text-underline-offset: 0.1em;
      }
    }

    section {
      padding-left: ${spacing.doublePadding};
      padding-right: ${spacing.doublePadding};
    }

    h3 {
      margin-bottom: 0.4rem;
    }

    p {
      margin-bottom: 2.4rem;
    }
  `,
  title: css({
    ...fontStyles.title,
  }),
  summary: css({
    ...flexStyles,
    alignItems: 'start',
    gap: common.mb,
    backgroundColor: colors.iob,
    paddingTop: spacing.topPadding,
    marginBottom: '4.8rem',
  }),
  intro: css`
    
  `,
}