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
    <nav className="w-full bg-[#5C0D1B] shadow-lg fixed top-0 z-50">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5C25C]/80 p-2">
            <img
              src="/images/tooth-icon.png"
              alt="Odonto Prime - Dente"
              className="h-full w-full object-contain rounded-full"
            />
          </div>

          <span className="text-white text-lg font-sans font-semibold select-none">
            Odonto Prime
          </span>
        </a>

        {/* Desktop Nav + CTA */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-[#F5C25C]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Instagram em dourado */}
            <a
              href="https://www.instagram.com/clinica_odonto_prime"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center text-[#F5C25C] transition-all hover:text-white"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

            {/* CTA */}
            <a
              href="https://wa.me/+5521966416593?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 rounded-full bg-[#F5C25C] px-5 py-2.5 text-sm font-semibold text-[#5C0D1B] transition-all hover:brightness-110"
            >
              Agendar Consulta
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="w-full bg-[#5C0D1B] lg:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-base font-medium text-white transition-colors hover:text-[#F5C25C]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 px-6 pb-4">
            {/* Instagram em dourado */}
            <a
              href="https://www.instagram.com/clinica_odonto_prime"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center text-[#F5C25C] transition-all hover:text-white"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

            {/* CTA */}
            <a
              href="https://wa.me/+5521966416593?text=%5BN%C3%83O%20APAGAR%5DOl%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#F5C25C] py-3 text-center text-sm font-semibold text-[#5C0D1B] transition-all hover:brightness-110"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}