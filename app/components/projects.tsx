'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "SentiMarket",
    description: "SentiMarket is a machine learning dashboard that analyzes public sentiment towards stocks. It scrapes Reddit finance discussions and uses NLP and RandomForest models to predict stock movements. Built for traders and analysts.",
    tech: ['Python', 'Scikit-Learn', 'VADER', 'Yahoo Finance API', 'Docker'],
    github: "https://github.com/stellahan05/sentimarket",
    live: "https://sentimarket.streamlit.app",
    image: "/images/sentimarket.png"
  },
  {
    title: "CareBot",
    description: "CareBot is a healthcare chatbot that provides personalized health advice and resources. It uses NLP to understand user queries and offers relevant information. Designed to assist users in managing their health effectively.",
    tech: ['Next.js', 'React', 'Node.js', 'OpenAI API', 'Firebase'],
    github: "https://github.com/stellahan05/carebot",
    image: "/images/carebot.png"
  },
  {
    title: "StrideSync — HelloHacks 2024 1st Place Winner",
    description: "StrideSync generates playlists that match your running pace. It analyzes song BPMs and suggests the perfect tracks. Designed for runners who want to stay motivated without manually filtering songs.",
    tech: ['React', 'Node.js', 'Express', 'Spotify API'],
    github: "https://github.com/stellahan05/stride",
    image: "/images/stridesync.png"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here&apos;s a glimpse into some projects I&apos;ve been working on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ objectFit: 'cover' }}
                />
              )}

              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    {/* Code */}
                  </a>
                  
                  {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}