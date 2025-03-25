import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, Trophy, Users } from "lucide-react"
import Link from "next/link"

export default function ChallengesPage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Challenges</h1>
        <p className="text-muted-foreground">Test your knowledge and earn rewards</p>
      </div>

      <Tabs defaultValue="daily">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="daily">Daily Challenges</TabsTrigger>
          <TabsTrigger value="weekly">Weekly Quests</TabsTrigger>
          <TabsTrigger value="special">Special Events</TabsTrigger>
          <TabsTrigger value="battles">Knowledge Battles</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="mt-0">
          <div className="grid gap-6">
            <Card className="overflow-hidden bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 bg-yellow-500">Featured Challenge</Badge>
                    <CardTitle>Daily Knowledge Sprint</CardTitle>
                    <CardDescription className="mt-1">
                      Complete 5 quick challenges from different subjects in under 15 minutes
                    </CardDescription>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                    <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    <Clock className="mr-1 h-3 w-3" /> 15 minutes
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  >
                    <Star className="mr-1 h-3 w-3" /> 250 XP
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                  >
                    <Users className="mr-1 h-3 w-3" /> 1,245 participants today
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-3">
                <Button className="ml-auto" asChild>
                  <Link href="/challenge/daily-sprint">Start Challenge</Link>
                </Button>
              </CardFooter>
            </Card>

            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>
                        {
                          ["Math Challenge", "Coding Puzzle", "Science Quiz", "Language Test", "History Timeline"][
                            i % 5
                          ]
                        }
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {
                          [
                            "Solve 5 algebra problems in under 10 minutes",
                            "Debug the function to make all tests pass",
                            "Answer 10 questions about the solar system",
                            "Translate 15 phrases correctly",
                            "Arrange historical events in the correct order",
                          ][i % 5]
                        }
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      <Clock className="mr-1 h-3 w-3" /> {[10, 15, 8, 12, 10][i % 5]} minutes
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    >
                      <Star className="mr-1 h-3 w-3" /> {[100, 150, 120, 130, 110][i % 5]} XP
                    </Badge>
                    <Badge
                      variant="outline"
                      className={
                        i % 3 === 0
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : i % 3 === 1
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }
                    >
                      {["Easy", "Medium", "Hard"][i % 3]}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-3">
                  <Button className="ml-auto" asChild>
                    <Link href={`/challenge/${i + 1}`}>Start Challenge</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Weekly Quests</h3>
            <p className="text-muted-foreground">Complete a series of related challenges for bigger rewards</p>
          </div>
        </TabsContent>

        <TabsContent value="special" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Special Events</h3>
            <p className="text-muted-foreground">Limited-time challenges with unique rewards</p>
          </div>
        </TabsContent>

        <TabsContent value="battles" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Knowledge Battles</h3>
            <p className="text-muted-foreground">Compete against other learners in real-time</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

