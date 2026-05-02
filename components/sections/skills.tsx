"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { TextReveal } from "@/components/text-reveal"

const skillCategories = [
  {
    title: "Frontend",
    highlight: true,
    icon: "🎨",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES2022+)", "Vue.js", "HTML5", "CSS3"],
  },
  {
    title: "State & Data",
    icon: "🔄",
    skills: ["Redux Toolkit", "Zustand", "React Query", "SWR", "Context API"],
  },
  {
    title: "Styling",
    icon: "✨",
    skills: ["Tailwind CSS", "MUI", "Ant Design", "Bootstrap", "Figma to Code"],
  },
  {
    title: "Backend",
    highlight: true,
    icon: "⚙️",
    skills: [".NET Core (Clean Architecture)", "Entity Framework Core", "Node.js", "REST APIs"],
  },
  {
    title: "Database",
    highlight: true,
    icon: "🗄️",
    skills: ["SQL Server", "Schema Design", "Query & Index Optimization", "MySQL"],
  },
  {
    title: "AI / Dev Tools",
    icon: "🤖",
    skills: ["Vercel AI SDK", "OpenAI API", "Claude Desktop", "Cursor", "ChatGPT"],
  },
  {
    title: "Tooling",
    icon: "🛠️",
    skills: ["Git & GitHub", "Cypress", "Jest", "Postman", "Figma"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-50">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            <TextReveal>Technical Skills</TextReveal>
          </h2>
          <motion.div
            className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="mt-6 text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            A comprehensive toolkit spanning frontend frameworks, backend technologies, databases, and modern AI development tools.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -15 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onMouseEnter={() => setActiveCategory(categoryIndex)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`relative p-6 rounded-xl border cursor-hover overflow-hidden ${
                category.highlight
                  ? "bg-primary/5 border-primary/20"
                  : "bg-card border-border"
              } hover:border-primary/50 transition-all group`}
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCategory === categoryIndex ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(90deg, var(--primary), var(--accent), var(--primary))",
                  backgroundSize: "200% 100%",
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCategory === categoryIndex ? 0.3 : 0,
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className="text-2xl"
                    animate={activeCategory === categoryIndex ? { 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                  {category.highlight && (
                    <motion.span
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Core
                    </motion.span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                        boxShadow: "0 4px 15px rgba(var(--primary), 0.3)",
                      }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
