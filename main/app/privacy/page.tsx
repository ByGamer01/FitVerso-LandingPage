import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="FitVerso"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground">
                Fit<span className="text-primary">Verso</span>
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Volver al inicio</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 mb-6">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Politica de{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Privacidad
              </span>
            </h1>
            <p className="text-muted-foreground">
              Ultima actualizacion: Enero 2025
            </p>
          </div>

          {/* Policy Content */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Intro */}
            <section>
              <p className="text-foreground text-lg leading-relaxed">
                FitVerso es una aplicacion de fitness gamificada.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  1
                </span>
                Datos que Recopilamos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La app recopila datos basicos del usuario como nombre de
                usuario, edad, altura, peso y progreso de entrenamiento con el
                unico fin de proporcionar las funcionalidades de la aplicacion.
              </p>
            </section>

            {/* Data Storage */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm font-bold">
                  2
                </span>
                Almacenamiento y Seguridad
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Los datos se almacenan de forma segura mediante Firebase (Google
                LLC) y no se comparten con terceros, salvo obligacion legal.
              </p>
            </section>

            {/* Sensitive Data */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[var(--xp-cyan)]/20 flex items-center justify-center text-[var(--xp-cyan)] text-sm font-bold">
                  3
                </span>
                Datos Sensibles
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                FitVerso no recopila datos medicos ni informacion sensible.
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[var(--level-gold)]/20 flex items-center justify-center text-[var(--level-gold)] text-sm font-bold">
                  4
                </span>
                Tus Derechos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                El usuario puede solicitar la eliminacion de su cuenta y datos
                personales en cualquier momento escribiendo a:{" "}
                <a
                  href="mailto:fitversosoporte@gmail.com"
                  className="text-primary hover:underline"
                >
                  fitversosoporte@gmail.com
                </a>
              </p>
            </section>

            {/* Age Restriction */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center text-destructive text-sm font-bold">
                  5
                </span>
                Restriccion de Edad
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La aplicacion esta dirigida a mayores de 13 anios.
              </p>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 FitVerso. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
