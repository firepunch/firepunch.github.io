import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { css } from '@emotion/css'
import Image from 'next/image'

import data from '../../_projects/iob.json'

export default function IOB() {
  return (
    <>
      <section className={projectStyles.self}>
        <h1 className={projectStyles.title}>
          {data.title}
        </h1>
        <h2 className={projectStyles.subTitle}>
          {data.sub_title}
        </h2>
        <summary>{data.summary}</summary>
        <p>
          Launched at&nbsp;
          <time dateTime={data.launched_at.num}>{data.launched_at.en}</time>
        </p>
        <div className="roles">
          <h3>What I Did</h3>
          <ul>
            {data.roles.map(role => (
              <li>{role}</li>
            ))}
          </ul>
        </div>
        <a href={data.live_link} target="_blank">
          {data.live_link}
        </a>

        <figure>
          <img src={data.banner} alt="Banner" />
        </figure>

        {data.features?.map(feature => (
          <article>
            <h3>{feature.name}</h3>
            <p>{feature.content}</p>
          </article>
        ))}

        {data.learned?.map(learn => (
          <article>
            <h3>{learn.name}</h3>
            <p>{learn.content}</p>
          </article>
        ))}
      </section>
              {removeProtocol(data.live_link)}
      <section className={projectStyles.recommend}>
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  )
}

const projectStyles = {
  self: css({
    margin: '4.8rem 2.4rem',
    lineHeight: '2.6rem'
  }),
  title: css({
    fontSize: '4.3rem',
    marginBottom: '2.8rem',
  }),
  subTitle: css({
    marginBottom: '2.8rem',
  })
}