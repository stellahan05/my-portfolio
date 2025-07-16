'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const experiences = [
  {
    title: "Machine Learning Engineer / Data Analyst",
    company: "National Research Council Canada",
    period: "May 2025 - Present",
    description: [
      "Conducting exploratory data analysis and feature engineering on LIBS spectra and MidIR data from agricultural samples.",
      "Applying machine learning models for material classification and compositional predictions to support high-throughput spectroscopy pipelines.",
      "Building dashboards and code pipelines to assist experimental scientists with data-driven insights."
    ],
    technologies: ["Python", "scikit-learn", "pandas", "matplotlib"]
  },
  {
    title: "Quantitative Developer",
    company: "UBC Quantico Research",
    period: "Jan 2025 - Present",
    description: [
      "Developing and optimizing algorithmic trading models using Python and TensorFlow, incorporating supervised learning, time series forecasting, and deep learning techniques like LSTMs to predict market trends.",
      "Conducting data-driven research to enhance investment strategies by applying statistical analysis, feature engineering, and model tuning with tools like scikit-learn, NumPy, and pandas.",
      "Automating data pipelines for large-scale financial data analysis and validating model performance through backtesting, focusing on performance metrics such as Sharpe ratio and drawdown."
    ],
    technologies: ["Python", "TensorFlow", "NumPy", "pandas"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating, building, and learning along the way.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto flex">
        <div className="relative w-8">
          {/* Static vertical line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-blue-100 transform -translate-x-1/2" />

          {/* Animated fill line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 w-1 bg-blue-500 origin-top transform -translate-x-1/2"
          />
          </div>

          {/* Experience cards + dots */}
          <div className="flex-1 space-y-16 pl-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Animated dot on timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1
                  }}
                  className="absolute left-[-3rem] top-2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"                />

                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
