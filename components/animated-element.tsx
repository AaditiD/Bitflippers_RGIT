"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

type AnimationType =
  | "fade-in"
  | "fade-out"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"

interface AnimatedElementProps {
  children: ReactNode
  animation: AnimationType
  delay?: number
  duration?: number
  threshold?: number
}

export function AnimatedElement({
  children,
  animation,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
}: AnimatedElementProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated])

  const getAnimationVariants = () => {
    switch (animation) {
      case "fade-in":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      case "fade-out":
        return {
          hidden: { opacity: 1 },
          visible: { opacity: 0 },
        }
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
      case "slide-down":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }
      case "slide-left":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }
      case "slide-right":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }
      case "zoom-out":
        return {
          hidden: { opacity: 0, scale: 1.2 },
          visible: { opacity: 1, scale: 1 },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getAnimationVariants()}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

