import { Flame, TrendingUp, Dumbbell, Zap, Users, Map, Swords, Trophy, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const currentFeatures = [
  {
    icon: Dumbbell,
    title: "Misiones Diarias",
    description: "Misiones personalizadas cada dia. Flexiones, sentadillas, plancha, burpees y mas ejercicios para ganar XP.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    icon: TrendingUp,
    title: "Sistema de XP y Niveles",
    description: "Gana experiencia con cada entrenamiento completado. Sube de nivel y desbloquea nuevos rangos.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    icon: Flame,
    title: "Kira: Tu Companero",
    description: "Un gato negro dimensional que te acompana. Cambia de humor segun tu energia y multiplica tu XP.",
    color: "text-[var(--xp-cyan)]",
    bgColor: "bg-[var(--xp-cyan)]/10",
    borderColor: "border-[var(--xp-cyan)]/30",
  },
  {
    icon: Zap,
    title: "Sistema de Rachas",
    description: "Manten tu racha de entrenamientos. 7 dias = x2 XP, 30 dias = x5 XP. No pierdas tu progreso.",
    color: "text-[var(--level-gold)]",
    bgColor: "bg-[var(--level-gold)]/10",
    borderColor: "border-[var(--level-gold)]/30",
  },
]

const comingSoonFeatures = [
  {
    icon: Users,
    title: "Sistema de Gremios",
    description: "Unite a un clan con otros viajeros dimensionales y entrena en equipo.",
  },
  {
    icon: Swords,
    title: "Guerras de Clanes",
    description: "Batallas semanales entre clanes. Cada entrenamiento suma puntos para tu equipo.",
  },
  {
    icon: Map,
    title: "Territorios",
    description: "Conquista territorios completando entrenamientos. Como Clash of Clans, pero haciendo ejercicio.",
  },
  {
    icon: Trophy,
    title: "Leaderboards Globales",
    description: "Compite en rankings individuales y por clan. Recompensas exclusivas cada temporada.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.25_260/0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Caracteristicas <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Disponibles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que ya puedes disfrutar en FitVerso
          </p>
        </div>

        {/* Current Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {currentFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-card border ${feature.borderColor} hover:border-opacity-100 transition-all duration-300 hover:scale-[1.02] card-glow`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
            <Clock className="w-3 h-3 mr-1" />
            Proximamente
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Nuevas funciones en desarrollo
          </h3>
          <p className="text-muted-foreground">
            Estamos trabajando en mas formas de hacer tu entrenamiento epico
          </p>
        </div>

        {/* Coming Soon Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {comingSoonFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl bg-card/50 border border-border/50 hover:border-border transition-all duration-300 opacity-75 hover:opacity-100"
            >
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
