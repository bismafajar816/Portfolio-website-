"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-cyan-50 pt-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6">Bisma Fajar</h1>
          <h2 className="text-xl md:text-2xl text-cyan-800 font-semibold mb-8">Data Science Software Engineer</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about transforming data into actionable insights. I bridge the gap between data and
            decision-making through machine learning, statistical analysis, and innovative software solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-cyan-800 hover:bg-cyan-900 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={scrollToAbout}
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              onClick={() => window.open("mailto:bismafajarbismafajarbismafajar816@gmail.com")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-16">
            <a
              href="mailto:bismafajar816@gmail.com"
              className="text-gray-600 hover:text-cyan-800 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/bismafajar816" className="text-gray-600 hover:text-cyan-800 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/bisma-fajar-b37397267/" className="text-gray-600 hover:text-cyan-800 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="animate-bounce">
          <ChevronDown
            className="w-8 h-8 text-cyan-800 mx-auto cursor-pointer hover:text-cyan-900 transition-colors duration-300"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  )
}
