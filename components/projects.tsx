"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)
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

  const projects = [
    {
      title: "Agrinnosol",
      description:
        "Agricultural innovation platform providing modern solutions for farmers and agricultural businesses. Features include crop management, market insights, and resource optimization.",
      image: "/farm.png",
      tags: ["Next.js", "React", "Database", "API"],
      category: "Software Development",
      link: "https://agrinnosol.com",
      github: null,
    },
    {
      title: "Ever Design Group",
      description:
        "Professional design agency website showcasing creative services, portfolio, and client testimonials. Built with modern web technologies for optimal performance.",
      image: "/everrdesign.png",
      tags: ["Web Design", "React", "UI/UX", "Animation"],
      category: "Software Development",
      link: "https://www.everdesigngroup.rw",
      github: null,
    },
    {
      title: "CEP University Worship Service - Day 3",
      description:
        "Professional event poster design for CEP University of Kigali worship service featuring bold typography, vibrant orange color scheme, and clean layout with speaker information.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/day%203-NGhBRKMSUXq4TZEl7kCQUYsLCsufsp.png",
      tags: ["Graphic Design", "Branding", "Typography", "Adobe Suite"],
      category: "Graphic Design",
      link: null,
      github: null,
    },
    {
      title: "CEP University Worship Service - Day 2",
      description:
        "Eye-catching worship service poster with dynamic red and brown tones, featuring professional photography and modern design elements for university event promotion.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/day2-cbYXKJ8MlF2fyZEdgU9nOLas2dge5L.png",
      tags: ["Graphic Design", "Event Design", "Visual Identity", "Adobe Suite"],
      category: "Graphic Design",
      link: null,
      github: null,
    },
    // {
    //   title: "E-Commerce Platform",
    //   description:
    //     "Full-featured online shopping platform with product management, shopping cart, payment integration, and order tracking. Built with scalability and security in mind.",
    //   image: "/modern-ecommerce-dashboard-with-products.jpg",
    //   tags: ["TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    //   category: "Software Development",
    //   link: null,
    //   github: "https://github.com",
    // },
    // {
    //   title: "Task Management System",
    //   description:
    //     "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking. Designed for remote teams and agile workflows.",
    //   image: "/task-management-kanban-dashboard.png",
    //   tags: ["React", "Firebase", "Real-time", "Cloud"],
    //   category: "System Analysis",
    //   link: null,
    //   github: "https://github.com",
    // },
  ]

  const categories = ["All", "Software Development", "Graphic Design", "System Analysis"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of my recent work showcasing software development, system design, and creative projects.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden transition-all duration-300 hover:shadow-xl border-2 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="relative h-48 overflow-hidden bg-secondary cursor-pointer"
                onClick={() => setSelectedImage({ src: project.image || "/placeholder.svg", title: project.title })}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Image
                  </Button>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                  {project.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.link && (
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
