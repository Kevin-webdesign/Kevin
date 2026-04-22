"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kevinuzamurera@gmail.com",
      href: "mailto:kevinuzamurera@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 791 813 688",
      href: "tel:+250791813688",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Gasabo, Rwanda",
      href: null,
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
            together. Available for freelance projects and full-time opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={info.label}
                  className={`card-gradient-border transition-all duration-300 hover:scale-105 ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-muted-foreground mb-1">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium hover:text-primary transition-colors break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Form */}
          <Card
            className={`card-gradient-border lg:col-span-2 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={6} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
