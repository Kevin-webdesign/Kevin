"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = ["Software Developer", "System Analyst", "Graphic Designer"]

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(
      () => {
        if (!isDeleting && displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else if (isDeleting && displayedText === "") {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        } else {
          setDisplayedText(
            isDeleting
              ? currentRole.substring(0, displayedText.length - 1)
              : currentRole.substring(0, displayedText.length + 1),
          )
        }
      },
      isDeleting && displayedText === currentRole ? pauseTime : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [displayedText, currentRoleIndex, isDeleting, roles])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">Uzamurera Kevin</h1>
              <div className="h-16 md:h-20 flex items-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                  {displayedText}
                  <span className="animate-pulse text-foreground">|</span>
                </h2>
              </div>
            </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
  Software developer and graphic designer focused on building modern, scalable web applications and visually engaging digital experiences. Skilled in full-stack development with React, Node.js, PHP, and MySQL, I combine technical expertise with creative design to deliver user-friendly and impactful solutions.
</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              {/* <Button size="lg" variant="outline" className="group bg-transparent" asChild>
                <a href="#contact">
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </a>
              </Button> */}
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="mailto:kevinuzamurera@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://github.com/Kevin-webdesign" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/uzamurera-kevin-681750326" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-yellow-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="profile-rotating-border relative w-full h-full rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my%20image-vS49YrE0pMqPIJa2ICvkVBxc21pVLH.jpg"
                  alt="Uzamurera Kevin - Software Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                2+ Years
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg border-2 border-primary">
                15+ Projects
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
