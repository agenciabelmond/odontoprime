"use client"

import Image from "next/image"

const images = [
  {
    src: "/consultorioprime.jpg",
    alt: "Consultório Odonto Prime",
  },
  {
    src: "/recepcao.jpg",
    alt: "Tecnologia moderna Odonto Prime",
  },
  {
    src: "/corredor.jpeg",
    alt: "Consultório sofisticado Odonto Prime",
  },
]

export function GallerySection() {
  return (
    <section className="bg-[#5C0D1B] py-16 sm:py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#F8F4EC] sm:text-4xl lg:text-5xl">
            Excelência em Cada Detalhe
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#F8F4EC]/85">
            Na{" "}
            <span className="text-[#F5C25C] font-semibold drop-shadow-[0_0_10px_rgba(245,194,92,0.7)]">
              Odonto Prime
            </span>
            , unimos tecnologia de ponta, conforto absoluto e um atendimento humanizado
            para transformar sua experiência odontológica.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(245,194,92,0.15)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay bordô */}
              <div className="absolute inset-0 bg-[#5C0D1B]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Glow dourado */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[#F5C25C]/50 transition duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}