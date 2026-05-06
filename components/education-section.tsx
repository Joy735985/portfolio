"use client"

import * as React from "react"
import { GraduationCap, MapPin, BookOpen, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const educationData = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science & Engineering",
    major: "Major: Software Engineering",
    institution: "East West University",
    location: "Aftabnagar, Dhaka, Bangladesh",
    period: "2021 - 2026",
    gpa: null,
    description: "Focused on software development, algorithms, and web technologies. Building a strong foundation in computer science fundamentals while gaining practical experience through hands on projects and coursework.",
    coursework: [
      "Structured Programming",
      "Object Oriented Programming",
      "Discrete Mathematics",
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Advanced Database Systems",
      "Operating Systems",
      "Digital Logic Design",
      "Computer Architecture",
      "Computer Networks",
      "Data Communication",
      "Information System Analysis & Design",
      "Software Engineering",
      "Software Testing & Quality Assurance",
      "Artificial Intelligence",
      "Web Programming",
      "Computer Aided Engineering Drawing",
      "Capstone Project",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    major: "Science",
    institution: "Dhaka Imperial College",
    location: "Aftabnagar, Dhaka, Bangladesh",
    period: "2019",
    gpa: "GPA: 4.00 out of 5.00",
    description: "Completed higher secondary education with a focus on science subjects including Physics, Chemistry, and Mathematics.",
    coursework: [],
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    major: "Science",
    institution: "Tejgaon Adarsha School & College",
    location: "Dhaka, Bangladesh",
    period: "2017",
    gpa: "GPA: 4.77 out of 5.00",
    description: "Completed secondary education with excellent academic performance in science stream.",
    coursework: [],
  },
]

export function EducationSection() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const touchStartX = React.useRef<number | null>(null)
  const touchEndX = React.useRef<number | null>(null)
  const SWIPE_THRESHOLD = 50

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? educationData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === educationData.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) >= SWIPE_THRESHOLD) {
      diff > 0 ? handleNext() : handlePrev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  const activeEducation = educationData[activeIndex]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Card */}
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="transition-all duration-500 ease-in-out"
              key={activeEducation.id}
            >
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 border-b border-border">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Degree Info */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {activeEducation.degree}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {activeEducation.major}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {activeEducation.institution}, {activeEducation.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {activeEducation.period}
                        </span>
                      </div>

                      {activeEducation.gpa && (
                        <div className="mt-3">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {activeEducation.gpa}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 sm:p-8 border-b border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {activeEducation.description}
                  </p>
                </div>

                {/* Coursework - only for BSc */}
                {activeEducation.coursework.length > 0 && (
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Relevant Coursework</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeEducation.coursework.map((course) => (
                        <Badge
                          key={course}
                          variant="secondary"
                          className="bg-secondary/80 hover:bg-secondary text-secondary-foreground border border-border/50 transition-colors"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Carousel Navigation (dots + arrows) */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
              aria-label="Previous education"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {educationData.map((edu, index) => (
                <button
                  key={edu.id}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-3 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-primary w-8"
                      : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to ${edu.degree}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
              aria-label="Next education"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Page Indicator */}
          <div className="mt-2 flex items-center justify-center text-sm text-muted-foreground">
            <span>{activeIndex + 1} / {educationData.length}</span>
          </div>
        </div>
      </div>
    </section>
  )
}