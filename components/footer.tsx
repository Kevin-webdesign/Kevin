import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Kevin<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Software Developer, System Analyst, and Graphic Designer based in Kigali, Rwanda. Creating digital
              solutions that make a difference through innovative technology and creative design.
            </p>
            <p className="text-xs text-muted-foreground">Available for freelance projects and collaborations.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-2 mb-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <a href="mailto:kevinuzamurera@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">
              <p className="font-medium mb-1">Languages:</p>
              <p>English, French, Kinyarwanda, Swahili</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Uzamurera Kevin. All rights reserved.</p>
          <p className="mt-1 text-xs">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
