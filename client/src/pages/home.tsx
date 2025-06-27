import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MissionSection from "@/components/mission-section";
import BenefitsSection from "@/components/benefits-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";
import TestimonialsSection from "@/components/testimonials-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <BenefitsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
