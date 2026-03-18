const services = [
  {
    name: "Ortodontia",
    description:
      "Aparelhos fixos e alinhadores invisíveis para um sorriso perfeito e alinhado.",
    image: "/ortodontia.png",
    whatsapp: "https://wa.me/+555521966900630?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20ortodontia."
  },
  {
    name: "Implante",
    description:
      "Implantes de ultima geração com segurança, conforto e resultado natural.",
    image: "/implanteprime.png",
    whatsapp: "https://wa.me/+555521966900630?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20implantes"
  },
  {
    name: "Clareamento",
    description:
      "Clareamento a laser e caseiro para dentes mais brancos e saudáveis.",
    image: "/clareamento-dental.png",
    whatsapp: "https://wa.me/+5521966900630?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20clareamento"
  },
  {
    name: "Tratamento Clínico",
    description:
      "Consultas, limpezas e tratamentos preventivos para toda a familia.",
    image: "/clinico.png",
    whatsapp: "https://wa.me/+5521966900630?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20tratamentos%20cl%C3%ADnicos."
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="bg-gradient-to-br from-[#111315] via-[#16181c] to-[#0f1113] pt-16 pb-24 sm:pt-20 sm:pb-28"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#e0b76a]">
            Especialidades
          </span>

          <h2 className="mt-3 font-[Montserrat] font-normal text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            {"Nossos Principais "}
            <span className="text-[#e0b76a] drop-shadow-[0_0_12px_rgba(224,183,106,0.8)]">
              Atendimentos
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white">
            Unimos inovação, precisão clínica e um atendimento personalizado
            para entregar resultados naturais, seguros e à altura do seu melhor sorriso.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative overflow-hidden rounded-3xl bg-[#16181c]
              transition-all duration-500
              -translate-y-2 shadow-[0_0_30px_rgba(224,183,106,0.15)]
              hover:-translate-y-4 hover:scale-[1.02]
              hover:shadow-[0_0_50px_rgba(224,183,106,0.35)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/5 opacity-20 transition-opacity duration-500 group-hover:opacity-40" />
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border-2 border-[#e0b76a]/40 transition-all duration-500 group-hover:border-[#e0b76a]" />

              <div className="relative h-48 overflow-hidden sm:h-52 rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-700 scale-105 group-hover:scale-115"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>

                <a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full bg-[#e0b76a] px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(224,183,106,0.9)] hover:scale-105"
                >
                  Agendar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}