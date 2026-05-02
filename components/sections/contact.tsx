"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "saaifiqbal@gmail.com",
    href: "mailto:saaifiqbal@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1992 924 645",
    href: "tel:+8801992924645",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
    color: "from-orange-500 to-red-500",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/saaifiqbal",
    username: "saaifiqbal",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/saif-iqbal-0640a0275",
    username: "saif-iqbal",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
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
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            Let&apos;s work together
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            <TextReveal>Get In Touch</TextReveal>
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
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onMouseEnter={() => setHoveredContact(index)}
                    onMouseLeave={() => setHoveredContact(null)}
                    className="relative"
                  >
                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer group overflow-hidden"
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      {/* Animated gradient background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                      />

                      <motion.div
                        className={`h-12 w-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center relative overflow-hidden`}
                        animate={hoveredContact === index ? { rotate: [0, -5, 5, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <info.icon className="h-5 w-5 text-white relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          initial={{ y: "100%" }}
                          animate={hoveredContact === index ? { y: "-100%" } : { y: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                      <div className="relative z-10">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <MagneticButton key={link.label}>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group relative overflow-hidden cursor-hover"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-primary"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors relative z-10" />
                      <span className="text-foreground font-medium group-hover:text-primary-foreground transition-colors relative z-10">
                        {link.username}
                      </span>
                    </motion.a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              className="p-8 rounded-2xl bg-card border border-border relative overflow-hidden"
              whileHover={{ boxShadow: "0 20px 40px -20px rgba(var(--primary), 0.2)" }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(90deg, var(--primary), var(--accent), var(--primary))",
                  backgroundSize: "200% 100%",
                  padding: "1px",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[1px] rounded-2xl bg-card" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                      { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                    ].map((field) => (
                      <motion.div
                        key={field.id}
                        className="relative"
                        animate={focusedField === field.id ? { scale: 1.02 } : { scale: 1 }}
                      >
                        <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">
                          {field.label}
                        </label>
                        <motion.input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                          placeholder={field.placeholder}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          whileFocus={{ boxShadow: "0 0 20px rgba(var(--primary), 0.2)" }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    animate={focusedField === "subject" ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <motion.input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="What is this about?"
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ boxShadow: "0 0 20px rgba(var(--primary), 0.2)" }}
                    />
                  </motion.div>
                  <motion.div
                    animate={focusedField === "message" ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground"
                      placeholder="Your message..."
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ boxShadow: "0 0 20px rgba(var(--primary), 0.2)" }}
                    />
                  </motion.div>
                  <MagneticButton className="w-full">
                    <Button type="submit" size="lg" className="w-full group relative overflow-hidden">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/20 to-primary/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative flex items-center justify-center gap-2">
                        Send Message
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="h-4 w-4" />
                        </motion.span>
                      </span>
                    </Button>
                  </MagneticButton>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
