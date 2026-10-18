export interface WorkProject {
  id: string
  title: string
  context: string
  category: string
  period?: string
  summary: string
  outcome?: string
  technologies: string[]
  caseStudyUrl?: string
  githubUrl?: string
  demoUrl?: string
  details?: string
  image?: { src: string; width: number; height: number; alt: string; caption: string }
  visual?: 'network' | 'spectra'
}

export const originalProjects = [
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

export const featuredProjects: WorkProject[] = [
  {
    id: 'icbc-graph-analytics',
    title: 'Graph analytics for fraud detection',
    context: 'ICBC · Data Scientist Co-op',
    category: 'Graph analytics',
    period: 'May–Aug 2026',
    summary: 'I engineered graph-based features in PySpark within an existing insurance fraud detection pipeline, using random walks and graph connectivity metrics to describe relationships across the network.',
    outcome: 'Replaced repeated per-step joins with precomputed neighbour information to improve feature-generation efficiency.',
    technologies: ['PySpark', 'Random walks', 'Graph connectivity'],
    visual: 'network',
    caseStudyUrl: '/work/graph-analytics',
  },
  {
    id: 'nrc-spectral-analysis',
    title: 'From raw spectra to predictive models',
    context: 'National Research Council Canada · Machine Learning Engineer / Data Analyst',
    category: 'Scientific computing',
    period: 'May–Aug 2025',
    summary: 'I built a modular pipeline for laser-induced breakdown spectroscopy (LIBS), analysing crop spectra to estimate elemental composition. The preprocessing stages covered calibration, outlier detection, background subtraction, baseline correction, and spectral processing.',
    outcome: 'Evaluated PLS regression, neural networks, and extreme learning machines on the processed spectra.',
    technologies: ['Python', 'scikit-learn', 'LIBS', 'PLS regression'],
    visual: 'spectra',
    caseStudyUrl: '/work/spectral-analysis',
  },

]

export const additionalProjects: WorkProject[] = [
  {
    id: 'stridesync',
    title: 'StrideSync',
    context: 'HelloHacks 2024 · First place',
    category: 'Product development',
    summary: 'A playlist generator that matches music to running pace, using song BPM to help runners find tracks that fit their rhythm.',
    technologies: ['React', 'Node.js', 'Express', 'Spotify API'],
    githubUrl: originalProjects[2].github,
    details: 'The application analyses song BPM to generate playlists that match a running pace. The mobile screens below are a design mockup for the app.',
    image: { src: originalProjects[2].image, width: 1920, height: 1080, alt: 'StrideSync design mockup showing playlist, running activity, and genre selection screens.', caption: 'StrideSync app · design mockup' },
  },
  {
    id: 'sentimarket',
    details: 'The dashboard uses Reddit finance discussions and Yahoo Finance data, with VADER sentiment scoring and RandomForest models for stock analysis.',
    image: { src: originalProjects[0].image, width: 2678, height: 1653, alt: 'SentiMarket stock sentiment dashboard.', caption: 'SentiMarket · dashboard' },
    title: 'SentiMarket',
    context: 'Personal project',
    category: 'Machine learning',
    summary: 'A stock sentiment dashboard that analyses Reddit finance discussions using NLP and RandomForest models.',
    technologies: originalProjects[0].tech,
    githubUrl: originalProjects[0].github,
    demoUrl: originalProjects[0].live,
  },
  {
    id: 'carebot',
    details: 'A conversational interface for health-related questions and resources, built with Next.js, React, Node.js, the OpenAI API, and Firebase.',
    image: { src: originalProjects[1].image, width: 2322, height: 1654, alt: 'CareBot chatbot interface.', caption: 'CareBot · interface' },
    title: 'CareBot',
    context: 'Personal project',
    category: 'Conversational software',
    summary: 'A healthcare chatbot that uses NLP to interpret questions and provide health information and resources.',
    technologies: originalProjects[1].tech,
    githubUrl: originalProjects[1].github,
  },
]
