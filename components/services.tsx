'use client'

import Image from 'next/image'
import { Truck, Droplet, Zap, Users, AlertCircle, Trash2 } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Standard Portable Toilets',
    description: 'Durable, hygienic portable toilets perfect for construction sites and outdoor events.',
    icon: Truck,
    image: '/images/service-standard.jpg',
    features: ['Hand sanitizer included', 'Regular servicing', 'Multiple units available']
  },
  {
    id: 2,
    title: 'Luxury Bathroom Units',
    description: 'Premium facilities with modern amenities for upscale events and corporate gatherings.',
    icon: Droplet,
    image: '/images/service-luxury.jpg',
    features: ['Climate controlled', 'Premium interiors', 'Luxury fixtures']
  },
  {
    id: 3,
    title: 'Hand Washing Stations',
    description: 'Touchless hand washing solutions for events, construction, and emergency situations.',
    icon: Droplet,
    image: '/images/service-handwash.jpg',
    features: ['Touchless technology', 'Hot & cold water', 'Soap included']
  },
  {
    id: 4,
    title: 'ADA-Compliant Units',
    description: 'Accessible facilities designed to meet all accessibility requirements and standards.',
    icon: Users,
    image: '/images/service-specialty.jpg',
    features: ['Wheelchair accessible', 'Spacious interior', 'Safety features']
  },
  {
    id: 5,
    title: 'Waste Management',
    description: 'Comprehensive trash and dumpster rental solutions for any project size.',
    icon: Trash2,
    image: '/images/service-trash.jpg',
    features: ['Multiple sizes', 'Flexible rental', 'Professional disposal']
  },
  {
    id: 6,
    title: 'Emergency Response',
    description: 'Rapid deployment of sanitation facilities for disaster relief and emergency situations.',
    icon: AlertCircle,
    image: '/images/service-emergency.jpg',
    features: ['24/7 availability', 'Fast response', 'Large capacity']
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl font-bold text-primary mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive sanitation solutions tailored to your specific needs and requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                    <IconComponent className="text-accent" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
