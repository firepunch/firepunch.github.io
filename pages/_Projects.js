import projectSummary from '../_projects/summary.json'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section>
      {projectSummary?.map(project => project.featured && (
        <ProjectCard
          key={project.slug}
          {...project}
        />
      ))}
    </section>
  )
}
