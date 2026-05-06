"use client"

import Image from "next/image"
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16 pb-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* About Text */}
          <p className="text-primary font-medium mb-2">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Rakibul Islam
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            A CSE student who spends way too much time thinking about how software works and then actually trying to build it. I am still learning, still making mistakes, and still showing up every day because that is the only way I know how to grow. I do not have all the answers yet but I have the curiosity to find them and the patience to keep going when things get hard. If you are looking for someone passionate, genuinely hungry, and always improving then you are in the right place.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://github.com/Joy735985"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakibul-islam-3192252bb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
          </div>

          {/* Profile Image */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mb-8">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20">
              <Image
                src="/profile.jpg"
                alt="Rakibul Islam"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="/resume.pdf" download>
                <Download className="size-4" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#contact">
                <Mail className="size-4" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <a
            href="#skills"
            className="animate-bounce p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Scroll to skills"
          >
            <ArrowDown className="size-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
