"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverText, setHoverText] = useState("")
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 500 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
    setIsVisible(true)
  }, [cursorX, cursorY])

  const handleMouseDown = useCallback(() => {
    setIsClicking(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsClicking(false)
  }, [])

  const handleMouseEnter = useCallback((e: Event) => {
    const target = e.target as HTMLElement
    const isInteractive = 
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      target.classList.contains("cursor-hover") ||
      target.getAttribute("role") === "button"
    
    if (isInteractive) {
      setIsHovering(true)
      const text = target.getAttribute("data-cursor-text") || 
                   target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text") || ""
      setHoverText(text)
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    setHoverText("")
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Main cursor */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 28 
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute rounded-full border-2 border-primary"
          animate={{
            width: isHovering ? 60 : 40,
            height: isHovering ? 60 : 40,
            opacity: isClicking ? 0.5 : 1,
            borderColor: isClicking ? "var(--accent)" : "var(--primary)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="rounded-full bg-primary"
          animate={{
            width: isClicking ? 12 : isHovering ? 8 : 6,
            height: isClicking ? 12 : isHovering ? 8 : 6,
            backgroundColor: isClicking ? "var(--accent)" : "var(--primary)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />

        {/* Hover text */}
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 whitespace-nowrap text-xs font-medium text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Trailing particles on click */}
      {isClicking && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary"
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [1, 0.5, 0],
                x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                y: Math.sin((i * 60 * Math.PI) / 180) * 30,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          ))}
        </>
      )}
    </motion.div>
  )
}
