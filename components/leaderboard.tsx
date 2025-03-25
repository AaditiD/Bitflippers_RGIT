"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"
import Link from "next/link"
import { PixelCharacter } from "./pixel-character"
import { AnimatedElement } from "./animated-element"

const leaderboardData = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 24,
    xp: 12450,
    rank: 1,
    character: "pikachu",
  },
  {
    id: 2,
    name: "Jamie Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 22,
    xp: 11200,
    rank: 2,
    character: "charmander",
  },
  {
    id: 3,
    name: "Taylor Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 21,
    xp: 10800,
    rank: 3,
    character: "bulbasaur",
  },
  {
    id: 4,
    name: "Casey Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 19,
    xp: 9500,
    rank: 4,
    character: "squirtle",
  },
  {
    id: 5,
    name: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 15,
    xp: 7800,
    rank: 8,
    isCurrentUser: true,
    character: "eevee",
  },
  {
    id: 6,
    name: "Riley Cooper",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 14,
    xp: 7200,
    rank: 9,
    character: "pikachu",
  },
  {
    id: 7,
    name: "Jordan Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 13,
    xp: 6800,
    rank: 10,
    character: "charmander",
  },
  {
    id: 8,
    name: "Morgan Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 12,
    xp: 6200,
    rank: 11,
    character: "bulbasaur",
  },
]

export function Leaderboard() {
  return (
    <div className="space-y-2">
      {leaderboardData.map((user, index) => (
        <AnimatedElement key={user.id} animation="slide-left" delay={0.05 * (index + 1)}>
          <Link href={user.isCurrentUser ? "/profile" : `/profile/${user.id}`} className="block">
            <div
              className={`flex items-center justify-between rounded-md p-2 ${
                user.isCurrentUser ? "bg-primary/10" : "hover:bg-muted"
              } pixel-list-item hover-lift`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted font-medium pixel-rank hover-scale">
                  {user.rank <= 3 ? (
                    <Trophy
                      className={`h-4 w-4 ${
                        user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-gray-400" : "text-amber-700"
                      }`}
                    />
                  ) : (
                    <span className="text-xs">{user.rank}</span>
                  )}
                </div>
                <div className="relative hover-scale">
                  <Avatar className="h-8 w-8 pixel-avatar">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -right-2 -bottom-2">
                    <PixelCharacter type={user.character} className="h-6 w-6" />
                  </div>
                </div>
                <span className={`text-sm font-medium ${user.isCurrentUser ? "text-primary" : ""}`}>{user.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="pixel" className="bg-yellow-100 text-yellow-800 border-yellow-400 hover-scale">
                  Lvl {user.level}
                </Badge>
                <span className="text-sm font-medium">{user.xp.toLocaleString()} XP</span>
              </div>
            </div>
          </Link>
        </AnimatedElement>
      ))}
    </div>
  )
}

