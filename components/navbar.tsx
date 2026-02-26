'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-choose' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/images/logo.png"
            alt="ZOAR Services"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
          <span className="hidden sm:inline font-bebas text-xl font-bold text-primary">
            ZOAR
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-700 hover:text-accent font-medium transition-colors text-sm"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => handleNavClick('#contact')}
            className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-2 rounded-full"
          >
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-700 hover:text-accent font-medium transition-colors text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick('#contact')}
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-2 rounded-lg"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
