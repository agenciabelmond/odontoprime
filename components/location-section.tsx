import { MapPin, Clock, Phone } from "lucide-react"

export function LocationSection() {
  return (
<section id="localizacao" className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
        {/* Container escuro interno */}
<div className="rounded-3xl bg-gradient-to-br from-[#111315] via-[#16181c] to-[#0f1113] shadow-2xl px-6 py-12 sm:px-10">          
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#e0b76a]">
              Localização
            </span>
       <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl text-balance drop-shadow-[0_0_8px_rgba(224,183,106,0.6)]">
 Conheça a Odonto Prime
</h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Foto */}
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src="\fotofachada.png"
                alt="Fachada da clinica Odonto Prime"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Informações */}
<div className="flex flex-col justify-center gap-8 lg:pr-14">              
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e0b76a]/10 text-[#e0b76a]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#e0b76a]">Endereço</h3>
                  <p className="mt-1 leading-relaxed text-gray-300">
                    Estrada dos Bandeirantes, 5172
                    <br />
                    Curicica, Rio de Janeiro - RJ
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e0b76a]/10 text-[#e0b76a]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#e0b76a]">
                    Horário de Funcionamento
                  </h3>
                  <p className="mt-1 leading-relaxed text-gray-300">
                    Segunda a Sexta: 9h as 18h
                    <br />
                    Sábado: 9h as 13h
                  </p>
                </div>
              </div>

              {/* Contato */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e0b76a]/10 text-[#e0b76a]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#e0b76a]">Contato</h3>
                  <p className="mt-1 leading-relaxed text-gray-300">
                    WhatsApp: (21) 96690-0630

                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:brightness-110 sm:text-lg"
              >
                AGENDAR UM HORÁRIO
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}