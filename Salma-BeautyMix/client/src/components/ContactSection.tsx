import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";
import { Clock, MapPin, Mail } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/36770104";

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "مرحباً! أريد معرفة المزيد عن منتجات عالم سلمه للخلطات."
    );
    window.open(`${WHATSAPP_LINK}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4">
            تواصلي معنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            هل لديك أسئلة؟ يسعدنا التواصل معك! راسلينا على واتساب للرد السريع.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 md:p-8 overflow-visible">
            <h3 className="font-semibold text-xl text-foreground mb-6" dir="rtl">
              معلومات التواصل
            </h3>
            <div className="space-y-6" dir="rtl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">ساعات العمل</h4>
                  <p className="text-muted-foreground text-sm">
                    السبت - الخميس: 9:00 صباحاً - 9:00 مساءً
                  </p>
                  <p className="text-muted-foreground text-sm">
                    الجمعة: 2:00 مساءً - 9:00 مساءً
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">الموقع</h4>
                  <p className="text-muted-foreground text-sm">
                    نخدم العملاء في جميع أنحاء المنطقة
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">البريد الإلكتروني</h4>
                  <p className="text-muted-foreground text-sm">
                    info@alamsalma.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border" dir="rtl">
              <h4 className="font-medium text-foreground mb-4">تابعينا</h4>
              <div className="flex gap-3 flex-wrap">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => console.log("Instagram clicked")}
                  data-testid="button-instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => console.log("Facebook clicked")}
                  data-testid="button-facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-[#1da851]"
                  onClick={handleWhatsAppClick}
                  data-testid="button-whatsapp-social"
                >
                  <SiWhatsapp className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/10 flex flex-col items-center justify-center text-center overflow-visible">
            <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center mb-6">
              <SiWhatsapp className="h-10 w-10 text-white" />
            </div>
            <h3 className="font-semibold text-2xl text-foreground mb-4" dir="rtl">
              تواصلي معنا عبر واتساب
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm" dir="rtl">
              أسرع طريقة للتواصل! أرسلي لنا رسالة وسنرد خلال دقائق أثناء ساعات العمل.
            </p>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold uppercase tracking-wide px-8 border-[#1da851]"
              data-testid="button-whatsapp-cta"
            >
              <SiWhatsapp className="h-5 w-5 ml-2" />
              ابدئي المحادثة الآن
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
