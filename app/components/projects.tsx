import Image from 'next/image'
import GraphExplorer from './graph-explorer'
import { additionalProjects, featuredProjects, type WorkProject } from '../data/projects'

function ProjectLinks({ project }: { project: WorkProject }) {
  const links = [
    { url: project.caseStudyUrl, label: `Read the ${project.title} case study` },
    { url: project.githubUrl, label: `${project.title} on GitHub` },
    { url: project.demoUrl, label: `Open the ${project.title} demo` },
  ].filter((link) => link.url)

  if (!links.length) return null

  return (
    <div className="project-links">
      {links.map(({ url, label }) => (
        <a key={url} href={url} target="_blank" rel="noopener noreferrer">
          {label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}

function ProjectVisual({ visual }: { visual: WorkProject['visual'] }) {
  if (visual === 'network') return <GraphExplorer />
  if (visual === 'spectra') {
    return (
      <figure className="project-figure spectra-figure">
        <div className="spectra-plots">
          <a href="/images/libs-raw-sample-3.png" target="_blank" rel="noopener noreferrer" aria-label="View the full-size raw LIBS spectrum for forage sample 3">
            <Image src="/images/libs-raw-sample-3.png" width={1677} height={504} sizes="(max-width: 900px) 100vw, 600px" alt="Raw LIBS spectrum for forage sample 3, showing intensity in arbitrary units against wavelength in nanometres." />
          </a>
          <a href="/images/libs-preprocessed-sample-3.png" target="_blank" rel="noopener noreferrer" aria-label="View the full-size preprocessed LIBS spectrum for forage sample 3">
            <Image src="/images/libs-preprocessed-sample-3.png" width={1669} height={504} sizes="(max-width: 900px) 100vw, 600px" alt="Preprocessed LIBS spectrum for the same forage sample, with a different intensity scale and the wavelength axis in nanometres." />
          </a>
        </div>
        <figcaption>Raw and preprocessed LIBS spectra from forage sample 3. Intensity scales differ.</figcaption>
      </figure>
    )
  }
  return null
}

export default function Projects() {
  return (
    <section id="projects" className="content-section selected-work" aria-labelledby="work-heading">
      <div className="page-container">
        <div className="section-intro">
          <h2 id="work-heading" className="section-heading">Selected work</h2>
          <p className="section-description">Graph analytics, scientific computing, and software built around a practical problem.</p>
        </div>
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <article key={project.id} id={project.id} className={`work-feature ${index === 0 ? 'work-feature-lead' : ''}`} aria-labelledby={`${project.id}-title`}>
              <div className="feature-copy">
                <p className="project-metadata">{project.context}</p>
                <p className="project-category">{project.category}{project.period && <> · {project.period}</>}</p>
                <h3 id={`${project.id}-title`}>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                {project.outcome && <p className="project-outcome">{project.outcome}</p>}
                <p className="project-technologies">{project.technologies.join(' · ')}</p>
                <ProjectLinks project={project} />
              </div>
              <ProjectVisual visual={project.visual} />
            </article>
          ))}
        </div>
        <div className="additional-work" aria-labelledby="additional-heading">
          <h3 id="additional-heading">Additional projects</h3>
          {additionalProjects.map((project) => (
            <article key={project.id} id={project.id} className="additional-project" aria-labelledby={`${project.id}-title`}>
              <details className="project-disclosure">
                <summary>
                  <span id={`${project.id}-title`} className="additional-project-title">{project.title}</span>
                  <span className="additional-project-teaser">{project.summary}</span>
                  <span className="disclosure-indicator" aria-hidden="true" />
                </summary>
                <div className="additional-project-panel">
                  <div className="additional-project-detail">
                    <h4 className="sr-only">{project.title} details</h4>
                    <p className="project-metadata">{project.context} · {project.category}</p>
                    {project.details && <p className="project-summary">{project.details}</p>}
                    <p className="project-technologies">{project.id === 'stridesync' && 'Hackathon application: '}{project.technologies.join(' · ')}</p>
                    <ProjectLinks project={project} />
                  </div>
                  {project.image && (
                    <figure className="additional-project-image">
                      <Image src={project.image.src} width={project.image.width} height={project.image.height} sizes="(max-width: 900px) 100vw, 700px" alt={project.image.alt} />
                      <figcaption>{project.image.caption}</figcaption>
                    </figure>
                  )}
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
