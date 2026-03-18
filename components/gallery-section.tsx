"use client"

const images = [
  {
    src: "\consultorioprime.jpg",
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
    <section className="bg-gradient-to-br from-[#111315] via-[#16181c] to-[#0f1113] py-16 sm:py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Excelência em Cada Detalhe
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white">
            Na{" "}
            <span className="text-[#e0b76a] font-semibold drop-shadow-[0_0_10px_rgba(224,183,106,0.7)]">
              Odonto Prime
            </span>
            , unimos tecnologia de ponta, conforto absoluto e um atendimento humanizado 
            para transformar sua experiência odontológica.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}