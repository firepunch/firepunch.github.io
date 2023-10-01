import React from 'react'
import { css } from '@emotion/css'
import { fontStyles } from "../shared/variables"
import ProjectCard from '../app/components/ProjectCard'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Project({ postData }) {
  return (
    <>
      <section className="content">
        {postData.slug}
        <h2>{postData.title}</h2>
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

const POSTS_PATH = path.join(process.cwd(), '_articles');

export async function getPostData(slug) {
  const fullPath = path.join(POSTS_PATH, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths = async () => {
  const paths = fs.readdirSync(POSTS_PATH)
    .map(path => path.replace(/\.md/, ''))
    .map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

const projectStyles = {
  recommend: css({
  })
}