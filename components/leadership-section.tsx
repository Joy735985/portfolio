"use client"

import { Trophy, Users, Star, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    icon: Trophy,
    title: "Capstone Project — Grade A+",
    subtitle: "ServiceConnect | East West University",
    period: "2024 - 2025",
    description:
      "Led a 3-semester capstone project building ServiceConnect, a full-featured service marketplace platform. Achieved A+, A, and A+ grades across three consecutive semesters, demonstrating sustained technical execution and academic excellence.",
    tags: ["PHP", "MySQL", "Docker", "Full Stack"],
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  },
  {
    icon: Users,
    title: "Executive Member — Programming Club",
    subtitle: "East West University Programming Club",
    period: "2022 - 2023",
    description:
      "Served as Executive Member of the university Programming Club, responsible for managing and maintaining the club's official website. Contributed to building a stronger tech community on campus.",
    tags: ["Web Management", "Leadership", "Community"],
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  },
  {
    icon: Star,
    title: "General Member — Social Environmental Club",
    subtitle: "East West University Social Environmental Club",
    period: "2023 - 2024",
    description:
      "Active general member of the Social Environmental Club, participating in social awareness campaigns and environmental initiatives. Demonstrated commitment to community responsibility beyond academics.",
    tags: ["Social Impact", "Teamwork", "Community"],
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  },
  {
    icon: Award,
    title: "B.Sc. in Computer Science & Engineering",
    subtitle: "East West University, Dhaka",
    period: "2021 - 2026",
    description:
      "Successfully completed a Bachelor of Science in Computer Science & Engineering with a major in Software Engineering. Built a strong foundation across algorithms, databases, AI, software testing, and web programming.",
    tags: ["Software Engineering", "CSE", "Graduate"],
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Leadership & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic accomplishments, leadership roles, and extracurricular contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-xl border flex-shrink-0 w-fit ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="font-bold text-foreground text-lg">
                          {item.title}
                        </h3>
                        <span className="text-sm text-muted-foreground flex-shrink-0">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-primary text-sm font-medium mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-secondary/80 border border-border/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
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