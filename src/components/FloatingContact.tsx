import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  return (
    <div className="fixed right-5 bottom-20 flex flex-col gap-4 z-50">

      {/* CALL BUTTON */}
      <a
        href="tel:+971501234567"
        className="
        w-14 h-14 flex items-center justify-center rounded-full
        bg-blue-600 text-white shadow-lg
        transition-all duration-300 ease-in-out
        hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
        hover:brightness-110
        hover:-translate-y-1
        "
      >
        <Phone size={22} />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="
        w-14 h-14 flex items-center justify-center rounded-full
        bg-green-500 text-white shadow-lg
        transition-all duration-300 ease-in-out
        hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]
        hover:brightness-110
        hover:-translate-y-1
        "
      >
        <MessageCircle size={22} />
      </a>

    </div>
  );
};

export default FloatingContact;
