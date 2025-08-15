"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-cyan-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Let's Connect</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Ready to collaborate?</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations in
                data science and software engineering. Whether you're looking for a dedicated team member or want to
                explore how data can drive your business forward, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-cyan-100 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-cyan-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">bismafajar816@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-serif text-xl text-gray-900">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-cyan-800 hover:bg-cyan-900 text-white transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("mailto:bismafajar816@gmail.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 hover:bg-gray-50 transition-all duration-300 bg-transparent"
                    onClick={() => window.open("https://github.com/bismafajar816")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 hover:bg-gray-50 transition-all duration-300 bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/bisma-fajar-b37397267/")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>

                <div className="pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-600">
                    Open to opportunities in data science, machine learning, and software engineering
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500">© 2025 Bisma Fajar. Crafted with passion for data and innovation.</p>
      </div>
    </section>
  )
}
