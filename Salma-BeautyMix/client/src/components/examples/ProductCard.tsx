import ProductCard from "../ProductCard";
import hairOilImg from "@assets/generated_images/hair_oil_product_photo.png";

export default function ProductCardExample() {
  return (
    <div className="max-w-xs">
      <ProductCard
        id="example-1"
        name="Argan Hair Oil"
        description="Premium Moroccan argan oil blend that nourishes and strengthens hair from root to tip."
        image={hairOilImg}
        category="Hair Care"
      />
    </div>
  );
}
