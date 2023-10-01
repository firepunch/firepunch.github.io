import { css } from '@emotion/css'
import fs from 'fs'
import sizeOf from 'image-size'
import Image from 'next/image'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import ProjectCard from '../components/ProjectCard'
import { getPostBySlug } from '../lib/api'

export default function Project({ post, imageSizes }) {
  return (
    <>
      <section className={projectStyles.self}>
        <h2>{post.title}</h2>

        <figure>
          <img src={post.banner} alt="Banner" />
        </figure>

        <ReactMarkdown
          components={{
            img: props => {
              if (imageSizes[props.src]) {
                const { src, alt } = props
                const { width, height } = imageSizes[props.src]
                return <Image src={src} alt={alt} width={width} height={height} />
              } else {
                return <img {...props} />
              }
            }
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

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(POSTS_PATH, params.slug)
  const imageSizes = {}

  // A regular expression to iterate on all images in the post
  const iterator = post.contentMarkdown.matchAll(/\!\[.*]\((.*)\)/g)
  let match = null
  while (!(match = iterator.next()).done) {
    const [, src] = match.value
    try {
      // Images are stored in `public`
      const { width, height } = sizeOf(path.join('public', src))
      imageSizes[src] = { width, height }
    } catch (err) {
      console.error(`Can’t get dimensions for ${src}:`, err)
    }
  }

  return {
    props: {
      post,
      imageSizes
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