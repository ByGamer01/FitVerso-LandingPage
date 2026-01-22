import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CharacterSection } from "@/components/character-section"
import { QuestsSection } from "@/components/quests-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CharacterSection />
      <QuestsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
