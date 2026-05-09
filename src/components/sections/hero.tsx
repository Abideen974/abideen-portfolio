"use client"

import { motion } from "framer-motion"
import Prism from "../../components/ui/prism"

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.1}
          glow={1.2}
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block">
          Senior Frontend Engineer
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.8] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
          Building digital <br />
          that scale.
        </h1>
        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
          Hi, I&apos;m <span className="text-white font-semibold">Abideen</span>. 
          I engineer high-performance React applications with architectural precision.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-10 py-5 bg-white text-black rounded-full font-black hover:scale-105 transition-transform active:scale-95">
            View Work
          </button>
          <button className="px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md rounded-full font-black hover:bg-white/10 transition-all">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  )
}