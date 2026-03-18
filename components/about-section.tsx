export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Dark Container */}
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#111315] via-[#16181c] to-[#0f1113] shadow-2xl px-8 py-12 sm:px-12 sm:py-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="\logoescada.png"
                alt="Equipe Odonto Prime"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold-vivid">
                Sobre Nós
              </span>

              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                Cuidando de sorrisos com dedicação e excelência
              </h2>

              <p className="mt-6 leading-relaxed text-white/70">
                Na Odonto Prime, acreditamos que odontologia é sobre cuidado, confiança e excelência.
                Entregamos experiência, atenção e resultados que realmente fazem diferença.
              </p>

              <p className="mt-4 leading-relaxed text-white/70">
                Por isso, trabalhamos com planejamento personalizado, tecnologia e um atendimento que valoriza pessoas acima de tudo. 
                Nosso compromisso é simples: oferecer valor, qualidade e um sorriso que reflita segurança.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-gold-vivid">+15</p>
                  <p className="mt-1 text-sm text-white/50">
                    Profissionais especializados
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-gold-vivid">+5 mil</p>
                  <p className="mt-1 text-sm text-white/50">
                    Procedimentos realizados
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}