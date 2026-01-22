import { Badge } from "@/components/ui/badge"
import { Dumbbell, Clock, Flame, Zap, Target } from "lucide-react"

const missions = [
  {
    title: "Mision de Flexiones",
    type: "Diaria",
    difficulty: "Facil",
    difficultyColor: "text-green-400 border-green-400/30",
    xp: 150,
    description: "Completa series de flexiones para fortalecer tu cuerpo superior y ganar XP.",
    exercise: "Flexiones",
    icon: Dumbbell,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    title: "Desafio de Sentadillas",
    type: "Diaria",
    difficulty: "Media",
    difficultyColor: "text-yellow-400 border-yellow-400/30",
    xp: 250,
    description: "Entrena tus piernas con series de sentadillas. Cada rep te acerca a la victoria.",
    exercise: "Sentadillas",
    icon: Target,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    title: "Prueba de Resistencia",
    type: "Diaria",
    difficulty: "Dificil",
    difficultyColor: "text-red-400 border-red-400/30",
    xp: 400,
    description: "Mantén la plancha el tiempo requerido. Tu resistencia mental es tu arma.",
    exercise: "Plancha",
    icon: Flame,
    color: "text-[var(--level-gold)]",
    bgColor: "bg-[var(--level-gold)]/10",
    borderColor: "border-[var(--level-gold)]/30",
  },
]

export function QuestsSection() {
  return (
    <section id="quests" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.65_0.2_30/0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
            Misiones <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Diarias</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Cada dia nuevas misiones generadas para ti. Completa ejercicios, gana XP y ayuda a estabilizar el multiverso.
          </p>
        </div>

        {/* Missions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-card border ${mission.borderColor} hover:border-opacity-100 transition-all duration-300 hover:scale-[1.02] overflow-hidden`}
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 ${mission.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${mission.bgColor} flex items-center justify-center`}>
                    <mission.icon className={`w-6 h-6 ${mission.color}`} />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {mission.type}
                    </Badge>
                    <Badge variant="outline" className={`text-xs ${mission.difficultyColor}`}>
                      {mission.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{mission.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{mission.description}</p>

                {/* Rewards */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{mission.exercise}</span>
                  </div>
                  <div className={`font-bold ${mission.color}`}>+{mission.xp} XP</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Types Preview */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-card border border-border">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-4 h-4 rounded-full bg-green-400 mx-auto mb-2" />
              <p className="font-semibold text-foreground">Facil</p>
              <p className="text-sm text-muted-foreground">Ideal para empezar</p>
            </div>
            <div>
              <div className="w-4 h-4 rounded-full bg-yellow-400 mx-auto mb-2" />
              <p className="font-semibold text-foreground">Media</p>
              <p className="text-sm text-muted-foreground">Desafio moderado</p>
            </div>
            <div>
              <div className="w-4 h-4 rounded-full bg-red-400 mx-auto mb-2" />
              <p className="font-semibold text-foreground">Dificil</p>
              <p className="text-sm text-muted-foreground">Para guerreros expertos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
