"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
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

  const projects = [
    {
      title: "AQUA INSIGHTS",
      year: "2025",
      description:
        "Developed a machine learning model to assess water purity levels based on chemical properties and environmental data. Conducted data cleaning, feature selection, and trained classification models to predict contamination.",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      highlights:
        "Visualized findings through interactive dashboards to support decision-making for clean water initiatives.",
      githubUrl: "https://github.com/bismafajar816/Aqua-Insights-",
      demoUrl: "https://aqua-insights.vercel.app/",
    },
    {
      title: "SEHAT ONLINE",
      year: "2025",
      description:
        "Developed an AI-powered medical appointment booking system with integrated chatbot assistant. Used natural language processing to handle patient queries and automate scheduling. (This project was a group project and under improvement phase currently its backend not available on web.)",
      technologies: ["Python", "AI", "NLP"],
      highlights: "Streamlined healthcare access through intelligent automation and conversational interfaces.",
      githubUrl: "https://github.com/FatimaMano/SehatOnlineFrontend/tree/Production",
      demoUrl: "https://sehat-online-frontend.vercel.app/",
    },
    {
      title: "MOODSNAP",
      year: "2024",
      description:
        "Built an AI-based photo gallery manager that organizes images based on facial emotion recognition. Integrated emotion-detection algorithms to categorize and tag photos by user mood.",
      technologies: ["Python", "AI", "Image Processing"],
      highlights: "Innovative approach to photo organization using computer vision and emotion detection.",
      githubUrl: "https://github.com/leenazaheer734/MoodSnap",
      demoUrl: "https://drive.google.com/file/d/1YGeR2VAcuSMpikYF-UIMuGQRbnowNqrJ/view?usp=drivesdk",
    },
    {
      title: "Shop Inventory for a local shop",
      year: "2025",
      description:
        "Created a shop inventory management system for a local shop using the MERN stack. This was my recent real world project. (Initial version deployed)",
      technologies: ["MERN Stack"],
      highlights: "Complete admin dashboard and billing system for a local brand.",
      githubUrl: "https://github.com/bismafajar816/Store_Management_System_with_UI",
      demoUrl: "https://v0-simple-mern-shop-system.vercel.app/",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group transition-all duration-700 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-serif text-2xl text-gray-900 mb-2 group-hover:text-cyan-800 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {project.year}
                      </Badge>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-cyan-50 text-cyan-800 hover:bg-cyan-100 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm text-indigo-600 font-medium">{project.highlights}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
