import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "./ThemeProvider";
import { Menu, Moon, Sun } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImg from "@assets/logoo_1765276736175.jpg";

const navItems = [
  { name: "الرئيسية", href: "#home" },
  { name: "المنتجات", href: "#products" },
  { name: "لماذا نحن", href: "#why-us" },
  { name: "آراء العملاء", href: "#reviews" },
  { name: "تواصل معنا", href: "#contact" },
];

const WHATSAPP_LINK = "https://wa.me/36770104";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <a
            href="#home"
            className="flex items-center gap-2 flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            data-testid="link-home-logo"
          >
            <img src={logoImg} alt="عالم سلمه للخلطات" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-1" dir="rtl" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                data-testid={`nav-${item.name}`}
              >
                {item.name}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
              data-testid="link-whatsapp-header"
            >
              <Button
                variant="default"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-[#1da851]"
              >
                <SiWhatsapp className="h-4 w-4 ml-2" />
                واتساب
              </Button>
            </a>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-4 mt-8" dir="rtl">
                  <div className="flex items-center gap-2 mb-4">
                    <img src={logoImg} alt="عالم سلمه للخلطات" className="h-10 w-auto" />
                  </div>
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => scrollToSection(item.href)}
                      data-testid={`mobile-nav-${item.name}`}
                    >
                      {item.name}
                    </Button>
                  ))}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">
                      <SiWhatsapp className="h-4 w-4 ml-2" />
                      تواصل عبر واتساب
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
