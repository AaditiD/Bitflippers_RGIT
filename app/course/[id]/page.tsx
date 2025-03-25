"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, CheckCircle, ChevronRight, Clock, Star, Trophy } from "lucide-react"
import Image from "next/image"

// Mock course data
const courseData = {
  id: 1,
  title: "Introduction to Algebra",
  description: "Master the fundamentals of algebra with interactive lessons and exercises",
  image: "/maths.jpg?height=300&width=800",
  instructor: {
    name: "Prof. Alex Johnson",
    avatar: "/character.jpg?height=40&width=40",
    title: "Mathematics Expert",
  },
  stats: {
    students: 1245,
    rating: 4.8,
    reviews: 156,
    duration: "4 weeks",
  },
  progress: 35,
  xpReward: 500,
  modules: [
    {
      id: 1,
      title: "Getting Started with Algebra",
      description: "Learn the basic concepts and notation",
      completed: true,
      lessons: [
        { id: 1, title: "Introduction to Algebraic Expressions", duration: "10 min", completed: true },
        { id: 2, title: "Variables and Constants", duration: "15 min", completed: true },
        { id: 3, title: "Evaluating Expressions", duration: "20 min", completed: true },
      ],
    },
    {
      id: 2,
      title: "Solving Equations",
      description: "Master the techniques for solving linear equations",
      completed: false,
      lessons: [
        { id: 4, title: "Simple Equations", duration: "15 min", completed: true },
        { id: 5, title: "Multi-Step Equations", duration: "25 min", completed: false },
        { id: 6, title: "Word Problems", duration: "30 min", completed: false },
      ],
    },
    {
      id: 3,
      title: "Working with Inequalities",
      description: "Understand and solve algebraic inequalities",
      completed: false,
      lessons: [
        { id: 7, title: "Introduction to Inequalities", duration: "15 min", completed: false },
        { id: 8, title: "Solving Linear Inequalities", duration: "20 min", completed: false },
        { id: 9, title: "Compound Inequalities", duration: "25 min", completed: false },
      ],
    },
    {
      id: 4,
      title: "Graphing Linear Equations",
      description: "Visualize equations on the coordinate plane",
      completed: false,
      lessons: [
        { id: 10, title: "The Coordinate Plane", duration: "15 min", completed: false },
        { id: 11, title: "Plotting Points", duration: "10 min", completed: false },
        { id: 12, title: "Graphing Lines", duration: "25 min", completed: false },
      ],
    },
  ],
}

export default function CoursePage() {
  const params = useParams()
  const id = params.id as string
  const [activeLesson, setActiveLesson] = useState<number | null>(null)

  // Calculate progress
  const totalLessons = courseData.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = courseData.modules.reduce(
    (acc, module) => acc + module.lessons.filter((lesson) => lesson.completed).length,
    0,
  )
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100)

  return (
    <div className="container py-6">
      <div className="mb-6">
        <div className="relative mb-6 h-60 w-full overflow-hidden rounded-xl">
          <Image src={courseData.image || "/placeholder.svg"} alt={courseData.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <Badge className="mb-2 bg-primary">{id === "1" ? "Mathematics" : "Programming"}</Badge>
            <h1 className="text-3xl font-bold text-white">{courseData.title}</h1>
            <p className="text-white/90">{courseData.description}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <CardDescription>
                  {totalLessons} lessons • {courseData.stats.duration} • {completedLessons} completed
                </CardDescription>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{progressPercentage}%</span>
                  </div>
                  <Progress value={progressPercentage} className="mt-1" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {courseData.modules.map((module) => (
                    <div key={module.id} className="p-4">
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <h3 className="flex items-center font-medium">
                            {module.completed && <CheckCircle className="mr-2 h-4 w-4 text-green-500" />}
                            Module {module.id}: {module.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                        </div>
                        <Badge variant="outline" className={module.completed ? "bg-green-100 text-green-800" : ""}>
                          {module.completed
                            ? "Completed"
                            : `${module.lessons.filter((l) => l.completed).length}/${module.lessons.length}`}
                        </Badge>
                      </div>
                      <div className="ml-6 mt-3 space-y-1">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`flex cursor-pointer items-center justify-between rounded-md p-2 ${
                              activeLesson === lesson.id ? "bg-primary/10" : "hover:bg-muted"
                            } ${lesson.completed ? "text-muted-foreground" : ""}`}
                            onClick={() => setActiveLesson(lesson.id)}
                          >
                            <div className="flex items-center gap-2">
                              {lesson.completed ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                              )}
                              <span className={lesson.completed ? "line-through" : ""}>{lesson.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {lesson.duration}
                              </Badge>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <div className="mb-4 flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={courseData.instructor.avatar} alt={courseData.instructor.name} />
                    <AvatarFallback>{courseData.instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{courseData.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{courseData.instructor.title}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border p-3 text-center">
                    <p className="text-sm text-muted-foreground">Students</p>
                    <p className="text-xl font-bold">{courseData.stats.students.toLocaleString()}</p>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="flex items-center justify-center text-xl font-bold">
                      {courseData.stats.rating}
                      <Star className="ml-1 h-4 w-4 text-yellow-500" />
                    </p>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <p className="text-sm text-muted-foreground">Reviews</p>
                    <p className="text-xl font-bold">{courseData.stats.reviews}</p>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-xl font-bold">{courseData.stats.duration}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="w-full">{completedLessons > 0 ? "Continue Learning" : "Start Learning"}</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rewards</CardTitle>
                <CardDescription>Complete this course to earn</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                      <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-medium">Course Completion</p>
                      <p className="text-sm text-muted-foreground">Finish all lessons</p>
                    </div>
                  </div>
                  <Badge className="bg-primary">
                    <Star className="mr-1 h-3 w-3" /> {courseData.xpReward} XP
                  </Badge>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">Perfect Score</p>
                      <p className="text-sm text-muted-foreground">Ace all quizzes</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-500">
                    <Star className="mr-1 h-3 w-3" /> +200 XP
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

