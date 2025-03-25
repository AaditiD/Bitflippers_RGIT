"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PixelIcon } from "./pixel-icon"
import { AnimatedElement } from "./animated-element"

const achievements = [
  {
    id: 1,
    title: "Math Master",
    description: "Completed 10 math challenges with perfect scores",
    icon: "award",
    iconColor: "text-yellow-500",
    date: "2 days ago",
    xp: 250,
    rarity: "Rare",
  },
  {
    id: 2,
    title: "Code Ninja",
    description: "Wrote your first function and passed all test cases",
    icon: "code",
    iconColor: "text-purple-500",
    date: "1 week ago",
    xp: 150,
    rarity: "Common",
  },
  {
    id: 3,
    title: "Science Explorer",
    description: "Completed the basic science course with distinction",
    icon: "flask",
    iconColor: "text-blue-500",
    date: "2 weeks ago",
    xp: 200,
    rarity: "Uncommon",
  },
  {
    id: 4,
    title: "Quick Learner",
    description: "Completed 5 lessons in a single day",
    icon: "zap",
    iconColor: "text-orange-500",
    date: "3 weeks ago",
    xp: 100,
    rarity: "Common",
  },
  {
    id: 5,
    title: "Bookworm",
    description: "Read all available learning materials in the Literature section",
    icon: "book",
    iconColor: "text-green-500",
    date: "1 month ago",
    xp: 300,
    rarity: "Epic",
  },
]

export function RecentAchievements() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((achievement, index) => (
        <AnimatedElement key={achievement.id} animation="zoom-in" delay={0.1 * (index + 1)}>
          <Card className="overflow-hidden pixel-card hover-lift">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-muted pixel-icon-container hover-scale">
                  <PixelIcon type={achievement.icon} className={`h-8 w-8 ${achievement.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <Badge variant="pixel" className="bg-green-100 text-green-800 border-green-400 hover-scale">
                      +{achievement.xp} XP
                    </Badge>
                    <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedElement>
      ))}
    </div>
  )
}

