import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { css } from '@emotion/css'
import { removeProtocol } from '../../lib/utils'
import { flexStyles } from '../../shared/styles'
import Image from 'next/image'

import data from '../../_projects/iob.json'
import { colors } from '../../shared/variables'

export default function IOB() {
  return (
    <>
      <article className={projectStyles.self}>
        <h1 className={projectStyles.title}>
          {data.title}
        </h1>
        <h2 className={projectStyles.subTitle}>
          {data.sub_title}
        </h2>

        <section className={projectStyles.summary}>
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
              {data.roles.map(role => (
                <li>{role}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>What I Made</h3>
            <a
              className={projectStyles.liveLink}
              href={data.live_link}
              target="_blank"
            >
              {removeProtocol(data.live_link)}
            </a>
          </article>
          <figure className={projectStyles.bannerImg}>
            <FullImage src={data.banner_img} alt="Story cards from IOB" />
          </figure>
        </section>
        <section className='features'>
          {data.features?.map(feature => (
            <article>
              <h3>{feature.name}</h3>
              <p>{feature.content}</p>
            </article>
          ))}
        </section>
        <section className='learned'>
          {data.learned?.map(learn => (
            <article>
              <h3>{learn.name}</h3>
              <p>{learn.content}</p>
            </article>
          ))}
        </section>
      </article>
      <section className={projectStyles.nextCase}>
        <h2>Next Case</h2>
        {getRandomProjects(data.slug).map(project => (
          <ProjectCard
            key={project.slug}
            {...project}
          />
        ))}
      </section>
    </>
  )
}

const common = {
  mb: '2.8rem'
}

const projectStyles = {
  self: css({
    margin: '4.8rem 2.4rem',

    'a': {
      textDecorationLine: 'underline',
      textUnderlineOffset: '4px',
      textDecorationColor: colors.primary,

      '&:hover': {
        color: colors.primary,
      }
    }
  }),
  title: css({
    fontSize: '4.3rem',
    marginBottom: common.mb,
  }),
  subTitle: css({
    marginBottom: common.mb,
  }),
  summary: css({
    ...flexStyles,
    alignItems: 'start',
    gap: common.mb,

    'h3': {
      marginBottom: '0.4rem',
    }
  }),
  liveLink: css({

  })
}