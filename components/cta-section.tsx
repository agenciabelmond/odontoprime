"use client"

import { FaWhatsapp } from "react-icons/fa"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a0a0d] py-20 sm:py-24">
      
      {/* Glow decorativo */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl 
          bg-gradient-to-br from-[#3a141a] via-[#4a1c22] to-[#2b0f14]
          border border-[#d4af37]/20
          px-8 py-14 text-center shadow-[0_0_40px_rgba(0,0,0,0.6)]
          sm:px-16 sm:py-20">
          
          <h2 className="font-serif text-3xl font-bold text-white 
            drop-shadow-[0_0_10px_rgba(212,175,55,0.6)] 
            sm:text-4xl md:text-5xl">
            Pronto para transformar o seu sorriso?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 sm:text-lg">
            Agende sua avaliação e descubra o plano de tratamento ideal para você.
            Nossa equipe está pronta para oferecer uma experiência de cuidado e excelência.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            
            <a
              href="https://wa.me/+555521966900630?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full 
              bg-[#d4af37] px-8 py-4 text-base font-semibold text-[#1a0a0d]
              shadow-lg shadow-[#d4af37]/30
              transition-all duration-300 
              hover:brightness-110 hover:shadow-[0_0_20px_#d4af37]
              sm:text-lg"
            >
              <FaWhatsapp className="h-9 w-9" />
              Falar com o Especialista
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}