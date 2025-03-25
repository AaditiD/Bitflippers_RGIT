"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, CheckCircle, Star } from "lucide-react"
import { AnimatedNumber } from "./animated-number"
import { motion } from "framer-motion"
import { AnimatedElement } from "./animated-element"

export function UserStats() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Your Stats</h3>

      <div className="space-y-3">
        <AnimatedElement animation="fade-in" delay={0.1}>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium">Current Level</span>
              <span className="text-sm font-medium">Level 15</span>
            </div>
            <Progress value={65} className="h-2 pixel-progress" />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>
                <AnimatedNumber value={2450} /> XP
              </span>
              <span>3,000 XP needed for Level 16</span>
            </div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-2 gap-3">
          <AnimatedElement animation="zoom-in" delay={0.2}>
            <motion.div
              className="rounded-md border bg-card p-3 text-card-foreground shadow-sm pixel-stat-card hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Completed</span>
              </div>
              <p className="mt-1 text-2xl font-bold">
                <AnimatedNumber value={24} />
              </p>
              <p className="text-xs text-muted-foreground">Lessons finished</p>
            </motion.div>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={0.3}>
            <motion.div
              className="rounded-md border bg-card p-3 text-card-foreground shadow-sm pixel-stat-card hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Streak</span>
              </div>
              <p className="mt-1 text-2xl font-bold">
                <AnimatedNumber value={7} />
              </p>
              <p className="text-xs text-muted-foreground">Days in a row</p>
            </motion.div>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={0.4}>
            <motion.div
              className="rounded-md border bg-card p-3 text-card-foreground shadow-sm pixel-stat-card hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">Badges</span>
              </div>
              <p className="mt-1 text-2xl font-bold">
                <AnimatedNumber value={12} />
              </p>
              <p className="text-xs text-muted-foreground">Achievements earned</p>
            </motion.div>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={0.5}>
            <motion.div
              className="rounded-md border bg-card p-3 text-card-foreground shadow-sm pixel-stat-card hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Courses</span>
              </div>
              <p className="mt-1 text-2xl font-bold">
                <AnimatedNumber value={5} />
              </p>
              <p className="text-xs text-muted-foreground">In progress</p>
            </motion.div>
          </AnimatedElement>
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-medium">Recent Activity</h4>
        <div className="space-y-2">
          <AnimatedElement animation="slide-right" delay={0.6}>
            <motion.div
              className="flex items-center justify-between rounded-md border p-2 pixel-activity-card hover-lift"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-100 dark:bg-green-900/50 hover-scale">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Completed Algebra Quiz</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <Badge variant="pixel" className="bg-green-500 text-white hover-scale">
                +75 XP
              </Badge>
            </motion.div>
          </AnimatedElement>

          <AnimatedElement animation="slide-right" delay={0.7}>
            <motion.div
              className="flex items-center justify-between rounded-md border p-2 pixel-activity-card hover-lift"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100 dark:bg-blue-900/50 hover-scale">
                  <Award className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Earned "Code Ninja" Badge</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
              <Badge variant="pixel" className="bg-blue-500 text-white hover-scale">
                +150 XP
              </Badge>
            </motion.div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  )
}

