"use client"

import { Brain, Shield, Code2, Cloud } from "lucide-react"

const researchAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Interested in intelligent systems, pattern recognition, and how machines can learn from data to solve real-world problems. Eager to explore deep learning, neural networks, and AI-driven decision making.",
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Fascinated by the challenge of securing digital systems against evolving threats. Keen to study network security, ethical hacking, cryptography, and building resilient software architectures.",
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Passionate about building scalable, maintainable, and high-quality software. Interested in software architecture, design patterns, testing methodologies, and agile development practices.",
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Curious about distributed systems, cloud-native architectures, and how modern infrastructure enables scalable applications. Interested in exploring platforms like AWS, GCP, and serverless technologies.",
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research Interests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Areas I am actively exploring and hope to pursue at the graduate level
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {researchAreas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl border flex-shrink-0 ${area.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}