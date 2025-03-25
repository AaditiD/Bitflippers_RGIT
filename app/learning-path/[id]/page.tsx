"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, CheckCircle, Clock, Star, Trophy, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock learning path data
const learningPathData = {
  id: 1,
  title: "Math Fundamentals",
  description: "Master the basics of mathematics with fun challenges",
  image: "/maths.jpg", // Updated to use maths.jpg
  progress: 65,
  xpReward: 2500,
  level: "Beginner",
  stats: {
    students: 3245,
    rating: 4.9,
    reviews: 245,
    duration: "8 weeks",
  },
  stages: [
    {
      id: 1,
      title: "Arithmetic Basics",
      description: "Master the fundamental operations",
      progress: 100,
      completed: true,
      courses: [
        {
          id: 1,
          title: "Addition and Subtraction",
          description: "Learn the basics of adding and subtracting numbers",
          duration: "2 hours",
          xp: 150,
          completed: true,
          image: "/placeholder.svg?height=120&width=200",
        },
        {
          id: 2,
          title: "Multiplication and Division",
          description: "Master multiplying and dividing numbers",
          duration: "3 hours",
          xp: 200,
          completed: true,
          image: "/placeholder.svg?height=120&width=200",
        },
      ],
    },
    {
      id: 2,
      title: "Algebra Foundations",
      description: "Introduction to algebraic concepts",
      progress: 60,
      completed: false,
      courses: [
        {
          id: 3,
          title: "Variables and Expressions",
          description: "Learn how to work with variables in equations",
          duration: "2.5 hours",
          xp: 175,
          completed: true,
          image: "/placeholder.svg?height=120&width=200",
        },
        {
          id: 4,
          title: "Solving Equations",
          description: "Techniques for solving linear equations",
          duration: "3 hours",
          xp: 225,
          completed: false,
          image: "/placeholder.svg?height=120&width=200",
        },
      ],
    },
    {
      id: 3,
      title: "Geometry Basics",
      description: "Explore shapes and spatial relationships",
      progress: 0,
      completed: false,
      courses: [
        {
          id: 5,
          title: "2D Shapes",
          description: "Learn about polygons and their properties",
          duration: "2 hours",
          xp: 150,
          completed: false,
          image: "/placeholder.svg?height=120&width=200",
        },
        {
          id: 6,
          title: "3D Objects",
          description: "Understand volume and surface area",
          duration: "2.5 hours",
          xp: 175,
          completed: false,
          image: "/placeholder.svg?height=120&width=200",
        },
      ],
    },
    {
      id: 4,
      title: "Data and Statistics",
      description: "Learn to analyze and interpret data",
      progress: 0,
      completed: false,
      courses: [
        {
          id: 7,
          title: "Data Collection",
          description: "Methods for gathering and organizing data",
          duration: "2 hours",
          xp: 150,
          completed: false,
          image: "/placeholder.svg?height=120&width=200",
        },
        {
          id: 8,
          title: "Statistical Analysis",
          description: "Calculate mean, median, mode, and range",
          duration: "3 hours",
          xp: 200,
          completed: false,
          image: "/placeholder.svg?height=120&width=200",
        },
      ],
    },
  ],
  creatures: [
    {
      id: 1,
      name: "Mathosaurus",
      description: "A number-crunching creature that helps with calculations",
      level: 5,
      xp: 250,
      maxXp: 500,
      image: "/placeholder.svg?height=100&width=100",
      abilities: ["Quick Addition", "Memory Boost", "Problem Solving"],
      unlocked: true,
    },
    {
      id: 2,
      name: "Algebragon",
      description: "Masters the art of variables and equations",
      level: 3,
      xp: 150,
      maxXp: 300,
      image: "/placeholder.svg?height=100&width=100",
      abilities: ["Equation Solver", "Variable Tracker", "Formula Memory"],
      unlocked: true,
    },
    {
      id: 3,
      name: "Geometrox",
      description: "Expert in shapes and spatial relationships",
      level: 1,
      xp: 50,
      maxXp: 200,
      image: "/placeholder.svg?height=100&width=100",
      abilities: ["Shape Recognition", "Area Calculator", "Angle Mastery"],
      unlocked: false,
    },
    {
      id: 4,
      name: "Statisticat",
      description: "Analyzes data with precision and clarity",
      level: 1,
      xp: 0,
      maxXp: 200,
      image: "/placeholder.svg?height=100&width=100",
      abilities: ["Data Visualization", "Pattern Recognition", "Probability Prediction"],
      unlocked: false,
    },
  ],
}

export default function LearningPathPage() {
  const params = useParams()
  const id = params.id as string
  const [activeTab, setActiveTab] = useState("overview")

  // Calculate overall progress
  const totalCourses = learningPathData.stages.reduce((acc, stage) => acc + stage.courses.length, 0)
  const completedCourses = learningPathData.stages.reduce(
    (acc, stage) => acc + stage.courses.filter((course) => course.completed).length,
    0,
  )
  const progressPercentage = Math.round((completedCourses / totalCourses) * 100)

  return (
    <div className="container py-6">
      <div className="mb-6">
        <div className="relative mb-6 h-60 w-full overflow-hidden rounded-xl">
          <Image
            src={learningPathData.image || "/placeholder.svg"}
            alt={learningPathData.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <Badge className="mb-2 bg-primary">Mathematics</Badge>
            <h1 className="text-3xl font-bold text-white">{learningPathData.title}</h1>
            <p className="text-white/90">{learningPathData.description}</p>
          </div>
        </div>

        <Tabs defaultValue="overview" onValueChange={setActiveTab} value={activeTab}>
          <TabsList className="mb-6 w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="stages">Learning Stages</TabsTrigger>
            <TabsTrigger value="creatures">Learning Creatures</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Path Overview</CardTitle>
                    <CardDescription>
                      {totalCourses} courses • {learningPathData.stats.duration} • {completedCourses} completed
                    </CardDescription>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>{progressPercentage}%</span>
                      </div>
                      <Progress value={progressPercentage} className="mt-1" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="mb-2 font-medium">What You'll Learn</h3>
                        <ul className="ml-6 list-disc space-y-1">
                          <li>Master the fundamental operations of arithmetic</li>
                          <li>Understand algebraic concepts and solve equations</li>
                          <li>Explore geometric shapes and spatial relationships</li>
                          <li>Analyze and interpret data using statistical methods</li>
                          <li>Apply mathematical concepts to real-world problems</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-2 font-medium">Learning Path Structure</h3>
                        <div className="space-y-3">
                          {learningPathData.stages.map((stage) => (
                            <div key={stage.id} className="flex items-center justify-between rounded-lg border p-3">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                    stage.completed
                                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {stage.completed ? <CheckCircle className="h-4 w-4" /> : <span>{stage.id}</span>}
                                </div>
                                <div>
                                  <p className="font-medium">{stage.title}</p>
                                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className={stage.completed ? "bg-green-100 text-green-800" : ""}>
                                {stage.progress}% Complete
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/50 px-6 py-3">
                    <Button className="ml-auto" onClick={() => setActiveTab("stages")}>
                      View Learning Stages
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="mb-4 text-center">
                      <h3 className="font-medium">Path Details</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg border p-3 text-center">
                        <p className="text-sm text-muted-foreground">Students</p>
                        <p className="text-xl font-bold">{learningPathData.stats.students.toLocaleString()}</p>
                      </div>
                      <div className="rounded-lg border p-3 text-center">
                        <p className="text-sm text-muted-foreground">Rating</p>
                        <p className="flex items-center justify-center text-xl font-bold">
                          {learningPathData.stats.rating}
                          <Star className="ml-1 h-4 w-4 text-yellow-500" />
                        </p>
                      </div>
                      <div className="rounded-lg border p-3 text-center">
                        <p className="text-sm text-muted-foreground">Level</p>
                        <p className="text-xl font-bold">{learningPathData.level}</p>
                      </div>
                      <div className="rounded-lg border p-3 text-center">
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="text-xl font-bold">{learningPathData.stats.duration}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button className="w-full">
                        {completedCourses > 0 ? "Continue Learning" : "Start Learning"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Your Creatures</CardTitle>
                    <CardDescription>Companions that help you learn</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {learningPathData.creatures
                        .filter((creature) => creature.unlocked)
                        .slice(0, 2)
                        .map((creature) => (
                          <div key={creature.id} className="flex items-center gap-3 rounded-lg border p-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                              <Image
                                src={creature.image || "/character.jpg"}
                                alt={creature.name}
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="font-medium">{creature.name}</p>
                                <Badge variant="outline">Lvl {creature.level}</Badge>
                              </div>
                              <div className="mt-1">
                                <div className="flex items-center justify-between text-xs">
                                  <span>XP</span>
                                  <span>
                                    {creature.xp}/{creature.maxXp}
                                  </span>
                                </div>
                                <Progress value={(creature.xp / creature.maxXp) * 100} className="h-1.5" />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    <Button variant="outline" className="mt-3 w-full" onClick={() => setActiveTab("creatures")}>
                      View All Creatures
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stages" className="mt-0">
            <div className="space-y-6">
              {learningPathData.stages.map((stage) => (
                <Card key={stage.id} className={stage.completed ? "border-green-200" : ""}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              stage.completed
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {stage.completed ? <CheckCircle className="h-4 w-4" /> : <span>{stage.id}</span>}
                          </div>
                          <CardTitle>{stage.title}</CardTitle>
                          {stage.completed && <Badge className="bg-green-500">Completed</Badge>}
                        </div>
                        <CardDescription className="mt-1">{stage.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className={stage.completed ? "bg-green-100 text-green-800" : ""}>
                        {stage.progress}% Complete
                      </Badge>
                    </div>
                    <div className="mt-2">
                      <Progress value={stage.progress} className="h-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {stage.courses.map((course) => (
                        <Card
                          key={course.id}
                          className={`overflow-hidden ${course.completed ? "border-green-200" : ""}`}
                        >
                          <div className="relative h-32 w-full">
                            <Image
                              src={course.image || "/placeholder.svg"}
                              alt={course.title}
                              fill
                              className="object-cover"
                            />
                            {course.completed && (
                              <div className="absolute right-2 top-2">
                                <Badge className="bg-green-500">Completed</Badge>
                              </div>
                            )}
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <CardDescription>{course.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="flex items-center gap-1 bg-blue-100 text-blue-800">
                                <Clock className="h-3 w-3" /> {course.duration}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1 bg-green-100 text-green-800">
                                <Star className="h-3 w-3" /> {course.xp} XP
                              </Badge>
                            </div>
                          </CardContent>
                          <CardFooter className="border-t bg-muted/50 px-6 py-3">
                            <Button className="w-full" variant={course.completed ? "outline" : "default"} asChild>
                              <Link href={`/course/${course.id}`}>
                                {course.completed ? "Review Course" : "Start Course"}
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="creatures" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {learningPathData.creatures.map((creature) => (
                <Card key={creature.id} className={`overflow-hidden ${!creature.unlocked ? "opacity-60" : ""}`}>
                  <div className="relative">
                    <div className="flex h-40 items-center justify-center bg-gradient-to-b from-primary/20 to-primary/5">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10">
                        <Image
                          src={creature.image || "/placeholder.svg"}
                          alt={creature.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div className="absolute right-3 top-3">
                      <Badge className={creature.unlocked ? "bg-green-500" : "bg-muted"}>
                        {creature.unlocked ? "Unlocked" : "Locked"}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>{creature.name}</CardTitle>
                      <Badge variant="outline">Lvl {creature.level}</Badge>
                    </div>
                    <CardDescription>{creature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {creature.unlocked && (
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-xs">
                          <span>XP Progress</span>
                          <span>
                            {creature.xp}/{creature.maxXp}
                          </span>
                        </div>
                        <Progress value={(creature.xp / creature.maxXp) * 100} className="mt-1" />
                      </div>
                    )}
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Abilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {creature.abilities.map((ability, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className={creature.unlocked ? "bg-blue-100 text-blue-800" : ""}
                          >
                            {ability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/50 px-6 py-3">
                    {creature.unlocked ? (
                      <Button className="w-full">Train Creature</Button>
                    ) : (
                      <Button variant="outline" className="w-full" disabled>
                        Complete Stage {creature.id} to Unlock
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rewards" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Path Completion Rewards</CardTitle>
                  <CardDescription>Earn these rewards by completing the entire learning path</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                          <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                          <p className="font-medium">Math Master Badge</p>
                          <p className="text-sm text-muted-foreground">Prestigious recognition of your math skills</p>
                        </div>
                      </div>
                      <Badge className="bg-primary">
                        <Star className="mr-1 h-3 w-3" /> Epic
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                          <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="font-medium">XP Bonus</p>
                          <p className="text-sm text-muted-foreground">A substantial XP reward for completion</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500">+{learningPathData.xpReward} XP</Badge>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                          <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="font-medium">Mentor Status</p>
                          <p className="text-sm text-muted-foreground">
                            Ability to help other students in this subject
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-purple-500">Special</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stage Completion Rewards</CardTitle>
                  <CardDescription>Earn these rewards by completing individual stages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {learningPathData.stages.map((stage) => (
                      <div key={stage.id} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full ${
                              stage.completed ? "bg-green-100 dark:bg-green-900" : "bg-muted"
                            }`}
                          >
                            {stage.completed ? (
                              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                            ) : (
                              <span className="text-lg font-bold">{stage.id}</span>
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{stage.title} Completion</p>
                            <p className="text-sm text-muted-foreground">
                              {stage.completed ? "Reward claimed" : "Complete all courses in this stage"}
                            </p>
                          </div>
                        </div>
                        <Badge className={stage.completed ? "bg-green-500" : "bg-primary"}>
                          <Star className="mr-1 h-3 w-3" /> +{300 + stage.id * 100} XP
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Special Achievements</CardTitle>
                  <CardDescription>Unlock these by meeting special conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium">Perfect Score</p>
                          <p className="text-sm text-muted-foreground">Get 100% on all quizzes and tests</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-500">+500 XP</Badge>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                          <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <p className="font-medium">Speed Learner</p>
                          <p className="text-sm text-muted-foreground">Complete the path in under 4 weeks</p>
                        </div>
                      </div>
                      <Badge className="bg-orange-500">+750 XP</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

