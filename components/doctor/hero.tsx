import { Button } from "@/components/ui/button"
import { Phone, Clock, Calendar, CheckCircle2, Zap } from "lucide-react"

interface HeroData {
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  stats: Array<{ number: string; label: string }>
}

export default function DoctorHero({ data }: { data: HeroData }) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 mt-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #e6f2ff, #f0f5ff, rgba(255, 255, 255, 0.5))' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Content */}
        <div className="animate-fade-up-soft">
          <div className="mb-8">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6 animate-fade-up-soft animation-delay-100">
              <Zap className="w-4 h-4 text-teal" />
              <span className="text-sm font-semibold text-teal">Award-Winning Healthcare Excellence</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight max-w-2xl animate-fade-up-soft animation-delay-200">
              Your Trusted Medical Partner
            </h1>
            <p className="text-xl text-teal font-semibold mb-3 animate-fade-up-soft animation-delay-300">
              Premium care with a personal touch
            </p>
            <div className="flex items-center gap-3 mb-8 animate-fade-in-soft animation-delay-400">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">5.0 · <span className="text-muted-foreground">(500+ verified reviews)</span></span>
            </div>
          </div>

          <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-xl animate-fade-up-soft animation-delay-400">
            {data.description} Committed to excellence, innovation, and your wellbeing.
          </p>

          {/* Premium Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-12 animate-fade-up-soft animation-delay-500">
            {data.stats.map((stat, index) => (
              <div key={index} className="bg-white border border-border rounded-2xl p-5 text-center soft-surface hover-lift-soft transform transition-all duration-300">
                <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0f9a94, #14b8a6)' }}>{stat.number}</p>
                <p className="text-xs md:text-sm font-semibold text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons with Premium Design */}
          <div className="animate-fade-up-soft animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="!text-white px-10 py-7 rounded-2xl text-lg font-semibold flex items-center gap-2 shadow-lg hover-lift-soft pulse-soft border-0"
                style={{ background: 'linear-gradient(to right, #0f9a94, #1fb8af)' }}
              >
                <Calendar className="w-5 h-5" />
                Schedule Now
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-teal/40 text-teal hover:bg-teal/5 px-10 py-7 rounded-2xl text-lg font-semibold flex items-center gap-2 hover-lift-soft"
              >
                <Phone className="w-5 h-5" />
                Call Clinic
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-5 mt-12 text-sm animate-fade-in-soft animation-delay-700">
            <div className="flex items-center gap-3">
              <div className="bg-teal/10 p-2.5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-teal" />
              </div>
              <span className="font-medium text-foreground">Available Today</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-teal/10 p-2.5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-teal" />
              </div>
              <span className="font-medium text-foreground">Same-Day Appointments</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-teal/10 p-2.5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-teal" />
              </div>
              <span className="font-medium text-foreground">Virtual Care</span>
            </div>
          </div>
        </div>

        {/* Right side - Premium Image Section */}
        <div className="relative animate-scale-in-soft animation-delay-400">
          {/* Floating cards background effect */}
          <div className="absolute -top-8 -right-8 w-full h-full rounded-4xl blur-2xl -z-10 animate-float" style={{ background: 'linear-gradient(135deg, rgba(15, 154, 148, 0.08), rgba(20, 184, 166, 0.08))' }}></div>
          
          <div className="relative">
            <div className="bg-white rounded-4xl overflow-hidden border border-border soft-surface hover-lift-soft h-full min-h-96 md:min-h-[500px] group">
              <img
                src={data.image}
                alt="Dr. Sarah Johnson"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Premium floating badge */}
          <div className="absolute -bottom-8 -left-8 bg-white border-2 border-teal/20 rounded-3xl shadow-xl p-6 soft-surface animate-float animation-delay-500">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #0f9a94, #14b8a6)' }}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-teal">15+</p>
                <p className="text-xs font-semibold text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
