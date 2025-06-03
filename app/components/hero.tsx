'use client'

import { Github, Linkedin, FileText, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="text-blue-600">Stella Han</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            I analyze, I build, I learn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileText size={20} />
              Resume
            </a>
            
            <a
              href="https://github.com/stellahan05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            
            <a
              href="https://linkedin.com/in/stellahan-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            
            <a
              href="mailto:stellahan0819@gmail.com"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Mail size={20} />
              Contact
            </a>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-600"
          >
            <span className="bg-white px-3 py-1 rounded-full">Python</span>
            <span className="bg-white px-3 py-1 rounded-full">C++</span>
            <span className="bg-white px-3 py-1 rounded-full">React</span>
            <span className="bg-white px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-white px-3 py-1 rounded-full">TypeScript</span>
            <span className="bg-white px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-white px-3 py-1 rounded-full">PostgreSQL</span>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}