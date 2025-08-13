"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"

export function Certifications() {
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

  const certifications = [
    {
      title: "Microsoft Certified: Azure Data Scientist Associate",
      provider: "Microsoft",
      category: "Cloud & Data Science",
    },
    {
      title: "Microsoft R Programming Essentials and Tools",
      provider: "Microsoft",
      category: "Programming",
    },
    {
      title: "Python for Data Science, AI and Development",
      provider: "IBM",
      category: "Data Science",
    },
    {
      title: "Data Mining and Business Intelligence",
      provider: "NAVTTC (UET Lahore)",
      category: "Analytics",
    },
    {
      title: "Communication Strategies for a Virtual Age",
      provider: "Professional Development",
      category: "Soft Skills",
    },
    {
      title: "SQL Programming",
      provider: "Database Management",
      category: "Database",
    },
    {
      title: "Programming Fundamentals",
      provider: "Computer Science",
      category: "Programming",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cloud & Data Science":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Programming":
        return "bg-green-100 text-green-800 border-green-200"
      case "Data Science":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Analytics":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Database":
        return "bg-cyan-100 text-cyan-800 border-cyan-200"
      case "Soft Skills":
        return "bg-pink-100 text-pink-800 border-pink-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Certifications</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`group transition-all duration-700 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <Award className="w-5 h-5 text-indigo-600" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardTitle className="font-serif text-lg text-gray-900 leading-tight group-hover:text-cyan-800 transition-colors duration-300">
                    {cert.title}
                  </CardTitle>

                  <p className="text-sm text-gray-600 font-medium">{cert.provider}</p>

                  <Badge variant="outline" className={`${getCategoryColor(cert.category)} text-xs`}>
                    {cert.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Continuous learning is at the heart of my professional development. These certifications represent my
              commitment to staying current with industry standards and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
