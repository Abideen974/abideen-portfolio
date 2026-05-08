"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
          Senior Frontend Engineer
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
          Building digital <br />
          <span className="text-muted-foreground">that scale.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Hi, I&apos;m <span className="text-foreground">Abideen</span>. I specialize in architecting high-performance React applications with Next.js and TypeScript.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            View Work
          </button>
          <button className="border border-border px-8 py-4 rounded-full font-bold hover:bg-card transition-colors">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  )
}