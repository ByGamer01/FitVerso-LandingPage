import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos M.",
    avatar: "/young-man-avatar-anime-style.jpg",
    level: 45,
    rank: "A-Rank",
    content:
      "Nunca me había motivado tanto a entrenar. El sistema de niveles y misiones hace que cada día quiera superar mis límites. ¡Ya llevo 6 meses sin faltar!",
    rating: 5,
  },
  {
    name: "María L.",
    avatar: "/young-woman-avatar-anime-style.jpg",
    level: 38,
    rank: "B-Rank",
    content:
      "La gamificación es perfecta. Competir con mi gremio y desbloquear skins para mi avatar me tiene enganchada. Es como jugar un RPG pero mejorando mi cuerpo real.",
    rating: 5,
  },
  {
    name: "Diego R.",
    avatar: "/athletic-man-avatar-anime-style.jpg",
    level: 62,
    rank: "S-Rank",
    content:
      "Como fan del anime y el fitness, esta app es un sueño hecho realidad. Las mazmorras semanales son brutales pero la recompensa vale cada gota de sudor.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que dicen nuestros <span className="text-primary text-glow">Guerreros</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de personas ya están transformando sus vidas con FitVerso
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all card-glow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--level-gold)] text-[var(--level-gold)]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">LVL {testimonial.level}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-[var(--level-gold)]">{testimonial.rank}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
