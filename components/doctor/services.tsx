import {
  Heart,
  Shield,
  Activity,
  Syringe,
  Bandage,
  Video,
  Zap as ZapIcon,
  Stethoscope,
  TrendingUp,
} from "lucide-react"

const Zap = ZapIcon

interface ServiceItem {
  id: number
  title: string
  description: string
  icon: string
}

const iconMap: { [key: string]: React.ReactNode } = {
  Heart: <Heart className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  Syringe: <Syringe className="w-8 h-8" />,
  Bandage: <Bandage className="w-8 h-8" />,
  Video: <Video className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
}

const defaultServices = [
  {
    icon: "Heart",
    title: "Heart Disease Diagnosis & Management",
    description: "Comprehensive evaluation and treatment of various heart conditions including hypertension, arrhythmias, and coronary artery disease.",
  },
  {
    icon: "Zap",
    title: "Interventional Cardiology",
    description: "Advanced procedures including angioplasty, stent placement, and catheter-based interventions.",
  },
  {
    icon: "Stethoscope",
    title: "Preventive Cardiology",
    description: "Risk assessment and prevention strategies to maintain long-term heart health and prevent future complications.",
  },
  {
    icon: "TrendingUp",
    title: "Cardiac Rehabilitation",
    description: "Post-operative and post-event recovery programs designed for optimal cardiac rehabilitation.",
  },
  {
    icon: "Activity",
    title: "Stress Testing & Monitoring",
    description: "Advanced diagnostic testing including ECG, echo, Holter monitoring, and exercise stress tests.",
  },
  {
    icon: "Shield",
    title: "Telemedicine Consultations",
    description: "Convenient virtual consultations for follow-up care and initial assessments.",
  },
]

export default function DoctorServices({
  services,
}: {
  services: ServiceItem[]
}) {
  const servicesToDisplay = services && services.length > 0 ? services : defaultServices

  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, #f3f7fc, #ffffff)' }}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up-soft">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">Comprehensive Healthcare</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Services & Specialties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium medical services tailored to your unique health needs with cutting-edge technology and compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToDisplay.map((service, index) => {
            const icon = iconMap[service.icon] || iconMap.Heart
            return (
              <div
                key={service.id}
                className="group bg-white border border-border rounded-3xl p-8 soft-surface soft-surface-hover animate-fade-up-soft hover:border-teal/40 transition-all duration-300"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="text-teal rounded-2xl w-16 h-16 flex items-center justify-center mb-6 animate-scale-in-soft group-hover:shadow-lg group-hover:scale-110 transition-all duration-300" style={{ animationDelay: `${120 + index * 60}ms`, background: 'linear-gradient(135deg, #e6f2ff, #f0f5ff)' }}>
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-teal transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/75 transition-colors duration-300">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
