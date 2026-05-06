"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you would like to discuss a project or just say hi, I am always down to chat
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="grid gap-6">
              {/* Email */}
              <a
                href="mailto:rakibulislamjoy006@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">rakibulislamjoy006@gmail.com</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Joy735985"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Github className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-foreground">github.com/Joy735985</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rakibul-islam-3192252bb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Linkedin className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground">linkedin.com/in/rakibul-islam-3192252bb</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
