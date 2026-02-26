'use client'

import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="ZOAR Services"
                width={50}
                height={50}
                className="h-10 w-auto invert"
              />
              <h3 className="font-bebas text-xl font-bold">ZOAR</h3>
            </div>
            <p className="text-white/80 text-sm mb-6">
              Professional portable sanitation solutions for construction, events, and emergency response.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Services</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Standard Toilets</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Luxury Units</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hand Washing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">ADA Compliant</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Waste Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Contact</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">1-800-SANITATION</p>
                  <p className="text-xs">24/7 Available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                <p className="text-sm">info@zoarservices.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <p className="text-sm">Service in your area</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} ZOAR Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
