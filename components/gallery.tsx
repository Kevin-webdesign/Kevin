"use client"

import { useEffect, useRef, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Image from "next/image"

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string } | null>(null)
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

  const galleryItems = [
    {
      title: "CEP University Worship - Day 3",
      description: "Bold orange-themed worship service poster with modern typography and professional layout",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/day%203-NGhBRKMSUXq4TZEl7kCQUYsLCsufsp.png",
      category: "Event Design",
    },
    {
      title: "CEP University Worship - Day 2",
      description: "Dynamic red and brown worship poster featuring professional photography and modern design",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/day2-cbYXKJ8MlF2fyZEdgU9nOLas2dge5L.png",
      category: "Event Design",
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo, color palette, and brand guidelines",
      image: "/modern-brand-identity-design-with-logo-variations.jpg",
      category: "Branding",
    },
    {
      title: "Social Media Graphics",
      description: "Engaging social media post designs for various platforms with consistent branding",
      image: "/colorful-social-media-graphics-templates.jpg",
      category: "Digital Design",
    },
    {
      title: "Marketing Flyer",
      description: "Professional marketing materials for business promotion and event advertising",
      image: "/professional-business-marketing-flyer-design.jpg",
      category: "Print Design",
    },
    {
      title: "UI/UX Design Mockup",
      description: "Modern mobile app interface design with clean layouts and intuitive navigation",
      image: "/modern-mobile-app-ui-design-mockup.jpg",
      category: "UI/UX",
    },
  ]

  return (
    <section id="gallery" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Graphic Design Gallery</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A showcase of my creative work in graphic design, branding, and visual communication. Each piece reflects
            attention to detail and professional quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-lg border-2 bg-card transition-all duration-300 hover:shadow-xl cursor-pointer ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64 overflow-hidden bg-secondary">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4 mr-2" />
                      View Full
                    </Button>
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedImage?.title}</DialogTitle>
            <p className="text-muted-foreground">{selectedImage?.description}</p>
          </DialogHeader>
          {selectedImage && (
            <div className="relative w-full h-[75vh]">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
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
