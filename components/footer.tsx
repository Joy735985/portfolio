import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="size-4 text-destructive fill-destructive" /> by Rakibul Islam
          </p>
          
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} All rights reserved
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Joy735985"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com/in/rakibul-islam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
