import { Trophy, Flame, Target, Users } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Guerreros Activos",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Flame,
    value: "1.2M",
    label: "Entrenamientos Completados",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Target,
    value: "500K+",
    label: "Misiones Conquistadas",
    color: "text-[var(--xp-blue)]",
    bgColor: "bg-[var(--xp-blue)]/10",
  },
  {
    icon: Trophy,
    value: "10K+",
    label: "Rangos S Alcanzados",
    color: "text-[var(--level-gold)]",
    bgColor: "bg-[var(--level-gold)]/10",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <p className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
