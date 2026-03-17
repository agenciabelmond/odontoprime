"use client"

import { MapPin } from "lucide-react"

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 
      bg-[#e0b76a] 
      text-black 
      py-2
      shadow-[0_0_8px_rgba(224,183,106,0.45)]
    ">
      <div className="container mx-auto flex items-center justify-center gap-2 px-4 text-sm">
        <MapPin className="h-4 w-4 text-black" />
        <span className="font-medium tracking-wide">
          Estrada dos Bandeirantes, 5172 - Curicica, Rio de Janeiro - RJ
        </span>
      </div>
    </div>
  )
}