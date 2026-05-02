"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MapPin, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const techStack = ["React / Next.js", "TypeScript", ".NET Core", "SQL Server", "AI-Driven Dev"]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                Dhaka, Bangladesh
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
            >
              <span className="block mb-2">{"Hi, I'm"}</span>
              <span className="text-primary inline-block relative">
                Saif Iqbal
                <motion.span
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6"
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  AI-Forward Full-Stack Engineer
                </span>{" "}
                with 3+ years delivering enterprise applications — from pixel-perfect React/Next.js frontends to robust .NET Core APIs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium border border-transparent hover:border-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Button asChild size="lg" className="text-sm sm:text-base">
                <a href="#contact">
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <Mail className="h-4 w-4" />
                  </span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 text-sm sm:text-base">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="group text-sm sm:text-base">
                <a href="/saif_iqbal_cv.pdf" download="Saif_Iqbal_CV.pdf">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/saaifiqbal", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/saif-iqbal-0640a0275", label: "LinkedIn" },
                { icon: Mail, href: "mailto:saaifiqbal@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+8801992924645", label: "Phone" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-1 lg:order-2 flex justify-center mb-4 lg:mb-0"
          >
            <div className="relative">
              {/* Simple decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />

              {/* Profile image container */}
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Saif Iqbal - Full-Stack Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -right-2 sm:-right-4 top-1/4 px-2 sm:px-3 py-1 sm:py-1.5 bg-card rounded-full shadow-lg border border-border text-xs sm:text-sm font-medium"
              >
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                  Available
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -left-2 sm:-left-4 bottom-1/4 px-2 sm:px-3 py-1 sm:py-1.5 bg-card rounded-full shadow-lg border border-border text-xs sm:text-sm font-medium"
              >
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  3+ Years
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
