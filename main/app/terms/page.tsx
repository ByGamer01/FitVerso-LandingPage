import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Users, Shield, AlertTriangle, Scale } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Terminos de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Servicio</span>
          </h1>
          <p className="text-muted-foreground">Ultima actualizacion: Enero 2025</p>
        </div>

        <div className="space-y-8">
          {/* Intro */}
          <section className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">1. Aceptacion de los Terminos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al descargar, instalar o utilizar FitVerso, aceptas estos Terminos de Servicio. Si no estas de acuerdo con alguno de estos terminos, no debes utilizar la aplicacion.
                </p>
              </div>
            </div>
          </section>

          {/* Uso de la App */}
          <section className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">2. Uso de la Aplicacion</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>FitVerso es una aplicacion de fitness gamificada con fines de entretenimiento y motivacion para el ejercicio.</p>
                  <p>La aplicacion esta dirigida a mayores de 13 anos.</p>
                  <p>El usuario es responsable de evaluar su condicion fisica antes de realizar cualquier ejercicio sugerido por la app.</p>
                  <p>FitVerso no reemplaza el consejo medico profesional.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cuenta */}
          <section className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--xp-cyan)]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[var(--xp-cyan)]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">3. Cuenta de Usuario</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>El usuario es responsable de mantener la confidencialidad de su cuenta.</p>
                  <p>No esta permitido compartir credenciales de acceso.</p>
                  <p>El usuario debe proporcionar informacion veraz al crear su cuenta.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Prohibiciones */}
          <section className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">4. Conducta Prohibida</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>No esta permitido usar la aplicacion para actividades ilegales.</p>
                  <p>Esta prohibido intentar hackear, modificar o interferir con el funcionamiento de la app.</p>
                  <p>No se permite el acoso o comportamiento abusivo hacia otros usuarios.</p>
                  <p>Esta prohibido crear multiples cuentas para obtener ventajas injustas.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitacion */}
          <section className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--level-gold)]/10 flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-[var(--level-gold)]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">5. Limitacion de Responsabilidad</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>FitVerso se proporciona "tal cual" sin garantias de ningun tipo.</p>
                  <p>No nos hacemos responsables de lesiones derivadas del uso de la aplicacion.</p>
                  <p>Recomendamos consultar con un profesional de la salud antes de comenzar cualquier programa de ejercicios.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
            <h2 className="text-xl font-bold text-foreground mb-2">Contacto</h2>
            <p className="text-muted-foreground">
              Para cualquier consulta sobre estos terminos, puedes escribirnos a:{" "}
              <a href="mailto:fitversosoporte@gmail.com" className="text-primary hover:underline">
                fitversosoporte@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
