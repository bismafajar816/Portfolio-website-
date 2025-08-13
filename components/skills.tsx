"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Experienced" },
        { name: "C#", level: "Proficient" },
        { name: "SQL", level: "Proficient" },
        { name: "R", level: "Experienced" },
        { name: "C++", level: "Experienced" },
        { name: "JavaScript", level: "Familiar" },
        { name: "HTML/CSS", level: "Proficient" },
        { name: "LaTeX", level: "Experienced" },
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "Pandas", level: "Expert" },
        { name: "NumPy", level: "Expert" },
        { name: "Matplotlib", level: "Expert" },
        { name: "Seaborn", level: "Expert" },
        { name: "Scikit-learn", level: "Expert" },
        { name: "TensorFlow", level: "Experienced" },
        { name: "Keras", level: "Experienced" },
        { name: "HuggingFace", level: "Experienced" },
        { name: "NLTK", level: "Experienced" },
        { name: "OpenCV", level: "Experienced" },
        { name: "MERN Stack", level: "Familiar" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Power BI", level: "Expert" },
        { name: "Tableau", level: "Experienced" },
        { name: "Git/GitHub", level: "Proficient" },
        { name: "VS Code", level: "Expert" },
        { name: "Visual Studio", level: "Proficient" },
        { name: "SSMS", level: "Proficient" },
        { name: "Selenium", level: "Experienced" },
        { name: "BeautifulSoup", level: "Experienced" },
        { name: "Canva", level: "Experienced" },
        { name: "Vercel", level: "Familiar" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 border-green-200"
      case "Experienced":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Proficient":
        return "bg-cyan-100 text-cyan-800 border-cyan-200"
      case "Familiar":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Technical Skills
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className={`transition-all duration-700 hover:shadow-lg border-0 shadow-md ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-xl text-gray-900 text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center">
                        <Badge
                          variant="outline"
                          className={`${getLevelColor(skill.level)} transition-all duration-200 hover:scale-105 mb-1`}
                        >
                          {skill.name}
                        </Badge>
                        <span className="text-xs text-gray-500">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My technical expertise spans across data science, machine learning, and software development. I'm
              passionate about leveraging these skills to create innovative solutions that drive meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
