"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PixelCharacter } from "./pixel-character"
import { AnimatedElement } from "./animated-element"

const courses = [
  {
    id: 1,
    title: "Introduction to Algebra",
    category: "Mathematics",
    image: "/placeholder.svg?height=150&width=300",
    students: 1245,
    lessons: 12,
    difficulty: "Beginner",
    xpReward: 500,
    character: "pikachu",
  },
  {
    id: 2,
    title: "Web Development Basics",
    category: "Programming",
    image: "/placeholder.svg?height=150&width=300",
    students: 987,
    lessons: 15,
    difficulty: "Intermediate",
    xpReward: 750,
    character: "charmander",
  },
  {
    id: 3,
    title: "The Solar System",
    category: "Science",
    image: "/placeholder.svg?height=150&width=300",
    students: 1532,
    lessons: 10,
    difficulty: "Beginner",
    xpReward: 600,
    character: "bulbasaur",
  },
]

export function FeaturedCourses() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
        <AnimatedElement key={course.id} animation="slide-up" delay={0.1 * (index + 1)}>
          <Card className="overflow-hidden pixel-card hover-lift">
            <div className="relative h-40 w-full">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute top-2 right-2">
                <Badge variant="pixel" className="bg-primary text-white hover-scale">
                  {course.category}
                </Badge>
              </div>
              <div className="absolute bottom-0 right-0">
                <PixelCharacter type={course.character} className="h-16 w-16 bounce-animation hover-scale" />
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="line-clamp-1">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="pixel"
                  className="flex items-center gap-1 bg-blue-100 text-blue-800 border-blue-400 hover-scale"
                >
                  <Users className="h-3 w-3" />
                  {course.students.toLocaleString()}
                </Badge>
                <Badge
                  variant="pixel"
                  className="flex items-center gap-1 bg-green-100 text-green-800 border-green-400 hover-scale"
                >
                  <BookOpen className="h-3 w-3" />
                  {course.lessons} lessons
                </Badge>
                <Badge
                  variant="pixel"
                  className={
                    course.difficulty === "Beginner"
                      ? "bg-green-100 text-green-800 border-green-400"
                      : course.difficulty === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800 border-yellow-400"
                        : "bg-red-100 text-red-800 border-red-400" + " hover-scale"
                  }
                >
                  {course.difficulty}
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-3">
              <Button asChild variant="pixel" className="w-full hover-scale">
                <Link href={`/course/${course.id}`}>Enroll Now • {course.xpReward} XP</Link>
              </Button>
            </CardFooter>
          </Card>
        </AnimatedElement>
      ))}
    </div>
  )
}

