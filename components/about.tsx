"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, MapPin, Code2, Database, Server, Users } from "lucide-react"
import {
  SiMongodb,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGit,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Briefcase, label: "Experience", value: "2+ Years" },
    { icon: Award, label: "Projects", value: "15+" },
    { icon: GraduationCap, label: "Education", value: "IT Degree" },
    { icon: MapPin, label: "Location", value: "Kigali, Rwanda" },
  ]

  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-4 mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Innovative software developer with a rich academic background in Mathematics, Computer Science, and
              Economics from G.S Kacyiru 2. Currently pursuing a Bachelor's in Information Technology at the University
              of Kigali (September 2023 - Present), I combine theoretical knowledge with practical experience to create
              impactful digital solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since January 2023, I've been working as a self-employed software developer in Kigali, delivering scalable
              applications tailored to client requirements using modern programming languages and frameworks. I
              collaborate with cross-functional teams to design and implement efficient algorithms and data structures
              that improve application performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My comprehensive understanding spans network architecture, cybersecurity principles, database management
              systems, and emerging technologies in cloud computing, artificial intelligence, and machine learning. I'm
              passionate about solving complex problems and creating exceptional user experiences through clean,
              maintainable code.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={stat.label}
                  className={`p-6 text-center hover:border-primary transition-all duration-300 hover:scale-105 ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              )
            })}
          </div>

          <div className={`mt-12 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold">Education</h3>
            <div className="space-y-4">
              <Card className="p-6 hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Bachelor's in Information Technology</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      University of Kigali, Kigali • Sep 2023 - Present
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Comprehensive understanding of network architecture and cybersecurity principles</li>
                      <li>• Database management systems including design, querying, and optimization strategies</li>
                      <li>• Systems analysis and design, enhancing problem-solving and critical thinking skills</li>
                      <li>• Emerging technologies in cloud computing, AI, and machine learning</li>
                    </ul>
                  </div>
                </div>
              </Card>
              {/* <Card className="p-6 hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Math, Computer Science and Economics</h4>
                    <p className="text-sm text-muted-foreground mb-2">G.S Kacyiru 2, Kigali</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Comprehensive understanding of algorithms, data structures, and programming paradigms</li>
                      <li>
                        • Development of software solutions integrating principles from mathematics, CS, and economics
                      </li>
                    </ul>
                  </div>
                </div>
              </Card> */}
            </div>
          </div>

          <div className={`mt-12 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold">Employment</h3>
            <Card className="p-6 hover:border-primary transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Software Developer</h4>
                  <p className="text-sm text-muted-foreground mb-2">Self-employed, Kigali • Jan 2023 - Present</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Developed and maintained scalable software applications tailored to client requirements</li>
                    <li>
                      • Collaborated with cross-functional teams to design efficient algorithms and data structures
                    </li>
                    <li>• Improved application performance through optimization and best practices</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className={`mt-12 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" style={{ color: skill.color }} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={`mt-12 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold">Hobbies & Interests</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Code2, title: "Coding Challenges", description: "Solving algorithmic problems and puzzles" },
                { icon: Server, title: "Gaming", description: "Strategy and competitive gaming" },
                { icon: Users, title: "Cycling", description: "Outdoor activities and fitness" },
              ].map((hobby, index) => {
                const Icon = hobby.icon
                return (
                  <Card
                    key={hobby.title}
                    className={`p-4 hover:border-primary transition-all duration-300 ${
                      isVisible ? "animate-scale-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{hobby.title}</h4>
                        <p className="text-sm text-muted-foreground">{hobby.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className={`mt-12 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold">Core Qualities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: Code2,
                  title: "Problem-solving",
                  description: "Analytical approach to complex technical challenges with innovative solutions",
                },
                {
                  icon: Users,
                  title: "Teamwork",
                  description: "Collaborative mindset for cross-functional projects and team success",
                },
                {
                  icon: Server,
                  title: "Communication",
                  description: "Clear technical communication across teams and stakeholders",
                },
                {
                  icon: Database,
                  title: "Critical thinking",
                  description: "Strategic decision-making for optimal and scalable solutions",
                },
              ].map((quality, index) => {
                const Icon = quality.icon
                return (
                  <Card
                    key={quality.title}
                    className={`p-4 hover:border-primary transition-all duration-300 ${
                      isVisible ? "animate-scale-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{quality.title}</h4>
                        <p className="text-sm text-muted-foreground">{quality.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
