"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated Data Science Software Engineer with a passion for turning complex data into meaningful
                insights. Currently pursuing my Bachelor's in Computer Science at the University of Engineering and
                Technology, Lahore, I maintain a strong academic record with a 3.64 GPA.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                My expertise spans across machine learning, data analysis, and full-stack development. I've had the
                privilege of working with organizations like Fluxxion and Bytewise, where I've applied my skills in
                real-world scenarios, from building cardiac disease analysis dashboards to developing AI-powered
                applications.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in the power of data to drive decision-making and am committed to creating solutions that make
                a positive impact. Whether it's developing machine learning models for water quality assessment or
                building comprehensive e-commerce platforms, I approach each project with curiosity and dedication.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-800 rounded-full mr-4"></div>
                  <span className="text-gray-700">Based in Lahore, Pakistan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Final Year Computer Science Student</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-800 rounded-full mr-4"></div>
                  <span className="text-gray-700">3.64/4.0 GPA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Microsoft Certified Azure Data Scientist Associate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
