import { Award, BookOpen, Medal, GraduationCap } from "lucide-react"

interface EducationItem {
  year: string
  degree: string
  institution: string
  details: string
}

export default function DoctorEducation({
  education,
}: {
  education: EducationItem[]
}) {
  const getIcon = (index: number) => {
    const icons = [GraduationCap, Medal, Award, BookOpen]
    return icons[index % icons.length]
  }

  return (
    <section id="education" className="py-32 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, #f3f7fc, #ffffff)' }}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-up-soft">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">Credentials & Training</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Education & Credentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced training and certifications from world-renowned institutions ensuring the highest standards of medical care
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 opacity-30" style={{ background: 'linear-gradient(to bottom, #0f9a94, #14b8a6)' }}></div>

          <div className="space-y-12">
            {education.map((item, index) => {
              const IconComponent = getIcon(index)
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative animate-fade-up-soft ${isEven ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex gap-6 md:gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    {/* Icon Circle */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-glow relative z-10" style={{ background: 'linear-gradient(135deg, #0f9a94, #14b8a6)' }}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white border border-border rounded-2xl p-8 soft-surface hover-lift-soft">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm font-bold uppercase tracking-wider text-teal mb-2">{item.year}</p>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {item.degree}
                          </h3>
                        </div>
                        <Medal className="w-6 h-6 text-teal/30 flex-shrink-0" />
                      </div>
                      <p className="text-lg font-semibold text-secondary-blue mb-3">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 border border-teal/20 rounded-3xl p-8 text-center animate-fade-up-soft animation-delay-500" style={{ background: 'linear-gradient(to right, rgba(230, 242, 255, 0.3), rgba(240, 245, 255, 0.3))' }}>
          <Award className="w-12 h-12 text-teal mx-auto mb-4" />
          <p className="text-foreground text-lg font-semibold mb-2">Board Certified & Accredited</p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            All certifications maintained with continuing medical education and the highest professional standards
          </p>
        </div>
      </div>
    </section>
  )
}
