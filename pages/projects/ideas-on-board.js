import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { css } from '@emotion/css'
import Image from 'next/image'

import data from '../../_projects/iob.json'

export default function IOB() {
  return (
    <>
      <section className={projectStyles.self}>
        <h2>{data.title}</h2>
        <h3>{data.sub_title}</h3>
        <summary>{data.summary}</summary>
        <p>
          Launched at
          <time dateTime={data.launched_at.num}>{data.launched_at.en}</time>
        </p>
        <div className="roles">
          <h4>What I Did</h4>
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
            {feature.name}
            {feature.content}
          </article>
        ))}

        {data.learned?.map(learn => (
          <article>
            {learn.name}
            {learn.content}
          </article>
        ))}
      </section>
      <section className={projectStyles.recommend}>
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  )
}

const projectStyles = {
  self: css({
    p: {
      color: 'red'
    }
  })
}