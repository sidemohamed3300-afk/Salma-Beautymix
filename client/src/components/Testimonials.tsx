import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

import customer1 from "@assets/generated_images/testimonial_customer_photo_1.png";
import customer2 from "@assets/generated_images/testimonial_customer_photo_2.png";
import customer3 from "@assets/generated_images/testimonial_customer_photo_3.png";

const testimonials = [
  {
    id: 1,
    name: "فاطمة الحسن",
    location: "دبي، الإمارات",
    image: customer1,
    rating: 5,
    text: "جربت العديد من المنتجات الطبيعية من قبل، لكن خلطات عالم سلمه استثنائية حقاً. بشرتي لم تبدُ أفضل من قبل! قناع الورد للوجه هو المفضل لدي.",
  },
  {
    id: 2,
    name: "مريم أحمد",
    location: "الرياض، السعودية",
    image: customer2,
    rating: 5,
    text: "زيت الشعر حوّل شعري الجاف والتالف إلى خصلات ناعمة وحريرية. أتلقى الكثير من الإطراء الآن! أنصح الجميع بتجربته.",
  },
  {
    id: 3,
    name: "نور الدين",
    location: "القاهرة، مصر",
    image: customer3,
    rating: 5,
    text: "ما أحبه أكثر هو أن كل شيء طبيعي ومصنوع يدوياً. خدمة العملاء ممتازة أيضاً - يهتمون حقاً بعملائهم!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4">
            ماذا تقول عملاؤنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            انضمي لآلاف العملاء السعداء الذين يثقون بمنتجات الجمال الطبيعية لدينا
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 overflow-visible hover-elevate"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <div className="flex items-center gap-4 mb-4" dir="rtl">
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-muted-foreground italic" dir="rtl">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
