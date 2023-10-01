import { css } from '@emotion/css'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import ProjectCard from '../app/components/ProjectCard'

export default function Project({ post }) {
  return (
    <>
      <section className={projectStyles.self}>
        <h2>{post.title}</h2>

        <figure>
          <img src={post.banner} alt="Banner" />
        </figure>

        <ReactMarkdown
          components={{
            img: props => (
              <Image src={props.src} alt={props.alt} width={1200} height={200} />
            )
          }}>
          {post.contentMarkdown}
        </ReactMarkdown>
      </section>
      <hr />
      <section className={projectStyles.recommend}>
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  )
}

const POSTS_PATH = path.join(process.cwd(), '_projects');

export async function getPostBySlug(slug) {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    slug,
    contentMarkdown: matterResult.content,
    ...matterResult.data,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths = async () => {
  const paths = fs.readdirSync(POSTS_PATH)
    .map(path => path.replace(/\.mdx?$/, ''))
    .map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

const projectStyles = {
  self: css({
    p: {
      color: 'red'
    }
  })
}