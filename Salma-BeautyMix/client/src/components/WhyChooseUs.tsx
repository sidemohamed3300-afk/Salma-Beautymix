import { Card } from "@/components/ui/card";
import { Leaf, Heart, ShieldCheck, Star } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Leaf,
    title: "طبيعي 100%",
    description: "جميع منتجاتنا مصنوعة من مكونات عضوية نقية مستخرجة من الطبيعة بدون أي مواد كيميائية ضارة",
  },
  {
    id: 2,
    icon: Heart,
    title: "مصنوع بحب",
    description: "كل منتج يتم تحضيره يدوياً بعناية واهتمام بالتفاصيل لضمان أعلى جودة لبشرتك",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "آمن ومختبر",
    description: "تركيباتنا مختبرة بدقة وآمنة لجميع أنواع البشرة، بما في ذلك البشرة الحساسة",
  },
  {
    id: 4,
    icon: Star,
    title: "موثوق من العملاء",
    description: "آلاف العملاء السعداء يثقون بمنتجاتنا لروتين العناية بجمالهم اليومي",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4">
            لماذا تختارين عالم سلمه للخلطات؟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نؤمن بقوة الطبيعة لتحويل روتين جمالك
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="p-6 text-center overflow-visible hover-elevate"
              data-testid={`card-benefit-${benefit.id}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2" dir="rtl">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground" dir="rtl">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
