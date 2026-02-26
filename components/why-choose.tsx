'use client'

import { CheckCircle2, Clock, Award, Shield, Users, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Premium Quality',
    description: 'Industry-leading sanitation equipment maintained to the highest standards.'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick setup and delivery, often same-day service available.'
  },
  {
    icon: Award,
    title: 'Professional Team',
    description: 'Trained specialists committed to your satisfaction and project success.'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Dependable service you can count on for any size project or emergency.'
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Dedicated support team available to assist with all your needs.'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Transparent pricing with flexible rental options to fit any budget.'
  }
]

export function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl font-bold text-primary mb-4">
            WHY CHOOSE ZOAR
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering the best sanitation solutions with exceptional service
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className="flex flex-col items-start p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
              >
                {/* Icon */}
                <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                  <IconComponent className="text-accent" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
