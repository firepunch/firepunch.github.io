import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

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
