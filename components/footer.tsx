import { MapPin, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-[#5C0D1B] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5C25C]/80 p-2">
                <img
                  src="/images/tooth-icon.png"
                  alt="Logo Odonto Prime"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-lg font-bold tracking-tight">
                Odonto<span className="text-[#F5C25C]">Prime</span>
              </span>
            </a>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Referência em odontologia no Rio de Janeiro. Tecnologia de ponta
              e atendimento humanizado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F5C25C]">
              Links Rápidos
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Serviços", href: "#servicos" },
                { label: "Localização", href: "#localizacao" },
                { label: "Sobre Nós", href: "#sobre" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[#F5C25C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F5C25C]">
              Contato
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 text-[#F5C25C]" />
                (21) 96690-0630
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F5C25C]">
              Endereço
            </h4>
            <div className="mt-4 flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F5C25C]" />
              <span>
                Estrada dos Bandeirantes, 5172
                <br />
                Curicica, Rio de Janeiro - RJ
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/clinica_odonto_prime"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                aria-label="Instagram"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all group-hover:bg-[#F5C25C] group-hover:text-[#5C0D1B]">
                  <Instagram className="h-5 w-5" />
                </div>

                <span className="text-sm text-white/70 transition-colors group-hover:text-[#F5C25C]">
                  @clinica_odonto_prime
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            © 2026 Odonto Prime. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}