'use client'

import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    title: 'Music Festival Setup',
    image: '/images/gallery-1.jpg',
    category: 'Events'
  },
  {
    id: 2,
    title: 'Construction Site',
    image: '/images/gallery-2.jpg',
    category: 'Construction'
  },
  {
    id: 3,
    title: 'Wedding Venue',
    image: '/images/gallery-3.jpg',
    category: 'Special Events'
  },
  {
    id: 4,
    title: 'Emergency Response',
    image: '/images/gallery-4.jpg',
    category: 'Emergency'
  },
  {
    id: 5,
    title: 'Corporate Event',
    image: '/images/gallery-5.jpg',
    category: 'Corporate'
  },
  {
    id: 6,
    title: 'Sports Event',
    image: '/images/gallery-6.jpg',
    category: 'Events'
  }
]

export function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl font-bold text-primary mb-4">
            PROJECT SHOWCASE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've successfully supported events, construction projects, and emergency situations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent group-hover:from-primary/90 transition-colors duration-300"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-accent text-sm font-semibold mb-1">{item.category}</p>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
