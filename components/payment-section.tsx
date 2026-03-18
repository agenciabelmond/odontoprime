"use client"

import { MessageCircle } from "lucide-react"
import { Montserrat } from "next/font/google"
import { Check } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

function VisaIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-auto sm:h-8" fill="none">
      <rect width="48" height="32" rx="4" fill="#1A1F71" />
      <path d="M19.5 21h-3l1.9-11.5h3L19.5 21zm8.3-11.5l-2.8 7.9-.3-1.6-1-5.2s-.1-1.1-1.4-1.1h-4.8l-.1.3s1.5.3 3.2 1.4l2.7 10.3h3.1l4.7-12h-3.3zm12.4 11.5h2.7L40.5 9.5h-2.4c-1.1 0-1.3.8-1.3.8l-4.4 11.2h3.1l.6-1.7h3.8l.3 1.7zm-3.3-4l1.6-4.3.9 4.3h-2.5zM28.3 12.6l.4-2.4s-1.3-.5-2.6-.5c-1.4 0-4.8.6-4.8 3.7 0 2.9 4 2.9 4 4.4s-3.6 1.2-4.8.3l-.4 2.5s1.3.7 3.4.7c2 0 4.9-1 4.9-3.8s-4-3.2-4-4.4 2.8-1.1 3.9-.5z" fill="white" />
    </svg>
  )
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-auto sm:h-8" fill="none">
      <rect width="48" height="32" rx="4" fill="#252525" />
      <circle cx="19" cy="16" r="8" fill="#EB001B" />
      <circle cx="29" cy="16" r="8" fill="#F79E1B" />
      <path d="M24 10.3a8 8 0 0 1 0 11.4 8 8 0 0 1 0-11.4z" fill="#FF5F00" />
    </svg>
  )
}

function EloIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-auto sm:h-8" fill="none">
      <rect width="48" height="32" rx="4" fill="#000" />
      <text x="12" y="20" fill="#FFCB05" fontWeight="bold" fontSize="14">elo</text>
    </svg>
  )
}

function PixIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-auto sm:h-8" fill="none">
      <rect width="48" height="32" rx="4" fill="#32BCAD" />
      <path d="M29.4 11.6l-3.8 3.8a.9.9 0 0 1-1.2 0l-3.8-3.8a2.7 2.7 0 0 0-3.8 0L14 14.4l3.6 3.6a2.7 2.7 0 0 0 3.8 0l3.8-3.8a.9.9 0 0 1 1.2 0l3.8 3.8a2.7 2.7 0 0 0 3.8 0l2.8-2.8-2.8-2.8a2.7 2.7 0 0 0-3.8 0z" fill="white" />
    </svg>
  )
}

export function PaymentSection() {
  return (
    <section id="pagamento" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-[#111315] via-[#16181c] to-[#0f1113] shadow-2xl">
          <div className="px-6 py-10 sm:px-12 sm:py-14 text-center">

            {/* Título */}
<h2
  className={`${montserrat.className} text-3xl font-semibold text-white sm:text-4xl lg:text-5xl`}
>
  Pagamento facilitado na <br />

  <span className="text-[#e0b76a] drop-shadow-[0_0_10px_rgba(224,183,106,0.7)]">
    Odonto Prime
  </span>
</h2>

            {/* Bandeiras */}
           <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">

  <img
    src="/visa.png"
    alt="Visa"
    className="h-7 w-auto sm:h-8 object-contain"
  />

  <img
    src="/mastercard.jpg"
    alt="Mastercard"
    className="h-7 w-auto sm:h-8 object-contain"
  />

  <img
    src="/elo.jpg"
    alt="Elo"
    className="h-7 w-auto sm:h-8 object-contain"
  />

  <img
    src="/pix2.jpeg"
    alt="Pix"
    className="h-7 w-auto sm:h-8 object-contain"
  />

</div>
            {/* Benefícios */}
           <div className={`${montserrat.className} mt-8 space-y-4 text-base font-medium text-white/80 sm:text-lg`}>
  
  <div className="flex items-center justify-center gap-3">
    <Check className="h-5 w-5 text-emerald-500 shrink-0" />
    <p>Desconto exclusivo para pagamento à vista</p>
  </div>

  <div className="flex items-center justify-center gap-3">
    <Check className="h-5 w-5 text-emerald-500 shrink-0" />
    <p>Parcele seu tratamento em até 12x sem juros</p>
  </div>

  <div className="flex items-center justify-center gap-3">
    <Check className="h-5 w-5 text-emerald-500 shrink-0" />
    <p>Financiamento rápido e sem burocracia</p>
  </div>

</div>
            {/* CTA */}
          <div className="mt-8">
           <a
  href="https://wa.me/+5521966900630?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:brightness-110 sm:text-lg"
>
  <FaWhatsapp className="h-9 w-9 shrink-0" />
  Conversar com a nossa equipe
</a>
          </div>

          </div>
        </div>
      </div>
    </section>
  )
}