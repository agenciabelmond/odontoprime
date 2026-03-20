"use client"

import { Montserrat } from "next/font/google"
import { Check } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function PaymentSection() {
  return (
    <section id="pagamento" className="py-12 sm:py-16 bg-[#1a0a0d]">
      <div className="container mx-auto px-4">
        
        <div className="mx-auto max-w-5xl rounded-3xl 
          bg-gradient-to-br from-[#3a141a] via-[#4a1c22] to-[#2b0f14]
          border border-[#d4af37]/20
          shadow-[0_0_40px_rgba(0,0,0,0.6)]">

          <div className="px-6 py-10 sm:px-12 sm:py-14 text-center">

            {/* Título */}
            <h2
              className={`${montserrat.className} text-3xl font-semibold text-white sm:text-4xl lg:text-5xl`}
            >
              Pagamento facilitado na <br />
              <span className="text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]">
                Odonto Prime
              </span>
            </h2>

            {/* Bandeiras */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <img src="/visa.png" alt="Visa" className="h-7 sm:h-8 opacity-90" />
              <img src="/mastercard.jpg" alt="Mastercard" className="h-7 sm:h-8 opacity-90" />
              <img src="/elo.jpg" alt="Elo" className="h-7 sm:h-8 opacity-90" />
              <img src="/pix2.jpeg" alt="Pix" className="h-7 sm:h-8 opacity-90" />
            </div>

            {/* Benefícios */}
            <div className={`${montserrat.className} mt-8 space-y-4 text-base font-medium text-gray-200 sm:text-lg`}>
              
              <div className="flex items-center justify-center gap-3">
                <Check className="h-5 w-5 text-[#d4af37]" />
                <p>Desconto exclusivo para pagamento à vista</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Check className="h-5 w-5 text-[#d4af37]" />
                <p>Parcele seu tratamento em até 12x sem juros</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Check className="h-5 w-5 text-[#d4af37]" />
                <p>Financiamento rápido e sem burocracia</p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/+5521966900630?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full 
                bg-[#d4af37] px-8 py-4 text-base sm:text-lg font-semibold text-[#2b0f14] 
                shadow-md shadow-[#d4af37]/40 
                transition-all duration-300 
                hover:scale-105 
                hover:shadow-[0_0_25px_rgba(212,175,55,0.9)]"
              >
                <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
                Conversar com a nossa equipe
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}