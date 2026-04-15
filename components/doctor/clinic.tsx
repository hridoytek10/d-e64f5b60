import { MapPin, Phone, Clock, Mail, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClinicData {
  name: string
  address: string
  phone: string
  email: string
  hours: Array<{ day: string; time: string }>
  amenities: string[]
}

export default function DoctorClinic({ clinic }: { clinic: ClinicData }) {
  return (
    <section id="clinic" className="py-32 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, rgba(230, 242, 255, 0.2), #ffffff)' }}>
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up-soft">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">Visit Our Clinic</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Clinic Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art medical facility with modern amenities and convenient access
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <div className="bg-white border border-border rounded-2xl p-8 soft-surface hover-lift-soft animate-fade-up-soft">
            <div className="rounded-xl w-12 h-12 flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #e6f2ff, #f0f5ff)' }}>
              <MapPin className="w-6 h-6 text-teal" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {clinic.address}
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark font-semibold text-sm">
              <ArrowRight className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 soft-surface hover-lift-soft animate-fade-up-soft animation-delay-100">
            <div className="rounded-xl w-12 h-12 flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #e6f2ff, #f0f5ff)' }}>
              <Phone className="w-6 h-6 text-teal" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Call Us</h3>
            <a
              href={`tel:${clinic.phone}`}
              className="text-2xl font-bold text-teal mb-4 block hover:text-teal-dark transition-colors"
            >
              {clinic.phone}
            </a>
            <p className="text-sm text-muted-foreground">Available during business hours</p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 soft-surface hover-lift-soft animate-fade-up-soft animation-delay-200">
            <div className="rounded-xl w-12 h-12 flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #e6f2ff, #f0f5ff)' }}>
              <Mail className="w-6 h-6 text-teal" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Email Us</h3>
            <a
              href={`mailto:${clinic.email}`}
              className="text-teal hover:text-teal-dark transition-colors font-semibold break-all text-sm mb-4 block"
            >
              {clinic.email}
            </a>
            <p className="text-sm text-muted-foreground">Response within 24 hours</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hours */}
          <div className="bg-white border border-border rounded-2xl p-8 soft-surface hover-lift-soft animate-fade-up-soft animation-delay-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-sky-blue to-light-blue rounded-xl p-3">
                <Clock className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Hours</h3>
            </div>
            <div className="space-y-4">
              {clinic.hours.map((hour, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-4 border-b border-border/50 last:border-b-0 last:pb-0"
                >
                  <span className="font-semibold text-foreground">{hour.day}</span>
                  <span className="text-teal font-bold">{hour.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white border border-border rounded-2xl p-8 soft-surface hover-lift-soft animate-fade-up-soft animation-delay-400">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="bg-gradient-to-br from-sky-blue to-light-blue rounded-xl p-3">
                <CheckCircle className="w-6 h-6 text-teal" />
              </div>
              Amenities
            </h3>
            <ul className="space-y-3">
              {clinic.amenities.map((amenity, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(to right, #0f9a94, #14b8a6)' }}></div>
                  <span className="font-medium">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-up-soft animation-delay-500">
          <a href="#contact">
            <Button className="text-white px-10 py-7 rounded-2xl text-lg font-semibold shadow-md pulse-soft hover-lift-soft border-0 hover:shadow-lg" style={{ background: 'linear-gradient(to right, #0f9a94, #1fb8af)' }}>
              Book Your Appointment Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
