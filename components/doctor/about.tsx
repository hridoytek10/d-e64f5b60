import { Award, Users, Heart, Zap } from "lucide-react"

interface AboutData {
  title: string
  description: string
  highlights: string[]
}

export default function DoctorAbout({ data }: { data: AboutData }) {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, #f3f7fc, #ffffff)' }}>
      {/* Decorative background */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up-soft">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">About the Clinic</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{data.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up-soft animation-delay-100">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {data.highlights.map((item, index) => (
                <div key={index} className="bg-white border border-border rounded-2xl p-5 soft-surface hover-lift-soft animate-fade-up-soft" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg p-2 flex-shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg, #0f9a94, #14b8a6)' }}>
                      {index === 0 && <Award className="w-5 h-5 text-white" />}
                      {index === 1 && <Users className="w-5 h-5 text-white" />}
                      {index === 2 && <Heart className="w-5 h-5 text-white" />}
                      {index === 3 && <Zap className="w-5 h-5 text-white" />}
                    </div>
                    <p className="text-sm font-semibold text-foreground">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Image Section */}
          <div className="relative animate-scale-in-soft animation-delay-300">
            <div className="absolute -inset-4 rounded-3xl blur-2xl -z-10 animate-float" style={{ background: 'linear-gradient(135deg, rgba(15, 154, 148, 0.2), rgba(20, 184, 166, 0.1))' }}></div>
            
            <div className="rounded-3xl p-1 soft-surface hover-lift-soft overflow-hidden" style={{ background: 'linear-gradient(135deg, #e6f2ff, #f0f5ff)' }}>
              <div className="bg-white rounded-3xl p-8 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(15, 154, 148, 0.1), rgba(20, 184, 166, 0.1))' }}>
                    <Heart className="w-16 h-16 text-teal/40" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Patient Care Excellence</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">Committed to delivering the highest standard of medical care with compassion and expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 animate-fade-up-soft animation-delay-400">
          {[
            { label: "Years of Excellence", value: "15+" },
            { label: "Patients Served", value: "5000+" },
            { label: "Satisfaction Rate", value: "98%" },
            { label: "Board Certifications", value: "10+" }
          ].map((stat, index) => (
            <div key={index} className="bg-white border border-border rounded-2xl p-6 soft-surface hover-lift-soft text-center">
              <p className="text-4xl font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: 'linear-gradient(to right, #0f9a94, #14b8a6)' }}>{stat.value}</p>
              <p className="text-sm font-semibold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
