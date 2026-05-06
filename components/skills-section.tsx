"use client"

import { skills } from "@/lib/projects"
import { Code, Database, GitBranch, Layers } from "lucide-react"

const categoryIcons = {
  Frontend: Code,
  Backend: Database,
  Core: Layers,
  Tools: GitBranch,
}

const categoryColors = {
  Frontend: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  Backend: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Core: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Tools: "bg-chart-4/10 text-chart-4 border-chart-4/20",
}

export function SkillsSection() {
  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {categories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons]
            const colorClass = categoryColors[category as keyof typeof categoryColors]
            const categorySkills = skills.filter((s) => s.category === category)

            return (
              <div
                key={category}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg border ${colorClass}`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {categorySkills.map((skill) => (
                    <li
                      key={skill.name}
                      className="text-muted-foreground text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
