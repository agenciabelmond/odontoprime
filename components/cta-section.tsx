"use client"

import { MessageCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      
      {/* Decorative shapes */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#e0b76a]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#e0b76a]/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-[#111315] via-[#16181c] to-[#0f1113] px-8 py-14 text-center shadow-2xl sm:px-16 sm:py-20">
          
          <h2 className="relative font-serif text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(224,183,106,0.7)] sm:text-4xl md:text-5xl">
  Pronto para transformar o seu sorriso?
</h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Agende sua avaliação e descubra o plano de tratamento ideal para você.
            Nossa equipe está pronta para oferecer uma experiência de cuidado e excelência.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:brightness-110 sm:text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com o Especialista
            </a>

            <a
              href="tel:+552133333333"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-[#e0b76a] hover:text-[#e0b76a] sm:text-lg"
            >
              Ligar Agora
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}