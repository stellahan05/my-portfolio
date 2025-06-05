'use client'

import { Github, Linkedin, FileText, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20 flex flex-col xl:flex-row-reverse items-center xl:items-center justify-center gap-12">


        {/* RIGHT SIDE - PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 xl:order-1 mb-10 xl:mb-0"
          >
          <Image
            src="/images/bread.jpg"
            alt="Stella Han"
            width={400}
            height={400}
            className="rounded-full shadow-xl object-cover"
          />
        </motion.div>
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 xl:order-2 text-center xl:text-left max-w-xl"
          >
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold text-gray-900 mb-4">
            Stella Han
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-4">
            I am a{' '}
            <span className="text-blue-600 font-semibold">
              <Typewriter
                words={[
                  'data analyst',
                  'machine learning engineer',
                  'UBC CS student',
                  'problem solver',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-gray-700 mb-6">
            Sophomore at UBC passionate about building intelligent systems and data-driven solutions. I love turning complex problems into simple, beautiful tools.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center xl:justify-start gap-4 mb-6">
            <a
              href="https://github.com/stellahan05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 hover:border-black transition-all"
            >
              <Github size={20} className="text-black" />
            </a>
            <a
              href="https://linkedin.com/in/stellahan-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 hover:border-black transition-all"
            >
              <Linkedin size={20} className="text-black" />
            </a>
          </div>

          {/* Action Buttons (Resume & Contact) */}
          <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
              <FileText size={18} />
              Resume
            </a>

            <a
              href="mailto:stellahan0819@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-white text-gray-800 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
              <Mail size={18} />
              Contact
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
        
        
        
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <Image
            src="/images/bread.jpg"
            alt="Stella Han"
            width={160}
            height={160}
            className="rounded-full mb-6 shadow-lg"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="text-blue-400">Stella Han</span>
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
//         </motion.div>
//       </div>
//     </section>
//   )
// } */}