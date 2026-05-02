"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"
import { TextReveal } from "@/components/text-reveal"

const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Bangladesh University of Business and Technology",
    period: "2022 – 2025",
    grade: "CGPA 3.32 / 4.0",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    highlights: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Web Technologies"],
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "Magura Polytechnic Institute",
    period: "2016 – 2021",
    grade: "GPA 3.46 / 4.0",
    icon: Award,
    color: "from-green-500 to-emerald-500",
    highlights: ["Programming Fundamentals", "Computer Networks", "System Analysis", "Project Management"],
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="education" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            <TextReveal>Education</TextReveal>
          </h2>
          <motion.div
            className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <TiltCard key={edu.degree}>
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -10 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full"
              >
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group cursor-hover relative overflow-hidden h-full">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Floating particles on hover */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full"
                          initial={{
                            x: "50%",
                            y: "50%",
                            opacity: 0,
                          }}
                          animate={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`h-14 w-14 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 relative overflow-hidden`}
                        animate={hoveredIndex === index ? { rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <edu.icon className="h-7 w-7 text-white relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ y: "100%" }}
                          animate={hoveredIndex === index ? { y: "-100%" } : { y: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3
                          className="font-semibold text-foreground text-lg"
                          animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          {edu.degree}
                        </motion.h3>
                        <motion.p
                          className="text-primary font-medium mt-1"
                          whileHover={{ scale: 1.02 }}
                        >
                          {edu.institution}
                        </motion.p>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                          <motion.div
                            className="flex items-center gap-1.5"
                            whileHover={{ x: 3, color: "var(--primary)" }}
                          >
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-1.5"
                            whileHover={{ x: 3, color: "var(--primary)" }}
                          >
                            <Award className="h-4 w-4" />
                            <span>{edu.grade}</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Course highlights */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-border"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>Key Courses</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <motion.span
                            key={highlight}
                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.2 + hIndex * 0.05 + 0.4 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
