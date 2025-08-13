"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
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

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Education</h2>

          <Card className="transition-all duration-700 hover:shadow-lg border-0 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-cyan-800" />
                </div>
                <div className="flex-1">
                  <CardTitle className="font-serif text-2xl text-gray-900 mb-2">
                    Bachelor's in Computer Science
                  </CardTitle>
                  <h3 className="text-xl font-semibold text-cyan-800 mb-4">
                    University of Engineering and Technology, Lahore
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                      <Calendar className="w-3 h-3" />
                      Dec 2022 – Present
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1 w-fit">
                      <MapPin className="w-3 h-3" />
                      Lahore, Pakistan
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Academic Performance</h4>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Cumulative GPA: 3.64 / 4.0</Badge>
                </div>
                <p className="text-gray-600">
                  Computer Science Department - Maintaining strong academic performance while actively engaging in
                  practical projects and internships.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Coursework</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Data Structures & Algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Machine Learning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Database Systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Software Engineering</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Focus Areas</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Data Science & Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Artificial Intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Web Development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Statistical Analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
