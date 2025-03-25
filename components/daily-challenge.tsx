"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { PixelCharacter } from "./pixel-character"
import { AnimatedElement } from "./animated-element"

const challenges = [
  {
    id: 1,
    title: "Math Challenge",
    description: "Solve 5 algebra problems in under 10 minutes",
    difficulty: "Easy",
    timeLimit: "10 minutes",
    xpReward: 100,
    completed: false,
    character: "pikachu",
  },
  {
    id: 2,
    title: "Coding Puzzle",
    description: "Debug the function to make all tests pass",
    difficulty: "Medium",
    timeLimit: "15 minutes",
    xpReward: 150,
    completed: false,
    character: "charmander",
  },
  {
    id: 3,
    title: "Science Quiz",
    description: "Answer 10 questions about the solar system",
    difficulty: "Easy",
    timeLimit: "8 minutes",
    xpReward: 120,
    completed: false,
    character: "bulbasaur",
  },
]

export function DailyChallenge() {
  const [activeChallenges, setActiveChallenges] = useState(challenges)

  const handleComplete = (id: number) => {
    setActiveChallenges(
      activeChallenges.map((challenge) => (challenge.id === id ? { ...challenge, completed: true } : challenge)),
    )
  }

  return (
    <div className="grid gap-4">
      {activeChallenges.map((challenge, index) => (
        <AnimatedElement key={challenge.id} animation="slide-up" delay={0.1 * (index + 1)}>
          <Card
            className={`pixel-card hover-lift ${challenge.completed ? "border-green-400 bg-green-50 dark:bg-green-900/20" : ""}`}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {challenge.title}
                    {challenge.completed && (
                      <Badge variant="pixel" className="bg-green-500 text-white hover-scale">
                        Completed
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="mt-1">{challenge.description}</CardDescription>
                </div>
                <div className="relative h-12 w-12 hover-scale">
                  <PixelCharacter
                    type={challenge.character}
                    className={`h-12 w-12 ${challenge.completed ? "celebrate-animation" : "bounce-animation"}`}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="pixel"
                  className={
                    challenge.difficulty === "Easy"
                      ? "bg-green-100 text-green-800 border-green-400"
                      : challenge.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800 border-yellow-400"
                        : "bg-red-100 text-red-800 border-red-400" + " hover-scale"
                  }
                >
                  {challenge.difficulty}
                </Badge>
                <Badge variant="pixel" className="bg-blue-100 text-blue-800 border-blue-400 hover-scale">
                  <Clock className="mr-1 h-3 w-3" /> {challenge.timeLimit}
                </Badge>
                <Badge variant="pixel" className="bg-purple-100 text-purple-800 border-purple-400 hover-scale">
                  <Star className="mr-1 h-3 w-3" /> {challenge.xpReward} XP
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-3">
              {challenge.completed ? (
                <Button disabled variant="pixel" className="ml-auto hover-scale">
                  Completed
                </Button>
              ) : (
                <Button
                  className="ml-auto hover-scale"
                  variant="pixel"
                  asChild={!challenge.completed}
                  onClick={() => (challenge.completed ? null : handleComplete(challenge.id))}
                >
                  <Link href={`/challenge/${challenge.id}`}>Start Challenge</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        </AnimatedElement>
      ))}
    </div>
  )
}

