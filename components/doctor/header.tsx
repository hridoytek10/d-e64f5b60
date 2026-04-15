"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar } from "lucide-react"

interface HeaderData {
  logo: string
  navigation: Array<{ label: string; href: string }>
  cta: {
    call: string
    callHref: string
    book: string
    bookHref: string
  }
}

export default function DoctorHeader({ data }: { data: HeaderData }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-soft ${
        isScrolled
          ? "bg-white/96 backdrop-blur-xl shadow-lg border-b border-border/60"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <div className="flex-shrink-0 animate-fade-in-soft">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="rounded-xl p-2 group-hover:shadow-lg transition-all duration-300" style={{ background: 'linear-gradient(135deg, #0f9a94, #14b8a6)' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">Dr. Sarah Johnson</p>
                <p className="text-xs text-muted-foreground hidden sm:block">Medical Excellence</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-2 px-6 animate-fade-in-soft animation-delay-100">
            {data.navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg text-muted-foreground hover:text-teal hover:bg-teal/5 transition-all duration-300 font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex shrink-0 items-center gap-3 animate-fade-in-soft animation-delay-200">
            <Button
              variant="outline"
              size="sm"
              className="border-teal/40 text-teal hover:bg-teal/5 hover:border-teal/60 rounded-xl px-4 hover-lift-soft duration-300 ease-soft font-medium"
              asChild
            >
              <a href={data.cta.callHref}>
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">{data.cta.call}</span>
                <span className="md:hidden">Call</span>
              </a>
            </Button>
            <Button
              size="sm"
              className="text-white rounded-xl shadow-md px-4 pulse-soft hover-lift-soft duration-300 ease-soft font-medium border-0 hover:shadow-lg"
              style={{ background: 'linear-gradient(to right, #0f9a94, #1fb8af)' }}
              asChild
            >
              <a href={data.cta.bookHref}>
                <Calendar className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">{data.cta.book}</span>
                <span className="md:hidden">Book</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-teal hover:bg-light-blue transition-colors duration-soft-300 ease-soft"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border animate-fade-up-soft">
            <div className="space-y-1 px-2 pt-3 pb-5">
              {data.navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-xl text-muted-foreground hover:text-teal hover:bg-light-blue transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-center border-teal/70 text-teal hover:bg-light-blue rounded-xl"
                  asChild
                >
                  <a href={data.cta.callHref}>
                    <Phone className="w-4 h-4 mr-2" />
                    {data.cta.call}
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-teal hover:bg-teal/90 text-white rounded-xl shadow-md"
                  asChild
                >
                  <a href={data.cta.bookHref}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {data.cta.book}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
