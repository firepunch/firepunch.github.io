import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

export async function getPostBySlug(basePath, slug) {
  const fullPath = path.join(basePath, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    slug,
    contentMarkdown: matterResult.content,
    ...matterResult.data,
  }
}