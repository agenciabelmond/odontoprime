"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/500000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-110 hover:shadow-emerald-500/50"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}