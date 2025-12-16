import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";
import logoImg from "@assets/logoo_1765276736175.jpg";

const WHATSAPP_LINK = "https://wa.me/36770104";

const footerLinks = {
  products: [
    { name: "العناية بالشعر", href: "#products" },
    { name: "العناية بالبشرة", href: "#products" },
    { name: "العناية بالجسم", href: "#products" },
    { name: "خلطات طبيعية", href: "#products" },
  ],
  company: [
    { name: "من نحن", href: "#why-us" },
    { name: "آراء العملاء", href: "#reviews" },
    { name: "تواصل معنا", href: "#contact" },
  ],
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" dir="rtl">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="عالم سلمه للخلطات" className="h-14 w-auto" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              اكتشفي جمال الطبيعة مع منتجاتنا العضوية المصنوعة يدوياً. مصنوعة بحب، مصممة لبشرة مشرقة.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#20bd5a] transition-colors"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <button
                onClick={() => console.log("Instagram clicked")}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
                data-testid="button-footer-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </button>
              <button
                onClick={() => console.log("Facebook clicked")}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
                data-testid="button-footer-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">المنتجات</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.name}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.name}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm" dir="rtl">
            &copy; {new Date().getFullYear()} عالم سلمه للخلطات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
