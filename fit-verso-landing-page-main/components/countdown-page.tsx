"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Bell, Zap } from "lucide-react"

const LAUNCH_DATE = new Date("2026-04-03T00:00:00").getTime()

export function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = LAUNCH_DATE - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  if (!mounted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
          <Zap className="w-8 h-8 text-white" />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.6_0.25_260/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.65_0.23_280/0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.6_0.25_260/0.08),transparent_40%)]" />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.25_0.03_270/0.4)_1px,transparent_1px),linear-gradient(90deg,oklch(0.25_0.03_270/0.4)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <span className="text-4xl font-bold text-foreground tracking-tight">
            Fit<span className="text-primary">Verso</span>
          </span>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Próximamente</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Tu aventura fitness</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
            está por comenzar
          </span>
        </h1>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Prepárate para transformar tu entrenamiento en una experiencia épica estilo anime. Sube de nivel, desbloquea
          habilidades y conviértete en el héroe de tu historia.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto mb-12">
          <CountdownUnit value={timeLeft.days} label="Días" />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <CountdownUnit value={timeLeft.minutes} label="Minutos" />
          <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </div>

        {/* Email Subscription */}
        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-4">Únete a la lista de espera y sé el primero en jugar</p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                required
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 shrink-0">
                <Bell className="w-4 h-4 mr-2" />
                Notificarme
              </Button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-primary/10 border border-primary/30 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <p className="text-foreground font-medium">¡Estás en la lista!</p>
            <p className="text-sm text-muted-foreground mt-2">Te notificaremos cuando FitVerso esté listo para ti.</p>
          </div>
        )}

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Twitter
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Instagram
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Discord
          </a>
        </div>
      </div>
    </main>
  )
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="relative group">
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70 tabular-nums">
          {value.toString().padStart(2, "0")}
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">{label}</div>
      </div>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
    </div>
  )
}
