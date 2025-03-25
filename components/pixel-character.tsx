import Image from "next/image"
import { cn } from "@/lib/utils"

type CharacterType = "pikachu" | "charmander" | "bulbasaur" | "squirtle" | "eevee" | "trophy" | "badge"

interface PixelCharacterProps {
  type: CharacterType
  className?: string
}

export function PixelCharacter({ type, className }: PixelCharacterProps) {
  // In a real implementation, these would be actual pixel art images
  // For this example, we're using placeholder images
  const imageSrc = `/placeholder.svg?height=100&width=100&text=${type}`

  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 pixel-character-shadow"></div>
      <Image src={imageSrc || "/placeholder.svg"} alt={type} width={100} height={100} className="pixel-character" />
    </div>
  )
}

