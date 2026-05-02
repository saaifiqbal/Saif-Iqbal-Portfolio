"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code2, Database, Sparkles, Layers } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"
import { TextReveal } from "@/components/text-reveal"

const highlights = [
  {
    icon: Code2,
    title: "Frontend Excellence",
    description: "Building pixel-perfect, responsive interfaces with React, Next.js, and TypeScript",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Database,
    title: "Backend Mastery",
    description: ".NET Core APIs with Clean Architecture, EF Core, and optimized SQL Server databases",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Sparkles,
    title: "AI-Forward Development",
    description: "Leveraging Vercel AI SDK, OpenAI APIs, Cursor, and Claude for rapid development",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Layers,
    title: "Full-Stack Delivery",
    description: "100+ features shipped across HRM, ERP, and real-time Production Tracking systems",
    color: "from-orange-500/20 to-red-500/20",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            <TextReveal>About Me</TextReveal>
          </motion.h2>
          <motion.div
            className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                text: "I'm an AI-Forward Full-Stack Engineer passionate about crafting exceptional digital experiences. With over 3 years of hands-on experience, I specialize in building scalable frontend architectures, reusable component systems, and high-performance UI experiences.",
                highlight: "AI-Forward Full-Stack Engineer",
              },
              {
                text: "My expertise spans the entire development stack — from designing pixel-perfect React/Next.js frontends to architecting robust .NET Core APIs and optimizing SQL Server databases. I've successfully delivered enterprise-grade applications including HRM systems, ERP solutions, and real-time production tracking platforms.",
                highlight: null,
              },
              {
                text: "Currently, I'm actively building AI-assisted workflows using Vercel AI SDK and OpenAI APIs, implementing prompt-driven UI features and exploring LLM-powered user experiences.",
                highlight: "Vercel AI SDK",
              },
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {paragraph.highlight ? (
                  <>
                    {paragraph.text.split(paragraph.highlight)[0]}
                    <motion.span
                      className="text-foreground font-medium relative inline-block cursor-hover"
                      whileHover={{ scale: 1.05, color: "var(--primary)" }}
                    >
                      {paragraph.highlight}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                    {paragraph.text.split(paragraph.highlight)[1]}
                  </>
                ) : (
                  paragraph.text
                )}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              className="flex gap-8 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "100+", label: "Features Shipped" },
                { value: "4", label: "Major Projects" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center cursor-hover"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.span
                    className="text-3xl font-bold text-primary block"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <TiltCard key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group cursor-hover relative overflow-hidden h-full"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                      animate={hoveredIndex === index ? { rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <motion.h3
                      className="font-semibold text-foreground mb-2"
                      animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
