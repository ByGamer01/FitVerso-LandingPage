import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

export function CTASection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.25_260/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.65_0.23_280/0.1),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 mb-8 animate-pulse-glow">
          <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
        </div>

        {/* Content */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 px-4 sm:px-0">
          Tu aventura comienza <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ahora</span>
        </h2>
        <p className="text-base sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4 sm:px-0">
          Descarga FitVerso gratis y comienza tu viaje como Viajero Dimensional. Entrena junto a Kira y ayuda a estabilizar el multiverso.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 sm:px-0">
          <a
            href="https://play.google.com/store/apps/details?id=com.fitverso.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 animate-pulse-glow"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Descargar en Google Play
            </Button>
          </a>
          <Button 
            size="lg" 
            variant="outline"
            className="border-muted text-muted-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent"
            disabled
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 opacity-50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            iOS Proximamente
          </Button>
        </div>

        {/* App Preview */}
        <div className="relative max-w-xs mx-auto">
          <div className="bg-card rounded-3xl p-2 border border-border card-glow">
            <div className="bg-secondary rounded-2xl aspect-[9/19] overflow-hidden">
              <img src="/fitness-app-interface-dark-mode-anime-style-charac.png" alt="FitVerso App Preview" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -left-8 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold animate-float">
            +500 XP
          </div>
          <div
            className="absolute -bottom-4 -right-8 bg-[var(--level-gold)] text-background px-3 py-1 rounded-full text-sm font-bold animate-float"
            style={{ animationDelay: "1s" }}
          >
            ¡Nivel Up!
          </div>
        </div>
      </div>
    </section>
  )
}
