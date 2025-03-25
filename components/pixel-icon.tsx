import { Award, Book, Code, FlaskRoundIcon as Flask, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

type IconType = "award" | "book" | "code" | "flask" | "zap"

interface PixelIconProps {
  type: IconType
  className?: string
}

export function PixelIcon({ type, className }: PixelIconProps) {
  const IconComponent = {
    award: Award,
    book: Book,
    code: Code,
    flask: Flask,
    zap: Zap,
  }[type]

  return (
    <div className={cn("pixel-icon", className)}>
      <IconComponent />
    </div>
  )
}

