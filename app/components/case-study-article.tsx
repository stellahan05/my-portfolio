import Link from 'next/link'
import type { CaseStudy } from '../data/case-studies'
import CaseStudyDiagram from './case-study-diagrams'

export default function CaseStudyArticle({ study }: { study: CaseStudy }) {
  const back = `/#${study.projectId}`
  return (
    <main id="top" className="case-study page-container">
      <article aria-labelledby="article-title">
        <header className="article-header">
          <Link className="article-back" href={back}>← Back to selected work</Link>
          <p className="article-category">{study.category}</p>
          <h1 id="article-title">{study.title}</h1>
          <div className="article-introduction">{study.introduction.map(p => <p key={p}>{p}</p>)}</div>
          <dl className="article-metadata">
            <div><dt>Organisation</dt><dd>{study.organisation}</dd></div>
            <div><dt>Role</dt><dd>{study.role}</dd></div>
            <div><dt>Dates</dt><dd>{study.dates}</dd></div>
            <div><dt>Technologies</dt><dd>{study.technologies.join(' · ')}</dd></div>
          </dl>
        </header>
        <div className="article-layout">
          <nav className="article-contents" aria-label="Article sections">
            <p>On this page</p>
            <ol>{study.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
          </nav>
          <div className="article-body">
            {study.sections.map(section => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
                <h2 id={`${section.id}-heading`}>{section.title}</h2>
                {section.paragraphs.map(p => <p key={p}>{p}</p>)}
                {section.steps && <ol>{section.steps.map(step => <li key={step}>{step}</li>)}</ol>}
                {section.diagram && <CaseStudyDiagram kind={section.diagram} />}
              </section>
            ))}
            <footer className="article-footer"><Link href={back}>← Back to selected work</Link></footer>
          </div>
        </div>
      </article>
    </main>
  )
}
