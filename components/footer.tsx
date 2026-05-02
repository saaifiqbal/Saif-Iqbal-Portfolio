"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

const socialLinks = [
  { icon: Github, href: "https://github.com/saaifiqbal", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/saif-iqbal-0640a0275", label: "LinkedIn" },
  { icon: Mail, href: "mailto:saaifiqbal@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-border bg-card overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Back to top button */}
          <MagneticButton>
            <motion.button
              onClick={scrollToTop}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-hover"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="h-12 w-12 rounded-full border-2 border-current flex items-center justify-center"
                whileHover={{ borderColor: "var(--primary)" }}
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUp className="h-5 w-5" />
                </motion.span>
              </motion.div>
              <span className="text-xs uppercase tracking-widest">Back to top</span>
            </motion.button>
          </MagneticButton>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <MagneticButton key={link.label}>
                <motion.a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all cursor-hover relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="h-5 w-5 relative z-10" />
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute inset-0 rounded-full flex items-center justify-center text-primary-foreground"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.span>
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              </MagneticButton>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            className="flex items-center gap-1 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span>&copy; {currentYear} Saif Iqbal. Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.span>
            <span>using</span>
            <motion.span
              className="font-medium text-foreground cursor-hover"
              whileHover={{ color: "var(--primary)" }}
            >
              Next.js
            </motion.span>
          </motion.div>

          {/* Animated line */}
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </footer>
  )
}
