// Retained source descriptions for future review. Numerical claims are unverified
// for public case studies and are intentionally excluded from the homepage.
export const originalExperiences = [
  {
    title: "Data Scientist Co-op",
    company: "Insurance Corporation of British Columbia (ICBC)",
    period: "May - Aug 2026",
    description: [
      "Improved fraud detection performance by 12% by architecting and implementing a graph analytics model in PySpark, enhancing automated risk scoring across 40K+ weekly insurance claims.",
      "Reduced operational costs by $7M/ year by engineering scalable graph-based features that increased the efficiency of the Special Investigation Unit's fraud triage workflow.",
      "Drove adoption of graph analytics within ICBC's fraud detection pipeline by presenting the business impact to SIU leadership, supporting deployment of the enhanced risk scoring model."
    ],
    technologies: ["PySpark", "scikit-learn", "pandas", "matplotlib"]
  },
  {
    title: "Data Analyst Co-op",
    company: "Insurance Corporation of British Columbia (ICBC)",
    period: "Jan - Apr 2026",
    description: [
      "Accelerated reporting by engineering Spark SQL pipelines that transformed 100M+ financial and operational records into analysis-ready datasets.",
      "Enabled data-driven decisions for 50+ business stakeholders by developing Tableau dashboards for automated KPI reporting and self-service analytics.",
      "Reduced manual reporting effort by automating recurring analyses through reusable SQL workflows for reporting."
    ],
    technologies: ["Spark SQL", "Tableau"]
  },
  {
    title: "Machine Learning Engineer / Data Analyst",
    company: "National Research Council Canada",
    period: "May - Aug 2025",
    description: [
      "Engineered a scalable ML pipeline to preprocess and analyze 190M+ structured & unstructured data points.",
      "Trained and optimized ML models (PLSR, ANN, Extreme Learning Machine), achieving R² > 0.85.",
      "Improved preprocessing code efficiency and modularity, reducing runtime by 70% and enabling scalable analysis.",
      "Collaborated with cross-functional teams for integration of ML models into real-time decision-support device."
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

interface Experience {
  title: string
  company: string
  period: string
  summary: string
  relatedProjectId?: string
  relatedProjectLabel?: string
}

export const experiences: Experience[] = originalExperiences.map((experience, index) => ({
  title: experience.title,
  company: experience.company,
  period: experience.period,
  ...[
    {
      summary: 'Engineered graph-based features for an existing insurance fraud detection pipeline.',
      relatedProjectId: 'icbc-graph-analytics',
      relatedProjectLabel: 'Graph analytics',
    },
    {
      summary: 'Built Spark SQL pipelines and Tableau dashboards to support financial and operational reporting.',
    },
    {
      summary: 'Built modular spectral preprocessing workflows and evaluated predictive models for crop elemental analysis.',
      relatedProjectId: 'nrc-spectral-analysis',
      relatedProjectLabel: 'Spectral analysis',
    },
    {
      summary: 'Developing trading models and financial data pipelines, with research and backtesting to evaluate strategies.',
    },
  ][index],
}))
