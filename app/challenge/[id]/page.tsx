"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Clock, Home, Star, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { PixelCharacter } from "@/components/pixel-character"
import { AnimatedNumber } from "@/components/animated-number"
import { motion } from "framer-motion"
import Link from "next/link"
import { AnimatedElement } from "@/components/animated-element"

// Mock challenge data
const challengeData = {
  "1": {
    title: "Math Challenge",
    description: "Solve 5 algebra problems in under 10 minutes",
    difficulty: "Easy",
    timeLimit: 600, // in seconds
    xpReward: 100,
    character: "pikachu",
    questions: [
      {
        id: 1,
        question: "If 3x + 5 = 20, what is the value of x?",
        options: ["3", "5", "7", "15"],
        correctAnswer: "5",
      },
      {
        id: 2,
        question: "Simplify: 2(x + 3) - 4",
        options: ["2x + 2", "2x + 6", "2x + 2", "2x - 4"],
        correctAnswer: "2x + 2",
      },
      {
        id: 3,
        question: "Solve for y: 4y - 8 = 2y + 6",
        options: ["5", "7", "8", "9"],
        correctAnswer: "7",
      },
      {
        id: 4,
        question: "What is the slope of the line passing through (2, 3) and (4, 7)?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
      },
      {
        id: 5,
        question: "If f(x) = x² + 3x + 2, what is f(2)?",
        options: ["8", "10", "12", "16"],
        correctAnswer: "12",
      },
    ],
  },
  "2": {
    title: "Coding Puzzle",
    description: "Debug the function to make all tests pass",
    difficulty: "Medium",
    timeLimit: 900, // in seconds
    xpReward: 150,
    character: "charmander",
    questions: [
      {
        id: 1,
        question: "What will be the output of console.log(typeof NaN)?",
        options: ["undefined", "number", "NaN", "object"],
        correctAnswer: "number",
      },
      {
        id: 2,
        question: "Which method removes the last element from an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correctAnswer: "pop()",
      },
      {
        id: 3,
        question: "What is the correct way to check if an object has a property?",
        options: [
          "object.hasProperty('property')",
          "object.hasOwnProperty('property')",
          "object.contains('property')",
          "object.exists('property')",
        ],
        correctAnswer: "object.hasOwnProperty('property')",
      },
      {
        id: 4,
        question: "Which of the following is not a JavaScript data type?",
        options: ["string", "boolean", "character", "number"],
        correctAnswer: "character",
      },
      {
        id: 5,
        question: "What does the '===' operator do?",
        options: ["Assigns a value", "Compares values", "Compares values and types", "Checks if a value exists"],
        correctAnswer: "Compares values and types",
      },
    ],
  },
}

export default function ChallengePage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const challenge = challengeData[id as keyof typeof challengeData]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(challenge?.questions.length || 0).fill(""))
  const [timeLeft, setTimeLeft] = useState(challenge?.timeLimit || 0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    if (!challenge) {
      router.push("/challenges")
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [challenge, router])

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < challenge.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleComplete = () => {
    let correctAnswers = 0
    challenge.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correctAnswers++
      }
    })

    const finalScore = Math.round((correctAnswers / challenge.questions.length) * challenge.xpReward)
    setScore(finalScore)
    setIsCompleted(true)
    setShowCelebration(true)

    setTimeout(() => {
      setShowCelebration(false)
    }, 3000)
  }

  if (!challenge) {
    return (
      <div className="container py-6 text-center">
        <p>Challenge not found</p>
        <Button variant="pixel" className="mt-4 hover-scale" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    )
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const progress = ((currentQuestion + 1) / challenge.questions.length) * 100

  return (
    <div className="bg-[#f0f8ff] dark:bg-[#0a0a16] pixel-pattern min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover-scale">
              <div className="relative h-8 w-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-yellow-400 text-lg font-bold border-2 border-black dark:border-white">
                  P
                </div>
              </div>
              <span className="text-xl font-bold">PixelLearn</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-1 text-sm hover:text-primary transition-colors hover-scale">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="#"
              onClick={() => window.history.back()}
              className="flex items-center gap-1 text-sm hover:text-primary transition-colors hover-scale"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container max-w-3xl py-6">
        {showCelebration && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <PixelCharacter type={challenge.character} className="h-40 w-40 celebrate-animation" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-yellow-400 px-4 py-2 rounded-md border-2 border-black text-black font-bold"
              >
                +{score} XP!
              </motion.div>
            </motion.div>
          </div>
        )}

        {!isCompleted ? (
          <AnimatedElement animation="fade-in" delay={0.1}>
            <Card className="pixel-card hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </div>
                  <div className="relative h-16 w-16 hover-scale">
                    <PixelCharacter type={challenge.character} className="h-16 w-16 bounce-animation" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="pixel" className="bg-blue-100 text-blue-800 border-blue-400 hover-scale">
                      <Clock className="mr-1 h-3 w-3" /> {formatTime(timeLeft)}
                    </Badge>
                    <Badge
                      variant="pixel"
                      className={
                        challenge.difficulty === "Easy"
                          ? "bg-green-100 text-green-800 border-green-400"
                          : challenge.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800 border-yellow-400"
                            : "bg-red-100 text-red-800 border-red-400" + " hover-scale"
                      }
                    >
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <Badge variant="pixel" className="bg-purple-100 text-purple-800 border-purple-400 hover-scale">
                    <Star className="mr-1 h-3 w-3" /> {challenge.xpReward} XP
                  </Badge>
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>
                      Question {currentQuestion + 1} of {challenge.questions.length}
                    </span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="mt-1 pixel-progress" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <motion.h3
                      key={currentQuestion}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-4 text-lg font-medium"
                    >
                      {challenge.questions[currentQuestion].question}
                    </motion.h3>
                    <RadioGroup value={answers[currentQuestion]} onValueChange={handleAnswerChange}>
                      {challenge.questions[currentQuestion].options.map((option, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <RadioGroupItem value={option} id={`option-${index}`} className="pixel-radio" />
                          <Label
                            htmlFor={`option-${index}`}
                            className="flex-1 cursor-pointer rounded-md p-2 hover:bg-muted border-2 border-transparent hover:border-muted"
                          >
                            {option}
                          </Label>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-3">
                <Button
                  variant="pixel"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="hover-scale"
                >
                  Previous
                </Button>
                <Button
                  variant="pixel"
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                  className="hover-scale"
                >
                  {currentQuestion < challenge.questions.length - 1 ? "Next" : "Complete"}
                </Button>
              </CardFooter>
            </Card>
          </AnimatedElement>
        ) : (
          <AnimatedElement animation="zoom-in" delay={0.1}>
            <Card className="overflow-hidden pixel-card hover-lift">
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 px-6 py-8 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                  <PixelCharacter type={challenge.character} className="h-24 w-24 celebrate-animation hover-scale" />
                </div>
                <h2 className="mb-2 text-2xl font-bold">Challenge Completed!</h2>
                <p className="text-muted-foreground">
                  You've earned <span className="font-bold text-primary">{score} XP</span> from this challenge
                </p>
              </div>
              <CardContent className="p-6">
                <div className="mb-6 space-y-4">
                  <div>
                    <h3 className="mb-2 font-medium">Your Results</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        className="rounded-md border-2 p-3 text-center pixel-stat-card hover-lift"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-sm text-muted-foreground">Score</p>
                        <p className="text-xl font-bold">
                          <AnimatedNumber value={Math.round((score / challenge.xpReward) * 100)} />%
                        </p>
                      </motion.div>

                      <motion.div
                        className="rounded-md border-2 p-3 text-center pixel-stat-card hover-lift"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-sm text-muted-foreground">Time Taken</p>
                        <p className="text-xl font-bold">{formatTime(challenge.timeLimit - timeLeft)}</p>
                      </motion.div>

                      <motion.div
                        className="rounded-md border-2 p-3 text-center pixel-stat-card hover-lift"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-sm text-muted-foreground">XP Earned</p>
                        <p className="text-xl font-bold">
                          <AnimatedNumber value={score} />
                        </p>
                      </motion.div>

                      <motion.div
                        className="rounded-md border-2 p-3 text-center pixel-stat-card hover-lift"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-sm text-muted-foreground">Difficulty</p>
                        <p
                          className={cn(
                            "text-xl font-bold",
                            challenge.difficulty === "Easy"
                              ? "text-green-600 dark:text-green-400"
                              : challenge.difficulty === "Medium"
                                ? "text-yellow-600 dark:text-yellow-400"
                                : "text-red-600 dark:text-red-400",
                          )}
                        >
                          {challenge.difficulty}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-3">
                <Button
                  variant="pixel"
                  onClick={() => router.push("/challenges")}
                  className="flex items-center gap-1 hover-scale"
                >
                  <Home className="h-4 w-4" />
                  Back to Challenges
                </Button>
                <Button variant="pixel" onClick={() => router.push("/my-collection")} className="hover-scale">
                  View Your Progress
                </Button>
              </CardFooter>
            </Card>
          </AnimatedElement>
        )}
      </div>

      <footer className="border-t bg-background">
        <div className="container flex flex-col sm:flex-row py-6 w-full items-center justify-between">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <Link href="/" className="flex items-center gap-2 hover:text-primary transition-colors hover-scale">
              <Home className="h-4 w-4" />
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

