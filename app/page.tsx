import Hero from './components/hero'
import Projects from './components/projects'
import Experience from './components/experience'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Experience />
    </div>
  )
}