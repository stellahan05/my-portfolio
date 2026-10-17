import type { Metadata } from 'next'
import Image from 'next/image'
import { about } from '../data/about'

export const metadata: Metadata = {
  title: 'About | Stella Han',
  description: 'A little about Stella, outside school and work.',
}

export default function AboutPage() {
  return (
    <main id="top" className="page-container about-page">
      <section className="about-introduction" aria-labelledby="about-heading">
        <h1 id="about-heading">About</h1>
        <div className="about-prose">
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      {about.photos.length > 0 && (
        <div className="about-photographs">
          {about.photos.slice(0, 3).map((photo) => (
            <figure key={photo.src}>
              <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} sizes="(max-width: 900px) 100vw, 50vw" />
              {photo.caption && <figcaption>{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </main>
  )
}
