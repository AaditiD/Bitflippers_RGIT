import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award, Star } from "lucide-react"

export default function LeaderboardPage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <p className="text-muted-foreground">See how you rank against other learners</p>
      </div>

      <Tabs defaultValue="global">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
          <TabsTrigger value="weekly">This Week</TabsTrigger>
          <TabsTrigger value="monthly">This Month</TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="mt-0">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Top Learners</CardTitle>
                  <CardDescription>Based on total XP earned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between rounded-lg p-3 ${
                          i === 7 ? "bg-primary/10" : "hover:bg-muted"
                        } ${i < 3 ? "border border-yellow-200 dark:border-yellow-900" : ""}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-medium">
                            {i === 0 ? (
                              <Trophy className="h-5 w-5 text-yellow-500" />
                            ) : i === 1 ? (
                              <Medal className="h-5 w-5 text-gray-400" />
                            ) : i === 2 ? (
                              <Award className="h-5 w-5 text-amber-700" />
                            ) : (
                              <span>{i + 1}</span>
                            )}
                          </div>
                          <Avatar className="h-10 w-10 border">
                            <AvatarImage
                              src={`/character.jpg?height=40&width=40&text=User ${i + 1}`}
                              alt={`User ${i + 1}`}
                            />
                            <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className={`font-medium ${i === 7 ? "text-primary" : ""}`}>
                              {i === 7 ? "You" : `User ${i + 1}`}
                            </p>
                            <p className="text-xs text-muted-foreground">Level {30 - i}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="font-medium">{(30000 - i * 1500).toLocaleString()} XP</span>
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          >
                            Lvl {30 - i}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Ranking</CardTitle>
                  <CardDescription>Current position and stats</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-3xl font-bold text-primary">8th</span>
                    </div>
                    <h3 className="mb-1 text-lg font-medium">Great job!</h3>
                    <p className="mb-4 text-sm text-muted-foreground">You're in the top 1% of all learners</p>
                    <div className="grid w-full grid-cols-2 gap-3">
                      <div className="rounded-lg border p-3 text-center">
                        <p className="text-sm text-muted-foreground">Total XP</p>
                        <p className="text-xl font-bold">21,500</p>
                      </div>
                      <div className="rounded-lg border p-3 text-center">
                        <p className="text-sm text-muted-foreground">Level</p>
                        <p className="text-xl font-bold">23</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Progress</CardTitle>
                  <CardDescription>XP earned this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, i) => (
                      <div key={day} className="flex items-center justify-between">
                        <span className="text-sm">{day}</span>
                        <div className="flex flex-1 items-center gap-2 px-4">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{
                              width: `${[75, 45, 90, 60, 30, 0, 0][i]}%`,
                              opacity: i >= 5 ? 0.3 : 1,
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium">{[750, 450, 900, 600, 300, 0, 0][i]} XP</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="friends" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Friends Leaderboard</h3>
            <p className="text-muted-foreground">See how you rank among your friends</p>
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Weekly Leaderboard</h3>
            <p className="text-muted-foreground">Top performers this week</p>
          </div>
        </TabsContent>

        <TabsContent value="monthly" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Monthly Leaderboard</h3>
            <p className="text-muted-foreground">Top performers this month</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

