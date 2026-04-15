"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react"

interface ContactField {
  name: string
  type: string
  placeholder: string
  required: boolean
}

interface ContactData {
  title: string
  subtitle: string
  formFields: ContactField[]
}

export default function DoctorContact({
  contact,
}: {
  contact: ContactData
}) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, rgba(230, 242, 255, 0.2), #ffffff)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up-soft">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        {submitted && (
          <div className="mb-8 border border-teal/40 rounded-2xl p-6 flex items-center gap-4 animate-fade-up-soft" style={{ background: 'linear-gradient(to right, rgba(15, 154, 148, 0.1), rgba(20, 184, 166, 0.1))' }}>
            <div className="bg-teal/20 p-3 rounded-lg flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-teal" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Message sent successfully!</p>
              <p className="text-sm text-muted-foreground">We&apos;ll be in touch within 24 hours.</p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Contact Info */}
          <div className="lg:col-span-1 space-y-6 animate-fade-up-soft animation-delay-200">
            {/* Phone */}
            <div className="bg-white border border-border rounded-2xl p-6 soft-surface hover-lift-soft">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(15, 154, 148, 0.1)' }}>
                <Phone className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Call Us</h3>
              <a href="tel:+1-555-123-4567" className="text-teal hover:text-teal-dark font-semibold">+1 (555) 123-4567</a>
              <p className="text-xs text-muted-foreground mt-3">Available today until 5 PM</p>
            </div>

            {/* Email */}
            <div className="bg-white border border-border rounded-2xl p-6 soft-surface hover-lift-soft">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(15, 154, 148, 0.1)' }}>
                <Mail className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:info@johnsonmedical.com" className="text-teal hover:text-teal-dark font-semibold">info@johnsonmedical.com</a>
              <p className="text-xs text-muted-foreground mt-3">Response within 24 hours</p>
            </div>

            {/* Address */}
            <div className="bg-white border border-border rounded-2xl p-6 soft-surface hover-lift-soft">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(15, 154, 148, 0.1)' }}>
                <MapPin className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground font-medium">123 Healthcare Ave, Medical City, MC 12345</p>
              <p className="text-xs text-muted-foreground mt-3">Modern facilities & parking available</p>
            </div>

            {/* Hours */}
            <div className="border border-teal/20 rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(15, 154, 148, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(15, 154, 148, 0.2)' }}>
                <Clock className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-bold text-foreground mb-3">Hours</h3>
              <div className="space-y-2 text-sm">
                <p className="text-foreground"><span className="font-semibold">Mon-Fri:</span> 9 AM - 5 PM</p>
                <p className="text-foreground"><span className="font-semibold">Saturday:</span> 10 AM - 2 PM</p>
                <p className="text-foreground"><span className="font-semibold">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-up-soft animation-delay-100">
            <div className="bg-white border border-border rounded-3xl p-8 md:p-12 soft-surface">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {contact.formFields.slice(0, 2).map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        {field.placeholder}
                        {field.required && <span className="text-teal">*</span>}
                      </label>
                      <Input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="rounded-xl border-border focus:ring-teal bg-white/50 transition-all duration-300 focus:shadow-lg h-12"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {contact.formFields[2]?.placeholder}
                    {contact.formFields[2]?.required && <span className="text-teal">*</span>}
                  </label>
                  <Input
                    type={contact.formFields[2]?.type}
                    name={contact.formFields[2]?.name}
                    placeholder={contact.formFields[2]?.placeholder}
                    required={contact.formFields[2]?.required}
                    className="rounded-xl border-border focus:ring-teal bg-white/50 transition-all duration-300 focus:shadow-lg h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {contact.formFields[3]?.placeholder}
                    {contact.formFields[3]?.required && <span className="text-teal">*</span>}
                  </label>
                  <Input
                    type={contact.formFields[3]?.type}
                    name={contact.formFields[3]?.name}
                    placeholder={contact.formFields[3]?.placeholder}
                    required={contact.formFields[3]?.required}
                    className="rounded-xl border-border focus:ring-teal bg-white/50 transition-all duration-300 focus:shadow-lg h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {contact.formFields[4]?.placeholder}
                    {contact.formFields[4]?.required && <span className="text-teal">*</span>}
                  </label>
                  <Textarea
                    name={contact.formFields[4]?.name}
                    placeholder={contact.formFields[4]?.placeholder}
                    required={contact.formFields[4]?.required}
                    className="rounded-xl border-border focus:ring-teal bg-white/50 transition-all duration-300 focus:shadow-lg"
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white py-6 rounded-2xl text-lg font-semibold shadow-md pulse-soft hover-lift-soft border-0 hover:shadow-lg"
                  style={{ background: 'linear-gradient(to right, #0f9a94, #1fb8af)' }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
