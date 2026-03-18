"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { FaInstagram } from "react-icons/fa"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Pagamento", href: "#pagamento" },
  { label: "Serviços", href: "#servicos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
   <nav className="mt-11 lg:px-4 flex justify-center px-4 lg:px-6">
<div className="flex w-[92%] lg:w-auto lg:min-w-[900px] max-w-5xl items-center justify-between rounded-full bg-background/90 px-5 lg:px-8 py-3 lg:py-2 shadow-lg backdrop-blur-md border border-border">        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 p-1.5">
            <img
              src="/images/tooth-icon.png"
              alt="Odonto Prime - Dente"
              className="h-full w-full object-contain"
            />
          </div>

          <img
            src="/images/logo-text.png"
            alt="Odonto Prime"
            className="h-7 w-auto object-contain -mt-1"
          />
        </a>

{/* Desktop Nav + CTA */}
<div className="hidden lg:flex items-center gap-10">

  {/* Menu */}
  <ul className="flex items-center gap-10 flex-wrap">
    {navItems.map((item) => (
      <li key={item.href}>
        <a
          href={item.href}
          className="whitespace-nowrap text-sm font-medium text-foreground/70 transition-colors hover:text-gold-vivid"
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>

  {/* Botões */}
  <div className="flex items-center gap-2">
    
    {/* Instagram */}
    <a
      href="https://www.instagram.com/clinica_odonto_prime"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-all hover:bg-yellow-500 hover:text-white"
    >
      <FaInstagram className="h-5 w-5" />
    </a>

    {/* CTA */}
    <a
      href="https://wa.me/+5521966900630?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 rounded-full bg-gold-vivid px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
    >
      Agendar Consulta
    </a>

  </div>
</div>
        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-24 z-50 mx-4 rounded-2xl bg-background/95 p-6 shadow-xl backdrop-blur-lg border border-border lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-base font-medium text-foreground/80 transition-colors hover:text-gold-vivid"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

<div className="mt-6 flex items-center gap-3">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/clinica_odonto_prime"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-all hover:bg-yellow-500 hover:text-white"
  >
    <FaInstagram className="h-5 w-5" />
  </a>

  {/* CTA */}
  <a
    href="https://wa.me/+5521966900630?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 rounded-full bg-gold-vivid py-3 text-center text-sm font-semibold text-white transition-all hover:brightness-110"
  >
    Agendar Consulta
  </a>

</div>
        </div>
      )}
    </nav>
  )
}