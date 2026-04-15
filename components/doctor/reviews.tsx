import { Star, Check, Users } from "lucide-react"

interface Review {
  id: number
  name: string
  rating: number
  text: string
  verified: boolean
}

export default function DoctorReviews({ reviews }: { reviews: Review[] }) {
  return (
    <section id="reviews" className="py-32 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, #f0f5ff, #ffffff)' }}>
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up-soft">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">Patient Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Loved by Thousands
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex text-yellow-500 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-500" />
              ))}
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">5.0 out of 5</p>
              <p className="text-muted-foreground text-sm">Based on {reviews.length}+ verified patient reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group bg-white border border-border rounded-3xl p-8 soft-surface soft-surface-hover animate-fade-up-soft hover:border-teal/40 relative overflow-hidden"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, rgba(15, 154, 148, 0.1), rgba(20, 184, 166, 0.1))' }}></div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {review.name}
                    </h3>
                    {review.verified && (
                      <p className="text-xs text-teal font-medium flex items-center gap-1 mt-1">
                        <Check className="w-3 h-3" /> Verified Patient
                      </p>
                    )}
                  </div>
                  <div className="rounded-full p-2" style={{ background: 'linear-gradient(135deg, #0f9a94, #14b8a6)' }}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust metrics */}
        <div className="grid md:grid-cols-3 gap-8 rounded-3xl border border-border/40 p-8 md:p-12 animate-fade-up-soft animation-delay-500" style={{ background: 'linear-gradient(to right, rgba(230, 242, 255, 0.3), rgba(240, 245, 255, 0.3))' }}>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0f9a94, #14b8a6)' }}>5000+</p>
            <p className="text-muted-foreground font-semibold mt-2">Happy Patients</p>
          </div>
          <div className="text-center border-l border-r border-border/50">
            <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0f9a94, #14b8a6)' }}>98%</p>
            <p className="text-muted-foreground font-semibold mt-2">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0f9a94, #14b8a6)' }}>15+</p>
            <p className="text-muted-foreground font-semibold mt-2">Years Excellence</p>
          </div>
        </div>
      </div>
    </section>
  )
}
