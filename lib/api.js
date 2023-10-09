import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import projectData from '../_projects/summary.json'

export const POSTS_PATH = path.join(process.cwd(), '_projects');

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

export function getRandomProjects(targetSlug) {
  const resultIndexes = [
    Math.floor(Math.random() * projectData.length),
    Math.floor(Math.random() * projectData.length)
  ]

  const result = resultIndexes.map(idx => {
    const resultItem = projectData[idx]
    if (resultItem.slug === targetSlug) {
      const newIdx = idx === 0 ? idx++ : idx--
      return projectData[newIdx]
    } else {
      return resultItem
    }
  })

  return result
}