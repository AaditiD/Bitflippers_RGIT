import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Award, CheckCircle, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MyCollectionPage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Collection</h1>
        <p className="text-muted-foreground">Track your progress and achievements</p>
      </div>

      <Tabs defaultValue="courses">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="creatures">Learning Creatures</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src={`/coding.jpg?height=150&width=300&text=Course ${i + 1}`}
                    alt={`Course ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary">
                      {["Mathematics", "Programming", "Science", "Language", "Art", "History"][i % 6]}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-1">
                    {
                      [
                        "Algebra Fundamentals",
                        "Python for Beginners",
                        "Chemistry Basics",
                        "Spanish 101",
                        "Digital Art Essentials",
                        "World History",
                      ][i % 6]
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>
                      Progress: {[4, 8, 3, 12, 2, 7][i % 6]}/{[12, 15, 10, 20, 8, 14][i % 6]} lessons
                    </span>
                    <span className="font-medium">
                      {Math.floor(([4, 8, 3, 12, 2, 7][i % 6] / [12, 15, 10, 20, 8, 14][i % 6]) * 100)}%
                    </span>
                  </div>
                  <Progress
                    value={Math.floor(([4, 8, 3, 12, 2, 7][i % 6] / [12, 15, 10, 20, 8, 14][i % 6]) * 100)}
                    className="mb-2"
                  />
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1 bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3" />
                      {[250, 375, 180, 600, 100, 350][i % 6]} XP earned
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1 bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3" />
                      Last activity:{" "}
                      {["2 hours ago", "Yesterday", "3 days ago", "1 week ago", "Today", "4 days ago"][i % 6]}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-3">
                  <Button asChild variant="ghost" className="ml-auto gap-1">
                    <Link href={`/course/${i + 1}`}>
                      Continue Learning <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="mt-0">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <Award className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mb-1 font-semibold">
                      {
                        [
                          "Math Master",
                          "Code Ninja",
                          "Science Explorer",
                          "Language Guru",
                          "Art Virtuoso",
                          "History Buff",
                          "Quick Learner",
                          "Perfect Score",
                          "Streak Master",
                          "Quiz Champion",
                          "Early Bird",
                          "Helping Hand",
                        ][i % 12]
                      }
                    </h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {
                        [
                          "Complete 10 math challenges",
                          "Write your first function",
                          "Finish the science course",
                          "Learn 100 new words",
                          "Create your first digital art",
                          "Complete history timeline",
                          "Finish 5 lessons in a day",
                          "Get 100% on any quiz",
                          "Learn for 7 days in a row",
                          "Win a challenge against friends",
                          "Complete a lesson before 8am",
                          "Help 5 other students",
                        ][i % 12]
                      }
                    </p>
                    <Badge className={i < 7 ? "bg-green-500" : "bg-muted"}>{i < 7 ? "Completed" : "Locked"}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="badges" className="mt-0">
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {Array.from({ length: 18 }).map((_, i) => (
              <Card key={i} className={`overflow-hidden ${i >= 10 ? "opacity-50" : ""}`}>
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-foreground/20">
                      <Award className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-sm font-medium">
                      {
                        [
                          "Math Wizard",
                          "Code Master",
                          "Science Genius",
                          "Word Smith",
                          "Art Creator",
                          "History Expert",
                          "Fast Learner",
                          "Perfect Scorer",
                          "Dedicated Student",
                          "Quiz Master",
                          "Early Riser",
                          "Team Player",
                          "Problem Solver",
                          "Critical Thinker",
                          "Creative Mind",
                          "Curious Explorer",
                          "Diligent Worker",
                          "Knowledge Seeker",
                        ][i % 18]
                      }
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {i >= 10
                        ? "Locked"
                        : `Earned ${["1 day", "3 days", "1 week", "2 weeks", "1 month", "2 months", "3 months", "4 months", "5 months", "6 months"][i % 10]} ago`}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="creatures" className="mt-0">
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 15 }).map((_, i) => (
              <Card key={i} className={`overflow-hidden ${i >= 8 ? "opacity-50" : ""}`}>
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-500">
                      <Image
                        src={`/character.jpg?height=80&width=80&text=Creature ${i + 1}`}
                        alt={`Learning Creature ${i + 1}`}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="mb-1 font-semibold">
                      {
                        [
                          "Mathosaurus",
                          "Coderaptor",
                          "Sciencetron",
                          "Lingualion",
                          "Artisaur",
                          "Historex",
                          "Learnopus",
                          "Quizzard",
                          "Streakasaurus",
                          "Problemator",
                          "Thinkodile",
                          "Creativus",
                          "Explorex",
                          "Diligentaur",
                          "Knowledgemon",
                        ][i % 15]
                      }
                    </h3>
                    <p className="mb-2 text-xs text-muted-foreground">
                      {i >= 8 ? "Not yet discovered" : `Level ${[5, 8, 3, 10, 2, 7, 4, 6][i % 8]}`}
                    </p>
                    {i < 8 && (
                      <div className="w-full">
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>XP</span>
                          <span>
                            {[250, 400, 150, 500, 100, 350, 200, 300][i % 8]}/
                            {[500, 800, 300, 1000, 200, 700, 400, 600][i % 8]}
                          </span>
                        </div>
                        <Progress
                          value={Math.floor(
                            ([250, 400, 150, 500, 100, 350, 200, 300][i % 8] /
                              [500, 800, 300, 1000, 200, 700, 400, 600][i % 8]) *
                              100,
                          )}
                          className="h-1.5"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

