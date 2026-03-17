"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Pagamento", href: "#pagamento" },
  { label: "Servicos", href: "#servicos" },
  { label: "Localizacao", href: "#localizacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="mt-10 flex justify-center px-4">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full bg-background/90 px-6 lg:px-8 py-3 shadow-lg backdrop-blur-md border border-border">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-vivid p-1.5">
            <img
              src="/images/tooth-icon.png"
              alt="Odonto Prime - Dente"
              className="h-full w-full object-contain"
            />
          </div>
          <img
            src="/images/logo-text.png"
            alt="Odonto Prime"
            className="h-7 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 flex-wrap">
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

        {/* CTA Desktop */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex shrink-0 rounded-full bg-gold-vivid px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          Agendar Consulta
        </a>

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

          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full rounded-full bg-gold-vivid py-3 text-center text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  )
}