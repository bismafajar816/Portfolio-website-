"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      company: "FLUXXION",
      role: "Data Analysis Intern",
      duration: "May 2025 – Jul 2025",
      location: "Remote",
      achievements: [
        "Conducted data cleaning, transformation, and visualization using Power BI and Python",
        "Collaborated on building dashboards for cardiac disease analysis and presented insights",
        "Developed SQL queries for extracting key business metrics and patterns",
      ],
    },
    {
      company: "BYTEWISE",
      role: "Data Science Fellow",
      duration: "June 2024 – Aug 2024",
      location: "Remote",
      achievements: [
        "Gained hands-on experience in machine learning, data preprocessing, and exploratory data analysis using Python",
        "Worked on real-world datasets and applied supervised and unsupervised ML models",
        "Delivered a capstone project involving water quality index and model evaluation",
      ],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`transition-all duration-700 hover:shadow-lg border-0 shadow-md ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="font-serif text-2xl text-gray-900 mb-2">{exp.role}</CardTitle>
                      <h3 className="text-xl font-semibold text-cyan-800 mb-2">{exp.company}</h3>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 w-fit">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
