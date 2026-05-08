"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import React from "react"

interface BentoCardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export function BentoCard({ title, description, icon, className, children }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-background p-6 transition-all hover:shadow-2xl hover:shadow-blue-500/10",
        className
      )}
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        <div>
          <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          {description && (
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
      
      {/* Subtle Background Glow on Hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  )
}