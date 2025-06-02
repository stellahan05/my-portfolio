import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects'
import Experience from './components/experience'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Experience />
      </main>
    </div>
  )
}