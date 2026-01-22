import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

export default function DeletePage() {
  return (
    // NavBar

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
              Eliminación de cuenta y datos -{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FitVerso
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
                FitVerso permite a los usuarios solicitar la eliminación de su
                cuenta y de los datos personales asociados en cualquier momento.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  1
                </span>
                Cómo solicitar la eliminación de tu cuenta
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para solicitar la eliminación de tu cuenta de FitVerso, sigue
                estos pasos: 1. Envía un correo electrónico a: 📧
                fitversosoporte@gmail.com 2. Usa como asunto: “Eliminación de
                cuenta FitVerso” 3. Incluye en el mensaje: El correo electrónico
                con el que te registraste en la app 4.(Opcional) Motivo de la
                solicitud Nuestro equipo procesará la solicitud en un plazo
                máximo de 30 días.
              </p>
            </section>
            {/* Datos que se eliminan */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  2
                </span>
                Datos que se eliminan
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Una vez confirmada la solicitud, se eliminarán permanentemente
                los siguientes datos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Cuenta de usuario</li>
                <li>Dirección de correo electrónico</li>
                <li>Perfil y avatar</li>
                <li>Progreso de entrenamiento</li>
                <li>Misiones, estadísticas y logros</li>
                <li>
                  Datos almacenados en Firebase Authentication y Firestore
                </li>
              </ul>
            </section>

            {/* Datos que pueden conservarse */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  3
                </span>
                Datos que pueden conservarse
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Algunos datos pueden conservarse de forma anonimizada o por
                obligación legal durante un periodo limitado:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Registros técnicos mínimos (logs de seguridad)</li>
                <li>
                  Datos necesarios para cumplir requisitos legales o prevenir
                  fraudes
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Estos datos no permiten identificar al usuario.
              </p>
            </section>

            {/* Contacto */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  4
                </span>
                Contacto
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tienes alguna duda sobre la eliminación de datos, puedes
                contactarnos en:{" "}
                <a
                  href="mailto:fitversosoporte@gmail.com"
                  className="text-primary hover:underline"
                >
                  📧 fitversosoporte@gmail.com
                </a>
              </p>
            </section>
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
