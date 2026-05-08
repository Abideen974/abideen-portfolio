import { SpotlightCard } from "../../components/ui/spotlight-card";
import { Layout, Terminal, Cpu, Code2, Rocket, ShieldCheck } from "lucide-react";

const techStack = [
  "Next.js 15", "TypeScript", "React 19", "Tailwind CSS", 
  "Framer Motion", "Zustand", "TanStack Query", "Redux"
];

const tooling = [
  { name: "Git", level: "Expert" },
  { name: "Docker", level: "Intermediate" },
  { name: "Vitest", level: "Expert" },
  { name: "CI/CD", level: "Expert" },
];

export function Skills() {
  return (
    <section id="skills" className="container mx-auto py-24 px-4">
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-start gap-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Technical <span className="text-blue-500">Expertise</span>
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          A senior-level toolkit focused on performance, scalability, and exceptional user experience.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[1fr]">
        
        {/* 1. Frontend Architecture - Large Card */}
        <SpotlightCard className="md:col-span-8">
          <div className="flex flex-col gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
              <Layout size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Frontend Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specializing in building complex, high-performance web applications using modern patterns. 
                Expert in React Server Components, state management, and design systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* 2. Tooling & DX - Tall Card */}
        <SpotlightCard className="md:col-span-4">
          <div className="flex flex-col h-full gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
              <Terminal size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">DevOps & Tooling</h3>
              <p className="text-sm text-muted-foreground">
                Streamlining developer workflows and ensuring robust delivery pipelines.
              </p>
            </div>
            <div className="mt-auto space-y-3">
              {tooling.map((tool) => (
                <div key={tool.name} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                  <span className="font-medium text-sm">{tool.name}</span>
                  <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">{tool.level}</span>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* 3. Performance Optimization - Small Card */}
        <SpotlightCard className="md:col-span-4">
          <div className="flex flex-col gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
              <Rocket size={20} />
            </div>
            <h3 className="text-xl font-bold">Performance</h3>
            <p className="text-sm text-muted-foreground">
              Core Web Vitals specialist. Achieving sub-second LCP and 100/100 Lighthouse scores.
            </p>
          </div>
        </SpotlightCard>

        {/* 4. Leadership & Mentorship - Wide Card */}
        <SpotlightCard className="md:col-span-8 bg-blue-500/[0.02] border-blue-500/10">
          <div className="flex flex-col md:flex-row gap-8 items-center h-full text-center md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-500">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Senior Leadership</h3>
              <p className="text-muted-foreground">
                Defining technical standards, conducting deep code reviews, and mentoring mid-level 
                developers to foster a culture of engineering excellence.
              </p>
            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}