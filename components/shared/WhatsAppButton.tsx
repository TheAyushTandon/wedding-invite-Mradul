import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phone: string;
  message: string;
  className?: string;
}

export function WhatsAppButton({ phone, message, className }: WhatsAppButtonProps) {
  const cleaned = phone.replace(/\s+/g, "").replace("+", "");
  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${cleaned}?text=${encoded}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className || ""}`}
      aria-label={`Chat on WhatsApp`}
    >
      <MessageCircle size={14} />
      WhatsApp
    </a>
  );
}
