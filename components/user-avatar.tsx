"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Award, Home, LogOut, Settings, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function UserAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary pixel-avatar">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="pixel-dropdown">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/" className="flex cursor-pointer items-center hover-scale">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#" onClick={() => window.history.back()} className="flex cursor-pointer items-center hover-scale">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex cursor-pointer items-center hover-scale">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/achievements" className="flex cursor-pointer items-center hover-scale">
            <Award className="mr-2 h-4 w-4" />
            Achievements
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex cursor-pointer items-center hover-scale">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex cursor-pointer items-center text-destructive hover-scale">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

