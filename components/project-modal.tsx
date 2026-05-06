"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Project } from "@/lib/projects"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = React.useState(0)

  React.useEffect(() => {
    setCurrentImage(0)
  }, [project])

  if (!project) return null

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            {/* Image Carousel */}
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-6 group">
              <Image
                src={project.images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                fill
                className="object-cover"
              />
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                  
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          idx === currentImage ? "bg-primary" : "bg-background/60"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-2">Description</h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* How It Was Built */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-2">How It Was Built</h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.howItWasBuilt}
              </p>
            </div>

            {/* How To Use */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-2">How To Use</h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.howToUse}
              </p>
            </div>

            {/* User Friendliness */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-2">User Friendliness</h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.userFriendliness}
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
              <ul className="space-y-2">
                {project.details.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-border">
              <Button asChild className="flex-1 gap-2">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
