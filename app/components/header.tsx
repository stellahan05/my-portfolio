'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (sectionID: string) => {
        const element = document.getElementById(sectionID)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }
    
    return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <nav className="container mx=auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-gray-900">
                    Stella Han
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md: flex space-x-8">
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('experience')}
                            className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Experience
                        </button>
                    </div>
                </div>
            )}
            </nav>
        </header>
    )
}