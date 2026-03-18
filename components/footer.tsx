import { MapPin, Phone, Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-charcoal py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              
              {/* Logo Image */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-vivid p-2">
                <img
                  src="/images/tooth-icon.png"
                  alt="Logo Odonto Prime"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-lg font-bold tracking-tight">
                Odonto<span className="text-gold-vivid">Prime</span>
              </span>
            </a>

            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Referência em odontologia no Rio de Janeiro. Tecnologia de ponta
              e atendimento humanizado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-vivid">
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
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-gold-vivid"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-vivid">
              Contato
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4 text-gold-vivid" />
                ( 21 ) 9669 - 00630
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-vivid">
              Endereço
            </h4>
            <div className="mt-4 flex items-start gap-2 text-sm text-primary-foreground/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-vivid" />
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
    {/* Ícone */}
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-all group-hover:bg-gold-vivid group-hover:text-white">
      <Instagram className="h-5 w-5" />
    </div>

    {/* Arroba */}
    <span className="text-sm text-primary-foreground/60 transition-colors group-hover:text-gold-vivid">
      @clinica_odonto_prime
    </span>
  </a>
</div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            © 2026 Odonto Prime. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}