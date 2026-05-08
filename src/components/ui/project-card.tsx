"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Icons } from "../../components/shared/icons" // Import our new icon registry
import Image from "next/image"
import { Project } from "../../types/project"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl border border-border bg-card overflow-hidden"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={project.thumbnail} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
          </div>
          <div className="flex gap-2">
            {/* USE OUR CUSTOM GITHUB ICON HERE */}
            <a 
              href={project.githubUrl} 
              target="_blank"
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors"
            >
              <Icons.gitHub className="w-5 h-5" />
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank"
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-background border border-border rounded text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}