export const projects = [
    {
      title: 'SentiMarket',
      slug: 'sentimarket',
      shortDescription: 'Stock sentiment analysis tool using Reddit and Yahoo Finance APIs.',
      fullDescription: 'SentiMarket is a machine learning project that analyzes public sentiment towards stocks. It scrapes Reddit finance discussions and uses NLP and RandomForest models to predict stock movements. Built for traders and analysts.',
      features: [
        'Real-time data scraping from Reddit',
        'Sentiment scoring with VADER',
        'Stock price prediction with RandomForest',
        'Docker containerization for deployment'
      ],
      technologies: ['Python', 'Scikit-Learn', 'VADER', 'Yahoo Finance API', 'Docker'],
      imageUrl: '/images/sentimarket.png',
      githubUrl: 'https://github.com/stellahan05/sentimarket',
      liveDemoUrl: 'https://sentimarket.streamlit.app',
    },
    {
      title: 'StrideSync',
      slug: 'stridesync',
      shortDescription: 'A BPM-based playlist generator built during a 24-hour hackathon.',
      fullDescription: 'StrideSync generates playlists that match your running pace. It analyzes song BPMs and suggests the perfect tracks. Designed for runners who want to stay motivated without manually filtering songs.',
      features: [
        'BPM detection and matching',
        'Real-time user feedback',
        'Agile development under time constraint',
      ],
      technologies: ['React', 'Node.js', 'Express', 'Spotify API'],
      imageUrl: '/images/stridesync.png',
      githubUrl: 'https://github.com/stellahan05/stride',
    },
  ];
  