"use client"

import { useRef, useState } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  glareEnabled?: boolean
}

export function TiltCard({ children, className = "", glareEnabled = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  
  // Move useSpring calls to component level (not inside JSX)
  const rotateXSpring = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const rotateYSpring = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rotateXValue = ((mouseY - height / 2) / height) * -20
    const rotateYValue = ((mouseX - width / 2) / width) * 20

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setIsHovered(false)
  }

  // Move useMotionTemplate to component level
  const glareBackground = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseXSpring}px ${mouseYSpring}px,
      oklch(0.55 0.18 200 / 0.15),
      transparent 80%
    )
  `

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(0px)" }}>{children}</div>
      {glareEnabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background: glareBackground,
            opacity: isHovered ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  )
}
