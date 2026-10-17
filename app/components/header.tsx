import Link from 'next/link'

export default function Header() {
  return (
    <header className="masthead">
      <nav className="page-container masthead-inner" aria-label="Main navigation">
        <Link className="wordmark" href="/#top">Stella Han</Link>
        <div className="nav-links">
          <Link href="/#projects">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link className="nav-about" href="/about">About</Link>
          <a href="mailto:stellahan0819@gmail.com">Contact</a>
        </div>
      </nav>
    </header>
  )
}
