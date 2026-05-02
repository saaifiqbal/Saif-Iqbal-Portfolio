"use client"

import { useEffect, useRef, useCallback } from "react"
import { useTheme } from "next-themes"

interface GradientOrb {
  x: number
  y: number
  targetX: number
  targetY: number
  radius: number
  hue: number
  speed: number
  phase: number
}

interface TrailPoint {
  x: number
  y: number
  age: number
  size: number
}

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
}

interface GeometricShape {
  x: number
  y: number
  rotation: number
  scale: number
  targetScale: number
  sides: number
  radius: number
  hue: number
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const orbsRef = useRef<GradientOrb[]>([])
  const trailRef = useRef<TrailPoint[]>([])
  const ripplesRef = useRef<Ripple[]>([])
  const shapesRef = useRef<GeometricShape[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000 })
  const animationRef = useRef<number>(0)
  const timeRef = useRef(0)
  const { resolvedTheme } = useTheme()

  const initElements = useCallback((width: number, height: number) => {
    // Initialize gradient orbs - large flowing blobs
    const orbs: GradientOrb[] = []
    for (let i = 0; i < 5; i++) {
      orbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        targetX: Math.random() * width,
        targetY: Math.random() * height,
        radius: Math.random() * 300 + 200,
        hue: 170 + Math.random() * 30, // Teal range
        speed: 0.002 + Math.random() * 0.003,
        phase: Math.random() * Math.PI * 2,
      })
    }
    orbsRef.current = orbs

    // Initialize geometric shapes
    const shapes: GeometricShape[] = []
    const shapeCount = Math.floor((width * height) / 80000)
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        rotation: Math.random() * Math.PI * 2,
        scale: 1,
        targetScale: 1,
        sides: Math.floor(Math.random() * 4) + 3, // 3-6 sides
        radius: Math.random() * 40 + 20,
        hue: 170 + Math.random() * 30,
      })
    }
    shapesRef.current = shapes
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initElements(canvas.width, canvas.height)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x
      mouseRef.current.prevY = mouseRef.current.y
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      // Add trail points based on mouse speed
      const dx = mouseRef.current.x - mouseRef.current.prevX
      const dy = mouseRef.current.y - mouseRef.current.prevY
      const speed = Math.sqrt(dx * dx + dy * dy)

      if (speed > 2) {
        trailRef.current.push({
          x: e.clientX,
          y: e.clientY,
          age: 0,
          size: Math.min(speed * 0.5, 20),
        })

        // Limit trail length
        if (trailRef.current.length > 50) {
          trailRef.current.shift()
        }
      }
    }

    const handleClick = (e: MouseEvent) => {
      // Add ripple effect on click
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 300,
        opacity: 0.6,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    const isDark = resolvedTheme === "dark"

    const drawPolygon = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      radius: number,
      sides: number,
      rotation: number
    ) => {
      ctx.beginPath()
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides + rotation
        const px = x + radius * Math.cos(angle)
        const py = y + radius * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
    }

    const animate = () => {
      timeRef.current += 0.016
      const time = timeRef.current

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current
      const orbs = orbsRef.current
      const shapes = shapesRef.current
      const trail = trailRef.current
      const ripples = ripplesRef.current

      // Draw flowing gradient orbs
      orbs.forEach((orb) => {
        // Move orb smoothly towards target
        orb.x += (orb.targetX - orb.x) * orb.speed
        orb.y += (orb.targetY - orb.y) * orb.speed

        // Set new target when close
        if (
          Math.abs(orb.x - orb.targetX) < 10 &&
          Math.abs(orb.y - orb.targetY) < 10
        ) {
          orb.targetX = Math.random() * canvas.width
          orb.targetY = Math.random() * canvas.height
        }

        // Mouse influence - orbs are attracted to cursor
        const dx = mouse.x - orb.x
        const dy = mouse.y - orb.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 400 && mouse.x > 0) {
          orb.x += dx * 0.01
          orb.y += dy * 0.01
        }

        // Pulsating radius
        const pulseRadius =
          orb.radius + Math.sin(time * 0.5 + orb.phase) * 50

        // Draw gradient orb
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          pulseRadius
        )
        
        const alpha = isDark ? 0.08 : 0.06
        gradient.addColorStop(0, `hsla(${orb.hue}, 70%, ${isDark ? 50 : 40}%, ${alpha})`)
        gradient.addColorStop(0.5, `hsla(${orb.hue + 20}, 60%, ${isDark ? 45 : 35}%, ${alpha * 0.5})`)
        gradient.addColorStop(1, `hsla(${orb.hue}, 70%, ${isDark ? 50 : 40}%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, pulseRadius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw geometric shapes
      shapes.forEach((shape) => {
        // Check mouse proximity
        const dx = mouse.x - shape.x
        const dy = mouse.y - shape.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Scale up when mouse is near
        shape.targetScale = dist < 200 ? 1.5 + (200 - dist) / 100 : 1
        shape.scale += (shape.targetScale - shape.scale) * 0.1

        // Rotate based on mouse proximity and time
        const rotationSpeed = dist < 200 ? 0.02 : 0.002
        shape.rotation += rotationSpeed

        // Draw shape
        ctx.save()
        ctx.globalAlpha = isDark ? 0.15 : 0.1

        const gradient = ctx.createLinearGradient(
          shape.x - shape.radius,
          shape.y - shape.radius,
          shape.x + shape.radius,
          shape.y + shape.radius
        )
        gradient.addColorStop(0, `hsla(${shape.hue}, 60%, ${isDark ? 50 : 40}%, 1)`)
        gradient.addColorStop(1, `hsla(${shape.hue + 30}, 50%, ${isDark ? 45 : 35}%, 1)`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5

        drawPolygon(
          ctx,
          shape.x,
          shape.y,
          shape.radius * shape.scale,
          shape.sides,
          shape.rotation
        )
        ctx.stroke()

        // Draw inner shape
        ctx.globalAlpha = isDark ? 0.05 : 0.03
        ctx.fillStyle = gradient
        drawPolygon(
          ctx,
          shape.x,
          shape.y,
          shape.radius * shape.scale * 0.6,
          shape.sides,
          -shape.rotation * 0.5
        )
        ctx.fill()

        ctx.restore()
      })

      // Draw mouse trail with gradient
      if (trail.length > 1) {
        ctx.save()
        ctx.lineCap = "round"
        ctx.lineJoin = "round"

        for (let i = 1; i < trail.length; i++) {
          const point = trail[i]
          const prevPoint = trail[i - 1]
          const progress = i / trail.length

          const gradient = ctx.createLinearGradient(
            prevPoint.x,
            prevPoint.y,
            point.x,
            point.y
          )

          const hue = 170 + progress * 30
          const alpha = progress * 0.4 * (1 - point.age / 60)
          
          gradient.addColorStop(0, `hsla(${hue}, 70%, ${isDark ? 60 : 45}%, ${alpha * 0.5})`)
          gradient.addColorStop(1, `hsla(${hue + 10}, 70%, ${isDark ? 55 : 40}%, ${alpha})`)

          ctx.beginPath()
          ctx.moveTo(prevPoint.x, prevPoint.y)
          ctx.lineTo(point.x, point.y)
          ctx.strokeStyle = gradient
          ctx.lineWidth = point.size * progress
          ctx.stroke()

          point.age += 1
        }

        // Remove old trail points
        trailRef.current = trail.filter((p) => p.age < 60)

        ctx.restore()
      }

      // Draw ripples
      ripples.forEach((ripple, index) => {
        ripple.radius += 4
        ripple.opacity -= 0.01

        if (ripple.opacity <= 0 || ripple.radius >= ripple.maxRadius) {
          ripples.splice(index, 1)
          return
        }

        // Draw multiple rings
        for (let i = 0; i < 3; i++) {
          const ringRadius = ripple.radius - i * 20
          if (ringRadius <= 0) continue

          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, ringRadius, 0, Math.PI * 2)
          ctx.strokeStyle = `hsla(175, 70%, ${isDark ? 55 : 40}%, ${
            ripple.opacity * (1 - i * 0.3)
          })`
          ctx.lineWidth = 2 - i * 0.5
          ctx.stroke()
        }
      })

      // Draw cursor glow
      if (mouse.x > 0) {
        const glowGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          150
        )
        glowGradient.addColorStop(0, `hsla(175, 70%, ${isDark ? 55 : 45}%, 0.15)`)
        glowGradient.addColorStop(0.3, `hsla(185, 60%, ${isDark ? 50 : 40}%, 0.08)`)
        glowGradient.addColorStop(1, `hsla(175, 70%, ${isDark ? 55 : 45}%, 0)`)

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2)
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      cancelAnimationFrame(animationRef.current)
    }
  }, [resolvedTheme, initElements])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}
