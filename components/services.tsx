"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Palette, Layout, Server, Smartphone } from "lucide-react"

export default function Services() {
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

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Building scalable and efficient software applications using modern technologies and best practices. Specializing in web applications with React, Next.js, and Node.js. From concept to deployment, I deliver solutions that meet your business needs with clean, maintainable code.",
      features: ["Web Applications", "API Development", "Database Integration", "Code Optimization", "Testing & QA"],
    },
    {
      icon: Database,
      title: "System Analysis & Design",
      description:
        "Comprehensive system analysis and architectural design services with expertise in network architecture, database design, and process optimization. I help organizations optimize their IT infrastructure and design robust systems that scale efficiently.",
      features: [
        "Requirements Analysis",
        "System Architecture",
        "Database Design",
        "Process Optimization",
        "Documentation",
      ],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Creating visually stunning designs that communicate your brand message effectively. Proficient in Adobe Creative Suite including Photoshop, Illustrator, and InDesign. From logos to complete brand identities and event materials, I bring your vision to life with professional design work.",
      features: ["Brand Identity", "UI/UX Design", "Marketing Materials", "Digital Assets", "Print Design"],
    },
    {
      icon: Layout,
      title: "Web Design",
      description:
        "Designing responsive and user-friendly websites that provide exceptional user experiences across all devices. Focus on modern design principles, accessibility, and performance optimization.",
      features: ["Responsive Design", "User Interface", "Prototyping", "Wireframing", "Accessibility"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Developing robust server-side applications and APIs with Node.js, PHP, and database technologies including MongoDB and PostgreSQL. Expertise in authentication, cloud integration, and scalable architecture.",
      features: ["RESTful APIs", "Database Management", "Authentication", "Cloud Integration", "Performance"],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Solutions",
      description:
        "Creating mobile-optimized experiences that work seamlessly across all devices and screen sizes with progressive web app capabilities and cross-platform compatibility.",
      features: ["Progressive Web Apps", "Mobile Optimization", "Cross-Platform", "Performance", "Offline Support"],
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Services I Provide</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive digital solutions tailored to your needs. From development to design, I offer a full range of
            services to bring your ideas to life with professional quality and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className={`group transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
