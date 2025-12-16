import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  category?: string;
}

const WHATSAPP_LINK = "https://wa.me/36770104";

export default function ProductCard({
  id,
  name,
  description,
  image,
  category,
}: ProductCardProps) {
  const handleOrderNow = () => {
    const message = encodeURIComponent(
      `مرحباً، أنا مهتم بمنتج "${name}" من عالم سلمه للخلطات. هل يمكنك إعطائي المزيد من التفاصيل؟`
    );
    window.open(`${WHATSAPP_LINK}?text=${message}`, "_blank");
  };

  return (
    <Card
      className="group overflow-visible flex flex-col hover-elevate"
      data-testid={`card-product-${id}`}
    >
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-3" dir="rtl">
        {category && (
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {category}
          </span>
        )}
        <h3
          className="font-semibold text-lg line-clamp-2 text-foreground"
          data-testid={`text-product-name-${id}`}
        >
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
          {description}
        </p>
        <Button
          onClick={handleOrderNow}
          className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold uppercase tracking-wide border-[#1da851]"
          data-testid={`button-order-${id}`}
        >
          <SiWhatsapp className="h-5 w-5 ml-2" />
          اطلب الآن
        </Button>
      </div>
    </Card>
  );
}
