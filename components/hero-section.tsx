"use client"

import { MessageCircle, Star } from "lucide-react"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
})

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20"
    >
      {/* Background Dark Premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f11] via-[#141618] to-[#0a0b0c]">
        
        {/* Glow dourado principal */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(201,162,74,0.18),transparent)]" />

        {/* Glow secundário mais suave */}
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#c9a24a]/10 blur-[140px]" />

        {/* Luz suave lateral */}
        <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />

        {/* Grid ultra discreto */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] items-center px-4">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Left - Content */}
          <div className="lg:order-1">
            
            {/* Title */}
            <h1
              className={`${montserrat.className} text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance font-normal`}
            >
              {"Referência em "}
              <span className="text-[#c9a24a] drop-shadow-[0_0_12px_rgba(201,162,74,0.5)]">
                Odontologia
              </span>
              {" no Rio de Janeiro"}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              {"Odonto Prime nasceu de uma nova visão: transformar o cuidado odontológico em uma experiência de alto padrão, unindo tecnologia, excelência e atendimento humanizado."}
            </p>

            {/* CTA */}
            <div className="mt-8">
<a
  href="https://wa.me/55"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:brightness-110 hover:shadow-emerald-500/50 sm:text-lg"
>
  <MessageCircle className="h-5 w-5" />
  Falar com o especialista
</a>
            </div>

            {/* Stars + satisfied patients */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#c9a24a] text-[#c9a24a]"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-white">
                +10 mil pacientes satisfeitos
              </span>
            </div>
          </div>

          {/* Right - Clinic Image */}
          <div className="relative lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40 mt-4 lg:mt-0">
              <img
                src="sorrisosite.png"
                alt="Interior moderno da clínica odontológica Odonto Prime"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border border-[#c9a24a]/30" />
          </div>

        </div>
      </div>
    </section>
  )
}