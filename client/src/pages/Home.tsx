import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/ProductGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_LINK = "https://wa.me/36770104";

export default function Home() {
  const handleWhatsAppFab = () => {
    const message = encodeURIComponent(
      "مرحباً! أريد معرفة المزيد عن منتجات عالم سلمه للخلطات."
    );
    window.open(`${WHATSAPP_LINK}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroCarousel />
        <ProductGrid />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />

      <Button
        size="lg"
        onClick={handleWhatsAppFab}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg border-[#1da851] md:hidden"
        data-testid="button-whatsapp-fab"
      >
        <SiWhatsapp className="h-6 w-6" />
      </Button>
    </div>
  );
}
