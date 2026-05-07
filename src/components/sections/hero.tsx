"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-4">
            Senior Frontend Engineer
          </h2>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              experiences
            </span> that scale.
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-lg text-muted-foreground sm:text-xl">
            Hi, I&apos;m <span className="text-foreground font-medium">Abideen</span>. 
            I specialize in architecting high-performance React applications with Next.js and TypeScript.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="h-12 px-8 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all">
            View Work
          </button>
          <button className="h-12 px-8 rounded-full border border-border bg-background font-medium hover:bg-accent transition-all">
            Download CV
          </button>
        </motion.div>
      </div>
    </section>
  )
}