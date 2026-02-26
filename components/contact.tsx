'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '1-800-SANITATION',
      href: 'tel:1-800-7262848'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@zoarservices.com',
      href: 'mailto:info@zoarservices.com'
    },
    {
      icon: MapPin,
      label: 'Service Area',
      value: 'Available 24/7 in your region',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl font-bold text-primary mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your sanitation needs? Contact us today for a quick quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                      <IconComponent className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">{info.label}</p>
                      <p className="text-lg text-primary font-semibold mt-1">{info.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Stats */}
            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <h3 className="font-bold text-primary mb-4">Why Us?</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>24/7 Emergency Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Professional & Courteous</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Competitive Pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Eco-Friendly Solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              action="https://formsubmit.co/your-email@zoarservices.com"
              method="POST"
              className="bg-card p-8 rounded-xl shadow-md border border-border"
            >
              {/* Hidden inputs for formsubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a service</option>
                    <option value="standard-toilets">Standard Portable Toilets</option>
                    <option value="luxury-units">Luxury Bathroom Units</option>
                    <option value="handwash-stations">Hand Washing Stations</option>
                    <option value="ada-units">ADA-Compliant Units</option>
                    <option value="waste-management">Waste Management</option>
                    <option value="emergency-response">Emergency Response</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project, event size, dates, and any specific requirements..."
                  rows={5}
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-accent hover:bg-accent/90 text-primary font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
                <Button
                  type="reset"
                  variant="outline"
                  className="flex-1 border-border text-primary hover:bg-secondary/5"
                >
                  Clear
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We'll respond to your inquiry within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
