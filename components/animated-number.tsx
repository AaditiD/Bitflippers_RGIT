"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

interface AnimatedNumberProps {
  value: number
}

export function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const spring = useSpring(0, { stiffness: 100, damping: 30 })
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString())

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  if (!isClient) {
    return <span>{value.toLocaleString()}</span>
  }

  return <motion.span>{display}</motion.span>
}

