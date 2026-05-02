"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Users, Briefcase, Factory, Calculator, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/tilt-card"
import { TextReveal } from "@/components/text-reveal"

const projects = [
  {
    title: "Portal 360 – HR & Admin Suite",
    url: "https://portal.hameemgroup.com",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    description: "Enterprise HRM platform — Recruitment, ESS, PMS, KPI, and Organogram modules.",
    features: [
      "React.js + TypeScript frontend; Redux state management; role-based access and real-time KPI routing",
      ".NET Core (Clean Architecture) APIs + EF Core; SQL Server with optimised indexes",
      "30% dashboard load time reduction through React Query caching and EF Core query tuning",
    ],
    tech: ["React.js", "TypeScript", "Redux", ".NET Core", "EF Core", "SQL Server"],
  },
  {
    title: "Ha-Meem Career Portal",
    url: "https://jobs.hameemgroup.com",
    icon: Briefcase,
    gradient: "from-green-500 to-emerald-500",
    description: "End-to-end recruitment portal for Ha-Meem Group — job listings, applications, and candidate tracking.",
    features: [
      "Built with Next.js (App Router) + TypeScript frontend; multi-step application forms with file upload",
      ".NET Core REST APIs with role-based access control; SQL Server schema for applicant, job, and interview data",
      "Categorized job listings with automated email notifications at each application stage",
    ],
    tech: ["Next.js", "TypeScript", ".NET Core", "SQL Server", "REST APIs"],
  },
  {
    title: "Product Tracking System (PTS)",
    url: "https://pts.hameemgroup.com",
    icon: Factory,
    gradient: "from-orange-500 to-red-500",
    description: "Real-time garment tracking — cutting to final QC — powered by QR codes.",
    features: [
      "Vue.js dashboards for cutting, sewing, and finishing lines with live KPIs and garment history",
      ".NET Core + EF Core backend; SQL Server optimised for real-time factory-floor analytics",
      "QR-code generation, bundle tagging, and rack/bin management in one unified workflow",
    ],
    tech: ["Vue.js", ".NET Core", "EF Core", "SQL Server", "Real-time Analytics"],
  },
  {
    title: "EnterCount Accounting ERP",
    url: "https://entercount.com",
    icon: Calculator,
    gradient: "from-purple-500 to-pink-500",
    description: "Full-featured ERP for accounting, inventory, and billing.",
    features: [
      "Full-stack: React + Redux frontend, .NET Core + EF Core APIs, SQL Server database",
      "POS system — 20% faster transactions; automated invoicing — 15% accuracy improvement",
      "Firebase real-time integration for product and transaction tracking",
    ],
    tech: ["React", "Redux", ".NET Core", "EF Core", "SQL Server", "Firebase"],
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            <TextReveal>Key Projects</TextReveal>
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
            Enterprise-grade applications delivering real business value across HR, manufacturing, and finance sectors.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={project.title} glareEnabled>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group h-full"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all h-full overflow-hidden cursor-hover">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, transparent, rgba(var(--primary), 0.1), transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`h-14 w-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <project.icon className="h-7 w-7 text-white relative z-10" />
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%", y: "-100%" }}
                            animate={hoveredProject === index ? { x: "100%", y: "100%" } : { x: "-100%", y: "-100%" }}
                            transition={{ duration: 0.6 }}
                          />
                        </motion.div>
                        <div>
                          <motion.h3
                            className="font-semibold text-foreground text-lg"
                            animate={hoveredProject === index ? { x: [0, 3, 0] } : {}}
                            transition={{ duration: 0.3 }}
                          >
                            {project.title}
                          </motion.h3>
                          <p className="text-sm text-muted-foreground">{project.url.replace("https://", "")}</p>
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={hoveredProject === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          className="rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground"
                        >
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>

                    <motion.p
                      className="text-muted-foreground mb-4"
                      initial={{ opacity: 0.8 }}
                      animate={hoveredProject === index ? { opacity: 1 } : { opacity: 0.8 }}
                    >
                      {project.description}
                    </motion.p>

                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
                        >
                          <motion.span
                            className="text-primary mt-1 flex-shrink-0"
                            animate={hoveredProject === index ? { scale: [1, 1.3, 1] } : {}}
                            transition={{ delay: i * 0.1 }}
                          >
                            ▸
                          </motion.span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.15 + techIndex * 0.05 + 0.5 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* View more hint */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="https://github.com/saaifiqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline cursor-hover"
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <span>View more on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
