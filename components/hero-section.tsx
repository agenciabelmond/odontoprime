"use client"

import { Star } from "lucide-react"
import { Montserrat } from "next/font/google"
import { FaWhatsapp } from "react-icons/fa"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
})

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#5C0D1B]"
    >
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] items-center px-4">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Conteúdo esquerdo */}
          <div className="lg:order-1">
            <h1
              className={`${montserrat.className} text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-tight text-[#F8F4EC]`}
            >
              {"Referência em "}
              <span className="text-[#F5C25C]">
                Odontologia
              </span>
              {" no Rio de Janeiro"}
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-[#F8F4EC]/85">
              {"Odonto Prime nasceu de uma nova visão: transformar o cuidado odontológico em uma experiência de alto padrão, unindo tecnologia, excelência e atendimento humanizado."}
            </p>

            {/* Botão CTA */}
            <div className="mt-8">
<a
  href="https://wa.me/+5521966416593?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-full bg-[#F5C25C] px-8 py-4 text-base font-semibold text-[#5C0D1B] shadow-md shadow-black/20 transition-all duration-300 hover:shadow-[0_0_20px_#F5C25C] hover:brightness-125 sm:text-lg"
>
  <FaWhatsapp className="h-8 w-8" />
  Falar com o especialista
</a>
            </div>

            {/* Avaliação */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#F5C25C] text-[#F5C25C]"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-[#F8F4EC]">
                +10 mil pacientes satisfeitos
              </span>
            </div>
          </div>

          {/* Imagem da clínica */}
          <div className="relative lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-black/20 mt-4 lg:mt-0">
              <img
                src="fotomonique2.jpeg"
                alt="Interior moderno da clínica odontológica Odonto Prime"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px] rounded-3xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}