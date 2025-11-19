import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loadSettings } from "@/lib/settings";

const WhatsAppButton = () => {
  const settings = loadSettings();
  const handleWhatsAppClick = () => {
    const phoneNumber = settings.whatsapp;
    const message = "Hi, I'm interested in your elevator services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] p-0 shadow-xl hover:bg-[#20BA5A]"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;