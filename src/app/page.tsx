import { Hero } from "../components/sections/hero"
import { Skills } from "../components/sections/skills"
import { Projects } from "../components/sections/projects"
import { Experience } from "../components/sections/experience";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      {/* Future sections will go here */}
    </div>
  );
}