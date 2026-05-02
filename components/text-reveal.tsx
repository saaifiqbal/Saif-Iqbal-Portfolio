"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const words = children.split(" ")

  return (
    <motion.span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + index * 0.04,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

interface LetterRevealProps {
  children: string
  className?: string
  delay?: number
}

export function LetterReveal({ children, className = "", delay = 0 }: LetterRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const letters = children.split("")

  return (
    <motion.span ref={ref} className={`inline-flex ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
          transition={{
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1],
            delay: delay + index * 0.03,
          }}
          style={{ display: "inline-block", whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
