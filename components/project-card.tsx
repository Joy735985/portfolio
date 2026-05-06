"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  onViewDetails: () => void
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const [currentImage, setCurrentImage] = React.useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group">
      {/* Image Carousel */}
      <div className="relative aspect-video bg-muted">
        <Image
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          fill
          className="object-cover"
        />
        
        {/* Navigation Arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 shadow-md"
              aria-label="Next image"
            >
              <ChevronRight className="size-4" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentImage ? "bg-primary" : "bg-background/60"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button onClick={onViewDetails} size="sm" className="flex-1">
            View Details
          </Button>
          <Button asChild variant="outline" size="icon" className="shrink-0">
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}