import { Send, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-4">
        <a href="#telegram" className="social-button">
          <Send className="w-6 h-6" />
          ТЕЛЕГРАММ
        </a>
        <a href="#whatsapp" className="social-button">
          <Phone className="w-6 h-6" />
          WHATSAPP
        </a>
        <a href="#vk" className="social-button">
          <MessageSquare className="w-6 h-6" />
          ВКОНТАКТЕ
        </a>
        <a href="tel:+1234567890" className="social-button">
          <Phone className="w-6 h-6" />
          ТЕЛЕФОН
        </a>
      </div>
    </footer>
  );
};

export default Footer;