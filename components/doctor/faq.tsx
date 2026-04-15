"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

export default function DoctorFAQ({ faq }: { faq: FAQItem[] }) {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, rgba(230, 242, 255, 0.2), #ffffff)' }}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up-soft">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">Questions & Answers</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, appointments, and how we can help you achieve better health
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white border border-border rounded-2xl overflow-hidden soft-surface animate-fade-up-soft transition-all duration-300 ${
                openId === item.id ? 'border-teal/40 shadow-lg' : 'hover-lift-soft hover:border-teal/30'
              }`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between hover:bg-sky-blue/30 transition-all duration-300"
              >
                <h3 className="text-lg md:text-lg font-semibold text-foreground text-left group-hover:text-teal transition-colors duration-300">
                  {item.question}
                </h3>
                <div className={`p-2.5 rounded-lg flex-shrink-0 transition-all duration-300`}
                style={{
                  background: openId === item.id 
                    ? 'linear-gradient(135deg, #0f9a94, #14b8a6)'
                    : 'linear-gradient(135deg, rgba(15, 154, 148, 0.1), rgba(20, 184, 166, 0.1))'
                }}>
                  <ChevronDown
                    className={`w-6 h-6 transition-all duration-300 ${
                      openId === item.id ? 'text-white rotate-180' : 'text-teal'
                    }`}
                  />
                </div>
              </button>

              {openId === item.id && (
                <div className="px-6 md:px-8 py-6 border-t border-border animate-fade-in-soft" style={{ background: 'linear-gradient(135deg, rgba(230, 242, 255, 0.3), rgba(240, 245, 255, 0.3))' }}>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 border border-teal/20 rounded-3xl p-12 text-center animate-fade-up-soft animation-delay-500" style={{ background: 'linear-gradient(to right, rgba(15, 154, 148, 0.1), rgba(20, 184, 166, 0.1))' }}>
          <p className="text-foreground text-lg font-semibold mb-3">Still have questions?</p>
          <p className="text-muted-foreground mb-6">Can&apos;t find the answer you&apos;re looking for? Contact us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover-lift-soft transition-all duration-300" style={{ background: 'linear-gradient(to right, #0f9a94, #1fb8af)' }}>
              Get in Touch
            </a>
            <a href="tel:+1-555-123-4567" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-teal/40 text-teal font-semibold hover:bg-teal/5 transition-all duration-300">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
