import { MapPin, Clock, Phone } from "lucide-react"

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-[#1a0a0d] py-16 sm:py-20">
      <div className="container mx-auto px-4">
        
        {/* Container interno */}
        <div className="rounded-3xl 
          bg-gradient-to-br from-[#3a141a] via-[#4a1c22] to-[#2b0f14] 
          border border-[#d4af37]/20
          shadow-[0_0_40px_rgba(0,0,0,0.6)]
          px-6 py-12 sm:px-10">
          
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#d4af37]">
              Localização
            </span>

            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
              Conheça a Odonto Prime
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            
            {/* Foto */}
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/fotofachada.png"
                alt="Fachada da clinica Odonto Prime"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Informações */}
            <div className="flex flex-col justify-center gap-8 lg:pr-14">
              
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#d4af37]">Endereço</h3>
                  <p className="mt-1 leading-relaxed text-gray-300">
                    Estrada dos Bandeirantes, 5172
                    <br />
                    Curicica, Rio de Janeiro - RJ
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#d4af37]">
                    Horário de Funcionamento
                  </h3>
                  <p className="mt-1 leading-relaxed text-gray-300">
                    Segunda à Sexta: 9h às 18h
                    <br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>

              {/* Contato */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#d4af37]">Contato</h3>
                  <p className="mt-1 leading-relaxed text-gray-300">
                    WhatsApp: (21) 96690 - 0630
                  </p>
                </div>
              </div>

              {/* Botão */}
              <a
                href="https://wa.me/+555521966900630?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full 
                bg-[#d4af37] px-8 py-4 text-base font-semibold text-[#2b0f14] 
                shadow-lg shadow-[#d4af37]/30 
                transition-all duration-300 
                hover:scale-105 
                hover:shadow-[0_0_25px_rgba(212,175,55,0.9)] sm:text-lg"
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