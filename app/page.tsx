//JMJ::*Se elimina import de ArticlesSection no utilizado*
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services'
import { FAQSection } from '@/components/sections/faq'
import { ContactSection } from '@/components/sections/contact'
import { LocationSection } from '@/components/sections/location'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Sidebar on desktop, hamburger on mobile */}
      <Navigation />
      
      {/* Main Content - with left margin for desktop sidebar */}
      <main className="lg:ml-72 pt-16 lg:pt-0">
        <HeroSection />
        {/*JMJ::*Se oculta la sección Nosotros de la página principal*/}
        {/* <AboutSection /> */}
        <ServicesSection />
        {/*JMJ::*Se oculta la sección Artículos de la página principal*/}
        {/* <ArticlesSection /> */}
        {/*JMJ::*Se oculta la sección Testimonios de la página principal*/}
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <ContactSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <footer className="lg:ml-72">
        <Footer />
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
