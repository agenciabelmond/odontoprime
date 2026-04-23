"use client"

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/+5521966416593?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-110 hover:shadow-emerald-500/50"    >
      <FaWhatsapp className="h-10 w-10" />
    </a>
  )
}