import FullImage from './FullImage'

export default function ProjectCard({
  title,
  slug,
  date,
  banner
}) {
  return (
    <article>
      <a href={`projects/${slug}`}>
        <FullImage src={banner} alt="Project Banner" />
        <div className="project-desc">
          <h3>{title}</h3>
          <time>{date}</time>
        </div>
      </a>
    </article>
  )
}