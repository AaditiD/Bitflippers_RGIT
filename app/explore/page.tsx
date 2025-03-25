"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Star, BookOpen, Users, Clock, Home, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PixelCharacter } from "@/components/pixel-character"
import { PixelBorder } from "@/components/pixel-border"
import { AnimatedElement } from "@/components/animated-element"

export default function ExplorePage() {
  return (
    <div className="bg-[#f0f8ff] dark:bg-[#0a0a16] pixel-pattern min-h-screen">
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

      <div className="container py-6">
        <AnimatedElement animation="fade-in" delay={0.1}>
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Explore Learning Paths</h1>
            <p className="text-muted-foreground">Discover new skills and knowledge</p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-up" delay={0.2}>
          <div className="mb-6 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for courses, topics, or skills..."
                className="pl-9 pixel-input"
              />
            </div>
            <Button variant="pixel" className="hover-scale">
              Filters
            </Button>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-up" delay={0.3}>
          <Tabs defaultValue="all">
            <TabsList className="mb-6 w-full justify-start pixel-tabs">
              <TabsTrigger value="all" className="hover-scale">
                All Categories
              </TabsTrigger>
              <TabsTrigger value="math" className="hover-scale">
                Mathematics
              </TabsTrigger>
              <TabsTrigger value="programming" className="hover-scale">
                Programming
              </TabsTrigger>
              <TabsTrigger value="science" className="hover-scale">
                Science
              </TabsTrigger>
              <TabsTrigger value="language" className="hover-scale">
                Languages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Featured Learning Path */}
                <AnimatedElement animation="zoom-in" delay={0.4} className="col-span-full">
                  <Card className="overflow-hidden pixel-card hover-lift">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-60 w-full md:h-auto">
                        <Image
                          src="/coding.jpg?height=400&width=600"
                          alt="Featured Learning Path"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 right-0">
                          <PixelCharacter type="pikachu" className="h-24 w-24 bounce-animation hover-scale" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between p-6">
                        <div>
                          <Badge
                            variant="pixel"
                            className="mb-2 bg-yellow-500 text-white border-yellow-700 hover-scale"
                          >
                            Featured
                          </Badge>
                          <CardTitle className="mb-2 text-2xl">Become a Data Scientist</CardTitle>
                          <CardDescription className="mb-4">
                            Master the skills needed to analyze data, create visualizations, and build machine learning
                            models.
                          </CardDescription>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="pixel" className="flex items-center gap-1 border-yellow-400 hover-scale">
                              <Star className="h-3 w-3" />
                              4.9 (245 ratings)
                            </Badge>
                            <Badge variant="pixel" className="flex items-center gap-1 border-blue-400 hover-scale">
                              <BookOpen className="h-3 w-3" />
                              42 lessons
                            </Badge>
                            <Badge variant="pixel" className="flex items-center gap-1 border-green-400 hover-scale">
                              <Users className="h-3 w-3" />
                              3,245 enrolled
                            </Badge>
                            <Badge variant="pixel" className="flex items-center gap-1 border-purple-400 hover-scale">
                              <Clock className="h-3 w-3" />
                              25 hours
                            </Badge>
                          </div>
                        </div>
                        <Button className="mt-4" variant="pixel" asChild>
                          <Link href="/learning-path/data-science" className="hover-scale">
                            Explore Path
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </AnimatedElement>

                {/* Learning Paths */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <AnimatedElement key={i} animation="slide-up" delay={0.5 + i * 0.1}>
                    <Card className="overflow-hidden pixel-card hover-lift">
                      <div className="relative h-40 w-full">
                        <Image
                          src={`/coding.jpg?height=150&width=300&text=Learning Path ${i + 1}`}
                          alt={`Learning Path ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge variant="pixel" className="bg-primary text-white hover-scale">
                            {["Mathematics", "Programming", "Science", "Language", "Art", "History"][i % 6]}
                          </Badge>
                        </div>
                        <div className="absolute bottom-0 right-0">
                          <PixelCharacter
                            type={["pikachu", "charmander", "bulbasaur", "squirtle", "eevee", "pikachu"][i % 6]}
                            className="h-16 w-16 bounce-animation hover-scale"
                          />
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="line-clamp-1">
                          {
                            [
                              "Algebra Mastery",
                              "Python Programming",
                              "Chemistry Fundamentals",
                              "Spanish for Beginners",
                              "Digital Art Basics",
                              "Ancient Civilizations",
                            ][i % 6]
                          }
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="pixel"
                            className="flex items-center gap-1 bg-blue-100 text-blue-800 border-blue-400 hover-scale"
                          >
                            <Users className="h-3 w-3" />
                            {[1245, 987, 1532, 756, 1123, 892][i % 6]} students
                          </Badge>
                          <Badge
                            variant="pixel"
                            className="flex items-center gap-1 bg-green-100 text-green-800 border-green-400 hover-scale"
                          >
                            <BookOpen className="h-3 w-3" />
                            {[12, 15, 10, 20, 8, 14][i % 6]} lessons
                          </Badge>
                          <Badge
                            variant="pixel"
                            className={
                              i % 3 === 0
                                ? "bg-green-100 text-green-800 border-green-400"
                                : i % 3 === 1
                                  ? "bg-yellow-100 text-yellow-800 border-yellow-400"
                                  : "bg-red-100 text-red-800 border-red-400" + " hover-scale"
                            }
                          >
                            {["Beginner", "Intermediate", "Advanced"][i % 3]}
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t bg-muted/50 px-6 py-3">
                        <Button asChild variant="pixel" className="w-full hover-scale">
                          <Link href={`/learning-path/${i + 1}`}>
                            Enroll Now • {[500, 750, 600, 550, 700, 650][i % 6]} XP
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedElement>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs would have similar content structure */}
            <TabsContent value="math" className="mt-0">
              <AnimatedElement animation="fade-in" delay={0.4}>
                <div className="rounded-lg border p-8 text-center pixel-card">
                  <h3 className="text-lg font-medium">Mathematics Learning Paths</h3>
                  <p className="text-muted-foreground">Explore algebra, geometry, calculus and more</p>
                  <div className="mt-4 flex justify-center">
                    <PixelCharacter type="pikachu" className="h-16 w-16 bounce-animation hover-scale" />
                  </div>
                </div>
              </AnimatedElement>
            </TabsContent>
          </Tabs>
        </AnimatedElement>
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

