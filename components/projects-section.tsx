"use client"

import * as React from "react"
import { projects, type Project } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [modalOpen, setModalOpen] = React.useState(false)

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I have built, ranging from service marketplaces to IoT dashboards
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
