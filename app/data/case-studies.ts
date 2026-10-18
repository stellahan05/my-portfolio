export interface CaseStudySection {
  id: string
  title: string
  paragraphs: string[]
  steps?: string[]
  diagram?: 'graph' | 'spectra'
}

export interface CaseStudy {
  slug: string
  projectId: string
  category: string
  title: string
  organisation: string
  role: string
  dates: string
  technologies: string[]
  introduction: string[]
  sections: CaseStudySection[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'graph-analytics', projectId: 'icbc-graph-analytics', category: 'Graph analytics',
    title: 'Making graph analytics practical for fraud detection',
    organisation: 'Insurance Corporation of British Columbia',
    role: 'Data Scientist Co-op, Strategic Analytics', dates: 'May–August 2026',
    technologies: ['Python', 'PySpark', 'Graph analytics', 'Machine learning'],
    introduction: ['I developed graph-based features to enhance an existing insurance fraud detection workflow, then redesigned an expensive random-walk generation process. The work combined predictive modelling with the engineering needed to make graph features practical at scale.'],
    sections: [
      { id: 'operational-context', title: 'The operational context', paragraphs: [
        'Fraud signals can emerge through relationships between claims and associated entities. Shared addresses, vehicles, phone numbers, and other connections provide context that may be difficult to capture by examining a claim independently.',
        'At ICBC, the broader workflow scored approximately 40,000 claims each week. The top 200 were referred to the Special Investigation Unit’s Detection Unit for further review.',
        'With limited investigation capacity, the objective was to improve prioritisation: surface more useful cases within the set investigators could realistically examine.',
      ] },
      { id: 'contribution', title: 'My contribution', paragraphs: [
        'I engineered graph-based features in PySpark, including random-walk and degree-based measures, and evaluated graph-based enhancements against the existing baseline.',
        'I also redesigned the random-walk generation workflow to reduce computational cost and presented the technical approach and business implications to SIU leadership. My contribution formed part of the wider fraud detection system.',
      ] },
      { id: 'graph-features', title: 'Why graph features?', paragraphs: [
        'Degree-based measures describe local connectivity. Random walks explore sequences of connections through the graph, providing a way to derive features from the surrounding network.',
        'These approaches added relational information to the modelling process. The challenge was generating that information efficiently enough to support experimentation and a recurring scoring workflow.',
      ] },
      { id: 'computation', title: 'Where the computation became expensive', paragraphs: [
        'The earlier implementation joined each walk’s current position to the edge table at every step. This produced candidate rows for neighbouring nodes, followed by a window operation to choose the next step.',
        'Each walk needed one transition, but the computation first materialised many possibilities. Highly connected nodes increased the size of those intermediate datasets, while repeated joins and window operations added substantial processing overhead.',
        'An earlier run took approximately 13 hours, making iteration slow.',
      ] },
      { id: 'representation', title: 'Changing the representation', diagram: 'graph', paragraphs: [
        'I precomputed neighbour lists in JSONL format and used random-index selection to choose the next node. This avoided repeatedly expanding every candidate neighbour into a separate row simply to select one.',
        'The broader workflow also used random undersampling to reduce the volume of majority-class observations while retaining fraud-labelled claims.',
        'Together, the workflow changes brought random-walk feature generation from approximately 13 hours to under 30 minutes. This was an operational before-and-after observation; it did not isolate the contribution of each change.',
        'Precomputed adjacency lists also introduced tradeoffs. They required storage and preparation, and needed to remain consistent with the graph being analysed. Sampling introduced a separate consideration: reducing the workload could affect the information available to the feature-generation process.',
      ] },
      { id: 'results', title: 'Model and business results', paragraphs: [
        'The graph-based enhancement achieved a 12% relative improvement in area under the cumulative gains curve (AUCG) over the baseline.',
        'The cumulative gains curve measures how many positive cases are captured as an increasing proportion of ranked cases is reviewed. It provided a way to assess ranking quality, relevant to a workflow with limited investigation capacity.',
        'The broader initiative was projected to deliver approximately $7 million in annual savings through improved fraud detection and investigation prioritisation. This was an estimate of potential business impact, rather than realised financial savings.',
        'I presented the approach and its implications to SIU leadership, connecting the technical work to the investigation workflow.',
      ] },
      { id: 'takeaways', title: 'What I took away', paragraphs: [
        'The largest engineering improvement came from reconsidering how the computation represented its intermediate state. Precomputed neighbour lists reduced the need to repeatedly enumerate candidate transitions.',
        'The project strengthened my ability to connect model development, distributed data processing, and operational constraints. A useful feature needed to offer predictive value while remaining practical to generate and maintain.',
      ] },
    ],
  },
  {
    slug: 'spectral-analysis', projectId: 'nrc-spectral-analysis', category: 'Scientific computing',
    title: 'From raw spectra to predictive models', organisation: 'National Research Council Canada',
    role: 'Machine Learning & Data Analysis Research Assistant', dates: 'May–August 2025',
    technologies: ['Python', 'Spectral preprocessing', 'PLS regression', 'Artificial neural networks', 'Extreme learning machines'],
    introduction: [
      'I built a modular preprocessing and modelling pipeline for laser-induced breakdown spectroscopy (LIBS), transforming raw crop spectra into inputs for predicting elemental concentrations.',
      'The work combined scientific data processing, exploratory analysis, and model evaluation across approximately 192 million spectral intensity measurements.',
    ],
    sections: [
      { id: 'research-problem', title: 'The research problem', paragraphs: [
        'LIBS records light emitted after a laser interacts with a sample. The resulting spectrum contains information about its elemental composition, but the raw measurements also contain background signal, baseline variation, and measurement variability.',
        'At the National Research Council Canada’s Aquatic and Crop Resource Development Research Centre, I worked on using these spectra to estimate elemental concentrations in crop samples.',
        'The dataset included approximately 15,600 laser shots, each measured across six spectrometers with 2,048 wavelength channels per instrument. ICP-MS reference measurements covered 27 elements and provided targets for the predictive modelling work.',
      ] },
      { id: 'contribution', title: 'My contribution', paragraphs: [
        'I built the preprocessing pipeline from scratch, implemented spectral analysis and outlier-detection methods, and evaluated partial least squares regression, artificial neural networks, and extreme learning machines.',
        'Working within a multidisciplinary research team, I translated raw instrument outputs into a reusable computational workflow that supported analysis and experimentation.',
      ] },
      { id: 'preprocessing', title: 'Making spectra comparable', diagram: 'spectra', paragraphs: [
        'The preprocessing pipeline addressed several sources of variation before model fitting.',
        'I organised it into explicit stages:',
      ], steps: [
        'Import raw spectra and background measurements into a consistent representation.',
        'Calibrate wavelengths to support interpretation of spectral features.',
        'Identify unusual shots using area-based comparisons against background measurements and channel-wise principal component analysis.',
        'Subtract background signal and average repeated spectra.',
        'Apply baseline and intensity corrections.',
        'Remove overlapping wavelength coverage between spectrometers.',
        'Export processed datasets for analysis and modelling.',
      ] },
      { id: 'modularity', title: 'A modular workflow', paragraphs: [
        'Keeping these stages modular made the workflow easier to inspect, debug, and revise as the research developed. It also separated processing decisions from model-training code.',
      ] },
      { id: 'spectroscopy', title: 'Connecting statistical patterns to spectroscopy', paragraphs: [
        'I used correlation heatmaps and element peak analysis to investigate relationships between spectral intensities and reference concentrations.',
        'I also compared spectral features with NIST reference lines, adding scientific context to the statistical analysis. This supported interpretation of the data and discussion with collaborators working on the underlying chemistry and measurement process.',
      ] },
      { id: 'models', title: 'Comparing predictive approaches', paragraphs: [
        'I evaluated partial least squares regression, artificial neural networks, and extreme learning machines.',
        'Partial least squares regression provided an approach suited to correlated, high-dimensional spectral inputs. Neural-network methods offered alternatives for modelling nonlinear relationships between intensities and concentrations.',
        'Selected prediction models achieved R² values above 0.85. Performance varied by target and modelling approach; this was not a uniform result across all 27 reference elements.',
      ] },
      { id: 'efficiency', title: 'Making experimentation faster', paragraphs: [
        'Processing efficiency affected how quickly I could investigate alternative approaches.',
        'Refactoring and modularising the preprocessing code reduced runtime by approximately 70% relative to the earlier implementation. This shortened the processing cycle and made further experimentation more practical.',
        'The resulting workflow connected raw measurements, spectral analysis, and predictive modelling in a reusable pipeline. I presented the work to the research team at the end of my placement.',
      ] },
      { id: 'takeaways', title: 'What I took away', paragraphs: [
        'This project showed me how strongly model performance depends on the preparation and interpretation of scientific data.',
        'Calibration, outlier handling, background subtraction, and baseline correction all shaped the information available to the models. Making those stages explicit helped me reason about their effects and communicate processing choices with collaborators.',
        'It also gave me experience developing software for exploratory research, where the scientific questions and computational requirements evolve together.',
      ] },
    ],
  },
]
