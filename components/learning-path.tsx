"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Star } from "lucide-react"
import Link from "next/link"
import { PixelCharacter } from "./pixel-character"
import { AnimatedElement } from "./animated-element"

const learningPaths = [
  {
    id: 1,
    title: "Math Fundamentals",
    description: "Master the basics of mathematics with fun challenges",
    progress: 75,
    modules: 8,
    completed: 6,
    image: "/maths.jpg?height=80&width=80",
    type: "math",
    level: "Beginner",
    xpReward: 500,
    character: "squirtle",
  },
  {
    id: 2,
    title: "Coding Adventures",
    description: "Learn programming through interactive puzzles",
    progress: 45,
    modules: 12,
    completed: 5,
    image: "/placeholder.svg?height=80&width=80",
    type: "coding",
    level: "Intermediate",
    xpReward: 750,
    character: "charmander",
  },
  {
    id: 3,
    title: "Science Explorer",
    description: "Discover the wonders of science through experiments",
    progress: 20,
    modules: 10,
    completed: 2,
    image: "/placeholder.svg?height=80&width=80",
    type: "science",
    level: "Beginner",
    xpReward: 600,
    character: "bulbasaur",
  },
]

export function LearningPath() {
  return (
    <div className="grid gap-4">
      {learningPaths.map((path, index) => (
        <AnimatedElement key={path.id} animation="slide-right" delay={0.1 * (index + 1)}>
          <Card className="overflow-hidden pixel-card hover-lift">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 overflow-hidden hover-scale">
                    <PixelCharacter type={path.character} className="h-20 w-20 bounce-animation" />
                  </div>
                  <div>
                    <CardTitle>{path.title}</CardTitle>
                    <CardDescription className="mt-1">{path.description}</CardDescription>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="pixel" className="bg-yellow-100 text-yellow-800 border-yellow-400 hover-scale">
                        {path.type}
                      </Badge>
                      <Badge variant="pixel" className="bg-blue-100 text-blue-800 border-blue-400 hover-scale">
                        {path.level}
                      </Badge>
                      <Badge variant="pixel" className="bg-green-100 text-green-800 border-green-400 hover-scale">
                        <Star className="mr-1 h-3 w-3" /> {path.xpReward} XP
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <span>
                  Progress: {path.completed}/{path.modules} modules
                </span>
                <span className="font-medium">{path.progress}%</span>
              </div>
              <Progress value={path.progress} className="mt-2 pixel-progress" />
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-3">
              <Button asChild variant="pixel" className="ml-auto gap-1 hover-scale">
                <Link href={`/learning-path/${path.id}`}>
                  Continue Learning <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </AnimatedElement>
      ))}
    </div>
  )
}

