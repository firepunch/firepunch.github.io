import Image from "next/image"

export default function ProjectCard({
  title,
  slug,
  date,
  banner
}) {
  return (
    <article>
      <a href={slug}>
        <figure>
          <Image src={banner} alt="Project Banner" width={300} height={300} />
        </figure>
        <div className="project-desc">
          <h3>{title}</h3>
          <time>{date}</time>
        </div>
      </a>
    </article>
  )
}