import ProductCard from "./ProductCard";

import product1 from "@assets/5890925866039053339_120_1765276780634.jpg";
import product2 from "@assets/5890925866039053340_121_1765276780648.jpg";
import product3 from "@assets/5890925866039053341_121_1765276780649.jpg";
import product4 from "@assets/5890925866039053342_121_1765276780649.jpg";

const products = [
  {
    id: "1",
    name: "زيت الشعر بالأعشاب",
    description: "زيت الشعر الغني بالأعشاب هو مزيج طبيعي يجمع بين زيوت مختلفة وأعشاب لتعزيز صحة الشعر وفروة الرأس. لتكثيف الشعر ونموه وعلاج التساقط",
    image: product1,
    category: "العناية بالشعر",
  },
  {
    id: "2",
    name: "صابونية الورد - كريم الجسم - مقشر الأعشاب",
    description: "مجموعة متكاملة للعناية بالجسم تشمل صابونية الورد الطبيعية، كريم الجسم المرطب، ومقشر الأعشاب للحصول على بشرة ناعمة ومشرقة",
    image: product2,
    category: "العناية بالجسم",
  },
  {
    id: "3",
    name: "مرطب اليدين والقدمين - كريم الجسم",
    description: "مرطب طبيعي مصمم خصيصاً لترطيب وتنعيم اليدين والقدمين، بالإضافة لكريم الجسم الفاخر للعناية اليومية",
    image: product3,
    category: "العناية بالبشرة",
  },
  {
    id: "4",
    name: "مجموعة الخلطات الطبيعية",
    description: "تشكيلة متنوعة من الخلطات الطبيعية المصنوعة يدوياً بعناية فائقة من أجود المكونات الطبيعية",
    image: product4,
    category: "خلطات طبيعية",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4">
            منتجاتنا الطبيعية
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            منتجات مصنوعة بحب باستخدام أجود المكونات الطبيعية لروتين جمالك
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
