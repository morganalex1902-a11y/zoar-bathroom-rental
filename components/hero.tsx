'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="ZOAR Services - Professional Portable Sanitation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="ZOAR Services Logo"
              width={150}
              height={150}
              className="h-32 w-auto"
            />
          </div>

          {/* Heading */}
          <h1 className="font-bebas text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            PROFESSIONAL SANITATION
            <span className="block text-accent mt-2">SOLUTIONS</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Fast, reliable, and hygienic portable sanitation services for construction sites, events, and emergency response.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToServices}
            className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore Our Services
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToServices}
            className="text-white hover:text-accent transition-colors"
            aria-label="Scroll to services"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
