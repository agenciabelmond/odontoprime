import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PaymentSection } from "@/components/payment-section"
import { ServicesSection } from "@/components/services-section"
import { LocationSection } from "@/components/location-section"
import { GallerySection } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <PaymentSection />
      <ServicesSection />
      <LocationSection />
      <GallerySection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
