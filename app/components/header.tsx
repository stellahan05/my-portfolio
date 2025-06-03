'use client'

export default function Header() {

    const scrollToSection = (sectionID: string) => {
        const element = document.getElementById(sectionID)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    
    return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <nav className="container mx=auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-gray-900">
                    Stella Han
                </div>

                <div className="flex space-x-8">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        Experience
                    </button>
                </div>
            </div>
        </nav>
    </header>
    )
}