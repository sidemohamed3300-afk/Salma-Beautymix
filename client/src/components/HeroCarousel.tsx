import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroBanner1 from "@assets/generated_images/hero_banner_beauty_products.png";
import heroBanner2 from "@assets/generated_images/hero_banner_natural_mixtures.png";
import heroBanner3 from "@assets/generated_images/hero_banner_skincare_model.png";

const slides = [
  {
    id: 1,
    image: heroBanner1,
    title: "أساسيات الجمال الطبيعي",
    subtitle: "اكتشفي خلطاتنا الجمالية المصنوعة يدوياً من مكونات طبيعية نقية",
    cta: "تسوقي الآن",
  },
  {
    id: 2,
    image: heroBanner2,
    title: "خلطات طبيعية فاخرة",
    subtitle: "تركيبات متميزة لبشرة مشرقة وصحية",
    cta: "استكشفي المجموعة",
  },
  {
    id: 3,
    image: heroBanner3,
    title: "تألقي بشكل طبيعي",
    subtitle: "حولي روتين العناية ببشرتك مع أجود المكونات الطبيعية",
    cta: "عرض المنتجات",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl mr-auto" dir="rtl">
                <h1
                  className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                  data-testid={`text-hero-title-${slide.id}`}
                >
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  onClick={scrollToProducts}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold uppercase tracking-wide"
                  data-testid="button-hero-cta"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
        data-testid="button-hero-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
        data-testid="button-hero-next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            data-testid={`button-hero-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
