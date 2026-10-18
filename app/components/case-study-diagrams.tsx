const earlier = ['Current walk positions', 'Edge-table join', 'Candidate-neighbour expansion', 'Window-based selection', 'Next positions']
const revised = ['Precomputed neighbour lists', 'Random-index selection', 'Next positions']
const pipeline = ['Import and calibration', 'Outlier detection', 'Background subtraction and averaging', 'Baseline / intensity correction', 'Overlap removal and export', 'Modelling']

function Flow({ steps, label, accent = false }: { steps: string[]; label: string; accent?: boolean }) {
  const height = steps.length * 76
  return (
    <svg viewBox={`0 0 320 ${height}`} role="img" aria-label={`${label}: ${steps.join(' → ')}`} className={accent ? 'computation-flow flow-revised' : 'computation-flow'}>
      {steps.map((step, index) => {
        const words = step === 'Candidate-neighbour expansion' ? ['Candidate-neighbour', 'expansion'] : step === 'Background subtraction and averaging' ? ['Background subtraction', 'and averaging'] : [step]
        return (
          <g key={step}>
            <rect x="1" y={index * 76 + 1} width="318" height="54" rx="2" />
            <text x="160" y={index * 76 + (words.length === 1 ? 33 : 23)} textAnchor="middle">
              {words.map((word, line) => <tspan key={word} x="160" dy={line ? 19 : 0}>{word}</tspan>)}
            </text>
            {index < steps.length - 1 && <path d={`M160 ${index * 76 + 56} v15 m-4 -4 l4 4 4 -4`} />}
          </g>
        )
      })}
    </svg>
  )
}

export default function CaseStudyDiagram({ kind }: { kind: 'graph' | 'spectra' }) {
  return kind === 'graph' ? (
    <figure className="article-diagram">
      <div className="computation-comparison">
        <div><h3>Earlier approach</h3><Flow steps={earlier} label="Earlier approach" /></div>
        <div><h3>Revised approach</h3><Flow steps={revised} label="Revised approach" accent /></div>
      </div>
      <figcaption>Conceptual illustration of the computation.</figcaption>
    </figure>
  ) : (
    <figure className="article-diagram pipeline-diagram">
      <Flow steps={pipeline} label="Spectral processing overview" accent />
      <figcaption>Processing overview: from instrument outputs to modelling inputs.</figcaption>
    </figure>
  )
}
