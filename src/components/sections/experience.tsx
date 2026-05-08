"use client"

import { motion } from "framer-motion"

const EXPERIENCE = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Engineer",
    period: "2022 - Present",
    description: "Architected a micro-frontend architecture using Module Federation, reducing build times by 50% and improving team autonomy.",
    skills: ["Next.js", "Module Federation", "Architecture"]
  },
  {
    company: "Digital Innovations",
    role: "Frontend Developer",
    period: "2020 - 2022",
    description: "Led the migration from a legacy jQuery application to React, resulting in a 40% increase in user engagement.",
    skills: ["React", "Redux", "Testing"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="container mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold mb-16 tracking-tight">Work <span className="text-accent">History</span></h2>
      
      <div className="relative border-l border-border ml-4 md:ml-0">
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-12 ml-8 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <span className="text-accent font-mono text-sm">{exp.period}</span>
            </div>
            
            <p className="text-xl text-muted-foreground font-medium mb-4">{exp.company}</p>
            <p className="text-zinc-400 max-w-3xl leading-relaxed mb-6">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {exp.skills.map(skill => (
                <span key={skill} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}