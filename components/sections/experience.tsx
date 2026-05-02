"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react"
import { TextReveal } from "@/components/text-reveal"

const experiences = [
  {
    title: "Software Engineer",
    company: "Ha-Meem Group",
    location: "Tejgaon, Dhaka",
    period: "Oct 2024 – Present",
    description: "Portal 360 — enterprise HR & Admin suite",
    tech: ["React.js", "Next.js", "TypeScript", ".NET Core", "SQL Server"],
    achievements: [
      "Architected and delivered 100+ features across HRM, Recruitment, KPI, ESS, and Production Tracking as lead full-stack engineer",
      "Built Organogram system with hierarchical drag-and-drop UI in React/TypeScript and EF Core–backed hierarchy APIs",
      "30% faster dashboard load time — optimized React Query caching, lazy loading, and EF Core LINQ queries with SQL Server index tuning",
      "Delivered Product Tracking System (PTS) with Vue.js dashboards, QR-code tagging, and real-time analytics",
      "Converted 50+ Figma screens to pixel-perfect, fully responsive interfaces using Tailwind CSS and Ant Design",
      "Integrated AI-assisted development workflows using Cursor and Claude; building AI features using Vercel AI SDK and OpenAI APIs",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Fort International Ltd",
    location: "Elephant Road, Dhaka",
    period: "Nov 2022 – Oct 2024",
    description: "EnterCount Accounting ERP, Pulse360 Hospital Management",
    tech: ["React", "Redux", "Node.js", ".NET Core", "Laravel", "jQuery"],
    achievements: [
      "Built POS system frontend with React + Redux and REST API backend in .NET Core + EF Core — improved transaction speed by 20%",
      "Designed and optimised SQL Server schemas for accounting, inventory, and billing modules; wrote complex stored procedures and LINQ queries",
      "Enhanced invoice accuracy by 15% through frontend validation and automated .NET Core backend workflows",
      "Revamped patient admission/discharge workflows in Pulse360 (Laravel + jQuery) — cut processing time by 25%",
      "Integrated Firebase for real-time product and transaction tracking across the ERP frontend",
      "Built SEO-optimised landing pages with Next.js following Core Web Vitals and performance best practices",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div ref={containerRef} className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            <TextReveal>Work Experience</TextReveal>
          </h2>
          <motion.div
            className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Animated timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Connecting line animation */}
              <motion.div
                className={`absolute top-2 h-0.5 bg-primary/30 hidden md:block ${
                  index % 2 === 0 ? "left-[calc(50%+8px)] right-0" : "left-0 right-[calc(50%+8px)]"
                }`}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                style={{ transformOrigin: index % 2 === 0 ? "left" : "right" }}
              />

              <motion.div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer group relative overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(var(--primary), 0.2)" }}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <motion.h3
                        className="text-xl font-semibold text-foreground"
                        whileHover={{ x: 5 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.div
                        className="flex items-center gap-2 mt-1 text-primary"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </motion.div>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 3 }}
                      >
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 3 }}
                      >
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </motion.div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 italic">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.2 + techIndex * 0.05 + 0.4 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: expandedIndex === index ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3 pt-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={expandedIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <motion.span
                            className="text-primary mt-1.5 flex-shrink-0"
                            animate={expandedIndex === index ? { scale: [0, 1.2, 1] } : {}}
                            transition={{ delay: i * 0.05 + 0.1 }}
                          >
                            <ChevronRight className="h-3 w-3" />
                          </motion.span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-1 text-primary text-sm mt-4 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span>{expandedIndex === index ? "Show less" : "Show achievements"}</span>
                    <motion.span
                      animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
