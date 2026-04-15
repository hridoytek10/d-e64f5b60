"use client"

import { Facebook, Twitter, Linkedin, Heart, ArrowUp } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface FooterData {
  copyright: string
  links: FooterLink[]
  social: SocialLink[]
}

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
}

export default function DoctorFooter({ footer }: { footer: FooterData }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="text-white relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #1a273a, #0f172a)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl p-2" style={{ background: 'linear-gradient(135deg, #0f9a94, #14b8a6)' }}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Dr. Sarah Johnson</h3>
                <p className="text-sm text-gray-400">Medical Excellence & Care</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Dedicated to providing compassionate, expert healthcare with a patient-centered approach. Your health and wellbeing is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-teal transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['General Checkup', 'Preventive Care', 'Chronic Disease', 'Vaccinations'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-accent-teal transition-colors duration-300 font-medium"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section - Contact & Hours */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/10">
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Address</h4>
            <p className="text-gray-400 text-sm leading-relaxed">123 Healthcare Avenue, Medical City, MC 12345</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Phone</h4>
            <a href="tel:+1-555-123-4567" className="text-accent-teal hover:text-teal font-semibold transition-colors">
              +1 (555) 123-4567
            </a>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Hours</h4>
            <p className="text-gray-400 text-sm">Mon-Fri: 9AM - 5PM</p>
            <p className="text-gray-400 text-sm">Sat: 10AM - 2PM</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-400 text-sm text-center md:text-left">
            {footer.copyright}
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {footer.social.map((social) => {
              const Icon =
                socialIcons[
                  social.platform as keyof typeof socialIcons
                ]
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  className="bg-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-br w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group hover:shadow-lg"
                  style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  aria-label={social.platform}
                >
                  {Icon && <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                </a>
              )
            })}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="bg-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-br w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group hover:shadow-lg"
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  )
}
