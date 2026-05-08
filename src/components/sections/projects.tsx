import { ProjectCard } from "../../components/ui/project-card"
import { Project } from "../../types/project"

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Dashboard",
    description: "Real-time data visualization platform.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    tags: ["Next.js", "Tailwind", "Recharts"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "SaaS Platform",
    description: "B2B solution for enterprise management.",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
    tags: ["TypeScript", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="container mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}