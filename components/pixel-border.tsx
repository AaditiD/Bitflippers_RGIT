import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface PixelBorderProps {
  children: ReactNode
  className?: string
}

export function PixelBorder({ children, className }: PixelBorderProps) {
  return (
    <div
      className={cn(
        "relative border-2 border-black dark:border-white rounded-none",
        "before:absolute before:inset-0 before:border-2 before:border-black dark:before:border-white before:rounded-none before:translate-x-1 before:translate-y-1 before:bg-white dark:before:bg-black before:-z-10",
        className,
      )}
    >
      {children}
    </div>
  )
}

