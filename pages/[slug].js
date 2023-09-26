import React from 'react'
import { css } from '@emotion/css'
import { fontStyles } from "../shared/variables"
import ProjectCard from '../app/components/ProjectCard'

export default function Project() {
  return (
    <>
      <section className="content">
        <h2>Project Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <figure>
          <img src="https://via.placeholder.com/300" alt="Thumbnail" />
        </figure>

        <article>
          <h3>Background</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sed quod quas unde architecto repudiandae soluta, molestias labore animi mollitia ut aliquam culpa est doloribus voluptate dolore quibusdam laborum neque.</p>
        </article>
        <article>
          <h3>Feature A</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sed quod quas unde architecto repudiandae soluta, molestias labore animi mollitia ut aliquam culpa est doloribus voluptate dolore quibusdam laborum neque.</p>
        </article>
        <article>
          <h3>Feature B</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sed quod quas unde architecto repudiandae soluta, molestias labore animi mollitia ut aliquam culpa est doloribus voluptate dolore quibusdam laborum neque.</p>
        </article>
      </section>
      <section className={projectStyles.recommend}>
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  )
}

const projectStyles = {
  recommend: css({
  })
}