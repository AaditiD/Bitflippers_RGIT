"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserAvatar } from "@/components/user-avatar"
import { LearningPath } from "@/components/learning-path"
import { RecentAchievements } from "@/components/recent-achievements"
import { DailyChallenge } from "@/components/daily-challenge"
import { Leaderboard } from "@/components/leaderboard"
import { FeaturedCourses } from "@/components/featured-courses"
import { UserStats } from "@/components/user-stats"
import { PixelBorder } from "@/components/pixel-border"
import { AnimatedNumber } from "@/components/animated-number"
import { PixelCharacter } from "@/components/pixel-character"
import { HomeIcon, ArrowLeft, Sparkles } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AnimatedElement } from "@/components/animated-element"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f0f8ff] dark:bg-[#0a0a16] pixel-pattern">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover-scale">
              <div className="relative h-8 w-8 overflow-hidden">
                <PixelBorder className="absolute inset-0 flex items-center justify-center bg-yellow-400 text-lg font-bold">
                  P
                </PixelBorder>
              </div>
              <span className="text-xl font-bold">PixelLearn</span>
            </Link>
          </div>
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/explore" className="text-sm font-medium hover:text-primary transition-colors hover-scale">
              Explore
            </Link>
            <Link
              href="/my-collection"
              className="text-sm font-medium hover:text-primary transition-colors hover-scale"
            >
              My Collection
            </Link>
            <Link href="/challenges" className="text-sm font-medium hover:text-primary transition-colors hover-scale">
              Challenges
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium hover:text-primary transition-colors hover-scale">
              Leaderboard
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 items-center rounded-md bg-yellow-100 px-2 text-xs font-medium border border-yellow-400 animate-pulse hover-scale">
                <span className="text-yellow-700">Level 15</span>
              </div>
              <div className="flex h-6 items-center rounded-md bg-blue-100 px-2 text-xs font-medium border border-blue-400 hover-scale">
                <span className="text-blue-700">
                  <AnimatedNumber value={2450} /> XP
                </span>
              </div>
            </div>
            <UserAvatar />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <AnimatedElement animation="fade-in" delay={0.1}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Welcome back, Trainer!</h1>
                <p className="text-muted-foreground">Continue your learning journey</p>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={65} className="w-32 pixel-progress" />
                <span className="text-sm font-medium">Level 15 • 65%</span>
              </div>
            </div>
          </AnimatedElement>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <AnimatedElement animation="slide-up" delay={0.2}>
                <Tabs defaultValue="learning-paths">
                  <TabsList className="grid w-full grid-cols-3 pixel-tabs">
                    <TabsTrigger value="learning-paths" className="hover-scale">
                      Learning Paths
                    </TabsTrigger>
                    <TabsTrigger value="achievements" className="hover-scale">
                      Achievements
                    </TabsTrigger>
                    <TabsTrigger value="daily-challenges" className="hover-scale">
                      Daily Challenges
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="learning-paths" className="mt-4">
                    <LearningPath />
                  </TabsContent>
                  <TabsContent value="achievements" className="mt-4">
                    <RecentAchievements />
                  </TabsContent>
                  <TabsContent value="daily-challenges" className="mt-4">
                    <DailyChallenge />
                  </TabsContent>
                </Tabs>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay={0.3}>
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Featured Courses</h2>
                    <PixelCharacter type="pikachu" className="h-12 w-12 bounce-animation hover-scale" />
                  </div>
                  <FeaturedCourses />
                </div>
              </AnimatedElement>
            </div>

            <div className="space-y-6">
              <AnimatedElement animation="slide-left" delay={0.2}>
                <Card className="pixel-card overflow-visible hover-lift">
                  <CardContent className="p-4 relative">
                    <PixelCharacter
                      type="bulbasaur"
                      className="absolute -top-8 -right-4 h-16 w-16 bounce-animation hover-scale"
                    />
                    <UserStats />
                  </CardContent>
                </Card>
              </AnimatedElement>

              <AnimatedElement animation="slide-left" delay={0.3}>
                <Card className="pixel-card hover-lift">
                  <CardContent className="p-4">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h3 className="text-lg font-bold">Leaderboard</h3>
                      <PixelCharacter type="trophy" className="h-8 w-8 shine-animation hover-scale" />
                    </div>
                    <ScrollArea className="h-[300px] pr-4">
                      <Leaderboard />
                    </ScrollArea>
                    <div className="mt-4 text-center">
                      <Button variant="pixel" size="sm" asChild className="hover-scale">
                        <Link href="/leaderboard">View Full Leaderboard</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>

          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="mt-8 text-center">
              <div className="inline-block hover-scale">
                <PixelBorder className="p-4 bg-yellow-100 dark:bg-yellow-900/30">
                  <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-300">
                    <Sparkles className="h-5 w-5 animate-pulse" />
                    <span>Complete today's challenge to earn a special reward!</span>
                    <Sparkles className="h-5 w-5 animate-pulse" />
                  </div>
                </PixelBorder>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col sm:flex-row py-6 w-full items-center justify-between">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <Link href="/" className="flex items-center gap-2 hover:text-primary transition-colors hover-scale">
              <HomeIcon className="h-4 w-4" />
              <span className="text-sm">Home</span>
            </Link>
            <Link
              href="#"
              onClick={() => window.history.back()}
              className="flex items-center gap-2 hover:text-primary transition-colors hover-scale"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Go Back</span>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PixelLearn. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link href="/help" className="text-xs hover:underline underline-offset-4 hover-scale">
              Help
            </Link>
            <Link href="/terms" className="text-xs hover:underline underline-offset-4 hover-scale">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs hover:underline underline-offset-4 hover-scale">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

